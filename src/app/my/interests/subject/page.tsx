'use client'
import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
import InterestButton from '@/components/InterestButton/InterestButton'
import { useInterestListState,useInterestListActions } from '@/store/useInterestList'
import { subject } from '@/constants/subject'
const App = () => {
  const { findList, pushList, popList } = useInterestListActions()
  const {subjectList} = useInterestListState()
  return (
    <>
      <BackBar />
      <main className={styles.Main}>
        {/* header section*/}
        <div className={styles.HeadContainer}>
          <p>어떤 대화 주제를</p>
          <p>원하시나요?</p>
          <p className={styles.HeadSub}>
            원하시는 주제를 모두 선택해주세요
            <br />
            나중에 다른 주제로 변경할 수도 있어요
          </p>
        </div>
        {/* card section */}
        <div className={styles.InterestContainer}>
          {subject.map((item)=>(
            <InterestButton
            key={item.label}
            size="small"
            text={item.label}
            isOn={findList('subject', item.label)}
            onClick={() => {
              findList('subject', item.label)
                ? popList('subject', item.label)
                : pushList('subject', item.label)
            }}
          />
          ))}
        </div>
        {/* submit button */}

        <button
          className={styles.SubmitButton}
          disabled={false}
          onClick={() => {}}
        >
          {' '}
          완료
        </button>
      </main>{' '}
    </>
  )
}
export default App
