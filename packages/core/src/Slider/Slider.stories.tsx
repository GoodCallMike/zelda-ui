import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Typography } from '../Typography';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'General/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Slider component for selecting numeric values with magical Link-Zelda theming and smooth interactions.

## Overview

The Slider component provides an intuitive way to select numeric values within a range, featuring the signature Link-Zelda design with golden tracks and magical glow effects.

## Quick Start

\`\`\`tsx
import { Slider } from '@zelda/core';

// Basic slider
<Slider defaultValue={50} />

// Controlled slider
const [value, setValue] = useState(25);
<Slider value={value} onChange={setValue} />
\`\`\`

## Features

### Magical Interactions
- **Golden track**: Triforce gold with green rupee accents
- **Hover effects**: Thumb scales and glows on interaction
- **Drag animation**: Magical glow pulse when dragging
- **Pixel-perfect styling**: Retro game aesthetic

### Accessibility
- **Keyboard navigation**: Arrow keys, Home, End support
- **Screen reader support**: Proper ARIA attributes
- **Focus indicators**: Clear visual focus states
- **Disabled state**: Proper visual and interaction feedback

## Best Practices

### Do
- Use for volume controls, settings, and numeric ranges
- Provide clear labels for the slider's purpose
- Consider the min/max range carefully for usability

### Don't
- Use for binary choices (use Toggle instead)
- Make the range too large without proper step values
- Forget to handle the onChange callback`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value (controlled)',
      table: {
        type: { summary: 'number' },
      },
    },
    defaultValue: {
      control: 'number',
      description: 'Default value (uncontrolled)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
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
    disabled: {
      control: 'boolean',
      description: 'Whether slider is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 50,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(25);

    return (
      <div className="space-y-4">
        <Typography variant="body1">
          Current value: <strong>{value}</strong>
        </Typography>
        <Slider value={value} onChange={setValue} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controlled slider with state management showing the current value.',
      },
    },
  },
};

export const CustomRange: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Typography variant="h4" className="mb-2">
          Volume (0-10)
        </Typography>
        <Slider min={0} max={10} defaultValue={7} step={1} />
      </div>
      <div>
        <Typography variant="h4" className="mb-2">
          Temperature (-20°C to 40°C)
        </Typography>
        <Slider min={-20} max={40} defaultValue={22} step={0.5} />
      </div>
      <div>
        <Typography variant="h4" className="mb-2">
          Percentage (0% to 100%)
        </Typography>
        <Slider min={0} max={100} defaultValue={75} step={5} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Sliders with different ranges and step values for various use cases.',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="body1">This slider is disabled</Typography>
      <Slider defaultValue={60} disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled slider showing reduced opacity and no interaction.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-6 rounded space-y-6">
      <Typography variant="h3" className="mb-4">
        🌙 Mystical Controls
      </Typography>
      <div>
        <Typography variant="body1" className="mb-2">
          Magic Power
        </Typography>
        <Slider defaultValue={80} />
      </div>
      <div>
        <Typography variant="body1" className="mb-2">
          Shadow Intensity
        </Typography>
        <Slider defaultValue={45} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Dark mode transforms the slider with purple mystical theming and enhanced green accents.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => {
    const [audioSettings, setAudioSettings] = useState({
      master: 75,
      music: 60,
      effects: 80,
      voice: 70,
    });

    const [gameSettings, setGameSettings] = useState({
      difficulty: 3,
      brightness: 50,
      mouseSensitivity: 25,
    });

    return (
      <div className="space-y-8 max-w-2xl">
        <div className="p-6 border rounded-lg">
          <Typography variant="h3" className="mb-6">
            🎵 Audio Settings
          </Typography>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="body1">Master Volume</Typography>
                <Typography variant="body2" className="text-gray-600">
                  {audioSettings.master}%
                </Typography>
              </div>
              <Slider
                value={audioSettings.master}
                onChange={(value) =>
                  setAudioSettings((prev) => ({ ...prev, master: value }))
                }
                min={0}
                max={100}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="body1">Music Volume</Typography>
                <Typography variant="body2" className="text-gray-600">
                  {audioSettings.music}%
                </Typography>
              </div>
              <Slider
                value={audioSettings.music}
                onChange={(value) =>
                  setAudioSettings((prev) => ({ ...prev, music: value }))
                }
                min={0}
                max={100}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="body1">Sound Effects</Typography>
                <Typography variant="body2" className="text-gray-600">
                  {audioSettings.effects}%
                </Typography>
              </div>
              <Slider
                value={audioSettings.effects}
                onChange={(value) =>
                  setAudioSettings((prev) => ({ ...prev, effects: value }))
                }
                min={0}
                max={100}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="body1">Voice Volume</Typography>
                <Typography variant="body2" className="text-gray-600">
                  {audioSettings.voice}%
                </Typography>
              </div>
              <Slider
                value={audioSettings.voice}
                onChange={(value) =>
                  setAudioSettings((prev) => ({ ...prev, voice: value }))
                }
                min={0}
                max={100}
              />
            </div>
          </div>
        </div>

        <div className="p-6 border rounded-lg">
          <Typography variant="h3" className="mb-6">
            ⚙️ Game Settings
          </Typography>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="body1">Difficulty</Typography>
                <Typography variant="body2" className="text-gray-600">
                  {
                    ['Easy', 'Normal', 'Hard', 'Expert', 'Master'][
                      gameSettings.difficulty - 1
                    ]
                  }
                </Typography>
              </div>
              <Slider
                value={gameSettings.difficulty}
                onChange={(value) =>
                  setGameSettings((prev) => ({ ...prev, difficulty: value }))
                }
                min={1}
                max={5}
                step={1}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="body1">Brightness</Typography>
                <Typography variant="body2" className="text-gray-600">
                  {gameSettings.brightness}%
                </Typography>
              </div>
              <Slider
                value={gameSettings.brightness}
                onChange={(value) =>
                  setGameSettings((prev) => ({ ...prev, brightness: value }))
                }
                min={0}
                max={100}
                step={5}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="body1">Mouse Sensitivity</Typography>
                <Typography variant="body2" className="text-gray-600">
                  {gameSettings.mouseSensitivity / 10}
                </Typography>
              </div>
              <Slider
                value={gameSettings.mouseSensitivity}
                onChange={(value) =>
                  setGameSettings((prev) => ({
                    ...prev,
                    mouseSensitivity: value,
                  }))
                }
                min={1}
                max={50}
                step={1}
              />
            </div>
          </div>
        </div>

        <div className="dark p-6 bg-gray-900 rounded-lg">
          <Typography variant="h3" className="mb-6">
            🌙 Night Mode Settings
          </Typography>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="body1">Shadow Quality</Typography>
                <Typography variant="body2">High</Typography>
              </div>
              <Slider defaultValue={80} />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="body1">Mystical Effects</Typography>
                <Typography variant="body2">Enhanced</Typography>
              </div>
              <Slider defaultValue={90} />
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Real-world examples showing Slider components in audio settings, game configuration, and dark mode interfaces with proper labeling and value display.',
      },
    },
  },
};
