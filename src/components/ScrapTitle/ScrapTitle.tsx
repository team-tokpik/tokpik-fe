import * as styles from './ScrapTitle.css'
import RightArrow from '/public/images/MyRightArrow.svg'
import Square from '../Square/Square'
import { useEffect } from 'react'
import Minus from '/public/images/Minus.svg'
interface ScrapTitleProps {
  title: string
  colorSet: [string|undefined, string|undefined, string|undefined, string|undefined] 
  count: number
  onClick: () => void
  isEdit: boolean
}
const ScrapTitle = ({title, colorSet, count, onClick,isEdit}: ScrapTitleProps) => {

  return (
    <div className={styles.OuterContainer} onClick={onClick}>
      <div className={styles.TextContainer}>
        <p>{title}</p>
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
      {isEdit ? <Minus color='white'/> : <RightArrow color='white'/>}
    </div>
  )
}

export default ScrapTitle