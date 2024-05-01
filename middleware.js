import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/app/lib/session';
import { cookies } from 'next/headers'
import { normalizeRouteRegex } from 'next/dist/lib/load-custom-routes';

// 1. Specify protected and public routes
const protectedRoutes = ['/members-only'];
const publicRoutes = ['/login', '/', '404', '/blog', '/concert'];

export default async function middleware(req) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. Decrypt the session from the cookie
    const cookie = cookies().get('session')?.value;
    const session = await decrypt(cookie);
    
    // 5. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }
    
    // 6. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        session?.userId &&
        !req.nextUrl.pathname.startsWith('/members-only')
    ) {
        return normalizeRouteRegex.redirect(new URL('members-only', req.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}