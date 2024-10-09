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
import { deleteUsersNotifications } from '@/api/scrap/deleteUsersNotifications'
import { deleteUsersScrapsScrapId } from '@/api/scrap/deleteUsersScrapsScrapId'
import { postUsersScrap } from '@/api/scrap/postUsersScraps'
export default function Home() {
    // 선택된 탭
    const [selectedTab, setSelectedTab] = useState<string>('스크랩')
    const [scraps,setScraps] = useState<Scrap[]>([])
    const [notifications,setNotifications] = useState<Notification[]>([])
    const router = useRouter() //라우터
    const [isEdit,setIsEdit] = useState<boolean>(false) // 편집 중을 나타냄
    const [isAdding,setIsAdding] = useState<boolean>(false) // 추가 중을 나타냄
    const [nextCursorId,setNextCursorId] = useState<number>(0)
    const [last,setLast] = useState<boolean>(false)
    // 탭 클릭시 클릭된 버튼의 텍스트를 상태로 저장
    const handleTabSelect = (text: string) => {
      setSelectedTab(text)
    }

    //화면이 마운트될 때, 스크랩 리스트 들을 가져옵니다!
    useEffect(()=>{
      getUsersScraps().then((res)=>{
        setScraps(res.scraps)
        console.log('스크랩: ',res.scraps)
      })
      getUsersNotifications(nextCursorId !== 0 ? nextCursorId : undefined).then((res)=>{
        setNotifications(res.contents as Notification[])
        setNextCursorId(res.nextCursorId)
        setLast(res.last)
        console.log('예약: ',res.contents)
        console.log('nextCursorId: ',res.nextCursorId)
        console.log('last: ',res.last)
      })
    },[])

    const deleteHandler = async (Id:number,scrapName:string)=>{
      try {
        if(scrapName === '스크랩'){
          await deleteUsersScrapsScrapId(Id);
          setScraps(prevScraps => 
            prevScraps.filter(scrap => scrap.scrapId !== Id)
          );
        }else if(scrapName === '예약'){
          await deleteUsersNotifications(Id);
          setNotifications(prevNotifications => 
            prevNotifications.filter(notification => notification.notificationId !== Id)
          );
        }
      } catch (error) {
        console.error('알림 삭제 중 오류 발생:', error);
      }
    }

    const addFunction = async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const target = e.target as HTMLInputElement; // 타입 안전성 강화-target에 value가 없다는 에러를 해결해준다
        if (target.value.trim()) { // 빈 값 확인 (공백 제외)
          try {
              const res = await postUsersScrap(target.value); // 값을 서버로 전송하는 함수
              console.log(res, target.value);
              
              // 새로운 스크랩 객체 생성
              const newScrap = {
                scrapId: res.scrapId,
                scrapName: target.value,
                recentTopicTypes: []
              };
              
              console.log('새로운 스크랩:', newScrap);
              
              setScraps(prevScraps => {
                const updatedScraps = [newScrap, ...prevScraps];
                console.log('업데이트된 스크랩 목록:', updatedScraps);
                return updatedScraps;
              });
            setIsAdding(false); //추가 중인 상태를 해제
            target.value = ''; // 입력 필드 초기화
          } catch (error) {
            console.error('스크랩 추가 중 오류 발생:', error);
            // 사용자에게 오류 메시지 표시 (예: 알림 또는 상태 업데이트)
          }
        }
      }
    };

  return (
    <>
      <Navigation />
      <main className={styles.Main}>
       {/* header */}
       <div className={styles.Header}>
        <p className={styles.Head}>My <span className={styles.Orange}>Tokpik</span></p>
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
          <div className={styles.ButtonBox({type:'plus'})}
        onClick={()=>{setIsAdding(true)}}><Plus/><p>추가</p></div>
          <div 
          className={styles.ButtonBox({type:'minus'})} 
        onClick={()=>{setIsEdit(!isEdit)}}>
          {isEdit ? <p>완료</p> : <><Minus/><p>편집</p></>}
          </div>
        </div>
        {/* scrap title section */}
        <div className={styles.ScrapTitleContainer}>

          {/* 스크랩 추가 버튼을 누르면 나타나는 UI */}
          {isAdding && <ScrapTitle 
            key={scraps.length}
            isEdit={isEdit}
            title={'새 스크랩'}
            onClick={() => {
              setIsAdding(false);
            }}
            isAdding={isAdding}
            addFunction={addFunction}
            count={0}
            colorSet={Array(4).fill(undefined) as [string | undefined, string | undefined, string | undefined, string | undefined]}
          />}
            
          {/* 스크랩 들 */}
          {scraps.map((scrap)=>{
            return <ScrapTitle 
              key={scrap.scrapId}
              isEdit={isEdit}
              title={scrap.scrapName} 
              onClick={() => {
                isEdit ? deleteHandler(scrap.scrapId,'스크랩'): router.push(`/scrap/${scrap.scrapId}?scrapName=${scrap.scrapName}&length=${scrap.recentTopicTypes.length}`);
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
          <div className={styles.ButtonBox({type:'minus'})}
          onClick={()=>{setIsEdit(!isEdit)}}>
            {isEdit ? <p>완료</p> : <><Minus/><p>편집</p></>}
            </div>
        </div>
        {/* scrap title section */}
        <div className={styles.ScrapTitleContainer}>
          {notifications.map((notification)=>{
            return <ScrapAlarmTitle 
              key={notification.notificationId}
              month={notification.noticeDate.slice(5,7)}
              day={notification.noticeDate.slice(8,10)}
              title={notification.notificationName} 
              startTime={notification.notificationStartTime} 
              endTime={notification.notificationEndTime} 
              gaptime={notification.notificationInterval.toString()} 
              colorSet={notification.notificationTalkTopicTypes.slice(0, 4).map((topic) => {
                const matchedSubject = subject.find(s => s.label === topic.topicTypeContent);
                return matchedSubject ? `${matchedSubject.eng}` : undefined;
              }).concat(Array(4).fill(undefined)).slice(0, 4) as [string | undefined, string | undefined, string | undefined, string | undefined]}
              count={notification.notificationTopicTotal}
              onClick={()=>{
                isEdit ? deleteHandler(notification.notificationId,'예약'): router.push(`/scrap/alarm/${notification.notificationId}`)
              }}
              isEdit={isEdit}
            />
          })}
        </div></>
      }
      </main>
    </>
  )
}
