import { SquareProps } from '@/types/squareProps'
import * as styles from './Square.css'
const Square = ({ className,color }: SquareProps) => {
  return (
    <div 
      className={`${styles.Square} ${className || ''}`} 
      style={color ? { backgroundColor: color } : undefined}
    ></div>
  )
}
export default Square
