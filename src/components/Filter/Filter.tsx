'use client'
import * as styles from './Filter.css'
import { useEffect, useState } from 'react'
import FilterTabButton from '../FilterTabButton.css.ts/FilterTabButton'
import FilterInput from '../FilterInput/FilterInput'
import FilterContentButton from '../FilterContentButton/FilterContentButton'
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.1496 2.67617H11.9602C11.7531 2.67617 11.5852 2.84406 11.5852 3.05117C11.5852 3.25827 11.7531 3.42617 11.9602 3.42617L13.1307 3.42617C13.3378 3.42617 13.5057 3.25827 13.5057 3.05117V1.88068C13.5057 1.67357 13.3378 1.50568 13.1307 1.50568C12.9236 1.50568 12.7557 1.67357 12.7557 1.88068V2.20054C11.5506 1.21231 10.0619 0.61993 8.49466 0.516339C6.68048 0.396428 4.88451 0.93961 3.44086 2.04483C1.99722 3.15006 1.0042 4.74206 0.646554 6.52468C0.288907 8.3073 0.590982 10.1591 1.49658 11.7357C2.40218 13.3122 3.84964 14.5062 5.56967 15.0953C7.28971 15.6845 9.1652 15.6288 10.8472 14.9386C12.5293 14.2483 13.9033 12.9706 14.7137 11.3431C15.4683 9.82771 15.6864 8.10516 15.3393 6.45572C15.2967 6.25305 15.0906 6.13354 14.8903 6.18626C14.69 6.23899 14.5715 6.44397 14.613 6.64687C14.9145 8.12019 14.7159 9.65618 14.0424 11.0088C13.313 12.4735 12.0763 13.6235 10.5625 14.2447C9.04868 14.8659 7.36074 14.916 5.81271 14.3858C4.26468 13.8555 2.96196 12.781 2.14692 11.3621C1.33189 9.94323 1.06002 8.27657 1.3819 6.67221C1.70378 5.06786 2.5975 3.63505 3.89678 2.64035C5.19606 1.64565 6.81243 1.15679 8.4452 1.26471C9.7997 1.35423 11.089 1.84941 12.1496 2.67617Z"
                fill="#555555"
              />
            </svg>
            초기화
          </button>
          <button className={styles.SubmitButton}>적용하기</button>
        </div>
      </div>
    </div>
  )
}
