import axios from 'axios'

const client = axios.create({
  // 현재 테스트 시 사용할 url
  // baseURL: 'http://tokpik.co.kr',
  // 서비스 (프론트 배포 이후) 시 사용될 url
    baseURL: 'https://api.tokpik.co.kr',
  headers: {
    'Content-Type': 'application/json',
  },
})

// 추후 토큰 스토리지 추가 후 보충 및 작성 예정
// client.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//   return config
// })

// 에러 처리 interceptor
client.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // 추후 토큰 스토리지 추가 후 작성
        return
      }
    } else {
      throw new Error(error.response)
    }
    throw error
  }
)

export default client
