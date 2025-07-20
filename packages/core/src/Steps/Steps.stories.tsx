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
        component: `Steps component for displaying progress through a sequence of steps.

## Usage

\`\`\`tsx
import { Steps } from '@jetstream/core';

<Steps current={1}>
  <Steps.Step title="Step 1" description="Description" />
  <Steps.Step title="Step 2" description="Description" />
  <Steps.Step title="Step 3" description="Description" />
</Steps>
\`\`\`

## Advanced Usage

### Dynamic Steps
\`\`\`tsx
const [steps, setSteps] = useState([
  { title: 'Step 1', description: 'First step' },
  { title: 'Step 2', description: 'Second step' }
]);

// Add step dynamically
const addStep = () => {
  setSteps([...steps, { title: 'New Step', description: 'Added step' }]);
};
\`\`\`

### Custom Status Management
\`\`\`tsx
<Steps current={2} status="error">
  <Steps.Step title="Completed" status="finish" />
  <Steps.Step title="Failed" status="error" />
  <Steps.Step title="Pending" status="wait" />
</Steps>
\`\`\`

## Features

- **Horizontal/Vertical** - Support for both orientations
- **Status indicators** - Wait, process, finish, error states
- **Custom icons** - Support for custom step icons
- **Sizes** - Default and small sizes
- **Interactive** - Can be controlled programmatically
- **Accessible** - Full keyboard navigation and screen reader support

## Accessibility

### Keyboard Navigation
- **Tab** - Navigate between interactive steps
- **Enter/Space** - Activate clickable steps
- **Arrow Keys** - Navigate between steps (when interactive)

### Screen Reader Support
- Each step announces its status and position
- Progress information is communicated clearly
- Error states are properly announced

### ARIA Attributes
- \`role="progressbar"\` for the container
- \`aria-current="step"\` for the active step
- \`aria-label\` for step descriptions
- \`aria-describedby\` for additional context

### Best Practices
- Always provide meaningful step titles
- Include descriptions for complex processes
- Use appropriate status indicators
- Ensure sufficient color contrast
- Test with screen readers`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: 'number',
      description: 'Current step index',
    },
    status: {
      control: 'select',
      options: ['wait', 'process', 'finish', 'error'],
      description: 'Current step status',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of steps',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Size of steps',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    current: 2,
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Step title="Finished" description="This is a description." />
      <Steps.Step title="In Progress" description="This is a description." />
      <Steps.Step title="Waiting" description="This is a description." />
    </Steps>
  ),
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
};

export const Vertical: Story = {
  args: {
    current: 1,
    direction: 'vertical',
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Step title="Finished" description="This is a description." />
      <Steps.Step title="In Progress" description="This is a description." />
      <Steps.Step title="Waiting" description="This is a description." />
    </Steps>
  ),
};

export const Small: Story = {
  args: {
    current: 1,
    size: 'small',
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Step title="Finished" />
      <Steps.Step title="In Progress" />
      <Steps.Step title="Waiting" />
    </Steps>
  ),
};

export const WithError: Story = {
  args: {
    current: 1,
    status: 'error',
  },
  render: (args) => (
    <Steps {...args}>
      <Steps.Step title="Finished" description="This is a description." />
      <Steps.Step title="Error" description="Something went wrong." />
      <Steps.Step title="Waiting" description="This is a description." />
    </Steps>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [current, setCurrent] = useState(0);
    
    const steps = [
      { title: 'First', description: 'First step description' },
      { title: 'Second', description: 'Second step description' },
      { title: 'Last', description: 'Last step description' },
    ];
    
    return (
      <div className="space-y-6">
        <Steps current={current}>
          {steps.map((step, index) => (
            <Steps.Step key={index} title={step.title} description={step.description} />
          ))}
        </Steps>
        
        <div className="flex gap-2">
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrent(Math.min(steps.length - 1, current + 1))}
            disabled={current === steps.length - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Horizontal (Default)</h3>
        <Steps current={1}>
          <Steps.Step title="Step 1" description="Description" />
          <Steps.Step title="Step 2" description="Description" />
          <Steps.Step title="Step 3" description="Description" />
        </Steps>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Vertical</h3>
        <Steps current={1} direction="vertical">
          <Steps.Step title="Step 1" description="Description" />
          <Steps.Step title="Step 2" description="Description" />
          <Steps.Step title="Step 3" description="Description" />
        </Steps>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Small Size</h3>
        <Steps current={1} size="small">
          <Steps.Step title="Step 1" />
          <Steps.Step title="Step 2" />
          <Steps.Step title="Step 3" />
        </Steps>
      </div>
    </div>
  ),
};