import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Data Entry/Input',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `TextField component for single-line text input with comprehensive accessibility and testing support.

## Overview

The TextField component provides a way to collect single-line text input from users. It supports various input types, validation states, descriptions, icons, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { TextField } from '@zelda/core';

// Basic text field
<TextField
  label="Username"
  placeholder="Enter your username"
  onChange={(e) => handleChange(e.target.value)}
/>

// With validation
<TextField
  label="Email"
  type="email"
  required
  errorMessage={error}
  placeholder="Enter your email"
/>

// With description
<TextField
  label="Password"
  type="password"
  description="Must be at least 8 characters"
  placeholder="Enter password"
/>
\`\`\`

## Input Types

### Text Input
\`\`\`tsx
<TextField
  label="Name"
  type="text"
  placeholder="Enter your name"
/>
\`\`\`

### Email Input
\`\`\`tsx
<TextField
  label="Email Address"
  type="email"
  placeholder="user@example.com"
/>
\`\`\`

### Password Input
\`\`\`tsx
<TextField
  label="Password"
  type="password"
  placeholder="Enter password"
/>
\`\`\`

### Number Input
\`\`\`tsx
<TextField
  label="Age"
  type="number"
  min={0}
  max={120}
  placeholder="Enter your age"
/>
\`\`\`

## Validation States

### Required Field
\`\`\`tsx
<TextField
  label="Required field"
  required
  placeholder="This field is required"
/>
\`\`\`

### Error State
\`\`\`tsx
<TextField
  label="Field with error"
  errorMessage="This field is required"
  placeholder="Fix the error"
/>
\`\`\`

### With Description
\`\`\`tsx
<TextField
  label="Username"
  description="Choose a unique username"
  placeholder="Enter username"
/>
\`\`\`

## Accessibility

The TextField component is fully accessible with:

- **Keyboard navigation**: Tab to focus, standard text editing shortcuts
- **ARIA attributes**: Proper labeling, descriptions, and error states
- **Screen reader support**: Label association and error announcements
- **Focus management**: Clear focus indicators and logical tab order
- **Error communication**: ARIA invalid states and describedby relationships
- **Input validation**: Proper type attributes for different input modes

\`\`\`tsx
// Accessible text field with all features
<TextField
  label="Email Address"
  type="email"
  description="We'll use this to send you updates"
  required
  errorMessage={error}
  aria-describedby="email-help"
  placeholder="user@example.com"
/>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<TextField
  testId="username-input"
  label="Username"
  placeholder="Enter username"
/>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('username-input');
screen.getByRole('textbox', { name: 'Username' });
screen.getByPlaceholderText('Enter username');
\`\`\`

## Best Practices

### Do
- Use clear, descriptive labels that explain the expected input
- Choose appropriate input types for better mobile experience
- Provide helpful placeholder text as examples
- Use validation messages that guide users to fix errors
- Include \`testId\` for reliable testing
- Handle focus and blur events appropriately

### Don't
- Use placeholder text as the only label
- Make labels too long or complex
- Forget to handle different input types properly
- Use text fields for multi-line input (use TextArea instead)
- Ignore accessibility requirements for error states
- Set unreasonable input constraints`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input field',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when empty',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Helper text displayed below the input',
      table: {
        type: { summary: 'string' },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Email',
    description: 'We will never share your email with anyone else.',
    placeholder: 'Enter your email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    errorMessage: 'Password must be at least 8 characters long.',
    placeholder: 'Enter your password',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'aria-describedby',
            enabled: true,
          },
          {
            id: 'aria-invalid',
            enabled: true,
          },
        ],
      },
    },
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    required: true,
    placeholder: 'Enter your full name',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    disabled: true,
    value: 'This field is disabled',
  },
};



export const InputTypes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Input Types</h3>
        <div className="space-y-4">
          <TextField
            label="Text Input"
            type="text"
            placeholder="Enter text"
            testId="text-input"
          />
          <TextField
            label="Email Input"
            type="email"
            placeholder="user@example.com"
            testId="email-input"
          />
          <TextField
            label="Password Input"
            type="password"
            placeholder="Enter password"
            testId="password-input"
          />
          <TextField
            label="Number Input"
            type="number"
            placeholder="Enter number"
            testId="number-input"
          />
          <TextField
            label="Phone Input"
            type="tel"
            placeholder="(555) 123-4567"
            testId="phone-input"
          />
          <TextField
            label="URL Input"
            type="url"
            placeholder="https://example.com"
            testId="url-input"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input types with appropriate keyboard and validation behavior.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Input States</h3>
        <div className="space-y-4">
          <TextField
            label="Normal State"
            placeholder="Enter text"
            testId="normal-input"
          />
          <TextField
            label="Required Field"
            required
            placeholder="This field is required"
            testId="required-input"
          />
          <TextField
            label="With Error"
            errorMessage="This field is required"
            placeholder="Fix the error"
            testId="error-input"
          />
          <TextField
            label="Disabled State"
            disabled
            value="This input is disabled"
            testId="disabled-input"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the input including normal, required, error, and disabled states.',
      },
    },
  },
};

export const Features: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Input Features</h3>
        <div className="space-y-4">
          <TextField
            label="With Description"
            description="This is a helpful description"
            placeholder="Enter value"
            testId="description-input"
          />
          <TextField
            label="Required with Description"
            description="This field is required for account creation"
            required
            placeholder="Enter required value"
            testId="required-description-input"
          />
          <TextField
            label="Number with Constraints"
            type="number"
            min={0}
            max={100}
            description="Enter a number between 0 and 100"
            placeholder="0-100"
            testId="constrained-number-input"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Advanced features including descriptions, constraints, and validation helpers.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Login Form</h3>
        <div className="space-y-4 p-4 border rounded-lg">
          <TextField
            label="Username or Email"
            type="email"
            placeholder="Enter your username or email"
            required
            testId="login-username"
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
            testId="login-password"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Registration Form</h3>
        <div className="space-y-4 p-4 border rounded-lg">
          <TextField
            label="Full Name"
            placeholder="Enter your full name"
            required
            testId="register-name"
          />
          <TextField
            label="Email Address"
            type="email"
            description="We'll use this to send you updates"
            placeholder="user@example.com"
            required
            testId="register-email"
          />
          <TextField
            label="Phone Number"
            type="tel"
            description="Optional - for account recovery"
            placeholder="(555) 123-4567"
            testId="register-phone"
          />
          <TextField
            label="Password"
            type="password"
            description="Must be at least 8 characters"
            placeholder="Create a strong password"
            required
            testId="register-password"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
        <div className="space-y-4 p-4 border rounded-lg">
          <TextField
            label="Display Name"
            placeholder="How others will see you"
            testId="profile-display-name"
          />
          <TextField
            label="Website"
            type="url"
            description="Your personal or company website"
            placeholder="https://yoursite.com"
            testId="profile-website"
          />
          <TextField
            label="Age"
            type="number"
            min={13}
            max={120}
            description="Must be 13 or older"
            placeholder="Enter your age"
            testId="profile-age"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing text fields in login, registration, and profile forms with proper testing IDs.',
      },
    },
  },
};