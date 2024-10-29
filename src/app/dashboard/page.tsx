// app/dashboard/page.tsx
import { mockUsers } from '@/lib/mockData'
import { PrivacyScore, ConnectedAccounts, ConnectedApps } from '@/components/dashboard'

export default function DashboardPage() {
  // In a real app, we'd fetch the user data here
  const user = mockUsers[0]

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Privacy Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <PrivacyScore score={user.privacyScore} />
          <ConnectedAccounts accounts={user.connectedAccounts} />
          <ConnectedApps apps={user.connectedApps} />
        </div>
      </main>
    </div>
  )
}