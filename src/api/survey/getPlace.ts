import { PlaceListRequest } from '@/types/survey'
import client from '../client'

export const getPlace = async () => {
  const { data } = await client.get<PlaceListRequest>('/place-tags')

  return data
}
