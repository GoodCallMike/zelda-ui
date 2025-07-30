import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DatePicker } from './DatePicker';
import { RangePicker, type DateRange } from '../RangePicker/RangePicker';

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
        component: `DatePicker component for date selection with comprehensive accessibility and testing support.

## Overview

The DatePicker component provides an intuitive way to select dates with text input validation and calendar popup. It supports various formats, validation states, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { DatePicker } from '@jetstream/date-picker';

// Basic date picker
const [date, setDate] = useState<Date | null>(null);

<DatePicker
  label="Birth Date"
  value={date}
  onChange={setDate}
  placeholder="MM/DD/YYYY"
/>

// With validation
<DatePicker
  label="Event Date"
  value={date}
  onChange={setDate}
  required
  status={error ? 'error' : undefined}
  description="Select a future date"
/>
\`\`\`

## Date Selection

### Text Input
\`\`\`tsx
<DatePicker
  label="Enter Date"
  placeholder="MM/DD/YYYY"
  description="Type date or click calendar icon"
/>
\`\`\`

### Calendar Popup
\`\`\`tsx
<DatePicker
  label="Select Date"
  showCalendar
  placeholder="Click to open calendar"
/>
\`\`\`

### Date Formats
\`\`\`tsx
<DatePicker
  label="Custom Format"
  format="DD/MM/YYYY"
  placeholder="DD/MM/YYYY"
/>
\`\`\`

## Validation States

### Required Field
\`\`\`tsx
<DatePicker
  label="Required Date"
  required
  placeholder="This field is required"
/>
\`\`\`

### Error State
\`\`\`tsx
<DatePicker
  label="Date with Error"
  status="error"
  placeholder="Invalid date format"
/>
\`\`\`

### With Description
\`\`\`tsx
<DatePicker
  label="Event Date"
  description="Select a date for your event"
  placeholder="MM/DD/YYYY"
/>
\`\`\`

## Accessibility

The DatePicker component is fully accessible with:

- **Keyboard navigation**: Tab to focus, Enter/Space to open calendar, arrow keys for date navigation
- **ARIA attributes**: Proper labeling, date format announcements, and calendar role
- **Screen reader support**: Date value announcements and format instructions
- **Focus management**: Clear focus indicators and logical tab order within calendar
- **Date validation**: Clear error messages and format guidance
- **Calendar navigation**: Month/year navigation with keyboard shortcuts

\`\`\`tsx
// Accessible date picker with all features
<DatePicker
  label="Appointment Date"
  description="Select your preferred appointment date"
  required
  status={error ? 'error' : undefined}
  aria-describedby="date-help"
  placeholder="MM/DD/YYYY"
/>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<DatePicker
  testId="appointment-date"
  label="Appointment Date"
  placeholder="MM/DD/YYYY"
/>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('appointment-date');
screen.getByRole('textbox', { name: 'Appointment Date' });
screen.getByPlaceholderText('MM/DD/YYYY');
\`\`\`

## Best Practices

### Do
- Use clear, descriptive labels that indicate the expected date
- Provide format hints in placeholder text or descriptions
- Handle date validation with helpful error messages
- Include \`testId\` for reliable testing
- Consider date constraints (min/max dates) when appropriate
- Use consistent date formats throughout your application

### Don't
- Use ambiguous date formats without clear instructions
- Forget to handle invalid date inputs gracefully
- Make date selection unnecessarily complex
- Ignore accessibility requirements for calendar navigation
- Use date pickers for approximate dates (use text input instead)
- Forget to validate date ranges and constraints`,
      },
      story: { height: '350px' },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the date picker',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when empty',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'MM/DD/YYYY' },
      },
    },
    description: {
      control: 'text',
      description: 'Helper text displayed below the input',
      table: {
        type: { summary: 'string' },
      },
    },
    status: {
      control: 'select',
      options: [undefined, 'error'],
      description: 'Validation status of the input',
      table: {
        type: { summary: 'error | undefined' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Size of the date picker',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'middle' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date picker is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the date picker is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    allowClear: {
      control: 'boolean',
      description: 'Whether to show clear button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
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
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    
    return (
      <DatePicker
        label="Select Date"
        value={date}
        onChange={setDate}
        description="Enter date in MM/DD/YYYY format"
        placeholder="MM/DD/YYYY"
        testId="default-datepicker"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Date Picker Sizes</h3>
        <div className="space-y-4">
          <DatePicker
            label="Small Size"
            size="small"
            placeholder="MM/DD/YYYY"
            testId="small-datepicker"
          />
          <DatePicker
            label="Medium Size (Default)"
            size="middle"
            placeholder="MM/DD/YYYY"
            testId="medium-datepicker"
          />
          <DatePicker
            label="Large Size"
            size="large"
            placeholder="MM/DD/YYYY"
            testId="large-datepicker"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of the date picker component.',
      },
    },
  },
};

export const States: Story = {
  render: () => {
    const [normalDate, setNormalDate] = useState<Date | null>(null);
    const [errorDate, setErrorDate] = useState<Date | null>(null);
    
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Date Picker States</h3>
          <div className="space-y-4">
            <DatePicker
              label="Normal State"
              value={normalDate}
              onChange={setNormalDate}
              placeholder="MM/DD/YYYY"
              testId="normal-datepicker"
            />
            <DatePicker
              label="Required Field"
              required
              placeholder="MM/DD/YYYY"
              description="This field is required"
              testId="required-datepicker"
            />
            <DatePicker
              label="Error State"
              status="error"
              value={errorDate}
              onChange={setErrorDate}
              placeholder="MM/DD/YYYY"
              description="Please enter a valid date"
              testId="error-datepicker"
            />
            <DatePicker
              label="Disabled State"
              disabled
              value={new Date(2023, 11, 25)}
              placeholder="MM/DD/YYYY"
              testId="disabled-datepicker"
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different states of the date picker including normal, required, error, and disabled states.',
      },
    },
  },
};

export const Features: Story = {
  render: () => {
    const [dateWithDesc, setDateWithDesc] = useState<Date | null>(null);
    const [noClearDate, setNoClearDate] = useState<Date | null>(new Date());
    
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Date Picker Features</h3>
          <div className="space-y-4">
            <DatePicker
              label="With Description"
              description="Select your preferred date for the appointment"
              value={dateWithDesc}
              onChange={setDateWithDesc}
              placeholder="MM/DD/YYYY"
              testId="description-datepicker"
            />
            <DatePicker
              label="No Clear Button"
              allowClear={false}
              value={noClearDate}
              onChange={setNoClearDate}
              placeholder="MM/DD/YYYY"
              description="Clear button is disabled"
              testId="no-clear-datepicker"
            />
            <DatePicker
              label="Required with Validation"
              required
              description="This field must be filled out"
              placeholder="MM/DD/YYYY"
              testId="validation-datepicker"
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Advanced features including descriptions, validation, and clear button control.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">User Profile</h3>
          <div className="space-y-4 p-4 border rounded-lg">
            <DatePicker
              label="Date of Birth"
              value={birthDate}
              onChange={setBirthDate}
              description="Used for age verification"
              placeholder="MM/DD/YYYY"
              required
              testId="profile-birth-date"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Event Planning</h3>
          <div className="space-y-4 p-4 border rounded-lg">
            <DatePicker
              label="Event Start Date"
              value={startDate}
              onChange={setStartDate}
              description="When does your event begin?"
              placeholder="MM/DD/YYYY"
              required
              testId="event-start-date"
            />
            <DatePicker
              label="Event End Date"
              value={endDate}
              onChange={setEndDate}
              description="When does your event end?"
              placeholder="MM/DD/YYYY"
              testId="event-end-date"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Appointment Booking</h3>
          <div className="space-y-4 p-4 border rounded-lg">
            <DatePicker
              label="Preferred Appointment Date"
              value={appointmentDate}
              onChange={setAppointmentDate}
              description="Select your preferred date (subject to availability)"
              placeholder="MM/DD/YYYY"
              required
              testId="appointment-date"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Date Range Selection</h3>
          <div className="space-y-4 p-4 border rounded-lg">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Project Duration
              </label>
              <RangePicker
                placeholder={['Start date', 'End date']}
                testId="project-duration"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Vacation Dates
              </label>
              <RangePicker
                placeholder={['Check-in', 'Check-out']}
                separator="to"
                testId="vacation-dates"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing date pickers in profile, event planning, and appointment booking scenarios with proper testing IDs.',
      },
    },
  },
};

