import * as styles from './FilterContentButton.css'
import FilterCheckButtonOff from '@/../public/images/FilterCheckButtonOff.svg'
import FilterCheckButtonOn from '@/../public/images/FilterCheckButtonOn.svg'

interface fcbProps {
  size: 50 | 100
  content: string
}
const FilterContentButton = ({ size, content }: fcbProps) => {
  return (
    <div className={styles.OuterContainer({ size })}>
      <FilterCheckButtonOff />
      <FilterCheckButtonOn />
      {content}
    </div>
  )
}
export default FilterContentButton
