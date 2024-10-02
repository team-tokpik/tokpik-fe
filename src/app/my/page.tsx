'use client'
import Navigation from '@/components/Navigation/Navigation'
import * as styles from './page.css'
import MyMan from '/public/images/MyMan.svg'
import MyTabs from '@/components/MyTabs/MyTabs'
import { myTabs } from '@/constants/myTabs'
import { getUserProfile } from '@/api/my/getUserProfile'
import { useEffect, useState } from 'react'
export default function Home() {
  const [userEmail, setUserEmail] = useState<string>('');
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string>('');
  useEffect(() => {
    (async () => {    
      const data = await getUserProfile();
      setUserEmail(data.maskedEmail);
      setProfilePhotoUrl(data.profilePhotoUrl);
    })()
    console.log(profilePhotoUrl)
  }, []);
  return (
    <>
      <Navigation />
      <main className={styles.Main}>
        {/* email section */}
        <div className={styles.EmailOuterBox}>
          <div className={styles.EmailInnerBox}>
            <MyMan />
            {userEmail}
          </div>
        </div>
        {/* button section */}
        {myTabs.map((tab, index) => (
          <MyTabs key={index} head={tab.head} sub={tab.sub} to={tab.to} />
        ))}
      </main>
    </>
  )
}
