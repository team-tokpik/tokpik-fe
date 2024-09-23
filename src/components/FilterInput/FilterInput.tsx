import { useState } from 'react'
import * as styles from './FilterInput.css'
import FilterInputPlus from '@/../public/images/FilterInputPlus.svg'
const FilterInput = () => {
  const [istouched, setIstouched] = useState<boolean>(false)

  return istouched ? (
    <div>입력</div>
  ) : (
    <div
      className={styles.OuterContainer}
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
