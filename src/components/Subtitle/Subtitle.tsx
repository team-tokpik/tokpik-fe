import React from 'react'
import * as styles from './Subtitle.css'
import { CardType } from '@/types/card'
import { CARD_SUBTITLES } from '@/constants/subtitles'

export default function Subtitle({
  type,
  isSmall,
  isCard,
}: {
  type: CardType['type']
  isSmall: boolean
  isCard: boolean
}) {
  const processSubtitle = (
    text: string,
    isSmall: boolean
  ): React.ReactNode[] => {
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
  return (
    <p className={styles.subtitleRecipe({ type, isCard })}>
      {processSubtitle(CARD_SUBTITLES[type], isSmall)}
    </p>
  )
}
