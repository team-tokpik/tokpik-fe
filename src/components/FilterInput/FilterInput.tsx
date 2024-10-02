import React, { useState, useRef, useEffect } from 'react'
import * as styles from './FilterInput.css'
import FilterInputPlus from '@/../public/images/FilterInputPlus.svg'
import { filterInput } from '@/types/filterInput'
import OrangeO from '/public/images/OrangeO.svg'
import GrayX from '/public/images/GrayX.svg'
import { useFilterListActions } from '@/store/useFilterList'
const FilterInput = ({ size,tab }: filterInput) => {
  const [istouched, setIstouched] = useState<boolean>(false) // 컴포넌트 on/off 여부
  const inputRef = useRef<HTMLInputElement | null>(null) // input을 감지할 ref
  const containerRef = useRef<HTMLDivElement>(null) // 컴포넌트 바깥을 감지할 ref
  const { pushList } = useFilterListActions() //

  useEffect(() => {
    if (istouched && inputRef.current) {
      // istouched가 true가 될 때 input에 포커스
      inputRef.current.focus()
    }
  }, [istouched])

  //키보드의 enter을 누르면 submit!
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (inputRef.current) {
        // input의 내용을 가져옵니다.
        const inputValue = inputRef.current.value
        // 전역상태 리스트에 값추가
        pushList({tab:tab,value:inputValue})
        // 입력 버튼 off하기
        setIstouched(false)
      }
    }
  }
  // 바깥 클릭 감지
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      // 클릭한 곳이 컴포넌트 바깥이라면
      setIstouched(false)
    }
  }

  // 화면이 렌더될 때, 마우스 클릭에 함수 handleClickOutside 연결해준다!
  useEffect(() => {
    // 이벤트 리스너 추가
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return istouched ? (
    // 직접 입력 버튼을 클릭시 나오는 것들
    <div className={styles.OuterContainer({ size })} ref={containerRef}>
      <OrangeO />
      <input
        className={styles.Input({ size })}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <GrayX
        onClick={() => {
          setIstouched(false)
        }}
      />
    </div>
  ) : (
    // 직접 입력 버튼을 클릭하지 않았을때, 기본으로 나오는 것들
    <div
      className={styles.OuterContainer({ size })}
      onClick={() => {
        setIstouched(true)
      }}
    >
      <FilterInputPlus />
      직접입력
    </div>
  )
}

export default FilterInput
