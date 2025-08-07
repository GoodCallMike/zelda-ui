import type { Meta, StoryObj } from '@storybook/react';
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
  Typography,
} from '@zelda/core';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Checkbox component provides multi-choice selection with Zelda-themed styling and comprehensive accessibility.

\`\`\`tsx
import { Checkbox } from '@zelda/core';

// Primary usage pattern
<Checkbox label="Accept terms" />

// Key variant
<Checkbox label="Enable notifications" defaultChecked />
\`\`\`

## States
- **default** - Unchecked state (empty checkbox)
- **checked** - Selected state (checkmark visible)
- **error** - Validation error (red styling)
- **disabled** - Non-interactive (grayed out)

## Accessibility & Testing
- Uses semantic checkbox input with proper labeling
- Supports Space/Enter activation and Tab navigation
- Maintains WCAG AA contrast ratios in all themes

\`\`\`tsx
// Testing approach
const checkbox = screen.getByTestId('terms-checkbox');
expect(checkbox).toBeEnabled();
await user.click(checkbox);
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Prevents user interaction',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'text',
      description: 'Error message to display',
      table: {
        type: { summary: 'string' },
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
    onChange: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <Checkbox label="Default unchecked" testId="variant-default" />
        <Checkbox
          label="Default checked"
          defaultChecked
          testId="variant-checked"
        />
        <Checkbox
          label="Error state"
          error="Validation error"
          testId="variant-error"
        />
        <Checkbox
          label="Disabled unchecked"
          disabled
          testId="variant-disabled"
        />
        <Checkbox
          label="Disabled checked"
          disabled
          defaultChecked
          testId="variant-disabled-checked"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All checkbox states showing default, checked, error, and disabled variations.',
      },
    },
  },
};

export const Accessibility: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <Typography variant="h3" className="mb-4">
        🔍 Accessibility Features
      </Typography>

      <div className="space-y-4">
        <Typography variant="h4">⌨️ Keyboard Navigation</Typography>
        <div className="space-y-3 p-4">
          <Alert
            type="info"
            message="Use Tab to navigate, Space to toggle
            checkboxes."
          />
          <Card variant="default">
            <Checkbox
              label="First checkbox (Tab order 1)"
              testId="keyboard-1"
            />
            <Checkbox
              label="Second checkbox (Tab order 2)"
              testId="keyboard-2"
            />
            <Checkbox
              label="Third checkbox (Tab order 3)"
              testId="keyboard-3"
            />
          </Card>
        </div>

        <div className="space-y-2">
          <Typography variant="h5">Keyboard Interactions</Typography>
          <Card className="p-0 pb-2">
            <div className="bg-gray-50 dark:bg-gray-600 rounded-t-lg mb-1">
              <div className="flex">
                <div className="text-left p-2 font-medium flex-1">Key</div>
                <div className="text-left p-2 font-medium flex-1">Action</div>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="p-2 flex-1">
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                    Space
                  </kbd>
                </div>
                <div className="p-2 flex-1">Toggles checkbox state</div>
              </div>
              <Divider variant="solid" className="bg-gray-50" />
              <div className="flex">
                <div className="p-2 flex-1">
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                    Enter
                  </kbd>
                </div>
                <div className="p-2 flex-1">Toggles checkbox state</div>
              </div>
              <Divider variant="solid" className="bg-gray-50" />
              <div className="flex">
                <div className="p-2 flex-1">
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                    Tab
                  </kbd>
                </div>
                <div className="p-2 flex-1">Moves focus to next element</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h4">🏷️ ARIA Implementation</Typography>
        <div className="space-y-3 p-4 border rounded">
          <Checkbox
            label="Required checkbox"
            required
            aria-describedby="help-text"
            testId="aria-example"
          />
          <Typography variant="body2" id="help-text" className="text-gray-600">
            This checkbox demonstrates proper ARIA labeling and description
          </Typography>
        </div>
      </div>

      <div className="p-3 text-gray-100 rounded text-sm font-mono">
        <pre className="p-4">{`// Testing approach
const checkbox = screen.getByTestId('terms-checkbox');
expect(checkbox).toBeEnabled();

await user.click(checkbox);
expect(checkbox).toBeChecked();

// Test keyboard activation
await user.keyboard(' ');
expect(checkbox).not.toBeChecked();`}</pre>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Comprehensive accessibility features including keyboard navigation, ARIA attributes, and testing patterns.',
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
      <div className="space-y-8 max-w-2xl m-4">
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
          <div className="p-3 bg-gray-50 dark:bg-gray-800 border rounded">
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
          <div className="p-3 bg-gray-50 dark:bg-gray-800 border rounded">
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
              error={errors.terms}
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
          <div className="p-3 bg-gray-50 dark:bg-gray-800 border rounded">
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
            error="Validation error message"
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

export const Examples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      {/* Settings Form */}
      <div className="p-6 border rounded-lg">
        <Typography variant="h3" className="mb-4">
          Game Settings
        </Typography>
        <div className="space-y-4">
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
            <Button variant="default">Reset to Default</Button>
          </div>
        </div>
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
      <div className="p-6 border rounded-lg">
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
            <Checkbox
              label="I accept the terms of service"
              error="Required field"
            />
          </div>
          <Button variant="primary" disabled>
            Begin Adventure
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Checkbox components integrated with other components in game settings, quest tracking, and agreement forms.',
      },
    },
  },
};
