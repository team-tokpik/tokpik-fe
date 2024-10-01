'use client'
import Navigation from '@/components/Navigation/Navigation'
import * as styles from './page.css'
import {scrapTabTexts} from '@/constants/scrapTabTexts'
import FilterTabButton from '@/components/FilterTabButton/FilterTabButton'
import { useState } from 'react'
import ScrapTitle from '@/components/ScrapTitle/ScrapTitle'
import { vars } from '../globals.css'
import Plus from '/public/images/FilterInputPlus.svg'
import Minus from '/public/images/Minus.svg'
export default function Home() {
    // 선택된 탭
    const [selectedTab, setSelectedTab] = useState<string>('스크랩')

    // 탭 클릭시 클릭된 버튼의 텍스트를 상태로 저장
    const handleTabSelect = (text: string) => {
      setSelectedTab(text)
    }
  return (
    <>
      <Navigation />
      <main className={styles.Main}>
       {/* header */}
       <div className={styles.Header}>
        <p className={styles.Head}>My <span className={styles.Orange}>TokPik</span></p>
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
        {/* 추가, 편집 버튼  */}
        <div className={styles.FuncButtonContainer}>
          <div className={styles.ButtonBox({type:'plus'})}><Plus/><p>추가</p></div>
          <div className={styles.ButtonBox({type:'minus'})}><Minus/><p>편집</p></div>
        </div>
        {/* scrap title section */}
        <div className={styles.ScrapTitleContainer}>
          <ScrapTitle title="스크랩 제목" onClick={()=>{}} count={8} colorSet={[vars.color.avocado,vars.color.cheese,vars.color.egg,undefined]}/>
          <ScrapTitle title="스크랩 제목" onClick={()=>{}} count={8} colorSet={[vars.color.avocado,vars.color.cheese,vars.color.egg,undefined]}/>
          <ScrapTitle title="스크랩 제목" onClick={()=>{}} count={8} colorSet={[vars.color.avocado,vars.color.cheese,vars.color.egg,undefined]}/>

        </div>
      </main>
    </>
  )
}
