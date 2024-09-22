import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/components/Button/Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    active: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    size: 'medium',
    label: '버튼',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: '작은 버튼',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: '큰 버튼',
  },
}
