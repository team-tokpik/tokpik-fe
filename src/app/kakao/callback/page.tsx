'use client'

import { postKakaoLogin } from '@/api/auth/postKakaoLogin'
import { useAuthStore } from '@/store/useAuth'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect } from 'react'

function KakaoCallback() {
  const searchParams = useSearchParams()
  const authCode = searchParams.get('code')
  const router = useRouter()
  const { setAccessToken, setRefreshToken } = useAuthStore.getState().actions

  const handleKakaoLogin = async (authCode: string) => {
    try {
      const response = await postKakaoLogin(authCode)
      const { accessToken, refreshToken } = response.data
      setAccessToken(accessToken)
      setRefreshToken(refreshToken)
      router.push('/survey/gender-birth')
    } catch (error: any) {
      alert(error.message)
      router.push('/onboard')
    }
  }

  useEffect(() => {
    if (authCode) {
      handleKakaoLogin(authCode)
    }
  }, [])

  return <div>page</div>
}

export default function KakaoCallbackPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <KakaoCallback />
    </Suspense>
  )
}
