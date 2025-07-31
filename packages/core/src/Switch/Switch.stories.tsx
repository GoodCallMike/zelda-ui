import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Data Entry/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Switch component for toggling between two states with comprehensive accessibility and testing support.

## Overview

The Switch component provides a way to toggle between on/off or true/false states. It supports different sizes, disabled states, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Switch } from '@zelda/core';

// Basic usage
<Switch checked={isEnabled} onChange={setIsEnabled} />

// With size and disabled state
<Switch 
  size="small" 
  checked={isEnabled} 
  onChange={setIsEnabled}
  disabled={isLoading}
/>
\`\`\`

## Sizes

### Default Size
\`\`\`tsx
<Switch checked={true} onChange={handleChange} />
\`\`\`

### Small Size
\`\`\`tsx
<Switch size="small" checked={true} onChange={handleChange} />
\`\`\`

## States

### Checked
\`\`\`tsx
<Switch checked={true} onChange={handleChange} />
\`\`\`

### Unchecked
\`\`\`tsx
<Switch checked={false} onChange={handleChange} />
\`\`\`

### Disabled
\`\`\`tsx
<Switch checked={true} disabled onChange={handleChange} />
\`\`\`

## Accessibility

The Switch component is fully accessible with:

- **Keyboard navigation**: Space and Enter keys toggle the switch
- **Screen reader support**: Proper ARIA attributes and role="switch"
- **Focus management**: Clear focus indicators and logical tab order
- **State communication**: ARIA checked state properly announced

\`\`\`tsx
// Accessible switch with proper labeling
<label>
  Enable notifications
  <Switch 
    checked={notifications} 
    onChange={setNotifications}
    aria-label="Toggle notifications"
  />
</label>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Switch 
  testId="notification-toggle"
  checked={enabled}
  onChange={setEnabled}
/>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('notification-toggle');
screen.getByRole('switch', { name: 'Toggle notifications' });
\`\`\`

## Best Practices

### Do
- Use clear labels that describe what the switch controls
- Provide immediate feedback when the state changes
- Use consistent sizing within the same interface
- Include \`testId\` for reliable testing

### Don't
- Use switches for actions that require confirmation
- Make switches too small to interact with easily
- Use switches without clear labeling
- Forget to handle the disabled state properly
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      control: false,
      description: 'Change handler function',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default'],
      description: 'Size variant of the switch',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
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
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="space-y-4">
        <Switch 
          checked={checked} 
          onChange={setChecked}
          testId="interactive-switch"
        />
        <p className="text-sm text-gray-600">
          Switch is {checked ? 'ON' : 'OFF'}
        </p>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Switch size="small" testId="small-switch" />
        <span className="text-xs">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Switch size="default" testId="default-switch" />
        <span className="text-xs">Default</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of the switch component for various use cases.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Switch checked={false} testId="unchecked-switch" />
        <p className="text-xs">Unchecked</p>
      </div>
      <div className="space-y-2">
        <Switch checked={true} testId="checked-switch" />
        <p className="text-xs">Checked</p>
      </div>
      <div className="space-y-2">
        <Switch checked={false} disabled testId="disabled-switch" />
        <p className="text-xs">Disabled</p>
      </div>
      <div className="space-y-2">
        <Switch checked={true} disabled testId="disabled-checked-switch" />
        <p className="text-xs">Disabled Checked</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the switch including checked, unchecked, and disabled states.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Settings Panel</h3>
          <div className="space-y-4 p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium">Push Notifications</label>
                <p className="text-xs text-gray-500">Receive notifications on your device</p>
              </div>
              <Switch 
                checked={notifications} 
                onChange={setNotifications}
                testId="notifications-switch"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium">Dark Mode</label>
                <p className="text-xs text-gray-500">Use dark theme</p>
              </div>
              <Switch 
                size="small"
                checked={darkMode} 
                onChange={setDarkMode}
                testId="dark-mode-switch"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium">Auto Save</label>
                <p className="text-xs text-gray-500">Automatically save changes</p>
              </div>
              <Switch 
                checked={autoSave} 
                onChange={setAutoSave}
                disabled={isLoading}
                testId="auto-save-switch"
              />
            </div>
            
            <div className="pt-2">
              <button 
                onClick={() => setIsLoading(!isLoading)}
                className="text-xs text-blue-600 hover:text-blue-700"
              >
                {isLoading ? 'Stop Loading' : 'Simulate Loading'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing switches in a settings panel with proper labeling and testing IDs.',
      },
    },
  },
};