'use client'

import { useEffect, useState } from 'react'
import { setTokenHandler, onMessageListener } from '../../utils/firebase'

export default function FCMManager() {
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    setTokenHandler()

    const unsubscribe = onMessageListener().then((payload) => {
      setNotification(payload)
    })

    return () => {
      unsubscribe.catch((err) => console.log('failed: ', err))
    }
  }, [])

  useEffect(() => {
    if (notification) {
      console.log('새 알림:', notification)
    }
  }, [notification])

  return null
}
