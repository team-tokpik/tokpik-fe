'use client'
import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
import InterestTabButton from '@/components/InterestTabButton/InterestTabButton'
import { interestTabButton } from '@/constants/interestTabButton'
import {EMOJI_MAP} from '@/constants/location'
import { useEffect } from 'react'
import { getUsersPlaceTag } from '@/api/my/getUsersPlaceTag'
import { getUsersTags } from '@/api/my/getUsersTags'
import { useInterestListState,useInterestListActions } from '@/store/useInterestList'

const listContents = (loc:string,text:string,key:number)=>{
return (<div className={styles.ListContainer} key={key}>
  {loc === 'place' && <p>{EMOJI_MAP[text]}</p>}
  <p>{text}</p>
 
</div>)
}

const App = () => {
  const {placeList,subjectList} = useInterestListState()
  const {pushList}=useInterestListActions();
  useEffect(() => {
    (async()=>{
      const placeData = await getUsersPlaceTag(); 
      const subjectData = await getUsersTags(); 
      placeData.map((content) => { pushList('place', content.content) }) 
      subjectData.map((content) => { pushList('subject', content.content) }) 
    })()
    }, [])
  return (
    <>
      <BackBar label='관심 주제 설정'/>
      <main className={styles.Main}>
        {/* 장소 섹션 */}
        <InterestTabButton
          head={interestTabButton.place.head}
          sub={interestTabButton.place.sub}
          to={interestTabButton.place.to}
        />
        {Array.from(placeList).map((place,index) => listContents('place',place,index))}
        {/* 주제 섹션 */}
        <InterestTabButton
          head={interestTabButton.subject.head}
          sub={interestTabButton.subject.sub}
          to={interestTabButton.subject.to}
        />
        {Array.from(subjectList).map((subject,index) => listContents('subject',subject,index))}

      </main>
    </>
  )
}
export default App
