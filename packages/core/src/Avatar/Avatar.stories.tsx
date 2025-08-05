import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Avatar',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar variant="default">Default</Avatar>
      <Avatar variant="primary">Primary</Avatar>
      <Avatar variant="secondary">Secondary</Avatar>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="small">Small</Avatar>
      <Avatar size="medium">Medium</Avatar>
      <Avatar size="large">Large</Avatar>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Avatar',
    disabled: true,
  },
};
