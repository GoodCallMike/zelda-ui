import type { Meta, StoryObj } from '@storybook/react';
import {
  ArrowRightIcon,
  PlusIcon,
  SearchLgIcon,
  Trash01Icon,
} from '@zelda/icons';
import { useState } from 'react';
import { Card } from '../Card';
import { Divider } from '../Divider';
import { Typography } from '../Typography';
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
- **High Contrast**: Supports high contrast mode
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
// Query button
screen.getByTestId('save-button');

// Test button click
fireEvent.click(screen.getByTestId('save-button'));

// Test keyboard activation
fireEvent.keyDown(screen.getByTestId('save-button'), { key: 'Enter' });

// Test disabled state
expect(screen.getByTestId('save-button')).toBeDisabled();
\`\`\`

### Accessibility Testing
\`\`\`tsx
// Test button role
expect(screen.getByRole('button', { name: 'Save Game' })).toBeInTheDocument();

// Test ARIA attributes
const button = screen.getByTestId('save-button');
expect(button).toHaveAttribute('aria-label', 'Save current game progress');
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
        story:
          'Real-world Zelda-themed interface examples showing proper button usage in different contexts.',
      },
    },
  },
};

export const GanonTheme: Story = {
  parameters: {
    themes: {
      themeOverride: 'Ganon (Dark)',
    },
    docs: {
      description: {
        story:
          'Dark theme transforms the colors from Zelda/Triforce-focused to Ganon-focused with purple primary colors.',
      },
    },
  },
  render: () => (
    <div className="p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-bold mb-4">Ganon's Domain (Dark Theme)</h3>
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

export const ZeldaTheme: Story = {
  parameters: {
    themes: {
      themeOverride: 'Zelda (Light)',
    },
    docs: {
      description: {
        story:
          'Light theme featuring Triforce Gold as the primary color with warm, heroic tones.',
      },
    },
  },
  render: () => (
    <div className="p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-bold mb-4">Hyrule Kingdom (Light Theme)</h3>
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

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" icon={SearchLgIcon}>
          Search
        </Button>
        <Button variant="default" icon={PlusIcon}>
          Add Item
        </Button>
        <Button variant="destructive" icon={Trash01Icon}>
          Delete
        </Button>
        <Button variant="primary" icon={ArrowRightIcon} iconPosition="right">
          Continue
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Buttons with icons from the @zelda/icons package, showing left and right positioning.',
      },
    },
  },
};

export const KeyboardNavigation: Story = {
  render: () => {
    const [announcement, setAnnouncement] = useState('');
    const [count, setCount] = useState(0);

    const announceNavigation = (message: string) => {
      setAnnouncement(message);
      setTimeout(() => setAnnouncement(''), 2000);
    };

    return (
      <div className="space-y-8 max-w-2xl">
        <div aria-live="polite" className="sr-only">
          {announcement}
        </div>

        <div className="p-4 border rounded-lg bg-green-50 border-green-200">
          <Typography variant="h4" className="mb-3 text-green-800">
            ⌨️ Keyboard Navigation Patterns
          </Typography>
          <Typography variant="body2" className="text-green-700">
            Use keyboard to navigate and interact with buttons.
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Tab Navigation Order</Typography>
          <div className="flex gap-3 flex-wrap">
            <Button
              variant="primary"
              testId="tab-order-1"
              onFocus={() => announceNavigation('Focused on first button')}
            >
              First Button
            </Button>
            <Button
              variant="default"
              testId="tab-order-2"
              onFocus={() => announceNavigation('Focused on second button')}
            >
              Second Button
            </Button>
            <Button
              variant="dashed"
              testId="tab-order-3"
              onFocus={() => announceNavigation('Focused on third button')}
            >
              Third Button
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Enter/Space Activation</Typography>
          <div className="flex gap-3 items-center">
            <Button
              variant="primary"
              onClick={() => {
                setCount(count + 1);
                announceNavigation(`Button activated ${count + 1} times`);
              }}
              testId="activation-demo"
            >
              Activate Me ({count})
            </Button>
            <Typography variant="body2" className="text-gray-600">
              Press Enter or Space to activate
            </Typography>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Skip Links Pattern</Typography>
          <div className="flex gap-3">
            <Button
              variant="link"
              className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-50 bg-white p-2 border"
            >
              Skip to main content
            </Button>
            <Button variant="default">Regular Button</Button>
            <Button variant="primary">Main Action</Button>
          </div>
          <Typography variant="body2" className="text-sm text-gray-600">
            Tab to reveal skip link (screen reader users)
          </Typography>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Keyboard Navigation Patterns

### Universal Shortcuts
- **Tab/Shift+Tab** - Navigate between buttons
- **Enter/Space** - Activate buttons (both keys work)
- **Skip Links** - Allow bypassing repetitive navigation

### Testing Examples
\`\`\`tsx
// Test keyboard navigation
test('Button supports keyboard navigation', async () => {
  const user = userEvent.setup();
  render(<Button testId="keyboard-test">Test</Button>);
  
  const button = screen.getByTestId('keyboard-test');
  
  await user.tab();
  expect(button).toHaveFocus();
  
  await user.keyboard('{Enter}');
  // Assert expected behavior
});
\`\`\`
        `,
      },
    },
  },
};

export const ARIAAttributes: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [announcement, setAnnouncement] = useState('');

    const handleAsyncAction = () => {
      setLoading(true);
      setAnnouncement('Processing started...');
      setTimeout(() => {
        setLoading(false);
        setAnnouncement('Processing completed successfully!');
        setTimeout(() => setAnnouncement(''), 3000);
      }, 2000);
    };

    return (
      <div className="space-y-8 max-w-2xl">
        <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
          <Typography variant="h4" className="mb-3 text-blue-800">
            🏷️ ARIA Attributes Usage
          </Typography>
          <Typography variant="body2" className="text-blue-700">
            Demonstrates proper ARIA attribute implementation for buttons.
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">aria-label for Context</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <div className="flex gap-3 items-center flex-wrap">
              <Button
                variant="destructive"
                aria-label="Delete user account permanently"
                testId="delete-account"
              >
                Delete
              </Button>
              <Typography variant="body2" className="text-red-600">
                ⚠️ aria-label provides clear context
              </Typography>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">aria-expanded & aria-controls</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <div className="space-y-3">
              <Button
                variant="default"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-controls="expandable-content"
                testId="expand-button"
              >
                {expanded ? 'Hide' : 'Show'} Advanced Options ▼
              </Button>
              {expanded && (
                <div
                  id="expandable-content"
                  className="p-3 bg-white border rounded"
                >
                  <Typography variant="body2">
                    Advanced configuration options appear here.
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">aria-busy & Live Regions</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <div className="flex gap-3 items-center">
              <Button
                variant="primary"
                onClick={handleAsyncAction}
                disabled={loading}
                aria-busy={loading}
                testId="async-action"
              >
                {loading ? 'Processing...' : 'Start Process'}
              </Button>
              <div
                aria-live="polite"
                aria-atomic="true"
                className="text-sm text-blue-600"
              >
                {announcement}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Button Groups with Fieldset</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <fieldset className="flex gap-2">
              <legend className="sr-only">File actions</legend>
              <Button variant="default" aria-label="Save file">
                Save
              </Button>
              <Button variant="default" aria-label="Copy file">
                Copy
              </Button>
              <Button variant="destructive" aria-label="Delete file">
                Delete
              </Button>
            </fieldset>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## ARIA Attributes Implementation

### Essential ARIA Attributes
- **aria-label** - Provides accessible names when visual text isn't sufficient
- **aria-expanded** - Indicates expandable content state
- **aria-controls** - References controlled elements
- **aria-busy** - Indicates loading/processing states
- **fieldset/legend** - Groups related buttons semantically

### Testing Examples
\`\`\`tsx
// Test ARIA attributes
test('Button has proper ARIA attributes', () => {
  render(
    <Button 
      aria-label="Delete account" 
      aria-expanded="false"
      testId="aria-button"
    >
      Delete
    </Button>
  );
  
  const button = screen.getByTestId('aria-button');
  expect(button).toHaveAttribute('aria-label', 'Delete account');
  expect(button).toHaveAttribute('aria-expanded', 'false');
});
\`\`\`
        `,
      },
    },
  },
};

export const TestingExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-purple-50 border-purple-200">
        <Typography variant="h4" className="mb-3 text-purple-800">
          🧪 Testing Examples
        </Typography>
        <Typography variant="body2" className="text-purple-700">
          Examples showing how to test Button components with testId attributes.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Basic Button Testing</Typography>
        <div className="flex gap-3 flex-wrap">
          <Button testId="test-primary-action" variant="primary">
            Primary Action
          </Button>
          <Button testId="test-secondary-action" variant="default">
            Secondary Action
          </Button>
          <Button testId="test-destructive-action" variant="destructive">
            Destructive Action
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Query buttons by testId
screen.getByTestId('test-primary-action')
screen.getByTestId('test-secondary-action')
screen.getByTestId('test-destructive-action')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">User Interaction Testing</Typography>
        <div className="flex gap-3">
          <Button testId="test-click-button" variant="primary">
            Click Me
          </Button>
          <Button testId="test-disabled-button" variant="default" disabled>
            Disabled Button
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test button interactions
const user = userEvent.setup()
const button = screen.getByTestId('test-click-button')

// Test clicking
await user.click(button)

// Test keyboard activation
await user.keyboard('{Enter}')
await user.keyboard(' ')

// Test disabled state
expect(screen.getByTestId('test-disabled-button')).toBeDisabled()`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Role-based Testing</Typography>
        <div className="flex gap-3">
          <Button variant="primary">Submit Form</Button>
          <Button variant="link">Cancel</Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test by role and accessible name
screen.getByRole('button', { name: 'Submit Form' })
screen.getByRole('button', { name: 'Cancel' })

// Test button type
expect(screen.getByRole('button')).toHaveAttribute('type', 'button')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">ARIA Attribute Testing</Typography>
        <div className="flex gap-3">
          <Button
            variant="default"
            aria-label="Close notification panel"
            aria-expanded="false"
            testId="close-panel"
          >
            ×
          </Button>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test ARIA attributes
const button = screen.getByTestId('close-panel')
expect(button).toHaveAttribute('aria-label', 'Close notification panel')
expect(button).toHaveAttribute('aria-expanded', 'false')`}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Testing Examples with testId Attributes

### Basic Testing Patterns
\`\`\`tsx
// Query by testId
const button = screen.getByTestId('test-button');
expect(button).toBeInTheDocument();

// Test button state
expect(button).toBeEnabled();
expect(button).toBeDisabled();
\`\`\`

### User Interaction Testing
\`\`\`tsx
// Test user interactions
const user = userEvent.setup();
const button = screen.getByTestId('click-button');

await user.click(button);

// Test keyboard activation
await user.keyboard('{Enter}');
await user.keyboard(' ');
\`\`\`

### Role-based Testing
\`\`\`tsx
// Test by role and accessible name
screen.getByRole('button', { name: 'Submit Form' });

// Test button attributes
expect(button).toHaveAttribute('type', 'button');
\`\`\`

### Automated Accessibility Testing
\`\`\`tsx
import { axe, toHaveNoViolations } from 'jest-axe';

test('Button has no accessibility violations', async () => {
  const { container } = render(<Button>Test</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
\`\`\`
        `,
      },
    },
  },
};

export const AccessibilityFeatures: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [announcement, setAnnouncement] = useState('');

    const handleAsyncAction = () => {
      setLoading(true);
      setAnnouncement('Processing started...');
      setTimeout(() => {
        setLoading(false);
        setAnnouncement('Processing completed successfully!');
        setTimeout(() => setAnnouncement(''), 3000);
      }, 2000);
    };

    return (
      <div className="space-y-8">
        <div className="p-4 border rounded-lg bg-blue-50">
          <Typography variant="h4" className="mb-3">
            🔍 Comprehensive Accessibility Demo
          </Typography>
          <Typography variant="body2" className="mb-4">
            This story demonstrates the Button's complete accessibility features
            including keyboard navigation, screen reader support, ARIA
            attributes, and real-world usage patterns.
          </Typography>
        </div>

        {/* Keyboard Navigation Patterns */}
        <div className="space-y-4">
          <Typography variant="h4">⌨️ Keyboard Navigation Patterns</Typography>
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <Typography variant="body2" className="text-green-800 mb-4">
              <strong>Interactive Demo:</strong> Use keyboard to navigate and
              interact with these buttons.
            </Typography>

            {/* Basic Navigation */}
            <div className="space-y-4">
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Basic Navigation (Tab/Shift+Tab)
                </Typography>
                <div className="flex gap-3 flex-wrap">
                  <Button variant="primary" testId="nav-1">
                    First Button
                  </Button>
                  <Button variant="default" testId="nav-2">
                    Second Button
                  </Button>
                  <Button variant="dashed" testId="nav-3">
                    Third Button
                  </Button>
                  <Button variant="text" testId="nav-4">
                    Fourth Button
                  </Button>
                </div>
              </div>

              {/* Activation Methods */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Activation (Enter/Space)
                </Typography>
                <div className="flex gap-3 items-center">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setCount(count + 1);
                      setAnnouncement(`Button activated ${count + 1} times`);
                    }}
                    testId="activation-demo"
                  >
                    Activate Me ({count})
                  </Button>
                  <Typography variant="body2" className="text-gray-600">
                    Press Enter or Space to activate
                  </Typography>
                </div>
              </div>

              {/* Skip Links Pattern */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Skip Navigation Pattern
                </Typography>
                <div className="flex gap-3">
                  <Button
                    variant="link"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 z-50 bg-white p-2 border"
                  >
                    Skip to main content
                  </Button>
                  <Button variant="default">Regular Button</Button>
                  <Button variant="primary">Main Action</Button>
                </div>
                <Typography
                  variant="body2"
                  className="text-sm text-gray-600 mt-1"
                >
                  Tab to reveal skip link (screen reader users)
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* ARIA Attributes in Practice */}
        <div className="space-y-4">
          <Typography variant="h4">🏷️ ARIA Attributes in Practice</Typography>
          <div className="space-y-4">
            {/* Descriptive Labels */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                aria-label & aria-describedby
              </Typography>
              <div className="flex gap-3 items-center flex-wrap">
                <Button
                  variant="destructive"
                  aria-label="Delete user account permanently"
                  aria-describedby="delete-warning"
                  testId="delete-account"
                >
                  Delete
                </Button>
                <Typography
                  variant="body2"
                  id="delete-warning"
                  className="text-red-600"
                >
                  ⚠️ This action cannot be undone
                </Typography>
              </div>
            </div>

            {/* Expandable Content */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                aria-expanded & aria-controls
              </Typography>
              <div className="space-y-3">
                <Button
                  variant="default"
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                  aria-controls="expandable-content"
                  testId="expand-button"
                >
                  {expanded ? 'Hide' : 'Show'} Advanced Options ▼
                </Button>
                {expanded && (
                  <div
                    id="expandable-content"
                    className="p-3 bg-white border rounded"
                  >
                    <Typography variant="body2">
                      Advanced configuration options would appear here.
                    </Typography>
                    <div className="flex gap-2 mt-2">
                      <Button variant="text" size="small">
                        Option 1
                      </Button>
                      <Button variant="text" size="small">
                        Option 2
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Loading States */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                aria-busy & Live Regions
              </Typography>
              <div className="flex gap-3 items-center">
                <Button
                  variant="primary"
                  onClick={handleAsyncAction}
                  disabled={loading}
                  aria-busy={loading}
                  aria-describedby="async-status"
                  testId="async-action"
                >
                  {loading ? 'Processing...' : 'Start Process'}
                </Button>
                <div
                  id="async-status"
                  aria-live="polite"
                  aria-atomic="true"
                  className="text-sm text-blue-600"
                >
                  {announcement}
                </div>
              </div>
            </div>

            {/* Button Groups */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                Button Groups with role="group"
              </Typography>
              <fieldset className="flex gap-2">
                <legend className="sr-only">File actions</legend>
                <Button variant="default" aria-label="Save file">
                  Save
                </Button>
                <Button variant="default" aria-label="Copy file">
                  Copy
                </Button>
                <Button variant="destructive" aria-label="Delete file">
                  Delete
                </Button>
              </fieldset>
            </div>
          </div>
        </div>

        {/* Screen Reader Optimizations */}
        <div className="space-y-4">
          <Typography variant="h4">📢 Screen Reader Optimizations</Typography>
          <div className="space-y-4">
            {/* Context-Rich Labels */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                Context-Rich Button Labels
              </Typography>
              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                  <Button variant="text" testId="bad-label">
                    Edit
                  </Button>
                  <Typography variant="body2" className="text-red-600">
                    ❌ Ambiguous - "Edit what?"
                  </Typography>
                </div>
                <div className="flex gap-3 items-center">
                  <Button
                    variant="text"
                    aria-label="Edit user profile settings"
                    testId="good-label"
                  >
                    Edit
                  </Button>
                  <Typography variant="body2" className="text-green-600">
                    ✅ Clear context provided
                  </Typography>
                </div>
              </div>
            </div>

            {/* Icon Buttons */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                Icon Buttons with Accessible Names
              </Typography>
              <div className="flex gap-3">
                <Button
                  variant="default"
                  icon={SearchLgIcon}
                  aria-label="Search through inventory items"
                  testId="search-icon"
                />
                <Button
                  variant="primary"
                  icon={PlusIcon}
                  aria-label="Add new item to inventory"
                  testId="add-icon"
                />
                <Button
                  variant="destructive"
                  icon={Trash01Icon}
                  aria-label="Delete selected items permanently"
                  testId="delete-icon"
                />
              </div>
            </div>

            {/* Status Announcements */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                Dynamic Status Announcements
              </Typography>
              <div className="space-y-3">
                <Button
                  variant="primary"
                  onClick={() => {
                    setAnnouncement('Item added to cart successfully');
                    setTimeout(() => setAnnouncement(''), 3000);
                  }}
                  testId="add-to-cart"
                >
                  Add to Cart
                </Button>
                <div
                  aria-live="assertive"
                  aria-atomic="true"
                  className="text-green-600 text-sm"
                >
                  {announcement}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Management Patterns */}
        <div className="space-y-4">
          <Typography variant="h4">🎯 Focus Management Patterns</Typography>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
            <Typography variant="body2" className="text-yellow-800 mb-4">
              <strong>Focus Indicators:</strong> All buttons provide clear
              visual focus indicators for keyboard users.
            </Typography>

            <div className="space-y-4">
              {/* High Contrast Focus */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  High Contrast Focus Rings
                </Typography>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <Button variant="primary">Primary Focus</Button>
                  <Button variant="default">Default Focus</Button>
                  <Button variant="dashed">Dashed Focus</Button>
                  <Button variant="text">Text Focus</Button>
                  <Button variant="link">Link Focus</Button>
                  <Button variant="destructive">Destructive Focus</Button>
                </div>
              </div>

              {/* Focus Order */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Logical Focus Order
                </Typography>
                <div className="flex gap-3 items-center">
                  <Button variant="default" tabIndex="0">
                    First (tabindex=1)
                  </Button>
                  <Button variant="default" tabIndex="0">
                    Second (tabindex=2)
                  </Button>
                  <Button variant="default" tabIndex="0">
                    Third (tabindex=3)
                  </Button>
                  <Typography variant="body2" className="text-sm text-gray-600">
                    Custom tab order demonstration
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Examples */}
        <div className="space-y-4">
          <Typography variant="h4">🧪 Automated Testing Examples</Typography>
          <div className="p-4 bg-purple-50 border border-purple-200 rounded">
            <Typography variant="body2" className="text-purple-800 mb-4">
              <strong>Testing Patterns:</strong> Examples of how to test
              accessibility features.
            </Typography>

            <div className="space-y-4">
              {/* Test ID Examples */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Test ID Patterns
                </Typography>
                <div className="flex gap-3 flex-wrap">
                  <Button testId="test-primary-action" variant="primary">
                    Primary Action
                  </Button>
                  <Button testId="test-secondary-action" variant="default">
                    Secondary Action
                  </Button>
                  <Button
                    testId="test-destructive-action"
                    variant="destructive"
                  >
                    Destructive Action
                  </Button>
                </div>
                <div className="mt-2 p-2 bg-white rounded text-xs font-mono">
                  screen.getByTestId('test-primary-action')
                </div>
              </div>

              {/* Role-based Testing */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Role-based Testing
                </Typography>
                <div className="flex gap-3">
                  <Button variant="primary">Submit Form</Button>
                  <Button variant="link">Cancel</Button>
                </div>
                <div className="mt-2 p-2 bg-white rounded text-xs font-mono">
                  screen.getByRole('button', {"{ name: 'Submit Form' }"})
                </div>
              </div>

              {/* Accessibility Testing */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  ARIA Testing
                </Typography>
                <Button
                  variant="default"
                  aria-label="Close notification panel"
                  aria-expanded="false"
                  testId="close-panel"
                >
                  ×
                </Button>
                <div className="mt-2 p-2 bg-white rounded text-xs font-mono">
                  expect(button).toHaveAttribute('aria-label', 'Close
                  notification panel')
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Comprehensive Accessibility Features

This story demonstrates all accessibility features of the Button component:

### Keyboard Navigation Patterns
- **Tab/Shift+Tab** - Navigate between buttons in logical order
- **Enter/Space** - Activate buttons (both keys work consistently)
- **Skip Links** - Allow screen reader users to skip repetitive navigation
- **Focus Trapping** - Proper focus management in complex interfaces

### ARIA Attributes Usage
- **aria-label** - Provides accessible names when visual text isn't sufficient
- **aria-describedby** - Links to additional descriptive content
- **aria-expanded** - Indicates expandable content state
- **aria-controls** - References controlled elements
- **aria-busy** - Indicates loading/processing states
- **role="group"** - Groups related buttons semantically

### Screen Reader Optimizations
- **Context-rich labels** - Buttons provide clear context about their action
- **Icon button labels** - Icons are supplemented with descriptive text
- **Status announcements** - Dynamic content changes are announced
- **Live regions** - Important updates are communicated immediately

### Focus Management
- **High contrast focus rings** - Clear visual indicators for keyboard users
- **Logical focus order** - Tab order follows visual layout
- **Focus restoration** - Focus returns to appropriate elements after interactions

### Testing Patterns
\`\`\`tsx
// Test ID patterns
screen.getByTestId('test-primary-action')

// Role-based testing
screen.getByRole('button', { name: 'Submit Form' })

// ARIA attribute testing
expect(button).toHaveAttribute('aria-label', 'Close panel')
expect(button).toHaveAttribute('aria-expanded', 'false')

// Keyboard interaction testing
await user.tab()
expect(button).toHaveFocus()
await user.keyboard('{Enter}')
\`\`\`

### Automated Accessibility Testing
\`\`\`tsx
import { axe, toHaveNoViolations } from 'jest-axe'

test('Button has no accessibility violations', async () => {
  const { container } = render(<Button>Test</Button>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
\`\`\`
        `,
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      {/* Game Menu Interface */}
      <Card variant="elevated">
        <h2 className="text-xl font-bold mb-6">🎮 Main Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Adventure Awaits</h3>
            <p className="text-gray-600 mb-4">
              Begin your legendary journey through the kingdom of Hyrule. Face
              ancient evils, solve mystical puzzles, and become the hero of
              legend.
            </p>
            <div className="flex gap-4">
              <Button variant="primary">New Game</Button>
              <Button variant="default">Continue</Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Game Options</h3>
            <div className="space-y-2">
              <Button variant="text" className="w-full justify-start">
                Settings
              </Button>
              <Button variant="text" className="w-full justify-start">
                Load Game
              </Button>
              <Button variant="text" className="w-full justify-start">
                Achievements
              </Button>
              <Button variant="link" className="w-full justify-start">
                Credits
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Divider className="my-8" />

      {/* Inventory Management */}
      <Card variant="elevated">
        <h2 className="text-xl font-bold mb-4">🎒 Inventory Management</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-3">Items</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Master Sword',
                'Hylian Shield',
                'Bow of Light',
                'Triforce Shard',
              ].map((item) => (
                <div
                  key={item}
                  className="p-3 border border-gray-200 rounded bg-gray-50 text-center"
                >
                  <p className="text-sm mb-2">{item}</p>
                  <div className="flex gap-1">
                    <Button variant="text" className="text-xs p-1">
                      Use
                    </Button>
                    <Button variant="text" className="text-xs p-1">
                      Drop
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Actions</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Sort Items</Button>
              <Button variant="dashed">Quick Use</Button>
              <Button variant="text">Item Details</Button>
              <Button variant="destructive">Drop All Junk</Button>
            </div>
          </div>
        </div>
      </Card>

      <Divider className="my-8" />

      {/* Confirmation Dialog */}
      <Card className="border-2 border-red-200 bg-red-50">
        <h3 className="text-lg font-semibold text-red-800 mb-2">
          ⚠️ Dangerous Action
        </h3>
        <p className="text-gray-700 mb-4">
          Are you sure you want to delete this save file? This action cannot be
          undone. All progress, items, and achievements will be permanently
          lost.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Save file: "Hero of Time" - 45 hours played - Last saved: Temple of
          Time
        </p>
        <div className="flex gap-4">
          <Button variant="destructive">Yes, Delete Forever</Button>
          <Button variant="default">Cancel</Button>
          <Button variant="link">Backup First</Button>
        </div>
      </Card>

      <Divider className="my-8" />

      {/* Dark Mode Complex Examples */}
      <Card
        className="dark bg-gray-900 border-gray-700 space-y-6"
        variant="elevated"
      >
        <Typography variant="h2">🌙 Night Mode Interface</Typography>

        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-sm">
          <Typography variant="h4">⚔️ Combat Actions</Typography>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="primary">Attack</Button>
            <Button variant="default">Defend</Button>
            <Button variant="dashed">Use Item</Button>
            <Button variant="destructive">Flee</Button>
          </div>
        </div>

        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-sm">
          <Typography variant="h4">🎒 Quick Actions</Typography>
          <div className="space-y-3">
            <div className="flex gap-3">
              <Button variant="text">Equip Weapon</Button>
              <Button variant="link">View Stats</Button>
            </div>
            <div className="flex gap-3">
              <Button variant="default">Save Game</Button>
              <Button variant="destructive">Delete Save</Button>
            </div>
          </div>
        </div>

        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-sm">
          <Typography variant="h4">🗺️ Navigation</Typography>
          <div className="grid grid-cols-1 gap-3">
            <Button variant="primary">Continue Quest</Button>
            <Button variant="default">Open Map</Button>
            <Button variant="text">Settings</Button>
          </div>
        </div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Real-world examples showing Button components in game menus, inventory management, confirmation dialogs, and complex dark mode interfaces.',
      },
    },
  },
};
