'use client'
import * as styles from './Filter.css'
import { useEffect, useState } from 'react'
import FilterTabButton from '../FilterTabButton/FilterTabButton'
import FilterInput from '../FilterInput/FilterInput'
import FilterContentButton from '../FilterContentButton/FilterContentButton'
import FilterRefresh from '@/../public/images/FilterRefresh.svg'
import { filterContant } from '@/constants/filterContant'
import { filter } from '../../types/filter'
import { filterTabTexts } from '@/constants/filterTabTexts'
import { useFilterListState, useFilterListActions } from '@/store/useFilterList'
import SelectedFilter from '../SelectedFilter/SelectedFilter'
const Filter = ({ isOn, filterHandler }: filter) => {
  const filterList = useFilterListState() //전역상태: 선택된 필터 리스트

  // 테스트코드: 필터리스트가 콘솔에 나옴
  useEffect(() => {
    console.log(filterList)
  }, [filterList])

  // 전역상태 액션들
  const { pushList, findList, popList, refleshList } = useFilterListActions()

  // 선택된 탭
  const [selectedTab, setSelectedTab] = useState<string>('목적')

  // 탭 클릭시 클릭된 버튼의 텍스트를 상태로 저장
  const handleTabSelect = (text: string) => {
    setSelectedTab(text)
  }

  // 필터 내용 클릭하면 전역상태에 저장~
  const FilterContentButtonCLickHandler = (item: string) => {
    findList({tab:selectedTab,value:item}) ? popList({tab:selectedTab,value:item}) : pushList({tab:selectedTab,value:item})
  }

  //각 탭을 클릭하면 탭에 따른 내용으로 바뀝니다!
  const renderContent = () => {
    // 각 탭에 해당하는 콘텐츠
    const renderButtons = (contents: string[][], size: 50 | 100) =>
      contents.map((content) => (
        <FilterContentButton
          key={content[1]}
          size={size}
          content={content[0]}
          isOn={findList({tab:selectedTab,value:content[1]})}
          onClick={() => {
            FilterContentButtonCLickHandler(content[1])
          }}
        />
      ))

    switch (selectedTab) {
      case '목적':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(filterContant.purpose, 50)}
            <FilterInput size={50} />
          </div>
        )
      case '상황':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(filterContant.situation, 50)}
            <FilterInput size={50} />
          </div>
        )
      case '분위기':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(filterContant.mood, 100)}
            <FilterInput size={100} />
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
            <FilterInput size={50} />
          </div>
        )
      default:
        return <p>탭을 선택해 주세요</p>
    }
  }

  // 적용하기 버튼 핸들러
  const submitHandler = () => {
    // api연결 예정!
  }
  return (
    // <div className={styles.OuterContainer({ isOn })}>
    <div className={styles.MiddleContainer({ isOn })}>
      <div className={styles.InnerContainer}>
        {/* handle section - 편의성을 위해서 터치되는 영역은 손잡이x 손잡이 영역o */}
        <div className={styles.HandleBox} onClick={filterHandler}>
          {/* handle */}
          <div className={styles.Handle} />
        </div>
        {/* tab section - 목적 상황 분위기 상대 */}
        <div className={styles.TabBox}>
          {filterTabTexts.map((text, index) => (
            <FilterTabButton
              key={index}
              text={text}
              onSelect={handleTabSelect}
              selectedTab={selectedTab}
            />
          ))}
        </div>
        {/* selected section */}
        <div className={styles.SelectedBox}>
          {filterList.size == 0 ? (
            <p>선택없음</p>
          ) : (
            Array.from(filterList).map((value) => (
              <SelectedFilter
                key={value.value}
                text={value.value}
                onClick={() => {
                  FilterContentButtonCLickHandler(value.value)
                }}
              />
            ))
          )}
        </div>
        {/* content section */}
        <div className={styles.ContentBox}>{renderContent()}</div>
      </div>
      {/* button section */}
      <div className={styles.ButtonBox}>
        <button className={styles.RefleshButton} onClick={refleshList}>
          <FilterRefresh />
          초기화
        </button>
        <button className={styles.SubmitButton} onClick={submitHandler}>
          적용하기
        </button>
      </div>
    </div>
    // </div>
  )
}
export default Filter
