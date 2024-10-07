import type { Meta, StoryObj } from '@storybook/react'
import DateSlash from '@/components/DateSlash/DateSlash'

const meta: Meta<typeof DateSlash> = {
  title: 'Components/DateSlash',
  component: DateSlash,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DateSlash>

export const Default: Story = {
  args: { month: '05', day: '15' },
}

export const LongDate: Story = {
  args: { month: '12', day: '31' },
}
