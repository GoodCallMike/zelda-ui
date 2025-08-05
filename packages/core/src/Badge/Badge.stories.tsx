import type { Meta, StoryObj } from '@storybook/react';
import {
  AlertTriangleIcon,
  CheckIcon,
  HeartIcon,
  Star01Icon,
  XIcon,
} from '@zelda/icons';
import { useState } from 'react';
import { Typography } from '../Typography';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Badge component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Badge component provides status indicators and labels with authentic Zelda-inspired styling. It supports multiple variants, sizes, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Badge } from '@zelda/core';

// Basic usage
<Badge>New</Badge>

// With Hyrule theming
<Badge variant="primary">Triforce</Badge>
\`\`\`

## Variants

### Primary (Triforce Gold)
\`\`\`tsx
<Badge variant="primary">Primary</Badge>
\`\`\`

### Secondary (Hyrule Blue)
\`\`\`tsx
<Badge variant="secondary">Secondary</Badge>
\`\`\`

### Success (Rupee Green)
\`\`\`tsx
<Badge variant="success">Success</Badge>
\`\`\`

### Warning (Orange)
\`\`\`tsx
<Badge variant="warning">Warning</Badge>
\`\`\`

### Error (Ganon Red)
\`\`\`tsx
<Badge variant="error">Error</Badge>
\`\`\`

### Default (Neutral Gray)
\`\`\`tsx
<Badge variant="default">Default</Badge>
\`\`\`

## Dark Mode

The Badge component automatically adapts to dark mode with Hyrule's mystical night theme:

\`\`\`tsx
// Automatic dark mode support
<div className="dark">
  <Badge variant="primary">Mystic Purple</Badge>
  <Badge variant="secondary">Deep Forest</Badge>
</div>
\`\`\`

### Dark Mode Colors
- **Primary**: Mystic purple with ethereal glow
- **Secondary**: Royal blue with moonlight accents
- **Success**: Emerald green for positive outcomes
- **Warning**: Orange for caution states
- **Error**: Crimson red with shadow effects

## Real World Examples

### Adventure Interface
\`\`\`tsx
// Game status indicators
<div className="status-bar">
  <Badge variant="success">Online</Badge>
  <Badge variant="warning">Low Health</Badge>
  <Badge variant="primary">Premium</Badge>
</div>
\`\`\`

### Inventory Management
\`\`\`tsx
// Item status with badges
<div className="inventory-panel">
  <Typography variant="h2">Hero's Inventory</Typography>
  <div className="item-actions">
    <Badge variant="primary" size="small">3</Badge>
    <Badge variant="success">New Item</Badge>
    <Badge variant="error">Broken</Badge>
  </div>
</div>
\`\`\`

### Quest System
\`\`\`tsx
// Quest status tracking
<form className="quest-form">
  <div className="quest-item">
    <span>Defeat Ganon</span>
    <Badge variant="warning">In Progress</Badge>
  </div>
  <div className="quest-item">
    <span>Collect Triforce</span>
    <Badge variant="success">Complete</Badge>
  </div>
  <div className="quest-item">
    <span>Save Zelda</span>
    <Badge variant="error">Failed</Badge>
  </div>
</form>
\`\`\`

### Notification System
\`\`\`tsx
// System notifications
<div className="notification-center">
  <Typography variant="body">"New message from Zelda!"</Typography>
  <div className="notification-badges">
    <Badge variant="primary">New</Badge>
    <Badge variant="secondary">Important</Badge>
    <Badge variant="error">Urgent</Badge>
  </div>
</div>
\`\`\`

## Accessibility

The Badge component is fully accessible with:

- **Screen Reader Support**: Semantic span element with proper labeling
- **High Contrast**: Maintains visibility in both light and dark modes
- **Color Independence**: Uses text and visual cues beyond color alone
- **Proper Semantics**: Appropriate HTML structure for status indicators

\`\`\`tsx
// Accessibility example
<Badge testId="status-badge" variant="success">
  Quest Complete
</Badge>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Badge testId="badge-test" variant="primary">Test</Badge>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('badge-test');
screen.getByText('Test');
\`\`\`

## Best Practices

### Do
- Use primary for main status indicators (like "Premium")
- Use error for dangerous states (like "Failed")
- Provide clear, concise labels
- Include \`testId\` for reliable testing

### Don't
- Use multiple primary badges in the same context
- Use error variant for non-critical information
- Make badge text too long for the compact styling
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
      ],
      description: 'Hyrule-themed visual variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Badge size variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
        category: 'Appearance',
      },
    },
    children: {
      control: 'text',
      description: 'Badge content',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling with utilities',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
      table: {
        type: { summary: 'string' },
        category: 'Testing',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'New Quest',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Badge size="small" variant="primary">
          Small
        </Badge>
        <div className="text-xs mt-1">Small</div>
      </div>
      <div className="text-center">
        <Badge size="medium" variant="primary">
          Medium
        </Badge>
        <div className="text-xs mt-1">Medium</div>
      </div>
      <div className="text-center">
        <Badge size="large" variant="primary">
          Large
        </Badge>
        <div className="text-xs mt-1">Large</div>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Badge variant="success">Active</Badge>
        <div className="text-xs mt-1">Success State</div>
      </div>
      <div className="text-center">
        <Badge variant="warning">Pending</Badge>
        <div className="text-xs mt-1">Warning State</div>
      </div>
      <div className="text-center">
        <Badge variant="error">Failed</Badge>
        <div className="text-xs mt-1">Error State</div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Badge variant="success">
        <CheckIcon className="w-3 h-3 mr-1" />
        Complete
      </Badge>
      <Badge variant="warning">
        <AlertTriangleIcon className="w-3 h-3 mr-1" />
        Warning
      </Badge>
      <Badge variant="error">
        <XIcon className="w-3 h-3 mr-1" />
        Failed
      </Badge>
      <Badge variant="primary">
        <Star01Icon className="w-3 h-3 mr-1" />
        Premium
      </Badge>
      <Badge variant="secondary" size="small">
        <HeartIcon className="w-3 h-3" />
      </Badge>
    </div>
  ),
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark p-6 bg-gray-900">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap">
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Mystic</Badge>
        <Badge variant="secondary">Forest</Badge>
        <Badge variant="success">Victory</Badge>
        <Badge variant="warning">Caution</Badge>
        <Badge variant="error">Danger</Badge>
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Badge variant="primary" size="large">
          Shadow Realm
        </Badge>
        <div className="text-gray-200">
          <div className="font-semibold">Dark Mode Styling</div>
          <div className="text-sm text-gray-400">Mystical purple theming</div>
        </div>
      </div>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      {/* Adventure Interface */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h5" className="mb-4">
          Game Status Indicators
        </Typography>
        <div className="flex gap-4 flex-wrap">
          <Badge variant="success">Online</Badge>
          <Badge variant="warning">Low Health</Badge>
          <Badge variant="error">Offline</Badge>
          <Badge variant="primary">Premium</Badge>
        </div>
      </div>

      {/* Inventory Management */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h5" className="mb-4">
          Hero's Inventory
        </Typography>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Master Sword</span>
            <Badge variant="success" size="small">
              <CheckIcon className="w-3 h-3 mr-1" />
              Equipped
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Hylian Shield</span>
            <Badge variant="warning" size="small">
              <AlertTriangleIcon className="w-3 h-3 mr-1" />
              Damaged
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Bow of Light</span>
            <Badge variant="error" size="small">
              <XIcon className="w-3 h-3 mr-1" />
              Broken
            </Badge>
          </div>
        </div>
      </div>

      {/* Quest System */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h5" className="mb-4">
          Active Quests
        </Typography>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Defeat Ganon</span>
            <Badge variant="warning">In Progress</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Collect Triforce</span>
            <Badge variant="success">Complete</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Save Zelda</span>
            <Badge variant="primary">New</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const KeyboardNavigation: Story = {
  render: () => {
    const [announcement, setAnnouncement] = useState('');

    const announceNavigation = (message: string) => {
      setAnnouncement(message);
      setTimeout(() => setAnnouncement(''), 2000);
    };

    return (
      <div className="space-y-8 max-w-2xl">
        {/* Live Region for Announcements */}
        <div aria-live="polite" className="sr-only">
          {announcement}
        </div>

        <div className="p-4 border rounded-lg bg-green-50 border-green-200">
          <Typography variant="h4" className="mb-3 text-green-800">
            ⌨️ Keyboard Navigation Patterns
          </Typography>
          <Typography variant="body2" className="text-green-700">
            Badge components are typically not keyboard focusable as they are
            display elements.
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Interactive Badge Examples</Typography>
          <div className="space-y-3">
            <button
              type="button"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onFocus={() =>
                announceNavigation('Focused on quest status button')
              }
              data-testid="interactive-badge-1"
            >
              <span>Defeat Ganon</span>
              <Badge variant="warning">In Progress</Badge>
            </button>
            <button
              type="button"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onFocus={() =>
                announceNavigation('Focused on inventory item button')
              }
              data-testid="interactive-badge-2"
            >
              <span>Master Sword</span>
              <Badge variant="success">Equipped</Badge>
            </button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Keyboard Navigation Patterns

### Badge Accessibility
- **Non-interactive** - Badges are display elements, not focusable
- **Interactive Context** - When used in buttons/links, the container handles focus
- **Screen Reader** - Badge content is announced as part of parent element

### Testing Examples
\`\`\`tsx
// Test interactive badge containers
test('Badge in button supports keyboard navigation', async () => {
  const user = userEvent.setup();
  render(
    <button>
      <span>Quest Status</span>
      <Badge variant="warning" testId="badge-button">In Progress</Badge>
    </button>
  );
  
  const button = screen.getByRole('button');
  
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
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
        <Typography variant="h4" className="mb-3 text-blue-800">
          🏷️ ARIA Attributes Usage
        </Typography>
        <Typography variant="body2" className="text-blue-700">
          Demonstrates proper ARIA attribute implementation for Badge
          components.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Basic Badge Implementation</Typography>
        <div className="p-3 bg-gray-50 border rounded">
          <div className="flex items-center gap-2">
            <span>Quest Status:</span>
            <Badge variant="success" testId="basic-badge">
              Complete
            </Badge>
          </div>
          <Typography variant="body2" className="text-gray-600 mt-2">
            Badge uses semantic span element with proper text content
          </Typography>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Badge with Custom ARIA Label</Typography>
        <div className="p-3 bg-gray-50 border rounded">
          <div className="flex items-center gap-2">
            <span>Health:</span>
            <Badge
              variant="error"
              aria-label="Health critical, 5 hearts remaining"
              testId="aria-label-badge"
            >
              Critical
            </Badge>
          </div>
          <Typography variant="body2" className="text-gray-600 mt-2">
            Custom aria-label provides additional context for screen readers
          </Typography>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">
          Count Badge with Screen Reader Context
        </Typography>
        <div className="p-3 bg-gray-50 border rounded">
          <div className="flex items-center gap-2">
            <span>Notifications</span>
            <Badge
              variant="primary"
              aria-label="3 unread notifications"
              testId="count-badge"
            >
              3
            </Badge>
          </div>
          <Typography variant="body2" className="text-gray-600 mt-2">
            Count badges should include context for screen reader users
          </Typography>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## ARIA Attributes Implementation

### Essential ARIA Attributes
- **aria-label** - Provides descriptive label when badge text needs context
- **role** - Uses default span semantics (no role needed)
- **aria-hidden** - Can hide decorative badges from screen readers if needed

### Testing Examples
\`\`\`tsx
// Test basic badge accessibility
test('Badge has proper text content', () => {
  render(<Badge testId="test-badge">Success</Badge>);
  
  const badge = screen.getByTestId('test-badge');
  expect(badge).toHaveTextContent('Success');
});

// Test badge with aria-label
test('Badge with aria-label provides context', () => {
  render(
    <Badge 
      aria-label="3 unread messages" 
      testId="count-badge"
    >
      3
    </Badge>
  );
  
  const badge = screen.getByTestId('count-badge');
  expect(badge).toHaveAttribute('aria-label', '3 unread messages');
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
          Examples showing how to test Badge components with testId attributes
          and accessibility features.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Basic Component Testing</Typography>
        <div className="space-y-3">
          <Badge testId="test-default-badge" variant="default">
            Default
          </Badge>
          <Badge testId="test-primary-badge" variant="primary">
            Primary
          </Badge>
          <Badge testId="test-error-badge" variant="error">
            Error
          </Badge>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Query badges by testId
screen.getByTestId('test-default-badge')
screen.getByTestId('test-primary-badge')
screen.getByTestId('test-error-badge')

// Test badge content
expect(screen.getByTestId('test-primary-badge')).toHaveTextContent('Primary')
expect(screen.getByText('Error')).toBeInTheDocument()`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Variant Testing</Typography>
        <div className="flex gap-2 flex-wrap">
          <Badge testId="test-success-badge" variant="success" size="small">
            ✓
          </Badge>
          <Badge testId="test-warning-badge" variant="warning" size="medium">
            !
          </Badge>
          <Badge testId="test-large-badge" variant="primary" size="large">
            New
          </Badge>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test badge variants and sizes
const successBadge = screen.getByTestId('test-success-badge')
const warningBadge = screen.getByTestId('test-warning-badge')
const largeBadge = screen.getByTestId('test-large-badge')

// Test CSS classes or computed styles
expect(successBadge).toHaveClass('success')
expect(warningBadge).toHaveClass('warning')
expect(largeBadge).toHaveClass('large')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Accessibility Testing</Typography>
        <div className="space-y-3">
          <Badge
            testId="test-accessible-badge"
            variant="primary"
            aria-label="3 new quest notifications"
          >
            3
          </Badge>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test accessibility attributes
const badge = screen.getByTestId('test-accessible-badge')
expect(badge).toHaveAttribute('aria-label', '3 new quest notifications')

// Test by accessible name
screen.getByLabelText('3 new quest notifications')

// Test text content
expect(badge).toHaveTextContent('3')

// Automated accessibility testing
import { axe, toHaveNoViolations } from 'jest-axe'
const results = await axe(container)
expect(results).toHaveNoViolations()`}
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
const badge = screen.getByTestId('test-badge');
expect(badge).toBeInTheDocument();

// Test badge content
expect(badge).toHaveTextContent('Success');
\`\`\`

### Variant and Size Testing
\`\`\`tsx
// Test badge variants
const primaryBadge = screen.getByTestId('primary-badge');
expect(primaryBadge).toHaveClass('primary');

// Test badge sizes
const largeBadge = screen.getByTestId('large-badge');
expect(largeBadge).toHaveClass('large');
\`\`\`

### Accessibility Testing
\`\`\`tsx
// Test ARIA attributes
const badge = screen.getByTestId('accessible-badge');
expect(badge).toHaveAttribute('aria-label');

// Test by accessible name
screen.getByLabelText('3 unread notifications');
\`\`\`

### Automated Accessibility Testing
\`\`\`tsx
import { axe, toHaveNoViolations } from 'jest-axe';

test('Badge has no accessibility violations', async () => {
  const { container } = render(<Badge variant="primary">Test</Badge>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
\`\`\`
        `,
      },
    },
  },
};
