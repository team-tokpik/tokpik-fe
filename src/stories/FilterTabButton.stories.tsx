import type { Meta, StoryObj } from '@storybook/react'
import FilterTabButton from '@/components/FilterTabButton/FilterTabButton'

const meta: Meta<typeof FilterTabButton> = {
  title: 'Components/FilterTabButton',
  component: FilterTabButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FilterTabButton>

export const Default: Story = {}
