import React from 'react'
import * as styles from './page.css'
import Subtitle from '@/components/Subtitle/Subtitle'
import Scrap_active from '/public/images/Scrap_active.svg'
import Scrap_inactive from '/public/images/Scrap_inactive.svg'
import { vars } from '@/app/globals.css'
import { DUMMY_DETAIL } from '@/constants/detail'
import { CardType } from '@/types/card'
import Card from '@/components/Card/Card'

export default function DetailPage() {
  const { title, type, scrap, detail } = DUMMY_DETAIL
  const COLOR_MAP: Record<CardType['type'], string> = {
    relation: vars.color.egg,
    issue: vars.color.tomato,
    love: vars.color.sweet,
    business: vars.color.ham,
    hobby: vars.color.cheese,
    humor: vars.color.lettuce,
    'ice-breaker': vars.color.avocado,
    'self-development': vars.color.pimento,
  }
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <div className={styles.subtitleSection}>
          <Subtitle type={type} isSmall={false} isCard={false} />
          {scrap ? (
            <Scrap_active color={COLOR_MAP[type as CardType['type']]} />
          ) : (
            <Scrap_inactive color={COLOR_MAP[type as CardType['type']]} />
          )}
        </div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.contentSection}>
        <p style={{ fontSize: '18px', fontWeight: '500', marginBottom: '4px' }}>
          이 대화를 어떻게 이어나갈 수 있을까요?
        </p>
        <ul className={styles.contentList}>
          {detail.map((item, index) => (
            <li key={index}>
              <p className={styles.contentTitle}>{item.title} :</p>
              <p className={styles.contentContent}>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.relativeCardSection}>
        <p>You may also like</p>
        <div className={styles.relativeCardWrapper}>
          <Card size="small" type="relation" title="관계" isAlarm={false}/>
          <Card size="small" type="issue" title="이슈" isAlarm={false}/>
          <Card size="small" type="love" title="사랑" isAlarm={false}/>
          <Card size="small" type="business" title="비즈니스" isAlarm={false}/>
        </div>
      </div>
    </div>
  )
}
