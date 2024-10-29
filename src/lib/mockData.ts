// lib/mockData.ts
export interface User {
    id: string;
    email: string;
    name: string;
    privacyScore: number;
    connectedAccounts: SocialAccount[];
    connectedApps: ConnectedApp[];
  }
  
  export interface SocialAccount {
    provider: string;
    email: string;
    connectedApps: number;
    lastUsed: string;
    sharing: string[];
  }
  
  export interface ConnectedApp {
    name: string;
    status: 'active' | 'inactive';
    lastAccess: string;
    permissions: string[];
  }
  
  export const mockUsers: User[] = [
    {
      id: '1',
      email: 'user@example.com',
      name: 'John Doe',
      privacyScore: 85,
      connectedAccounts: [
        {
          provider: 'Google',
          email: 'john@gmail.com',
          connectedApps: 8,
          lastUsed: '2 hours ago',
          sharing: ['email', 'profile', 'calendar']
        },
        {
          provider: 'Facebook',
          email: 'john@facebook.com',
          connectedApps: 5,
          lastUsed: '1 day ago',
          sharing: ['email', 'friends']
        }
      ],
      connectedApps: [
        {
          name: 'Netflix',
          status: 'active',
          lastAccess: '2 hours ago',
          permissions: ['email', 'profile']
        },
        {
          name: 'Spotify',
          status: 'active',
          lastAccess: '1 day ago',
          permissions: ['email']
        }
      ]
    }
  ];
  
  // Mock business data
  export interface BusinessAccount {
    id: string;
    name: string;
    website: string;
    stats: {
      totalUsers: number;
      successRate: number;
      responseTime: number;
      monthlyCost: number;
    };
    integration: {
      providers: {
        name: string;
        status: 'active' | 'inactive' | 'setup_required';
      }[];
    };
  }
  
  export const mockBusinessAccounts: BusinessAccount[] = [
    {
      id: '1',
      name: 'Example Corp',
      website: 'example.com',
      stats: {
        totalUsers: 24850,
        successRate: 98.2,
        responseTime: 245,
        monthlyCost: 245.50
      },
      integration: {
        providers: [
          { name: 'Google Sign-In', status: 'active' },
          { name: 'Facebook Login', status: 'active' },
          { name: 'Apple Sign-In', status: 'setup_required' }
        ]
      }
    }
  ];