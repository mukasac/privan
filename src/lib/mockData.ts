// src/lib/mockData.ts
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  privacyScore: number;
  connectedApps: ConnectedApp[];
  activeSessions: Session[];
  recentActivity: Activity[];
  settings: UserSettings;
  notifications: Notification[];
}

export interface ConnectedApp {
  id: string;
  name: string;
  icon: string;
  connectedAt: string;
  lastUsed: string;
  permissions: string[];
  status: 'active' | 'inactive' | 'revoked';
  category: 'entertainment' | 'social' | 'productivity' | 'shopping' | 'other';
  dataAccessed: string[];
  riskLevel: 'low' | 'medium' | 'high';
}

export interface Session {
  id: string;
  device: string;
  browser: string;
  os: string;
  location: string;
  lastActive: string;
  ip: string;
  isCurrent: boolean;
  deviceType: 'mobile' | 'desktop' | 'tablet';
}

export interface Activity {
  id: string;
  type: 'login' | 'permission_change' | 'app_connected' | 'app_disconnected' | 'security_alert' | 'settings_change';
  app?: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error';
  details: string;
  location?: string;
  deviceInfo?: string;
}

export interface UserSettings {
  emailNotifications: boolean;
  twoFactorEnabled: boolean;
  loginAlerts: boolean;
  privacyMode: 'standard' | 'strict' | 'custom';
  autoRevokeUnused: boolean;
  deviceTracking: boolean;
  dataRetention: number; // days
  privacyPreferences: {
    shareEmail: boolean;
    shareLocation: boolean;
    shareActivity: boolean;
    marketingConsent: boolean;
  };
  securityPreferences: {
    requireMFA: boolean;
    trustedDevices: boolean;
    passwordChangeInterval: number; // days
    ipWhitelist: string[];
  };
}

export interface Notification {
  id: string;
  type: 'security' | 'privacy' | 'system' | 'app';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  actionRequired?: boolean;
  action?: {
    type: string;
    label: string;
    url?: string;
  };
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    privacyScore: 85,
    connectedApps: [
      {
        id: '1',
        name: 'Netflix',
        icon: '🎬',
        category: 'entertainment',
        connectedAt: '2023-10-15',
        lastUsed: '2023-10-29',
        permissions: ['email', 'profile', 'billing'],
        status: 'active',
        dataAccessed: ['email', 'name', 'payment info'],
        riskLevel: 'low'
      },
      {
        id: '2',
        name: 'Spotify',
        icon: '🎵',
        category: 'entertainment',
        connectedAt: '2023-09-20',
        lastUsed: '2023-10-28',
        permissions: ['email', 'profile', 'activity', 'friends'],
        status: 'active',
        dataAccessed: ['email', 'listening history', 'playlists'],
        riskLevel: 'low'
      },
      {
        id: '3',
        name: 'Unknown App',
        icon: '❓',
        category: 'other',
        connectedAt: '2023-08-15',
        lastUsed: '2023-08-15',
        permissions: ['email', 'profile', 'contacts', 'files'],
        status: 'inactive',
        dataAccessed: ['email', 'contacts', 'files'],
        riskLevel: 'high'
      }
    ],
    activeSessions: [
      {
        id: '1',
        device: 'MacBook Pro',
        browser: 'Chrome',
        os: 'macOS',
        location: 'London, UK',
        lastActive: '2023-10-29T10:00:00Z',
        ip: '192.168.1.1',
        isCurrent: true,
        deviceType: 'desktop'
      },
      {
        id: '2',
        device: 'iPhone 13',
        browser: 'Safari',
        os: 'iOS',
        location: 'London, UK',
        lastActive: '2023-10-29T09:30:00Z',
        ip: '192.168.1.2',
        isCurrent: false,
        deviceType: 'mobile'
      }
    ],
    recentActivity: [
      {
        id: '1',
        type: 'login',
        app: 'Netflix',
        timestamp: '2023-10-29T09:00:00Z',
        status: 'success',
        details: 'Successful login from Chrome on MacBook Pro',
        location: 'London, UK',
        deviceInfo: 'Chrome 98.0.4758.102 on macOS'
      },
      {
        id: '2',
        type: 'security_alert',
        timestamp: '2023-10-28T15:30:00Z',
        status: 'warning',
        details: 'Unusual login attempt blocked from unknown device',
        location: 'Moscow, Russia'
      },
      {
        id: '3',
        type: 'permission_change',
        app: 'Spotify',
        timestamp: '2023-10-28T14:20:00Z',
        status: 'success',
        details: 'Updated permissions: Removed access to contacts'
      }
    ],
    settings: {
      emailNotifications: true,
      twoFactorEnabled: false,
      loginAlerts: true,
      privacyMode: 'standard',
      autoRevokeUnused: true,
      deviceTracking: true,
      dataRetention: 90,
      privacyPreferences: {
        shareEmail: true,
        shareLocation: false,
        shareActivity: true,
        marketingConsent: false
      },
      securityPreferences: {
        requireMFA: false,
        trustedDevices: true,
        passwordChangeInterval: 90,
        ipWhitelist: []
      }
    },
    notifications: [
      {
        id: '1',
        type: 'security',
        title: 'Security Alert',
        message: 'Unusual login attempt detected from new location',
        timestamp: '2023-10-28T15:30:00Z',
        read: false,
        priority: 'high',
        actionRequired: true,
        action: {
          type: 'review',
          label: 'Review Activity',
          url: '/security/alerts'
        }
      },
      {
        id: '2',
        type: 'privacy',
        title: 'Privacy Recommendation',
        message: 'Some connected apps haven\'t been used in 30 days',
        timestamp: '2023-10-27T10:00:00Z',
        read: false,
        priority: 'medium',
        actionRequired: false,
        action: {
          type: 'review',
          label: 'Review Apps',
          url: '/connected-apps'
        }
      }
    ]
  }
];