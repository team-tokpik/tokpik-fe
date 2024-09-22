'use client'
import Navigation from '@/components/Navigation/Navigation'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/survey/gender-birth">생년월일 성별 페이지</Link>
      <Navigation />
    </>
  )
}
