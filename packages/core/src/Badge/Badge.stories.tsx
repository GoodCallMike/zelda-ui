import type { Meta, StoryObj } from '@storybook/react';
import {
  AlertTriangleIcon,
  CheckIcon,
  Mail01Icon,
  Star01Icon,
  XIcon,
} from '@zelda/icons';
import { Typography } from '../Typography';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Compact status indicators and labels for displaying metadata, counts, and state information.

\`\`\`tsx
import { Badge } from '@zelda/core';

// Basic status indicator
<Badge variant="success">Active</Badge>

// Notification count
<Badge variant="primary">3</Badge>
\`\`\`

## Variants
- **primary** - Important status or new items (blue/purple theme)
- **success** - Positive states and completed actions (green)
- **warning** - Caution states requiring attention (orange)
- **error** - Critical issues and failures (red)
- **default** - Neutral information (gray)

## Accessibility & Testing
- Uses semantic span element with proper text content
- Supports aria-label for additional context (especially for count badges)
- Not focusable by default (display element)

\`\`\`tsx
// Testing approach
const badge = screen.getByTestId('status-badge');
expect(badge).toHaveTextContent('Active');
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Visual style and semantic meaning',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Badge size for different contexts',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    children: {
      control: 'text',
      description: 'Badge content (text, numbers, or icons)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
      table: {
        type: { summary: 'string' },
      },
    },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'New',
    variant: 'primary',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All available badge variants showing different semantic meanings and visual styles.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="text-center">
        <Badge size="small" variant="primary">
          Small
        </Badge>
        <div className="text-xs mt-1 text-gray-600">Compact</div>
      </div>
      <div className="text-center">
        <Badge size="medium" variant="primary">
          Medium
        </Badge>
        <div className="text-xs mt-1 text-gray-600">Default</div>
      </div>
      <div className="text-center">
        <Badge size="large" variant="primary">
          Large
        </Badge>
        <div className="text-xs mt-1 text-gray-600">Prominent</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Badge sizes for different interface contexts and visual hierarchy needs.',
      },
    },
  },
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
        Pending
      </Badge>
      <Badge variant="error">
        <XIcon className="w-3 h-3 mr-1" />
        Failed
      </Badge>
      <Badge variant="primary">
        <Star01Icon className="w-3 h-3 mr-1" />
        Featured
      </Badge>
      <Badge variant="primary" size="small">
        <Mail01Icon className="w-3 h-3" />
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Badges with icons for enhanced visual communication and status indication.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      {/* User Profile Status */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h6" className="mb-4">
          User Profile Status
        </Typography>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div>
            <div className="font-medium">Sarah Johnson</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="success" size="small">
                Online
              </Badge>
              <Badge variant="primary" size="small">
                Pro
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Task Management */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h6" className="mb-4">
          Project Tasks
        </Typography>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Design System Updates</span>
            <Badge variant="success">
              <CheckIcon className="w-3 h-3 mr-1" />
              Complete
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>API Integration</span>
            <Badge variant="warning">In Progress</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>User Testing</span>
            <Badge variant="error">Blocked</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Documentation</span>
            <Badge variant="primary">New</Badge>
          </div>
        </div>
      </div>

      {/* Notification Center */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h6" className="mb-4">
          Notifications
        </Typography>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail01Icon className="w-4 h-4 text-gray-500" />
              <span>Messages</span>
            </div>
            <Badge variant="primary" aria-label="5 unread messages">
              5
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangleIcon className="w-4 h-4 text-gray-500" />
              <span>System Alerts</span>
            </div>
            <Badge variant="error" aria-label="2 critical alerts">
              2
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star01Icon className="w-4 h-4 text-gray-500" />
              <span>Updates</span>
            </div>
            <Badge variant="success" aria-label="12 feature updates">
              12
            </Badge>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Real-world examples showing badges in user profiles, task management, and notification systems.',
      },
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story:
          'Badge appearance in dark mode with proper contrast and theme adaptation.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="dark p-6 bg-gray-900">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="space-y-6">
      <div className="flex gap-4 flex-wrap">
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </div>

      <div className="p-4 border border-gray-700 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div>
            <div className="font-medium text-white">Alex Chen</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="success" size="small">
                <CheckIcon className="w-3 h-3 mr-1" />
                Available
              </Badge>
              <Badge variant="primary" size="small">
                Admin
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
