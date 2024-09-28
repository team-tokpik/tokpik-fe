import * as styles from './SelectedFilter.css'
import OrangeX from '/public/images/OrangeX.svg'

interface selectedFilter {
  text: string
  onClick: () => void
}

const SelectedFilter = ({ text, onClick }: selectedFilter) => {
  return (
    <div className={styles.Tag}>
      {text}
      <OrangeX onClick={onClick} />
    </div>
  )
}
export default SelectedFilter
