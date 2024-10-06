import * as styles from './Toast.css';
import Check from '/public/images/FilterCheckButtonOn.svg'
const Toast = ({text}:{text:string}) => {
  return (
    <div className={styles.Toast}>
        <Check/>
      <p>{text}</p>
    </div>
  )
}

export default Toast;