import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/session';

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('session')?.value;
  
  // Public routes that don't need auth
  if (
    request.nextUrl.pathname === '/' || 
    request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/events') ||
    request.nextUrl.pathname.startsWith('/clubs')
  ) {
    return NextResponse.next();
  }

  // If trying to access protected routes without a session
  if (!sessionCookie) {
    if (request.nextUrl.pathname.startsWith('/campus-life') || request.nextUrl.pathname.startsWith('/club')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  try {
    const payload = await decrypt(sessionCookie);
    const user = payload?.user;
    
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const role = user.role?.toLowerCase();

    // Role-based protection
    if (request.nextUrl.pathname.startsWith('/campus-life') && role !== 'campus_life') {
      return NextResponse.redirect(new URL('/club', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/club') && role !== 'club') {
      return NextResponse.redirect(new URL('/campus-life', request.url));
    }

  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
