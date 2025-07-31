import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { RangePicker, type DateRange } from './RangePicker';

const meta: Meta<typeof RangePicker> = {
  title: 'Data Entry/RangePicker',
  component: RangePicker,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `RangePicker component for date range selection with comprehensive accessibility and testing support.

## Overview

The RangePicker component provides an intuitive way to select date ranges with dual text inputs and calendar popup. It supports various formats, validation states, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { RangePicker, type DateRange } from '@zelda/date-picker';

// Basic range picker
const [range, setRange] = useState<DateRange | null>(null);

<RangePicker
  value={range}
  onChange={setRange}
  placeholder={['Start date', 'End date']}
/>

// With validation
<RangePicker
  value={range}
  onChange={setRange}
  status={error ? 'error' : undefined}
  placeholder={['From', 'To']}
/>
\`\`\`

## Range Selection

### Dual Input Mode
\`\`\`tsx
<RangePicker
  placeholder={['Check-in', 'Check-out']}
  separator="to"
/>
\`\`\`

### Allow Empty Dates
\`\`\`tsx
<RangePicker
  allowEmpty={[true, true]}
  placeholder={['Optional start', 'Optional end']}
/>
\`\`\`

### Custom Separator
\`\`\`tsx
<RangePicker
  separator="→"
  placeholder={['From date', 'To date']}
/>
\`\`\`

## Validation States

### Error State
\`\`\`tsx
<RangePicker
  status="error"
  placeholder={['Invalid range', 'Fix dates']}
/>
\`\`\`

### Disabled States
\`\`\`tsx
<RangePicker
  disabled={[false, true]}
  placeholder={['Enabled', 'Disabled']}
/>
\`\`\`

## Accessibility

The RangePicker component is fully accessible with:

- **Keyboard navigation**: Tab between inputs, Enter/Space to open calendar
- **ARIA attributes**: Proper labeling and range announcements
- **Screen reader support**: Clear indication of start/end date selection
- **Focus management**: Logical tab order and focus indicators
- **Range validation**: Clear error messages for invalid ranges
- **Calendar navigation**: Accessible date selection with range highlighting

\`\`\`tsx
// Accessible range picker
<RangePicker
  placeholder={['Start date', 'End date']}
  testId="date-range"
  aria-label="Select date range"
/>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<RangePicker
  testId="booking-dates"
  placeholder={['Check-in', 'Check-out']}
/>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('booking-dates');
screen.getByTestId('booking-dates-start');
screen.getByTestId('booking-dates-end');
screen.getByTestId('booking-dates-clear');
\`\`\`

## Best Practices

### Do
- Use clear, descriptive placeholder text for both inputs
- Provide appropriate date format hints
- Handle range validation (start before end)
- Include \`testId\` for reliable testing
- Consider using allowEmpty for optional date ranges
- Use consistent separators throughout your application

### Don't
- Make both inputs required when one could be optional
- Use confusing separator symbols
- Forget to validate date range logic
- Ignore accessibility requirements for dual inputs
- Use range pickers for single date selection
- Make the interface overly complex with too many options`,
      },
      story: { height: '350px' },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'object',
      description: 'Placeholder text for start and end inputs',
      table: {
        type: { summary: '[string, string]' },
        defaultValue: { summary: "['Start date', 'End date']" },
      },
    },
    separator: {
      control: 'text',
      description: 'Separator between the two inputs',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: '~' },
      },
    },
    format: {
      control: 'text',
      description: 'Date format for display',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'MM/dd/yyyy' },
      },
    },
    disabled: {
      control: 'object',
      description: 'Disabled state for inputs',
      table: {
        type: { summary: 'boolean | [boolean, boolean]' },
        defaultValue: { summary: 'false' },
      },
    },
    allowEmpty: {
      control: 'object',
      description: 'Allow empty start or end dates',
      table: {
        type: { summary: '[boolean, boolean]' },
        defaultValue: { summary: '[false, false]' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Size of the range picker',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'middle' },
      },
    },
    status: {
      control: 'select',
      options: [undefined, 'error', 'warning'],
      description: 'Validation status of the inputs',
      table: {
        type: { summary: 'error | warning | undefined' },
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | null>(null);
    
    return (
      <RangePicker
        value={range}
        onChange={setRange}
        placeholder={['Start date', 'End date']}
        testId="default-rangepicker"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [smallRange, setSmallRange] = useState<DateRange | null>(null);
    const [mediumRange, setMediumRange] = useState<DateRange | null>(null);
    const [largeRange, setLargeRange] = useState<DateRange | null>(null);
    
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Range Picker Sizes</h3>
          <div className="space-y-4">
            <RangePicker
              size="small"
              value={smallRange}
              onChange={setSmallRange}
              placeholder={['Small start', 'Small end']}
              testId="small-rangepicker"
            />
            <RangePicker
              size="middle"
              value={mediumRange}
              onChange={setMediumRange}
              placeholder={['Medium start', 'Medium end']}
              testId="medium-rangepicker"
            />
            <RangePicker
              size="large"
              value={largeRange}
              onChange={setLargeRange}
              placeholder={['Large start', 'Large end']}
              testId="large-rangepicker"
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of the range picker component.',
      },
    },
  },
};

export const States: Story = {
  render: () => {
    const [normalRange, setNormalRange] = useState<DateRange | null>(null);
    const [errorRange, setErrorRange] = useState<DateRange | null>(null);
    
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Range Picker States</h3>
          <div className="space-y-4">
            <RangePicker
              value={normalRange}
              onChange={setNormalRange}
              placeholder={['Normal start', 'Normal end']}
              testId="normal-rangepicker"
            />
            <RangePicker
              status="error"
              value={errorRange}
              onChange={setErrorRange}
              placeholder={['Error start', 'Error end']}
              testId="error-rangepicker"
            />
            <RangePicker
              disabled
              placeholder={['Disabled start', 'Disabled end']}
              testId="disabled-rangepicker"
            />
            <RangePicker
              disabled={[false, true]}
              placeholder={['Enabled start', 'Disabled end']}
              testId="partial-disabled-rangepicker"
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different states including normal, error, disabled, and partially disabled states.',
      },
    },
  },
};

export const Features: Story = {
  render: () => {
    const [customSepRange, setCustomSepRange] = useState<DateRange | null>(null);
    const [allowEmptyRange, setAllowEmptyRange] = useState<DateRange | null>(null);
    const [noClearRange, setNoClearRange] = useState<DateRange | null>({
      start: new Date(),
      end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    });
    
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Range Picker Features</h3>
          <div className="space-y-4">
            <RangePicker
              value={customSepRange}
              onChange={setCustomSepRange}
              separator="to"
              placeholder={['Check-in', 'Check-out']}
              testId="custom-separator-rangepicker"
            />
            <RangePicker
              value={allowEmptyRange}
              onChange={setAllowEmptyRange}
              allowEmpty={[true, true]}
              placeholder={['Optional start', 'Optional end']}
              testId="allow-empty-rangepicker"
            />
            <RangePicker
              value={noClearRange}
              onChange={setNoClearRange}
              allowClear={false}
              placeholder={['No clear start', 'No clear end']}
              testId="no-clear-rangepicker"
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Advanced features including custom separators, empty date handling, and clear button control.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [bookingRange, setBookingRange] = useState<DateRange | null>(null);
    const [eventRange, setEventRange] = useState<DateRange | null>(null);
    const [reportRange, setReportRange] = useState<DateRange | null>(null);
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Hotel Booking</h3>
          <div className="space-y-4 p-4 border rounded-lg">
            <RangePicker
              label="Stay Duration"
              description="Select your check-in and check-out dates"
              value={bookingRange}
              onChange={setBookingRange}
              placeholder={['Check-in date', 'Check-out date']}
              separator="to"
              required
              testId="hotel-booking-dates"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Event Planning</h3>
          <div className="space-y-4 p-4 border rounded-lg">
            <RangePicker
              label="Event Duration"
              description="When does your event start and end?"
              value={eventRange}
              onChange={setEventRange}
              placeholder={['Event start', 'Event end']}
              separator="→"
              testId="event-planning-dates"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Report Generation</h3>
          <div className="space-y-4 p-4 border rounded-lg">
            <RangePicker
              label="Report Period"
              description="Select the date range for your report"
              value={reportRange}
              onChange={setReportRange}
              allowEmpty={[false, true]}
              placeholder={['From date', 'To date (optional)']}
              testId="report-date-range"
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing range pickers in booking, event planning, and reporting scenarios.',
      },
    },
  },
};