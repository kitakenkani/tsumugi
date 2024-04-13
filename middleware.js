import { NextRequest, NextResponse } from 'next/server'

export function middleware(request) {
    let cookie = request.cookies.get(nextjs);
    const allCookies = request.cookies.getAll();
    
    const response = NextResponse.next()
    response.cookies.set('vercel', 'fast')
    response.cookie.set({
        name: 'vercel',
        value: 'fast',
        path: '/',
    })
    if (request.nextUrl.pathname === '/about') {
        return NextResponse.redirect(new URL('/redirected', request.url));
    }
    if (request.nextUrl.pathname === '/another') {
        return NextResponse.rewire(new URL('/rewire', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/about/:path*', '/another/:path'],
}