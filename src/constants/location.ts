export const location = [
  {
    emoji: '🏠',
    label: '집',
  },
  {
    emoji: '🏫',
    label: '학교',
  },
  {
    emoji: '🖥️',
    label: '직장',
  },
  {
    emoji: '☕',
    label: '카페',
  },
  {
    emoji: '🚍',
    label: '대중교통',
  },
]
// 라벨을 받아서 이모지를 반환하는 함수
// 예시: getEmoji('집') => '🏠'
export function getEmoji(label: string): string | undefined {
  const item = location.find(item => item.label === label);
  return item?.emoji;
}