import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Save01Icon, Download01Icon, ArrowRightIcon, PlusIcon } from '@jetstream/icons';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
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

<Button variant="link">
  Link Button
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
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
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


