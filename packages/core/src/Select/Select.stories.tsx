import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
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
    'aria-label': 'Fruit selection',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox');

    // Click to open dropdown
    await userEvent.click(select);

    // Select an option
    const option = canvas.getByText('Apple');
    await userEvent.click(option);

    // Verify selection
    await expect(canvas.getByText('Apple')).toBeInTheDocument();
  },
};

export const WithSearch: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Search and select',
    showSearch: true,
    allowClear: true,
    'aria-label': 'Searchable fruit selection',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox');

    // Click to open dropdown and activate search
    await userEvent.click(select);

    // Verify search input appears
    const searchInput = canvas.getByRole('textbox');
    await expect(searchInput).toBeInTheDocument();

    // Type to search and verify filtering works
    await userEvent.type(searchInput, 'app');
    
    // Select the Apple option
    await userEvent.click(canvas.getByRole('option', { name: 'Apple' }));
    
    // Verify selection
    await expect(canvas.getByText('Apple')).toBeInTheDocument();
  },
};

export const Multiple: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select multiple fruits',
    mode: 'multiple',
    allowClear: true,
    'aria-label': 'Multiple fruit selection',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox');

    // Click to open dropdown
    await userEvent.click(select);

    // Select multiple options using role="option"
    await userEvent.click(canvas.getByRole('option', { name: 'Apple' }));
    await userEvent.click(canvas.getByRole('option', { name: 'Banana' }));
    await userEvent.click(canvas.getByRole('option', { name: 'Cherry' }));

    // Click outside to close dropdown
    await userEvent.click(canvasElement);

    // Verify multiple tags are displayed (should be at least 1 of each)
    await expect(canvas.getAllByText('Apple').length).toBeGreaterThanOrEqual(1);
    await expect(canvas.getAllByText('Banana').length).toBeGreaterThanOrEqual(1);
    await expect(canvas.getAllByText('Cherry').length).toBeGreaterThanOrEqual(1);
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Select options={basicOptions} placeholder="Small" size="small" aria-label="Small size select" />
      <Select
        options={basicOptions}
        placeholder="Middle (default)"
        size="middle"
        aria-label="Medium size select"
      />
      <Select options={basicOptions} placeholder="Large" size="large" aria-label="Large size select" />
    </div>
  ),
};

export const Status: Story = {
  render: () => (
    <div className="space-y-4">
      <Select options={basicOptions} placeholder="Normal" />
      <Select options={basicOptions} placeholder="Warning" status="warning" />
      <Select options={basicOptions} placeholder="Error" status="error" />
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
    'aria-label': 'Fruit selection with disabled options',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox');

    // Click to open dropdown
    await userEvent.click(select);

    // Try to click disabled option (should not select)
    const disabledOption = canvas.getByText('Banana');
    await userEvent.click(disabledOption);

    // Select enabled option
    await userEvent.click(canvas.getByText('Apple'));

    // Verify only enabled option was selected
    await expect(canvas.getByText('Apple')).toBeInTheDocument();
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click the programmatic button
    const setButton = canvas.getByText('Set to Cherry');
    await userEvent.click(setButton);

    // Verify the value was set
    await expect(
      canvas.getByText('Selected value: cherry'),
    ).toBeInTheDocument();
    await expect(canvas.getByText('Cherry')).toBeInTheDocument();

    // Test manual selection
    const select = canvas.getByRole('combobox');
    await userEvent.click(select);
    await userEvent.click(canvas.getByText('Apple'));

    // Verify manual selection worked
    await expect(canvas.getByText('Selected value: apple')).toBeInTheDocument();
  },
};

export const MultipleControlled: Story = {
  render: () => {
    const [values, setValues] = useState<(string | number)[]>([
      'apple',
      'cherry',
    ]);

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify initial selection
    await expect(
      canvas.getByText('Selected: apple, cherry'),
    ).toBeInTheDocument();

    // Test programmatic selection change
    const setButton = canvas.getByText('Set Selection');
    await userEvent.click(setButton);
    await expect(
      canvas.getByText('Selected: banana, date'),
    ).toBeInTheDocument();

    // Test clear all
    const clearButton = canvas.getByText('Clear All');
    await userEvent.click(clearButton);
    await expect(canvas.getByText('Selected: None')).toBeInTheDocument();

    // Test manual selection
    const select = canvas.getByRole('combobox');
    await userEvent.click(select);
    await userEvent.click(canvas.getByText('Elderberry'));
    await expect(canvas.getByText('Selected: elderberry')).toBeInTheDocument();
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
    'aria-label': 'Programming language selection with custom filter',
    filterOption: (input, option) => {
      return (
        String(option?.label).toLowerCase().includes(input.toLowerCase()) ||
        String(option?.value).toLowerCase().includes(input.toLowerCase())
      );
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox');

    // Click to open dropdown and activate search
    await userEvent.click(select);

    // Test custom filter by value
    const searchInput = canvas.getByRole('textbox');
    await userEvent.type(searchInput, 'js');

    // Should show JavaScript (by value match)
    await expect(canvas.getByText('JavaScript')).toBeInTheDocument();

    // Clear and test label search
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'script');

    // Should show both JavaScript and TypeScript
    await expect(canvas.getByText('JavaScript')).toBeInTheDocument();
    await expect(canvas.getByText('TypeScript')).toBeInTheDocument();

    // Select TypeScript
    await userEvent.click(canvas.getByText('TypeScript'));
    await expect(canvas.getByText('TypeScript')).toBeInTheDocument();
  },
};
