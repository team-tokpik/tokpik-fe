export type ButtonType = {
  size: 'small' | 'medium' | 'large'
  label: string
  active?: boolean
  onClick: () => void
  disabled?: boolean
  color?: 'primary' | 'secondary'
}
