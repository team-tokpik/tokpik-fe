'use client'
import BackBar from '@/components/BackBar/BackBar'
import * as styles from './page.css'

const App = () => {
  return (
    <>
      <BackBar />
      <main className={styles.Main}>
        {/* header section*/}
        <div>
          <p>떠나신다니</p>
          <p>아쉬워요!</p>
        </div>
        {/* info section */}
        <div></div>
        {/* button section */}
        <div></div>
      </main>
    </>
  )
}
export default App
