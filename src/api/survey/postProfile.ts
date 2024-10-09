import { ProfileRequest } from '@/types/survey'
import client from '../client'

export const postProfile = async (data: ProfileRequest) => {
  const response = await client.post('/users/profiles', {
    gender: data.gender,
    birth: data.birth,
    placeTagIds: data.placeTags,
    topicTagIds: data.topicTags,
  })
  return response.data
}
