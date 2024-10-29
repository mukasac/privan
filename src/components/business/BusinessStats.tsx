// components/business/BusinessStats.tsx
import { Card, CardContent } from '@/components/ui/card'
import { Users, Shield, Activity, DollarSign } from 'lucide-react'

export function BusinessStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Users</p>
              <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
              <p className="text-green-500 text-sm">+12.5% this month</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </CardContent>
      </Card>
      {/* Add other stat cards similarly */}
    </div>
  )
}

// components/business/AnalyticsChart.tsx
'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function AnalyticsChart() {
  const data = [
    { name: 'Mon', auths: 2400 },
    { name: 'Tue', auths: 2800 },
    { name: 'Wed', auths: 2600 },
    { name: 'Thu', auths: 3200 },
    { name: 'Fri', auths: 3600 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Authentication Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="auths" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}