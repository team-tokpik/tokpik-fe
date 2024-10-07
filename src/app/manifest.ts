import { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: '톡픽(TokPik)',
    short_name: 'TokPik',
    description: '톡픽 테스트',
    start_url: '/',
    display: 'standalone',
    background_color: '#212121',
    theme_color: '#212121',
    icons: [
      {
        src: '/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

export default manifest
