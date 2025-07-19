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
        component: `Statistic component for displaying statistical data with formatting options.

## Usage

\`\`\`tsx
import { Statistic } from '@jetstream/core';

<Statistic title="Active Users" value={2048} />
<Statistic title="Revenue" value={1234.56} precision={2} prefix="$" />
<Statistic.Countdown title="Sale Ends" value={deadline} onFinish={() => alert('Finished!')} />
\`\`\`

## Features

- **Flexible formatting** - Custom formatters, precision, prefix/suffix
- **Loading state** - Skeleton placeholder while loading
- **Countdown** - Built-in countdown timer functionality
- **Styling** - Custom value styling support`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the statistic',
    },
    value: {
      control: 'number',
      description: 'Value to display',
    },
    precision: {
      control: 'number',
      description: 'Decimal precision',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Active Users',
    value: 2048,
  },
};

export const WithPrecision: Story = {
  args: {
    title: 'Conversion Rate',
    value: 23.456,
    precision: 2,
    suffix: '%',
  },
};

export const WithPrefixSuffix: Story = {
  args: {
    title: 'Revenue',
    value: 1234567.89,
    precision: 2,
    prefix: '$',
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <Statistic
        title="Revenue"
        value={1234567}
        prefix={<CurrencyDollarIcon className="w-5 h-5" />}
        valueStyle={{ color: '#3f8600' }}
      />
      <Statistic
        title="Growth"
        value={12.5}
        precision={1}
        suffix="%"
        prefix={<ArrowUpIcon className="w-5 h-5 text-green-500" />}
        valueStyle={{ color: '#3f8600' }}
      />
      <Statistic
        title="Decline"
        value={-5.2}
        precision={1}
        suffix="%"
        prefix={<ArrowDownIcon className="w-5 h-5 text-red-500" />}
        valueStyle={{ color: '#cf1322' }}
      />
    </div>
  ),
};

export const CustomFormatter: Story = {
  args: {
    title: 'File Size',
    value: 1024000,
    formatter: (value) => {
      const bytes = Number(value);
      if (bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
    },
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Data',
    loading: true,
  },
};

export const Countdown: Story = {
  render: () => {
    const deadline = new Date(Date.now() + 1000 * 60 * 60 * 2 + 1000 * 30); // 2 hours 30 seconds from now
    
    return (
      <div className="grid grid-cols-2 gap-6">
        <Statistic.Countdown
          title="Sale Ends In"
          value={deadline}
          onFinish={() => alert('Sale ended!')}
        />
        <Statistic.Countdown
          title="Event Countdown"
          value={deadline}
          format="DD:HH:mm:ss"
        />
      </div>
    );
  },
};

export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="p-4 border rounded-lg">
        <Statistic
          title="Total Users"
          value={112893}
          valueStyle={{ color: '#1890ff' }}
        />
      </div>
      <div className="p-4 border rounded-lg">
        <Statistic
          title="Revenue"
          value={234567.89}
          precision={2}
          prefix="$"
          valueStyle={{ color: '#3f8600' }}
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
        />
      </div>
      <div className="p-4 border rounded-lg">
        <Statistic
          title="Active Sessions"
          value={1024}
          suffix="/ 2048"
          valueStyle={{ color: '#722ed1' }}
        />
      </div>
    </div>
  ),
};