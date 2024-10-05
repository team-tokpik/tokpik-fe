import * as styles from './SelectedFilter.css'
import OrangeX from '/public/images/OrangeX.svg'

interface selectedFilter {
    text: string
    onClick: () => void
    onX?:boolean
    isOn?:boolean
}

const SelectedFilter = ({ text, onClick, onX ,isOn}: selectedFilter) => {
  return (
    <div className={styles.Tag({isOn})} onClick={onX ? onClick : undefined}>
      {text}
      {onX==undefined && <OrangeX onClick={onClick} />}
    </div>
  )
}
export default SelectedFilter
