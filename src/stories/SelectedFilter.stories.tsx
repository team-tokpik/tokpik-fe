import type { Meta, StoryObj } from '@storybook/react'
import SelectedFilter from '@/components/SelectedFilter/SelectedFilter'

const meta: Meta<typeof SelectedFilter> = {
  title: 'Components/SelectedFilter',
  component: SelectedFilter,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SelectedFilter>

export const Default: Story = {
  args: { text: 'Default Text' },
}
