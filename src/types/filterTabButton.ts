export interface filterTabButton {
  text: string
  onSelect: (text: string) => void // 상위 컴포넌트로 전달할 함수
  selectedTab: string
}
