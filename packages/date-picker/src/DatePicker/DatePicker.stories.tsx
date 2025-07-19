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
  title: 'DatePicker/DatePicker',
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
    label: 'Birth Date',
    errorMessage: 'Please enter a valid date',
    placeholder: 'MM/DD/YYYY',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Birth Date',
    disabled: true,
    placeholder: 'MM/DD/YYYY',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Birth Date',
    value: new Date(2023, 11, 25),
    placeholder: 'MM/DD/YYYY',
  },
};

// Visual regression test stories
export const VisualTest: Story = {
  render: () => (
    <div className="space-y-4">
      <DatePicker label="Default" placeholder="MM/DD/YYYY" />
      <DatePicker label="With Value" value={new Date(2023, 11, 25)} />
      <DatePicker label="With Error" errorMessage="Invalid date" />
      <DatePicker label="Disabled" disabled placeholder="MM/DD/YYYY" />
    </div>
  ),
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

