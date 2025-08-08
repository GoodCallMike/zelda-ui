import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button, Card, Checkbox, Typography } from 'zelda-ui-core';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Checkbox component provides multi-choice selection with comprehensive accessibility support.

\`\`\`tsx
import { Checkbox } from 'zelda-ui-core';

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
    },
    className: { table: { disable: true } },
    onChange: { table: { disable: true } },
    label: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    testId: 'terms-checkbox',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="space-y-3">
        <Checkbox label="Default unchecked" testId="variant-default" />
        <Checkbox
          label="Default checked"
          defaultChecked
          testId="variant-checked"
        />
        <Checkbox
          label="Error state"
          error="This field is required"
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

export const Examples: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      notifications: true,
      newsletter: false,
      analytics: false,
      terms: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = () => {
      const newErrors: Record<string, string> = {};
      if (!preferences.terms) {
        newErrors.terms = 'You must accept the terms to continue';
      }
      setErrors(newErrors);
    };

    return (
      <div className="space-y-8 max-w-2xl p-6">
        <div className="space-y-4">
          <Typography variant="h1" color="primary" testId="settings-title">
            Account Preferences
          </Typography>
          <Typography variant="body" testId="settings-description">
            Customize your account settings and notification preferences.
          </Typography>
        </div>

        <Card>
          <Typography variant="h2" className="mb-4" testId="form-title">
            Notification Settings
          </Typography>
          <div className="space-y-4">
            <div>
              <Typography
                variant="label"
                className="block mb-3"
                testId="notifications-label"
              >
                Email Preferences
              </Typography>
              <div className="space-y-3">
                <Checkbox
                  label="Push notifications"
                  checked={preferences.notifications}
                  onChange={(checked) =>
                    setPreferences((prev) => ({
                      ...prev,
                      notifications: checked,
                    }))
                  }
                  testId="notifications-checkbox"
                />
                <Checkbox
                  label="Weekly newsletter"
                  checked={preferences.newsletter}
                  onChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, newsletter: checked }))
                  }
                  testId="newsletter-checkbox"
                />
                <Checkbox
                  label="Usage analytics"
                  checked={preferences.analytics}
                  onChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, analytics: checked }))
                  }
                  testId="analytics-checkbox"
                />
              </div>
            </div>

            <div className="pt-4 border-t">
              <Checkbox
                label="I accept the terms of service and privacy policy"
                checked={preferences.terms}
                onChange={(checked) => {
                  setPreferences((prev) => ({ ...prev, terms: checked }));
                  if (checked && errors.terms) {
                    setErrors((prev) => ({ ...prev, terms: '' }));
                  }
                }}
                error={errors.terms}
                testId="terms-checkbox"
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                variant="primary"
                onClick={handleSubmit}
                testId="save-button"
              >
                Save Preferences
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
            Settings Saved
          </Typography>
          <Typography variant="body" color="success" testId="success-message">
            Your preferences have been successfully updated and will take effect
            immediately.
          </Typography>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Checkbox components integrated with other components in realistic form scenarios.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-6 p-4">
      <div className="space-y-4">
        <Typography variant="h3" testId="states-title">
          Interactive States
        </Typography>
        <div className="space-y-3">
          <Checkbox label="Normal state" testId="normal-checkbox" />
          <Checkbox
            label="Checked state"
            defaultChecked
            testId="checked-checkbox"
          />
          <Checkbox
            label="Disabled state"
            disabled
            testId="disabled-checkbox"
          />
          <Checkbox
            label="Disabled checked"
            disabled
            defaultChecked
            testId="disabled-checked-checkbox"
          />
          <Checkbox
            label="Error state"
            error="This field is required"
            testId="error-checkbox"
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
            <strong>Try this:</strong> Use Tab to navigate between checkboxes,
            Space or Enter to toggle them.
          </Typography>
          <div className="space-y-2">
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
          </div>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox states and keyboard navigation demonstration.',
      },
    },
  },
};
