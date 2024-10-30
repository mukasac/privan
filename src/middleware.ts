// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Remove getToken since we're using mock auth for now
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Add dashboard to protected routes
  const isAuthRequired = path.startsWith('/dashboard') || 
                        path.startsWith('/settings')

  // Get mock auth token from localStorage (for development)
  const mockToken = request.cookies.get('mockAuth')

  // Redirect to signin if accessing protected route without auth
  if (isAuthRequired && !mockToken) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  // Redirect to dashboard if already authenticated
  if (mockToken && path.startsWith('/auth/')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/settings/:path*',
    '/auth/:path*'
  ]
}