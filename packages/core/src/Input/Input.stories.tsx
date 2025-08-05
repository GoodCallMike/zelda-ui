import type { Meta, StoryObj } from '@storybook/react';
import {
  CurrencyDollarIcon,
  EyeIcon,
  Mail01Icon,
  SearchLgIcon,
  User01Icon,
} from '@zelda/icons';
import { useState } from 'react';
import { Typography } from '../Typography';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Data Entry/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Input component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Input component provides versatile text input functionality with authentic Zelda-inspired styling. It supports multiple variants, sizes, addons, and advanced features like character counting and clear functionality while maintaining WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Input } from '@zelda/core';

// Basic usage
<Input placeholder="Enter text..." />

// With Hyrule theming
<Input label="Hero Name" variant="filled" placeholder="Link" />
\`\`\`

## Variants

### Default
\`\`\`tsx
<Input variant="default" placeholder="Classic border style" />
\`\`\`

### Filled
\`\`\`tsx
<Input variant="filled" placeholder="Filled background style" />
\`\`\`

### Borderless
\`\`\`tsx
<Input variant="borderless" placeholder="Clean, minimal style" />
\`\`\`

## Dark Mode

The Input component automatically adapts to dark mode with Hyrule's mystical night theme:

\`\`\`tsx
// Automatic dark mode support
<div className="dark">
  <Input variant="default" placeholder="Mystical input" />
  <Input variant="filled" placeholder="Shadow-filled input" />
</div>
\`\`\`

### Dark Mode Colors
- **Default**: Deep borders with ethereal glow on focus
- **Filled**: Shadow backgrounds with moonlight accents
- **Error/Warning**: Ganon red and Triforce gold with shadow effects

## Accessibility

The Input component is fully accessible with WCAG 2.1 AA compliance:

### Keyboard Navigation
- **Tab Navigation**: Navigate between inputs using Tab/Shift+Tab
- **Arrow Keys**: Navigate within input content and selections
- **Focus Management**: Clear visual focus indicators for keyboard users
- **Focus Order**: Logical tab order in form layouts

### Screen Reader Support
- **Semantic Elements**: Uses proper HTML input elements
- **Label Association**: Proper label-input relationships
- **State Announcements**: Error, warning, and validation states are announced
- **Character Count**: Live announcements for character counting
- **Clear Button**: Accessible clear functionality

### ARIA Attributes
- **aria-label**: Provides accessible names when labels aren't visible
- **aria-describedby**: Links to help text and error messages
- **aria-required**: Indicates required fields
- **aria-invalid**: Indicates validation state
- **role="alert"**: For error message announcements

### Visual Accessibility
- **High Contrast**: Supports high contrast mode
- **Color Independence**: Validation states use icons and text, not just color
- **Focus Indicators**: Clear focus rings for keyboard navigation
- **Text Scaling**: Readable at 200% zoom level

\`\`\`tsx
// Comprehensive accessibility example
<Input 
  label="Hero Name"
  aria-describedby="hero-help"
  aria-required="true"
  testId="hero-name"
/>
<div id="hero-help">Choose a unique name (3-20 characters)</div>
\`\`\`

## Testing

Built-in testing support with comprehensive \`testId\` props:

### Test Identifiers
\`\`\`tsx
<Input testId="hero-name-input" label="Hero Name" />
// Results in: data-testid="hero-name-input"
\`\`\`

### Testing Examples
\`\`\`tsx
// Query input
screen.getByTestId('hero-name-input');

// Test input value
fireEvent.change(screen.getByTestId('hero-name-input'), {
  target: { value: 'Link' }
});

// Test validation
expect(screen.getByTestId('hero-name-input')).toHaveAttribute('aria-invalid', 'false');

// Test required fields
expect(screen.getByTestId('hero-name-input')).toHaveAttribute('aria-required', 'true');
\`\`\`

### Accessibility Testing
\`\`\`tsx
// Test label association
const input = screen.getByLabelText('Hero Name');
expected(input).toBeInTheDocument();

// Test ARIA attributes
expected(input).toHaveAttribute('aria-describedby', 'hero-help');

// Test error states
expected(screen.getByRole('alert')).toHaveTextContent('Name is required');
\`\`\`

## Best Practices

### Do
- Use labels for better accessibility and UX
- Use appropriate input types (email, password, etc.)
- Provide clear placeholder text
- Include \`testId\` for reliable testing
- Use addons for contextual information

### Don't
- Use borderless variant without proper visual context
- Overcrowd with too many addons
- Use unclear or generic placeholder text
- Forget to handle form validation states`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
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
      control: { type: 'select' },
      options: ['default', 'filled', 'borderless'],
      description: 'Visual variant of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    status: {
      control: { type: 'select' },
      options: [undefined, 'error', 'warning'],
      description: 'Status state for validation feedback',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Input label text',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
      },
    },
    allowClear: {
      control: { type: 'boolean' },
      description: 'Show clear button when input has value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showCount: {
      control: { type: 'boolean' },
      description: 'Show character count',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Maximum character count',
      table: {
        type: { summary: 'number' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    addonBefore: {
      control: { type: 'text' },
      description: 'Addon before input (outside border)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    addonAfter: {
      control: { type: 'text' },
      description: 'Addon after input (outside border)',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    testId: {
      control: { type: 'text' },
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
    placeholder: 'Enter text...',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Enter text...',
  },
};

export const Borderless: Story = {
  args: {
    variant: 'borderless',
    placeholder: 'Enter text...',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small input',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large input',
  },
};

export const WithStatus: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        status="error"
        placeholder="Error state"
        defaultValue="Invalid value"
      />
      <Input
        status="warning"
        placeholder="Warning state"
        defaultValue="Warning value"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with error and warning status states.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input label="Username" placeholder="Enter your username" />
      <Input label="Email" placeholder="Enter your email" type="email" />
      <Input
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with labels using the Typography component.',
      },
    },
  },
};

export const WithAddons: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        label="Search"
        prefix={<SearchLgIcon className="w-4 h-4" />}
        placeholder="Search items..."
      />
      <Input
        label="Website URL"
        addonBefore="https://"
        addonAfter=".com"
        placeholder="example"
      />
      <Input
        label="Price"
        addonBefore="$"
        addonAfter="USD"
        placeholder="0.00"
        type="number"
      />
      <Input
        label="Email"
        prefix={<Mail01Icon className="w-4 h-4" />}
        addonAfter="@company.com"
        placeholder="username"
      />
      <Input label="Phone" addonBefore="+1" placeholder="555-0123" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Inputs with addon elements (outside border) and prefix/suffix (inside border). Addons are styled like connected tabs.',
      },
    },
  },
};

export const WithClearAndCount: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        label="Clearable Input"
        placeholder="Type something..."
        allowClear
        defaultValue="Clear me!"
      />
      <Input
        label="Character Count"
        placeholder="Max 50 characters"
        showCount
        maxLength={50}
        defaultValue="Count me"
      />
      <Input
        label="Both Features"
        placeholder="Type something..."
        allowClear
        showCount
        maxLength={100}
        defaultValue="Test"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with clear button and character count functionality.',
      },
    },
  },
};

export const TextareaMode: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        type="textarea"
        label="Basic Textarea"
        placeholder="Enter your message..."
        rows={4}
      />
      <Input
        type="textarea"
        label="With Character Count"
        placeholder="Max 200 characters..."
        showCount
        maxLength={200}
        rows={3}
        defaultValue="This textarea has a character count!"
      />
      <Input
        type="textarea"
        label="Non-resizable"
        placeholder="Cannot be resized..."
        resize="none"
        rows={3}
      />
      <Input
        type="textarea"
        label="Horizontal Resize"
        placeholder="Can resize horizontally..."
        resize="horizontal"
        rows={3}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Input component in textarea mode with various resize options and features.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark p-6 bg-gray-900 space-y-4 max-w-md">
      <Input label="Default" placeholder="Enter text..." />
      <Input label="Filled" variant="filled" placeholder="Enter text..." />
      <Input
        label="With Prefix"
        prefix={<SearchLgIcon className="w-4 h-4" />}
        placeholder="Search..."
      />
      <Input
        label="With Addons"
        addonBefore="https://"
        addonAfter=".com"
        placeholder="example"
      />
      <Input label="With Clear" allowClear defaultValue="Clear me!" />
      <Input label="Error State" status="error" defaultValue="Invalid input" />
      <Input
        type="textarea"
        label="Textarea"
        placeholder="Enter message..."
        rows={3}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All input variants in dark mode with purple accent colors.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-md">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-triforce-600 dark:text-triforce-400">
          🏰 Hero Registration
        </h3>
        <Input
          label="Hero Name"
          prefix={<User01Icon className="w-4 h-4" />}
          placeholder="Link"
          testId="hero-name"
        />
        <Input
          label="Royal Email"
          type="email"
          prefix={<Mail01Icon className="w-4 h-4" />}
          addonAfter="@hyrule.kingdom"
          placeholder="hero"
        />
        <Input
          label="Secret Passphrase"
          type="password"
          prefix={<EyeIcon className="w-4 h-4" />}
          placeholder="Enter your secret"
          showCount
          maxLength={20}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-rupee-600 dark:text-rupee-400">
          💰 Merchant Interface
        </h3>
        <Input
          label="Item Price"
          addonBefore={<CurrencyDollarIcon className="w-4 h-4" />}
          addonAfter="Rupees"
          placeholder="100"
          type="number"
          variant="filled"
        />
        <Input
          label="Shop Website"
          addonBefore="https://"
          addonAfter=".hyrule"
          placeholder="my-shop"
          variant="filled"
        />
        <Input
          label="Search Inventory"
          prefix={<SearchLgIcon className="w-4 h-4" />}
          placeholder="Find items..."
          allowClear
          variant="borderless"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-sheikah-600 dark:text-sheikah-400">
          📜 Adventure Journal
        </h3>
        <Input
          type="textarea"
          label="Quest Log Entry"
          placeholder="Today I discovered a hidden shrine in the Lost Woods..."
          showCount
          maxLength={500}
          rows={4}
          allowClear
          variant="filled"
        />
        <Input
          label="Location Tags"
          placeholder="Hyrule Field, Central Tower"
          allowClear
          showCount
          maxLength={100}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-ganon-600 dark:text-ganon-400">
          ⚠️ Validation States
        </h3>
        <Input
          label="Invalid Hero Name"
          status="error"
          defaultValue="G@n0n"
          placeholder="Enter valid name"
        />
        <Input
          label="Weak Password"
          type="password"
          status="warning"
          defaultValue="123"
          placeholder="Enter stronger password"
          showCount
          maxLength={20}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Real-world usage examples showing hero registration, merchant interfaces, adventure journaling, and validation states with Hyrule theming.',
      },
    },
  },
};

export const HyruleInterface: Story = {
  render: () => (
    <div className="space-y-6 max-w-lg">
      <div className="space-y-4 p-4 border border-triforce-200 dark:border-triforce-700 rounded-lg bg-triforce-50 dark:bg-triforce-950">
        <h3 className="text-lg font-semibold text-triforce-700 dark:text-triforce-300 flex items-center gap-2">
          🏰 Castle Gate Access
        </h3>
        <Input
          label="Royal Guard ID"
          prefix={<User01Icon className="w-4 h-4" />}
          placeholder="Enter guard number"
          addonBefore="#"
          type="number"
        />
        <Input
          label="Access Code"
          type="password"
          placeholder="Secret castle code"
          showCount
          maxLength={8}
          allowClear
        />
      </div>

      <div className="space-y-4 p-4 border border-rupee-200 dark:border-rupee-700 rounded-lg bg-rupee-50 dark:bg-rupee-950">
        <h3 className="text-lg font-semibold text-rupee-700 dark:text-rupee-300 flex items-center gap-2">
          🔍 Sheikah Slate Search
        </h3>
        <Input
          label="Location Search"
          prefix={<SearchLgIcon className="w-4 h-4" />}
          placeholder="Search locations..."
          variant="filled"
          allowClear
        />
        <Input
          label="Coordinates"
          addonBefore="X:"
          addonAfter="Y:"
          placeholder="1234"
        />
      </div>

      <div className="space-y-4 p-4 border border-sheikah-200 dark:border-sheikah-700 rounded-lg bg-sheikah-50 dark:bg-sheikah-950">
        <h3 className="text-lg font-semibold text-sheikah-700 dark:text-sheikah-300 flex items-center gap-2">
          📜 Ancient Technology
        </h3>
        <Input
          type="textarea"
          label="Rune Configuration"
          placeholder="Enter ancient rune sequence..."
          variant="filled"
          rows={3}
          showCount
          maxLength={200}
        />
        <Input
          label="Energy Level"
          addonBefore="⚡"
          addonAfter="%"
          placeholder="100"
          type="number"
          defaultValue="85"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Adventure-themed interface examples showing castle access, Sheikah Slate functionality, and ancient technology controls with authentic Hyrule styling.',
      },
    },
  },
};

export const AccessibilityFeatures: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [announcement, setAnnouncement] = useState('');

    const validateField = (field: string, value: string) => {
      const newErrors = { ...errors };

      switch (field) {
        case 'name':
          if (value.length < 3) {
            newErrors.name = 'Name must be at least 3 characters';
          } else {
            delete newErrors.name;
          }
          break;
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

    const handleInputChange = (field: string, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      validateField(field, value);
    };

    const announceChange = (message: string) => {
      setAnnouncement(message);
      setTimeout(() => setAnnouncement(''), 3000);
    };

    return (
      <div className="space-y-8 max-w-2xl">
        {/* Live Region for Announcements */}
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {announcement}
        </div>

        <div className="p-4 border rounded-lg bg-blue-50">
          <Typography variant="h4" className="mb-3">
            🔍 Input Accessibility Comprehensive Demo
          </Typography>
          <Typography variant="body2" className="mb-4">
            This story demonstrates the Input component's complete accessibility
            features including keyboard navigation, screen reader support, ARIA
            attributes, and form validation patterns.
          </Typography>
        </div>

        {/* Keyboard Navigation Patterns */}
        <div className="space-y-4">
          <Typography variant="h4">⌨️ Keyboard Navigation Patterns</Typography>
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <Typography variant="body2" className="text-green-800 mb-4">
              <strong>Interactive Demo:</strong> Use keyboard to navigate and
              interact with these inputs.
            </Typography>

            <div className="space-y-4">
              {/* Basic Tab Navigation */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Basic Tab Navigation
                </Typography>
                <div className="space-y-3">
                  <Input
                    label="First Input"
                    placeholder="Tab to navigate here first"
                    testId="keyboard-first"
                    onFocus={() => announceChange('Focused on first input')}
                  />
                  <Input
                    label="Second Input"
                    placeholder="Then tab here"
                    testId="keyboard-second"
                    onFocus={() => announceChange('Focused on second input')}
                  />
                  <Input
                    label="Third Input"
                    placeholder="Finally tab here"
                    testId="keyboard-third"
                    onFocus={() => announceChange('Focused on third input')}
                  />
                </div>
              </div>

              {/* Text Selection and Navigation */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Text Selection & Arrow Keys
                </Typography>
                <Input
                  label="Text Navigation Demo"
                  defaultValue="Use arrow keys to navigate within this text"
                  placeholder="Arrow keys navigate within text"
                  testId="text-navigation"
                />
                <Typography
                  variant="body2"
                  className="text-sm text-gray-600 mt-1"
                >
                  Use arrow keys to move cursor, Ctrl+A to select all, Home/End
                  for line navigation
                </Typography>
              </div>

              {/* Textarea Navigation */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Textarea Navigation
                </Typography>
                <Input
                  type="textarea"
                  label="Multi-line Navigation"
                  defaultValue="Line 1: Use arrow keys to navigate\nLine 2: Up/Down arrows move between lines\nLine 3: Ctrl+Home/End for document navigation"
                  rows={4}
                  testId="textarea-navigation"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ARIA Attributes in Practice */}
        <div className="space-y-4">
          <Typography variant="h4">🏷️ ARIA Attributes in Practice</Typography>
          <div className="space-y-4">
            {/* Descriptive Labels */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                aria-describedby & Help Text
              </Typography>
              <div className="space-y-3">
                <Input
                  label="Hero Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your hero name"
                  aria-describedby="hero-name-help"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  status={errors.name ? 'error' : undefined}
                  testId="hero-name-input"
                />
                <Typography
                  variant="body2"
                  id="hero-name-help"
                  className="text-gray-600"
                >
                  Choose a unique name for your character (3-20 characters)
                </Typography>
                {errors.name && (
                  <Typography
                    variant="body2"
                    className="text-red-600"
                    role="alert"
                    aria-live="polite"
                  >
                    {errors.name}
                  </Typography>
                )}
              </div>
            </div>

            {/* Required Fields */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                aria-required & Required Fields
              </Typography>
              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="hero@hyrule.com"
                required
                aria-required="true"
                aria-describedby="email-help"
                aria-invalid={errors.email ? 'true' : 'false'}
                status={errors.email ? 'error' : undefined}
                testId="email-input"
              />
              <Typography
                variant="body2"
                id="email-help"
                className="text-gray-600 mt-1"
              >
                Required field for account notifications
              </Typography>
              {errors.email && (
                <Typography
                  variant="body2"
                  className="text-red-600 mt-1"
                  role="alert"
                >
                  {errors.email}
                </Typography>
              )}
            </div>

            {/* Complex ARIA Relationships */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                Complex ARIA Relationships
              </Typography>
              <Input
                label="Password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Enter secure password"
                aria-describedby="password-requirements password-strength"
                aria-invalid={errors.password ? 'true' : 'false'}
                status={errors.password ? 'error' : undefined}
                showCount
                maxLength={50}
                testId="password-input"
              />
              <div className="mt-2 space-y-1">
                <Typography
                  variant="body2"
                  id="password-requirements"
                  className="text-gray-600 text-sm"
                >
                  Must be at least 8 characters with numbers and symbols
                </Typography>
                <Typography
                  variant="body2"
                  id="password-strength"
                  className={`text-sm ${
                    formData.password.length >= 8
                      ? 'text-green-600'
                      : 'text-yellow-600'
                  }`}
                >
                  Strength: {formData.password.length >= 8 ? 'Strong' : 'Weak'}
                </Typography>
              </div>
              {errors.password && (
                <Typography
                  variant="body2"
                  className="text-red-600 mt-1"
                  role="alert"
                >
                  {errors.password}
                </Typography>
              )}
            </div>
          </div>
        </div>

        {/* Screen Reader Optimizations */}
        <div className="space-y-4">
          <Typography variant="h4">📢 Screen Reader Optimizations</Typography>
          <div className="space-y-4">
            {/* Character Count Announcements */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                Character Count Announcements
              </Typography>
              <Input
                label="Limited Text Input"
                placeholder="Type to see character count"
                showCount
                maxLength={50}
                aria-describedby="char-count-help"
                testId="char-count-input"
              />
              <Typography
                variant="body2"
                id="char-count-help"
                className="text-gray-600 text-sm mt-1"
              >
                Character count is announced as you type
              </Typography>
            </div>

            {/* Search Input with Clear */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                Search Input with Clear Button
              </Typography>
              <Input
                label="Search Items"
                type="search"
                prefix={<SearchLgIcon className="w-4 h-4" />}
                placeholder="Search through available items"
                allowClear
                aria-label="Search through available items in inventory"
                testId="search-input"
              />
              <Typography
                variant="body2"
                className="text-gray-600 text-sm mt-1"
              >
                Clear button is announced as "Clear search" to screen readers
              </Typography>
            </div>

            {/* Textarea with Rich Context */}
            <div className="p-3 bg-gray-50 border rounded">
              <Typography variant="body2" className="font-semibold mb-3">
                Textarea with Rich Context
              </Typography>
              <Input
                type="textarea"
                label="Quest Description"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Describe your quest in detail..."
                rows={4}
                showCount
                maxLength={500}
                aria-describedby="message-help message-tips"
                testId="message-textarea"
              />
              <div className="mt-2 space-y-1">
                <Typography
                  variant="body2"
                  id="message-help"
                  className="text-gray-600 text-sm"
                >
                  Describe your quest objectives, challenges, and rewards
                </Typography>
                <Typography
                  variant="body2"
                  id="message-tips"
                  className="text-blue-600 text-sm"
                >
                  Tip: Include location details and difficulty level
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Management */}
        <div className="space-y-4">
          <Typography variant="h4">🎯 Focus Management</Typography>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
            <Typography variant="body2" className="text-yellow-800 mb-4">
              <strong>Focus Indicators:</strong> All inputs provide clear visual
              focus indicators and maintain consistent focus behavior across
              variants.
            </Typography>

            <div className="space-y-4">
              {/* Focus Ring Visibility */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Focus Ring Visibility
                </Typography>
                <div className="space-y-3">
                  <Input
                    label="Default Variant"
                    placeholder="Clear focus ring on default variant"
                    variant="default"
                  />
                  <Input
                    label="Filled Variant"
                    placeholder="Focus ring on filled background"
                    variant="filled"
                  />
                  <Input
                    label="Borderless Variant"
                    placeholder="Focus ring on borderless input"
                    variant="borderless"
                  />
                </div>
              </div>

              {/* Focus Order */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Logical Focus Order
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input
                    label="First Column, First Row"
                    placeholder="Focus order 1"
                  />
                  <Input
                    label="Second Column, First Row"
                    placeholder="Focus order 2"
                  />
                  <Input
                    label="First Column, Second Row"
                    placeholder="Focus order 3"
                  />
                  <Input
                    label="Second Column, Second Row"
                    placeholder="Focus order 4"
                  />
                </div>
                <Typography
                  variant="body2"
                  className="text-sm text-gray-600 mt-2"
                >
                  Tab order follows reading order: left to right, top to bottom
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Examples */}
        <div className="space-y-4">
          <Typography variant="h4">🧪 Automated Testing Examples</Typography>
          <div className="p-4 bg-purple-50 border border-purple-200 rounded">
            <Typography variant="body2" className="text-purple-800 mb-4">
              <strong>Testing Patterns:</strong> Examples of how to test input
              accessibility features.
            </Typography>

            <div className="space-y-4">
              {/* Test ID Examples */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Test ID Patterns
                </Typography>
                <div className="space-y-3">
                  <Input
                    testId="test-basic-input"
                    label="Basic Test Input"
                    placeholder="Test basic functionality"
                  />
                  <Input
                    testId="test-email-input"
                    label="Email Test Input"
                    type="email"
                    placeholder="test@example.com"
                  />
                  <Input
                    testId="test-textarea-input"
                    type="textarea"
                    label="Textarea Test Input"
                    placeholder="Test textarea functionality"
                    rows={2}
                  />
                </div>
                <div className="mt-2 p-2 bg-white rounded text-xs font-mono">
                  screen.getByTestId('test-basic-input')
                </div>
              </div>

              {/* Label Testing */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  Label Association Testing
                </Typography>
                <Input
                  label="Accessible Label Test"
                  placeholder="Test label association"
                />
                <div className="mt-2 p-2 bg-white rounded text-xs font-mono">
                  screen.getByLabelText('Accessible Label Test')
                </div>
              </div>

              {/* ARIA Testing */}
              <div>
                <Typography variant="body2" className="font-semibold mb-2">
                  ARIA Attribute Testing
                </Typography>
                <Input
                  label="ARIA Test Input"
                  aria-label="Input for testing ARIA attributes"
                  aria-required="true"
                  aria-invalid="false"
                  testId="aria-test-input"
                />
                <div className="mt-2 p-2 bg-white rounded text-xs font-mono">
                  expect(input).toHaveAttribute('aria-required', 'true')
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
## Comprehensive Input Accessibility

This story demonstrates all accessibility features of the Input component:

### Keyboard Navigation Patterns
- **Tab/Shift+Tab** - Navigate between input fields in logical order
- **Arrow Keys** - Navigate within input content and move cursor
- **Home/End** - Jump to beginning/end of input content
- **Ctrl+A** - Select all text in input
- **Ctrl+Home/End** - Navigate to document start/end in textarea

### ARIA Attributes Implementation
- **aria-label** - Provides accessible names when visual labels aren't sufficient
- **aria-describedby** - Links inputs to help text and error messages
- **aria-required** - Indicates required form fields
- **aria-invalid** - Communicates validation state to screen readers
- **role="alert"** - Announces validation errors immediately

### Screen Reader Optimizations
- **Label Association** - All inputs properly associated with labels
- **Help Text Linking** - Descriptive text linked via aria-describedby
- **Character Count** - Live announcements of character limits
- **Clear Button** - Accessible clear functionality with proper labeling
- **Status Updates** - Validation changes announced via live regions

### Focus Management
- **Clear Focus Indicators** - High contrast focus rings on all variants
- **Logical Tab Order** - Focus follows visual layout and reading order
- **Focus Restoration** - Focus maintained during dynamic content changes
- **Consistent Behavior** - All input variants behave predictably

### Form Validation Accessibility
- **Real-time Validation** - Errors announced as user types
- **Error Association** - Error messages linked to their inputs
- **Required Field Indication** - Clear marking of mandatory fields
- **Success Feedback** - Positive validation states communicated

### Testing Patterns
\`\`\`tsx
// Test input accessibility
test('Input is accessible', async () => {
  const user = userEvent.setup()
  render(<Input label="Test Input" testId="test-input" />)
  
  // Test label association
  const input = screen.getByLabelText('Test Input')
  expect(input).toBeInTheDocument()
  
  // Test keyboard navigation
  await user.tab()
  expect(input).toHaveFocus()
  
  // Test typing
  await user.type(input, 'test value')
  expect(input).toHaveValue('test value')
})

// Test ARIA attributes
test('Input has proper ARIA attributes', () => {
  render(
    <Input 
      label="Required Field" 
      required 
      aria-describedby="help-text"
      testId="aria-input"
    />
  )
  
  const input = screen.getByTestId('aria-input')
  expect(input).toHaveAttribute('aria-required', 'true')
  expect(input).toHaveAttribute('aria-describedby', 'help-text')
})

// Test validation states
test('Input validation is accessible', async () => {
  const user = userEvent.setup()
  render(<ValidatedInput />)
  
  const input = screen.getByLabelText('Email')
  
  // Test invalid input
  await user.type(input, 'invalid-email')
  expect(input).toHaveAttribute('aria-invalid', 'true')
  
  // Test error message
  expect(screen.getByRole('alert')).toHaveTextContent('Invalid email')
})
\`\`\`

### Best Practices Demonstrated
1. **Clear Labeling** - All inputs have descriptive labels
2. **Help Text Association** - Additional context linked via ARIA
3. **Error Handling** - Validation errors clearly communicated
4. **Progressive Enhancement** - Works without JavaScript
5. **Consistent Interaction** - Predictable behavior across variants
6. **Testing Support** - Comprehensive testId attributes
        `,
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
            Use keyboard to navigate and interact with these inputs. Focus indicators and navigation patterns are demonstrated.
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Tab Navigation Order</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Input (Tab Order 1)"
              placeholder="Tab here first"
              testId="tab-order-1"
              onFocus={() => announceNavigation('Focused on first input')}
            />
            <Input
              label="Second Input (Tab Order 2)"
              placeholder="Tab here second"
              testId="tab-order-2"
              onFocus={() => announceNavigation('Focused on second input')}
            />
            <Input
              label="Third Input (Tab Order 3)"
              placeholder="Tab here third"
              testId="tab-order-3"
              onFocus={() => announceNavigation('Focused on third input')}
            />
            <Input
              label="Fourth Input (Tab Order 4)"
              placeholder="Tab here fourth"
              testId="tab-order-4"
              onFocus={() => announceNavigation('Focused on fourth input')}
            />
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Arrow Key Text Navigation</Typography>
          <Input
            label="Text Navigation Demo"
            defaultValue="Use arrow keys to navigate within this text content"
            testId="arrow-navigation"
          />
          <div className="text-sm text-gray-600 space-y-1">
            <div>• <kbd className="px-1 bg-gray-200 rounded">←→</kbd> Move cursor left/right</div>
            <div>• <kbd className="px-1 bg-gray-200 rounded">Home/End</kbd> Jump to start/end</div>
            <div>• <kbd className="px-1 bg-gray-200 rounded">Ctrl+A</kbd> Select all text</div>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Textarea Multi-line Navigation</Typography>
          <Input
            type="textarea"
            label="Multi-line Text Navigation"
            defaultValue="Line 1: Use arrow keys to navigate\nLine 2: Up/Down arrows move between lines\nLine 3: Ctrl+Home/End for document navigation"
            rows={4}
            testId="textarea-navigation"
          />
          <div className="text-sm text-gray-600 space-y-1">
            <div>• <kbd className="px-1 bg-gray-200 rounded">↑↓</kbd> Move between lines</div>
            <div>• <kbd className="px-1 bg-gray-200 rounded">Ctrl+Home/End</kbd> Document start/end</div>
            <div>• <kbd className="px-1 bg-gray-200 rounded">Shift+Arrow</kbd> Select text</div>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">Clear Button Keyboard Access</Typography>
          <Input
            label="Input with Clear Button"
            defaultValue="Clear me with keyboard"
            allowClear
            testId="clear-button-demo"
          />
          <div className="text-sm text-gray-600">
            • Tab to input, then Tab to clear button, press Enter to clear
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

Demonstrates comprehensive keyboard navigation support:

### Tab Navigation
- **Tab** - Move to next focusable element
- **Shift+Tab** - Move to previous focusable element
- **Logical Order** - Focus follows visual layout

### Text Navigation
- **Arrow Keys** - Move cursor within text
- **Home/End** - Jump to line start/end
- **Ctrl+Home/End** - Jump to document start/end
- **Ctrl+A** - Select all text

### Textarea Navigation
- **Up/Down Arrows** - Move between lines
- **Ctrl+Arrow Keys** - Word-by-word navigation
- **Shift+Arrow Keys** - Text selection

### Interactive Elements
- **Clear Button** - Accessible via Tab navigation
- **Enter** - Activate clear functionality
- **Focus Indicators** - Clear visual feedback

\`\`\`tsx
// Test keyboard navigation
test('Input supports keyboard navigation', async () => {
  const user = userEvent.setup();
  render(<Input label="Test" testId="keyboard-test" />);
  
  const input = screen.getByTestId('keyboard-test');
  
  // Test tab navigation
  await user.tab();
  expect(input).toHaveFocus();
  
  // Test text input
  await user.type(input, 'test text');
  expect(input).toHaveValue('test text');
  
  // Test arrow key navigation
  await user.keyboard('{ArrowLeft}{ArrowLeft}');
  await user.type(input, 'X');
  expect(input).toHaveValue('test teXxt');
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
      username: '',
      email: '',
      password: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateField = (field: string, value: string) => {
      const newErrors = { ...errors };
      switch (field) {
        case 'username':
          if (value.length < 3) newErrors.username = 'Username must be at least 3 characters';
          else delete newErrors.username;
          break;
        case 'email':
          if (value && !value.includes('@')) newErrors.email = 'Please enter a valid email';
          else delete newErrors.email;
          break;
        case 'password':
          if (value.length > 0 && value.length < 8) newErrors.password = 'Password must be at least 8 characters';
          else delete newErrors.password;
          break;
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
            Demonstrates proper ARIA attribute implementation for accessibility.
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">aria-describedby Implementation</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <Input
              label="Username"
              value={formData.username}
              onChange={(e) => {
                const value = e.target.value;
                setFormData(prev => ({ ...prev, username: value }));
                validateField('username', value);
              }}
              placeholder="Enter username"
              aria-describedby="username-help username-requirements"
              aria-invalid={errors.username ? 'true' : 'false'}
              status={errors.username ? 'error' : undefined}
              testId="username-aria"
            />
            <Typography variant="body2" id="username-help" className="text-gray-600 mt-1">
              Choose a unique username for your account
            </Typography>
            <Typography variant="body2" id="username-requirements" className="text-sm text-gray-500 mt-1">
              Must be 3-20 characters, letters and numbers only
            </Typography>
            {errors.username && (
              <Typography variant="body2" className="text-red-600 mt-1" role="alert">
                {errors.username}
              </Typography>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">aria-required for Required Fields</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <Input
              label="Email Address *"
              type="email"
              value={formData.email}
              onChange={(e) => {
                const value = e.target.value;
                setFormData(prev => ({ ...prev, email: value }));
                validateField('email', value);
              }}
              placeholder="hero@hyrule.com"
              required
              aria-required="true"
              aria-describedby="email-help"
              aria-invalid={errors.email ? 'true' : 'false'}
              status={errors.email ? 'error' : undefined}
              testId="email-required"
            />
            <Typography variant="body2" id="email-help" className="text-gray-600 mt-1">
              Required for account notifications and password recovery
            </Typography>
            {errors.email && (
              <Typography variant="body2" className="text-red-600 mt-1" role="alert">
                {errors.email}
              </Typography>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">aria-invalid and Error Announcements</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => {
                const value = e.target.value;
                setFormData(prev => ({ ...prev, password: value }));
                validateField('password', value);
              }}
              placeholder="Enter secure password"
              aria-describedby="password-requirements password-strength"
              aria-invalid={errors.password ? 'true' : 'false'}
              status={errors.password ? 'error' : undefined}
              showCount
              maxLength={50}
              testId="password-validation"
            />
            <Typography variant="body2" id="password-requirements" className="text-gray-600 mt-1">
              Must contain at least 8 characters with numbers and symbols
            </Typography>
            <Typography 
              variant="body2" 
              id="password-strength" 
              className={`text-sm mt-1 ${
                formData.password.length >= 8 ? 'text-green-600' : 'text-yellow-600'
              }`}
            >
              Strength: {formData.password.length >= 8 ? 'Strong' : 'Weak'}
            </Typography>
            {errors.password && (
              <Typography 
                variant="body2" 
                className="text-red-600 mt-1" 
                role="alert"
                aria-live="polite"
              >
                {errors.password}
              </Typography>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h5">aria-label for Additional Context</Typography>
          <div className="p-3 bg-gray-50 border rounded">
            <Input
              label="Search"
              type="search"
              prefix={<SearchLgIcon className="w-4 h-4" />}
              placeholder="Search items..."
              aria-label="Search through inventory items and equipment"
              allowClear
              testId="search-aria-label"
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

Demonstrates proper ARIA attribute usage for enhanced accessibility:

### aria-describedby
- Links inputs to help text and additional descriptions
- Supports multiple IDs for complex relationships
- Screen readers announce linked content when input receives focus

### aria-required
- Indicates required form fields to assistive technology
- Works alongside visual indicators (asterisks, styling)
- Announced when field receives focus

### aria-invalid
- Communicates validation state to screen readers
- Set to "true" when field has validation errors
- Set to "false" or omitted when field is valid

### role="alert"
- Immediately announces error messages to screen readers
- Used for critical validation feedback
- Combined with aria-live for dynamic updates

### aria-label
- Provides accessible names when visual labels need enhancement
- Useful for search inputs and contextual fields
- Overrides visible label text for screen readers

\`\`\`tsx
// Test ARIA attributes
test('Input has proper ARIA attributes', () => {
  render(
    <Input 
      label="Username" 
      required 
      aria-describedby="help-text"
      testId="aria-input"
    />
  );
  
  const input = screen.getByTestId('aria-input');
  expect(input).toHaveAttribute('aria-required', 'true');
  expect(input).toHaveAttribute('aria-describedby', 'help-text');
  expect(input).toHaveAttribute('aria-invalid', 'false');
});

// Test error state ARIA
test('Input announces validation errors', () => {
  render(<InputWithValidation />);
  
  const input = screen.getByLabelText('Email');
  fireEvent.change(input, { target: { value: 'invalid' } });
  
  expect(input).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByRole('alert')).toHaveTextContent('Invalid email');
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
          Examples showing how to test Input components with proper testId attributes and accessibility features.
        </Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Basic Input Testing</Typography>
        <div className="space-y-3">
          <Input
            testId="test-basic-input"
            label="Basic Test Input"
            placeholder="Test basic functionality"
          />
          <Input
            testId="test-email-input"
            label="Email Test Input"
            type="email"
            placeholder="test@example.com"
          />
          <Input
            testId="test-textarea-input"
            type="textarea"
            label="Textarea Test Input"
            placeholder="Test textarea functionality"
            rows={3}
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Query inputs by testId
screen.getByTestId('test-basic-input')
screen.getByTestId('test-email-input')
screen.getByTestId('test-textarea-input')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Accessibility Testing</Typography>
        <div className="space-y-3">
          <Input
            testId="test-accessible-input"
            label="Accessible Test Input"
            aria-describedby="test-help"
            required
            aria-required="true"
            placeholder="Test accessibility features"
          />
          <Typography variant="body2" id="test-help" className="text-gray-600">
            This help text is linked via aria-describedby
          </Typography>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test label association
screen.getByLabelText('Accessible Test Input')

// Test ARIA attributes
expect(input).toHaveAttribute('aria-required', 'true')
expect(input).toHaveAttribute('aria-describedby', 'test-help')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">User Interaction Testing</Typography>
        <div className="space-y-3">
          <Input
            testId="test-interaction-input"
            label="Interaction Test Input"
            allowClear
            showCount
            maxLength={50}
            placeholder="Test user interactions"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test typing
const user = userEvent.setup()
const input = screen.getByTestId('test-interaction-input')
await user.type(input, 'test value')
expect(input).toHaveValue('test value')

// Test clear button
const clearButton = screen.getByLabelText('Clear input')
await user.click(clearButton)
expect(input).toHaveValue('')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Form Validation Testing</Typography>
        <div className="space-y-3">
          <Input
            testId="test-validation-input"
            label="Validation Test Input"
            status="error"
            aria-invalid="true"
            defaultValue="Invalid value"
            placeholder="Test validation states"
          />
          <Typography variant="body2" className="text-red-600" role="alert">
            This field has an error
          </Typography>
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test validation state
const input = screen.getByTestId('test-validation-input')
expect(input).toHaveAttribute('aria-invalid', 'true')

// Test error message
expect(screen.getByRole('alert')).toHaveTextContent('This field has an error')`}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h5">Keyboard Navigation Testing</Typography>
        <div className="space-y-3">
          <Input
            testId="test-keyboard-first"
            label="First Keyboard Test"
            placeholder="Tab to me first"
          />
          <Input
            testId="test-keyboard-second"
            label="Second Keyboard Test"
            placeholder="Tab to me second"
          />
        </div>
        <div className="p-3 bg-gray-900 text-gray-100 rounded text-sm font-mono">
          {`// Test keyboard navigation
const user = userEvent.setup()
const firstInput = screen.getByTestId('test-keyboard-first')
const secondInput = screen.getByTestId('test-keyboard-second')

// Test tab navigation
await user.tab()
expect(firstInput).toHaveFocus()

await user.tab()
expect(secondInput).toHaveFocus()`}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Testing Examples with testId Attributes

Comprehensive testing patterns for Input components:

### Basic Testing Patterns
\`\`\`tsx
// Query by testId
const input = screen.getByTestId('test-basic-input');
expect(input).toBeInTheDocument();

// Test input value
fireEvent.change(input, { target: { value: 'test' } });
expect(input).toHaveValue('test');
\`\`\`

### Accessibility Testing
\`\`\`tsx
// Test label association
const input = screen.getByLabelText('Username');
expect(input).toBeInTheDocument();

// Test ARIA attributes
expect(input).toHaveAttribute('aria-required', 'true');
expect(input).toHaveAttribute('aria-describedby', 'help-text');
\`\`\`

### User Interaction Testing
\`\`\`tsx
// Test user typing
const user = userEvent.setup();
const input = screen.getByTestId('interaction-input');

await user.type(input, 'Hello World');
expect(input).toHaveValue('Hello World');

// Test clear functionality
const clearButton = screen.getByLabelText('Clear input');
await user.click(clearButton);
expect(input).toHaveValue('');
\`\`\`

### Form Validation Testing
\`\`\`tsx
// Test validation states
const input = screen.getByTestId('validation-input');
expect(input).toHaveAttribute('aria-invalid', 'true');

// Test error announcements
expect(screen.getByRole('alert')).toHaveTextContent('Error message');
\`\`\`

### Keyboard Navigation Testing
\`\`\`tsx
// Test tab order
const user = userEvent.setup();
const inputs = screen.getAllByRole('textbox');

await user.tab();
expect(inputs[0]).toHaveFocus();

await user.tab();
expect(inputs[1]).toHaveFocus();
\`\`\`

### Automated Accessibility Testing
\`\`\`tsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('Input has no accessibility violations', async () => {
  const { container } = render(<Input label="Test" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
\`\`\`
        `,
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">🎮 Character Creation</h3>
        <Input
          label="Character Name"
          placeholder="Enter hero name"
          prefix={<User01Icon className="w-4 h-4" />}
          showCount
          maxLength={20}
          testId="character-name"
        />
        <Input
          type="textarea"
          label="Backstory"
          placeholder="Tell your hero's origin story..."
          rows={4}
          showCount
          maxLength={300}
          allowClear
        />
        <Input
          label="Starting Rupees"
          type="number"
          addonBefore={<CurrencyDollarIcon className="w-4 h-4" />}
          addonAfter="Rupees"
          placeholder="100"
          defaultValue="100"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">📧 Contact Information</h3>
        <Input
          label="Email Address"
          type="email"
          prefix={<Mail01Icon className="w-4 h-4" />}
          placeholder="hero@example.com"
        />
        <Input
          label="Website"
          addonBefore="https://"
          addonAfter=".com"
          placeholder="my-adventure-blog"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Form integration examples showing character creation and contact forms with proper validation and user experience patterns.',
      },
    },
  },
};
