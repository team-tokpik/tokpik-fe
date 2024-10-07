import React from 'react'
import Avocado from '/public/images/card-images/avocado.svg'
import Egg from '/public/images/card-images/egg.svg'
import Ham from '/public/images/card-images/ham.svg'
import Cheese from '/public/images/card-images/cheese.svg'
import Lettuce from '/public/images/card-images/lettuce.svg'
import Pimento from '/public/images/card-images/pimento.svg'
import Tomato from '/public/images/card-images/tomato.svg'
import Sweet from '/public/images/card-images/sweet.svg'
import BookMark from '/public/images/BookMark.svg'
import * as styles from './Card.css'
import { CardType } from '@/types/card'
import { RecipeVariants } from '@vanilla-extract/recipes'
import Subtitle from '../Subtitle/Subtitle'

const cardImages: Record<
  CardType['type'],
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  'relation': Egg,
  'issue': Tomato,
  'love': Sweet,
  'business': Ham,
  'hobby': Cheese,
  'humor': Lettuce,
  'ice-breaker': Avocado,
  'self-development': Pimento,
}

export type DynamicCardProps = CardType &
  RecipeVariants<typeof styles.cardRecipe>

export default function Card({
  size,
  type,
  title,
  description,
  relativePosition,
  onClick,
  isAlarm,
  alarmNumber,
}: DynamicCardProps) {

  const CardImage = cardImages[type] as React.FC<React.SVGProps<SVGSVGElement>>
  const aspectRatio = 
    Math.max(343/483,343 / 483 + Math.max(0,815 - window.innerHeight) / 483)
  

  if (size === 'large') {
    return (
      <div
        className={styles.cardRecipe({
          size,
          type,
          relativePosition,
        })}
        onClick={onClick}
        style={{aspectRatio: aspectRatio}}
      >
        <div style={{padding: '0 24px',width: '100%'}}>
        <Subtitle type={type} isSmall={false} isCard={true} />
        </div>

        <CardImage className={styles.cardImage} />

        <div className={styles.largeContentWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    )
  }
  else if(size === 'medium'){
    return (
      <div className={styles.cardRecipe({ size, type })} onClick={onClick}>
        <div className={styles.smallContentWrapper}>
        <div className={styles.smallTitleWrapper}>
          <Subtitle type={type} isSmall={true} isCard={true} />
        
        </div>
        <h3 className={styles.smallTitle}>{title}</h3>
      </div>
      </div>
    )
  }
  else if(size === 'small'){
    return (
      <div className={styles.cardRecipe({ size, type })} onClick={onClick}>
      <div className={styles.smallContentWrapper}>
        <div className={styles.smallTitleWrapper}>
          <Subtitle type={type} isSmall={true} isCard={true} />
          {isAlarm ==true && <div className={styles.alarmNumber({alarmNumber: alarmNumber === 0 ? 0 : undefined})}>{alarmNumber}</div>}
          {isAlarm ==false && <BookMark/>}
        </div>
        <h3 className={styles.smallTitle}>{title}</h3>
      </div>
    </div>
    )
  }
}
