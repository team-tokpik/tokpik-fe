'use client'
import Navigation from '@/components/Navigation/Navigation'
import * as styles from './page.css'
import MyMan from '/public/images/MyMan.svg'
import MyTabs from '@/components/MyTabs/MyTabs'
import { myTabs } from '@/constants/myTabs'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className={styles.Main}>
        {/* email section */}
        <div className={styles.EmailOuterBox}>
          <div className={styles.EmailInnerBox}>
            <MyMan />
            *******@kakao.net
          </div>
        </div>
        {/* button section */}
        {myTabs.map((tab, index) => (
          <MyTabs key={index} head={tab.head} sub={tab.sub} />
        ))}
      </main>
    </>
  )
}
