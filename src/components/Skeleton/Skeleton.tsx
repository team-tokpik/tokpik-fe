import * as styles from './Skeleton.css'

const Skeleton = ({ width, height ,radius}: { width: string, height: string, radius: 'full' | 'half' }) => {
  return (
    <div className={styles.Skeleton({radius})} style={{ width, height }}></div>
  )
}

export default Skeleton