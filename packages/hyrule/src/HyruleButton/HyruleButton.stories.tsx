import type { Meta, StoryObj } from '@storybook/react';
import { HyruleButton } from './HyruleButton';

const meta: Meta<typeof HyruleButton> = {
  title: '🗡️ Hyrule/HyruleButton',
  component: HyruleButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `HyruleButton component with Zelda-themed variants for mystical interfaces.

## Overview

The HyruleButton provides Zelda-themed button variants inspired by the world of Hyrule. Each variant represents different elements from the Zelda universe with unique styling and effects.

## Quick Start

\`\`\`tsx
import { HyruleButton } from '@zelda/hyrule';

// Triforce button
<HyruleButton variant="triforce">Collect Triforce</HyruleButton>

// Rupee button  
<HyruleButton variant="rupee">Collect Rupees</HyruleButton>
\`\`\`

## Variants

### Triforce
Golden button representing the legendary Triforce.

### Rupee
Emerald green button inspired by rupee gems.

### Master Sword
Blue gradient button representing the Master Sword.

### Heart
Red gradient button inspired by heart containers.

### Sheikah
Purple gradient button representing Sheikah technology.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['triforce', 'rupee', 'master-sword', 'heart', 'sheikah'],
      description: 'Hyrule-themed visual variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'triforce' },
      },
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Triforce Power',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <HyruleButton variant="triforce">⚡ Triforce</HyruleButton>
      <HyruleButton variant="rupee">💎 Rupee</HyruleButton>
      <HyruleButton variant="master-sword">⚔️ Master Sword</HyruleButton>
      <HyruleButton variant="heart">❤️ Heart</HyruleButton>
      <HyruleButton variant="sheikah">👁️ Sheikah</HyruleButton>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <HyruleButton variant="triforce">Normal</HyruleButton>
        <HyruleButton variant="triforce" disabled>Disabled</HyruleButton>
      </div>
      <div className="flex gap-4">
        <HyruleButton variant="rupee">Normal</HyruleButton>
        <HyruleButton variant="rupee" disabled>Disabled</HyruleButton>
      </div>
    </div>
  ),
};

export const RetroVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">24-bit Retro (SNES Era)</h3>
        <div className="flex gap-4">
          <HyruleButton retro="24bit">ADVENTURE</HyruleButton>
          <HyruleButton retro="24bit" disabled>DISABLED</HyruleButton>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">32-bit Retro (N64 Era)</h3>
        <div className="flex gap-4">
          <HyruleButton retro="32bit">QUEST</HyruleButton>
          <HyruleButton retro="32bit" disabled>LOCKED</HyruleButton>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Special Retro Variants</h3>
        <div className="flex gap-4">
          <HyruleButton retro="triforce-pixel">TRIFORCE</HyruleButton>
          <HyruleButton retro="rupee-gem">RUPEE</HyruleButton>
        </div>
      </div>
    </div>
  ),
};

export const HyruleInterface: Story = {
  render: () => (
    <div className="bg-slate-900 p-8 rounded-lg space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">⚡ Hero's Arsenal ⚡</h2>
        <p className="text-gray-300">Choose your legendary equipment</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <HyruleButton variant="triforce" testId="triforce-btn">
            ⚡ Claim Triforce
          </HyruleButton>
          <HyruleButton variant="master-sword" testId="sword-btn">
            ⚔️ Draw Master Sword
          </HyruleButton>
          <HyruleButton variant="heart" testId="heart-btn">
            ❤️ Restore Health
          </HyruleButton>
        </div>
        
        <div className="space-y-3">
          <HyruleButton variant="rupee" testId="rupee-btn">
            💎 Collect Rupees
          </HyruleButton>
          <HyruleButton variant="sheikah" testId="sheikah-btn">
            👁️ Activate Sheikah Slate
          </HyruleButton>
          <HyruleButton variant="triforce" disabled testId="sealed-btn">
            🔒 Sealed Power
          </HyruleButton>
        </div>
      </div>
    </div>
  ),
};