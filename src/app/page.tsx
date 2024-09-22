'use client'
import Navigation from './components/Navigation/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* header section */}
        <header>
          {/* text section */}
          <div>{/* 제목이 들어갑니다 */}</div>
          {/* filter button section */}
          <div>{/* 필터 버튼이 들어갑니다 다른 버튼 추가 가능 */}</div>
        </header>

        {/* card section */}
        <div>{/* 위아래로 스크롤 되는 카드가 들어갑니다 */}</div>
      </main>
    </>
  )
}
