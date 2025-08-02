import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Button component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Button component provides interactive actions with authentic Zelda-inspired styling. It supports multiple functional variants, icon integration, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Button } from '@zelda/core';

// Basic usage
<Button>Start Adventure</Button>

// With Hyrule theming
<Button variant="primary">Collect Triforce</Button>
\`\`\`

## Variants

### Primary (Triforce Gold)
High emphasis filled button for main actions like "Start Adventure" or "Save Game".

### Default (Outlined)
Medium emphasis outlined button for secondary actions like "View Inventory" or "Settings".

### Dashed (Dashed Border)
Lower emphasis for add/upload actions like "Add Item" or "Upload Save".

### Text (Minimal)
Minimal emphasis for subtle actions like "Cancel" or "Skip".

### Link (Link Style)
Link styling with underline for navigation like "View Map" or "Credits".

### Destructive (Ganon Red)
High emphasis red button for dangerous actions like "Delete Save" or "Reset Progress".

## Accessibility

The Button component is fully accessible with:

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Semantic button elements with proper labeling
- **Focus Indicators**: Clear visual focus states for keyboard users

## Testing

Built-in testing support with \`testId\` prop for reliable automated testing.

## Best Practices

### Do
- Use primary for main actions (like "Start Adventure")
- Use destructive for dangerous actions (like "Delete Save")
- Provide clear, action-oriented labels
- Include \`testId\` for reliable testing

### Don't
- Use multiple primary variants in the same context
- Use destructive variant for non-destructive actions
- Make button text too long for the pixel-art styling`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link', 'destructive'],
      description: 'Functional style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon relative to text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Start Adventure',
    variant: 'primary',
  },
};

export const Primary: Story = {
  args: {
    children: 'Collect Triforce',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  name: 'Default (Outlined)',
  args: {
    children: 'View Inventory',
    variant: 'default',
  },
};

export const Dashed: Story = {
  args: {
    children: 'Add Item',
    variant: 'dashed',
  },
};

export const Text: Story = {
  args: {
    children: 'Cancel',
    variant: 'text',
  },
};

export const Link: Story = {
  args: {
    children: 'View Map',
    variant: 'link',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete Save',
    variant: 'destructive',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Action',
    variant: 'primary',
    disabled: true,
  },
};

export const Variants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="default">Default</Button>
      <Button variant="dashed">Dashed</Button>
      <Button variant="text">Text</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants showcasing the functional hierarchy from high to low emphasis.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">Normal</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="default">Normal</Button>
        <Button variant="default" disabled>Disabled</Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="destructive">Normal</Button>
        <Button variant="destructive" disabled>Disabled</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button states including normal and disabled variations across different variants.',
      },
    },
  },
};

export const HyruleInterface: Story = {
  name: 'Hyrule Interface',
  render: () => (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900">Adventure Menu</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Start New Game</Button>
          <Button variant="default">Continue Adventure</Button>
          <Button variant="text">Load Save</Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900">Inventory Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Use Item</Button>
          <Button variant="dashed">Add to Inventory</Button>
          <Button variant="destructive">Drop Item</Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900">Navigation</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="link">View Map</Button>
          <Button variant="link">Quest Log</Button>
          <Button variant="text">Settings</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world Zelda-themed interface examples showing proper button usage in different contexts.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-6 rounded">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white mb-4">Ganon's Domain (Dark Mode)</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="dashed">Dashed</Button>
          <Button variant="text">Text</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dark mode transforms the theme from Zelda/Triforce-focused to Ganon-focused with purple primary and red destructive variants.',
      },
    },
  },
};

export const Examples: Story = {
  name: 'Adventure Examples',
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900">Combat Actions</h4>
        <div className="flex gap-2">
          <Button variant="primary">Attack</Button>
          <Button variant="default">Defend</Button>
          <Button variant="text">Flee</Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900">Shop Interface</h4>
        <div className="flex gap-2">
          <Button variant="primary">Buy Item</Button>
          <Button variant="default">Sell Item</Button>
          <Button variant="link">View Details</Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900">Save Management</h4>
        <div className="flex gap-2">
          <Button variant="primary">Save Game</Button>
          <Button variant="default">Quick Save</Button>
          <Button variant="destructive">Delete Save</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Adventure-themed examples demonstrating proper button usage in game interface contexts.',
      },
    },
  },
};



