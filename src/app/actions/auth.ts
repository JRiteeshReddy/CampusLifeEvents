'use server';

import { getGoogleSheet } from '@/lib/google-sheets';
import { createSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required.' };
  }

  let redirectPath = '';

  try {
    const doc = await getGoogleSheet();
    // Use 'Users' sheet, fallback to the first sheet if not named explicitly
    const sheet = doc.sheetsByTitle['Users'] || doc.sheetsByIndex[0];
    
    if (!sheet) {
      return { error: 'Database configuration error: Sheet not found.' };
    }

    const rows = await sheet.getRows();
    const userRow = rows.find(r => r.get('Email') === email);

    if (!userRow) {
      return { error: 'Invalid email credentials. Account not found.' };
    }

    const role = userRow.get('Role')?.toLowerCase();
    const storedPassword = userRow.get('Password');

    if (!storedPassword || storedPassword.trim() === '') {
      // First time login - set password
      const hashedPassword = await bcrypt.hash(password, 10);
      userRow.set('Password', hashedPassword);
      await userRow.save();
    } else {
      // Subsequent logins - verify password
      const isMatch = await bcrypt.compare(password, storedPassword);
      if (!isMatch) {
        return { error: 'Invalid password.' };
      }
    }

    // Determine specific club name if role is club (assuming it might be stored in a 'Name' column)
    const clubName = role === 'club' ? (userRow.get('Name') || 'Unknown Club') : undefined;

    // Create session
    await createSession({ email, role, club: clubName });

    // Determine where to redirect
    redirectPath = role === 'campus_life' ? '/campus-life' : '/club';

  } catch (error: any) {
    console.error('Login error:', error);
    return { error: error.message || 'An unexpected error occurred during login.' };
  }

  // Redirect must be outside try-catch
  if (redirectPath) {
    redirect(redirectPath);
  }
}
