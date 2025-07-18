import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    // Test button is rendered
    await expect(button).toBeInTheDocument();
    
    // Test button has correct classes
    await expect(button).toHaveClass('bg-yellow-500', 'text-blue-900');
    
    // Test hover effect
    await userEvent.hover(button);
    await expect(button).toHaveClass('hover:bg-yellow-400');
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    // Test secondary variant styling
    await expect(button).toHaveClass('bg-gray-200', 'text-gray-900');
    
    // Test click interaction
    await userEvent.click(button);
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    // Test button is disabled
    await expect(button).toBeDisabled();
    
    // Test disabled styling
    await expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
  },
};
