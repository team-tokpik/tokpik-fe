import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
import InterestTabButton from '@/components/InterestTabButton/InterestTabButton'
import { interestTabButton } from '@/constants/interestTabButton'
const App = () => {
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
        {/* 주제 섹션 */}
        <InterestTabButton
          head={interestTabButton.subject.head}
          sub={interestTabButton.subject.sub}
          to={interestTabButton.subject.to}
        />
      </main>
    </>
  )
}
export default App
