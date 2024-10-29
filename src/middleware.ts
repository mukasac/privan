// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = request.nextUrl.pathname

  // Public paths that don't require authentication
  const isPublicPath = path === '/' || path === '/auth/signin' || path === '/auth/signup'

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })

  // Redirect to signin if accessing protected route without auth
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  // Redirect to dashboard if accessing auth pages while authenticated
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// Configure which routes to protect
export const config = {
  matcher: [
    // Protected routes that require auth
    '/dashboard/:path*',
    '/business/:path*',
    '/settings/:path*',
    // Auth routes to redirect if already authenticated
    '/auth/:path*'
  ]
}