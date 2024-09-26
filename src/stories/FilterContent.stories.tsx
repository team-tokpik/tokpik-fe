import type { Meta, StoryObj } from '@storybook/react'
import FilterContentButton from '@/components/FilterContentButton/FilterContentButton'

const meta: Meta<typeof FilterContentButton> = {
  title: 'Components/FilterContentButton',
  component: FilterContentButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select', options: [50, 100] },
    },
    isOn: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterContentButton>

export const off: Story = {
  args: {
    size: 50,
    isOn: false,
    content: '50,off',
  },
}
export const on: Story = {
  args: {
    size: 100,
    isOn: true,
    content: '100,on',
  },
}
