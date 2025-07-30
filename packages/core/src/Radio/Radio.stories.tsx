import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Data Entry/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Radio component for single-selection from mutually exclusive options with comprehensive accessibility and testing support.

## Overview

The Radio component allows users to select one option from a set of mutually exclusive choices, providing clear single-selection functionality with visual feedback. It supports grouping, validation, descriptions, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Radio } from '@jetstream/core';
import { useState } from 'react';

// Basic radio group
const [selected, setSelected] = useState('medium');

<Radio
  name="size"
  value="small"
  label="Small"
  checked={selected === 'small'}
  onChange={(e) => setSelected(e.target.value)}
/>
<Radio
  name="size"
  value="medium"
  label="Medium"
  checked={selected === 'medium'}
  onChange={(e) => setSelected(e.target.value)}
/>

// With description
<Radio
  name="plan"
  value="pro"
  label="Pro Plan"
  description="Best for growing teams with advanced features"
  checked={plan === 'pro'}
  onChange={(e) => setPlan(e.target.value)}
/>
\`\`\`

## Radio Groups

### Basic Group
\`\`\`tsx
const [size, setSize] = useState('medium');
const sizes = ['small', 'medium', 'large'];

{sizes.map(sizeOption => (
  <Radio
    key={sizeOption}
    name="size"
    value={sizeOption}
    label={sizeOption}
    checked={size === sizeOption}
    onChange={(e) => setSize(e.target.value)}
  />
))}
\`\`\`

### With Descriptions
\`\`\`tsx
<Radio
  name="plan"
  value="basic"
  label="Basic Plan"
  description="Perfect for individuals getting started"
  checked={plan === 'basic'}
  onChange={handlePlanChange}
/>
\`\`\`

## Accessibility

The Radio component is fully accessible with:

- **Keyboard navigation**: Tab and Arrow keys for navigation within groups
- **ARIA attributes**: Proper labeling and radiogroup roles for screen readers
- **Focus management**: Arrow keys move focus within radio groups
- **Screen reader support**: Clear labeling and state communication
- **Error communication**: ARIA invalid states and descriptions

\`\`\`tsx
// Accessible radio group with proper ARIA
<div role="radiogroup" aria-labelledby="payment-label">
  <h3 id="payment-label">Payment Method</h3>
  <Radio
    name="payment"
    value="card"
    label="Credit Card"
    checked={payment === 'card'}
    onChange={handlePaymentChange}
  />
</div>
\`\`\`

## Testing

Built-in testing support with standard HTML attributes:

\`\`\`tsx
<Radio
  data-testid="size-small"
  name="size"
  value="small"
  label="Small"
  checked={size === 'small'}
  onChange={handleSizeChange}
/>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('size-small');
screen.getByRole('radio', { name: 'Small' });
\`\`\`

## Best Practices

### Do
- Group related radio buttons with the same name attribute
- Provide clear, descriptive labels for each option
- Use descriptions for additional context when needed
- Limit groups to 5-7 options for optimal usability
- Include \`data-testid\` for reliable testing

### Don't
- Use radio buttons for multiple selections (use checkboxes instead)
- Create radio groups with only one option
- Make labels too long or complex
- Forget to handle keyboard navigation properly`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for grouping radio buttons',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Value of the radio button',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio button is selected',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the radio button is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'size',
    value: 'medium',
    label: 'Medium',
  },
};

export const WithDescription: Story = {
  args: {
    name: 'plan',
    value: 'pro',
    label: 'Pro Plan',
    description: 'Best for growing teams with advanced features',
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">Radio Button States</h3>
        <div className="space-y-3">
          <Radio name="states" value="unselected" label="Unselected" />
          <Radio name="states" value="selected" label="Selected" checked readOnly />
          <Radio name="states" value="disabled" label="Disabled" disabled />
          <Radio name="states" value="disabled-selected" label="Disabled Selected" disabled checked readOnly />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual states of radio buttons including normal, selected, and disabled states.',
      },
    },
  },
};

export const WithError: Story = {
  args: {
    name: 'required',
    value: 'option',
    label: 'Required selection',
    errorMessage: 'Please select an option',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button with error state and validation message.',
      },
    },
  },
};

export const BasicGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('medium');
    const options = [
      { value: 'small', label: 'Small' },
      { value: 'medium', label: 'Medium' },
      { value: 'large', label: 'Large' },
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Choose a size:</h3>
        <div className="space-y-2">
          {options.map((option) => (
            <Radio
              key={option.value}
              name="size"
              value={option.value}
              label={option.label}
              checked={selected === option.value}
              onChange={(e) => setSelected(e.target.value)}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600">Selected: {selected}</p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic radio button group with controlled selection state.',
      },
    },
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const [plan, setPlan] = useState('pro');
    const plans = [
      { 
        value: 'basic', 
        label: 'Basic Plan', 
        description: 'Perfect for individuals getting started' 
      },
      { 
        value: 'pro', 
        label: 'Pro Plan', 
        description: 'Best for growing teams with advanced features' 
      },
      { 
        value: 'enterprise', 
        label: 'Enterprise Plan', 
        description: 'For large organizations with custom needs' 
      },
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Select your plan:</h3>
        <div className="space-y-3">
          {plans.map((planOption) => (
            <Radio
              key={planOption.value}
              name="plan"
              value={planOption.value}
              label={planOption.label}
              description={planOption.description}
              checked={plan === planOption.value}
              onChange={(e) => setPlan(e.target.value)}
            />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons with descriptive text to provide additional context for each option.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [deliverySpeed, setDeliverySpeed] = useState('standard');
    const [theme, setTheme] = useState('system');

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
          <div className="space-y-3">
            <Radio
              name="payment"
              value="card"
              label="Credit Card"
              description="Pay with Visa, Mastercard, or American Express"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Radio
              name="payment"
              value="paypal"
              label="PayPal"
              description="Pay securely with your PayPal account"
              checked={paymentMethod === 'paypal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Radio
              name="payment"
              value="bank"
              label="Bank Transfer"
              description="Direct transfer from your bank account"
              checked={paymentMethod === 'bank'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Delivery Speed</h3>
          <div className="space-y-3">
            <Radio
              name="delivery"
              value="standard"
              label="Standard Delivery (Free)"
              description="5-7 business days"
              checked={deliverySpeed === 'standard'}
              onChange={(e) => setDeliverySpeed(e.target.value)}
            />
            <Radio
              name="delivery"
              value="express"
              label="Express Delivery ($9.99)"
              description="2-3 business days"
              checked={deliverySpeed === 'express'}
              onChange={(e) => setDeliverySpeed(e.target.value)}
            />
            <Radio
              name="delivery"
              value="overnight"
              label="Overnight Delivery ($24.99)"
              description="Next business day"
              checked={deliverySpeed === 'overnight'}
              onChange={(e) => setDeliverySpeed(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Theme Preference</h3>
          <div className="space-y-3">
            <Radio
              name="theme"
              value="light"
              label="Light Mode"
              description="Clean, bright interface"
              checked={theme === 'light'}
              onChange={(e) => setTheme(e.target.value)}
            />
            <Radio
              name="theme"
              value="dark"
              label="Dark Mode"
              description="Easy on the eyes in low light"
              checked={theme === 'dark'}
              onChange={(e) => setTheme(e.target.value)}
            />
            <Radio
              name="theme"
              value="system"
              label="System Default"
              description="Match your device settings"
              checked={theme === 'system'}
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing radio buttons in common scenarios like payment selection, delivery options, and user preferences.',
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [priority, setPriority] = useState('medium');
    const [notification, setNotification] = useState('email');

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Task Priority</h3>
          <p className="text-sm text-gray-600 mb-4">Use arrow keys to navigate between options</p>
          <div className="space-y-2" role="radiogroup" aria-labelledby="priority-label">
            <Radio
              name="priority"
              value="low"
              label="Low Priority"
              description="Can be completed when time permits"
              checked={priority === 'low'}
              onChange={(e) => setPriority(e.target.value)}
              aria-describedby="priority-low-desc"
            />
            <Radio
              name="priority"
              value="medium"
              label="Medium Priority"
              description="Should be completed within a week"
              checked={priority === 'medium'}
              onChange={(e) => setPriority(e.target.value)}
              aria-describedby="priority-medium-desc"
            />
            <Radio
              name="priority"
              value="high"
              label="High Priority"
              description="Requires immediate attention"
              checked={priority === 'high'}
              onChange={(e) => setPriority(e.target.value)}
              aria-describedby="priority-high-desc"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Notification Method</h3>
          <div className="space-y-2" role="radiogroup" aria-labelledby="notification-label">
            <Radio
              name="notification"
              value="email"
              label="Email Notifications"
              checked={notification === 'email'}
              onChange={(e) => setNotification(e.target.value)}
              aria-label="Receive notifications via email"
            />
            <Radio
              name="notification"
              value="sms"
              label="SMS Notifications"
              checked={notification === 'sms'}
              onChange={(e) => setNotification(e.target.value)}
              aria-label="Receive notifications via SMS"
            />
            <Radio
              name="notification"
              value="push"
              label="Push Notifications"
              checked={notification === 'push'}
              onChange={(e) => setNotification(e.target.value)}
              aria-label="Receive push notifications in browser"
            />
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p><strong>Accessibility Features:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Keyboard navigation with Tab and Arrow keys</li>
            <li>ARIA labels and descriptions for screen readers</li>
            <li>Proper radiogroup roles for semantic grouping</li>
            <li>Focus management within groups</li>
            <li>Clear error state communication</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including keyboard navigation, ARIA support, and proper semantic markup for screen readers.',
      },
    },
  },
};