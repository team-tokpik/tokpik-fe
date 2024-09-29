import React from 'react'
import BackBar from '@/components/BackBar/BackBar'
import Navigation from '@/components/Navigation/Navigation'

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <BackBar />
      {children}
      <Navigation />
    </div>
  )
}
