import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AuthState = {
  accessToken: string
  refreshToken: string
  actions: {
    setAccessToken: (token: string) => void
    setRefreshToken: (token: string) => void
  }
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: '',
      refreshToken: '',
      actions: {
        setAccessToken: (token: string) => set({ accessToken: token }),
        setRefreshToken: (token: string) => set({ refreshToken: token }),
      },
    }),
    {
      name: 'auth-storage',
      storage: {
        getItem: (key) => {
          const storage =
            typeof window !== 'undefined' ? window.localStorage : null
          return storage ? JSON.parse(storage.getItem(key) || 'null') : null
        },
        setItem: (key, value) => {
          const storage =
            typeof window !== 'undefined' ? window.localStorage : null
          if (storage) storage.setItem(key, JSON.stringify(value))
        },
        removeItem: (key) => {
          const storage =
            typeof window !== 'undefined' ? window.localStorage : null
          if (storage) storage.removeItem(key)
        },
      },
    }
  )
)
