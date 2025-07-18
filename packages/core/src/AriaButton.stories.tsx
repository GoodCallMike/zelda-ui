import type { Meta, StoryObj } from '@storybook/react';
import { AriaButton } from './AriaButton';

const meta: Meta<typeof AriaButton> = {
  title: 'Core/AriaButton',
  component: AriaButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Aria Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Aria Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    isDisabled: true,
  },
};