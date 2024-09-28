import type { Meta, StoryObj } from '@storybook/react'
import FilterInput from '@/components/FilterInput/FilterInput'

const meta: Meta<typeof FilterInput> = {
  title: 'Components/FilterInput',
  component: FilterInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FilterInput>

export const Default: Story = {}
