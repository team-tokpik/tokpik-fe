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
}
