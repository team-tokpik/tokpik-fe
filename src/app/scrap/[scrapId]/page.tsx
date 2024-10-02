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
    const searchParams = useSearchParams()
    const [scrapName, setScrapName] = useState('')
    const [length, setLength] = useState<number>(0)
    const { scrapId } = params;
    const [scrapTopics, setScrapTopics] = useState<Topic[]>([])
    useEffect(() => {
      if (scrapId) {
        getUsersScrapsScrapIdTopics(Number(scrapId))
          .then((response) => {
            setScrapTopics(response.contents)
          })
          .catch((error) => {
            console.error('스크랩 토픽 정보 가져오기 실패:', error)
          })
      }
    }, [scrapId])

    useEffect(() => {
      const scrapNameParam = searchParams.get('scrapName')
      const lengthParam = searchParams.get('length')
    
      if (scrapNameParam) setScrapName(scrapNameParam)
      if (lengthParam) setLength(Number(lengthParam))
    }, [searchParams])

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
        <p className={styles.Sub}>{length} Tokpiks</p>
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
                    />
                );
            })}
        </div>
        </div>
            {/* button section */}
        <div className={styles.ButtonContainer}>
            <button className={styles.ExportButton}>
                <Sandwich/>
                내보내기
            </button>
            <button className={styles.AlarmButton}>
                <Bell/>
                알림 설정
            </button>
        </div>
    </div>
    </>
  )
}

export default ScrapDetail;