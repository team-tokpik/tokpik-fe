'use client'
import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
import InterestTabButton from '@/components/InterestTabButton/InterestTabButton'
import { interestTabButton } from '@/constants/interestTabButton'
import { useInterestListState } from '@/store/useInterestList'
import {EMOJI_MAP} from '@/constants/location'
const listContents = (loc:string,text:string)=>{
return (<div className={styles.ListContainer}>
  {loc === 'place' && <p>{EMOJI_MAP[text]}</p>}
  <p>{text}</p>
 
</div>)
}
const App = () => {
  const {placeList,subjectList} = useInterestListState()
  return (
    <>
      <BackBar />
      <main className={styles.Main}>
        {/* 장소 섹션 */}
        <InterestTabButton
          head={interestTabButton.place.head}
          sub={interestTabButton.place.sub}
          to={interestTabButton.place.to}
        />
        {Array.from(placeList).map((place) => listContents('place',place))}
        {/* 주제 섹션 */}
        <InterestTabButton
          head={interestTabButton.subject.head}
          sub={interestTabButton.subject.sub}
          to={interestTabButton.subject.to}
        />
                {Array.from(subjectList).map((subject) => listContents('subject',subject))}

      </main>
    </>
  )
}
export default App
