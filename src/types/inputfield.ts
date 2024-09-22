export type InputFieldType = {
  label: string
  placeholder: string
  type: 'text' | 'number' | 'date' | 'email' | 'password'
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
