import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Data Entry/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Select component for choosing from a list of options.

## Usage

\`\`\`tsx
import { Select } from '@jetstream/core';

<Select
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]}
  onChange={(value) => console.log(value)}
/>
\`\`\`

## Features

- **Single/Multiple selection** - Support for single and multiple selection modes
- **Search functionality** - Built-in search with custom filtering
- **Clear option** - Optional clear button
- **Sizes** - Small, middle, and large sizes
- **Status states** - Error and warning states
- **Disabled options** - Individual option disable support`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Size of the select',
    },
    status: {
      control: 'select',
      options: [undefined, 'error', 'warning'],
      description: 'Status of the select',
    },
    mode: {
      control: 'select',
      options: [undefined, 'multiple', 'tags'],
      description: 'Selection mode',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    allowClear: {
      control: 'boolean',
      description: 'Whether to show clear button',
    },
    showSearch: {
      control: 'boolean',
      description: 'Whether to show search input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select a fruit',
  },
};

export const WithSearch: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Search and select',
    showSearch: true,
    allowClear: true,
  },
};

export const Multiple: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select multiple fruits',
    mode: 'multiple',
    allowClear: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Select
        options={basicOptions}
        placeholder="Small"
        size="small"
      />
      <Select
        options={basicOptions}
        placeholder="Middle (default)"
        size="middle"
      />
      <Select
        options={basicOptions}
        placeholder="Large"
        size="large"
      />
    </div>
  ),
};

export const Status: Story = {
  render: () => (
    <div className="space-y-4">
      <Select
        options={basicOptions}
        placeholder="Normal"
      />
      <Select
        options={basicOptions}
        placeholder="Warning"
        status="warning"
      />
      <Select
        options={basicOptions}
        placeholder="Error"
        status="error"
      />
    </div>
  ),
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana', disabled: true },
      { value: 'cherry', label: 'Cherry' },
      { value: 'date', label: 'Date', disabled: true },
      { value: 'elderberry', label: 'Elderberry' },
    ],
    placeholder: 'Some options disabled',
  },
};

export const Disabled: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Disabled select',
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>();
    
    return (
      <div className="space-y-4">
        <Select
          options={basicOptions}
          value={value}
          onChange={(newValue) => setValue(newValue as string)}
          placeholder="Controlled select"
          allowClear
        />
        <p className="text-sm text-gray-600">
          Selected value: {value || 'None'}
        </p>
        <button
          onClick={() => setValue('cherry')}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
        >
          Set to Cherry
        </button>
      </div>
    );
  },
};

export const MultipleControlled: Story = {
  render: () => {
    const [values, setValues] = useState<(string | number)[]>(['apple', 'cherry']);
    
    return (
      <div className="space-y-4">
        <Select
          options={basicOptions}
          value={values}
          onChange={(newValues) => setValues(newValues as (string | number)[])}
          placeholder="Multiple controlled"
          mode="multiple"
          allowClear
        />
        <p className="text-sm text-gray-600">
          Selected: {values.length > 0 ? values.join(', ') : 'None'}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setValues(['banana', 'date'])}
            className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            Set Selection
          </button>
          <button
            onClick={() => setValues([])}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
          >
            Clear All
          </button>
        </div>
      </div>
    );
  },
};

export const CustomFilter: Story = {
  args: {
    options: [
      { value: 'js', label: 'JavaScript' },
      { value: 'ts', label: 'TypeScript' },
      { value: 'py', label: 'Python' },
      { value: 'java', label: 'Java' },
      { value: 'cpp', label: 'C++' },
      { value: 'rust', label: 'Rust' },
    ],
    placeholder: 'Search programming languages',
    showSearch: true,
    filterOption: (input, option) => {
      return String(option?.label).toLowerCase().includes(input.toLowerCase()) ||
             String(option?.value).toLowerCase().includes(input.toLowerCase());
    },
  },
};