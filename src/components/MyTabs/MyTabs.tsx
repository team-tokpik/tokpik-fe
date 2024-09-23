import * as styles from './MyTabs.css'
import MyRightArrow from '/public/images/MyRightArrow.svg'
import { myTabs } from '@/types/myTabs'
const MyTabs = ({ head, sub }: myTabs) => {
  return (
    <div className={styles.OuterContainer}>
      <div className={styles.InnerContainer}>
        <p className={styles.Text1}>{head}</p>
        <p className={styles.Text2}>{sub}</p>
      </div>
      <div>
        <MyRightArrow />
      </div>
    </div>
  )
}
export default MyTabs
