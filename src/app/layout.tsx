import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>{children}</body>
    </html>
  )
}
