import type { Meta, StoryObj } from '@storybook/react';
import { HyruleButton } from './HyruleButton';

const meta: Meta<typeof HyruleButton> = {
  title: '🗡️ Hyrule/HyruleButton',
  component: HyruleButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `HyruleButton component with rectangular special styling and Zelda-themed variants.

## Overview

The HyruleButton features premium rectangular special styling with gradient backgrounds, enhanced hover effects, and Zelda-themed color variants. All buttons use consistent rectangular special styling with variant-specific colors.

## Quick Start

\`\`\`tsx
import { HyruleButton } from '@zelda/hyrule';

// Default triforce styling
<HyruleButton>Collect Triforce</HyruleButton>

// Rupee variant
<HyruleButton variant="rupee">Collect Rupees</HyruleButton>

// Retro styling
<HyruleButton retro="24bit">ADVENTURE</HyruleButton>
\`\`\`

## Styling

All variants use rectangular special styling with:
- Gradient backgrounds with borders
- Enhanced hover scaling effects
- Consistent padding and typography
- Premium shadow effects

## Variants

### Triforce (Default)
Golden gradient with amber text and yellow borders.

### Rupee
Emerald to teal gradient with white text.

### Master Sword
Blue to indigo gradient representing the Master Sword.

### Heart
Red to pink gradient inspired by heart containers.

### Sheikah
Purple to indigo gradient for Sheikah technology.

## Retro Variants

Special retro styling options that override the default rectangular styling:
- **24bit**: SNES-era pixelated styling
- **32bit**: N64-era sophisticated gradients
- **triforce-pixel**: Pixelated Triforce styling
- **rupee-gem**: Gem-shaped rupee styling`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['triforce', 'rupee', 'master-sword', 'heart', 'sheikah'],
      description: 'Hyrule-themed color variant (all use rectangular special styling)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'triforce' },
      },
    },
    retro: {
      control: 'select',
      options: ['24bit', '32bit', 'triforce-pixel', 'rupee-gem'],
      description: 'Retro styling variant that overrides default rectangular styling',
      table: {
        type: { summary: 'string' },
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