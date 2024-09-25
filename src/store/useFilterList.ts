import { create } from 'zustand'
// 필터 리스트를 Set으로 만듭니다.
// 이유
// 찾을때 O(1)으로 빠르다
// 중복된 값이 들어가지 않는다.
type FilterListState = {
  list: Set<string>
}
// 액션은 3가지입니다.
// push:추가 , find:찾기 ,pop:삭제
type FilterListActions = {
  actions: {
    pushList: (item: string) => void
    findList: (item: string) => boolean
    popList: (item: string) => void
  }
}
const useFilterListStore = create<FilterListState & FilterListActions>(
  (set, get) => ({
    list: new Set(),
    actions: {
      pushList: (item) =>
        set((state) => {
          const tmpSet = new Set(state.list)
          tmpSet.add(item)
          //남성과 여성이 중복체크되지 않도록 하나를 push하면 다른 하나를 pop 합니다.
          if (state.list.has('여성') && item === '남성') {
            tmpSet.delete('여성')
          } else if (state.list.has('남성') && item === '여성') {
            tmpSet.delete('남성')
          }
          return { list: tmpSet }
        }),
      findList: (item) => {
        return get().list.has(item)
      },
      popList: (item) =>
        set((state) => {
          const tmpSet = new Set(state.list)
          tmpSet.delete(item)
          return { list: tmpSet }
        }),
    },
  })
)

// list와 action을 따로 export해서 따로 import 가져올 수 있게 합니다.
export const useFilterListState = () =>
  useFilterListStore((state) => state.list)

export const useFilterListActions = () =>
  useFilterListStore((state) => state.actions)
