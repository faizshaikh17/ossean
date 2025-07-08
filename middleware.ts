import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Check for different possible cookie names
  const sessionToken = req.cookies.get('better-auth.session_token')?.value ||
                      req.cookies.get('session_token')?.value ||
                      req.cookies.get('better-auth.session')?.value;

  console.log('All cookies:', req.cookies.getAll()); // Debug log
  console.log('Session token:', sessionToken); // Debug log

  const isLoggedIn = !!sessionToken;
  const pathname = req.nextUrl.pathname;

  console.log('Is logged in:', isLoggedIn, 'Path:', pathname); // Debug log

  if (isLoggedIn && (pathname === '/' || pathname === '/auth')) {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  if (!isLoggedIn && pathname.startsWith('/home')) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/auth', '/home/:path*'],
};