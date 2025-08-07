import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card, Input, Typography } from '@zelda/core';
import { EyeIcon, Mail01Icon, SearchLgIcon, User01Icon } from '@zelda/icons';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Data Entry/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Input component provides versatile text input functionality with comprehensive accessibility support.

\`\`\`tsx
import { Input } from '@zelda/core';

// Primary usage pattern
<Input placeholder="Enter text..." />

// Key variant
<Input variant="filled" label="Full Name" />
\`\`\`

## Variants
- **default** - Standard border styling (most common)
- **filled** - Background filled styling for forms
- **borderless** - Clean minimal styling for search/filters

## Sizes
- **small** - Compact inputs for dense layouts
- **medium** - Standard size for most use cases (default)
- **large** - Prominent inputs for key actions

## Features
- **Clear Button** - Optional clear functionality with allowClear
- **Character Count** - Live character counting with showCount
- **Prefix/Suffix** - Icons and text inside input borders
- **Addons** - Connected elements outside input borders
- **Textarea Mode** - Multi-line text input with type="textarea"

## Accessibility & Testing
- Uses semantic HTML input elements with proper labeling
- Supports full keyboard navigation and screen readers
- Maintains WCAG AA contrast ratios in all themes
- Comprehensive testId support for automated testing

\`\`\`tsx
// Testing approach
const input = screen.getByTestId('email-input');
await user.type(input, 'user@example.com');
expect(input).toHaveValue('user@example.com');
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'password',
        'email',
        'search',
        'url',
        'tel',
        'number',
        'textarea',
      ],
      description: 'Input type - use "textarea" for multiline input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'filled', 'borderless'],
      description: 'Visual variant of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    status: {
      control: 'select',
      options: [undefined, 'error', 'warning'],
      description: 'Status state for validation feedback',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    allowClear: {
      control: 'boolean',
      description: 'Show clear button when input has value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count',
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
    placeholder: { table: { disable: true } },
    maxLength: { table: { disable: true } },
    addonBefore: { table: { disable: true } },
    addonAfter: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    testId: 'default-input',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="space-y-3">
        <Input
          variant="default"
          label="Default"
          placeholder="Standard border styling"
          testId="variant-default"
        />
        <Input
          variant="filled"
          label="Filled"
          placeholder="Background filled styling"
          testId="variant-filled"
        />
        <Input
          variant="borderless"
          label="Borderless"
          placeholder="Clean minimal styling"
          testId="variant-borderless"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Input variants showing different visual styles for various use cases.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      website: '',
      bio: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateField = (field: string, value: string) => {
      const newErrors = { ...errors };

      switch (field) {
        case 'email':
          if (value && !value.includes('@')) {
            newErrors.email = 'Please enter a valid email address';
          } else {
            delete newErrors.email;
          }
          break;
        case 'password':
          if (value.length > 0 && value.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
          } else {
            delete newErrors.password;
          }
          break;
      }

      setErrors(newErrors);
    };

    const handleSubmit = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.password) newErrors.password = 'Password is required';
      setErrors(newErrors);
    };

    return (
      <div className="space-y-8 max-w-2xl p-6">
        <div className="space-y-4">
          <Typography variant="h1" color="primary" testId="form-title">
            User Registration
          </Typography>
          <Typography variant="body" testId="form-description">
            Create your account with the information below.
          </Typography>
        </div>

        <Card>
          <Typography variant="h2" className="mb-4" testId="account-title">
            Account Information
          </Typography>
          <div className="space-y-4">
            <Input
              label="Full Name"
              prefix={<User01Icon className="w-4 h-4" />}
              placeholder="Enter your full name"
              testId="name-input"
            />

            <Input
              label="Email Address"
              type="email"
              prefix={<Mail01Icon className="w-4 h-4" />}
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => {
                const value = e.target.value;
                setFormData((prev) => ({ ...prev, email: value }));
                validateField('email', value);
              }}
              status={errors.email ? 'error' : undefined}
              testId="email-input"
            />
            {errors.email && (
              <Typography variant="caption" color="danger" testId="email-error">
                {errors.email}
              </Typography>
            )}

            <Input
              label="Password"
              type="password"
              prefix={<EyeIcon className="w-4 h-4" />}
              placeholder="Create a secure password"
              value={formData.password}
              onChange={(e) => {
                const value = e.target.value;
                setFormData((prev) => ({ ...prev, password: value }));
                validateField('password', value);
              }}
              status={errors.password ? 'error' : undefined}
              showCount
              maxLength={50}
              testId="password-input"
            />
            {errors.password && (
              <Typography
                variant="caption"
                color="danger"
                testId="password-error"
              >
                {errors.password}
              </Typography>
            )}

            <Input
              label="Website"
              addonBefore="https://"
              addonAfter=".com"
              placeholder="your-website"
              value={formData.website}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, website: e.target.value }))
              }
              testId="website-input"
            />

            <Input
              type="textarea"
              label="Bio"
              placeholder="Tell us about yourself..."
              rows={4}
              showCount
              maxLength={200}
              allowClear
              value={formData.bio}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, bio: e.target.value }))
              }
              testId="bio-input"
            />

            <div className="flex gap-2 pt-4">
              <Button
                variant="primary"
                onClick={handleSubmit}
                testId="submit-button"
              >
                Create Account
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
            Account Created Successfully
          </Typography>
          <Typography variant="body" color="success" testId="success-message">
            Welcome! Your account has been created and you can now access all
            features.
          </Typography>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Input components integrated with other components in realistic form scenarios.',
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
        <div className="space-y-3">
          <Input
            size="small"
            label="Small"
            placeholder="Small input"
            testId="small-input"
          />
          <Input
            size="medium"
            label="Medium"
            placeholder="Medium input (default)"
            testId="medium-input"
          />
          <Input
            size="large"
            label="Large"
            placeholder="Large input"
            testId="large-input"
          />
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="status-title">
          Status States
        </Typography>
        <div className="space-y-3">
          <Input
            label="Normal"
            placeholder="Normal state"
            testId="normal-input"
          />
          <Input
            label="Warning"
            status="warning"
            defaultValue="Warning value"
            testId="warning-input"
          />
          <Input
            label="Error"
            status="error"
            defaultValue="Invalid value"
            testId="error-input"
          />
          <Input
            label="Disabled"
            disabled
            placeholder="Disabled input"
            testId="disabled-input"
          />
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="features-title">
          Features
        </Typography>
        <Card>
          <Typography
            variant="body2"
            className="mb-3"
            testId="features-description"
          >
            <strong>Interactive Features:</strong> Try the clear button and
            character counting.
          </Typography>
          <div className="space-y-3">
            <Input
              label="With Clear Button"
              placeholder="Type something..."
              allowClear
              defaultValue="Clear me!"
              testId="clear-input"
            />
            <Input
              label="Character Count"
              placeholder="Max 50 characters"
              showCount
              maxLength={50}
              defaultValue="Count characters"
              testId="count-input"
            />
            <Input
              label="Search with Prefix"
              prefix={<SearchLgIcon className="w-4 h-4" />}
              placeholder="Search items..."
              allowClear
              testId="search-input"
            />
          </div>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Input sizes, status states, and interactive features demonstration.',
      },
    },
  },
};
