// src/app/auth/signin/page.tsx
'use client'

import { useState } from 'react'
import { Shield } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { mockAuth } from '@/lib/mockAuth'

export default function SignIn() {
 const router = useRouter()
 const [isLoading, setIsLoading] = useState(false)
 const [error, setError] = useState('')

 const handleProviderSignIn = async (provider: string) => {
   try {
     setIsLoading(true)
     setError('')
     
     // Simulate API call
     await new Promise(resolve => setTimeout(resolve, 1000))
     
     // Sign in with mock auth
     await mockAuth.signIn('test@example.com')
     
     // Force reload to update auth state
     window.location.href = '/dashboard'
   } catch (error) {
     setError('Authentication failed. Please try again.')
   } finally {
     setIsLoading(false)
   }
 }

 return (
   <div className="min-h-screen bg-gray-50">
     <nav className="bg-white border-b">
       <div className="max-w-7xl mx-auto px-4">
         <div className="flex h-16 items-center">
           <Link href="/" className="flex items-center">
             <Shield className="w-8 h-8 text-blue-500" />
             <span className="ml-2 text-xl font-bold">PrivacyGuard</span>
           </Link>
         </div>
       </div>
     </nav>

     <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-sm">
       <h2 className="text-2xl font-bold mb-8 text-center">Sign In</h2>

       {error && (
         <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
           {error}
         </div>
       )}

       <div className="space-y-4">
         <button
           onClick={() => handleProviderSignIn('google')}
           disabled={isLoading}
           className={`w-full p-4 border rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors ${
             isLoading ? 'opacity-50 cursor-not-allowed' : ''
           }`}
         >
           <img 
             src="https://authjs.dev/img/providers/google.svg" 
             alt="Google" 
             className="w-5 h-5"
           />
           Continue with Google
         </button>

         <button
           onClick={() => handleProviderSignIn('facebook')}
           disabled={isLoading}
           className={`w-full p-4 border rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors ${
             isLoading ? 'opacity-50 cursor-not-allowed' : ''
           }`}
         >
           <img 
             src="https://authjs.dev/img/providers/facebook.svg" 
             alt="Facebook" 
             className="w-5 h-5"
           />
           Continue with Facebook
         </button>

         <button
           onClick={() => handleProviderSignIn('apple')}
           disabled={isLoading}
           className={`w-full p-4 border rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors ${
             isLoading ? 'opacity-50 cursor-not-allowed' : ''
           }`}
         >
           <img 
             src="https://authjs.dev/img/providers/apple.svg" 
             alt="Apple" 
             className="w-5 h-5"
           />
           Continue with Apple
         </button>
       </div>

       {isLoading && (
         <div className="mt-4 text-center">
           <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
           <p className="mt-2 text-sm text-gray-500">Signing in...</p>
         </div>
       )}

       <div className="mt-6">
         <p className="text-center text-sm text-gray-500">
           By continuing, you agree to our{' '}
           <Link href="/terms" className="text-blue-500 hover:underline">
             Terms of Service
           </Link>{' '}
           and{' '}
           <Link href="/privacy" className="text-blue-500 hover:underline">
             Privacy Policy
           </Link>
         </p>
       </div>

       {/* For development/testing */}
       <div className="mt-8 pt-6 border-t">
         <p className="text-center text-sm text-gray-500 mb-4">Test Accounts</p>
         <div className="space-y-2">
           <button
             onClick={() => handleProviderSignIn('test')}
             disabled={isLoading}
             className="w-full p-3 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition-colors"
           >
             Sign in as Test User
           </button>
           <button
             onClick={() => handleProviderSignIn('demo')}
             disabled={isLoading}
             className="w-full p-3 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition-colors"
           >
             Sign in as Demo User
           </button>
         </div>
       </div>
     </div>

     {/* Full page loading overlay */}
     {isLoading && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
           <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
           <p className="mt-2">Signing in...</p>
         </div>
       </div>
     )}
   </div>
 )
}