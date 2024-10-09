import { useAuthStore } from '@/store/useAuth'
import client from '../client'

const { setAccessToken, setRefreshToken } = useAuthStore.getState().actions

export const postRefreshToken = async () => {
  const { refreshToken } = useAuthStore.getState()
  const response = await client.post('/refresh', { refreshToken })
  setAccessToken(response.data.accessToken)
  setRefreshToken(response.data.refreshToken)
}
