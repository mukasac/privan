// src/lib/mockAuth.ts
interface User {
  id: string;
  name: string;
  email: string;
}

const MOCK_USER = {
  id: '1',
  name: 'Test User',
  email: 'test@example.com'
}

export const mockAuth = {
  signIn: (email: string) => {
    // Store auth state in cookies
    document.cookie = 'mockAuth=' + JSON.stringify(MOCK_USER)
    return Promise.resolve(MOCK_USER)
  },
  
  signOut: () => {
    // Remove auth state from cookies
    document.cookie = 'mockAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    return Promise.resolve()
  },

  getUser: () => {
    try {
      const cookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('mockAuth='))
      
      if (cookie) {
        return JSON.parse(cookie.split('=')[1])
      }
      return null
    } catch {
      return null
    }
  }
}