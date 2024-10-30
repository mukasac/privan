// src/app/business/page.tsx
import Link from 'next/link'
import { Shield } from 'lucide-react'

export const metadata = {
  title: 'Business - PrivacyGuard',
  description: 'Business solutions for secure social login',
}

export default function BusinessPage() {
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">For Businesses</h1>
            <p className="text-xl text-gray-600">
              Implement secure social login for your users with our simple integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Easy Integration</h2>
              <div className="bg-gray-900 text-gray-200 p-6 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`import { PrivacyGuard } from '@privacy-guard/react'

// Add to your app
<PrivacyGuard 
  clientId="your_id"
  onSuccess={handleLogin}
/>`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">Track user authentication patterns and usage statistics</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Custom Branding</h3>
                <p className="text-gray-600">Match the login experience to your brand</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Developer API</h3>
                <p className="text-gray-600">Full API access for custom implementations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Start free, upgrade as you grow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <p className="text-4xl font-bold mb-6">$0<span className="text-gray-500 text-lg">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 1,000 authentications
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Standard support
                </li>
              </ul>
              <button className="w-full py-2 px-4 border rounded-lg hover:bg-gray-50">
                Get Started
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg border border-blue-500 relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Growth</h3>
              <p className="text-4xl font-bold mb-6">$49<span className="text-gray-500 text-lg">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Up to 10,000 authentications
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Start Free Trial
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">Custom</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited authentications
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom integration
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicated support
                </li>
              </ul>
              <button className="w-full py-2 px-4 border rounded-lg hover:bg-gray-50">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}