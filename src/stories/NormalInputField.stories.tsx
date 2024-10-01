import NormalInputField from '@/components/NormalInputField/NormalInputField'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof NormalInputField> = {
  title: 'Components/NormalInputField',
  component: NormalInputField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number'],
      },
    },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof NormalInputField>

export const Default: Story = {
  args: {
    type: 'text',
    value: '',
  },
}

export const WithValue: Story = {
  args: {
    type: 'email',
    value: 'example@email.com',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    value: '',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    value: '',
  },
}
