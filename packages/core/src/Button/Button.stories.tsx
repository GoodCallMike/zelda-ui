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
        component: `Button component for triggering actions and navigation with comprehensive accessibility and testing support.

## Overview

The Button component provides interactive elements for user actions. It supports multiple visual variants, icon integration, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Button } from '@zelda/core';

// Basic usage
<Button>Click me</Button>

// With options
<Button variant="primary" icon={SaveIcon}>Save Document</Button>
\`\`\`

## Variants

### Primary
\`\`\`tsx
<Button variant="primary">Submit Form</Button>
\`\`\`

### Secondary
\`\`\`tsx
<Button variant="secondary">Cancel</Button>
\`\`\`

### Outline
\`\`\`tsx
<Button variant="outline">Edit Item</Button>
\`\`\`

### Link
\`\`\`tsx
<Button variant="link">Skip for now</Button>
\`\`\`

### Destructive
\`\`\`tsx
<Button variant="destructive">Delete Item</Button>
\`\`\`

## States

### Normal
\`\`\`tsx
<Button variant="primary">Active Button</Button>
\`\`\`

### Disabled
\`\`\`tsx
<Button variant="primary" disabled>Disabled Button</Button>
\`\`\`

## Icons

### Left Position
\`\`\`tsx
<Button icon={SaveIcon} iconPosition="left">Save Document</Button>
\`\`\`

### Right Position
\`\`\`tsx
<Button icon={ArrowRightIcon} iconPosition="right">Continue</Button>
\`\`\`

## Accessibility

The Button component is fully accessible with:

- **Keyboard navigation**: Tab, Enter, and Space key support
- **Focus indicators**: Visible focus rings meeting WCAG guidelines
- **Screen reader support**: Proper semantic HTML button elements

\`\`\`tsx
<Button aria-label="Save document to your account">Save</Button>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Button testId="submit-button">Submit</Button>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('submit-button');
\`\`\`

## Best Practices

### Do
- Use clear, action-oriented labels
- Limit primary buttons to one per section
- Include \`testId\` for reliable testing

### Don't
- Use multiple primary buttons in the same context
- Create buttons without clear labels
- Use buttons for navigation (use links instead)
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'link', 'destructive'],
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
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
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

export const Destructive: Story = {
  args: {
    children: 'Delete Item',
    variant: 'destructive',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Save Document',
    variant: 'primary',
    icon: Save01Icon,
    iconPosition: 'left',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button icon={Save01Icon} iconPosition="left">
        Save Document
      </Button>
      <Button
        variant="secondary"
        icon={ArrowRightIcon}
        iconPosition="right"
      >
        Continue
      </Button>
      <Button variant="outline" icon={Download01Icon}>
        Download
      </Button>
      <Button variant="link" icon={PlusIcon}>
        Add New
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Normal State</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Disabled State</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary" disabled>
            Primary
          </Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="outline" disabled>
            Outline
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
          <Button testId="submit-btn" variant="primary">
            Submit
          </Button>
          <Button testId="cancel-btn" variant="secondary">
            Cancel
          </Button>
          <Button testId="delete-btn" variant="outline">
            Delete
          </Button>
        </div>
      </div>
      <div className="text-sm text-gray-600">
        Use <code className="bg-gray-100 px-1 rounded">testId</code> prop for reliable test targeting
      </div>
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Form Actions</h3>
        <div className="space-y-3">
          <div className="flex gap-2 p-3 border rounded-lg">
            <Button variant="primary" icon={Save01Icon}>
              Save Changes
            </Button>
            <Button variant="secondary">
              Cancel
            </Button>
          </div>
          <div className="flex gap-2 p-3 border rounded-lg">
            <Button variant="primary" type="submit">
              Submit Form
            </Button>
            <Button variant="outline" type="reset">
              Reset
            </Button>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Navigation</h3>
        <div className="space-y-3">
          <div className="flex justify-between p-3 border rounded-lg">
            <Button variant="outline">
              Back
            </Button>
            <Button variant="primary" icon={ArrowRightIcon} iconPosition="right">
              Continue
            </Button>
          </div>
          <div className="flex justify-center p-3 border rounded-lg">
            <Button variant="link">
              Skip for now
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};
