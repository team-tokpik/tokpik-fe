import type { Meta, StoryObj } from '@storybook/react'
import Toast from '@/components/Toast/Toast'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: { text: '토스트 메시지' },
}
