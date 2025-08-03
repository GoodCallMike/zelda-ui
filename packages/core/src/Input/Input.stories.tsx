import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { SearchLgIcon, User01Icon, Mail01Icon, EyeIcon, CurrencyDollarIcon } from '@zelda/icons';

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

The Input component is fully accessible with:

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Semantic elements with proper labeling
- **Focus Indicators**: Clear visual focus states for keyboard users
- **High Contrast**: Maintains accessibility in both light and dark modes

\`\`\`tsx
// Accessibility example
<Input testId="hero-name" aria-label="Enter your hero name" label="Hero Name" />
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Input testId="input-test" placeholder="Test input" />
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('input-test');
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
      options: ['text', 'password', 'email', 'search', 'url', 'tel', 'number', 'textarea'],
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
      <Input status="error" placeholder="Error state" defaultValue="Invalid value" />
      <Input status="warning" placeholder="Warning state" defaultValue="Warning value" />
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
      <Input label="Password" placeholder="Enter your password" type="password" />
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
      <Input label="Search" prefix={<SearchLgIcon className="w-4 h-4" />} placeholder="Search items..." />
      <Input label="Website URL" addonBefore="https://" addonAfter=".com" placeholder="example" />
      <Input label="Price" addonBefore="$" addonAfter="USD" placeholder="0.00" type="number" />
      <Input label="Email" prefix={<Mail01Icon className="w-4 h-4" />} addonAfter="@company.com" placeholder="username" />
      <Input label="Phone" addonBefore="+1" placeholder="555-0123" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with addon elements (outside border) and prefix/suffix (inside border). Addons are styled like connected tabs.',
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
        story: 'Input component in textarea mode with various resize options and features.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark p-6 bg-gray-900 space-y-4 max-w-md">
      <Input label="Default" placeholder="Enter text..." />
      <Input label="Filled" variant="filled" placeholder="Enter text..." />
      <Input label="With Prefix" prefix={<SearchLgIcon className="w-4 h-4" />} placeholder="Search..." />
      <Input label="With Addons" addonBefore="https://" addonAfter=".com" placeholder="example" />
      <Input label="With Clear" allowClear defaultValue="Clear me!" />
      <Input label="Error State" status="error" defaultValue="Invalid input" />
      <Input type="textarea" label="Textarea" placeholder="Enter message..." rows={3} />
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
        <h3 className="text-lg font-semibold text-triforce-600 dark:text-triforce-400">🏰 Hero Registration</h3>
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
        <h3 className="text-lg font-semibold text-rupee-600 dark:text-rupee-400">💰 Merchant Interface</h3>
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
        <h3 className="text-lg font-semibold text-sheikah-600 dark:text-sheikah-400">📜 Adventure Journal</h3>
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
        <h3 className="text-lg font-semibold text-ganon-600 dark:text-ganon-400">⚠️ Validation States</h3>
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
        story: 'Real-world usage examples showing hero registration, merchant interfaces, adventure journaling, and validation states with Hyrule theming.',
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
        story: 'Adventure-themed interface examples showing castle access, Sheikah Slate functionality, and ancient technology controls with authentic Hyrule styling.',
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
        story: 'Form integration examples showing character creation and contact forms with proper validation and user experience patterns.',
      },
    },
  },
};