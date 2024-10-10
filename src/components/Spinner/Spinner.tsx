import * as styles from './Spinner.css'
import Square from '../Square/Square'
import { SpinnerProps } from '@/types/spinnerProps'

const Spinner = ({ type, sub, text, size }: SpinnerProps) => {
  return (
    <div 
      className={styles.OuterContainer({size})}
    >
      <div className={styles.SpinnerContainer({type})}>
        <Square className={styles.Square1({type})} color="primary"/>
        <Square className={styles.Square2({type})} color="primary"/>
        <Square className={styles.Square3({type})} color="primary"/>
        <Square className={styles.Square4({type})} color="primary"/>
      </div>
      {sub && <p className={styles.LoadingText}>{sub}</p>}
      {text && <div className={styles.Text}>{text}</div>}
    </div>
  )
}

export default Spinner
