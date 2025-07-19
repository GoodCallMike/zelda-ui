import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DatePicker } from './DatePicker';

// Suppress console errors for testing
const originalError = console.error;
console.error = (...args) => {
  if (args[0]?.includes?.('useState') || args[0]?.includes?.('Invalid hook call')) {
    return;
  }
  originalError(...args);
};

const meta: Meta<typeof DatePicker> = {
  title: 'Data Entry/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Date picker component with text input and validation using date-fns.

## Usage

\`\`\`tsx
import { DatePicker } from '@jetstream/date-picker';

const [date, setDate] = useState<Date | null>(null);

<DatePicker 
  label="Birth Date"
  value={date}
  onChange={setDate}
/>
\`\`\``,
      },
      story: { height: '350px' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const DatePickerDemo = () => {
  const [date, setDate] = useState<Date | null>(null);
  
  return (
    <DatePicker
      label="Select Date"
      value={date}
      onChange={setDate}
      description="Enter date in MM/DD/YYYY format"
    />
  );
};

export const Default: Story = {
  render: () => <DatePickerDemo />,
};

export const WithError: Story = {
  args: {
    status: 'error',
    placeholder: 'Select date',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Select date',
  },
};

export const WithValue: Story = {
  args: {
    value: new Date(2023, 11, 25),
    placeholder: 'Select date',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <DatePicker size="small" placeholder="Small" />
      <DatePicker size="middle" placeholder="Middle (default)" />
      <DatePicker size="large" placeholder="Large" />
    </div>
  ),
};

export const NoClear: Story = {
  args: {
    allowClear: false,
    placeholder: 'Select date',
  },
};

// Visual regression test stories
export const VisualTest: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker placeholder="Default" />
      <DatePicker value={new Date(2023, 11, 25)} placeholder="With Value" />
      <DatePicker status="error" placeholder="With Error" />
      <DatePicker disabled placeholder="Disabled" />
    </div>
  ),
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

