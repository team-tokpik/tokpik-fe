import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useAlert = () => {
  const params = useSearchParams()
  const message = params.get('message')

  useEffect(() => {
    if (message) {
      alert(message)
    }
  }, [message])

  return { message }
}
