'use client'
import * as styles from './InterestTabButton.css'
import { useRouter } from 'next/navigation'
import { interestTabButton } from '@/types/interestTabButton'
const InterestTabButton = ({ head, sub, to }: interestTabButton) => {
  const router = useRouter()
  return (
    <div
      className={styles.subHeaderContainer}
      onClick={() => {
        router.push(`/my/interests/${to}`)
      }}
    >
      <div className={styles.subHeader}>
        <p className={styles.subHeaderHead}>{head}</p>

        <p className={styles.subHeaderSub}>{sub}</p>
      </div>
      <div className={styles.modifyButton}>
        <p>편집</p>
      </div>
    </div>
  )
}
export default InterestTabButton
