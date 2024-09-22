import BackBar from '@/components/BackBar/BackBar'
import React from 'react'

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BackBar />
      <div>{children}</div>
    </>
  )
}
