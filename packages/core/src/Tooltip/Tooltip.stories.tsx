import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
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
    children: 'Tooltip',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip variant="default">Default</Tooltip>
      <Tooltip variant="primary">Primary</Tooltip>
      <Tooltip variant="secondary">Secondary</Tooltip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip size="small">Small</Tooltip>
      <Tooltip size="medium">Medium</Tooltip>
      <Tooltip size="large">Large</Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Tooltip',
    disabled: true,
  },
};
