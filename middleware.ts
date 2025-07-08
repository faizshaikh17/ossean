import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const sessionToken =
    req.cookies.get('better-auth.session_token')?.value ||
    req.cookies.get('session_token')?.value ||
    req.cookies.get('better-auth.session')?.value ||
    req.cookies.get('__Secure-better-auth.session_token')?.value;

  const isLoggedIn = !!sessionToken;
  const pathname = req.nextUrl.pathname;

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
