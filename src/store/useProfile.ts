import { postProfile } from '@/api/survey/postProfile'
import { ProfileRequest } from '@/types/survey'
import { create } from 'zustand'

type ProfileActions = {
  actions: {
    setGender: (gender: boolean) => void
    setBirth: (birth: string) => void
    setPlaceTags: (placeTags: number[]) => void
    setTopicTags: (topicTags: number[]) => void
    postProfile: () => void
  }
}

export const useProfileStore = create<ProfileRequest & ProfileActions>(
  (set, get) => ({
    birth: '',
    gender: true,
    placeTags: [],
    topicTags: [],
    actions: {
      setGender: (gender: boolean) => {
        set({ gender })
      },
      setBirth: (birth: string) => {
        set({ birth })
      },
      setPlaceTags: (placeTags: number[]) => {
        set({ placeTags })
      },
      setTopicTags: (topicTags: number[]) => {
        set({ topicTags })
      },
      postProfile: () => {
        const { birth, gender, placeTags, topicTags } = get()
        postProfile({ birth, gender, placeTags, topicTags })
      },
    },
  })
)
