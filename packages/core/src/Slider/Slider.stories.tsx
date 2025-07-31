import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Data Entry/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Slider component for selecting numeric values within a range with comprehensive accessibility and testing support.

## Overview

The Slider component provides a way to select numeric values by dragging a thumb along a track. It supports custom ranges, step increments, tooltips, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Slider } from '@zelda/core';

// Basic usage
<Slider value={50} onChange={setValue} />

// With custom range and step
<Slider 
  value={volume} 
  onChange={setVolume}
  min={0}
  max={100}
  step={5}
  tooltip
/>
\`\`\`

## Ranges

### Default Range (0-100)
\`\`\`tsx
<Slider value={50} onChange={handleChange} />
\`\`\`

### Custom Range
\`\`\`tsx
<Slider value={25} min={0} max={50} onChange={handleChange} />
\`\`\`

### With Step Increment
\`\`\`tsx
<Slider value={20} min={0} max={100} step={10} onChange={handleChange} />
\`\`\`

## Features

### With Tooltip
\`\`\`tsx
<Slider value={75} tooltip onChange={handleChange} />
\`\`\`

### Disabled State
\`\`\`tsx
<Slider value={30} disabled onChange={handleChange} />
\`\`\`

## Accessibility

The Slider component is fully accessible with:

- **Keyboard navigation**: Arrow keys to adjust value, Home/End for min/max
- **Screen reader support**: Proper ARIA attributes and role
- **Focus management**: Clear focus indicators and logical tab order
- **Value communication**: Current value properly announced

\`\`\`tsx
// Accessible slider with proper labeling
<label>
  Volume Level
  <Slider 
    value={volume} 
    onChange={setVolume}
    min={0}
    max={100}
    aria-label="Volume level"
  />
</label>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Slider 
  testId="volume-slider"
  value={volume}
  onChange={setVolume}
/>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('volume-slider');
screen.getByRole('slider', { name: 'Volume level' });
\`\`\`

## Best Practices

### Do
- Use clear labels that describe what the slider controls
- Set appropriate min, max, and step values for the use case
- Provide visual feedback during interaction
- Include \`testId\` for reliable testing

### Don't
- Use sliders for precise numeric input (use TextField instead)
- Make the slider track too narrow to interact with
- Forget to handle edge cases (min/max values)
- Use sliders without clear labeling
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value of the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    onChange: {
      control: false,
      description: 'Change handler function',
      table: {
        type: { summary: '(value: number) => void' },
      },
    },
    min: {
      control: 'number',
      description: 'Minimum value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    step: {
      control: 'number',
      description: 'Step increment',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    tooltip: {
      control: 'boolean',
      description: 'Whether to show value tooltip on drag',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
  args: {
    value: 50,
  },
};

export const WithTooltip: Story = {
  args: {
    value: 75,
    tooltip: true,
  },
};

export const CustomRange: Story = {
  args: {
    value: 25,
    min: 0,
    max: 50,
  },
};

export const WithStep: Story = {
  args: {
    value: 20,
    min: 0,
    max: 100,
    step: 10,
  },
};

export const Disabled: Story = {
  args: {
    value: 30,
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    
    return (
      <div className="w-64 space-y-4">
        <Slider 
          value={value} 
          onChange={setValue}
          tooltip
          testId="interactive-slider"
        />
        <p className="text-sm text-gray-600">
          Value: {value}
        </p>
      </div>
    );
  },
};

export const Ranges: Story = {
  render: () => (
    <div className="w-64 space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Default (0-100)</label>
        <Slider value={50} testId="default-range-slider" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Custom (0-50)</label>
        <Slider value={25} min={0} max={50} testId="custom-range-slider" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">With Step (0-100, step 10)</label>
        <Slider value={30} min={0} max={100} step={10} testId="step-slider" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different range configurations and step increments.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="w-64 space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Normal</label>
        <Slider value={40} testId="normal-slider" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">With Tooltip</label>
        <Slider value={60} tooltip testId="tooltip-slider" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Disabled</label>
        <Slider value={30} disabled testId="disabled-slider" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the slider including normal, tooltip, and disabled.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [volume, setVolume] = useState(75);
    const [brightness, setBrightness] = useState(50);
    const [temperature, setTemperature] = useState(22);
    const [price, setPrice] = useState(250);

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Settings Panel</h3>
          <div className="space-y-6 p-4 border rounded-lg w-80">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">Volume</label>
                <span className="text-sm text-gray-500">{volume}%</span>
              </div>
              <Slider 
                value={volume} 
                onChange={setVolume}
                min={0}
                max={100}
                step={5}
                testId="volume-slider"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">Brightness</label>
                <span className="text-sm text-gray-500">{brightness}%</span>
              </div>
              <Slider 
                value={brightness} 
                onChange={setBrightness}
                tooltip
                testId="brightness-slider"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">Temperature</label>
                <span className="text-sm text-gray-500">{temperature}°C</span>
              </div>
              <Slider 
                value={temperature} 
                onChange={setTemperature}
                min={16}
                max={30}
                step={0.5}
                testId="temperature-slider"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">Price Range</label>
                <span className="text-sm text-gray-500">${price}</span>
              </div>
              <Slider 
                value={price} 
                onChange={setPrice}
                min={0}
                max={500}
                step={25}
                tooltip
                testId="price-slider"
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
        story: 'Real-world examples showing sliders in a settings panel with different ranges and steps.',
      },
    },
  },
};