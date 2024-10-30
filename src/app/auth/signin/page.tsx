// src/app/auth/signin/page.tsx
import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-500" />
              <Link href="/" className="ml-2 text-xl font-bold">PrivacyGuard</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        
        <div className="space-y-4">
          <button className="w-full p-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            Continue with Google
          </button>
          
          <button className="w-full p-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            Continue with Facebook
          </button>
          
          <button className="w-full p-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  )
}