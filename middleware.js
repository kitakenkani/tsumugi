import { NextRequest, NextResponse } from 'next/server'

export function middleware(request) {
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