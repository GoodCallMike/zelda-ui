import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Steps } from './Steps';
import { User01Icon, CurrencyDollarIcon, CheckIcon } from '@jetstream/icons';

const meta: Meta<typeof Steps> = {
  title: 'Navigation/Steps',
  component: Steps,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Steps component for displaying progress through a sequence with comprehensive accessibility and testing support.

## Overview

The Steps component provides visual progress indication through multi-step processes. It supports horizontal and vertical orientations, custom icons, status indicators, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Steps } from '@jetstream/core';

// Basic usage
<Steps current={1}>
  <Steps.Step title="Step 1" description="First step" />
  <Steps.Step title="Step 2" description="Second step" />
  <Steps.Step title="Step 3" description="Third step" />
</Steps>

// With options
<Steps current={1} direction="vertical" status="error">
  <Steps.Step title="Completed" icon={<CheckIcon />} />
  <Steps.Step title="Failed" status="error" />
</Steps>
\`\`\`

## Orientations

### Horizontal Layout
\`\`\`tsx
<Steps current={1} direction="horizontal">
  <Steps.Step title="Step 1" />
  <Steps.Step title="Step 2" />
</Steps>
\`\`\`

### Vertical Layout
\`\`\`tsx
<Steps current={1} direction="vertical">
  <Steps.Step title="Step 1" />
  <Steps.Step title="Step 2" />
</Steps>
\`\`\`

## Accessibility

The Steps component is fully accessible with:

- **Progress Indication**: ARIA progressbar with current step information
- **Screen Reader Support**: Each step announces status and position
- **Keyboard Navigation**: Tab navigation for interactive elements

\`\`\`tsx
// Accessibility example
<Steps 
  current={1}
  testId="checkout-steps"
  aria-label="Checkout process"
>
  <Steps.Step title="Cart" description="Review items" />
  <Steps.Step title="Payment" description="Enter payment info" />
</Steps>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Steps testId="process-steps" current={1}>
  <Steps.Step title="Step 1" />
  <Steps.Step title="Step 2" />
</Steps>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('process-steps');
screen.getByRole('progressbar');
screen.getByLabelText('Step 2 of 3');
\`\`\`

## Best Practices

### Do
- Provide clear, descriptive step titles
- Use descriptions for complex processes
- Indicate current progress visually and programmatically

### Don't
- Use too many steps (limit to 5-7 for usability)
- Skip status indicators for error states
- Rely solely on color to convey step status
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: 'number',
      description: 'Current step index',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    status: {
      control: 'select',
      options: ['wait', 'process', 'finish', 'error'],
      description: 'Current step status',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'process' },
      },
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of steps',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Size of steps',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    testId: {
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
    current: 1,
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Step title="Finished" description="This step is completed." />
      <Steps.Step title="In Progress" description="This step is currently active." />
      <Steps.Step title="Waiting" description="This step is pending." />
    </Steps>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic horizontal steps showing progress through a multi-step process.',
      },
    },
  },
};

export const Orientations: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Horizontal (Default)</h4>
        <Steps current={1}>
          <Steps.Step title="Step 1" description="First step" />
          <Steps.Step title="Step 2" description="Second step" />
          <Steps.Step title="Step 3" description="Third step" />
        </Steps>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Vertical</h4>
        <Steps current={1} direction="vertical">
          <Steps.Step title="Step 1" description="First step" />
          <Steps.Step title="Step 2" description="Second step" />
          <Steps.Step title="Step 3" description="Third step" />
        </Steps>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Steps can be displayed horizontally (default) or vertically.',
      },
    },
  },
};

export const WithIcons: Story = {
  args: {
    current: 1,
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Step 
        title="Login" 
        description="User authentication"
        icon={<User01Icon className="w-4 h-4" />}
      />
      <Steps.Step 
        title="Payment" 
        description="Payment information"
        icon={<CurrencyDollarIcon className="w-4 h-4" />}
      />
      <Steps.Step 
        title="Done" 
        description="Order completed"
        icon={<CheckIcon className="w-4 h-4" />}
      />
    </Steps>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Steps with custom icons for better visual representation.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Normal Progress</h4>
        <Steps current={1}>
          <Steps.Step title="Completed" description="This step is done" />
          <Steps.Step title="Current" description="This step is active" />
          <Steps.Step title="Pending" description="This step is waiting" />
        </Steps>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Error State</h4>
        <Steps current={1} status="error">
          <Steps.Step title="Completed" description="This step is done" />
          <Steps.Step title="Failed" description="Something went wrong" />
          <Steps.Step title="Pending" description="This step is waiting" />
        </Steps>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Small Size</h4>
        <Steps current={1} size="small">
          <Steps.Step title="Step 1" />
          <Steps.Step title="Step 2" />
          <Steps.Step title="Step 3" />
        </Steps>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different step states including normal progress, error states, and size variants.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [current, setCurrent] = useState(0);
    
    const checkoutSteps = [
      { title: 'Cart', description: 'Review your items', icon: <User01Icon className="w-4 h-4" /> },
      { title: 'Payment', description: 'Enter payment details', icon: <CurrencyDollarIcon className="w-4 h-4" /> },
      { title: 'Confirmation', description: 'Order complete', icon: <CheckIcon className="w-4 h-4" /> },
    ];
    
    return (
      <div className="space-y-8">
        <div>
          <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">E-commerce Checkout Process</h4>
          <Steps current={current}>
            {checkoutSteps.map((step, index) => (
              <Steps.Step 
                key={index}
                title={step.title} 
                description={step.description}
                icon={step.icon}
              />
            ))}
          </Steps>
          
          <div className="flex gap-2 mt-6">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrent(Math.min(checkoutSteps.length - 1, current + 1))}
              disabled={current === checkoutSteps.length - 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Vertical Form Wizard</h4>
          <div className="max-w-md">
            <Steps current={1} direction="vertical">
              <Steps.Step title="Personal Info" description="Name, email, phone" />
              <Steps.Step title="Address" description="Shipping and billing address" />
              <Steps.Step title="Review" description="Confirm your information" />
            </Steps>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing interactive checkout process and form wizard implementations.',
      },
    },
  },
};