import * as styles from './Spinner.css'
import Square from '../Square/Square'
import { SpinnerProps } from '@/types/spinnerProps'
import { vars } from '@/app/globals.css'
const Spinner = ({ text }: SpinnerProps) => {
  return (
    <div className={styles.OuterContainer}>
      <div className={styles.SpinnerContainer}>
        <Square className={styles.Square1} color={vars.color.primary}/>
        <Square className={styles.Square2} color={vars.color.primary}/>
        <Square className={styles.Square3} color={vars.color.primary}/>
        <Square className={styles.Square4} color={vars.color.primary}/>
      </div>
      <p className={styles.LoadingText}>조금만 기다려주세요</p>
      {text && <div className={styles.Text}>{text}</div>}
    </div>
  )
}

export default Spinner
