import type { Meta, StoryObj } from '@storybook/react'
import CheckBox from '@/components/CheckBox/CheckBox'

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    emoji: { control: 'text' },
    checked: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
  args: {
    label: '기본 체크박스',
    checked: false,
  },
}

export const Checked: Story = {
  args: {
    label: '체크된 체크박스',
    checked: true,
  },
}

export const WithEmoji: Story = {
  args: {
    label: '이모지 체크박스',
    emoji: '😊',
    checked: false,
  },
}

export const CheckedWithEmoji: Story = {
  args: {
    label: '체크된 이모지 체크박스',
    emoji: '✅',
    checked: true,
  },
}
