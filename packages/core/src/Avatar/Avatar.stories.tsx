import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { UserCircleIcon } from '@zelda/icons';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Avatar component for displaying user profile pictures, initials, or icons with comprehensive accessibility and testing support.

## Overview

The Avatar component provides a flexible way to display user representations in your application. It supports multiple content types with intelligent fallback handling and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Avatar } from '@zelda/core';

// Image avatar
<Avatar src="/user.jpg" alt="John Doe" />

// Text/initials avatar
<Avatar>JD</Avatar>

// Icon avatar
<Avatar icon={<UserIcon />} />

// Avatar group
<Avatar.Group maxCount={3}>
  <Avatar>A</Avatar>
  <Avatar>B</Avatar>
  <Avatar>C</Avatar>
  <Avatar>D</Avatar>
</Avatar.Group>
\`\`\`

## Content Types

### Image Avatar
\`\`\`tsx
<Avatar 
  src="https://example.com/user.jpg" 
  alt="User profile picture"
  size="large"
/>
\`\`\`

### Text/Initials Avatar
\`\`\`tsx
<Avatar size="default" shape="circle">
  JD
</Avatar>
\`\`\`

### Icon Avatar
\`\`\`tsx
<Avatar icon={<UserCircleIcon />} size="small" />
\`\`\`

### Fallback Behavior
Avatars automatically fall back in this order:
1. Image (if \`src\` provided and loads successfully)
2. Icon (if \`icon\` provided)
3. Text/initials (if \`children\` provided)
4. Default user icon

## Sizes

\`\`\`tsx
// Predefined sizes
<Avatar size="small">S</Avatar>     // 24px (w-6 h-6)
<Avatar size="default">M</Avatar>   // 32px (w-8 h-8)
<Avatar size="large">L</Avatar>     // 40px (w-10 h-10)

// Custom size
<Avatar size={64}>XL</Avatar>       // 64px custom
\`\`\`

## Shapes

\`\`\`tsx
<Avatar shape="circle">JD</Avatar>   // Circular (default)
<Avatar shape="square">JD</Avatar>   // Rounded square
\`\`\`

## Avatar Groups

\`\`\`tsx
// Basic group
<Avatar.Group>
  <Avatar>A</Avatar>
  <Avatar>B</Avatar>
  <Avatar>C</Avatar>
</Avatar.Group>

// With overflow count
<Avatar.Group maxCount={3}>
  <Avatar>A</Avatar>
  <Avatar>B</Avatar>
  <Avatar>C</Avatar>
  <Avatar>D</Avatar>  {/* Shows as +1 */}
  <Avatar>E</Avatar>
</Avatar.Group>

// Consistent sizing
<Avatar.Group size="large" shape="square">
  <Avatar src="/user1.jpg" />
  <Avatar>AB</Avatar>
  <Avatar icon={<UserIcon />} />
</Avatar.Group>
\`\`\`

## Accessibility

The Avatar component is fully accessible with:

- **ARIA roles**: \`role="img"\` for semantic meaning
- **ARIA labels**: Intelligent labeling based on content
- **Alt text**: Required for images, fallbacks provided
- **Screen reader support**: Descriptive labels for all variants

\`\`\`tsx
// Custom accessibility label
<Avatar 
  src="/user.jpg" 
  alt="Profile picture"
  aria-label="John Doe's profile picture"
/>

// Automatic labeling
<Avatar>JD</Avatar>  // "Avatar with initials JD"
<Avatar />           // "User avatar"
\`\`\`

## Testing

Built-in testing support with \`data-testid\` attributes:

\`\`\`tsx
// Basic testing
<Avatar data-testid="user-avatar">JD</Avatar>

// Image testing (creates container + image test IDs)
<Avatar data-testid="profile-pic" src="/user.jpg" />
// Results in:
// - data-testid="profile-pic" (container)
// - data-testid="profile-pic-image" (image element)

// Group testing
<Avatar.Group data-testid="team-avatars">
  <Avatar data-testid="member-1">A</Avatar>
  <Avatar data-testid="member-2">B</Avatar>
</Avatar.Group>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('user-avatar');
screen.getByTestId('profile-pic-image');
screen.getByTestId('team-avatars');
screen.getAllByTestId(/member-/);
\`\`\`

## Error Handling

\`\`\`tsx
// Graceful image fallback
<Avatar src="broken-url.jpg" alt="User">
  FB  {/* Shows initials if image fails */}
</Avatar>

<Avatar src="broken-url.jpg" icon={<UserIcon />} />
{/* Shows icon if image fails */}

<Avatar src="broken-url.jpg" />
{/* Shows default user icon if image fails */}
\`\`\`

## Best Practices

### Do
- Always provide \`alt\` text for image avatars
- Use meaningful initials (first + last name)
- Maintain consistent sizing within groups
- Provide \`data-testid\` for testing
- Use appropriate sizes for context

### Don't
- Use avatars as interactive buttons (wrap in button if needed)
- Mix shapes inconsistently in the same context
- Forget fallback content for image avatars
- Use overly long text content

## Performance

- **Lazy loading**: Consider adding \`loading="lazy"\` for images
- **Image optimization**: Use appropriate image sizes and formats
- **Memory efficient**: Automatic cleanup of failed image loads
- **Bundle size**: Minimal impact with tree-shaking support`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size of the avatar',
      table: {
        type: { summary: 'small | default | large | number' },
        defaultValue: { summary: 'default' },
      },
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'circle' },
      },
    },
    src: {
      control: 'text',
      description: 'Image source URL for avatar',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: 'text',
      description: 'Alt text for image avatar',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: false,
      description: 'Icon element to display',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    children: {
      control: 'text',
      description: 'Text content (usually initials)',
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
    children: 'JD',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    alt: 'User Avatar',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <UserCircleIcon />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar Sizes</h3>
        <div className="flex items-center gap-4">
          <Avatar size="small" data-testid="small-avatar">S</Avatar>
          <Avatar size="default" data-testid="default-avatar">M</Avatar>
          <Avatar size="large" data-testid="large-avatar">L</Avatar>
          <Avatar size={64} data-testid="custom-avatar">XL</Avatar>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of avatars including predefined and custom sizes.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar Variants</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar shape="circle" data-testid="circle-avatar">JD</Avatar>
            <Avatar shape="square" data-testid="square-avatar">JD</Avatar>
          </div>
          <div className="flex items-center gap-4">
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" data-testid="image-avatar" />
            <Avatar icon={<UserCircleIcon />} data-testid="icon-avatar" />
            <Avatar data-testid="text-avatar">AB</Avatar>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different avatar variants including shapes and content types.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar States</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Fallback Behavior</h4>
            <div className="flex items-center gap-4">
              <Avatar src="invalid-url.jpg" alt="Broken" data-testid="fallback-text">FB</Avatar>
              <Avatar src="invalid-url.jpg" icon={<UserCircleIcon />} data-testid="fallback-icon" />
              <Avatar src="invalid-url.jpg" data-testid="fallback-default" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar fallback behavior when images fail to load.',
      },
    },
  },
};

export const Features: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Avatar Features</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Basic Group</h4>
            <Avatar.Group data-testid="basic-group">
              <Avatar data-testid="group-member-1">A</Avatar>
              <Avatar data-testid="group-member-2">B</Avatar>
              <Avatar data-testid="group-member-3">C</Avatar>
              <Avatar data-testid="group-member-4">D</Avatar>
            </Avatar.Group>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">With Max Count</h4>
            <Avatar.Group maxCount={3} data-testid="limited-group">
              <Avatar>A</Avatar>
              <Avatar>B</Avatar>
              <Avatar>C</Avatar>
              <Avatar>D</Avatar>
              <Avatar>E</Avatar>
            </Avatar.Group>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Large Group</h4>
            <Avatar.Group size="large" maxCount={4} data-testid="large-group">
              <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
              <Avatar>JD</Avatar>
              <Avatar icon={<UserCircleIcon />} />
              <Avatar>AB</Avatar>
              <Avatar>CD</Avatar>
              <Avatar>EF</Avatar>
            </Avatar.Group>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Advanced avatar features including grouping and overflow handling.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">User Profiles</h3>
        <div className="space-y-3 p-4 border rounded-lg">
          <div className="flex items-center gap-3">
            <Avatar 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
              alt="John Doe"
              data-testid="profile-john"
            />
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-gray-500">Software Engineer</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar data-testid="profile-jane">JA</Avatar>
            <div>
              <div className="font-medium">Jane Adams</div>
              <div className="text-sm text-gray-500">Product Manager</div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Team Collaboration</h3>
        <div className="space-y-4 p-4 border rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-medium">Project Alpha Team</span>
            <Avatar.Group maxCount={3} data-testid="alpha-team">
              <Avatar size="small">A</Avatar>
              <Avatar size="small">B</Avatar>
              <Avatar size="small">C</Avatar>
              <Avatar size="small">D</Avatar>
              <Avatar size="small">E</Avatar>
            </Avatar.Group>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Design Team</span>
            <Avatar.Group maxCount={4} data-testid="design-team">
              <Avatar size="small" icon={<UserCircleIcon />} />
              <Avatar size="small">DM</Avatar>
              <Avatar size="small">UI</Avatar>
              <Avatar size="small">UX</Avatar>
            </Avatar.Group>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing avatars in user profiles and team collaboration scenarios with proper testing IDs.',
      },
    },
  },
};