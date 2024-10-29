// app/business/page.tsx
import { BusinessStats, IntegrationStatus, AnalyticsChart } from '@/components/business'
import { mockBusinessAccounts } from '@/lib/mockData'

export default function BusinessDashboard() {
  const business = mockBusinessAccounts[0]

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Business Dashboard</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Integration Guide
          </button>
        </div>

        <BusinessStats stats={business.stats} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <AnalyticsChart />
          <IntegrationStatus providers={business.integration.providers} />
        </div>
      </main>
    </div>
  )
}