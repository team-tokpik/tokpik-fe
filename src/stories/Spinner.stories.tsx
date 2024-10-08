import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Spinner from '../components/Spinner/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['square', 'line'],
    },
    size: {
      control: { type: 'select' },
      options: ['full', 'partial'],
    },
    sub: { control: 'text' },
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    type: 'square',
    size: 'full',
  },
};

export const Line: Story = {
  args: {
    type: 'line',
    size: 'full',
  },
};

export const Partial: Story = {
  args: {
    type: 'square',
    size: 'partial',
  },
};

export const SubText: Story = {
  args: {
    type: 'square',
    size: 'full',
    sub: '로딩 중...',
  },
};

export const Text: Story = {
  args: {
    type: 'square',
    size: 'full',
    text: '잠시만 기다려주세요',
  },
};
