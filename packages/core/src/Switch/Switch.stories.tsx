import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Data Entry/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    size: {
      control: 'select',
      options: ['small', 'default'],
      description: 'Size of the switch',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="space-y-4">
        <Switch 
          checked={checked} 
          onChange={setChecked}
          testId="interactive-switch"
        />
        <p className="text-sm text-gray-600">
          Switch is {checked ? 'ON' : 'OFF'}
        </p>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Switch size="small" />
        <span className="text-xs">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Switch size="default" />
        <span className="text-xs">Default</span>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Switch checked={false} />
        <p className="text-xs">Unchecked</p>
      </div>
      <div className="space-y-2">
        <Switch checked={true} />
        <p className="text-xs">Checked</p>
      </div>
      <div className="space-y-2">
        <Switch checked={false} disabled />
        <p className="text-xs">Disabled</p>
      </div>
      <div className="space-y-2">
        <Switch checked={true} disabled />
        <p className="text-xs">Disabled Checked</p>
      </div>
    </div>
  ),
};