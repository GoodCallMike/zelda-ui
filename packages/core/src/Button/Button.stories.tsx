import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Typography } from '../Typography';
import { SearchLgIcon, PlusIcon, Trash01Icon, ArrowRightIcon } from '@zelda/icons';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Button component for Hyrule-themed interfaces with comprehensive accessibility and testing support.

## Overview

The Button component provides interactive actions with authentic Zelda-inspired styling. It supports multiple functional variants, icon integration, and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Button } from '@zelda/core';

// Basic usage
<Button>Start Adventure</Button>

// With Hyrule theming
<Button variant="primary">Collect Triforce</Button>
\`\`\`

## Variants

### Primary (Triforce Gold)
High emphasis filled button for main actions like "Start Adventure" or "Save Game".

### Default (Outlined)
Medium emphasis outlined button for secondary actions like "View Inventory" or "Settings".

### Dashed (Dashed Border)
Lower emphasis for add/upload actions like "Add Item" or "Upload Save".

### Text (Minimal)
Minimal emphasis for subtle actions like "Cancel" or "Skip".

### Link (Link Style)
Link styling with underline for navigation like "View Map" or "Credits".

### Destructive (Ganon Red)
High emphasis red button for dangerous actions like "Delete Save" or "Reset Progress".

## Accessibility

The Button component is fully accessible with:

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Semantic button elements with proper labeling
- **Focus Indicators**: Clear visual focus states for keyboard users

## Testing

Built-in testing support with \`testId\` prop for reliable automated testing.

## Best Practices

### Do
- Use primary for main actions (like "Start Adventure")
- Use destructive for dangerous actions (like "Delete Save")
- Provide clear, action-oriented labels
- Include \`testId\` for reliable testing

### Don't
- Use multiple primary variants in the same context
- Use destructive variant for non-destructive actions
- Make button text too long for the pixel-art styling`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link', 'destructive'],
      description: 'Functional style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon relative to text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
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
    children: 'Start Adventure',
    variant: 'primary',
  },
};

export const Primary: Story = {
  args: {
    children: 'Collect Triforce',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  name: 'Default (Outlined)',
  args: {
    children: 'View Inventory',
    variant: 'default',
  },
};

export const Dashed: Story = {
  args: {
    children: 'Add Item',
    variant: 'dashed',
  },
};

export const Text: Story = {
  args: {
    children: 'Cancel',
    variant: 'text',
  },
};

export const Link: Story = {
  args: {
    children: 'View Map',
    variant: 'link',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete Save',
    variant: 'destructive',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Action',
    variant: 'primary',
    disabled: true,
  },
};

export const Variants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="default">Default</Button>
      <Button variant="dashed">Dashed</Button>
      <Button variant="text">Text</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants showcasing the functional hierarchy from high to low emphasis.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">Normal</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="default">Normal</Button>
        <Button variant="default" disabled>Disabled</Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="destructive">Normal</Button>
        <Button variant="destructive" disabled>Disabled</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button states including normal and disabled variations across different variants.',
      },
    },
  },
};

export const HyruleInterface: Story = {
  name: 'Hyrule Interface',
  render: () => (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900">Adventure Menu</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Start New Game</Button>
          <Button variant="default">Continue Adventure</Button>
          <Button variant="text">Load Save</Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900">Inventory Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Use Item</Button>
          <Button variant="dashed">Add to Inventory</Button>
          <Button variant="destructive">Drop Item</Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900">Navigation</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="link">View Map</Button>
          <Button variant="link">Quest Log</Button>
          <Button variant="text">Settings</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world Zelda-themed interface examples showing proper button usage in different contexts.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-6 rounded">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white mb-4">Ganon's Domain (Dark Mode)</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="dashed">Dashed</Button>
          <Button variant="text">Text</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dark mode transforms the theme from Zelda/Triforce-focused to Ganon-focused with purple primary and red destructive variants.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => {
    console.log('Icons:', { SearchLgIcon, PlusIcon, Trash01Icon, ArrowRightIcon });
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" icon={SearchLgIcon}>Search</Button>
          <Button variant="default" icon={PlusIcon}>Add Item</Button>
          <Button variant="destructive" icon={Trash01Icon}>Delete</Button>
          <Button variant="primary" icon={ArrowRightIcon} iconPosition="right">Continue</Button>
        </div>
        <div className="text-sm text-gray-500 mt-2">
          Icons loaded: {[SearchLgIcon, PlusIcon, Trash01Icon, ArrowRightIcon].map(icon => icon?.name || 'unnamed').join(', ')}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons from the @zelda/icons package, showing left and right positioning.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      {/* Game Menu Interface */}
      <div className="p-6 border rounded-lg">
        <h2 className="text-xl font-bold mb-6">Main Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Adventure Awaits</h3>
            <p className="text-gray-600 mb-4">
              Begin your legendary journey through the kingdom of Hyrule. Face ancient evils, solve mystical puzzles, and become the hero of legend.
            </p>
            <div className="flex gap-3">
              <Button variant="primary">New Game</Button>
              <Button variant="default">Continue</Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Game Options</h3>
            <div className="space-y-2">
              <Button variant="text" className="w-full justify-start">Settings</Button>
              <Button variant="text" className="w-full justify-start">Load Game</Button>
              <Button variant="text" className="w-full justify-start">Achievements</Button>
              <Button variant="link" className="w-full justify-start">Credits</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Management */}
      <div className="p-6 border rounded-lg">
        <h2 className="text-xl font-bold mb-4">Inventory Management</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-3">Items</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Master Sword', 'Hylian Shield', 'Bow of Light', 'Triforce Shard'].map((item) => (
                <div key={item} className="p-3 border rounded text-center">
                  <p className="text-sm mb-2">{item}</p>
                  <div className="flex gap-1">
                    <Button variant="text" className="text-xs p-1">Use</Button>
                    <Button variant="text" className="text-xs p-1">Drop</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Actions</h3>
            <div className="space-y-2">
              <Button variant="default" className="w-full">Sort Items</Button>
              <Button variant="dashed" className="w-full">Quick Use</Button>
              <Button variant="text" className="w-full">Item Details</Button>
              <Button variant="destructive" className="w-full">Drop All Junk</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <div className="p-6 border-2 border-red-200 rounded-lg bg-red-50">
        <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Dangerous Action</h3>
        <p className="text-gray-700 mb-4">
          Are you sure you want to delete this save file? This action cannot be undone. All progress, items, and achievements will be permanently lost.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Save file: "Hero of Time" - 45 hours played - Last saved: Temple of Time
        </p>
        <div className="flex gap-3">
          <Button variant="destructive">Yes, Delete Forever</Button>
          <Button variant="default">Cancel</Button>
          <Button variant="link">Backup First</Button>
        </div>
      </div>
      
      {/* Dark Mode Complex Examples */}
      <div className="dark p-6 bg-gray-900 rounded-lg space-y-6">
        <Typography variant="h2">🌙 Night Mode Interface</Typography>
        
        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">⚔️ Combat Actions</Typography>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="primary">Attack</Button>
            <Button variant="default">Defend</Button>
            <Button variant="dashed">Use Item</Button>
            <Button variant="destructive">Flee</Button>
          </div>
        </div>
        
        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">🎒 Quick Actions</Typography>
          <div className="space-y-3">
            <div className="flex gap-2">
              <Button variant="text">Equip Weapon</Button>
              <Button variant="link">View Stats</Button>
            </div>
            <div className="flex gap-2">
              <Button variant="default">Save Game</Button>
              <Button variant="destructive">Delete Save</Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 p-4 border border-gray-600 rounded-lg bg-gray-800">
          <Typography variant="h4">🗺️ Navigation</Typography>
          <div className="grid grid-cols-1 gap-3">
            <Button variant="primary">Continue Quest</Button>
            <Button variant="default">Open Map</Button>
            <Button variant="text">Settings</Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing Button components in game menus, inventory management, confirmation dialogs, and complex dark mode interfaces.',
      },
    },
  },
};



