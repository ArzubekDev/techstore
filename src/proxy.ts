import { type NextRequest, NextResponse } from 'next/server';

import { AUTH_SESSION_COOKIE } from '@/shared/consts/auth';
import { ROUTE } from '@/shared/consts/routes';

const PUBLIC_PATHS = new Set<string>([ROUTE.home]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const isAuthenticated = request.cookies.has(AUTH_SESSION_COOKIE);

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL(ROUTE.home, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
