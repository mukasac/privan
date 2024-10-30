// src/app/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Shield, 
  LogOut, 
  Settings, 
  Bell, 
  Smartphone, 
  Key,
  Clock,
  AlertCircle,
  ChevronRight,
  Shield as ShieldIcon,
  Activity
} from 'lucide-react'
import Link from 'next/link'
import { mockAuth } from '@/lib/mockAuth'
import { Navigation } from '@/components/Navigation'
import type { User, ConnectedApp } from '@/lib/mockData'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [activeView, setActiveView] = useState('overview')
  const [showRevokeModal, setShowRevokeModal] = useState(false)
  const [selectedApp, setSelectedApp] = useState<ConnectedApp | null>(null)

  useEffect(() => {
    const currentUser = mockAuth.getUser()
    if (!currentUser) {
      router.push('/auth/signin')
    } else {
      setUser(currentUser)
    }
  }, [router])

  const handleSignOut = async () => {
    await mockAuth.signOut()
    router.push('/auth/signin')
  }

  const handleRevokeAccess = (app: ConnectedApp) => {
    setSelectedApp(app)
    setShowRevokeModal(true)
  }

  const confirmRevokeAccess = async () => {
    // In a real app, this would call an API
    console.log('Revoking access for:', selectedApp?.name)
    setShowRevokeModal(false)
    setSelectedApp(null)
  }

  if (!user) return null

  const activeApps = user.connectedApps.filter(app => app.status === 'active')
  const inactiveApps = user.connectedApps.filter(app => app.status === 'inactive')
  const recentActivity = user.recentActivity.slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        notifications={user.notifications}
        onSignOut={handleSignOut}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Privacy Score Card */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Privacy Score</h2>
            <div className="text-sm text-gray-500">Last updated: today</div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${user.privacyScore}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span>0</span>
                <span className="font-medium">{user.privacyScore}%</span>
                <span>100</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">{user.privacyScore}</p>
              <p className="text-sm text-gray-500">out of 100</p>
            </div>
          </div>
          {user.privacyScore < 80 && (
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Room for Improvement</p>
                <p className="text-sm text-yellow-700">
                  We've identified some ways to enhance your privacy. 
                  Click here to see recommendations.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Connected Apps */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Connected Applications</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {activeApps.map((app) => (
                    <div 
                      key={app.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <span className="text-2xl">{app.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-medium">{app.name}</h3>
                          <p className="text-sm text-gray-500">
                            Connected {new Date(app.connectedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          app.riskLevel === 'low' 
                            ? 'bg-green-100 text-green-800'
                            : app.riskLevel === 'medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {app.riskLevel} risk
                        </span>
                        <button
                          onClick={() => handleRevokeAccess(app)}
                          className="text-red-500 hover:text-red-600"
                        >
                          Revoke
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Activity & Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div 
                      key={activity.id}
                      className="flex items-start gap-3"
                    >
                      <div className={`p-2 rounded-lg ${
                        activity.status === 'success'
                          ? 'bg-green-100'
                          : activity.status === 'warning'
                          ? 'bg-yellow-100'
                          : 'bg-red-100'
                      }`}>
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">{activity.app}</p>
                        <p className="text-sm text-gray-500">{activity.details}</p>
                        <p className="text-xs text-gray-400">
                          {new Date(activity.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Quick Actions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <Link
                    href="/settings"
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-gray-400" />
                      <span>Privacy Settings</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </Link>
                  
                  <Link
                    href="/settings/security"
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <Key className="w-5 h-5 text-gray-400" />
                      <span>Security Settings</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Revoke Access Modal */}
      {showRevokeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Revoke Access</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to revoke access for {selectedApp?.name}? 
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowRevokeModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmRevokeAccess}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Revoke Access
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}