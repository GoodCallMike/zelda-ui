import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Typography } from '../Typography';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Checkbox component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Checkbox component provides multi-choice selection with authentic Zelda-inspired styling. It supports individual checkboxes and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Checkbox } from '@zelda/core';

// Basic usage
<Checkbox label="Accept terms" />

// With Hyrule theming
<Checkbox label="Collect all Triforce pieces" defaultChecked />
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
      description: 'Whether the checkbox has error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    label: 'Accept terms and conditions',
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    label: 'I agree to the terms',
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="dark p-6 bg-gray-900 rounded-lg">
        <Typography variant="h3" className="text-white mb-4">
          Dark Mode
        </Typography>
        <div className="space-y-4 text-white">
          <Checkbox label="Enable mystical powers" defaultChecked />
          <Checkbox label="Collect ancient artifacts" />
          <Checkbox label="Unlock secret dungeons" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Checkbox components automatically adapt to dark mode with mystical purple theming.',
      },
    },
  },
};

export const KeyboardNavigation: Story = {
  render: () => {
    const [announcement, setAnnouncement] = useState('');

    const announceNavigation = (message: string) => {
      setAnnouncement(message);
      setTimeout(() => setAnnouncement(''), 2000);
    };

    return (
      <div className="space-y-8 max-w-2xl">
        <div aria-live="polite" className="sr-only">
          {announcement}
        </div>

        <div className="p-4 border rounded-lg bg-green-50 border-green-200">
          <Typography variant="h4" className="mb-3 text-green-800">
            ⌨️ Keyboard Navigation Patterns
          </Typography>
          <Typography variant="body2" className="text-green-700">
            Use keyboard to navigate and interact with checkboxes.
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Tab Navigation Order</Typography>
          <div className="space-y-3">
            <Checkbox
              label="First Checkbox (Tab Order 1)"
              testId="tab-order-1"
              onFocus={() => announceNavigation('Focused on first checkbox')}
            />
            <Checkbox
              label="Second Checkbox (Tab Order 2)"
              testId="tab-order-2"
              onFocus={() => announceNavigation('Focused on second checkbox')}
            />
            <Checkbox
              label="Third Checkbox (Tab Order 3)"
              testId="tab-order-3"
              onFocus={() => announceNavigation('Focused on third checkbox')}
            />
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Space Key Activation</Typography>
          <div className="space-y-3">
            <Checkbox label="Press Space to toggle" testId="space-toggle" />
            <Typography variant="body2" className="text-gray-600">
              • Focus with Tab, toggle with Space key
            </Typography>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Keyboard Navigation Patterns

### Universal Shortcuts
- **Tab/Shift+Tab** - Navigate between checkboxes
- **Space** - Toggle checkbox state
- **Enter** - Activate checkbox (same as Space)

### Testing Examples
\`\`\`tsx
// Test keyboard navigation
test('Checkbox supports keyboard navigation', async () => {
  const user = userEvent.setup();
  render(<Checkbox label="Test" testId="keyboard-test" />);
  
  const checkbox = screen.getByTestId('keyboard-test');
  
  await user.tab();
  expect(checkbox).toHaveFocus();
  
  await user.keyboard(' ');
  expect(checkbox).toBeChecked();
});
\`\`\`
        `,
      },
    },
  },
};

export const ARIAAttributes: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      newsletter: false,
      notifications: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateField = (field: string, checked: boolean) => {
      const newErrors = { ...errors };
      if (field === 'terms' && !checked) {
        newErrors.terms = 'You must accept the terms to continue';
      } else {
        delete newErrors.terms;
      }
      setErrors(newErrors);
    };

    return (
      <div className="space-y-8 max-w-2xl">
        <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
          <Typography variant="h4" className="mb-3 text-blue-800">
            🏷️ ARIA Attributes Usage
          </Typography>
          <Typography variant="body2" className="text-blue-700">
            Demonstrates proper ARIA attribute implementation for checkboxes.
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">aria-describedby Implementation</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <Checkbox
              label="Enable notifications"
              checked={formData.notifications}
              onChange={(checked) =>
                setFormData((prev) => ({ ...prev, notifications: checked }))
              }
              aria-describedby="notifications-help"
              testId="notifications-checkbox"
            />
            <Typography
              variant="body2"
              id="notifications-help"
              className="text-gray-600 mt-1"
            >
              Receive updates about your quest progress and new adventures
            </Typography>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">
            aria-required for Required Fields
          </Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <Checkbox
              label="Accept Terms and Conditions *"
              checked={formData.terms}
              onChange={(checked) => {
                setFormData((prev) => ({ ...prev, terms: checked }));
                validateField('terms', checked);
              }}
              required
              aria-required="true"
              aria-describedby="terms-help"
              aria-invalid={errors.terms ? 'true' : 'false'}
              error={!!errors.terms}
              testId="terms-required"
            />
            <Typography
              variant="body2"
              id="terms-help"
              className="text-gray-600 mt-1"
            >
              Required to begin your adventure
            </Typography>
            {errors.terms && (
              <Typography
                variant="body2"
                className="text-red-600 mt-1"
                role="alert"
              >
                {errors.terms}
              </Typography>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">
            aria-label for Additional Context
          </Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <Checkbox
              label="Newsletter"
              checked={formData.newsletter}
              onChange={(checked) =>
                setFormData((prev) => ({ ...prev, newsletter: checked }))
              }
              aria-label="Subscribe to weekly adventure newsletter with tips and updates"
              testId="newsletter-context"
            />
            <Typography variant="body2" className="text-gray-600 mt-1">
              aria-label provides additional context beyond the visible label
            </Typography>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## ARIA Attributes Implementation

### Essential ARIA Attributes
- **aria-describedby** - Links checkboxes to help text
- **aria-required** - Indicates required checkboxes
- **aria-invalid** - Communicates validation state
- **aria-label** - Provides additional context
- **role="alert"** - Announces validation errors

### Testing Examples
\`\`\`tsx
// Test ARIA attributes
test('Checkbox has proper ARIA attributes', () => {
  render(
    <Checkbox 
      label="Required" 
      required 
      aria-describedby="help-text"
      testId="aria-checkbox"
    />
  );
  
  const checkbox = screen.getByTestId('aria-checkbox');
  expect(checkbox).toHaveAttribute('aria-required', 'true');
  expect(checkbox).toHaveAttribute('aria-describedby', 'help-text');
});
\`\`\`
        `,
      },
    },
  },
};

export const TestingExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-4 border rounded-lg bg-purple-50 border-purple-200">
        <Typography variant="h4" className="mb-3 text-purple-800">
          🧪 Testing Examples
        </Typography>
        <Typography variant="body2" className="text-purple-700">
          Examples showing how to test Checkbox components with testId
          attributes.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Basic Checkbox Testing</Typography>
        <div className="space-y-3">
          <Checkbox testId="test-basic-checkbox" label="Basic Test Checkbox" />
          <Checkbox
            testId="test-checked-checkbox"
            label="Pre-checked Test Checkbox"
            defaultChecked
          />
          <Checkbox
            testId="test-disabled-checkbox"
            label="Disabled Test Checkbox"
            disabled
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Query checkboxes by testId
screen.getByTestId('test-basic-checkbox')
screen.getByTestId('test-checked-checkbox')
screen.getByTestId('test-disabled-checkbox')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">User Interaction Testing</Typography>
        <div className="space-y-3">
          <Checkbox
            testId="test-interaction-checkbox"
            label="Interaction Test Checkbox"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test checkbox interactions
const user = userEvent.setup()
const checkbox = screen.getByTestId('test-interaction-checkbox')

// Test clicking
await user.click(checkbox)
expect(checkbox).toBeChecked()

// Test keyboard activation
await user.keyboard(' ')
expect(checkbox).not.toBeChecked()`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Form Validation Testing</Typography>
        <div className="space-y-3">
          <Checkbox
            testId="test-validation-checkbox"
            label="Validation Test Checkbox"
            error
            aria-invalid="true"
          />
          <Typography variant="body2" className="text-red-600" role="alert">
            This checkbox has a validation error
          </Typography>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test validation state
const checkbox = screen.getByTestId('test-validation-checkbox')
expect(checkbox).toHaveAttribute('aria-invalid', 'true')

// Test error message
expect(screen.getByRole('alert')).toHaveTextContent('validation error')`}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Testing Examples with testId Attributes

### Basic Testing Patterns
\`\`\`tsx
// Query by testId
const checkbox = screen.getByTestId('test-checkbox');
expect(checkbox).toBeInTheDocument();

// Test checked state
expect(checkbox).toBeChecked();
expect(checkbox).not.toBeChecked();
\`\`\`

### User Interaction Testing
\`\`\`tsx
// Test user interactions
const user = userEvent.setup();
const checkbox = screen.getByTestId('interaction-checkbox');

await user.click(checkbox);
expect(checkbox).toBeChecked();

// Test keyboard activation
await user.keyboard(' ');
expect(checkbox).not.toBeChecked();
\`\`\`

### Accessibility Testing
\`\`\`tsx
// Test label association
const checkbox = screen.getByLabelText('Accept Terms');
expect(checkbox).toBeInTheDocument();

// Test ARIA attributes
expect(checkbox).toHaveAttribute('aria-required', 'true');
\`\`\`
        `,
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      {/* Settings Form */}
      <div className="p-6 border rounded-lg">
        <Typography variant="h3" className="mb-4">
          Game Settings
        </Typography>
        <form className="space-y-4">
          <Input label="Player Name" placeholder="Enter your hero name" />
          <div>
            <Typography variant="label" className="block mb-2">
              Audio Options:
            </Typography>
            <div className="space-y-2">
              <Checkbox label="Enable background music" defaultChecked />
              <Checkbox label="Enable sound effects" defaultChecked />
              <Checkbox label="Enable voice acting" />
            </div>
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Gameplay Features:
            </Typography>
            <div className="space-y-2">
              <Checkbox label="Show damage numbers" />
              <Checkbox label="Auto-save progress" defaultChecked />
              <Checkbox label="Skip cutscenes" />
              <Checkbox label="Enable hard mode" />
            </div>
          </div>
          <div className="flex gap-2 pt-4">
            <Button variant="primary">Save Settings</Button>
            <Button variant="secondary">Reset to Default</Button>
          </div>
        </form>
      </div>

      {/* Quest Checklist */}
      <div className="p-6 border rounded-lg">
        <Typography variant="h3" className="mb-4">
          Quest Progress
        </Typography>
        <div className="space-y-3">
          <Typography variant="label" className="block mb-2">
            Main Quests:
          </Typography>
          <div className="space-y-2">
            <Checkbox label="Rescue Princess Zelda" defaultChecked />
            <Checkbox label="Collect Master Sword" defaultChecked />
            <Checkbox label="Defeat Ganon" />
          </div>
          <Typography variant="label" className="block mb-2 mt-4">
            Side Quests:
          </Typography>
          <div className="space-y-2">
            <Checkbox label="Find all Korok Seeds" />
            <Checkbox label="Complete all Shrines" />
            <Checkbox label="Upgrade all armor" />
            <Checkbox label="Collect all memories" defaultChecked />
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="p-6 border rounded-lg bg-gray-50">
        <Typography variant="h3" className="mb-4">
          Adventure Agreement
        </Typography>
        <div className="space-y-4">
          <Typography variant="body">
            Before beginning your quest, please review and accept the following:
          </Typography>
          <div className="space-y-3">
            <Checkbox label="I understand that this adventure may be dangerous" />
            <Checkbox label="I agree to help NPCs in need" />
            <Checkbox label="I will not use cheats or exploits" />
            <Checkbox label="I accept the terms of service" error />
          </div>
          <Button variant="primary" disabled>
            Begin Adventure
          </Button>
        </div>
      </div>

      {/* Dark Mode Complex Examples */}
      <div className="dark p-6 bg-gray-900 rounded-lg space-y-6">
        <Typography variant="h2">🌙 Night Mode Interface</Typography>

        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">⚔️ Combat Preferences</Typography>
          <div className="space-y-2">
            <Checkbox label="Auto-target enemies" defaultChecked />
            <Checkbox label="Show critical hit indicators" />
            <Checkbox label="Enable combo notifications" />
          </div>
        </div>

        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">🎒 Inventory Options</Typography>
          <div className="space-y-2">
            <Checkbox label="Auto-sort items" />
            <Checkbox label="Show item durability" defaultChecked />
            <Checkbox label="Quick-use consumables" defaultChecked />
          </div>
        </div>

        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">🗺️ Map Features</Typography>
          <div className="space-y-2">
            <Checkbox label="Show discovered locations" defaultChecked />
            <Checkbox label="Mark treasure chests" />
            <Checkbox label="Display fast travel points" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Real-world examples showing Checkbox components integrated with other Zelda UI components in settings forms, quest tracking, agreement flows, and complex dark mode interfaces.',
      },
    },
  },
};
