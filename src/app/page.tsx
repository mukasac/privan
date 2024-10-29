// src/app/page.tsx
import Link from 'next/link'
import { Shield, Lock, Users, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">PrivacyGuard</span>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/auth/signin" 
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Sign In
              </Link>
              <Link
                href="/business"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                For Business
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Secure Your Social Logins
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              One dashboard to manage all your social media logins. 
              Keep your privacy in check and control what apps can access.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/auth/signin"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-gray-600">
                Control exactly what information apps can access. 
                Revoke permissions anytime with one click.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
              <p className="text-gray-600">
                End-to-end encryption and advanced security measures 
                keep your social logins safe.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
              <p className="text-gray-600">
                One dashboard to manage all your connected apps and 
                social media accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">For Businesses</h2>
            <p className="text-xl text-gray-600">
              Implement secure social login for your users with our simple integration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Easy Integration</h3>
              <div className="bg-gray-800 text-gray-200 p-4 rounded-lg">
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
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Analytics Dashboard</h4>
                <p className="text-gray-600">Track user authentication patterns and usage statistics</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Custom Branding</h4>
                <p className="text-gray-600">Match the login experience to your brand</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Developer API</h4>
                <p className="text-gray-600">Full API access for custom implementations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><Link href="/security" className="text-gray-600 hover:text-gray-900">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link href="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-gray-600 hover:text-gray-900">Documentation</Link></li>
                <li><Link href="/help" className="text-gray-600 hover:text-gray-900">Help Center</Link></li>
                <li><Link href="/guides" className="text-gray-600 hover:text-gray-900">Guides</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-gray-600 hover:text-gray-900">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} PrivacyGuard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}