import type { Meta, StoryObj } from '@storybook/react'
import Filter from '@/components/Filter/Filter'

const meta: Meta<typeof Filter> = {
  title: 'Components/Filter',
  component: Filter,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Filter>

export const Default: Story = {
  args: {
    isOn: true,
  },
}
