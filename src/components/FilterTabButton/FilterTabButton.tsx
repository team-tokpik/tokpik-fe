'use client'
import { useState, useEffect } from 'react'
import * as styles from './FilterTabButton.css'
import { filterTabButton } from '@/types/filterTabButton'

const FilterTabButton = ({ text, onSelect, selectedTab }: filterTabButton) => {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  // 버튼이 마운트 될 때 선택되었는지 확인
  useEffect(() => {
    setIsSelected(selectedTab === text)
  }, [selectedTab])

  return (
    <button
      className={`${styles.OuterContainer({ isSelected })}`}
      onClick={() => {
        onSelect(text)
      }}
    >
      {text}
    </button>
  )
}
export default FilterTabButton
