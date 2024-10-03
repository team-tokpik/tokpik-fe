import * as styles from './DateSlash.css'

const DateSlash = ({month, day}: {month: string, day: string}) => {
  return (
    <div className={styles.OuterContainer}>
      <p style={{ gridRow: 1, gridColumn: 1 }}>{month}</p>
      <div style={{ 
        gridRow: '1 / span 2', 
        gridColumn: '1 / span 2', 
        background: 'white', 
        width: '1px', 
        height: '100%', 
        transform: 'rotate(45deg)',
        justifySelf: 'center',
        alignSelf: 'center'
      }}/>
      <p style={{ gridRow: 2, gridColumn: 2 }}>{day}</p>
    </div>
  )
}

export default DateSlash