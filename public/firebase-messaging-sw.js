importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
)

const firebaseConfig = {
  apiKey: 'AIzaSyDpZNNDHSjPUc-8D1oR3afRSl6DSHROyNM',
  authDomain: 'tokpik.firebaseapp.com',
  projectId: 'tokpik',
  storageBucket: 'tokpik.appspot.com',
  messagingSenderId: '385036091053',
  appId: '1:385036091053:web:019e4df489f9fcad4f9024',
  measurementId: 'G-QGMM8GMC32',
}

firebase.initializeApp(firebaseConfig)

let messaging
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  messaging = firebase.messaging()
}

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload)

  const { title, body, icon } = payload.notification

  const notificationOptions = {
    body,
    icon: icon || '/images/favicons/android-chrome-192x192.png',
    badge: '/images/favicons/android-chrome-192x192.png',
    tag: 'notification-' + Date.now(), // 유니크한 태그를 생성합니다
    data: payload.data, // 추가 데이터가 있다면 포함시킵니다
    actions: [
      { action: 'open', title: '열기' },
      { action: 'close', title: '닫기' },
    ],
  }

  self.registration.showNotification(title, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
  const notification = event.notification
  const action = event.action

  if (action === 'close') {
    notification.close()
  } else {
    // '열기' 액션이나 알림 클릭 시 실행될 로직
    clients.openWindow('/') // 앱의 메인 페이지로 이동
  }
})
