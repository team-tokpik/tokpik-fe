'use client'
import Navigation from '@/components/Navigation/Navigation'
import * as styles from './page.css'
import Card from '@/components/Card/Card'
import Filter from '@/components/Filter/Filter'
import { useState } from 'react'
import FilterSVG from '/public/images/Filter.svg'
export default function Home() {
  // 필터 열림 여부
  const [isFilterOn, setIsFilterOn] = useState(false)

  //필터 버튼 클릭시 작동하는 함수
  const filterButtonHandler = () => {
    setIsFilterOn((prev) => !prev)
  }
  return (
    <>
      <Navigation />
      <main className={styles.Main}>
        {/* header section */}
        <header className={styles.Header}>
          {/* text section */}
          <div>
            <p className={styles.HeaderText}>Explore</p>
            <p className={styles.HeaderText}>
              Today’s <span className={styles.HeaderText2}>Tokpiks!</span>
            </p>
          </div>
          {/* filter button section */}
          <div className={styles.FilterBox}>
            <button
              className={styles.FilterButton}
              onClick={filterButtonHandler}
            >
              <FilterSVG />
            </button>
          </div>
        </header>

        {/* card section */}
        <div className={styles.CardBox}>
          <Card
            size="large"
            type="business"
            title="하하하 이것은 제목"
            description="이것은 설명"
          ></Card>
        </div>
      </main>

      <Filter isOn={isFilterOn}></Filter>
    </>
  )
}
