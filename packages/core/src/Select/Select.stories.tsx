import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button, Card, Select, Typography } from 'zelda-ui-core';

const meta: Meta<typeof Select> = {
  title: 'Data Entry/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Select component provides dropdown selection functionality with comprehensive accessibility support.

\`\`\`tsx
import { Select } from 'zelda-ui-core';

// Primary usage pattern
<Select 
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]} 
/>

// Key variant
<Select 
  variant="filled" 
  label="Choose Option"
  options={options}
/>
\`\`\`

## Variants
- **default** - Standard border styling (most common)
- **filled** - Background filled styling for forms
- **borderless** - Clean minimal styling for filters

## Sizes
- **small** - Compact selects for dense layouts
- **medium** - Standard size for most use cases (default)
- **large** - Prominent selects for key selections

## Accessibility & Testing
- Uses semantic select elements with proper labeling
- Supports full keyboard navigation (Arrow keys, Enter, Escape)
- Maintains WCAG AA contrast ratios in all themes
- Comprehensive testId support for automated testing

\`\`\`tsx
// Testing approach
const select = screen.getByTestId('category-select');
await user.click(select);
await user.click(screen.getByText('Option 1'));
expect(select).toHaveValue('option1');
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'borderless'],
      description: 'Visual variant of the select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the select',
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
      description: 'Whether the select is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the select is required',
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
    options: { table: { disable: true } },
    label: { table: { disable: true } },
    placeholder: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select an option...',
    testId: 'default-select',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="space-y-3">
        <Select
          variant="default"
          label="Default"
          options={basicOptions}
          placeholder="Standard border styling"
          testId="variant-default"
        />
        <Select
          variant="filled"
          label="Filled"
          options={basicOptions}
          placeholder="Background filled styling"
          testId="variant-filled"
        />
        <Select
          variant="borderless"
          label="Borderless"
          options={basicOptions}
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
          'Select variants showing different visual styles for various use cases.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      category: '',
      priority: '',
      assignee: '',
      status: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateField = (field: string, value: string) => {
      const newErrors = { ...errors };

      if (!value) {
        newErrors[field] = 'This field is required';
      } else {
        delete newErrors[field];
      }

      setErrors(newErrors);
    };

    const handleSubmit = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.category) newErrors.category = 'Category is required';
      if (!formData.priority) newErrors.priority = 'Priority is required';
      if (!formData.assignee) newErrors.assignee = 'Assignee is required';
      setErrors(newErrors);
    };

    return (
      <div className="space-y-8 max-w-2xl p-6">
        <div className="space-y-4">
          <Typography variant="h1" color="primary" testId="task-title">
            Create New Task
          </Typography>
          <Typography variant="body" testId="task-description">
            Fill out the form below to create a new task.
          </Typography>
        </div>

        <Card>
          <Typography variant="h2" className="mb-4" testId="task-details-title">
            Task Details
          </Typography>
          <div className="space-y-4">
            <Select
              label="Category"
              options={[
                { value: 'development', label: 'Development' },
                { value: 'design', label: 'Design' },
                { value: 'testing', label: 'Testing' },
                { value: 'documentation', label: 'Documentation' },
                { value: 'maintenance', label: 'Maintenance' },
              ]}
              placeholder="Select category"
              value={formData.category}
              onChange={(value) => {
                setFormData((prev) => ({ ...prev, category: value }));
                validateField('category', value);
              }}
              status={errors.category ? 'error' : undefined}
              testId="category-select"
            />
            {errors.category && (
              <Typography
                variant="caption"
                color="danger"
                testId="category-error"
              >
                {errors.category}
              </Typography>
            )}

            <Select
              label="Priority"
              options={[
                { value: 'low', label: 'Low Priority' },
                { value: 'medium', label: 'Medium Priority' },
                { value: 'high', label: 'High Priority' },
                { value: 'urgent', label: 'Urgent' },
              ]}
              placeholder="Select priority level"
              value={formData.priority}
              onChange={(value) => {
                setFormData((prev) => ({ ...prev, priority: value }));
                validateField('priority', value);
              }}
              status={errors.priority ? 'error' : undefined}
              testId="priority-select"
            />
            {errors.priority && (
              <Typography
                variant="caption"
                color="danger"
                testId="priority-error"
              >
                {errors.priority}
              </Typography>
            )}

            <Select
              label="Assignee"
              options={[
                { value: 'john', label: 'John Smith' },
                { value: 'sarah', label: 'Sarah Johnson' },
                { value: 'mike', label: 'Mike Davis' },
                { value: 'emma', label: 'Emma Wilson' },
              ]}
              placeholder="Assign to team member"
              value={formData.assignee}
              onChange={(value) => {
                setFormData((prev) => ({ ...prev, assignee: value }));
                validateField('assignee', value);
              }}
              status={errors.assignee ? 'error' : undefined}
              testId="assignee-select"
            />
            {errors.assignee && (
              <Typography
                variant="caption"
                color="danger"
                testId="assignee-error"
              >
                {errors.assignee}
              </Typography>
            )}

            <Select
              label="Status"
              options={[
                { value: 'todo', label: 'To Do' },
                { value: 'progress', label: 'In Progress' },
                { value: 'review', label: 'In Review' },
                { value: 'done', label: 'Done' },
              ]}
              placeholder="Set initial status"
              value={formData.status}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, status: value }))
              }
              testId="status-select"
            />

            <div className="flex gap-2 pt-4">
              <Button
                variant="primary"
                onClick={handleSubmit}
                testId="create-button"
              >
                Create Task
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
            Task Created Successfully
          </Typography>
          <Typography variant="body" color="success" testId="success-message">
            Your task has been created and assigned to the team member.
          </Typography>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Select components integrated with other components in realistic task creation form scenarios.',
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
          <Select
            size="small"
            label="Small"
            options={basicOptions}
            placeholder="Small select"
            testId="small-select"
          />
          <Select
            size="medium"
            label="Medium"
            options={basicOptions}
            placeholder="Medium select (default)"
            testId="medium-select"
          />
          <Select
            size="large"
            label="Large"
            options={basicOptions}
            placeholder="Large select"
            testId="large-select"
          />
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="status-title">
          Status States
        </Typography>
        <div className="space-y-3">
          <Select
            label="Normal"
            options={basicOptions}
            placeholder="Normal state"
            testId="normal-select"
          />
          <Select
            label="Warning"
            status="warning"
            options={basicOptions}
            defaultValue="option2"
            testId="warning-select"
          />
          <Select
            label="Error"
            status="error"
            options={basicOptions}
            defaultValue="option1"
            testId="error-select"
          />
          <Select
            label="Disabled"
            disabled
            options={basicOptions}
            placeholder="Disabled select"
            testId="disabled-select"
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
            <strong>Interactive Features:</strong> Try opening the dropdown and
            selecting options.
          </Typography>
          <div className="space-y-3">
            <Select
              label="Required Field"
              required
              options={[
                { value: 'required1', label: 'Required Option 1' },
                { value: 'required2', label: 'Required Option 2' },
              ]}
              placeholder="This field is required"
              testId="required-select"
            />
            <Select
              label="With Default Value"
              options={basicOptions}
              defaultValue="option2"
              testId="default-value-select"
            />
            <Select
              label="Long Options List"
              options={[
                {
                  value: 'opt1',
                  label: 'Very Long Option Name That Might Wrap',
                },
                {
                  value: 'opt2',
                  label: 'Another Long Option Description Here',
                },
                { value: 'opt3', label: 'Short Option' },
                { value: 'opt4', label: 'Medium Length Option Name' },
              ]}
              placeholder="Select from long list"
              testId="long-options-select"
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
          'Select sizes, status states, and interactive features demonstration.',
      },
    },
  },
};
