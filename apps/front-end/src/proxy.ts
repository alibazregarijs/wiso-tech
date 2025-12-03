import { getSessionCookie } from 'better-auth/cookies';
import { NextResponse, type NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request); // Automatically checks for the correct cookie name
  const url = request.nextUrl.clone();

  // 1. Define your public routes (no auth required)
  const publicRoutes = ['/sign-in', '/sign-up', '/'];
  const isPublicRoute = publicRoutes.includes(url.pathname);

  // 2. Redirect unauthenticated users trying to access protected routes
  if (!sessionCookie && !isPublicRoute) {
    url.pathname = '/sign-in';
    return NextResponse.redirect(url);
  }

  // 3. (Optional) Redirect authenticated users away from public auth routes (e.g. login)
  if (
    sessionCookie &&
    (url.pathname === '/sign-in' || url.pathname === '/sign-up')
  ) {
    url.pathname = '/dashboard'; // Redirect to your dashboard or home
    return NextResponse.redirect(url);
  }

  const requestHeaders = new Headers(request.headers);

  // 2. Add the current pathname to a custom header (e.g., "x-url")
  requestHeaders.set('x-url', request.nextUrl.pathname);

  // 3. Pass the modified headers to the next response
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  // Matcher ignores static files, images, and API routes to improve performance
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
