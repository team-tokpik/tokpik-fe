import React from 'react'
import BackBar from '@/components/BackBar/BackBar'

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <BackBar />
      {children}
    </div>
  )
}
