import type { Meta, StoryObj } from '@storybook/react';
import { Statistic } from './Statistic';
import { ArrowUpIcon, ArrowDownIcon, CurrencyDollarIcon } from '@jetstream/icons';

const meta: Meta<typeof Statistic> = {
  title: 'Data Display/Statistic',
  component: Statistic,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Statistic component for displaying numerical data and metrics with comprehensive accessibility and testing support.

## Overview

The Statistic component provides a flexible way to display numerical data, metrics, and statistics with formatting options, loading states, and countdown functionality. It supports custom formatters, styling, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Statistic } from '@jetstream/core';

// Basic statistic
<Statistic title="Active Users" value={2048} />

// With formatting
<Statistic 
  title="Revenue" 
  value={1234.56} 
  precision={2} 
  prefix="$" 
/>
\`\`\`

## Data Display

### Basic Numbers
\`\`\`tsx
<Statistic title="Total Sales" value={15420} />
<Statistic title="Active Users" value={2048} />
\`\`\`

### Formatted Values
\`\`\`tsx
<Statistic 
  title="Revenue" 
  value={1234567.89} 
  precision={2} 
  prefix="$" 
/>
<Statistic 
  title="Growth Rate" 
  value={23.45} 
  precision={1} 
  suffix="%" 
/>
\`\`\`

### Custom Formatting
\`\`\`tsx
<Statistic
  title="File Size"
  value={1024000}
  formatter={(value) => {
    const bytes = Number(value);
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return \`\${(bytes / Math.pow(1024, i)).toFixed(1)} \${sizes[i]}\`;
  }}
/>
\`\`\`

## Visual Enhancement

### With Icons
\`\`\`tsx
<Statistic
  title="Growth"
  value={12.5}
  suffix="%"
  prefix={<ArrowUpIcon className="w-4 h-4 text-green-500" />}
  valueStyle={{ color: '#3f8600' }}
/>
\`\`\`

### Custom Styling
\`\`\`tsx
<Statistic
  title="Revenue"
  value={234567}
  prefix="$"
  valueStyle={{ color: '#1890ff', fontSize: '2rem' }}
/>
\`\`\`

### Loading State
\`\`\`tsx
<Statistic title="Loading Data" loading />
\`\`\`

## Countdown Timer

### Basic Countdown
\`\`\`tsx
<Statistic.Countdown
  title="Sale Ends In"
  value={new Date(Date.now() + 1000 * 60 * 60 * 2)}
  onFinish={() => console.log('Sale ended!')}
/>
\`\`\`

### Custom Format
\`\`\`tsx
<Statistic.Countdown
  title="Event Countdown"
  value={deadline}
  format="DD:HH:mm:ss"
/>
\`\`\`

## Accessibility

The Statistic component is fully accessible with:

- **Semantic structure**: Proper heading and content organization
- **Screen reader support**: Meaningful titles and formatted value announcements
- **ARIA attributes**: Appropriate roles and labels for statistical data
- **Keyboard navigation**: Focusable when interactive elements are present
- **Loading states**: ARIA busy states during data loading
- **Value formatting**: Screen reader friendly number formatting

\`\`\`tsx
// Accessible statistic with all features
<Statistic
  title="Monthly Revenue"
  value={45678.90}
  precision={2}
  prefix="$"
  aria-label="Monthly revenue: $45,678.90"
  data-testid="revenue-stat"
/>
\`\`\`

## Testing

Built-in testing support with \`data-testid\` prop:

\`\`\`tsx
<Statistic 
  data-testid="user-count" 
  title="Active Users" 
  value={2048} 
/>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('user-count');
screen.getByText('Active Users');
screen.getByText('2048');
\`\`\`

## Best Practices

### Do
- Use clear, descriptive titles for statistics
- Apply appropriate number formatting (precision, separators)
- Include \`data-testid\` for reliable testing
- Use consistent styling across related statistics
- Provide loading states for dynamic data
- Use meaningful icons that enhance understanding

### Don't
- Display raw numbers without context or formatting
- Use overly complex custom formatters
- Forget to handle loading and error states
- Mix different styling approaches inconsistently
- Use unclear or abbreviated titles
- Ignore accessibility requirements for screen readers`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title or label for the statistic',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    value: {
      control: 'number',
      description: 'Numerical value to display',
      table: {
        type: { summary: 'string | number' },
      },
    },
    precision: {
      control: 'number',
      description: 'Number of decimal places to show',
      table: {
        type: { summary: 'number' },
      },
    },
    prefix: {
      control: 'text',
      description: 'Prefix content (text or icon) before the value',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    suffix: {
      control: 'text',
      description: 'Suffix content (text or icon) after the value',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    formatter: {
      control: false,
      description: 'Custom function to format the value',
      table: {
        type: { summary: '(value: string | number) => React.ReactNode' },
      },
    },
    valueStyle: {
      control: 'object',
      description: 'Custom CSS styles for the value',
      table: {
        type: { summary: 'React.CSSProperties' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with skeleton placeholder',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    'data-testid': {
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
    title: 'Active Users',
    value: 2048,
    'data-testid': 'default-statistic',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Statistic Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Statistic
            title="Basic Number"
            value={2048}
            data-testid="basic-variant"
          />
          <Statistic
            title="With Precision"
            value={23.456}
            precision={2}
            suffix="%"
            data-testid="precision-variant"
          />
          <Statistic
            title="With Prefix"
            value={1234567.89}
            precision={2}
            prefix="$"
            data-testid="prefix-variant"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different variants of the statistic component including basic numbers, precision formatting, and prefix/suffix options.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Statistic States</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Statistic
            title="Normal State"
            value={15420}
            data-testid="normal-state"
          />
          <Statistic
            title="Loading State"
            loading
            data-testid="loading-state"
          />
          <Statistic
            title="With Custom Style"
            value={98.7}
            suffix="%"
            valueStyle={{ color: '#3f8600', fontSize: '1.5rem' }}
            data-testid="styled-state"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the statistic component including normal, loading, and custom styled states.',
      },
    },
  },
};

export const Features: Story = {
  render: () => {
    const deadline = new Date(Date.now() + 1000 * 60 * 60 * 2 + 1000 * 30);
    
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Advanced Features</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">With Icons</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Statistic
                  title="Revenue"
                  value={1234567}
                  prefix={<CurrencyDollarIcon className="w-5 h-5" />}
                  valueStyle={{ color: '#3f8600' }}
                  data-testid="icon-revenue"
                />
                <Statistic
                  title="Growth"
                  value={12.5}
                  precision={1}
                  suffix="%"
                  prefix={<ArrowUpIcon className="w-5 h-5 text-green-500" />}
                  valueStyle={{ color: '#3f8600' }}
                  data-testid="icon-growth"
                />
                <Statistic
                  title="Decline"
                  value={-5.2}
                  precision={1}
                  suffix="%"
                  prefix={<ArrowDownIcon className="w-5 h-5 text-red-500" />}
                  valueStyle={{ color: '#cf1322' }}
                  data-testid="icon-decline"
                />
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Custom Formatter</h4>
              <Statistic
                title="File Size"
                value={1024000}
                formatter={(value) => {
                  const bytes = Number(value);
                  if (bytes === 0) return '0 B';
                  const k = 1024;
                  const sizes = ['B', 'KB', 'MB', 'GB'];
                  const i = Math.floor(Math.log(bytes) / Math.log(k));
                  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
                }}
                data-testid="custom-formatter"
              />
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Countdown Timer</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Statistic.Countdown
                  title="Sale Ends In"
                  value={deadline}
                  onFinish={() => alert('Sale ended!')}
                  data-testid="countdown-sale"
                />
                <Statistic.Countdown
                  title="Event Countdown"
                  value={deadline}
                  format="DD:HH:mm:ss"
                  data-testid="countdown-event"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Advanced features including icons, custom formatters, and countdown timers.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Analytics Dashboard</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 border rounded-lg">
            <Statistic
              title="Total Users"
              value={112893}
              valueStyle={{ color: '#1890ff' }}
              data-testid="dashboard-users"
            />
          </div>
          <div className="p-4 border rounded-lg">
            <Statistic
              title="Revenue"
              value={234567.89}
              precision={2}
              prefix="$"
              valueStyle={{ color: '#3f8600' }}
              data-testid="dashboard-revenue"
            />
          </div>
          <div className="p-4 border rounded-lg">
            <Statistic
              title="Growth Rate"
              value={15.6}
              precision={1}
              suffix="%"
              prefix={<ArrowUpIcon className="w-4 h-4 text-green-500" />}
              valueStyle={{ color: '#3f8600' }}
              data-testid="dashboard-growth"
            />
          </div>
          <div className="p-4 border rounded-lg">
            <Statistic
              title="Active Sessions"
              value={1024}
              suffix="/ 2048"
              valueStyle={{ color: '#722ed1' }}
              data-testid="dashboard-sessions"
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <Statistic
              title="Response Time"
              value={245}
              suffix="ms"
              valueStyle={{ color: '#1890ff' }}
              data-testid="performance-response"
            />
          </div>
          <div className="p-4 border rounded-lg">
            <Statistic
              title="Uptime"
              value={99.9}
              precision={1}
              suffix="%"
              valueStyle={{ color: '#3f8600' }}
              data-testid="performance-uptime"
            />
          </div>
          <div className="p-4 border rounded-lg">
            <Statistic
              title="Error Rate"
              value={0.02}
              precision={2}
              suffix="%"
              valueStyle={{ color: '#cf1322' }}
              data-testid="performance-errors"
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing statistics in analytics dashboards and performance monitoring with proper testing IDs.',
      },
    },
  },
};