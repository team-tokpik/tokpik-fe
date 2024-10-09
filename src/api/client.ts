import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.tokpik.co.kr',
  headers: {
    'Content-Type': 'application/json',
  },
})

client.interceptors.request.use((config) => {
  const authData = localStorage.getItem('auth-storage')
  if (authData) {
    const parsedData = JSON.parse(authData)
    const accessToken = parsedData.state.accessToken
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
  }
  return config
})

// 에러 처리 interceptor
client.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // 추후 토큰 갱신 로직 추가
        return
      }
    } else {
      throw new Error(error.response)
    }
    throw error
  }
)

export default client
