import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Checkbox component for binary choices and multi-selection scenarios.

## Features
- **Multiple States**: Checked, unchecked, indeterminate
- **Validation**: Error states with messages
- **Accessibility**: Full keyboard and screen reader support
- **Flexible Content**: Labels, descriptions, and custom content

## When to Use
- **Form Fields**: Accept terms, subscribe to newsletter
- **Multi-Selection**: Select multiple items from a list
- **Settings**: Enable/disable features or preferences
- **Bulk Actions**: Select all/none operations

## Accessibility
- Keyboard navigation with Tab and Space
- ARIA attributes for screen readers
- Proper focus management and indicators
- Error state communication`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    indeterminate: {
      control: 'boolean', 
      description: 'Whether the checkbox is in indeterminate state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
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

export const WithDescription: Story = {
  args: {
    label: 'Subscribe to newsletter',
    description: 'Get updates about new features and releases',
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">Checkbox States</h3>
        <div className="space-y-3">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" checked />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled Checked" disabled checked />
        </div>
      </div>
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    errorMessage: 'This field is required',
    required: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [items, setItems] = useState([
      { id: 1, label: 'Item 1', checked: false },
      { id: 2, label: 'Item 2', checked: false },
      { id: 3, label: 'Item 3', checked: false },
    ]);

    const allChecked = items.every(item => item.checked);
    const someChecked = items.some(item => item.checked);

    const handleSelectAll = (checked: boolean) => {
      setItems(items.map(item => ({ ...item, checked })));
    };

    const handleItemChange = (id: number, checked: boolean) => {
      setItems(items.map(item => 
        item.id === id ? { ...item, checked } : item
      ));
    };

    return (
      <div className="space-y-4">
        <Checkbox
          label="Controlled checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        
        <div className="border-t pt-4">
          <Checkbox
            label="Select All"
            checked={allChecked}
            indeterminate={someChecked && !allChecked}
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
          <div className="ml-6 mt-2 space-y-2">
            {items.map(item => (
              <Checkbox
                key={item.id}
                label={item.label}
                checked={item.checked}
                onChange={(e) => handleItemChange(item.id, e.target.checked)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Form Usage</h3>
        <div className="space-y-3">
          <Checkbox 
            label="I agree to the terms and conditions" 
            required 
          />
          <Checkbox 
            label="Subscribe to marketing emails" 
            description="Receive updates about new products and features"
          />
          <Checkbox 
            label="Remember my preferences" 
            description="Save settings for future visits"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Settings Panel</h3>
        <div className="space-y-3">
          <Checkbox 
            label="Enable notifications" 
            checked 
            description="Show desktop notifications for important updates"
          />
          <Checkbox 
            label="Auto-save documents" 
            checked
            description="Automatically save changes every 30 seconds"
          />
          <Checkbox 
            label="Dark mode" 
            description="Use dark theme across the application"
          />
        </div>
      </div>
    </div>
  ),
};