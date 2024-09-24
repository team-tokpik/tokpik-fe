import { CardType } from './card'

export type DetailType = {
  id: string
  title: string
  type: CardType['type']
  scrap: boolean
  detail: {
    title: string
    content: string
  }[]
}
