import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Badge component for displaying status indicators and labels with Hyrule-themed styling.

## Overview

The Badge component provides visual indicators for status, counts, or labels. It supports multiple variants with Zelda-themed colors and proper dark mode support.

## Quick Start

\`\`\`tsx
import { Badge } from '@zelda/core';

// Basic usage
<Badge>New</Badge>

// With variants
<Badge variant="primary">Primary</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="success">Success</Badge>
\`\`\`

## Variants

The badge supports six visual variants:
- **default** - Neutral gray styling for general use
- **primary** - Triforce gold (light) / Mystic purple (dark) for primary actions
- **secondary** - Rupee green for secondary information
- **success** - Rupee green for positive status
- **warning** - Triforce gold for warnings
- **error** - Ganon red for errors and dangerous actions

## Sizes

Three size options are available:
- **small** - Compact badges for tight spaces
- **medium** - Default size for most use cases
- **large** - Prominent badges for important information

## Accessibility

The Badge component is fully accessible:

### Screen Reader Support
- Uses semantic \`span\` element
- Inherits proper color contrast ratios
- Supports custom ARIA attributes through props

## Testing

Built-in testing support with \`testId\` props:

\`\`\`tsx
<Badge variant="error" testId="error-badge">
  Error
</Badge>
// Results in: data-testid="error-badge"
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
      ],
      description: 'Visual variant of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: 'text',
      description: 'Badge content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Variants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available badge variants with Zelda-themed colors.',
      },
    },
  },
};

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge size="small" variant="primary">
        Small
      </Badge>
      <Badge size="medium" variant="primary">
        Medium
      </Badge>
      <Badge size="large" variant="primary">
        Large
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge size variations from small to large.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div
      className="dark"
      style={{
        backgroundColor: '#111827',
        padding: '1.5rem',
        borderRadius: '0.5rem',
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem',
          }}
        >
          Dark Mode Badges
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Badges in dark mode with proper contrast and Mystic Purple primary variant.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ maxWidth: '32rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Game Status Indicators
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Badge variant="success">Online</Badge>
          <Badge variant="warning">Away</Badge>
          <Badge variant="error">Offline</Badge>
          <Badge variant="primary">Premium</Badge>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Quest & Item Counts
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Badge variant="primary" size="small">
            3
          </Badge>
          <Badge variant="secondary">12 New</Badge>
          <Badge variant="success">Completed</Badge>
          <Badge variant="default">Draft</Badge>
        </div>
      </div>

      <div>
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Notification Types
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Badge variant="error" size="small">
            !
          </Badge>
          <Badge variant="warning">Update Available</Badge>
          <Badge variant="success">Sync Complete</Badge>
          <Badge variant="primary">New Feature</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Real-world examples showing badges in game interface contexts for status, counts, and notifications.',
      },
    },
  },
};
