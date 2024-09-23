'use client'
import * as styles from './Filter.css'
import { useEffect, useState } from 'react'
import FilterTabButton from '../FilterTabButton.css.ts/FilterTabButton'
import FilterInput from '../FilterInput/FilterInput'
import FilterContentButton from '../FilterContentButton/FilterContentButton'
import FilterRefresh from '@/../public/images/FilterRefresh.svg'
export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string>('목적')

  const handleTabSelect = (text: string) => {
    setSelectedTab(text) // 클릭된 버튼의 텍스트를 상태로 저장
  }
  // 각 탭에 해당하는 콘텐츠
  const renderContent = () => {
    const contentMap = {
      목적: ['친목', '소개팅', '비즈니스', '일상'],
      상황: ['첫만남', '1 : 1', '집단', '상사', '동료', '친구'],
      분위기: [
        '어색하지 않고 편했으면 좋겠다',
        '유익하면 좋겠다',
        '즐겁고 재밌으면 좋겠다',
        '상대에 대해 알아가면 좋겠다',
      ],
      상대성별: ['남성', '여성'],
      상대연령대: [
        '20대 초반',
        '20대 중반',
        '30대 초반',
        '30대 중반',
        '40대 초반',
        '40대 중반',
      ],
    }

    const renderButtons = (contents: string[], size: 50 | 100) =>
      contents.map((content) => (
        <FilterContentButton key={content} size={size} content={content} />
      ))

    switch (selectedTab) {
      case '목적':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(contentMap.목적, 50)}
          </div>
        )
      case '상황':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(contentMap.상황, 50)}
          </div>
        )
      case '분위기':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(contentMap.분위기, 100)}
          </div>
        )
      case '상대':
        return (
          <div className={styles.ContentBox}>
            <div className={styles.SubHead}>성별</div>
            <div className={styles.SubBody}>
              {renderButtons(contentMap.상대성별, 50)}
            </div>
            <div className={styles.SubHead}>연령대</div>
            <div className={styles.SubBody}>
              {renderButtons(contentMap.상대연령대, 50)}
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
