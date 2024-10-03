import * as styles from './ScrapAlarmTitle.css'
import RightArrow from '/public/images/MyRightArrow.svg'
import Square from '../Square/Square'
import DateSlash from '../DateSlash/DateSlash'
import Minus from '/public/images/Minus.svg'
interface ScrapAlarmTitleProps {
    month: string,
    day: string,
  title: string
  colorSet: [string|undefined, string|undefined, string|undefined, string|undefined] 
  count: number
  startTime: string
  endTime: string
  gaptime: string
  onClick: () => void
  isEdit: boolean
}
const ScrapAlarmTitle = ({month,day,title, startTime, endTime, gaptime,colorSet, count, onClick,isEdit}: ScrapAlarmTitleProps) => {

  return (
    <div className={styles.OuterContainer} onClick={onClick}>
        <DateSlash month={month} day={day}/>
      <div className={styles.TextContainer}>
        <p style={{overflowX:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{title}</p>
        <p className={styles.TimeText}>{startTime.slice(0, 5)}부터 {endTime.slice(0, 5)}까지 {gaptime}분 간격으로</p>
        <div className={styles.SubContainer}>
          {colorSet.map((color, index) => (
            <Square
              key={index}
              className={styles[`Square${index + 1}` as keyof typeof styles]}
              color={color}
            />
          ))}
          <p>+{count}</p>
        </div>
      </div>
      {isEdit ?<Minus color='white'/> : <RightArrow color='white'/> }
    </div>
  )
}

export default ScrapAlarmTitle