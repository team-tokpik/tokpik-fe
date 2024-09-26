import React from 'react'
import Avocado from '/public/images/card-images/avocado.svg'
import Egg from '/public/images/card-images/egg.svg'
import Ham from '/public/images/card-images/ham.svg'
import Cheese from '/public/images/card-images/cheese.svg'
import Lettuce from '/public/images/card-images/lettuce.svg'
import Pimento from '/public/images/card-images/pimento.svg'
import Tomato from '/public/images/card-images/tomato.svg'
import Sweet from '/public/images/card-images/sweet.svg'
import * as styles from './Card.css'
import { CardType } from '@/types/card'
import { RecipeVariants } from '@vanilla-extract/recipes'
import Subtitle from '../Subtitle/Subtitle'

const cardImages: Record<
  CardType['type'],
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  relation: Egg,
  issue: Tomato,
  love: Sweet,
  business: Ham,
  hobby: Cheese,
  humor: Lettuce,
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
  now,
  prev,
}: DynamicCardProps) {
  const CardImage = cardImages[type]

  if (size === 'large') {
    return (
      <div className={styles.cardRecipe({ size, type, now, prev })}>
        <Subtitle type={type} isSmall={false} isCard={true} />

        <CardImage className={styles.cardImage} />
        <div className={styles.largeContentWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.cardRecipe({ size, type })}>
      <div className={styles.smallContentWrapper}>
        <Subtitle type={type} isSmall={true} isCard={true} />
        <h3 className={styles.smallTitle}>{title}</h3>
      </div>
    </div>
  )
}
