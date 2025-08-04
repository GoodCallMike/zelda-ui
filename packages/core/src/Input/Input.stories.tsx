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
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleValidation = (inputValue: string) => {
      if (inputValue.length < 3) {
        setError('Name must be at least 3 characters');
      } else {
        setError('');
      }
    };

    return (
      <div className="space-y-6 max-w-md">
        <div className="p-4 border rounded-lg bg-blue-50">
          <Typography variant="h4" className="mb-3">
            🔍 Accessibility Features Demo
          </Typography>
          <Typography variant="body2" className="mb-4">
            This story demonstrates the Input's comprehensive accessibility
            features including keyboard navigation, screen reader support, and
            ARIA attributes.
          </Typography>
        </div>

        {/* Keyboard Navigation */}
        <div className="space-y-4">
          <Typography variant="h4">⌨️ Keyboard Navigation</Typography>
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <Typography variant="body2" className="text-green-800 mb-3">
              <strong>Try this:</strong> Use Tab to navigate between inputs,
              arrow keys in select-like inputs.
            </Typography>
            <div className="space-y-3">
              <Input
                label="First Input"
                placeholder="Tab to navigate here first"
                testId="keyboard-first"
              />
              <Input
                label="Second Input"
                placeholder="Then tab here"
                testId="keyboard-second"
              />
              <Input
                type="textarea"
                label="Textarea Input"
                placeholder="Finally tab here"
                rows={3}
                testId="keyboard-textarea"
              />
            </div>
          </div>
        </div>

        {/* ARIA Attributes and Labels */}
        <div className="space-y-4">
          <Typography variant="h4">🏷️ ARIA Attributes & Labels</Typography>
          <div className="space-y-3">
            <Input
              label="Hero Name"
              placeholder="Enter your hero name"
              aria-describedby="hero-name-help"
              testId="hero-name-input"
            />
            <Typography
              variant="body2"
              id="hero-name-help"
              className="text-gray-600"
            >
              Choose a unique name for your character (3-20 characters)
            </Typography>

            <Input
              label="Email Address"
              type="email"
              placeholder="hero@hyrule.com"
              aria-label="Enter your email address for account notifications"
              required
              testId="email-input"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter secure password"
              aria-describedby="password-requirements"
              testId="password-input"
            />
            <Typography
              variant="body2"
              id="password-requirements"
              className="text-gray-600"
            >
              Must be at least 8 characters with numbers and symbols
            </Typography>
          </div>
        </div>

        {/* Error States and Validation */}
        <div className="space-y-4">
          <Typography variant="h4">⚠️ Error States & Validation</Typography>
          <div className="space-y-3">
            <Input
              label="Validated Input"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                handleValidation(e.target.value);
              }}
              status={error ? 'error' : undefined}
              placeholder="Type at least 3 characters"
              aria-describedby={error ? 'validation-error' : undefined}
              aria-invalid={error ? 'true' : 'false'}
              testId="validated-input"
            />
            {error && (
              <Typography
                variant="body2"
                id="validation-error"
                className="text-red-600"
                role="alert"
                aria-live="polite"
              >
                {error}
              </Typography>
            )}

            <Input
              label="Required Field"
              placeholder="This field is required"
              required
              aria-required="true"
              status="error"
              testId="required-input"
            />
            <Typography variant="body2" className="text-red-600" role="alert">
              This field is required
            </Typography>
          </div>
        </div>

        {/* Screen Reader Support */}
        <div className="space-y-4">
          <Typography variant="h4">📢 Screen Reader Support</Typography>
          <div className="space-y-3">
            <Input
              label="Character Count Input"
              placeholder="Type something..."
              showCount
              maxLength={50}
              aria-describedby="char-count-help"
              testId="char-count-input"
            />
            <Typography
              variant="body2"
              id="char-count-help"
              className="text-gray-600"
            >
              Character count is announced as you type
            </Typography>

            <Input
              label="Search Input"
              type="search"
              prefix={<SearchLgIcon className="w-4 h-4" />}
              placeholder="Search items..."
              allowClear
              aria-label="Search through available items"
              testId="search-input"
            />

            <Input
              type="textarea"
              label="Message"
              placeholder="Enter your message..."
              rows={4}
              aria-describedby="message-help"
              testId="message-textarea"
            />
            <Typography
              variant="body2"
              id="message-help"
              className="text-gray-600"
            >
              Describe your quest or ask for help from other heroes
            </Typography>
          </div>
        </div>

        {/* Focus Management */}
        <div className="space-y-4">
          <Typography variant="h4">🎯 Focus Management</Typography>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
            <Typography variant="body2" className="text-yellow-800 mb-3">
              <strong>Focus Indicators:</strong> All inputs have clear focus
              states for keyboard users.
            </Typography>
            <div className="space-y-3">
              <Input label="Focus me first" placeholder="Clear focus ring" />
              <Input
                label="Then focus me"
                placeholder="Visible focus state"
                variant="filled"
              />
              <Input
                label="Finally me"
                placeholder="Consistent focus behavior"
                variant="borderless"
              />
            </div>
          </div>
        </div>

        {/* Testing Examples */}
        <div className="space-y-4">
          <Typography variant="h4">🧪 Testing Examples</Typography>
          <div className="p-4 bg-purple-50 border border-purple-200 rounded">
            <Typography variant="body2" className="text-purple-800 mb-3">
              <strong>Testing:</strong> All inputs include testId attributes for
              reliable automated testing.
            </Typography>
            <div className="space-y-3">
              <Input
                testId="test-basic-input"
                label="Basic Test Input"
                placeholder="Test me"
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
                placeholder="Test textarea"
                rows={2}
              />
            </div>
            <Typography variant="body2" className="text-sm text-gray-600 mt-2">
              Test with: screen.getByTestId('test-basic-input')
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
Demonstrates comprehensive accessibility features:

**Keyboard Navigation:**
- \`Tab/Shift+Tab\` - Navigate between inputs
- \`Arrow keys\` - Navigate within input content
- Clear focus indicators

**ARIA Attributes:**
- \`aria-label\` - Accessible input names
- \`aria-describedby\` - Additional descriptions
- \`aria-required\` - Required field indication
- \`aria-invalid\` - Validation state
- \`role="alert"\` - Error announcements

**Screen Reader Support:**
- Semantic input elements
- Proper label associations
- Status announcements
- Character count announcements

**Testing Support:**
- \`testId\` attributes for reliable testing
- Consistent naming conventions
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
