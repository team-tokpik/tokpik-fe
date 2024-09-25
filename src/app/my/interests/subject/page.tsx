import * as styles from './page.css'
import BackBar from '@/components/BackBar/BackBar'
const App = () => {
  return (
    <>
      <BackBar />
      <main className={styles.Main}></main>
    </>
  )
}
export default App
