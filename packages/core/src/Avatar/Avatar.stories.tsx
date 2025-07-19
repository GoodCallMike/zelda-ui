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
        component: `Avatar component for displaying user profile pictures, initials, or icons.

## Usage

\`\`\`tsx
import { Avatar } from '@jetstream/core';

<Avatar src="/user.jpg" alt="User" />
<Avatar>JD</Avatar>
<Avatar icon={<UserIcon />} />
\`\`\`

## Features

- **Multiple content types** - Image, text, or icon
- **Sizes** - Small, default, large, or custom number
- **Shapes** - Circle or square
- **Fallbacks** - Graceful fallback when image fails
- **Avatar Group** - Display multiple avatars with overflow count`,
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