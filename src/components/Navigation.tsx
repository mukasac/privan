// src/components/Navigation.tsx
import Link from 'next/link'
import { Shield, Bell, Settings, LogOut } from 'lucide-react'
import { useState } from 'react'
import type { Notification } from '@/lib/mockData'

interface NavigationProps {
  notifications?: Notification[]
  onSignOut?: () => void
  showNotifications?: boolean
}

export function Navigation({ notifications = [], onSignOut, showNotifications = true }: NavigationProps) {
  const [showNotificationPanel, setShowNotificationPanel] = useState(false)
  const unreadNotifications = notifications.filter(n => !n.read)

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
            {showNotifications && (
              <div className="relative">
                <button 
                  className="p-2 hover:bg-gray-100 rounded-lg relative"
                  onClick={() => setShowNotificationPanel(!showNotificationPanel)}
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  {unreadNotifications.length > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </button>

                {showNotificationPanel && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
                    <div className="p-4 border-b">
                      <h3 className="font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-4 text-center text-gray-500">
                          No notifications
                        </div>
                      ) : (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 border-b last:border-b-0 ${
                              !notification.read ? 'bg-blue-50' : ''
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div 
                                className={`p-2 rounded-full ${
                                  notification.priority === 'high' 
                                    ? 'bg-red-100' 
                                    : notification.priority === 'medium'
                                    ? 'bg-yellow-100'
                                    : 'bg-blue-100'
                                }`}
                              >
                                <Bell className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="font-medium">{notification.title}</p>
                                <p className="text-sm text-gray-600">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {new Date(notification.timestamp).toLocaleString()}
                                </p>
                                {notification.actionRequired && (
                                  <button className="mt-2 text-sm text-blue-500 hover:text-blue-600">
                                    {notification.action?.label}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            <Link 
              href="/settings" 
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Settings className="w-5 h-5 text-gray-600" />
            </Link>

            {onSignOut && (
              <button
                onClick={onSignOut}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <LogOut className="w-5 h-5 text-gray-600" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}