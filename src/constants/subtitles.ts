import { CardType } from '@/types/card'

export const CARD_SUBTITLES: Record<CardType['type'], string> = {
  relation: '없어선 안 되는 *인간관계* 토핑',
  issue: '신선한 *요즘 핫한 이슈* 토핑',
  love: '달달한 *사랑과 연애* 토핑',
  business: '활용도 좋은 *비즈니스와 업무* 토핑',
  hobby: '다양한 종류의 *취미와 여가생활* 토핑',
  humor: '대화를 원활하게 *유머와 웃음* 토핑',
  'ice-breaker': '분위기를 부드럽게 *아이스브레이킹* 토핑',
  'self-development': '한층 더 성장하는 *자기계발* 토핑',
}
