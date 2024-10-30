// src/app/settings/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Shield, 
  Bell, 
  Lock, 
  User, 
  Smartphone, 
  Eye, 
  Clock,
  AlertTriangle,
  Save,
  Check
} from 'lucide-react'
import Link from 'next/link'
import { mockAuth } from '@/lib/mockAuth'
import type { User } from '@/lib/mockData'

export default function SettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [activeSection, setActiveSection] = useState('privacy')
  const [isSaving, setIsSaving] = useState(false)
  const [savedMessage, setSavedMessage] = useState('')

  useEffect(() => {
    const currentUser = mockAuth.getUser()
    if (!currentUser) {
      router.push('/auth/signin')
    } else {
      setUser(currentUser)
    }
  }, [router])

  const handleSaveSettings = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
    setSavedMessage('Settings saved successfully')
    setTimeout(() => setSavedMessage(''), 3000)
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="flex items-center">
                <Shield className="w-8 h-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold">PrivacyGuard</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {savedMessage && (
                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-lg">
                  <Check className="w-4 h-4" />
                  {savedMessage}
                </div>
              )}
              <button
                onClick={handleSaveSettings}
                disabled={isSaving}
                className={`px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 ${
                  isSaving ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                }`}
              >
                <Save className="w-4 h-4" />
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-1">
                <button
                  onClick={() => setActiveSection('privacy')}
                  className={`w-full px-4 py-2 text-left rounded-lg flex items-center gap-2 ${
                    activeSection === 'privacy'
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  Privacy
                </button>
                <button
                  onClick={() => setActiveSection('security')}
                  className={`w-full px-4 py-2 text-left rounded-lg flex items-center gap-2 ${
                    activeSection === 'security'
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  Security
                </button>
                <button
                  onClick={() => setActiveSection('notifications')}
                  className={`w-full px-4 py-2 text-left rounded-lg flex items-center gap-2 ${
                    activeSection === 'notifications'
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <Bell className="w-4 h-4" />
                  Notifications
                </button>
                <button
                  onClick={() => setActiveSection('devices')}
                  className={`w-full px-4 py-2 text-left rounded-lg flex items-center gap-2 ${
                    activeSection === 'devices'
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  Devices
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Privacy Settings */}
              {activeSection === 'privacy' && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Privacy Settings</h2>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Data Sharing</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Share Email Address</p>
                            <p className="text-sm text-gray-500">
                              Allow apps to access your email address
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={user.settings.privacyPreferences.shareEmail}
                              className="sr-only peer"
                              onChange={() => {}}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Share Location</p>
                            <p className="text-sm text-gray-500">
                              Allow apps to access your location
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={user.settings.privacyPreferences.shareLocation}
                              className="sr-only peer"
                              onChange={() => {}}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Data Retention</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Keep activity data for
                        </label>
                        <select 
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                          value={user.settings.dataRetention}
                          onChange={() => {}}
                        >
                          <option value={30}>30 days</option>
                          <option value={60}>60 days</option>
                          <option value={90}>90 days</option>
                          <option value={180}>180 days</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeSection === 'security' && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Security Settings</h2>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Authentication</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Two-Factor Authentication</p>
                            <p className="text-sm text-gray-500">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Enable
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Trusted Devices</p>
                            <p className="text-sm text-gray-500">
                              Skip 2FA on trusted devices
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={user.settings.securityPreferences.trustedDevices}
                              className="sr-only peer"
                              onChange={() => {}}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Password</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Change password every
                        </label>
                        <select 
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                          value={user.settings.securityPreferences.passwordChangeInterval}
                          onChange={() => {}}
                        >
                          <option value={30}>30 days</option>
                          <option value={60}>60 days</option>
                          <option value={90}>90 days</option>
                          <option value={180}>Never</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeSection === 'notifications' && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-500">
                            Receive important updates via email
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={user.settings.emailNotifications}
                            className="sr-only peer"
                            onChange={() => {}}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Login Alerts</p>
                          <p className="text-sm text-gray-500">
                            Get notified of new sign-ins
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={user.settings.loginAlerts}
                            className="sr-only peer"
                            onChange={() => {}}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Devices Settings */}
              {activeSection === 'devices' && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Connected Devices</h2>
                  <div className="space-y-6">
                    {user.activeSessions.map((session) => (
                      <div 
                        key={session.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-gray-100 rounded-lg">
                          <Smartphone className="w-6 h-6 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium">{session.device}</p>
                            <p className="text-sm text-gray-500">
                              {session.browser} on {session.os}
                            </p>
                            <p className="text-sm text-gray-500">
                              Last active: {new Date(session.lastActive).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {session.isCurrent && (
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                              Current Device
                            </span>
                          )}
                          {!session.isCurrent && (
                            <button 
                              className="text-red-500 hover:text-red-600"
                              onClick={() => {
                                // Handle device removal
                                console.log('Remove device:', session.id)
                              }}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    ))}

                    <div className="mt-6">
                      <h3 className="font-semibold mb-4">Device Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Track Device Location</p>
                            <p className="text-sm text-gray-500">
                              Monitor login locations for better security
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={user.settings.deviceTracking}
                              className="sr-only peer"
                              onChange={() => {}}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Automatic Device Logout</p>
                            <p className="text-sm text-gray-500">
                              Automatically log out inactive devices
                            </p>
                          </div>
                          <select 
                            className="block w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            defaultValue="30"
                          >
                            <option value="never">Never</option>
                            <option value="7">After 7 days</option>
                            <option value="30">After 30 days</option>
                            <option value="90">After 90 days</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-800">
                          Security Recommendation
                        </p>
                        <p className="text-sm text-yellow-700">
                          We recommend removing access from devices you no longer use
                          to keep your account secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}