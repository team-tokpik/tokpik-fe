import { TopicListRequest } from '@/types/survey'
import client from '../client'

export const getTopic = async () => {
  const { data } = await client.get<TopicListRequest>('/topic-tags')

  return data
}
