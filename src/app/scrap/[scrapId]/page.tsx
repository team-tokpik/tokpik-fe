'use client'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, use } from 'react'
import * as styles from './page.css'
import Card from '@/components/Card/Card'
import { subject } from '@/constants/subject'
import BackBar from '@/components/BackBar/BackBar'
import Sandwich from '/public/images/Sandwich.svg'
import Bell from '/public/images/Bell.svg'
import Pencil from '/public/images/Pencil.svg'
import { getUsersScrapsScrapIdTopics } from '@/api/scrap/getUsersScrapsScrapIdTopics'
import { useRouter } from 'next/navigation'

interface ScrapPageProps {
    params: {
      scrapId: string;
    };
  }

interface Topic {
  scrapTopicId: number;
  topicId: number;
  topicTitle: string;
  topicType: string;
  scraped: boolean;
}

const ScrapDetail = ({ params }: ScrapPageProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [scrapName, setScrapName] = useState('')//스크랩 이름 제목
    const [length, setLength] = useState<number>(0)//스크랩 카드 개수
    const { scrapId } = params; // 스크랩 ID를 쿼리 파라미터에서 가져옵니다
    const [scrapTopics, setScrapTopics] = useState<Topic[]>([]) // 스크랩 카드들 세부 정보
    const [isAlarmSet, setIsAlarmSet] = useState<boolean>(false) // 알림 중인지 체크
    const [alarmArr, setAlarmArr] = useState<number[]>([]) // 알림 배열

    useEffect(() => {
      if (scrapId) {
        getUsersScrapsScrapIdTopics(Number(scrapId))
          .then((response) => {
            setScrapTopics(response.contents)
            console.log('스크랩 [scrapId]: ',response.contents)
          })
          .catch((error) => {
            console.error('스크랩 토픽 정보 가져오기 실패:', error)
          })
      }
    }, [scrapId])
    useEffect(() => {
      console.log('alarmArr: ',alarmArr)
    }, [alarmArr])
    useEffect(() => {
      const scrapNameParam = searchParams.get('scrapName')
      const lengthParam = searchParams.get('length')
    
      if (scrapNameParam) setScrapName(scrapNameParam)
      if (lengthParam) setLength(Number(lengthParam))
    }, [searchParams])
  
    const cardClickHandler = (topicId: number) => {
      if(isAlarmSet){
        const index = alarmArr.indexOf(topicId);
        if (index > -1) {
          // topicId가 이미 배열에 있으면 제거
          const newAlarmArr = [...alarmArr];
          newAlarmArr.splice(index, 1);// 해당 인덱스에서 요소 제거 (배열을 앞으로 자동으로 밀어줌)
          setAlarmArr(newAlarmArr);
        } else {
          // topicId가 배열에 없으면 추가
          setAlarmArr([...alarmArr, topicId]);
        }
      }else{
        router.push(`/detail/${topicId}`)
      }}
  return (
    <>
    <BackBar/>
    <div className={styles.OuterContainer}>
        <div className={styles.InnerContainer}>
        {/* header section */}
      <div className={styles.Header}>
        <div className={styles.Head}>
        <p>{scrapName}</p>
        <Pencil/>
        </div>
        <p className={styles.Sub}>{scrapTopics.length} Tokpiks</p>
      </div>
      {/* card section */}
      <div className={styles.relativeCardWrapper}>
        {scrapTopics.map((data, index) => {
                const matchedSubject = subject.find(s => s.label === data.topicType);
                const topicTypeEng = matchedSubject ? matchedSubject.eng : data.topicType;
                return (
                    <Card 
                        key={index} 
                        size="small" 
                        type={topicTypeEng as "relation" | "issue" | "love" | "business" | "hobby" | "humor" | "ice-breaker" | "self-development"} 
                        title={data.topicTitle} 
                        isAlarm={isAlarmSet}
                        alarmNumber={alarmArr.findIndex(id => id === data.topicId)+1}
                        onClick={() => {cardClickHandler(data.topicId)}}
                    />
                );
            })}
        </div>
        </div>
            {/* button section */}
        <div className={styles.ButtonContainer}>
          {isAlarmSet ? <button className={styles.AlarmSubmitButton({on:alarmArr.length>0})}
          onClick={() => {
            if(alarmArr.length===0){
              setIsAlarmSet(false);
            }else{
              router.push(`/scrap/${scrapId}/make-alarm?alarmArr=${alarmArr.join(',')}`);
            }

            }}>
                다음
            </button> : (
            <>
            <button className={styles.ExportButton}>
                <Sandwich/>
                내보내기
            </button>
            <button className={styles.AlarmButton} onClick={() => setIsAlarmSet(true)}>
                <Bell/>
                알림 설정
            </button>
            </>
          )}
        </div>
    </div>
    </>
  )
}

export default ScrapDetail;