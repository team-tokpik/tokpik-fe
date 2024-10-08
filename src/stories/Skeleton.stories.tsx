import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Skeleton from '../components/Skeleton/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    radius: {
      control: { type: 'select' },
      options: ['full', 'half'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: '100px',
    height: '100px',
    radius: 'half',
  },
};

export const FullRadius: Story = {
  args: {
    width: '100px',
    height: '100px',
    radius: 'full',
  },
};

export const LargeSize: Story = {
  args: {
    width: '200px',
    height: '200px',
    radius: 'half',
  },
};
