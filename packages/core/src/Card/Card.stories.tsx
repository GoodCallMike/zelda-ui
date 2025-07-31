import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Card } from './Card';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { HeartIcon, Share01Icon, DotsHorizontalIcon, Settings01Icon } from '@zelda/icons';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Card component for displaying content in structured containers with comprehensive accessibility and testing support.

## Overview

The Card component provides a flexible container for displaying content with optional headers, covers, actions, and meta information. It supports loading states, hover effects, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Card } from '@zelda/core';

// Basic card
<Card title="Card Title">
  Card content goes here
</Card>

// With actions
<Card
  title="Interactive Card"
  actions={[
    <Button key="edit">Edit</Button>,
    <Button key="delete" variant="secondary">Delete</Button>
  ]}
>
  Card with action buttons
</Card>
\`\`\`

## Content Types

### Basic Content
\`\`\`tsx
<Card title="Simple Card">
  Basic text content with title
</Card>
\`\`\`

### With Cover Image
\`\`\`tsx
<Card
  cover={<img src="image.jpg" alt="Cover" />}
  title="Card with Cover"
>
  Content with cover image
</Card>
\`\`\`

### With Meta Information
\`\`\`tsx
<Card>
  <Card.Meta
    avatar={<Avatar src="avatar.jpg" />}
    title="John Doe"
    description="Software Engineer"
  />
</Card>
\`\`\`

## Layout Options

### Header with Extra Content
\`\`\`tsx
<Card
  title="Card Title"
  extra={<Button size="small">Action</Button>}
>
  Card with header action
</Card>
\`\`\`

### Action Footer
\`\`\`tsx
<Card
  title="Card with Actions"
  actions={[
    <Button key="primary">Primary</Button>,
    <Button key="secondary" variant="secondary">Secondary</Button>
  ]}
>
  Card content with footer actions
</Card>
\`\`\`

### Loading State
\`\`\`tsx
<Card title="Loading Card" loading>
  This content is hidden while loading
</Card>
\`\`\`

## Visual Variants

### Sizes
\`\`\`tsx
<Card size="default" title="Default Size">Standard card</Card>
<Card size="small" title="Small Size">Compact card</Card>
\`\`\`

### Hover Effects
\`\`\`tsx
<Card hoverable title="Hoverable Card">
  Hover for shadow effect
</Card>
\`\`\`

### Border Control
\`\`\`tsx
<Card bordered={false} title="Borderless Card">
  Card without border
</Card>
\`\`\`

## Accessibility

The Card component is fully accessible with:

- **Semantic structure**: Proper heading hierarchy and content organization
- **Keyboard navigation**: Tab through interactive elements, Enter/Space activation
- **Screen reader support**: Meaningful titles, descriptions, and action labels
- **Loading states**: ARIA busy states and skeleton loading
- **Focus management**: Clear focus indicators and logical tab order
- **Interactive elements**: Proper button roles and accessible names

\`\`\`tsx
// Accessible card with all features
<Card
  title="Accessible Card"
  extra={<Button aria-label="Card options">⋯</Button>}
  actions={[
    <Button key="edit" aria-label="Edit card content">Edit</Button>
  ]}
  data-testid="user-card"
>
  <Card.Meta
    avatar={<Avatar alt="User avatar" />}
    title="User Name"
    description="User role and information"
  />
</Card>
\`\`\`

## Testing

Built-in testing support with \`data-testid\` prop:

\`\`\`tsx
<Card data-testid="product-card" title="Product">
  Product information
</Card>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('product-card');
screen.getByRole('heading', { name: 'Product' });
screen.getByText('Product information');
\`\`\`

## Best Practices

### Do
- Use meaningful titles and descriptions
- Provide alternative text for cover images
- Include \`data-testid\` for reliable testing
- Use appropriate heading levels for card titles
- Ensure sufficient color contrast for all content
- Group related actions logically

### Don't
- Overcrowd cards with too much content
- Use cards as the only interactive element (ensure keyboard access)
- Forget loading states for dynamic content
- Mix different card sizes inconsistently
- Use unclear or generic action button labels
- Nest interactive elements improperly`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title displayed in header',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    extra: {
      control: false,
      description: 'Extra content in the top-right corner of header',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    cover: {
      control: false,
      description: 'Cover image or content displayed at top',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    actions: {
      control: false,
      description: 'Action buttons displayed in footer',
      table: {
        type: { summary: 'React.ReactNode[]' },
      },
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card shows hover effects',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    bordered: {
      control: 'boolean',
      description: 'Whether the card has a border',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with skeleton animation',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Size of the card affecting padding and typography',
      table: {
        type: { summary: 'default | small' },
        defaultValue: { summary: 'default' },
      },
    },
    children: {
      control: 'text',
      description: 'Card content',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    'data-testid': {
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
    title: 'Card Title',
    children: 'Card content goes here. This is a basic card with a title and content.',
    'data-testid': 'default-card',
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Card States</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Normal State" data-testid="normal-state">
            This is a normal card state with regular content.
          </Card>
          
          <Card title="Loading State" loading data-testid="loading-state">
            This content is hidden while loading.
          </Card>
          
          <Card title="Hoverable State" hoverable data-testid="hoverable-state">
            Hover over this card to see the shadow effect.
          </Card>
          
          <Card 
            title="With Extra" 
            extra={<DotsHorizontalIcon className="w-4 h-4" />}
            data-testid="extra-state"
          >
            Card with extra content in header.
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the card component including normal, loading, hoverable, and with extra content.',
      },
    },
  },
};

export const Features: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Features</h3>
        <div className="space-y-4">
          <Card
            cover={
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=200&fit=crop"
                alt="Cover"
                className="w-full h-48 object-cover"
              />
            }
            title="Card with Cover"
            data-testid="cover-card"
          >
            This card has a cover image at the top.
          </Card>
          
          <Card
            title="Card with Actions"
            actions={[
              <Button key="edit" size="small">Edit</Button>,
              <Button key="delete" variant="secondary" size="small">Delete</Button>,
            ]}
            data-testid="actions-card"
          >
            This card has action buttons at the bottom.
          </Card>
          
          <Card className="w-80" data-testid="meta-card">
            <Card.Meta
              avatar={<Avatar size="large">JD</Avatar>}
              title="John Doe"
              description="Software Engineer at Tech Corp. Passionate about building great user experiences."
            />
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Advanced card features including cover images, action buttons, and meta information display.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [liked, setLiked] = useState(false);
    
    const handleRefresh = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Project Dashboard</h3>
          <div className="w-80">
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=200&fit=crop"
                  alt="Project"
                  className="w-full h-48 object-cover"
                />
              }
              title="Project Dashboard"
              extra={<Tag color="green">Active</Tag>}
              actions={[
                <Button key="view" size="small" variant="ghost">
                  <HeartIcon className="w-4 h-4" />
                </Button>,
                <Button key="share" size="small" variant="ghost">
                  <Share01Icon className="w-4 h-4" />
                </Button>,
                <Button key="settings" size="small" variant="ghost">
                  <Settings01Icon className="w-4 h-4" />
                </Button>,
              ]}
              hoverable
              data-testid="project-card"
            >
              <Card.Meta
                avatar={<Avatar size="small">PM</Avatar>}
                title="Project Manager"
                description="Last updated 2 hours ago"
              />
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A comprehensive dashboard for managing project tasks, timelines, and team collaboration.
                </p>
              </div>
            </Card>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Interactive Card</h3>
          <div className="w-80">
            <Card
              title="Interactive Card"
              extra={
                <Button size="small" onClick={handleRefresh} disabled={loading}>
                  Refresh
                </Button>
              }
              loading={loading}
              actions={[
                <Button
                  key="like"
                  size="small"
                  variant={liked ? 'primary' : 'ghost'}
                  onClick={() => setLiked(!liked)}
                >
                  <HeartIcon className="w-4 h-4" />
                  {liked ? 'Liked' : 'Like'}
                </Button>,
                <Button key="share" size="small" variant="ghost">
                  <Share01Icon className="w-4 h-4" />
                  Share
                </Button>,
              ]}
              data-testid="interactive-card"
            >
              <Card.Meta
                avatar={<Avatar size="small">IC</Avatar>}
                title="Interactive Content"
                description="Click the buttons to interact with this card"
              />
            </Card>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">User Grid</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <Card
                key={i}
                title={`User ${i + 1}`}
                extra={<DotsHorizontalIcon className="w-4 h-4" />}
                hoverable
                data-testid={`user-card-${i + 1}`}
              >
                <Card.Meta
                  avatar={<Avatar size="small">{String.fromCharCode(65 + i)}</Avatar>}
                  title={`User ${i + 1}`}
                  description="Software Engineer"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing cards in project dashboards, interactive scenarios, and user grids with proper testing IDs.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Variants</h3>
        <div className="space-y-4">
          <Card title="Default Card" extra="Extra" data-testid="default-variant">
            Default sized card with normal padding and font sizes.
          </Card>
          
          <Card title="Small Card" size="small" extra="Extra" data-testid="small-variant">
            Small sized card with reduced padding and font sizes.
          </Card>
          
          <Card title="Hoverable Card" hoverable data-testid="hoverable-variant">
            Hover over this card to see the shadow effect.
          </Card>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
            <Card title="Borderless Card" bordered={false} data-testid="borderless-variant">
              This card has no border and works well on colored backgrounds.
            </Card>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the card component including sizes, hover effects, and border options.',
      },
    },
  },
};