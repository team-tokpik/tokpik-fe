import * as styles from './Spinner.css'
 interface SpinnerProps {   
  text?: string  // text를 선택적 prop으로 변경
 }
 interface RectangleProps {
    className?: string;
  }
 const Rectangle = ({ className }: RectangleProps) => {
    return <div className={`${styles.Rectangle} ${className || ''}`}></div>
  }
const Spinner = ({text}:SpinnerProps) => {
  return <div className={styles.OuterContainer}>
    <div className={styles.SpinnerContainer}>
            <Rectangle className={styles.Rectangle1}/>
            <Rectangle className={styles.Rectangle2}/>
            <Rectangle className={styles.Rectangle3}/>
            <Rectangle className={styles.Rectangle4}/>
    </div>
    <p className={styles.LoadingText}>조금만 기다려주세요</p>
    {text && <div className={styles.Text}>{text}</div>}  
  </div>
}

export default Spinner
