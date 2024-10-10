import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { putNotificationToken } from '@/api/firebase/putNotificationToken'
const firebaseConfig = {
  apiKey: 'AIzaSyDpZNNDHSjPUc-8D1oR3afRSl6DSHROyNM',
  authDomain: 'tokpik.firebaseapp.com',
  projectId: 'tokpik',
  storageBucket: 'tokpik.appspot.com',
  messagingSenderId: '385036091053',
  appId: '1:385036091053:web:019e4df489f9fcad4f9024',
  measurementId: 'G-QGMM8GMC32',
}

let app
let messaging

if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig)
  messaging = getMessaging(app)
}

export const setTokenHandler = async () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    try {
      const currentToken = await getToken(messaging, {
        vapidKey:
          'BN1G9UlsmP-MBvXnHpOytvH5rWs97FXXXgC424XNaWc0s-IWhxLxFPrgq_K0wTZSl35m42Cyu1DXdZm9_Oy6QYc',
      })
      if (currentToken) {
        console.log('current token for client: ', currentToken)
        // 여기서 토큰을 서버로 전송하는 로직을 구현할 수 있습니다.
        putNotificationToken(currentToken)
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        )
      }
    } catch (err) {
      console.log('An error occurred while retrieving token. ', err)
    }
  }
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    if (typeof window !== 'undefined') {
      onMessage(messaging, (payload) => {
        resolve(payload)
      })
    }
  })

export { messaging }
