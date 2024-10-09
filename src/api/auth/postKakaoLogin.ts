import client from '../client'

export const postKakaoLogin = async (code: string) => {
  const response = await client.post(`/login/kakao`, {
    code,
  })
  return response.data
}
