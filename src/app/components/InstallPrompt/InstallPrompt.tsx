'use client'

import React, { useEffect, useState } from 'react'

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    )
    setIsAndroid(
      /Android/.test(navigator.userAgent) &&
        !/Chrome/.test(navigator.userAgent) &&
        !/CriOS/.test(navigator.userAgent)
    )
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)
  }, [])

  if (isStandalone) {
    return null
  }

  return (
    <div>
      <h3>앱에서 인스톨 안내를 위한 페이지</h3>
      {isIOS && (
        <p>더 나은 사용자 경험을 위해 공유버튼을 눌러서 인스톨 해주세요</p>
      )}
      {isAndroid && (
        <>
          <p>더 나은 사용자 경험을 위해 공유버튼을 눌러서 인스톨 해주세요</p>
          <button>인스톨</button>
        </>
      )}
    </div>
  )
}
