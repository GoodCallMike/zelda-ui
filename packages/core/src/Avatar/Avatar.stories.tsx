import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, Card, Typography } from '@zelda/core';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Avatar component provides user representation with comprehensive accessibility support.

\`\`\`tsx
import { Avatar } from '@zelda/core';

// Primary usage pattern
<Avatar name="John Smith" />

// Key variant
<Avatar 
  src="/profile-image.jpg" 
  name="Sarah Johnson" 
  size="large"
/>
\`\`\`

## Sizes
- **small** - Compact avatars for lists and dense layouts
- **medium** - Standard size for most use cases (default)
- **large** - Prominent avatars for profiles and headers

## Features
- **Image Display** - Shows user profile images with fallback
- **Initials Generation** - Automatic initials from name when no image
- **Graceful Fallback** - Falls back to initials if image fails to load
- **Accessibility** - Proper ARIA attributes and screen reader support

## Accessibility & Testing
- Uses semantic img role with descriptive aria-label
- Graceful degradation to initials when image fails
- Maintains WCAG AA contrast ratios in all themes
- Comprehensive testId support for automated testing

\`\`\`tsx
// Testing approach
const avatar = screen.getByTestId('user-avatar');
expect(avatar).toHaveAttribute('aria-label', 'Avatar for John Smith');
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Avatar size variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    name: {
      control: 'text',
      description: 'Name for generating initials and aria-label',
      table: {
        type: { summary: 'string' },
      },
    },
    src: {
      control: 'text',
      description: 'Image source URL',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: 'text',
      description: 'Image alt text for accessibility',
      table: {
        type: { summary: 'string' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
    },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'John Smith',
    testId: 'default-avatar',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6 p-4">
      <div className="space-y-4">
        <Typography variant="h3" testId="sizes-title">
          Sizes
        </Typography>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <Avatar name="John Smith" size="small" testId="small-avatar" />
            <Typography variant="caption" className="block mt-1">
              Small
            </Typography>
          </div>
          <div className="text-center">
            <Avatar name="Sarah Johnson" size="medium" testId="medium-avatar" />
            <Typography variant="caption" className="block mt-1">
              Medium
            </Typography>
          </div>
          <div className="text-center">
            <Avatar name="Mike Davis" size="large" testId="large-avatar" />
            <Typography variant="caption" className="block mt-1">
              Large
            </Typography>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="states-title">
          States
        </Typography>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <Avatar name="Emma Wilson" testId="initials-avatar" />
            <Typography variant="caption" className="block mt-1">
              Initials
            </Typography>
          </div>
          <div className="text-center">
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              name="Alex Chen"
              testId="image-avatar"
            />
            <Typography variant="caption" className="block mt-1">
              With Image
            </Typography>
          </div>
          <div className="text-center">
            <Avatar testId="fallback-avatar" />
            <Typography variant="caption" className="block mt-1">
              Fallback
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Avatar variants showing different sizes and states including initials, images, and fallback.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl p-6">
      <div className="space-y-4">
        <Typography variant="h1" color="primary" testId="profile-title">
          User Profiles
        </Typography>
        <Typography variant="body" testId="profile-description">
          Avatar components in various user interface contexts.
        </Typography>
      </div>

      <Card>
        <Typography variant="h2" className="mb-4" testId="user-profile-title">
          User Profile Header
        </Typography>
        <div className="flex items-center gap-4">
          <Avatar
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
            name="Jessica Martinez"
            size="large"
            testId="profile-avatar"
          />
          <div>
            <Typography variant="h3" testId="profile-name">
              Jessica Martinez
            </Typography>
            <Typography
              variant="body2"
              className="text-gray-600"
              testId="profile-role"
            >
              Senior Product Manager
            </Typography>
            <Typography
              variant="caption"
              className="text-gray-500"
              testId="profile-location"
            >
              San Francisco, CA
            </Typography>
          </div>
        </div>
      </Card>

      <Card>
        <Typography variant="h2" className="mb-4" testId="team-list-title">
          Team Members
        </Typography>
        <div className="space-y-3">
          {[
            { name: 'David Kim', role: 'Frontend Developer' },
            { name: 'Lisa Wang', role: 'UX Designer' },
            { name: 'Carlos Rodriguez', role: 'Backend Developer' },
            { name: 'Amy Foster', role: 'Product Owner' },
          ].map((member, index) => (
            <div key={member.name} className="flex items-center gap-3">
              <Avatar
                name={member.name}
                size="small"
                testId={`team-member-${index}`}
              />
              <div>
                <Typography variant="body" testId={`member-name-${index}`}>
                  {member.name}
                </Typography>
                <Typography
                  variant="caption"
                  className="text-gray-600"
                  testId={`member-role-${index}`}
                >
                  {member.role}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <Typography
          variant="h2"
          className="mb-4"
          testId="recent-activity-title"
        >
          Recent Activity
        </Typography>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Avatar
              name="Tom Anderson"
              size="small"
              testId="activity-avatar-1"
            />
            <div className="flex-1">
              <Typography variant="body2" testId="activity-text-1">
                <strong>Tom Anderson</strong> updated the project timeline
              </Typography>
              <Typography
                variant="caption"
                className="text-gray-500"
                testId="activity-time-1"
              >
                2 hours ago
              </Typography>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Avatar
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
              name="Rachel Green"
              size="small"
              testId="activity-avatar-2"
            />
            <div className="flex-1">
              <Typography variant="body2" testId="activity-text-2">
                <strong>Rachel Green</strong> completed the design review
              </Typography>
              <Typography
                variant="caption"
                className="text-gray-500"
                testId="activity-time-2"
              >
                4 hours ago
              </Typography>
            </div>
          </div>
        </div>
      </Card>

      <div className="p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded">
        <Typography
          variant="h3"
          color="success"
          className="mb-2"
          testId="success-title"
        >
          Profile Updated
        </Typography>
        <Typography variant="body" color="success" testId="success-message">
          Your profile information has been successfully updated.
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Avatar components integrated with other components in realistic user interface scenarios.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-6 p-4">
      <div className="space-y-4">
        <Typography variant="h3" testId="image-handling-title">
          Image Handling
        </Typography>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              name="Robert Johnson"
              testId="valid-image-avatar"
            />
            <Typography variant="body2">Valid image URL</Typography>
          </div>
          <div className="flex items-center gap-3">
            <Avatar
              src="/invalid-image-url.jpg"
              name="Invalid Image"
              testId="invalid-image-avatar"
            />
            <Typography variant="body2">
              Invalid image URL (falls back to initials)
            </Typography>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="initials-generation-title">
          Initials Generation
        </Typography>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar name="John Smith" testId="two-names-avatar" />
            <Typography variant="body2">
              Two names: "John Smith" → "JS"
            </Typography>
          </div>
          <div className="flex items-center gap-3">
            <Avatar name="Mary Jane Watson" testId="three-names-avatar" />
            <Typography variant="body2">
              Three names: "Mary Jane Watson" → "MW"
            </Typography>
          </div>
          <div className="flex items-center gap-3">
            <Avatar name="Cher" testId="single-name-avatar" />
            <Typography variant="body2">Single name: "Cher" → "C"</Typography>
          </div>
          <div className="flex items-center gap-3">
            <Avatar name="" testId="empty-name-avatar" />
            <Typography variant="body2">Empty name → "?" (fallback)</Typography>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="accessibility-title">
          Accessibility Features
        </Typography>
        <Card>
          <Typography
            variant="body2"
            className="mb-3"
            testId="accessibility-description"
          >
            <strong>Screen Reader Support:</strong> All avatars include proper
            ARIA labels and semantic roles.
          </Typography>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar name="Accessible User" testId="accessible-avatar" />
              <Typography variant="body2">
                Standard aria-label: "Avatar for Accessible User"
              </Typography>
            </div>
            <div className="flex items-center gap-3">
              <Avatar
                name="Custom Alt User"
                alt="Custom Alt User, Senior Developer"
                testId="custom-alt-avatar"
              />
              <Typography variant="body2">
                Custom alt text: "Custom Alt User, Senior Developer"
              </Typography>
            </div>
          </div>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Avatar states including image handling, initials generation, and accessibility features.',
      },
    },
  },
};
