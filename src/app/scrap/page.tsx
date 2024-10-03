'use client'
import Navigation from '@/components/Navigation/Navigation'
import * as styles from './page.css'
import {scrapTabTexts} from '@/constants/scrapTabTexts'
import FilterTabButton from '@/components/FilterTabButton/FilterTabButton'
import { useState,useEffect } from 'react'
import ScrapTitle from '@/components/ScrapTitle/ScrapTitle'
import Plus from '/public/images/FilterInputPlus.svg'
import Minus from '/public/images/Minus.svg'
import { getUsersScraps } from '@/api/scrap/getUsersScraps'
import { getUsersNotifications,Notification } from '@/api/scrap/getUsersNotifications'
import { Scrap } from '@/api/scrap/getUsersScraps'
import { subject } from '@/constants/subject'
import { useRouter } from 'next/navigation'
import ScrapAlarmTitle from '@/components/ScrapAlarmTitle/ScrapAlarmTitle'
export default function Home() {
    // 선택된 탭
    const [selectedTab, setSelectedTab] = useState<string>('스크랩')
    const [scraps,setScraps] = useState<Scrap[]>([])
    const [notifications,setNotifications] = useState<Notification[]>([])
    const router = useRouter() //라우터


    // 탭 클릭시 클릭된 버튼의 텍스트를 상태로 저장
    const handleTabSelect = (text: string) => {
      setSelectedTab(text)
    }

    //화면이 마운트될 때, 스크랩 리스트 들을 가져옵니다!
    useEffect(()=>{
      getUsersScraps().then((res)=>{
        setScraps(res.scraps)
        console.log(res.scraps)
      })
      getUsersNotifications().then((res)=>{
        setNotifications(res.contents as Notification[])
        console.log(res.contents)
      })
    },[])
    
  return (
    <>
      <Navigation />
      <main className={styles.Main}>
       {/* header */}
       <div className={styles.Header}>
        <p className={styles.Head}>My <span className={styles.Orange}>TokPik</span></p>
       </div>
        {/* tab section - 스크랩 , 예약 톡픽 */}
        <div className={styles.TabBox}>
          {scrapTabTexts.map((text, index) => (
            <FilterTabButton
              key={index}
              text={text}
              onSelect={handleTabSelect}
              selectedTab={selectedTab}
            />
          ))}
        </div>
        {selectedTab === "스크랩" ?  
        <>
        {/* 추가, 편집 버튼  */}
        <div className={styles.FuncButtonContainer}>
          <div className={styles.ButtonBox({type:'plus'})}><Plus/><p>추가</p></div>
          <div className={styles.ButtonBox({type:'minus'})}><Minus/><p>편집</p></div>
        </div>
        {/* scrap title section */}
        <div className={styles.ScrapTitleContainer}>
          {scraps.map((scrap)=>{
            return <ScrapTitle 
              key={scrap.scrapId}
              title={scrap.scrapName} 
              onClick={() => {
                router.push(`/scrap/${scrap.scrapId}?scrapName=${scrap.scrapName}&length=${scrap.recentTopicTypes.length}`);
              }}
              count={scrap.recentTopicTypes.length} 
              colorSet={scrap.recentTopicTypes.slice(0, 4).map((topic) => {
                const matchedSubject = subject.find(s => s.label === topic.topicTypeContent);
                return matchedSubject ? `${matchedSubject.eng}` : undefined;
              }).concat(Array(4).fill(undefined)).slice(0, 4) as [string | undefined, string | undefined, string | undefined, string | undefined]}
            />
          })}
        </div>
        </>
        :
        <>{/* 추가, 편집 버튼  */}
        <div className={styles.FuncButtonContainer}>
          <div ></div>
          <div className={styles.ButtonBox({type:'minus'})}><Minus/><p>편집</p></div>
        </div>
        {/* scrap title section */}
        <div className={styles.ScrapTitleContainer}>
          {notifications.map((notification)=>{
            return <ScrapAlarmTitle 
              key={notification.notificationId}
              month={notification.noticeDate.slice(5,7)}
              day={notification.noticeDate.slice(8,10)}
              title={notification.scrapName} 
              startTime={notification.notificationStartTime} 
              endTime={notification.notificationEndTime} 
              gaptime={notification.notificationInterval.toString()} 
              colorSet={notification.notificationTalkTopicTypes.slice(0, 4).map((topic) => {
                const matchedSubject = subject.find(s => s.label === topic.topicTypeContent);
                return matchedSubject ? `${matchedSubject.eng}` : undefined;
              }).concat(Array(4).fill(undefined)).slice(0, 4) as [string | undefined, string | undefined, string | undefined, string | undefined]}
              count={notification.notificationTopicTotal}
              onClick={()=>{router.push(`/scrap/alarm/${notification.notificationId}`)}}
            />
          })}
        </div></>
      }
      </main>
    </>
  )
}
