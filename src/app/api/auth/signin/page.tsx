// src/app/auth/signin/page.tsx
'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Shield } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleProviderSignIn = async (provider: string) => {
    try {
      setIsLoading(true)
      setError('')

      if (provider === 'test' || provider === 'demo') {
        // For test/demo users
        const result = await signIn('credentials', {
          email: provider === 'test' ? 'test@example.com' : 'demo@example.com',
          password: 'password',
          redirect: false,
        })
        
        if (result?.error) {
          throw new Error(result.error)
        }
        
        router.push('/dashboard')
      } else {
        // For social logins
        await signIn(provider, {
          callbackUrl: '/dashboard'
        })
      }
    } catch (error) {
      setError('Authentication failed. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto pt-20">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-center mb-8">Sign In</h2>

          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <button
              onClick={() => handleProviderSignIn('google')}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="https://authjs.dev/img/providers/google.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>

            <button
              onClick={() => handleProviderSignIn('facebook')}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="https://authjs.dev/img/providers/facebook.svg" alt="Facebook" className="w-5 h-5" />
              Continue with Facebook
            </button>

            <button
              onClick={() => handleProviderSignIn('apple')}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="https://authjs.dev/img/providers/apple.svg" alt="Apple" className="w-5 h-5" />
              Continue with Apple
            </button>
          </div>

          {/* Test Accounts Section */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-sm text-gray-500 text-center mb-4">Test Accounts</h3>
            <div className="space-y-3">
              <button
                onClick={() => handleProviderSignIn('test')}
                disabled={isLoading}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Sign in as Test User
              </button>
              <button
                onClick={() => handleProviderSignIn('demo')}
                disabled={isLoading}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Sign in as Demo User
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="text-blue-500 hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>

      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4">Signing in...</p>
          </div>
        </div>
      )}
    </div>
  )
}