'use client'
import { useState, useEffect } from 'react'
import * as styles from './FilterTabButton.css'
interface FilterTabButtonProps {
  text: string
  onSelect: (text: string) => void // 상위 컴포넌트로 전달할 함수
  selectedTab: string
}

const FilterTabButton = ({
  text,
  onSelect,
  selectedTab,
}: FilterTabButtonProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  // 버튼이 마운트 될 때 선택되었는지 확인
  useEffect(() => {
    setIsSelected(selectedTab === text)
  }, [selectedTab])

  return (
    <button
      className={`${styles.OuterContainer} ${isSelected && styles.Selected}`}
      onClick={() => {
        onSelect(text)
      }}
    >
      {text}
    </button>
  )
}
export default FilterTabButton
