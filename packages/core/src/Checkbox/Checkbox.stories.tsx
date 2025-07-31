import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';
import { Button } from '../Button';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Checkbox component for binary choices and multi-selection scenarios with comprehensive accessibility and testing support.

## Overview

The Checkbox component provides a flexible way to handle binary choices and multi-selection scenarios in your application. It supports multiple states, validation, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Checkbox } from '@zelda/core';

// Basic checkbox
<Checkbox label="Accept terms and conditions" />

// With description
<Checkbox 
  label="Subscribe to newsletter" 
  description="Get updates about new features"
/>

// With error state
<Checkbox 
  label="Required field" 
  errorMessage="This field is required"
  required
/>

// Controlled checkbox
const [checked, setChecked] = useState(false);
<Checkbox 
  label="Controlled" 
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
\`\`\`

## States

### Basic States
\`\`\`tsx
// Unchecked (default)
<Checkbox label="Unchecked" />

// Checked
<Checkbox label="Checked" checked />

// Indeterminate (for partial selections)
<Checkbox label="Indeterminate" indeterminate />

// Disabled
<Checkbox label="Disabled" disabled />

// Disabled + Checked
<Checkbox label="Disabled Checked" disabled checked />
\`\`\`

### Validation States
\`\`\`tsx
// Required field
<Checkbox label="Required" required />

// With error
<Checkbox 
  label="Invalid field" 
  errorMessage="Please check this box"
  required
/>
\`\`\`

## Content Types

### Label Only
\`\`\`tsx
<Checkbox label="Simple checkbox" />
\`\`\`

### With Description
\`\`\`tsx
<Checkbox 
  label="Marketing emails" 
  description="Receive updates about new products and features"
/>
\`\`\`

### Required Fields
\`\`\`tsx
<Checkbox 
  label="Terms and conditions" 
  description="You must accept our terms to continue"
  required
/>
\`\`\`

## Multi-Selection Patterns

### Select All Pattern
\`\`\`tsx
const [items, setItems] = useState([
  { id: 1, label: 'Item 1', checked: false },
  { id: 2, label: 'Item 2', checked: false },
  { id: 3, label: 'Item 3', checked: false },
]);

const allChecked = items.every(item => item.checked);
const someChecked = items.some(item => item.checked);

<Checkbox
  label="Select All"
  checked={allChecked}
  indeterminate={someChecked && !allChecked}
  onChange={(e) => handleSelectAll(e.target.checked)}
/>

{items.map(item => (
  <Checkbox
    key={item.id}
    label={item.label}
    checked={item.checked}
    onChange={(e) => handleItemChange(item.id, e.target.checked)}
  />
))}
\`\`\`

## Accessibility

The Checkbox component is fully accessible with:

- **Keyboard navigation**: Tab to focus, Space to toggle
- **ARIA attributes**: Proper labeling and state communication
- **Screen reader support**: Descriptive labels and error messages
- **Focus management**: Clear focus indicators
- **Error communication**: ARIA invalid states and descriptions

\`\`\`tsx
// Accessible checkbox with all features
<Checkbox 
  label="Newsletter subscription"
  description="Get weekly updates about new features"
  errorMessage={error ? "Please make a selection" : undefined}
  required
  aria-describedby="newsletter-help"
/>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
// Basic testing
<Checkbox testId="accept-terms" label="Accept terms" />

// Form testing
<Checkbox 
  testId="newsletter-signup"
  label="Subscribe to newsletter"
  description="Get updates"
/>

// Multi-selection testing
<Checkbox testId="select-all" label="Select All" />
{items.map((item, index) => (
  <Checkbox 
    key={item.id}
    testId={\`item-\${index}\`}
    label={item.label}
  />
))}
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('accept-terms');
screen.getByTestId('newsletter-signup');
screen.getAllByTestId(/item-/);

// Testing interactions
const checkbox = screen.getByTestId('accept-terms');
fireEvent.click(checkbox);
expect(checkbox).toBeChecked();
\`\`\`

## Form Integration

\`\`\`tsx
// With form libraries (React Hook Form)
const { register, formState: { errors } } = useForm();

<Checkbox
  label="Accept terms"
  {...register('terms', { required: 'You must accept the terms' })}
  errorMessage={errors.terms?.message}
  testId="terms-checkbox"
/>

// With Formik
<Field name="newsletter">
  {({ field, meta }) => (
    <Checkbox
      label="Subscribe to newsletter"
      checked={field.value}
      onChange={field.onChange}
      errorMessage={meta.touched && meta.error ? meta.error : undefined}
      testId="newsletter-field"
    />
  )}
</Field>
\`\`\`

## Best Practices

### Do
- Use clear, descriptive labels
- Provide helpful descriptions for complex choices
- Use indeterminate state for partial selections
- Include \`testId\` for automated testing
- Handle error states gracefully
- Use required indicators for mandatory fields

### Don't
- Use checkboxes for mutually exclusive options (use radio buttons)
- Make labels too long or complex
- Forget to handle keyboard navigation
- Use disabled state without explanation
- Mix checkbox and radio button patterns

## Performance

- **Minimal re-renders**: Optimized change handling
- **Bundle size**: Lightweight with no external dependencies
- **Memory efficient**: Automatic cleanup of event listeners
- **Tree-shaking**: Only import what you use`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Field label text',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Helper text displayed below the field',
      table: {
        type: { summary: 'string' },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display (shows red styling)',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    indeterminate: {
      control: 'boolean', 
      description: 'Whether the checkbox is in indeterminate state',
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
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
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

export const WithDescription: Story = {
  args: {
    label: 'Subscribe to newsletter',
    description: 'Get updates about new features and releases',
  },
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    errorMessage: 'This field is required',
    required: true,
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Checkbox States</h3>
      <div className="space-y-3">
        <Checkbox label="Unchecked" />
        <Checkbox label="Checked" checked readOnly />
        <Checkbox label="Indeterminate" indeterminate readOnly />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Disabled Checked" disabled checked readOnly />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual and interaction states of checkboxes including normal, checked, indeterminate, and disabled states.',
      },
    },
  },
};

export const Validation: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Validation States</h3>
      <div className="space-y-3">
        <Checkbox 
          label="Required field" 
          required 
        />
        <Checkbox 
          label="Field with error" 
          errorMessage="This field is required"
          required
        />
        <Checkbox 
          label="Valid field" 
          checked
          readOnly
          description="This field has been completed"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Validation states including required fields, error messages, and success states.',
      },
    },
  },
};

export const SelectAllPattern: Story = {
  render: () => {
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
        <h3 className="text-lg font-semibold mb-4">Select All Pattern</h3>
        <div className="border rounded-lg p-4">
          <Checkbox
            label="Select All"
            checked={allChecked}
            indeterminate={someChecked && !allChecked}
            onChange={(e) => handleSelectAll(e.target.checked)}
            testId="select-all"
          />
          <div className="ml-6 mt-3 space-y-2">
            {items.map((item, index) => (
              <Checkbox
                key={item.id}
                label={item.label}
                checked={item.checked}
                onChange={(e) => handleItemChange(item.id, e.target.checked)}
                testId={`item-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Common select all pattern with indeterminate state for partial selections. Demonstrates proper use of testId for multi-item testing.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Registration Form</h3>
        <div className="space-y-3 p-4 border rounded-lg">
          <Checkbox 
            label="I agree to the terms and conditions" 
            required
            testId="terms-agreement"
          />
          <Checkbox 
            label="Subscribe to marketing emails" 
            description="Receive updates about new products and features"
            testId="marketing-emails"
          />
          <Checkbox 
            label="Remember my preferences" 
            description="Save settings for future visits"
            checked
            readOnly
            testId="remember-preferences"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Settings Panel</h3>
        <div className="space-y-3 p-4 border rounded-lg">
          <Checkbox 
            label="Enable notifications" 
            checked
            readOnly
            description="Show desktop notifications for important updates"
            testId="enable-notifications"
          />
          <Checkbox 
            label="Auto-save documents" 
            checked
            readOnly
            description="Automatically save changes every 30 seconds"
            testId="auto-save"
          />
          <Checkbox 
            label="Dark mode" 
            description="Use dark theme across the application"
            testId="dark-mode"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing checkboxes in registration forms and settings panels with proper testing IDs.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      newsletter: false,
      notifications: true,
      autoSave: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.checked }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    };

    const handleSubmit = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.terms) {
        newErrors.terms = 'You must accept the terms to continue';
      }
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
      }
    };

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold mb-4">Interactive Form</h3>
        <div className="space-y-4 p-4 border rounded-lg">
          <Checkbox
            label="I accept the terms and conditions"
            checked={formData.terms}
            onChange={handleChange('terms')}
            required
            errorMessage={errors.terms}
            testId="interactive-terms"
          />
          <Checkbox
            label="Subscribe to newsletter"
            description="Get weekly updates about new features"
            checked={formData.newsletter}
            onChange={handleChange('newsletter')}
            testId="interactive-newsletter"
          />
          <Checkbox
            label="Enable notifications"
            description="Receive important system notifications"
            checked={formData.notifications}
            onChange={handleChange('notifications')}
            testId="interactive-notifications"
          />
          <Checkbox
            label="Auto-save documents"
            description="Automatically save your work every 30 seconds"
            checked={formData.autoSave}
            onChange={handleChange('autoSave')}
            testId="interactive-autosave"
          />
          
          <div className="pt-4 border-t">
            <Button
              onClick={handleSubmit}
              testId="submit-button"
            >
              Submit Form
            </Button>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          <strong>Form State:</strong>
          <pre className="mt-2 p-2 bg-gray-100 rounded text-xs">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully interactive example demonstrating controlled checkboxes, validation, error handling, and form submission.',
      },
    },
  },
};