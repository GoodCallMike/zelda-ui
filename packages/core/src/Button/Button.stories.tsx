import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from './Button';
import { Save01Icon, Download01Icon, ArrowRightIcon, PlusIcon } from '@jetstream/icons';

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Interactive button component with Jetstream hover effects and accessibility features.

## Usage

\`\`\`tsx
import { Button } from '@jetstream/core';
import { SaveIcon, ArrowRightIcon } from '@jetstream/icons';

<Button variant="primary" onClick={() => console.log('clicked')}>
  Primary Action
</Button>

<Button variant="secondary" icon={Save01Icon}>
  Save Document
</Button>

<Button variant="outline">
  Outline Button
</Button>

<Button variant="primary" icon={ArrowRightIcon} iconPosition="right">
  Continue
</Button>
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass('bg-yellow-500', 'text-blue-900');
    
    await userEvent.hover(button);
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
    
    await expect(button).toHaveClass('bg-gray-200', 'text-gray-900');
    await userEvent.click(button);
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    await expect(button).toHaveClass('bg-transparent', 'border', 'border-gray-300');
    await userEvent.hover(button);
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
    
    await expect(button).toBeDisabled();
    await expect(button).toHaveClass('opacity-50');
  },
};

export const WithIconLeft: Story = {
  args: {
    children: 'Save Document',
    variant: 'primary',
    icon: Save01Icon,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    children: 'Continue',
    variant: 'secondary',
    icon: ArrowRightIcon,
    iconPosition: 'right',
  },
};

export const IconVariations: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button icon={PlusIcon}>Add Item</Button>
      <Button variant="secondary" icon={Download01Icon}>Download</Button>
      <Button icon={Save01Icon} iconPosition="left">Save</Button>
      <Button icon={ArrowRightIcon} iconPosition="right">Next</Button>
    </div>
  ),
};
