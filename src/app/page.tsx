// src/app/page.tsx
import Link from 'next/link'
import { Shield, Lock, Users } from 'lucide-react'

export default function Home() {
 return (
   <div className="min-h-screen">
     <nav className="bg-white border-b">
       <div className="max-w-7xl mx-auto px-4">
         <div className="flex justify-between h-16">
           <div className="flex items-center">
             <Shield className="w-8 h-8 text-blue-500" />
             <Link href="/" className="ml-2 text-xl font-bold">PrivacyGuard</Link>
           </div>
           <div className="flex items-center gap-4">
             <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900">
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