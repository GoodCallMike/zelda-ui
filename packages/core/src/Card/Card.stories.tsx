import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Card } from './Card';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { HeartIcon, Share01Icon, DotsHorizontalIcon, Settings01Icon } from '@jetstream/icons';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Card component for displaying content in a structured container.

## Usage

\`\`\`tsx
import { Card } from '@jetstream/core';

<Card title="Card Title">
  Card content goes here
</Card>
\`\`\`

## Advanced Usage

### With Cover Image
\`\`\`tsx
<Card
  cover={<img src="image.jpg" alt="Cover" />}
  title="Card with Cover"
>
  Content with cover image
</Card>
\`\`\`

### With Actions
\`\`\`tsx
<Card
  title="Card with Actions"
  actions={[
    <Button key="edit">Edit</Button>,
    <Button key="delete" variant="secondary">Delete</Button>
  ]}
>
  Card content
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

## Features

- **Flexible Layout** - Support for title, extra content, cover, and actions
- **Meta Component** - Built-in meta component for avatar, title, and description
- **Loading State** - Skeleton loading animation
- **Hoverable** - Optional hover effects
- **Bordered** - Configurable border
- **Sizes** - Default and small sizes
- **Responsive** - Works on all screen sizes

## Accessibility

### Keyboard Navigation
- **Tab** - Navigate to interactive elements within the card
- **Enter/Space** - Activate clickable cards or buttons

### Screen Reader Support
- Proper semantic structure with headings and content
- Action buttons are properly labeled
- Loading state is announced

### ARIA Attributes
- Cards use appropriate semantic HTML
- Interactive elements have proper roles
- Loading state uses aria-busy

### Best Practices
- Use meaningful titles and descriptions
- Ensure sufficient color contrast
- Provide alternative text for images
- Test with screen readers`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    extra: {
      control: 'text',
      description: 'Extra content in the top-right corner',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card is hoverable',
    },
    bordered: {
      control: 'boolean',
      description: 'Whether the card has border',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Card size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'Card content goes here. This is a basic card with a title and content.',
  },
};

export const WithExtra: Story = {
  args: {
    title: 'Card Title',
    extra: <DotsHorizontalIcon className="w-4 h-4" />,
    children: 'Card with extra content in the header.',
  },
};

export const WithCover: Story = {
  render: () => (
    <Card
      cover={
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=200&fit=crop"
          alt="Cover"
          className="w-full h-48 object-cover"
        />
      }
      title="Card with Cover"
    >
      This card has a cover image at the top.
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card
      title="Card with Actions"
      actions={[
        <Button key="edit" size="small">
          Edit
        </Button>,
        <Button key="delete" variant="secondary" size="small">
          Delete
        </Button>,
      ]}
    >
      This card has action buttons at the bottom.
    </Card>
  ),
};

export const WithMeta: Story = {
  render: () => (
    <Card className="w-80">
      <Card.Meta
        avatar={<Avatar size="large">JD</Avatar>}
        title="John Doe"
        description="Software Engineer at Tech Corp. Passionate about building great user experiences."
      />
    </Card>
  ),
};

export const Hoverable: Story = {
  args: {
    title: 'Hoverable Card',
    hoverable: true,
    children: 'Hover over this card to see the effect.',
  },
};

export const Borderless: Story = {
  args: {
    title: 'Borderless Card',
    bordered: false,
    children: 'This card has no border.',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Card',
    loading: true,
    children: 'This content will not show while loading.',
  },
};

export const Small: Story = {
  args: {
    title: 'Small Card',
    size: 'small',
    children: 'This is a small-sized card with reduced padding.',
  },
};

export const Complex: Story = {
  render: () => (
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
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }, (_, i) => (
        <Card
          key={i}
          title={`Card ${i + 1}`}
          extra={<DotsHorizontalIcon className="w-4 h-4" />}
          hoverable
        >
          <Card.Meta
            avatar={<Avatar size="small">{String.fromCharCode(65 + i)}</Avatar>}
            title={`User ${i + 1}`}
            description="This is the description"
          />
        </Card>
      ))}
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [liked, setLiked] = useState(false);
    
    const handleRefresh = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    
    return (
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
        >
          <Card.Meta
            avatar={<Avatar size="small">IC</Avatar>}
            title="Interactive Content"
            description="Click the buttons to interact with this card"
          />
        </Card>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Size</h3>
        <Card title="Default Card" extra="Extra">
          Default sized card with normal padding and font sizes.
        </Card>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Small Size</h3>
        <Card title="Small Card" size="small" extra="Extra">
          Small sized card with reduced padding and font sizes.
        </Card>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Hoverable</h3>
        <Card title="Hoverable Card" hoverable>
          Hover over this card to see the shadow effect.
        </Card>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Borderless</h3>
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
          <Card title="Borderless Card" bordered={false}>
            This card has no border and works well on colored backgrounds.
          </Card>
        </div>
      </div>
    </div>
  ),
};