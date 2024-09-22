'use client'
import Navigation from '@/components/Navigation/Navigation'
import * as styles from './page.css'
import Card from '@/components/Card/Card'
import Filter from '@/components/Filter/Filter'
import { useState } from 'react'
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 11C8.93192 11 9.71497 10.3626 9.93699 9.5L21 9.5C21.2761 9.5 21.5 9.27614 21.5 9C21.5 8.72386 21.2761 8.5 21 8.5H9.93699C9.71497 7.63739 8.93192 7 8 7C7.06808 7 6.28503 7.63739 6.06301 8.5H3C2.72386 8.5 2.5 8.72386 2.5 9C2.5 9.27614 2.72386 9.5 3 9.5L6.06301 9.5C6.28503 10.3626 7.06808 11 8 11ZM8 10C8.55228 10 9 9.55228 9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10Z"
                  fill="#777777"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.063 15.5L3 15.5C2.72386 15.5 2.5 15.2761 2.5 15C2.5 14.7239 2.72386 14.5 3 14.5H14.063C14.285 13.6374 15.0681 13 16 13C16.9319 13 17.715 13.6374 17.937 14.5H21C21.2761 14.5 21.5 14.7239 21.5 15C21.5 15.2761 21.2761 15.5 21 15.5H17.937C17.715 16.3626 16.9319 17 16 17C15.0681 17 14.285 16.3626 14.063 15.5ZM15 15C15 15.5523 15.4477 16 16 16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14C15.4477 14 15 14.4477 15 15Z"
                  fill="#777777"
                />
              </svg>
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
      {isFilterOn && <Filter></Filter>}
    </>
  )
}
