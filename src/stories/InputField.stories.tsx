import type { Meta, StoryObj } from '@storybook/react'
import InputField from '@/components/InputField/InputField'

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number'],
      },
    },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof InputField>

export const Default: Story = {
  args: {
    label: '이름',
    placeholder: '이름을 입력하세요',
    type: 'text',
    value: '',
  },
}

export const WithValue: Story = {
  args: {
    label: '이메일',
    placeholder: '이메일을 입력하세요',
    type: 'email',
    value: 'example@email.com',
  },
}

export const Password: Story = {
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    type: 'password',
    value: '',
  },
}

export const Number: Story = {
  args: {
    label: '나이',
    placeholder: '나이를 입력하세요',
    type: 'number',
    value: '',
  },
}
