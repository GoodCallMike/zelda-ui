import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { RadioButton } from './RadioButton';
import { RadioGroup } from './RadioGroup';
import { Typography } from '../Typography';
import { Input } from '../Input';
import { Button } from '../Button';

const meta: Meta<typeof Radio> = {
  title: 'Data Entry/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Radio component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Radio component provides single-choice selection with authentic Zelda-inspired styling. It supports grouped selections, button-style variants, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Radio, RadioGroup, RadioButton } from '@zelda/core';

// Basic usage
<Radio label="Warrior" value="warrior" />

// With Hyrule theming
<RadioGroup defaultValue="triforce">
  <Radio label="Triforce of Power" value="power" />
  <Radio label="Triforce of Wisdom" value="wisdom" />
  <Radio label="Triforce of Courage" value="courage" />
</RadioGroup>
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Radio size variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'middle' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Whether the radio has error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
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
    label: 'Option 1',
    name: 'option',
  },
};

export const WithoutLabel: Story = {
  args: {
    name: 'option',
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected option',
    name: 'option',
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required option',
    name: 'option',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    name: 'option',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and selected',
    name: 'option',
    disabled: true,
    defaultChecked: true,
  },
};

export const BasicGroup: Story = {
  render: () => (
    <RadioGroup defaultValue="medium">
      <Radio label="Small rupee" value="small" />
      <Radio label="Medium rupee" value="medium" />
      <Radio label="Large rupee" value="large" />
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons grouped together using RadioGroup component.',
      },
    },
  },
};

export const ButtonStyle: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex">
        <RadioButton name="style1" value="option1">Option 1</RadioButton>
        <RadioButton name="style1" value="option2" defaultChecked>Option 2</RadioButton>
        <RadioButton name="style1" value="option3">Option 3</RadioButton>
      </div>
      <div className="flex">
        <RadioButton name="style2" value="solid1" buttonStyle="solid">Solid 1</RadioButton>
        <RadioButton name="style2" value="solid2" buttonStyle="solid" defaultChecked>Solid 2</RadioButton>
        <RadioButton name="style2" value="solid3" buttonStyle="solid">Solid 3</RadioButton>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button-style radio buttons with outline and solid variants.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4>Small</h4>
        <RadioGroup size="small" defaultValue="small2">
          <Radio label="Small 1" value="small1" />
          <Radio label="Small 2" value="small2" />
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <h4>Middle (Default)</h4>
        <RadioGroup size="middle" defaultValue="middle2">
          <Radio label="Middle 1" value="middle1" />
          <Radio label="Middle 2" value="middle2" />
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <h4>Large</h4>
        <RadioGroup size="large" defaultValue="large2">
          <Radio label="Large 1" value="large1" />
          <Radio label="Large 2" value="large2" />
        </RadioGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons in different sizes: small, middle, and large.',
      },
    },
  },
};

export const ButtonSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center">
        <RadioButton name="btnSmall" value="1" size="small">Small</RadioButton>
        <RadioButton name="btnSmall" value="2" size="small">Small</RadioButton>
      </div>
      <div className="flex items-center">
        <RadioButton name="btnMiddle" value="1" size="middle">Middle</RadioButton>
        <RadioButton name="btnMiddle" value="2" size="middle">Middle</RadioButton>
      </div>
      <div className="flex items-center">
        <RadioButton name="btnLarge" value="1" size="large">Large</RadioButton>
        <RadioButton name="btnLarge" value="2" size="large">Large</RadioButton>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button-style radio buttons in different sizes.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="dark p-6 bg-gray-900 rounded-lg">
        <Typography variant="h3" className="text-white mb-4">Dark Mode</Typography>
        <div className="space-y-4 text-white">
          <RadioGroup defaultValue="mystic">
            <Radio label="Mystic Power" value="mystic" />
            <Radio label="Shadow Magic" value="shadow" />
            <Radio label="Ancient Wisdom" value="ancient" />
          </RadioGroup>
          <div className="flex">
            <RadioButton name="darkBtn" value="night" defaultChecked>Night Theme</RadioButton>
            <RadioButton name="darkBtn" value="twilight">Twilight</RadioButton>
            <RadioButton name="darkBtn" value="shadow">Shadow</RadioButton>
          </div>
        </div>
      </div>

    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio components automatically adapt to dark mode with mystical purple theming. Use the `dark` CSS class to enable dark mode styling.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      {/* Character Creation Form */}
      <div className="p-6 border rounded-lg">
        <Typography variant="h3" className="mb-4">Character Creation</Typography>
        <form className="space-y-4">
          <Input label="Hero Name" placeholder="Enter your name" />
          <div>
            <Typography variant="label" className="block mb-2">Choose your class:</Typography>
            <RadioGroup defaultValue="warrior">
              <Radio label="Warrior - Master of sword and shield" value="warrior" />
              <Radio label="Mage - Wielder of ancient magic" value="mage" />
              <Radio label="Archer - Swift and precise hunter" value="archer" />
              <Radio label="Rogue - Silent shadow assassin" value="rogue" />
            </RadioGroup>
          </div>
          <div>
            <Typography variant="label" className="block mb-2">Difficulty:</Typography>
            <div className="flex">
              <RadioButton name="difficulty" value="easy">Easy</RadioButton>
              <RadioButton name="difficulty" value="normal" defaultChecked>Normal</RadioButton>
              <RadioButton name="difficulty" value="hard">Hard</RadioButton>
              <RadioButton name="difficulty" value="master">Master</RadioButton>
            </div>
          </div>
          <div className="flex gap-2 pt-4">
            <Button variant="primary">Begin Quest</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </form>
      </div>

      {/* Game Settings */}
      <div className="p-6 border rounded-lg">
        <Typography variant="h3" className="mb-4">Game Settings</Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="label" className="block mb-2">Graphics Quality:</Typography>
            <div className="flex">
              <RadioButton name="graphics" value="low">Low</RadioButton>
              <RadioButton name="graphics" value="medium" defaultChecked>Medium</RadioButton>
              <RadioButton name="graphics" value="high">High</RadioButton>
              <RadioButton name="graphics" value="ultra">Ultra</RadioButton>
            </div>
          </div>
          <div>
            <Typography variant="label" className="block mb-2">Audio Output:</Typography>
            <RadioGroup defaultValue="stereo">
              <Radio label="Mono" value="mono" />
              <Radio label="Stereo" value="stereo" />
              <Radio label="Surround 5.1" value="surround" />
              <Radio label="Surround 7.1" value="surround71" />
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* NPC Dialog */}
      <div className="p-6 border rounded-lg bg-gray-50">
        <Typography variant="h3" className="mb-4">NPC Interaction</Typography>
        <div className="space-y-4">
          <Typography variant="body" className="italic">"Greetings, traveler! I have a quest for you. What say you?"</Typography>
          <RadioGroup>
            <Radio label="Accept the quest eagerly" value="accept" />
            <Radio label="Ask for more details" value="details" />
            <Radio label="Politely decline" value="decline" />
            <Radio label="Ignore and walk away" value="ignore" />
          </RadioGroup>
          <Button variant="primary" size="small">Continue</Button>
        </div>
      </div>
      
      {/* Dark Mode Complex Examples */}
      <div className="dark p-6 bg-gray-900 rounded-lg space-y-6">
        <Typography variant="h2">🌙 Night Mode Interface</Typography>
        
        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">⚔️ Combat Style</Typography>
          <RadioGroup defaultValue="aggressive">
            <Radio label="Aggressive - High damage, high risk" value="aggressive" />
            <Radio label="Defensive - Balanced approach" value="defensive" />
            <Radio label="Stealth - Avoid direct combat" value="stealth" />
          </RadioGroup>
        </div>
        
        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">🎒 Equipment Loadout</Typography>
          <div className="flex">
            <RadioButton name="loadout" value="light">Light</RadioButton>
            <RadioButton name="loadout" value="medium" defaultChecked>Medium</RadioButton>
            <RadioButton name="loadout" value="heavy">Heavy</RadioButton>
          </div>
        </div>
        
        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">🗺️ Quest Priority</Typography>
          <RadioGroup defaultValue="main">
            <Radio label="Main Quest - Follow the story" value="main" />
            <Radio label="Side Quests - Explore and discover" value="side" />
            <Radio label="Free Roam - No specific goals" value="roam" />
          </RadioGroup>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing Radio components integrated with other Zelda UI components in character creation, settings, dialog systems, and complex dark mode interfaces.',
      },
    },
  },
};