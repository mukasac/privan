// app/auth/signin/page.tsx
'use client'

import { signIn } from 'next-auth/react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign in to PrivacyGuard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <button
            onClick={() => signIn('google')}
            className="w-full p-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
          
          <button
            onClick={() => signIn('facebook')}
            className="w-full p-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
            Continue with Facebook
          </button>
        </CardContent>
      </Card>
    </div>
  )
}