import * as styles from './InterestButton.css'
import { getEmoji } from '@/constants/location'
interface InterestButtonProps {
  size: 'small' | 'large'
  text: string
  isOn: boolean
  onClick: () => void
}
const InterestButton = ({ size, text, isOn, onClick }: InterestButtonProps) => {
  return (
    <button className={styles.OuterContainer({ size, isOn })} onClick={onClick}>
      {size === 'large' && <p>{getEmoji(text)}</p>}

      <p>{text}</p>
    </button>
  )
}

export default InterestButton
