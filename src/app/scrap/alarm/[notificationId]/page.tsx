'use client'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
import Card from '@/components/Card/Card'
interface ScrapPageProps {
    params: {
      notificationId: string;
    };
}

const ScrapNotificationDetail = ({ params }: ScrapPageProps) => {
    const searchParams = useSearchParams()
    const [scrapName, setScrapName] = useState('')
    const [length, setLength] = useState<number>(0)
    const { notificationId } = params;

    useEffect(() => {
      // 여기에 필요한 데이터 가져오는 로직 추가
    }, [notificationId])

    useEffect(() => {
      // 여기에 searchParams 관련 로직 추가
    }, [searchParams])

    return (
        <>
        <BackBar/>
        <div className={styles.OuterContainer}>
            <div className={styles.InnerContainer}>
                {/* header section */}
                <div className={styles.Header}>
                  <div className={styles.Head}>
                  <p>제목</p>
                  </div>
                  <p className={styles.Sub}>{length} Tokpiks</p>
                </div>
                {/* content section */}
                <div className={styles.relativeCardWrapper}>
                  <Node position='start' title='시작' content='00:00부터 00분 간격으로'/>
                  <Node position='middle'  content='00:00부터 00분 간격으로'/>
                  <Node position='middle'  content='00:00부터 00분 간격으로'/>

                  <Node position='end' title='종료' content='00:00까지'/>
                </div>
            </div>
            {/* button section */}
            <div className={styles.ButtonContainer}>
            </div>
        </div>
        </>
    )
}

export default ScrapNotificationDetail;
const Node= ({position,title,content}:{position:'start' |'middle'| 'end',title?:string,content:string}) => {
  return (
    <div className={styles.Node({position})}>
      <p className={styles.NodeTitle({position})}>{title}</p>
        {position === 'middle' ? 
        <div className={styles.NodeMiddle}> 
        <Card size='small' type='issue' title='중간'/>
        <p>00:00</p>
        </div>
        :
        <p className={styles.NodeContent}>{content}</p>
        }
  </div>
  )
}
