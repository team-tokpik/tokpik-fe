import type { Meta, StoryObj } from '@storybook/react'
import Card, { DynamicCardProps } from '@/components/Card/Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const LargeCard: Story = {
  args: {
    size: 'large',
    type: 'relation',
    title: '대화 주제 예시',
    description: '이것은 대형 카드의 설명 예시입니다.',
  },
}

export const SmallCard: Story = {
  args: {
    size: 'small',
    type: 'issue',
    title: '작은 카드 제목',
  },
}

export const AllCardTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {[
        'relation',
        'issue',
        'love',
        'business',
        'hobby',
        'humor',
        'ice-breaker',
        'self-development',
      ].map((type) => (
        <Card
          key={type}
          size="small"
          type={type as DynamicCardProps['type']}
          title={`${type} 카드`}
        />
      ))}
    </div>
  ),
}
