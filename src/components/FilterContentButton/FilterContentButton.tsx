import * as styles from './FilterContentButton.css'
import FilterCheckButtonOff from '@/../public/images/FilterCheckButtonOff.svg'
import FilterCheckButtonOn from '@/../public/images/FilterCheckButtonOn.svg'
import { filterContentButton } from '@/types/filterContentButton'

const FilterContentButton = ({
  size,
  content,
  isOn,
  onClick,
}: filterContentButton) => {
  return (
    <div className={styles.OuterContainer({ size, isOn })} onClick={onClick}>
      {isOn ? <FilterCheckButtonOn /> : <FilterCheckButtonOff />}
      {content}
    </div>
  )
}
export default FilterContentButton
