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
import { ItemType } from '@/types/card'
import { postTopics } from '@/api/main/postTopics'
import { TopicRequestBody } from '@/types/topicRequestBody'
import Spinner from '@/components/Spinner/Spinner'
import { subject } from '@/constants/subject'
export default function Home() {
  const filterList = useFilterListState() // 전역 상태: 필터 리스트
  const { popList } = useFilterListActions() // 전역 액션
  const [isFilterListEmpty, setIsFilterListEmpty] = useState(false) //필터 리스트 비었는지 여부
  const [isFilterOn, setIsFilterOn] = useState(false) // 필터 열림 여부
  const [isLoading, setIsLoading] = useState<number>(0);

  const [cardContents, setCardContents] = useState<ItemType[]>([])
  const [apiTrigger,setApiTrigger] = useState<boolean>(false);
  useEffect(()=>{
    setApiTrigger(!isFilterOn)
  },[isFilterOn])
 

  //대화주제를 가져온다.
  useEffect(() => {
    if(!isFilterOn || apiTrigger) 
    {
    setIsLoading(prev=>prev+1); // API 요청 시작 전 로딩 상태 설정
    setCardContents([]) //이전의 카드들 삭제!

    const requestBody: TopicRequestBody = {
      includeFilterCondition: filterList.size > 0,
      talkPurposes: [],
      talkSituations: [],
      talkMoods: [],
      talkPartnerGender: false,
      talkPartnerAgeLowerBound: null,
      talkPartnerAgeUpperBound: null,
    }

    filterList.forEach(item => {
      switch (item.tab) {
        case '목적':
          requestBody.talkPurposes.push(item.value)
          break
        case '상황':
          requestBody.talkSituations.push(item.value)
          break
        case '분위기':
          requestBody.talkMoods.push(item.value)
          break
        case '상대':
          if (item.value === '남성') {
            requestBody.talkPartnerGender = true
          }
          break
        case '나이':
          const [lowerBound, upperBound] = item.value.split('-');
          requestBody.talkPartnerAgeLowerBound = parseInt(lowerBound);
          requestBody.talkPartnerAgeUpperBound = parseInt(upperBound);
          break
      }
    })
    // requestBody에서 빈 항목 제거
    Object.keys(requestBody).forEach((key) => {
      if (Array.isArray((requestBody as any)[key]) && (requestBody as any)[key].length === 0) {
        //빈 배열 제거
        delete (requestBody as any)[key];
      } else if ((requestBody as any)[key] === null) {
        //null 제거
        delete (requestBody as any)[key];
      }
    });
    console.log('main - requestBody',requestBody)

    postTopics(requestBody)
      .then(response => {
        // 여기서 응답 처리
        setCardContents(response.topics.map(topic => ({
          type: subject.find(item => item.label === topic.topicTag)?.eng as ItemType['type'],
          title: topic.title,
          description: topic.subtitle,
          id: topic.topicId
        })))
        console.log('response.topics',response.topics)
        console.log('response.topics.map',response.topics.map(topic => ({
          type: subject.find(item => item.label === topic.topicTag)?.eng as ItemType['type'],
          title: topic.title,
          description: topic.subtitle
        })))
      })
      .catch(error => {
        console.error('토픽 가져오기 오류:', error)
      })
      .finally(() => {
        setIsLoading(prev=>prev-1); // API 요청 완료 후 로딩 상태 해제
      });
    }
  }, [filterList,apiTrigger]); 

  // 메모이제이션을 이용해서 selectedFilter들을 렌더링!
  const selectedFilterList = useMemo(() => {
    return Array.from(filterList).map((value) => (
      <SelectedFilter
        key={value.value}
        text={value.value}
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


  //필터 버튼 클릭시 작동하는 함수
  const filterButtonHandler = () => {
    setIsFilterOn((prev) => !prev)
  }
  useEffect(()=>{
    const visitCount = sessionStorage.getItem('visitCount');
    if (visitCount === null) { //visitCount가 없으면 0으로 초기화
      sessionStorage.setItem('visitCount', '0');
    } else { //visitCount가 있으면 1 증가
      const newCount = parseInt(visitCount) + 1;
      sessionStorage.setItem('visitCount', newCount.toString());
    }
  },[])
  return (
    <>
      {sessionStorage.getItem('visitCount') === '0' && isLoading > 0 && <Spinner type='line' text={'내게 꼭 맞는 대화 주제\n톡픽이 만들어지고 있어요!'} size='full'/>}
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
        {sessionStorage.getItem('visitCount') !== '0' && isLoading > 0 && <Spinner type='square' sub={'열심히 대화주제를\n생성하고 있어요'} size='partial'/>}

          {isLoading === 0 && <Carousel items={cardContents} />}
        </div>
      </main>

      <Filter isOn={isFilterOn} filterHandler={filterButtonHandler} />
    </>
  )
}
