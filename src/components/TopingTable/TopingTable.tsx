import React from 'react'
import * as styles from './TopingTable.css'
import { TopicCount } from '@/app/scrap/[scrapId]/export/page'
interface TopingTableProps {
  title: string
  topicCount: number
  topicCountList: TopicCount[]
}

const ITEM_MAP = {
  '취미와 여가활동': '치즈',
  '유머와 웃음': '양상추',
  인간관계: '계란',
  '사랑과 연애': '달콤한 토핑',
  자기계발: '피망',
  '비즈니스와 업무': '햄',
  '요즘 핫한 이슈': '토마토',
  아이스브레이킹: '아보카도',
}

export default function TopingTable({
  title,
  topicCount,
  topicCountList,
}: TopingTableProps) {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.thead}>
          <div className={styles.title}>
            <p>토픽 정보</p>
          </div>
          <div className={styles.description}>
            <p>총 토픽 수 {topicCount}개</p>
            <p>{title}</p>
          </div>
        </div>
        {topicCountList.map((topicCount) => (
          <div key={topicCount.topicType} className={styles.content}>
            <div>
              {topicCount.topicType}
              <span className={styles.topicType}>
                {' '}
                | {ITEM_MAP[topicCount.topicType as keyof typeof ITEM_MAP]}
              </span>
            </div>
            <div className={styles.percentage}>{topicCount.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}
