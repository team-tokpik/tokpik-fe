export interface CardType {
  id?: number,
  isScraped?: boolean,
  size: 'small' | 'medium' | 'large'
  type:
    | 'relation'
    | 'issue'
    | 'love'
    | 'business'
    | 'hobby'
    | 'humor'
    | 'ice-breaker'
    | 'self-development'
  title: string
  description?: string
  relativePosition?: '0' | '1' | '-1' | 'more'
  onClick?: () => void
  isAlarm?: boolean
  alarmNumber?: number
  handleScrapDelete?: (scrapTopicId: number) => void
}
export interface ItemType {
  id: number,
  type:
    | 'relation'
    | 'issue'
    | 'love'
    | 'business'
    | 'hobby'
    | 'humor'
    | 'ice-breaker'
    | 'self-development'
  title: string
  description?: string
}
