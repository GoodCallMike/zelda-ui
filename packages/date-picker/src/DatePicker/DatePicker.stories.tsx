import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'DatePicker/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
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