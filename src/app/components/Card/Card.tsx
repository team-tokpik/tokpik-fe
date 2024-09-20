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

const cardSubtitles: Record<CardType['type'], string> = {
  relation: '없어선 안 되는 *인간관계* 토핑',
  issue: '신선한 *요즘 핫한 이슈* 토핑',
  love: '달달한 *사랑과 연애* 토핑',
  business: '활용도 좋은 *비즈니스와 업무* 토핑',
  hobby: '다양한 종류의 *취미와 여가생활* 토핑',
  humor: '대화를 원활하게 *유머와 웃음* 토핑',
  'ice-breaker': '분위기를 부드럽게 *아이스브레이킹* 토핑',
  'self-development': '한층 더 성장하는 *자기계발* 토핑',
}

const processSubtitle = (text: string, isSmall: boolean): React.ReactNode[] => {
  const parts = text.split('*')
  if (isSmall) {
    // 소형 카드의 경우 볼드 처리된 부분만 반환
    return parts
      .filter((_, index) => index % 2 !== 0)
      .map((part, index) => (
        <span key={index} style={{ fontWeight: 'bold' }}>
          {part}
        </span>
      ))
  } else {
    // 대형 카드의 경우 전체 텍스트 반환 (볼드 처리 포함)
    return parts.map((part, index) =>
      index % 2 === 0 ? (
        part
      ) : (
        <span key={index} style={{ fontWeight: 'bold' }}>
          {part}
        </span>
      )
    )
  }
}

type DynamicCardProps = CardType & RecipeVariants<typeof styles.cardRecipe>

export default function Card({
  size,
  type,
  title,
  description,
}: DynamicCardProps) {
  const CardImage = cardImages[type]
  const cardSubtitle = cardSubtitles[type]

  if (size === 'large') {
    return (
      <div className={styles.cardRecipe({ size, type })}>
        <p className={styles.subtitle}>
          {processSubtitle(cardSubtitle, false)}
        </p>
        <CardImage />
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
        <p className={styles.subtitle}>{processSubtitle(cardSubtitle, true)}</p>
        <h3 className={styles.smallTitle}>{title}</h3>
      </div>
    </div>
  )
}
