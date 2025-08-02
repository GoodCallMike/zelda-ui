import {
  ArrowRightIcon,
  Download01Icon,
  PlusIcon,
  Save01Icon,
} from '@zelda/icons';
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

The Button component provides interactive elements with authentic Zelda-inspired styling. It supports multiple visual variants with pixel-art aesthetics and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Button } from '@zelda/core';

// Basic usage
<Button>Start Adventure</Button>

// With Hyrule theming
<Button variant="primary" icon={SaveIcon}>Save Quest</Button>
\`\`\`

## Variants

### Primary (Triforce Gold)
\`\`\`tsx
<Button variant="primary">Start Adventure</Button>
\`\`\`

### Secondary (Rupee Green)
\`\`\`tsx
<Button variant="secondary">Collect Rupees</Button>
\`\`\`

### Tertiary (Hyrule Blue)
\`\`\`tsx
<Button variant="tertiary">View Map</Button>
\`\`\`

### Link
\`\`\`tsx
<Button variant="link">Skip Tutorial</Button>
\`\`\`

### Destructive (Ganon Red)
\`\`\`tsx
<Button variant="destructive">Delete Save</Button>
\`\`\`

## States

### Normal
\`\`\`tsx
<Button variant="primary">Ready for Adventure</Button>
\`\`\`

### Disabled
\`\`\`tsx
<Button variant="primary" disabled>Quest Locked</Button>
\`\`\`

## Icons

### Left Position
\`\`\`tsx
<Button icon={SaveIcon} iconPosition="left">Save Progress</Button>
\`\`\`

### Right Position
\`\`\`tsx
<Button icon={ArrowRightIcon} iconPosition="right">Enter Dungeon</Button>
\`\`\`

## Accessibility

The Button component is fully accessible with:

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Semantic button elements with proper labeling
- **Focus Indicators**: Clear visual focus states for keyboard users

\`\`\`tsx
<Button testId="adventure-btn">Start Adventure</Button>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Button testId="quest-button">Begin Quest</Button>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('quest-button');
\`\`\`

## Best Practices

### Do
- Use primary for main actions (like "Start Adventure")
- Use destructive for dangerous actions (like "Delete Save")
- Provide clear, action-oriented labels
- Include \`testId\` for reliable testing

### Don't
- Use multiple primary variants in the same context
- Use destructive variant for non-destructive actions
- Make component text too long for the pixel-art styling
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'link', 'destructive'],
      description: 'Visual style variant of the button',
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
    icon: {
      control: false,
      description: 'Icon component to display with the button',
      table: {
        type: { summary: 'ComponentType<SVGProps<SVGSVGElement>>' },
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
    onClick: {
      control: false,
      description: 'Click handler function',
      table: {
        type: { summary: '() => void' },
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
  },
};

export const Primary: Story = {
  args: {
    children: 'Start Adventure',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Collect Rupees',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'View Map',
    variant: 'tertiary',
  },
};

export const Link: Story = {
  args: {
    children: 'Skip Tutorial',
    variant: 'link',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete Save',
    variant: 'destructive',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Save Progress',
    variant: 'primary',
    icon: Save01Icon,
    iconPosition: 'left',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Quest Locked',
    variant: 'primary',
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Start Adventure</Button>
      <Button variant="secondary">Collect Rupees</Button>
      <Button variant="tertiary">View Map</Button>
      <Button variant="link">Skip Tutorial</Button>
      <Button variant="destructive">Delete Save</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button icon={Save01Icon} iconPosition="left">
        Save Progress
      </Button>
      <Button
        variant="secondary"
        icon={ArrowRightIcon}
        iconPosition="right"
      >
        Enter Dungeon
      </Button>
      <Button variant="tertiary" icon={Download01Icon}>
        Download Map
      </Button>
      <Button variant="link" icon={PlusIcon}>
        New Quest
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Ready for Adventure</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Start Quest</Button>
          <Button variant="secondary">Collect Items</Button>
          <Button variant="tertiary">View Inventory</Button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Quest Locked</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary" disabled>
            Locked Quest
          </Button>
          <Button variant="secondary" disabled>
            Need Key
          </Button>
          <Button variant="tertiary" disabled>
            Unavailable
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const Testing: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">With Test IDs</h3>
        <div className="flex flex-wrap gap-2">
          <Button testId="adventure-btn" variant="primary">
            Start Adventure
          </Button>
          <Button testId="inventory-btn" variant="secondary">
            Open Inventory
          </Button>
          <Button testId="map-btn" variant="tertiary">
            View Map
          </Button>
        </div>
      </div>
      <div className="text-sm text-gray-600">
        Use <code className="bg-gray-100 px-1 rounded">testId</code> prop for reliable test targeting
      </div>
    </div>
  ),
};

export const HyruleInterface: Story = {
  render: () => (
    <div className="bg-slate-900 p-8 rounded-lg space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-triforce-400 mb-2">⚡ Hero's Arsenal ⚡</h2>
        <p className="text-gray-300">Choose your legendary equipment</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <Button variant="primary" testId="primary-btn">
            ⚡ Start Adventure
          </Button>
          <Button variant="tertiary" testId="tertiary-btn">
            ⚔️ View Inventory
          </Button>
          <Button variant="destructive" testId="destructive-btn">
            ❤️ Delete Save
          </Button>
        </div>
        
        <div className="space-y-3">
          <Button variant="secondary" testId="secondary-btn">
            💎 Collect Rupees
          </Button>
          <Button variant="link" testId="link-btn">
            👁️ Skip Tutorial
          </Button>
          <Button variant="primary" disabled testId="disabled-btn">
            🔒 Quest Locked
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Quest Actions</h3>
        <div className="space-y-3">
          <div className="flex gap-2 p-3 border rounded-lg">
            <Button variant="primary" icon={Save01Icon}>
              Save Progress
            </Button>
            <Button variant="secondary">
              Pause Game
            </Button>
          </div>
          <div className="flex gap-2 p-3 border rounded-lg">
            <Button variant="primary" type="submit">
              Begin Quest
            </Button>
            <Button variant="tertiary" type="reset">
              Reset Stats
            </Button>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Adventure Navigation</h3>
        <div className="space-y-3">
          <div className="flex justify-between p-3 border rounded-lg">
            <Button variant="tertiary">
              Return to Village
            </Button>
            <Button variant="primary" icon={ArrowRightIcon} iconPosition="right">
              Enter Dungeon
            </Button>
          </div>
          <div className="flex justify-center p-3 border rounded-lg">
            <Button variant="link">
              Skip Cutscene
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};
