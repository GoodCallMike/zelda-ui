import type { Meta, StoryObj } from '@storybook/react';
import { HyruleButton } from './HyruleButton';

const meta: Meta<typeof HyruleButton> = {
  title: '🗡️ Hyrule/HyruleButton',
  component: HyruleButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `HyruleButton component with rectangular special styling and standard button variants.

## Overview

The HyruleButton provides standard button variants (primary, secondary, tertiary, link, destructive) all using premium rectangular special styling with Zelda-inspired colors and effects.

## Quick Start

\`\`\`tsx
import { HyruleButton } from '@zelda/hyrule';

// Primary button (default)
<HyruleButton>Primary Action</HyruleButton>

// Secondary variant
<HyruleButton variant="secondary">Secondary Action</HyruleButton>

// Link variant
<HyruleButton variant="link">Link Action</HyruleButton>

// Retro styling
<HyruleButton retro="24bit">ADVENTURE</HyruleButton>
\`\`\`

## Styling

All variants (except link) use rectangular special styling with:
- Gradient backgrounds with borders
- Enhanced hover scaling effects
- Consistent padding and typography
- Premium shadow effects

## Variants

### Primary (Default)
Golden Triforce-inspired gradient with amber text.

### Secondary
Emerald rupee-inspired gradient with white text.

### Tertiary
Blue Master Sword-inspired gradient with white text.

### Link
Clean text-only style with hover effects.

### Destructive
Red heart-inspired gradient for destructive actions.

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
      options: ['primary', 'secondary', 'tertiary', 'link', 'destructive'],
      description: 'Button variant (all use rectangular special styling except link)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
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
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <HyruleButton variant="primary">Primary</HyruleButton>
      <HyruleButton variant="secondary">Secondary</HyruleButton>
      <HyruleButton variant="tertiary">Tertiary</HyruleButton>
      <HyruleButton variant="link">Link</HyruleButton>
      <HyruleButton variant="destructive">Destructive</HyruleButton>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <HyruleButton variant="primary">Normal</HyruleButton>
        <HyruleButton variant="primary" disabled>Disabled</HyruleButton>
      </div>
      <div className="flex gap-4">
        <HyruleButton variant="secondary">Normal</HyruleButton>
        <HyruleButton variant="secondary" disabled>Disabled</HyruleButton>
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
          <HyruleButton variant="primary" testId="primary-btn">
            ⚡ Primary Action
          </HyruleButton>
          <HyruleButton variant="tertiary" testId="tertiary-btn">
            ⚔️ Tertiary Action
          </HyruleButton>
          <HyruleButton variant="destructive" testId="destructive-btn">
            ❤️ Destructive Action
          </HyruleButton>
        </div>
        
        <div className="space-y-3">
          <HyruleButton variant="secondary" testId="secondary-btn">
            💎 Secondary Action
          </HyruleButton>
          <HyruleButton variant="link" testId="link-btn">
            👁️ Link Action
          </HyruleButton>
          <HyruleButton variant="primary" disabled testId="disabled-btn">
            🔒 Disabled
          </HyruleButton>
        </div>
      </div>
    </div>
  ),
};