import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Badge } from '../Badge';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Flexible container component for grouping related content with consistent spacing and visual hierarchy.

\`\`\`tsx
import { Card } from '@zelda/core';

// Basic content container
<Card>
  <h3>Product Title</h3>
  <p>Product description</p>
</Card>

// With visual variants
<Card variant="outlined">Outlined card</Card>
<Card variant="elevated">Elevated card</Card>
\`\`\`

## Variants
- **default** - Subtle background with minimal visual weight
- **outlined** - Clear border for content separation
- **elevated** - Shadow depth for emphasis and hierarchy

## Accessibility & Testing
- Uses semantic article element for content grouping
- Supports all standard HTML attributes and ARIA properties
- Keyboard navigation flows naturally through card content

\`\`\`tsx
// Testing approach
const card = screen.getByTestId('product-card');
expect(card).toBeInTheDocument();
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Visual style and emphasis level',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    children: {
      control: 'text',
      description: 'Card content (text, components, or complex layouts)',
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
    children: 'Basic card content with default styling',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-6 flex-wrap">
      <Card className="w-48">
        <Typography variant="h6" className="mb-2">Default</Typography>
        <Typography variant="body2">Subtle background for minimal visual weight</Typography>
      </Card>
      <Card variant="outlined" className="w-48">
        <Typography variant="h6" className="mb-2">Outlined</Typography>
        <Typography variant="body2">Clear borders for content separation</Typography>
      </Card>
      <Card variant="elevated" className="w-48">
        <Typography variant="h6" className="mb-2">Elevated</Typography>
        <Typography variant="body2">Shadow depth for emphasis and hierarchy</Typography>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available card variants showing different visual emphasis levels.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      {/* Product Cards */}
      <div>
        <Typography variant="h5" className="mb-4">Product Showcase</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card variant="outlined" className="p-4">
            <div className="w-full h-32 bg-gray-200 rounded mb-3"></div>
            <Typography variant="h6" className="mb-2">Premium Plan</Typography>
            <Typography variant="body2" className="mb-3 text-gray-600">
              Advanced features for growing teams
            </Typography>
            <div className="flex items-center justify-between">
              <Typography variant="h6">$29/month</Typography>
              <Badge variant="primary" size="small">Popular</Badge>
            </div>
            <Button variant="primary" className="w-full mt-3">
              Get Started
            </Button>
          </Card>

          <Card variant="elevated" className="p-4">
            <div className="w-full h-32 bg-gray-200 rounded mb-3"></div>
            <Typography variant="h6" className="mb-2">Enterprise Plan</Typography>
            <Typography variant="body2" className="mb-3 text-gray-600">
              Complete solution for large organizations
            </Typography>
            <div className="flex items-center justify-between">
              <Typography variant="h6">$99/month</Typography>
              <Badge variant="success" size="small">Best Value</Badge>
            </div>
            <Button variant="primary" className="w-full mt-3">
              Contact Sales
            </Button>
          </Card>

          <Card className="p-4">
            <div className="w-full h-32 bg-gray-200 rounded mb-3"></div>
            <Typography variant="h6" className="mb-2">Starter Plan</Typography>
            <Typography variant="body2" className="mb-3 text-gray-600">
              Perfect for individuals and small projects
            </Typography>
            <div className="flex items-center justify-between">
              <Typography variant="h6">Free</Typography>
              <Badge variant="default" size="small">Limited</Badge>
            </div>
            <Button variant="default" className="w-full mt-3">
              Start Free
            </Button>
          </Card>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div>
        <Typography variant="h5" className="mb-4">Dashboard Metrics</Typography>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <Typography variant="h4" className="mb-1">2,847</Typography>
            <Typography variant="body2" className="text-gray-600">Total Users</Typography>
            <Badge variant="success" size="small" className="mt-2">+12%</Badge>
          </Card>

          <Card className="p-4 text-center">
            <Typography variant="h4" className="mb-1">$45,210</Typography>
            <Typography variant="body2" className="text-gray-600">Revenue</Typography>
            <Badge variant="success" size="small" className="mt-2">+8%</Badge>
          </Card>

          <Card className="p-4 text-center">
            <Typography variant="h4" className="mb-1">156</Typography>
            <Typography variant="body2" className="text-gray-600">Orders</Typography>
            <Badge variant="warning" size="small" className="mt-2">-3%</Badge>
          </Card>

          <Card className="p-4 text-center">
            <Typography variant="h4" className="mb-1">98.5%</Typography>
            <Typography variant="body2" className="text-gray-600">Uptime</Typography>
            <Badge variant="success" size="small" className="mt-2">Excellent</Badge>
          </Card>
        </div>
      </div>

      {/* Content Cards */}
      <div>
        <Typography variant="h5" className="mb-4">Article Preview</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="outlined" className="p-4">
            <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
            <Badge variant="primary" size="small" className="mb-2">Technology</Badge>
            <Typography variant="h6" className="mb-2">
              Building Scalable React Applications
            </Typography>
            <Typography variant="body2" className="mb-4 text-gray-600">
              Learn best practices for architecting large-scale React applications with modern tooling and patterns.
            </Typography>
            <div className="flex items-center justify-between">
              <Typography variant="body2" className="text-gray-500">5 min read</Typography>
              <Button variant="text" size="small">Read More</Button>
            </div>
          </Card>

          <Card variant="outlined" className="p-4">
            <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
            <Badge variant="success" size="small" className="mb-2">Design</Badge>
            <Typography variant="h6" className="mb-2">
              Design Systems That Scale
            </Typography>
            <Typography variant="body2" className="mb-4 text-gray-600">
              Creating consistent, maintainable design systems for growing product teams and organizations.
            </Typography>
            <div className="flex items-center justify-between">
              <Typography variant="body2" className="text-gray-500">8 min read</Typography>
              <Button variant="text" size="small">Read More</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing cards in product showcases, dashboards, and content layouts.',
      },
    },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Card appearance in dark mode with proper contrast and theme adaptation.',
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
      <div className="flex gap-6 flex-wrap">
        <Card className="w-48">
          <Typography variant="h6" className="mb-2 text-white">Default</Typography>
          <Typography variant="body2" className="text-gray-300">Dark theme adaptation</Typography>
        </Card>
        <Card variant="outlined" className="w-48">
          <Typography variant="h6" className="mb-2 text-white">Outlined</Typography>
          <Typography variant="body2" className="text-gray-300">Subtle border contrast</Typography>
        </Card>
        <Card variant="elevated" className="w-48">
          <Typography variant="h6" className="mb-2 text-white">Elevated</Typography>
          <Typography variant="body2" className="text-gray-300">Enhanced depth in dark</Typography>
        </Card>
      </div>

      <Card variant="outlined" className="p-4 max-w-md">
        <Typography variant="h6" className="mb-2 text-white">Dashboard Card</Typography>
        <Typography variant="body2" className="mb-3 text-gray-300">
          Cards maintain readability and visual hierarchy in dark environments.
        </Typography>
        <div className="flex gap-2">
          <Badge variant="primary" size="small">Active</Badge>
          <Badge variant="success" size="small">Online</Badge>
        </div>
      </Card>
    </div>
  ),
};