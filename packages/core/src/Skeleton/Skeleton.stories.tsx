import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Skeleton } from './Skeleton';
import { Avatar } from '../Avatar';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Skeleton component for loading placeholders with comprehensive accessibility and testing support.

## Overview

The Skeleton component provides loading placeholders while content is being fetched. It supports avatar, title, and paragraph placeholders with customizable animations and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Skeleton } from '@zelda/core';

// Basic usage
<Skeleton loading={isLoading}>
  <div>Your content here</div>
</Skeleton>

// With options
<Skeleton 
  loading={isLoading}
  active
  avatar
  paragraph={{ rows: 3 }}
>
  <UserProfile />
</Skeleton>
\`\`\`

## Placeholder Types

### Avatar Placeholder
\`\`\`tsx
<Skeleton avatar={{ size: 'large', shape: 'circle' }} />
\`\`\`

### Sub-components
\`\`\`tsx
<Skeleton.Button size="default" active />
<Skeleton.Input size="large" active />
<Skeleton.Image active />
\`\`\`

## Accessibility

The Skeleton component is fully accessible with:

- **Loading State Indication**: Proper ARIA attributes for loading states
- **Animation Control**: Respects user's motion preferences
- **Screen Reader Support**: Announces loading state changes

\`\`\`tsx
// Accessibility example
<Skeleton 
  loading={isLoading}
  active
  testId="content-skeleton"
  aria-label="Loading content"
>
  <Content />
</Skeleton>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Skeleton testId="skeleton-loader" loading={true} />
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('skeleton-loader');
screen.getByLabelText('Loading content');
\`\`\`

## Best Practices

### Do
- Match skeleton structure to actual content layout
- Use animation to indicate active loading
- Provide loading state feedback to users

### Don't
- Show skeletons for too long without feedback
- Use overly complex skeleton structures
- Forget to handle loading state transitions
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Whether to show skeleton loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    active: {
      control: 'boolean', 
      description: 'Whether skeleton is animated',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    avatar: {
      control: 'boolean',
      description: 'Show avatar placeholder',
      table: {
        type: { summary: 'boolean | object' },
        defaultValue: { summary: 'false' },
      },
    },
    title: {
      control: 'boolean',
      description: 'Show title placeholder',
      table: {
        type: { summary: 'boolean | object' },
        defaultValue: { summary: 'true' },
      },
    },
    paragraph: {
      control: 'boolean',
      description: 'Show paragraph placeholder',
      table: {
        type: { summary: 'boolean | object' },
        defaultValue: { summary: 'true' },
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
    loading: true,
    active: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic skeleton with animated loading placeholder.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Basic</h4>
        <Skeleton active />
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">With Avatar</h4>
        <Skeleton active avatar />
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Complex Layout</h4>
        <Skeleton 
          active 
          avatar={{ size: 'large' }}
          paragraph={{ rows: 4 }}
        />
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">List Items</h4>
        <div className="space-y-3">
          <Skeleton active avatar={{ size: 'small' }} paragraph={{ rows: 1 }} />
          <Skeleton active avatar={{ size: 'small' }} paragraph={{ rows: 1 }} />
          <Skeleton active avatar={{ size: 'small' }} paragraph={{ rows: 1 }} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different skeleton configurations for various content types.',
      },
    },
  },
};

export const SubComponents: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Skeleton.Button</h4>
        <div className="flex gap-2">
          <Skeleton.Button size="small" active />
          <Skeleton.Button size="default" active />
          <Skeleton.Button size="large" active />
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Skeleton.Input</h4>
        <div className="space-y-2 max-w-xs">
          <Skeleton.Input size="small" active />
          <Skeleton.Input size="default" active />
          <Skeleton.Input size="large" active />
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Skeleton.Image</h4>
        <div className="max-w-xs">
          <Skeleton.Image active />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Specialized skeleton components for buttons, inputs, and images.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Static vs Animated</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-2">Static</p>
            <Skeleton avatar />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-2">Animated</p>
            <Skeleton avatar active />
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">Configuration Options</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-2">Without Title</p>
            <Skeleton active avatar title={false} />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-2">Custom Paragraph</p>
            <Skeleton active avatar paragraph={{ rows: 5 }} />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different skeleton states and configuration options.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [loading, setLoading] = useState(true);
    
    return (
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Interactive Loading State</h4>
          <button
            onClick={() => setLoading(!loading)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mb-4"
          >
            {loading ? 'Show Content' : 'Show Skeleton'}
          </button>
          
          <Skeleton loading={loading} active avatar>
            <div className="flex gap-4">
              <Avatar>JD</Avatar>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-gray-600">
                  This is the actual content that appears when loading is false.
                  It can be any React content you want to show.
                </p>
              </div>
            </div>
          </Skeleton>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Card Layout</h4>
          <div className="border rounded-lg p-4">
            <Skeleton 
              active 
              avatar={{ size: 'large', shape: 'square' }}
              title={{ width: '60%' }}
              paragraph={{ rows: 3, width: ['100%', '80%', '40%'] }}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing interactive loading states and card layouts.',
      },
    },
  },
};