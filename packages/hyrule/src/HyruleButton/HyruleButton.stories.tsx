import type { Meta, StoryObj } from '@storybook/react';
import { HyruleButton } from './HyruleButton';

const meta: Meta<typeof HyruleButton> = {
  title: '🗡️ Hyrule/HyruleButton',
  component: HyruleButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `HyruleButton component for Zelda-themed interfaces with comprehensive accessibility and testing support.

## Overview

The HyruleButton component provides standard button variants with rectangular special styling inspired by classic Zelda games. It supports all standard button patterns and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { HyruleButton } from '@zelda/hyrule';

// Basic usage
<HyruleButton>Adventure</HyruleButton>

// With variants
<HyruleButton variant="secondary">Collect Rupees</HyruleButton>
\`\`\`

## Variants

### Primary
\`\`\`tsx
<HyruleButton variant="primary">Primary Action</HyruleButton>
\`\`\`

### Secondary
\`\`\`tsx
<HyruleButton variant="secondary">Secondary Action</HyruleButton>
\`\`\`

### Tertiary
\`\`\`tsx
<HyruleButton variant="tertiary">Tertiary Action</HyruleButton>
\`\`\`

### Link
\`\`\`tsx
<HyruleButton variant="link">Link Action</HyruleButton>
\`\`\`

### Destructive
\`\`\`tsx
<HyruleButton variant="destructive">Delete</HyruleButton>
\`\`\`

## Accessibility

The HyruleButton component is fully accessible with:

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Semantic button element with proper labeling
- **Focus Indicators**: Clear visual focus states for keyboard users

\`\`\`tsx
// Accessibility example
<HyruleButton testId="adventure-btn">Start Adventure</HyruleButton>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<HyruleButton testId="adventure-button">Adventure</HyruleButton>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('adventure-button');
\`\`\`

## Best Practices

### Do
- Use primary for main actions
- Use destructive for dangerous actions
- Provide clear, action-oriented labels

### Don't
- Use multiple primary buttons in the same context
- Use destructive variant for non-destructive actions
- Make button text too long`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'link', 'destructive'],
      description: 'Button variant (all use rectangular special styling except link)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },

    children: {
      control: 'text',
      description: 'Button content',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <HyruleButton variant="primary">Primary</HyruleButton>
      <HyruleButton variant="secondary">Secondary</HyruleButton>
      <HyruleButton variant="tertiary">Tertiary</HyruleButton>
      <HyruleButton variant="link">Link</HyruleButton>
      <HyruleButton variant="destructive">Destructive</HyruleButton>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <HyruleButton variant="primary">Normal</HyruleButton>
        <HyruleButton variant="primary" disabled>Disabled</HyruleButton>
      </div>
      <div className="flex gap-4">
        <HyruleButton variant="secondary">Normal</HyruleButton>
        <HyruleButton variant="secondary" disabled>Disabled</HyruleButton>
      </div>
    </div>
  ),
};

export const HyruleInterface: Story = {
  render: () => (
    <div className="bg-slate-900 p-8 rounded-lg space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">⚡ Hero's Arsenal ⚡</h2>
        <p className="text-gray-300">Choose your legendary equipment</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <HyruleButton variant="primary" testId="primary-btn">
            ⚡ Primary Action
          </HyruleButton>
          <HyruleButton variant="tertiary" testId="tertiary-btn">
            ⚔️ Tertiary Action
          </HyruleButton>
          <HyruleButton variant="destructive" testId="destructive-btn">
            ❤️ Destructive Action
          </HyruleButton>
        </div>
        
        <div className="space-y-3">
          <HyruleButton variant="secondary" testId="secondary-btn">
            💎 Secondary Action
          </HyruleButton>
          <HyruleButton variant="link" testId="link-btn">
            👁️ Link Action
          </HyruleButton>
          <HyruleButton variant="primary" disabled testId="disabled-btn">
            🔒 Disabled
          </HyruleButton>
        </div>
      </div>
    </div>
  ),
};