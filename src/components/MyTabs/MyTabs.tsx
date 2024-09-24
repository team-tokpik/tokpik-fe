import * as styles from './MyTabs.css'
import MyRightArrow from '/public/images/MyRightArrow.svg'
import { myTabs } from '@/types/myTabs'
import { useRouter } from 'next/navigation'

const MyTabs = ({ head, sub, to }: myTabs) => {
  const router = useRouter()

  return (
    <div
      className={styles.OuterContainer}
      onClick={() => {
        router.push(`/my/${to}`)
      }}
    >
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
