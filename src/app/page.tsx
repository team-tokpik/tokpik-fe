'use client'
import Navigation from '@/components/Navigation/Navigation'
import * as styles from './page.css'
import Carousel from '@/components/Carousel/Carousel'
import Filter from '@/components/Filter/Filter'
import { useEffect, useState } from 'react'
import FilterSVG from '/public/images/Filter.svg'
import FilterWhite from '/public/images/FilterWhite.svg'
import { useFilterListState, useFilterListActions } from '@/store/useFilterList'
import { useMemo } from 'react'
import SelectedFilter from '@/components/SelectedFilter/SelectedFilter'
import { itemType } from '@/types/card'
export default function Home() {
  const filterList = useFilterListState() // 전역 상태: 필터 리스트
  const { popList } = useFilterListActions() // 전역 액션
  const [isFilterListEmpty, setIsFilterListEmpty] = useState(false) //필터 리스트 비었는지 여부
  const [isFilterOn, setIsFilterOn] = useState(false) // 필터 열림 여부

  const [cardContents, setCardContents] = useState<itemType[]>([
    { type: 'business', title: '카드 1', description: '내용 1' },
    { type: 'issue', title: '카드 2', description: '내용 2' },
    { type: 'love', title: '카드 3', description: '내용 3' },
    { type: 'hobby', title: '카드 4', description: '내용 4' },
    { type: 'humor', title: '카드 5', description: '내용 5' },
    { type: 'ice-breaker', title: '카드 6', description: '내용 6' },
    { type: 'self-development', title: '카드 7', description: '내용 7' },
  ])

  //처음 렌더시 대화주제를 가져온다.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/topics') // API 엔드포인트를 적어주세요.

        const data = await response.json()

        // API 응답 데이터 변환 - 키 이름이 달라서 변환
        const transformedData = data.map((item: any) => ({
          type: item.topicTag, // topicTag를 type으로
          title: item.title, // title은 그대로
          description: item.subtitle, // subtitle을 description으로
        }))
        // 데이터 저장!
        setCardContents(transformedData)
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    fetchData()
  }, [])

  // 메모이제이션을 이용해서 selectedFilter들을 렌더링!
  const selectedFilterList = useMemo(() => {
    return Array.from(filterList).map((value) => (
      <SelectedFilter
        key={value}
        text={value}
        onClick={() => {
          popList(value)
        }}
      />
    ))
  }, [filterList])

  // 필터리스트를 감시
  useEffect(() => {
    // 필터리스트 비었는지 여부 저장
    setIsFilterListEmpty(filterList.size !== 0)
  }, [filterList])

  useEffect(() => {
    console.log(isFilterOn)
  }, [isFilterOn])
  //필터 버튼 클릭시 작동하는 함수
  const filterButtonHandler = () => {
    setIsFilterOn((prev) => !prev)
  }

  return (
    <>
      <Navigation />
      <main className={styles.Main({ isFilterOn })}>
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
              className={styles.FilterButton({ isFilterListEmpty })}
              onClick={filterButtonHandler}
            >
              {isFilterListEmpty ? <FilterWhite /> : <FilterSVG />}
            </button>
            <div className={styles.FilterList}>{selectedFilterList}</div>
          </div>
        </header>

        {/* card section */}

        <div className={styles.CardBox}>
          <Carousel items={cardContents} />
        </div>
      </main>

      <Filter isOn={isFilterOn} filterHandler={filterButtonHandler} />
    </>
  )
}
