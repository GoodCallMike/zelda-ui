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
        component: `Radio buttons allow users to select one option from a set of mutually exclusive choices, providing clear single-selection functionality with visual feedback.

## Features
- **Single Selection**: Only one option can be selected at a time within a group
- **Visual States**: Clear indication of selected, unselected, and disabled states
- **Validation Support**: Error states with descriptive messages
- **Accessibility**: Full keyboard navigation and screen reader support
- **Flexible Content**: Labels, descriptions, and custom layouts

## When to Use
- **Exclusive Choices**: When users must select exactly one option from multiple alternatives
- **Settings**: Configuration options where only one value is valid
- **Forms**: Survey questions, preferences, or categorical selections
- **Filters**: Single-value filtering options

## Accessibility
- Keyboard navigation with Tab and Arrow keys
- ARIA attributes for proper screen reader support
- Focus management within radio groups
- Clear labeling and error state communication
- Proper grouping with fieldset and legend elements

## Best Practices
- Group related radio buttons with the same name attribute
- Provide clear, descriptive labels for each option
- Use descriptions for additional context when needed
- Limit groups to 5-7 options for optimal usability
- Always have one option selected by default when appropriate`,
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
          <Radio name="states" value="selected" label="Selected" checked />
          <Radio name="states" value="disabled" label="Disabled" disabled />
          <Radio name="states" value="disabled-selected" label="Disabled Selected" disabled checked />
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

export const RealWorldExamples: Story = {
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