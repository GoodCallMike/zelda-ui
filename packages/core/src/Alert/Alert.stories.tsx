import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Typography } from '@zelda/core';
import { HeartIcon, ShieldTickIcon } from '@zelda/icons';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Display important messages and notifications with adventure-themed styling.

\`\`\`tsx
import { Alert } from '@zelda/core';

// Basic usage
<Alert message="Quest completed successfully!" type="success" />

// With description
<Alert 
  message="New item discovered"
  description="You found a Master Sword in the treasure chest."
  type="info"
  closable
/>
\`\`\`

## Types
- **success** - Positive feedback (Rupee Green)
- **info** - Informational messages (Hyrule Blue)  
- **warning** - Caution messages (Triforce Gold/Purple)
- **error** - Error messages (Ganon Red)

## Accessibility
- Uses semantic \`role="alert"\` for screen readers
- Keyboard accessible close button
- Proper ARIA labels for interactive elements`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'Main alert message',
    },
    description: {
      control: 'text',
      description: 'Optional detailed description',
    },
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
      description: 'Alert type and visual style',
    },
    closable: {
      control: 'boolean',
      description: 'Whether alert can be dismissed',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show type icon',
    },
    icon: {
      control: false,
      description: 'Custom icon component',
    },
    closeText: {
      control: false,
      description: 'Custom close button content',
    },
    onClose: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Quest completed successfully!',
    type: 'success',
    testId: 'quest-alert',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert
        message="Quest completed successfully!"
        type="success"
        testId="success-alert"
      />
      <Alert
        message="New area discovered in Hyrule"
        type="info"
        testId="info-alert"
      />
      <Alert
        message="Low health - find a fairy fountain"
        type="warning"
        testId="warning-alert"
      />
      <Alert
        message="Game over - you have been defeated"
        type="error"
        testId="error-alert"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All alert types showing different semantic meanings and visual styles.',
      },
    },
  },
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert
        message="Master Sword obtained!"
        description="The legendary blade that seals the darkness. Your attack power has increased significantly."
        type="success"
        testId="sword-alert"
      />
      <Alert
        message="New quest available"
        description="Princess Zelda needs your help to collect the three sacred stones before Ganon awakens."
        type="info"
        testId="quest-alert"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with detailed descriptions for more context.',
      },
    },
  },
};

export const Closable: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert
        message="Inventory full"
        description="You cannot carry any more items. Consider selling or dropping some items."
        type="warning"
        closable
        testId="inventory-alert"
      />
      <Alert
        message="Connection lost"
        description="Unable to save game progress. Check your internet connection."
        type="error"
        closable
        closeText="Dismiss"
        testId="connection-alert"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dismissible alerts with close functionality.',
      },
    },
  },
};

export const CustomIcon: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert
        message="Heart container found!"
        description="Your maximum health has increased."
        type="success"
        icon={<HeartIcon className="w-4 h-4" />}
        testId="heart-alert"
      />
      <Alert
        message="Shield equipped"
        description="You are now protected from enemy attacks."
        type="info"
        icon={<ShieldTickIcon className="w-4 h-4" />}
        testId="shield-alert"
      />
      <Alert
        message="No icon alert"
        description="This alert doesn't show any icon."
        type="warning"
        showIcon={false}
        testId="no-icon-alert"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts with custom icons or no icons.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <div className="space-y-3">
        <Typography variant="h3">Game Interface</Typography>
        <div className="space-y-3">
          <Alert
            message="Save complete"
            description="Your progress has been saved to slot 1."
            type="success"
            closable
            testId="save-complete"
          />
          <Alert
            message="New update available"
            description="Version 2.1.0 includes bug fixes and new content."
            type="info"
            testId="update-available"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Typography variant="h3">Form Validation</Typography>
        <div className="space-y-3">
          <Alert
            message="Character name too short"
            description="Character names must be at least 3 characters long."
            type="warning"
            testId="name-validation"
          />
          <Alert
            message="Failed to create character"
            description="Server error occurred. Please try again later."
            type="error"
            closable
            testId="create-error"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples in game interfaces and forms.',
      },
    },
  },
};
