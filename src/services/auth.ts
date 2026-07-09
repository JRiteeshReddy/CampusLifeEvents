import bcrypt from 'bcryptjs';

export interface AuthUser {
  email: string;
  role: 'CAMPUS_LIFE' | 'CLUB';
  club?: string;
  status: 'Active' | 'Disabled';
}

interface ApiUserResponse {
  Email: string;
  PasswordHash: string;
  Role: 'CAMPUS_LIFE' | 'CLUB';
  Club: string;
  Status: 'Active' | 'Disabled';
}

const API_URL = process.env.NEXT_PUBLIC_AUTH_API_URL || 'https://script.google.com/a/macros/gitam.in/s/AKfycbyv4bLkEkgZtCmlnYddr89M7Uxv95QgzjaURUz5EWUSbtsU9_tDiKkQELqcYYhHYffBMQ/exec';

/**
 * Authenticate a user by fetching their hash from Google Sheets via Apps Script API
 * and comparing it with the provided password.
 */
export async function authenticate(email: string, password: string): Promise<AuthUser | null> {
  try {
    // We assume the API expects a GET request with the email to return the user's details.
    // Replace `?action=getUser&email=` with the actual expected query parameters if different.
    const response = await fetch(`${API_URL}?action=getUser&email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      console.error('Failed to fetch user from Auth API');
      return null;
    }

    const data = await response.json();
    
    // Handle case where user is not found
    if (!data || !data.Email) {
      return null;
    }

    const user: ApiUserResponse = data;

    // Verify password hash
    const isValid = await bcrypt.compare(password, user.PasswordHash);

    if (!isValid) {
      return null;
    }

    if (user.Status === 'Disabled') {
      throw new Error('Account is disabled');
    }

    return {
      email: user.Email,
      role: user.Role,
      club: user.Club,
      status: user.Status,
    };
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
}

/**
 * Hash a plain text password (useful for creating new clubs).
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * Create a new user (Club) in the Google Sheet by calling the API
 */
export async function createUserInSheet(email: string, passwordHash: string, clubName: string): Promise<boolean> {
  try {
    // We assume the API expects a POST request with the new user data
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'createUser',
        email,
        passwordHash,
        role: 'CLUB',
        club: clubName,
        status: 'Active'
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Error creating user in sheet:', error);
    return false;
  }
}
