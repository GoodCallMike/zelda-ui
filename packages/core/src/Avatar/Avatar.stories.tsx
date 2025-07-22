import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { UserCircleIcon } from '@jetstream/icons';

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
import { Avatar } from '@jetstream/core';

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
      description: 'Avatar size',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Avatar shape',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
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
    <div className="flex items-center gap-4">
      <Avatar size="small">S</Avatar>
      <Avatar size="default">M</Avatar>
      <Avatar size="large">L</Avatar>
      <Avatar size={64}>XL</Avatar>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar shape="circle">JD</Avatar>
      <Avatar shape="square">JD</Avatar>
    </div>
  ),
};

export const Fallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src="invalid-url.jpg" alt="Broken">FB</Avatar>
      <Avatar src="invalid-url.jpg" icon={<UserCircleIcon />} />
      <Avatar src="invalid-url.jpg" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Basic Group</h3>
        <Avatar.Group>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
          <Avatar>D</Avatar>
        </Avatar.Group>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">With Max Count</h3>
        <Avatar.Group maxCount={3}>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
          <Avatar>D</Avatar>
          <Avatar>E</Avatar>
        </Avatar.Group>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Large Group</h3>
        <Avatar.Group size="large" maxCount={4}>
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
          <Avatar>JD</Avatar>
          <Avatar icon={<UserCircleIcon />} />
          <Avatar>AB</Avatar>
          <Avatar>CD</Avatar>
          <Avatar>EF</Avatar>
        </Avatar.Group>
      </div>
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Profile Cards</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 border rounded-lg">
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-gray-500">Software Engineer</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 border rounded-lg">
            <Avatar>JA</Avatar>
            <div>
              <div className="font-medium">Jane Adams</div>
              <div className="text-sm text-gray-500">Product Manager</div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Team Members</h3>
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <span className="font-medium">Project Team</span>
          <Avatar.Group maxCount={3}>
            <Avatar size="small">A</Avatar>
            <Avatar size="small">B</Avatar>
            <Avatar size="small">C</Avatar>
            <Avatar size="small">D</Avatar>
            <Avatar size="small">E</Avatar>
          </Avatar.Group>
        </div>
      </div>
    </div>
  ),
};