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
  const [minAge, setMinAge] = useState<number | null>(null);
  const [maxAge, setMaxAge] = useState<number | null>(null);
  
  useEffect(() => {
    if (minAge !== null && maxAge !== null) {
      pushList({ tab: '나이', value: `${minAge}세 ~ ${maxAge}세` });
    }
  }, [minAge, maxAge]);

  const filterList = useFilterListState()
  const { pushList, findList, popList, refleshList } = useFilterListActions()
  useEffect(() => {
    const ageFilter = Array.from(filterList).find(item => item.tab === '나이');
    if (!ageFilter) {
      setMinAge(null);
      setMaxAge(null);
    }
  }, [filterList]);

  useEffect(() => {
    console.log(filterList)
  }, [filterList])

  const [selectedTab, setSelectedTab] = useState<string>('목적')

  const handleTabSelect = (text: string) => {
    setSelectedTab(text)
  }

  const FilterContentButtonCLickHandler = (item: string,isContent:boolean) => {
    if(isContent){ 
      findList({ tab: selectedTab, value: item })
        ? popList({ tab: selectedTab, value: item })
        : pushList({ tab: selectedTab, value: item })
      }
    else{
      if(item.includes('~')) popList({ tab: '나이', value: item })
      else popList({ value: item })
    }
   
  }

  const handleMinAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinAge = Number(e.target.value);
    if (maxAge !== null) {
      setMinAge(Math.min(newMinAge, maxAge));
    } else {
      setMinAge(newMinAge);
    }
  };

  const handleMaxAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxAge = Number(e.target.value);
    if (minAge !== null) {
      setMaxAge(Math.max(newMaxAge, minAge));
    } else {
      setMaxAge(newMaxAge);
    }
  };

  const renderContent = () => {
    const renderButtons = (contents: string[][], size: 50 | 100) =>
      contents.map((content) => (
        <FilterContentButton
          key={content[1]}
          size={size}
          content={content[0]}
          isOn={findList({ tab: selectedTab, value: content[1] })}
          onClick={() => {
            FilterContentButtonCLickHandler(content[1],true)
          }}
        />
      ))

    switch (selectedTab) {
      case '목적':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(filterContant.purpose, 50)}
            <FilterInput size={50} tab={selectedTab}/>
          </div>
        )
      case '상황':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(filterContant.situation, 50)}
            <FilterInput size={50} tab={selectedTab} />
          </div>
        )
      case '분위기':
        return (
          <div className={styles.ContentBox}>
            {renderButtons(filterContant.mood, 100)}
            <FilterInput size={100} tab={selectedTab}/>
          </div>
        )
      case '상대':
        return (
          <div className={styles.ContentBox}>
            <div className={styles.SubHead}>성별</div>
            <div className={styles.SubBody}>
              {renderButtons(filterContant.partnerGender, 50)}
            </div>
            <div style={{height:'1.5rem',color:'#212121'}}>s</div>
            <div className={styles.SubHead}>연령대</div>
            <div className={styles.SubBody}>
              <div className={styles.AgeSlider}>
                <div className={styles.AgeSliderLabels}>
                  <span>{minAge !== null ? `${minAge}세` : '선택 없음'}</span>
                  <span>~</span>
                  <span>{maxAge !== null ? `${maxAge}세` : '선택 없음'}</span>
                </div>
                <div className={styles.AgeSliderContainer}>
                  <input
                    type="range"
                    min="20"
                    max="60"
                    step="1"
                    className={styles.AgeSliderInput}
                    value={minAge !== null ? minAge : 20}
                    onChange={handleMinAgeChange}
                  />
                  <input
                    type="range"
                    min="20"
                    max="60"
                    step="1"
                    className={styles.AgeSliderInput}
                    value={maxAge !== null ? maxAge : 60}
                    onChange={handleMaxAgeChange}
                  />
                  {(minAge !== null && maxAge !== null) && (
                    <div
                      className={styles.AgeSliderTrack({front:true})}
                      style={{
                        left: `${((minAge - 20) / 40) * 100}%`,
                        width: `${((maxAge - minAge) / 40) * 100}%`,
                      }}
                    />
                  )}
                   <div
                      className={styles.AgeSliderTrack({front:false})}
                     
                    />
                </div>
              </div>
              <div className={styles.AgeButtonContainer}>
                <SelectedFilter text='20대 초반' onClick={() => {setMinAge(20); setMaxAge(22)}} onX={true} isOn={minAge === 20 && maxAge === 22}/>
                <SelectedFilter text='20대 중반' onClick={() => {setMinAge(23); setMaxAge(26)}} onX={true} isOn={minAge === 23 && maxAge === 26}/>
                <SelectedFilter text='20대 후반' onClick={() => {setMinAge(27); setMaxAge(29)}} onX={true} isOn={minAge === 27 && maxAge === 29}/>
                <SelectedFilter text='30대 초반' onClick={() => {setMinAge(30); setMaxAge(32)}} onX={true} isOn={minAge === 30 && maxAge === 32}/>
                <SelectedFilter text='30대 중반' onClick={() => {setMinAge(33); setMaxAge(36)}} onX={true} isOn={minAge === 33 && maxAge === 36}/>
                <SelectedFilter text='30대 후반' onClick={() => {setMinAge(37); setMaxAge(39)}} onX={true} isOn={minAge === 37 && maxAge === 39}/>
              </div>
            </div>
          </div>
        )
      default:
        return <p>탭을 선택해 주세요</p>
    }
  }

  const refleshHandler = () => {
    setMaxAge(null);
    setMinAge(null);
    refleshList();
  }

  const submitHandler = () => {
    filterHandler()
  }

  return (
    <div className={styles.MiddleContainer({ isOn })}>
      <div className={styles.InnerContainer}>
        <div className={styles.HandleBox} onClick={filterHandler}>
          <div className={styles.Handle} />
        </div>
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
        <div className={styles.SelectedBox}>
          {filterList.size == 0 ? (
            <p>선택없음</p>
          ) : (
            Array.from(filterList).map((value) => (
              <SelectedFilter
                key={value.value}
                text={value.value}
                onClick={() => {
                  FilterContentButtonCLickHandler(value.value,false)
                }}
              />
            ))
          )}
        </div>
        <div className={styles.ContentBox}>{renderContent()}</div>
      </div>
      <div className={styles.ButtonBox}>
        <button className={styles.RefleshButton} onClick={refleshHandler}>
          <FilterRefresh />
          초기화
        </button>
        <button className={styles.SubmitButton} onClick={submitHandler}>
          적용하기
        </button>
      </div>
    </div>
  )
}

export default Filter
