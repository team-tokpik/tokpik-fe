import { Meta, StoryObj } from '@storybook/react'
import BackBar from '../components/BackBar/BackBar'

const meta: Meta<typeof BackBar> = {
  title: 'Components/BackBar',
  component: BackBar,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof BackBar>

export const Default: Story = {
  args: {
    title: 'BackBar',
  },
}

export default meta
