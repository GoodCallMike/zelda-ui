import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Data Entry/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Select component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Select component provides dropdown selection functionality with authentic Zelda-inspired styling. It supports multiple variants, keyboard navigation, and advanced features while maintaining WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Select } from '@zelda/core';

// Basic usage
<Select 
  options={[
    { value: 'sword', label: 'Master Sword' },
    { value: 'shield', label: 'Hylian Shield' }
  ]} 
/>

// With Hyrule theming
<Select 
  label="Choose Weapon" 
  variant="filled" 
  options={weaponOptions}
/>
\`\`\`

## Variants

### Default
\`\`\`tsx
<Select variant="default" options={options} placeholder="Classic border style" />
\`\`\`

### Filled
\`\`\`tsx
<Select variant="filled" options={options} placeholder="Filled background style" />
\`\`\`

### Borderless
\`\`\`tsx
<Select variant="borderless" options={options} placeholder="Clean, minimal style" />
\`\`\`

## Dark Mode

The Select component automatically adapts to dark mode with Hyrule's mystical night theme:

\`\`\`tsx
// Automatic dark mode support
<div className="dark">
  <Select variant="default" options={options} placeholder="Mystical select" />
  <Select variant="filled" options={options} placeholder="Shadow-filled select" />
</div>
\`\`\`

### Dark Mode Colors
- **Default**: Deep borders with ethereal glow on focus
- **Filled**: Shadow backgrounds with moonlight accents
- **Error/Warning**: Ganon red and Triforce gold with shadow effects

## Accessibility

The Select component is fully accessible with:

- **Keyboard Navigation**: Arrow keys, Enter, Space, and Escape support
- **Screen Reader Support**: Proper ARIA attributes and roles
- **Focus Management**: Clear visual focus states and focus trapping
- **High Contrast**: Maintains accessibility in both light and dark modes

\`\`\`tsx
// Accessibility example
<Select 
  testId="weapon-select" 
  label="Choose Weapon" 
  required
  options={weaponOptions}
/>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<Select testId="select-test" options={options} />
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('select-test');
\`\`\`

## Best Practices

### Do
- Use clear, descriptive option labels
- Provide meaningful placeholder text
- Include labels for better accessibility
- Use appropriate variants for context
- Include \`testId\` for reliable testing

### Don't
- Use borderless variant without proper visual context
- Create overly long option lists without search
- Use unclear or generic option labels
- Forget to handle validation states`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'borderless'],
      description: 'Visual variant of the select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    status: {
      control: { type: 'select' },
      options: [undefined, 'error', 'warning'],
      description: 'Status state for validation feedback',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Select label text',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Select an option...' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the select is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    testId: {
      control: { type: 'text' },
      description: 'Test identifier for automated testing',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
  { value: 'sword', label: 'Master Sword' },
  { value: 'bow', label: 'Bow of Light' },
  { value: 'shield', label: 'Hylian Shield' },
  { value: 'boomerang', label: 'Boomerang' },
];

const regionOptions = [
  { value: 'central', label: 'Central Hyrule' },
  { value: 'hebra', label: 'Hebra Region' },
  { value: 'eldin', label: 'Eldin Region' },
  { value: 'necluda', label: 'Necluda Region' },
  { value: 'faron', label: 'Faron Region' },
  { value: 'gerudo', label: 'Gerudo Desert' },
];

export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Choose your weapon...',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    options: basicOptions,
    placeholder: 'Choose your weapon...',
  },
};

export const Borderless: Story = {
  args: {
    variant: 'borderless',
    options: basicOptions,
    placeholder: 'Choose your weapon...',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    options: basicOptions,
    placeholder: 'Small select',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    options: basicOptions,
    placeholder: 'Large select',
  },
};

export const WithStatus: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Select 
        status="error" 
        options={basicOptions} 
        placeholder="Error state" 
        defaultValue="sword"
      />
      <Select 
        status="warning" 
        options={basicOptions} 
        placeholder="Warning state" 
        defaultValue="bow"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Selects with error and warning status states.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: basicOptions,
    placeholder: 'Disabled select',
  },
};

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Select 
        label="Weapon Type" 
        options={basicOptions} 
        placeholder="Choose your weapon"
      />
      <Select 
        label="Region" 
        options={regionOptions} 
        placeholder="Select region"
      />
      <Select 
        label="Required Field" 
        required
        options={basicOptions} 
        placeholder="This field is required"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Selects with labels and required field indicators.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark p-6 bg-gray-900 space-y-4 max-w-md">
      <Select label="Default" options={basicOptions} placeholder="Choose weapon..." />
      <Select label="Filled" variant="filled" options={basicOptions} placeholder="Choose weapon..." />
      <Select label="Borderless" variant="borderless" options={basicOptions} placeholder="Choose weapon..." />
      <Select label="Error State" status="error" options={basicOptions} defaultValue="sword" />
      <Select label="Warning State" status="warning" options={basicOptions} defaultValue="bow" />
      <Select label="Disabled" disabled options={basicOptions} placeholder="Disabled select" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All select variants in dark mode with purple accent colors.',
      },
    },
  },
};

export const HyruleInterface: Story = {
  render: () => (
    <div className="space-y-6 max-w-lg">
      <div className="space-y-4 p-4 border border-triforce-200 dark:border-triforce-700 rounded-lg bg-triforce-50 dark:bg-triforce-950">
        <h3 className="text-lg font-semibold text-triforce-700 dark:text-triforce-300 flex items-center gap-2">
          ⚔️ Hero's Arsenal
        </h3>
        <Select 
          label="Primary Weapon" 
          options={[
            { value: 'master-sword', label: 'Master Sword' },
            { value: 'bow-light', label: 'Bow of Light' },
            { value: 'ancient-blade', label: 'Ancient Short Sword' },
            { value: 'royal-sword', label: 'Royal Broadsword' },
          ]}
          placeholder="Select your primary weapon"
          variant="filled"
        />
        <Select 
          label="Shield Type" 
          options={[
            { value: 'hylian', label: 'Hylian Shield' },
            { value: 'ancient', label: 'Ancient Shield' },
            { value: 'royal', label: 'Royal Shield' },
            { value: 'knight', label: "Knight's Shield" },
          ]}
          placeholder="Choose your shield"
        />
      </div>
      
      <div className="space-y-4 p-4 border border-rupee-200 dark:border-rupee-700 rounded-lg bg-rupee-50 dark:bg-rupee-950">
        <h3 className="text-lg font-semibold text-rupee-700 dark:text-rupee-300 flex items-center gap-2">
          🗺️ Adventure Planning
        </h3>
        <Select 
          label="Destination Region" 
          options={regionOptions}
          placeholder="Where will you explore?"
          variant="filled"
        />
        <Select 
          label="Difficulty Level" 
          options={[
            { value: 'easy', label: 'Peaceful Plains' },
            { value: 'medium', label: 'Challenging Peaks' },
            { value: 'hard', label: 'Dangerous Depths' },
            { value: 'master', label: 'Master Mode' },
          ]}
          placeholder="Choose difficulty"
          variant="borderless"
        />
      </div>
      
      <div className="space-y-4 p-4 border border-sheikah-200 dark:border-sheikah-700 rounded-lg bg-sheikah-50 dark:bg-sheikah-950">
        <h3 className="text-lg font-semibold text-sheikah-700 dark:text-sheikah-300 flex items-center gap-2">
          🔮 Ancient Technology
        </h3>
        <Select 
          label="Rune Type" 
          options={[
            { value: 'bomb', label: 'Remote Bomb' },
            { value: 'magnesis', label: 'Magnesis' },
            { value: 'stasis', label: 'Stasis' },
            { value: 'cryonis', label: 'Cryonis' },
          ]}
          placeholder="Select rune ability"
          variant="filled"
        />
        <Select 
          label="Shrine Reward" 
          options={[
            { value: 'spirit-orb', label: 'Spirit Orb' },
            { value: 'weapon', label: 'Ancient Weapon' },
            { value: 'armor', label: 'Ancient Armor' },
            { value: 'material', label: 'Ancient Materials' },
          ]}
          placeholder="Choose your reward"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Adventure-themed interface examples showing weapon selection, region planning, and ancient technology controls with authentic Hyrule styling.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-md">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-triforce-600 dark:text-triforce-400">🎮 Game Settings</h3>
        <Select 
          label="Graphics Quality" 
          options={[
            { value: 'low', label: 'Low (Better Performance)' },
            { value: 'medium', label: 'Medium (Balanced)' },
            { value: 'high', label: 'High (Better Quality)' },
            { value: 'ultra', label: 'Ultra (Best Quality)' },
          ]}
          placeholder="Select graphics quality"
          defaultValue="medium"
        />
        <Select 
          label="Language" 
          options={[
            { value: 'en', label: 'English' },
            { value: 'ja', label: '日本語 (Japanese)' },
            { value: 'fr', label: 'Français (French)' },
            { value: 'de', label: 'Deutsch (German)' },
            { value: 'es', label: 'Español (Spanish)' },
          ]}
          placeholder="Choose language"
          defaultValue="en"
        />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-rupee-600 dark:text-rupee-400">📦 Inventory Management</h3>
        <Select 
          label="Sort Items By" 
          options={[
            { value: 'name', label: 'Name (A-Z)' },
            { value: 'type', label: 'Item Type' },
            { value: 'rarity', label: 'Rarity' },
            { value: 'value', label: 'Value (High to Low)' },
            { value: 'recent', label: 'Recently Acquired' },
          ]}
          placeholder="Sort by..."
          variant="filled"
        />
        <Select 
          label="Filter Category" 
          options={[
            { value: 'all', label: 'All Items' },
            { value: 'weapons', label: 'Weapons' },
            { value: 'armor', label: 'Armor & Clothing' },
            { value: 'materials', label: 'Materials' },
            { value: 'food', label: 'Food & Cooking' },
            { value: 'key', label: 'Key Items' },
          ]}
          placeholder="Filter items..."
          defaultValue="all"
        />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-ganon-600 dark:text-ganon-400">⚠️ Validation States</h3>
        <Select 
          label="Invalid Selection" 
          status="error" 
          options={basicOptions}
          defaultValue="sword"
        />
        <Select 
          label="Warning Selection" 
          status="warning" 
          options={basicOptions}
          defaultValue="bow"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing game settings, inventory management, and validation states with Hyrule theming.',
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">🏰 Character Creation</h3>
        <Select 
          label="Character Class" 
          required
          options={[
            { value: 'warrior', label: 'Warrior' },
            { value: 'mage', label: 'Mage' },
            { value: 'archer', label: 'Archer' },
            { value: 'rogue', label: 'Rogue' },
          ]}
          placeholder="Choose your class"
          testId="character-class"
        />
        <Select 
          label="Starting Region" 
          options={regionOptions}
          placeholder="Where will you begin?"
          defaultValue="central"
        />
        <Select 
          label="Difficulty Mode" 
          options={[
            { value: 'normal', label: 'Normal Mode' },
            { value: 'hard', label: 'Hard Mode' },
            { value: 'master', label: 'Master Mode' },
          ]}
          placeholder="Select difficulty"
          defaultValue="normal"
        />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">⚙️ Preferences</h3>
        <Select 
          label="Theme" 
          options={[
            { value: 'light', label: 'Light Theme' },
            { value: 'dark', label: 'Dark Theme' },
            { value: 'auto', label: 'Auto (System)' },
          ]}
          placeholder="Choose theme"
          defaultValue="auto"
        />
        <Select 
          label="Auto-Save Frequency" 
          options={[
            { value: '1', label: 'Every 1 minute' },
            { value: '5', label: 'Every 5 minutes' },
            { value: '10', label: 'Every 10 minutes' },
            { value: 'manual', label: 'Manual only' },
          ]}
          placeholder="Select frequency"
          defaultValue="5"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form integration examples showing character creation and preference forms with proper validation and user experience patterns.',
      },
    },
  },
};