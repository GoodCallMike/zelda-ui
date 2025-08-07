import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@zelda/core';
import { HeartIcon, ShieldTickIcon } from '@zelda/icons';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Prominent messages that communicate important information and require user attention.

\`\`\`tsx
import { Alert } from '@zelda/core';

// Essential feedback
<Alert message="Operation completed successfully" type="success" />

// Detailed information
<Alert 
  message="Upload failed"
  description="Unable to upload file. Check your connection and try again."
  type="error"
  closable
/>
\`\`\`

## Types
- **success** - Positive outcomes and confirmations
- **info** - Neutral information and updates
- **warning** - Cautions that need attention
- **error** - Problems requiring immediate action

## Accessibility & Testing
- Uses semantic \`role="alert"\` for immediate screen reader announcement
- Close button accessible via keyboard (Tab + Enter/Space)
- Automatically focuses when dynamically added

> **Your Responsibility**: Provide clear, actionable message text. This component handles ARIA announcements and keyboard navigation.

\`\`\`tsx
// Testing approach
const alert = screen.getByRole('alert');
expect(alert).toHaveTextContent('Operation completed');
fireEvent.click(screen.getByRole('button', { name: /close/i }));
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
      description: 'Alert semantic type and visual style',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    message: {
      control: 'text',
      description: 'Primary alert message',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Optional detailed description',
      table: {
        type: { summary: 'string' },
      },
    },
    closable: {
      control: 'boolean',
      description: 'Enable dismiss functionality',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Display type-specific icon',
      table: {
        type: { summary: 'boolean' },
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
    icon: { table: { disable: true } },
    closeText: { table: { disable: true } },
    onClose: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Changes saved successfully',
    type: 'success',
    description: 'Your changes have been saved and are now live',
    closable: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert message="Operation completed successfully" type="success" />
      <Alert message="New feature available" type="info" />
      <Alert message="Storage space running low" type="warning" />
      <Alert message="Connection failed" type="error" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All alert types showing semantic meaning and visual hierarchy.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <Alert
          message="Profile updated successfully"
          description="Your profile changes have been saved and are now visible."
          type="success"
          closable
        />
        <Alert
          message="New update available"
          description="Version 2.1.0 includes bug fixes and new features."
          type="info"
        />
        <Alert
          message="Storage limit reached"
          description="You're using 95% of your storage. Consider upgrading your plan."
          type="warning"
          closable
        />
        <Alert
          message="Upload failed"
          description="Unable to upload file. Check your connection and try again."
          type="error"
          closable
        />
      </div>

      <div className="space-y-4">
        <Alert
          message="Backup completed"
          description="Your data has been successfully backed up."
          type="success"
          icon={<HeartIcon className="w-4 h-4" />}
        />
        <Alert
          message="Security enabled"
          type="info"
          icon={<ShieldTickIcon className="w-4 h-4" />}
          showIcon={true}
        />
        <Alert
          message="System maintenance"
          description="This alert has no icon."
          type="warning"
          showIcon={false}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Practical examples showing descriptions, dismissible alerts, and custom icons.',
      },
    },
  },
};
