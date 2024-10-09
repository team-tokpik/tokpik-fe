import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
})

const musticaPro = localFont({
  src: '../../public/fonts/MusticaPro-SemiBold.otf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tokpik',
  description: 'Tokpik',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} ${musticaPro.className}`}>{children}</body>
    </html>
  )
}
