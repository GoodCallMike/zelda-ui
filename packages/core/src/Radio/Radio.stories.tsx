import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  Card,
  Radio,
  RadioButton,
  RadioGroup,
  Typography,
} from '@zelda/core';
import { useState } from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Data Entry/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Radio component provides single-choice selection with comprehensive accessibility support.

\`\`\`tsx
import { Radio, RadioGroup } from '@zelda/core';

// Primary usage pattern
<Radio label="Option 1" value="option1" />

// Key variant
<RadioGroup defaultValue="option1">
  <Radio label="Option 1" value="option1" />
  <Radio label="Option 2" value="option2" />
</RadioGroup>
\`\`\`

## Components
- **Radio** - Individual radio button with label
- **RadioGroup** - Container for managing radio button groups
- **RadioButton** - Button-style radio for compact layouts

## Sizes
- **small** - Compact radio buttons for dense layouts
- **middle** - Standard size for most use cases (default)
- **large** - Prominent radio buttons for key selections

## Accessibility & Testing
- Uses semantic radio input elements with proper labeling
- Supports arrow key navigation within groups, Tab between groups
- Maintains WCAG AA contrast ratios in all themes
- Comprehensive testId support for automated testing

\`\`\`tsx
// Testing approach
const radio = screen.getByLabelText('Option 1');
expect(radio).not.toBeChecked();
await user.click(radio);
expect(radio).toBeChecked();
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Radio size variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'middle' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Whether the radio has error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
    },
    className: { table: { disable: true } },
    onChange: { table: { disable: true } },
    label: { table: { disable: true } },
    value: { table: { disable: true } },
    name: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select this option',
    value: 'option1',
    name: 'default-radio',
    testId: 'default-radio',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6 p-4">
      <div className="space-y-4">
        <Typography variant="h3" testId="radio-variants-title">
          Radio Variants
        </Typography>
        <div className="space-y-3">
          <Radio
            label="Default radio"
            value="default"
            name="variants"
            testId="variant-default"
          />
          <Radio
            label="Checked radio"
            value="checked"
            name="variants"
            defaultChecked
            testId="variant-checked"
          />
          <Radio
            label="Disabled radio"
            value="disabled"
            name="variants"
            disabled
            testId="variant-disabled"
          />
          <Radio
            label="Error radio"
            value="error"
            name="variants"
            error
            testId="variant-error"
          />
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="button-variants-title">
          Button Style Variants
        </Typography>
        <div className="space-y-3">
          <div className="flex">
            <RadioButton
              name="button-outline"
              value="option1"
              testId="button-outline-1"
            >
              Option 1
            </RadioButton>
            <RadioButton
              name="button-outline"
              value="option2"
              defaultChecked
              testId="button-outline-2"
            >
              Option 2
            </RadioButton>
            <RadioButton
              name="button-outline"
              value="option3"
              testId="button-outline-3"
            >
              Option 3
            </RadioButton>
          </div>
          <div className="flex">
            <RadioButton
              name="button-solid"
              value="solid1"
              buttonStyle="solid"
              testId="button-solid-1"
            >
              Solid 1
            </RadioButton>
            <RadioButton
              name="button-solid"
              value="solid2"
              buttonStyle="solid"
              defaultChecked
              testId="button-solid-2"
            >
              Solid 2
            </RadioButton>
            <RadioButton
              name="button-solid"
              value="solid3"
              buttonStyle="solid"
              testId="button-solid-3"
            >
              Solid 3
            </RadioButton>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Radio variants showing different styles including standard radios and button-style options.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      plan: 'standard',
      billing: 'monthly',
      support: 'email',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.plan) newErrors.plan = 'Please select a plan';
      if (!formData.billing)
        newErrors.billing = 'Please select billing frequency';
      setErrors(newErrors);
    };

    return (
      <div className="space-y-8 max-w-2xl p-6">
        <div className="space-y-4">
          <Typography variant="h1" color="primary" testId="subscription-title">
            Choose Your Plan
          </Typography>
          <Typography variant="body" testId="subscription-description">
            Select the plan that best fits your needs.
          </Typography>
        </div>

        <Card>
          <Typography
            variant="h2"
            className="mb-4"
            testId="plan-selection-title"
          >
            Plan Selection
          </Typography>
          <div className="space-y-6">
            <div>
              <Typography
                variant="label"
                className="block mb-3"
                testId="plan-label"
              >
                Choose Plan
              </Typography>
              <RadioGroup
                value={formData.plan}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, plan: value }))
                }
              >
                <Radio
                  label="Basic - $9/month - Essential features"
                  value="basic"
                  testId="plan-basic"
                />
                <Radio
                  label="Standard - $19/month - Most popular choice"
                  value="standard"
                  testId="plan-standard"
                />
                <Radio
                  label="Premium - $39/month - All features included"
                  value="premium"
                  testId="plan-premium"
                />
              </RadioGroup>
              {errors.plan && (
                <Typography
                  variant="caption"
                  color="danger"
                  testId="plan-error"
                >
                  {errors.plan}
                </Typography>
              )}
            </div>

            <div>
              <Typography
                variant="label"
                className="block mb-3"
                testId="billing-label"
              >
                Billing Frequency
              </Typography>
              <div className="flex">
                <RadioButton
                  name="billing"
                  value="monthly"
                  checked={formData.billing === 'monthly'}
                  onChange={() =>
                    setFormData((prev) => ({ ...prev, billing: 'monthly' }))
                  }
                  testId="billing-monthly"
                >
                  Monthly
                </RadioButton>
                <RadioButton
                  name="billing"
                  value="yearly"
                  checked={formData.billing === 'yearly'}
                  onChange={() =>
                    setFormData((prev) => ({ ...prev, billing: 'yearly' }))
                  }
                  testId="billing-yearly"
                >
                  Yearly (Save 20%)
                </RadioButton>
              </div>
            </div>

            <div>
              <Typography
                variant="label"
                className="block mb-3"
                testId="support-label"
              >
                Support Level
              </Typography>
              <RadioGroup
                value={formData.support}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, support: value }))
                }
              >
                <Radio
                  label="Email support"
                  value="email"
                  testId="support-email"
                />
                <Radio
                  label="Priority support"
                  value="priority"
                  testId="support-priority"
                />
                <Radio
                  label="Dedicated support"
                  value="dedicated"
                  testId="support-dedicated"
                />
              </RadioGroup>
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                variant="primary"
                onClick={handleSubmit}
                testId="subscribe-button"
              >
                Subscribe Now
              </Button>
              <Button variant="default" testId="cancel-button">
                Cancel
              </Button>
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
            Subscription Confirmed
          </Typography>
          <Typography variant="body" color="success" testId="success-message">
            Welcome! Your subscription has been activated and you now have
            access to all features.
          </Typography>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Radio components integrated with other components in realistic subscription form scenarios.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-6 p-4">
      <div className="space-y-4">
        <Typography variant="h3" testId="sizes-title">
          Sizes
        </Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="label" className="block mb-2">
              Small
            </Typography>
            <RadioGroup size="small" defaultValue="small2">
              <Radio label="Small option 1" value="small1" testId="small-1" />
              <Radio label="Small option 2" value="small2" testId="small-2" />
            </RadioGroup>
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Middle (Default)
            </Typography>
            <RadioGroup size="middle" defaultValue="middle2">
              <Radio
                label="Middle option 1"
                value="middle1"
                testId="middle-1"
              />
              <Radio
                label="Middle option 2"
                value="middle2"
                testId="middle-2"
              />
            </RadioGroup>
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Large
            </Typography>
            <RadioGroup size="large" defaultValue="large2">
              <Radio label="Large option 1" value="large1" testId="large-1" />
              <Radio label="Large option 2" value="large2" testId="large-2" />
            </RadioGroup>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="interactive-title">
          Interactive States
        </Typography>
        <div className="space-y-3">
          <Radio
            label="Normal state"
            value="normal"
            name="states"
            testId="normal-radio"
          />
          <Radio
            label="Checked state"
            value="checked"
            name="states"
            defaultChecked
            testId="checked-radio"
          />
          <Radio
            label="Disabled state"
            value="disabled"
            name="states"
            disabled
            testId="disabled-radio"
          />
          <Radio
            label="Error state"
            value="error"
            name="states"
            error
            testId="error-radio"
          />
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="keyboard-title">
          Keyboard Navigation
        </Typography>
        <Card>
          <Typography
            variant="body2"
            className="mb-3"
            testId="keyboard-instructions"
          >
            <strong>Try this:</strong> Use Tab to focus the group, then Arrow
            keys to navigate between options.
          </Typography>
          <RadioGroup defaultValue="option2">
            <Radio
              label="First option (Arrow key navigation)"
              value="option1"
              testId="keyboard-1"
            />
            <Radio
              label="Second option (Arrow key navigation)"
              value="option2"
              testId="keyboard-2"
            />
            <Radio
              label="Third option (Arrow key navigation)"
              value="option3"
              testId="keyboard-3"
            />
          </RadioGroup>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Radio sizes, interactive states, and keyboard navigation demonstration.',
      },
    },
  },
};
