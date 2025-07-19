import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'size',
    value: 'medium',
    label: 'Medium',
  },
};

export const WithDescription: Story = {
  args: {
    name: 'plan',
    value: 'pro',
    label: 'Pro Plan',
    description: 'Best for growing teams',
  },
};

export const WithError: Story = {
  args: {
    name: 'required',
    value: 'option',
    label: 'Required option',
    errorMessage: 'Please select an option',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    value: 'option',
    label: 'Disabled option',
    disabled: true,
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('medium');
    const options = [
      { value: 'small', label: 'Small', description: 'For personal use' },
      { value: 'medium', label: 'Medium', description: 'For small teams' },
      { value: 'large', label: 'Large', description: 'For enterprises' },
    ];

    return (
      <div className="space-y-4">
        <h3 className="font-medium">Choose a size:</h3>
        {options.map((option) => (
          <Radio
            key={option.value}
            name="size"
            value={option.value}
            label={option.label}
            description={option.description}
            checked={selected === option.value}
            onChange={(e) => setSelected(e.target.value)}
          />
        ))}
      </div>
    );
  },
};