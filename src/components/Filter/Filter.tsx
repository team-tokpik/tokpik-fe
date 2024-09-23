'use client'
import * as styles from './Filter.css'
import { useEffect, useState } from 'react'
import FilterTabButton from '../FilterTabButton/FilterTabButton'
import FilterInput from '../FilterInput/FilterInput'
import FilterContentButton from '../FilterContentButton/FilterContentButton'
import FilterRefresh from '@/../public/images/FilterRefresh.svg'
import { filterContant } from '@/constants/filterContant'
export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string>('목적')

  const handleTabSelect = (text: string) => {
    setSelectedTab(text) // 클릭된 버튼의 텍스트를 상태로 저장
  }

  const renderContent = () => {
    //각 탭을 클릭하면 탭에 따른 내용으로 바뀝니다!
    // 각 탭에 해당하는 콘텐츠
    const renderButtons = (contents: string[], size: 50 | 100) =>
      contents.map((content) => (
        <FilterContentButton key={content} size={size} content={content} />
      ))

    switch (selectedTab) {
      case '목적':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(filterContant.purpose, 50)}
          </div>
        )
      case '상황':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(filterContant.situation, 50)}
          </div>
        )
      case '분위기':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(filterContant.mood, 100)}
          </div>
        )
      case '상대':
        return (
          <div className={styles.ContentBox}>
            <div className={styles.SubHead}>성별</div>
            <div className={styles.SubBody}>
              {renderButtons(filterContant.partnerGender, 50)}
            </div>
            <div className={styles.SubHead}>연령대</div>
            <div className={styles.SubBody}>
              {renderButtons(filterContant.partnerAge, 50)}
            </div>
          </div>
        )
      default:
        return <p>탭을 선택해 주세요</p>
    }
  }

  return (
    <div className={styles.OuterContainer}>
      <div className={styles.MiddleContainer}>
        <div className={styles.InnerContainer}>
          {/* handle section - 편의성을 위해서 터치되는 영역은 손잡이x 손잡이 영역o */}
          <div className={styles.HandleBox}>
            {/* handle */}
            <div className={styles.Handle}></div>
          </div>
          {/* tab section - 목적 상황 분위기 상대 */}
          <div className={styles.TabBox}>
            <FilterTabButton
              text="목적"
              onSelect={handleTabSelect}
              selectedTab={selectedTab}
            />
            <FilterTabButton
              text="상황"
              onSelect={handleTabSelect}
              selectedTab={selectedTab}
            />
            <FilterTabButton
              text="분위기"
              onSelect={handleTabSelect}
              selectedTab={selectedTab}
            />
            <FilterTabButton
              text="상대"
              onSelect={handleTabSelect}
              selectedTab={selectedTab}
            />
          </div>
          {/* selected section */}
          <div className={styles.SelectedBox}>선택없음</div>
          {/* content section */}
          <div className={styles.ContentBox}>{renderContent()}</div>
          <FilterInput />
        </div>
        {/* button section */}
        <div className={styles.ButtonBox}>
          <button className={styles.RefleshButton}>
            <FilterRefresh />
            초기화
          </button>
          <button className={styles.SubmitButton}>적용하기</button>
        </div>
      </div>
    </div>
  )
}
