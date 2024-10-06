'use client'
import { useState, useEffect } from 'react'
import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
import Card from '@/components/Card/Card'
import { getUsersNotificationsNotificationIdDetails } from '@/api/scrap/getUsersNotificationsNotificationIdDetails'
import { GetUsersNotificationsNotificationIdDetailsResponse } from '@/api/scrap/getUsersNotificationsNotificationIdDetails'
import { subject } from '@/constants/subject'
import Button from '@/components/Button/Button'
import { useRouter } from 'next/navigation'
interface ScrapPageProps {
    params: {
      notificationId: string;
    };
}

const ScrapNotificationDetail = ({ params }: ScrapPageProps) => {
  const router = useRouter()
    const { notificationId } = params;
    
    const [notificationDetails, setNotificationDetails] = useState<GetUsersNotificationsNotificationIdDetailsResponse | null>(null);
    useEffect(() => {
      getUsersNotificationsNotificationIdDetails(notificationId).then((res) => {
        console.log(res)
        setNotificationDetails(res)
      })
    }, [notificationId])

    return (
        <>
        <BackBar/>
        <div className={styles.OuterContainer}>
            <div className={styles.InnerContainer}>
                {/* header section */}
                <div className={styles.Header}>
                  <div className={styles.Head}>
                  <p>{notificationDetails?.notificationName}</p>
                  </div>
                  <p className={styles.Sub}>{notificationDetails?.notificationTalkTopics.length} Tokpiks</p>
                </div>
                {/* content section */}
                <div className={styles.relativeCardWrapper}>
                  <Node position='start' title='시작' timeContent={`${notificationDetails?.notificationStartTime}부터 ${notificationDetails?.notificationIntervalMinutes}분 간격으로`}/>
                  {notificationDetails?.notificationTalkTopics.map((topic, index) => (
                    <Node 
                    key={index} 
                    number={index + 1}
                    position='middle'  
                    timeContent={topic.noticeTime}
                    talkTopicTitle={topic.talkTopicTitle}
                    talkTopicTypeId={topic.talkTopicTypeId}
                    />
                  ))}
                  <Node position='end' title='종료' timeContent={`${notificationDetails?.notificationEndTime}까지`}/>
                </div>
            </div>
            {/* button section */}
            <div className={styles.ButtonContainer}>
              <Button size='large' label='편집' active={true} onClick={() => {
                router.push(`/alarm/${notificationId}`)
              }}/>
            </div>
        </div>
        </>
    )
}

export default ScrapNotificationDetail;

interface NodeProps { 
  position: 'start' | 'middle' | 'end';
  title?: string;
  timeContent: string;
  talkTopicTitle?: string;
  talkTopicTypeId?: number;
  number?: number;
}
const Node= ({number,position,title,timeContent,talkTopicTitle,talkTopicTypeId}:NodeProps) => {
  return (
    <div className={styles.Node({position})}>
<p className={styles.NodeTitle({position})} style={number !== undefined ? { '--before-content': `"${number}"` } as React.CSSProperties : undefined}>
      {title}
    </p>        
    {position === 'middle' ? 
        <div className={styles.NodeMiddle}> 
        <Card size='medium' type={subject[talkTopicTypeId || 0].eng as "love" | "business" | "ice-breaker" | "humor" | "issue" | "hobby" | "self-development" | "relation"} title={talkTopicTitle || ''}/>
        <p>{timeContent}</p>
        </div>
        :
        <p className={styles.NodeContent}>{timeContent}</p>
        }
  </div>
  )
}
