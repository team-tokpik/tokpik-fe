export interface CardType {
  size: 'small' | 'large'
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
  relativePosition: '0' | '1' | '-1' | 'more';
}
export interface ItemType {
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
