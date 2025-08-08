import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button, Card, Slider, Typography } from 'zelda-ui-core';

const meta: Meta<typeof Slider> = {
  title: 'Data Entry/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Slider component provides intuitive numeric value selection with comprehensive accessibility support.

\`\`\`tsx
import { Slider } from 'zelda-ui-core';

// Primary usage pattern
<Slider defaultValue={50} />

// Key variant
<Slider 
  value={value} 
  onChange={setValue}
  min={0}
  max={100}
/>
\`\`\`

## Features
- **Range Selection** - Configurable min/max values with custom steps
- **Controlled/Uncontrolled** - Supports both controlled and uncontrolled usage
- **Keyboard Navigation** - Arrow keys, Home, End, Page Up/Down support
- **Visual Feedback** - Clear track, thumb, and hover states

## Accessibility & Testing
- Uses semantic range input with proper ARIA attributes
- Supports full keyboard navigation and screen readers
- Maintains WCAG AA contrast ratios in all themes
- Comprehensive testId support for automated testing

\`\`\`tsx
// Testing approach
const slider = screen.getByTestId('volume-slider');
fireEvent.change(slider, { target: { value: '75' } });
expect(slider).toHaveValue('75');
\`\`\``,
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
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
    },
    className: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 50,
    testId: 'default-slider',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6 p-4">
      <div className="space-y-4">
        <Typography variant="h3" testId="ranges-title">
          Different Ranges
        </Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="label" className="block mb-2">
              Volume (0-10)
            </Typography>
            <Slider
              min={0}
              max={10}
              defaultValue={7}
              step={1}
              testId="volume-slider"
            />
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Temperature (-20°C to 40°C)
            </Typography>
            <Slider
              min={-20}
              max={40}
              defaultValue={22}
              step={0.5}
              testId="temperature-slider"
            />
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Percentage (0% to 100%)
            </Typography>
            <Slider
              min={0}
              max={100}
              defaultValue={75}
              step={5}
              testId="percentage-slider"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="states-title">
          States
        </Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="label" className="block mb-2">
              Normal
            </Typography>
            <Slider defaultValue={50} testId="normal-slider" />
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Disabled
            </Typography>
            <Slider defaultValue={60} disabled testId="disabled-slider" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Slider variants showing different ranges, steps, and states.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      volume: 75,
      brightness: 60,
      quality: 3,
      sensitivity: 25,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSave = () => {
      const newErrors: Record<string, string> = {};
      if (settings.volume < 10) {
        newErrors.volume = 'Volume too low for optimal experience';
      }
      setErrors(newErrors);
    };

    return (
      <div className="space-y-8 max-w-2xl p-6">
        <div className="space-y-4">
          <Typography variant="h1" color="primary" testId="settings-title">
            System Settings
          </Typography>
          <Typography variant="body" testId="settings-description">
            Adjust your system preferences using the sliders below.
          </Typography>
        </div>

        <Card>
          <Typography variant="h2" className="mb-4" testId="audio-title">
            Audio Settings
          </Typography>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="label" testId="volume-label">
                  Master Volume
                </Typography>
                <Typography
                  variant="body2"
                  className="text-gray-600"
                  testId="volume-value"
                >
                  {settings.volume}%
                </Typography>
              </div>
              <Slider
                value={settings.volume}
                onChange={(value) =>
                  setSettings((prev) => ({ ...prev, volume: value }))
                }
                min={0}
                max={100}
                testId="volume-slider"
              />
              {errors.volume && (
                <Typography
                  variant="caption"
                  color="danger"
                  testId="volume-error"
                >
                  {errors.volume}
                </Typography>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="label" testId="brightness-label">
                  Screen Brightness
                </Typography>
                <Typography
                  variant="body2"
                  className="text-gray-600"
                  testId="brightness-value"
                >
                  {settings.brightness}%
                </Typography>
              </div>
              <Slider
                value={settings.brightness}
                onChange={(value) =>
                  setSettings((prev) => ({ ...prev, brightness: value }))
                }
                min={0}
                max={100}
                step={5}
                testId="brightness-slider"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="label" testId="quality-label">
                  Graphics Quality
                </Typography>
                <Typography
                  variant="body2"
                  className="text-gray-600"
                  testId="quality-value"
                >
                  {
                    ['Low', 'Medium', 'High', 'Ultra', 'Maximum'][
                      settings.quality - 1
                    ]
                  }
                </Typography>
              </div>
              <Slider
                value={settings.quality}
                onChange={(value) =>
                  setSettings((prev) => ({ ...prev, quality: value }))
                }
                min={1}
                max={5}
                step={1}
                testId="quality-slider"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="label" testId="sensitivity-label">
                  Mouse Sensitivity
                </Typography>
                <Typography
                  variant="body2"
                  className="text-gray-600"
                  testId="sensitivity-value"
                >
                  {(settings.sensitivity / 10).toFixed(1)}
                </Typography>
              </div>
              <Slider
                value={settings.sensitivity}
                onChange={(value) =>
                  setSettings((prev) => ({ ...prev, sensitivity: value }))
                }
                min={1}
                max={50}
                step={1}
                testId="sensitivity-slider"
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                variant="primary"
                onClick={handleSave}
                testId="save-button"
              >
                Save Settings
              </Button>
              <Button variant="default" testId="reset-button">
                Reset to Default
              </Button>
            </div>
          </div>
        </Card>

        <div className="p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded">
          <Typography
            variant="h3"
            color="success"
            className="mb-2"
            testId="success-title"
          >
            Settings Saved
          </Typography>
          <Typography variant="body" color="success" testId="success-message">
            Your preferences have been saved and will take effect immediately.
          </Typography>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Slider components integrated with other components in realistic settings form scenarios.',
      },
    },
  },
};

export const States: Story = {
  render: () => {
    const [controlledValue, setControlledValue] = useState(25);

    return (
      <div className="space-y-6 p-4">
        <div className="space-y-4">
          <Typography variant="h3" testId="controlled-title">
            Controlled Slider
          </Typography>
          <div>
            <Typography
              variant="body"
              className="mb-2"
              testId="controlled-description"
            >
              Current value: <strong>{controlledValue}</strong>
            </Typography>
            <Slider
              value={controlledValue}
              onChange={setControlledValue}
              testId="controlled-slider"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" testId="step-values-title">
            Step Values
          </Typography>
          <div className="space-y-4">
            <div>
              <Typography variant="label" className="block mb-2">
                Fine Control (step: 0.1)
              </Typography>
              <Slider
                min={0}
                max={10}
                step={0.1}
                defaultValue={5.5}
                testId="fine-slider"
              />
            </div>
            <div>
              <Typography variant="label" className="block mb-2">
                Coarse Control (step: 10)
              </Typography>
              <Slider
                min={0}
                max={100}
                step={10}
                defaultValue={50}
                testId="coarse-slider"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" testId="keyboard-title">
            Keyboard Navigation
          </Typography>
          <Card>
            <Typography
              variant="body2"
              className="mb-3"
              testId="keyboard-instructions"
            >
              <strong>Try this:</strong> Focus the slider and use Arrow keys,
              Home, End, Page Up/Down to navigate.
            </Typography>
            <Slider defaultValue={50} testId="keyboard-slider" />
          </Card>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Slider states including controlled usage, step values, and keyboard navigation demonstration.',
      },
    },
  },
};
