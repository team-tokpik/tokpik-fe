import { create } from 'zustand'

type InterestListState = {
  subjectList: Set<string>
  placeList: Set<string>
}

type InterestListActions = {
  actions: {
    pushList: (loc: 'place' | 'subject', item: string) => void
    findList: (loc: 'place' | 'subject', item: string) => boolean
    popList: (loc: 'place' | 'subject', item: string) => void
    refreshList: (loc: 'place' | 'subject') => void
  }
}

const useInterestListStore = create<InterestListState & InterestListActions>(
  (set, get) => ({
    subjectList: new Set<string>(),
    placeList: new Set<string>(),
    actions: {
      pushList: (loc, item) =>
        set((state) => {
          const newSet = new Set(loc === 'place' ? state.placeList : state.subjectList)
          newSet.add(item)
          return loc === 'place' ? { placeList: newSet } : { subjectList: newSet }
        }),
      findList: (loc, item) => {
        const list = loc === 'place' ? get().placeList : get().subjectList
        return list.has(item)
      },
      popList: (loc, item) =>
        set((state) => {
          const newSet = new Set(loc === 'place' ? state.placeList : state.subjectList)
          newSet.delete(item)
          return loc === 'place' ? { placeList: newSet } : { subjectList: newSet }
        }),
      refreshList: (loc) =>
        set(() => {
          return loc === 'place' ? { placeList: new Set() } : { subjectList: new Set() }
        }),
    },
  })
)


// list와 action을 따로 export해서 따로 import 가져올 수 있게 합니다.

export const useInterestListState = () => ({
  subjectList: useInterestListStore((state) => state.subjectList),
  placeList: useInterestListStore((state) => state.placeList),
})

export const useInterestListActions = () =>
  useInterestListStore((state) => state.actions)
