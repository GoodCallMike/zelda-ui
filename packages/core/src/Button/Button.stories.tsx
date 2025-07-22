import {
  ArrowRightIcon,
  Download01Icon,
  PlusIcon,
  Save01Icon,
} from '@jetstream/icons';
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

The Button component provides a flexible way to create interactive elements in your application. It supports multiple visual variants, icon integration, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Button } from '@jetstream/core';
import { SaveIcon } from '@jetstream/icons';

// Basic button
<Button>Click me</Button>

// Primary action
<Button variant="primary" onClick={handleSubmit}>
  Submit Form
</Button>

// With icon
<Button icon={SaveIcon} iconPosition="left">
  Save Document
</Button>
\`\`\`

## Variants

### Primary Button
\`\`\`tsx
<Button variant="primary" onClick={handleSubmit}>
  Submit Form
</Button>
\`\`\`

### Secondary Button
\`\`\`tsx
<Button variant="secondary" onClick={handleCancel}>
  Cancel
</Button>
\`\`\`

### Outline Button
\`\`\`tsx
<Button variant="outline" onClick={handleEdit}>
  Edit Item
</Button>
\`\`\`

### Link Button
\`\`\`tsx
<Button variant="link" onClick={handleSkip}>
  Skip for now
</Button>
\`\`\`

## Icons

\`\`\`tsx
// Icon on left (default)
<Button icon={SaveIcon} iconPosition="left">
  Save Document
</Button>

// Icon on right
<Button icon={ArrowRightIcon} iconPosition="right">
  Continue
</Button>
\`\`\`

## States

\`\`\`tsx
// Normal state
<Button variant="primary">Active Button</Button>

// Disabled state
<Button variant="primary" disabled>
  Disabled Button
</Button>
\`\`\`

## Accessibility

The Button component is fully accessible with:

- **Keyboard navigation**: Tab, Enter, and Space key support
- **Focus indicators**: Visible focus rings meeting WCAG guidelines
- **Screen reader support**: Proper semantic HTML button elements
- **ARIA attributes**: Support for custom labels and descriptions
- **High contrast**: WCAG AA compliant color combinations
- **Disabled state**: Properly communicated to assistive technologies

\`\`\`tsx
// Custom accessibility label
<Button aria-label="Save document to your account">
  Save
</Button>

// With description
<Button aria-describedby="delete-help">
  Delete
</Button>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Button testId="submit-button" variant="primary">
  Submit
</Button>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('submit-button');
screen.getByRole('button', { name: 'Submit' });
\`\`\`

## Form Integration

\`\`\`tsx
// Form submission
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary">
    Submit Form
  </Button>
</form>

// Form reset
<Button type="reset" variant="secondary">
  Reset Form
</Button>
\`\`\`

## Best Practices

### Do
- Use clear, action-oriented labels ("Save Document" not "Save")
- Limit primary buttons to one per section
- Provide adequate spacing between buttons
- Use icons to enhance meaning, not replace clear text
- Include \`testId\` for reliable testing
- Consider loading states for async actions

### Don't
- Use multiple primary buttons in the same context
- Create buttons without clear labels
- Forget to handle disabled states
- Use buttons for navigation (use links instead)
- Mix button variants inconsistently

## Performance

- **Lightweight**: Minimal bundle impact with tree-shaking support
- **Efficient rendering**: Optimized CSS classes and minimal re-renders
- **Memory efficient**: Proper cleanup of event handlers
- **Jetstream effects**: Hardware-accelerated hover animations`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'link'],
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
