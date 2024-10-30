// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
 const path = request.nextUrl.pathname

 // Public paths that don't require authentication
 const isPublicPath = path === '/' || 
                     path === '/auth/signin' || 
                     path === '/auth/signup' ||
                     path === '/business' ||  
                     path.startsWith('/business/') // Allow all business routes

 const token = await getToken({
   req: request,
   secret: process.env.NEXTAUTH_SECRET
 })

 // Redirect to signin if accessing protected route without auth
 if (!token && !isPublicPath) {
   return NextResponse.redirect(new URL('/auth/signin', request.url))
 }

 // Redirect to dashboard if accessing auth pages while authenticated
 if (token && (path === '/auth/signin' || path === '/auth/signup')) {
   return NextResponse.redirect(new URL('/dashboard', request.url))
 }

 return NextResponse.next()
}

// Configure which routes to protect
export const config = {
 matcher: [
   /*
    * Match all request paths except for the ones starting with:
    * - api (API routes)
    * - _next/static (static files)
    * - _next/image (image optimization files)
    * - favicon.ico (favicon file)
    * - public folder
    */
   '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
 ],
}