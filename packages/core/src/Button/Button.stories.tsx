import type { Meta, StoryObj } from '@storybook/react';
import { Button, Typography } from '@zelda/core';
import {
  ArrowRightIcon,
  PlusIcon,
  SearchLgIcon,
  Trash01Icon,
} from '@zelda/icons';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Button component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Button component provides interactive actions with authentic Zelda-inspired styling. It supports multiple functional variants, icon integration, and automatically adapts to theme changes. Maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Button } from '@zelda/core';

// Basic usage
<Button>Start Adventure</Button>

// With variant styling
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

The Button component is fully accessible with WCAG 2.1 AA compliance:

### Keyboard Navigation
- **Tab Navigation**: Navigate between buttons using Tab/Shift+Tab
- **Activation**: Activate buttons with Enter or Space keys
- **Focus Management**: Clear visual focus indicators for keyboard users
- **Focus Order**: Logical tab order in button groups

### Screen Reader Support
- **Semantic Elements**: Uses proper HTML button elements
- **Accessible Names**: Clear, descriptive button text
- **State Announcements**: Disabled and loading states are announced
- **ARIA Attributes**: Proper labeling with aria-label and aria-describedby

### Visual Accessibility
- **High Contrast**: Supports high contrast mode across all themes
- **Color Independence**: Information not conveyed by color alone
- **Focus Indicators**: Clear focus rings for keyboard navigation
- **Text Scaling**: Readable at 200% zoom level

## Testing

Built-in testing support with comprehensive \`testId\` props:

### Test Identifiers
\`\`\`tsx
<Button testId="save-button" variant="primary">
  Save Game
</Button>
// Results in: data-testid="save-button"
\`\`\`

### Testing Examples
\`\`\`tsx
// Query button by test ID
document.querySelector('[data-testid="save-button"]');

// Test button click
const button = document.querySelector('[data-testid="save-button"]');
button.click();
\`\`\`

### Accessibility Testing
\`\`\`tsx
// Query by role and accessible name
document.querySelector('button[aria-label="Save current game progress"]');

// Check ARIA attributes
const button = document.querySelector('[data-testid="save-button"]');
button.getAttribute('aria-label'); // 'Save current game progress'
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
        story:
          'All button variants showcasing the functional hierarchy from high to low emphasis.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">Normal</Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="default">Normal</Button>
        <Button variant="default" disabled>
          Disabled
        </Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="destructive">Normal</Button>
        <Button variant="destructive" disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Button states including normal and disabled variations across different variants.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" icon={PlusIcon}>
          Add Item
        </Button>
        <Button variant="default" icon={SearchLgIcon}>
          Search
        </Button>
        <Button variant="destructive" icon={Trash01Icon}>
          Delete
        </Button>
        <Button variant="link" icon={ArrowRightIcon} iconPosition="right">
          Continue
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons in different positions and variants.',
      },
    },
  },
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary" icon={PlusIcon} aria-label="Add item" />
      <Button variant="default" icon={SearchLgIcon} aria-label="Search" />
      <Button variant="destructive" icon={Trash01Icon} aria-label="Delete" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons with proper accessibility labels.',
      },
    },
  },
};

export const HyruleInterface: Story = {
  name: 'Hyrule Interface',
  render: () => (
    <div className="space-y-6 p-6">
      <div className="space-y-3">
        <Typography variant="h3">Adventure Menu</Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Start New Game</Button>
          <Button variant="default">Continue Adventure</Button>
          <Button variant="text">Load Save</Button>
        </div>
      </div>

      <div className="space-y-3">
        <Typography variant="h3">Inventory Actions</Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Use Item</Button>
          <Button variant="dashed">Add to Inventory</Button>
          <Button variant="destructive">Drop Item</Button>
        </div>
      </div>

      <div className="space-y-3">
        <Typography variant="h3">Navigation</Typography>
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
        story:
          'Real-world Zelda-themed interface examples showing proper button usage in different contexts.',
      },
    },
  },
};

export const ThemeVariants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Button variants automatically adapt to theme changes. Use the Storybook theme switcher to see how buttons appear in different themes.',
      },
    },
  },
  render: () => (
    <div className="p-6">
      <div className="space-y-4">
        <Typography variant="h3" className="mb-4">
          All Button Variants
        </Typography>
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
};
