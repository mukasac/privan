// src/app/components/Navigation.tsx 
import Link from 'next/link'
import { Shield } from 'lucide-react'

export function Navigation() {
 return (
   <nav className="bg-white border-b">
     <div className="max-w-7xl mx-auto px-4">
       <div className="flex justify-between h-16">
         <div className="flex items-center">
           <Link href="/" className="flex items-center">
             <Shield className="w-8 h-8 text-blue-500" />
             <span className="ml-2 text-xl font-bold">PrivacyGuard</span>
           </Link>
         </div>
         <div className="flex items-center gap-4">
           <Link 
             href="/auth/signin"
             className="text-gray-600 hover:text-gray-900 transition-colors"
           >
             Sign In
           </Link>
           <Link
             href="/business"
             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
           >
             For Business
           </Link>
         </div>
       </div>
     </div>
   </nav>
 )
}

// src/app/page.tsx
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'
import { Shield, Lock, Users } from 'lucide-react'

export default function HomePage() {
 return (
   <div className="min-h-screen">
     <Navigation />
     
     <section className="pt-20 pb-16">
       <div className="max-w-7xl mx-auto px-4 text-center">
         <h1 className="text-4xl md:text-6xl font-bold mb-6">
           Secure Your Social Logins
         </h1>
         <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
           One dashboard to manage all your social media logins. Keep your
           privacy in check and control what apps can access.
         </p>
         <div className="flex gap-4 justify-center">
           <Link
             href="/auth/signin"
             className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
           >
             Get Started
           </Link>
           <Link
             href="/about"
             className="px-6 py-3 border rounded-lg hover:bg-gray-50"
           >
             Learn More
           </Link>
         </div>
       </div>
     </section>

     <section className="py-20">
       <div className="max-w-7xl mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-6 border rounded-lg">
             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
               <Shield className="w-6 h-6 text-blue-500" />
             </div>
             <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
             <p className="text-gray-600">
               Control exactly what information apps can access. Revoke permissions anytime with one click.
             </p>
           </div>

           <div className="p-6 border rounded-lg">
             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
               <Lock className="w-6 h-6 text-green-500" />
             </div>
             <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
             <p className="text-gray-600">
               End-to-end encryption and advanced security measures keep your social logins safe.
             </p>
           </div>

           <div className="p-6 border rounded-lg">
             <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
               <Users className="w-6 h-6 text-purple-500" />
             </div>
             <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
             <p className="text-gray-600">
               One dashboard to manage all your connected apps and social media accounts.
             </p>
           </div>
         </div>
       </div>
     </section>

     <section className="py-20 bg-gray-50">
       <div className="max-w-7xl mx-auto px-4 text-center">
         <h2 className="text-3xl font-bold mb-4">Ready to secure your social logins?</h2>
         <p className="text-xl text-gray-600 mb-8">
           Join thousands of users who trust PrivacyGuard for their social media privacy.
         </p>
         <Link
           href="/auth/signin"
           className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 inline-block"
         >
           Get Started for Free
         </Link>
       </div>
     </section>
   </div>
 )
}

// src/app/business/page.tsx
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function BusinessPage() {
 return (
   <div className="min-h-screen bg-gray-50">
     <Navigation />

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

// src/app/auth/signin/page.tsx
import { Navigation } from '@/components/Navigation'

export default function SignInPage() {
 return (
   <div className="min-h-screen bg-gray-50">
     <Navigation />
     
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

// src/app/layout.tsx
import './globals.css'

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
   <html lang="en">
     <body>{children}</body>
   </html>
 )
}