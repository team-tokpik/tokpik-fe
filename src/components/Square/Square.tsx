import { SquareProps } from '@/types/squareProps'
import * as styles from './Square.css'

type SquareColor = "ice-breaker" | "love" | "business" | "humor" | "issue" | "hobby" | "self-development" | "relation" | "primary" | undefined;



const Square = ({ className, color }: SquareProps) => {
  return (
    <div 
      className={`${styles.Square({ color: color as SquareColor })} ${className || ''}`}
    ></div>
  )
}

export default Square
