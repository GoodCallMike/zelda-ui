import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { Typography } from '../Typography';
import { Select } from '../Select';
import { Checkbox } from '../Checkbox';
import { Slider } from '../Slider';

const meta: Meta<typeof Divider> = {
  title: 'General/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Divider component for separating content with Zelda-themed styling and magical effects.

## Overview

The Divider component provides visual separation between content sections with multiple variants including the signature magical shimmer effect from the Link-Zelda design system.

## Quick Start

\`\`\`tsx
import { Divider } from '@zelda/core';

// Basic divider
<Divider />

// Magical shimmer divider
<Divider variant="magical" />

// With text label
<Divider>Section Title</Divider>
\`\`\`

## Variants

### Solid
Clean, simple divider for basic content separation.

### Dashed
Subtle dashed pattern for softer visual breaks.

### Magical
Signature Link-Zelda shimmer effect with animated gold-green gradient.

## Accessibility

- Semantic separation using appropriate ARIA roles
- Proper contrast ratios in all variants
- Screen reader friendly text labels`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider orientation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'magical'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      },
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment for labeled dividers',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Typography variant="h4" className="mb-4">Solid</Typography>
        <Divider variant="solid" />
      </div>
      <div>
        <Typography variant="h4" className="mb-4">Dashed</Typography>
        <Divider variant="dashed" />
      </div>
      <div>
        <Typography variant="h4" className="mb-4">Magical</Typography>
        <Divider variant="magical" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different visual styles: solid for clean separation, dashed for subtle breaks, and magical for the signature Link-Zelda shimmer effect.',
      },
    },
  },
};

export const WithText: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Typography variant="body1">Content above the divider</Typography>
        <Divider>Section Break</Divider>
        <Typography variant="body1">Content below the divider</Typography>
      </div>
      <div>
        <Typography variant="body1">Quest Log</Typography>
        <Divider variant="magical">⚔️ Active Quests</Divider>
        <Typography variant="body1">• Find the Master Sword</Typography>
        <Typography variant="body1">• Rescue Princess Zelda</Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dividers with text labels for section headings and content organization.',
      },
    },
  },
};

export const TextAlignment: Story = {
  render: () => (
    <div className="space-y-6">
      <Divider textAlign="left">Left Aligned</Divider>
      <Divider textAlign="center">Center Aligned</Divider>
      <Divider textAlign="right">Right Aligned</Divider>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text can be aligned to the left, center, or right of the divider.',
      },
    },
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-6 h-32">
      <Typography variant="body1">Left Content</Typography>
      <Divider orientation="vertical" />
      <Typography variant="body1">Middle Content</Typography>
      <Divider orientation="vertical" variant="magical" />
      <Typography variant="body1">Right Content</Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical dividers for separating content horizontally.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-6 rounded space-y-6">
      <Typography variant="h3" className="mb-4">🌙 Dark Mode Dividers</Typography>
      <div>
        <Typography variant="body1">Solid divider in dark mode</Typography>
        <Divider variant="solid" />
        <Typography variant="body1">Clean separation with proper contrast</Typography>
      </div>
      <div>
        <Typography variant="body1">Magical shimmer transforms to purple-green</Typography>
        <Divider variant="magical">✨ Mystical Separation</Divider>
        <Typography variant="body1">Enhanced glow effects in Ganon's domain</Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dark mode transforms dividers with proper contrast and the magical variant becomes purple-green mystical effects.',
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="p-6 border rounded-lg">
        <Typography variant="h3" className="mb-4">🎮 Game Interface</Typography>
        
        <div className="space-y-4">
          <Typography variant="h4">Character Stats</Typography>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <Typography variant="body2" className="text-gray-600">Health</Typography>
              <Typography variant="h4" className="text-ganon-600">❤️ 20/20</Typography>
            </div>
            <div>
              <Typography variant="body2" className="text-gray-600">Magic</Typography>
              <Typography variant="h4" className="text-hyrule-600">🔮 15/15</Typography>
            </div>
            <div>
              <Typography variant="body2" className="text-gray-600">Rupees</Typography>
              <Typography variant="h4" className="text-rupee-600">💎 999</Typography>
            </div>
          </div>
          
          <Divider variant="magical" />
          
          <Typography variant="h4">Inventory</Typography>
          <div className="grid grid-cols-4 gap-2">
            {['⚔️ Master Sword', '🛡️ Hylian Shield', '🏹 Bow of Light', '🗝️ Small Key'].map((item) => (
              <div key={item} className="p-2 border rounded text-center text-sm">
                {item}
              </div>
            ))}
          </div>
          
          <Divider>Quest Progress</Divider>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>🗡️ The Master Sword</span>
              <span className="text-yellow-600">In Progress</span>
            </div>
            <div className="flex justify-between">
              <span>🏰 Rescue Princess Zelda</span>
              <span className="text-gray-500">Not Started</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 border rounded-lg">
        <Typography variant="h3" className="mb-4">📋 Settings Panel</Typography>
        
        <div className="space-y-6">
          <div>
            <Typography variant="h4">Audio Settings</Typography>
            <div className="space-y-3 mt-3">
              <div className="flex justify-between items-center">
                <span>Master Volume</span>
                <Slider defaultValue={75} className="w-32" />
              </div>
              <div className="flex justify-between items-center">
                <span>Music Volume</span>
                <Slider defaultValue={60} className="w-32" />
              </div>
            </div>
          </div>
          
          <Divider variant="dashed" />
          
          <div>
            <Typography variant="h4">Graphics Settings</Typography>
            <div className="space-y-3 mt-3">
              <div className="flex justify-between items-center">
                <span>Quality</span>
                <Select
                  options={[
                    { value: 'high', label: 'High' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'low', label: 'Low' }
                  ]}
                  defaultValue="high"
                  className="w-32"
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Fullscreen</span>
                <Checkbox />
              </div>
            </div>
          </div>
          
          <Divider variant="magical">⚙️ Advanced</Divider>
          
          <div>
            <Typography variant="h4">Developer Options</Typography>
            <div className="space-y-2 mt-3">
              <label className="flex items-center gap-2">
                <Checkbox />
                <span>Show FPS Counter</span>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox />
                <span>Debug Mode</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing Divider components in game interfaces and settings panels with different variants for different content hierarchy.',
      },
    },
  },
};