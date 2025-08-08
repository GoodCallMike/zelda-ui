import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card, Input, Typography } from 'zelda-ui-core';

const meta: Meta<typeof Typography> = {
  title: 'General/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Typography component provides consistent text styling with semantic variants and theme-aware colors.

\`\`\`tsx
import { Typography } from 'zelda-ui-core';

// Primary usage pattern
<Typography>Welcome to our platform</Typography>

// Key variant
<Typography variant="h1" color="primary">Dashboard Overview</Typography>
\`\`\`

## Variants
- **h1-h6** - Semantic headings with proper hierarchy (larger, bolder)
- **body** - Standard paragraph text (default)
- **body2** - Smaller body text for secondary content
- **caption** - Smaller descriptive text (metadata, timestamps)
- **label** - Form labels and UI text (medium weight)

## Colors
- **primary** - Primary brand color (golden yellow)
- **secondary** - Secondary theme color (blue)
- **success** - Success states (green)
- **danger** - Error and destructive actions (red)
- **muted** - Secondary text (gray)

## Accessibility & Testing
- Uses semantic HTML elements (h1-h6, p)
- Maintains WCAG AA contrast ratios in all themes
- Supports screen readers with proper heading hierarchy

\`\`\`tsx
// Testing approach
const heading = screen.getByRole('heading', { level: 1 });
expect(heading).toHaveTextContent('Dashboard Overview');
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body',
        'body2',
        'caption',
        'label',
      ],
      description: 'Semantic variant for text hierarchy and styling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'body' },
      },
    },
    color: {
      control: 'select',
      options: [
        'default',
        'muted',
        'primary',
        'secondary',
        'success',
        'danger',
      ],
      description: 'Theme-aware color variants',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
    },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Welcome to our platform',
    testId: 'welcome-text',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <Typography variant="h1" testId="heading-1">
          Heading 1 - Page Title
        </Typography>
        <Typography variant="h2" testId="heading-2">
          Heading 2 - Section Title
        </Typography>
        <Typography variant="h3" testId="heading-3">
          Heading 3 - Subsection
        </Typography>
        <Typography variant="h4" testId="heading-4">
          Heading 4 - Sub-subsection
        </Typography>
        <Typography variant="h5" testId="heading-5">
          Heading 5 - Minor heading
        </Typography>
        <Typography variant="h6" testId="heading-6">
          Heading 6 - Smallest heading
        </Typography>
      </div>
      <div className="space-y-2">
        <Typography variant="body" testId="body-text">
          Body text for paragraphs and content
        </Typography>
        <Typography variant="body2" testId="body2-text">
          Body 2 - Smaller body text
        </Typography>
        <Typography variant="caption" testId="caption-text">
          Caption text for metadata
        </Typography>
        <Typography variant="label" testId="label-text">
          Label text for forms
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete range of typography variants showing text hierarchy.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl p-6">
      <div className="space-y-4">
        <Typography variant="h1" color="primary" testId="dashboard-title">
          Dashboard Overview
        </Typography>
        <Typography variant="body" testId="dashboard-description">
          Monitor your application performance, user engagement, and system
          health from this central hub.
        </Typography>
      </div>

      <Card>
        <Typography variant="h2" className="mb-4" testId="form-title">
          Account Settings
        </Typography>
        <div className="space-y-4">
          <div>
            <Typography
              variant="label"
              className="block mb-2"
              testId="email-label"
            >
              Email Address
            </Typography>
            <Input placeholder="Enter your email" testId="email-input" />
            <Typography variant="caption" color="muted" testId="email-help">
              We'll never share your email with third parties
            </Typography>
          </div>
          <div className="flex gap-2 pt-4">
            <Button variant="primary" testId="save-button">
              Save Changes
            </Button>
            <Button variant="default" testId="cancel-button">
              Cancel
            </Button>
          </div>
        </div>
      </Card>

      <div className="p-4 bg-ganon-50 dark:bg-ganon-900/20 border-ganon-200 dark:border-ganon-600 border rounded">
        <Typography
          variant="h3"
          color="danger"
          className="mb-2"
          testId="error-title"
        >
          Action Required
        </Typography>
        <Typography variant="body" color="danger" testId="error-message">
          Your subscription expires in 3 days. Please update your payment method
          to continue using our services.
        </Typography>
        <Typography
          variant="caption"
          color="danger"
          className="mt-2 block"
          testId="error-details"
        >
          Last payment failed on December 15, 2024
        </Typography>
      </div>

      <div className="p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded">
        <Typography
          variant="h3"
          color="success"
          className="mb-2"
          testId="success-title"
        >
          Deployment Successful
        </Typography>
        <Typography variant="body" color="success" testId="success-message">
          Your application has been successfully deployed to production
          environment.
        </Typography>
        <Typography
          variant="caption"
          color="success"
          className="mt-2 block"
          testId="success-details"
        >
          Build #1247 completed in 2m 34s
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Typography integrated with other components in realistic interface scenarios.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <Typography variant="h3" testId="colors-title">
          Color Variants
        </Typography>
        <Typography color="primary" testId="primary-text">
          Primary - Brand color (golden yellow)
        </Typography>
        <Typography color="secondary" testId="secondary-text">
          Secondary - Theme color (blue)
        </Typography>
        <Typography color="success" testId="success-text">
          Success - Positive actions (green)
        </Typography>
        <Typography color="danger" testId="danger-text">
          Danger - Errors and warnings (red)
        </Typography>
        <Typography color="muted" testId="muted-text">
          Muted - Secondary information
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typography color variants for different semantic meanings.',
      },
    },
  },
};
