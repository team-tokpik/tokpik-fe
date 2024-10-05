import { create } from 'zustand'
// 필터 리스트를 Set으로 만듭니다.
// 이유
// 찾을때 O(1)으로 빠르다
// 중복된 값이 들어가지 않는다.
// 필터 아이템 타입 정의
type FilterItem = {
  tab?: string;
  value: string;
}

type FilterListState = {
  list: Set<FilterItem>
}
// 액션은 4가지입니다.
// push:추가 , find:찾기 ,pop:삭제, reflesh:초기화
type FilterListActions = {
  actions: {
    pushList: (item: FilterItem) => void
    findList: (item: FilterItem) => boolean
    popList: (item: FilterItem) => void
    refleshList: () => void
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
          if (Array.from(state.list).some(i => i.tab === item.tab && i.value === '여성') && item.value === '남성') {
            tmpSet.delete(Array.from(state.list).find(i => i.tab === item.tab && i.value === '여성')!)
          } else if (Array.from(state.list).some(i => i.tab === item.tab && i.value === '남성') && item.value === '여성') {
            tmpSet.delete(Array.from(state.list).find(i => i.tab === item.tab && i.value === '남성')!)
          }
          // '상대' 탭의 기존 항목 삭제 후 새 항목 추가
          if (item.tab === '나이') {
            Array.from(tmpSet).forEach(existingItem => {
              if (existingItem.tab === '나이') {
                tmpSet.delete(existingItem);
                tmpSet.add(item)
              }
            });
          }
          return { list: tmpSet }
        }),
      findList: (item) => {
        return Array.from(get().list).some(i => i.tab === item.tab && i.value === item.value)
      },
      popList: (item) =>
        set((state) => {
          const tmpSet = new Set(state.list)
          if(item.tab === undefined) tmpSet.delete(Array.from(state.list).find(i => i.value === item.value)!)
          else tmpSet.delete(Array.from(state.list).find(i => i.tab === item.tab && i.value === item.value)!)
          return { list: tmpSet }
        }),
      refleshList: () =>
        set(() => {
          // Set 객체를 초기화합니다.
          return { list: new Set() }
        }),

    },
  })
)

// list와 action을 따로 export해서 따로 import 가져올 수 있게 합니다.

export const useFilterListState = () =>
  useFilterListStore((state) => state.list)

export const useFilterListActions = () =>
  useFilterListStore((state) => state.actions)
