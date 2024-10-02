'use client'
import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
import InterestButton from '@/components/InterestButton/InterestButton'
import { useInterestListActions } from '@/store/useInterestList'
import { location } from '@/constants/location'

const App = () => {
    const {findList,pushList,popList} = useInterestListActions()
  return (
    <>
      <BackBar />
      <main className={styles.Main}> 
        {/* 헤더 섹션 */}
        <div className={styles.HeadContainer}>
          <p>어떤 장소에서</p>
          <p>톡픽이 필요한가요?</p>
          <p className={styles.HeadSub}>주로 생활하는 공간을 모두 알려주세요</p>
        </div>
        <div className={styles.InterestContainer}>
          {location.map((item)=>(
            <InterestButton 
              key={item.label}
              size='large' 
              text={item.label} 
              isOn={findList('place',item.label)} 
              onClick={()=>{findList('place',item.label) ? popList('place',item.label) : pushList('place',item.label)}}
            />
          ))}
        </div>
         
        {/* submit button */}
          
        <button
          className={styles.SubmitButton}
          disabled={false}
          onClick={() => {}}
        >
          완료
        </button>
      </main>
    </>
  )
}

export default App
