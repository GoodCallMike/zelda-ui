import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Colors component for design system color palette with comprehensive accessibility and testing support.

## Overview

The Colors component provides a systematic color palette with semantic naming and dark mode support. It supports primary, semantic, and neutral color scales and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Colors } from '@jetstream/core';

// Basic usage
<div className="bg-blue-500 text-white">Primary Blue</div>

// With semantic colors
<div className="bg-red-500 text-white">Error State</div>
\`\`\`

## Color Categories

### Primary Colors
\`\`\`tsx
<div className="bg-blue-500 text-white">Primary Blue</div>
<div className="bg-yellow-500 text-blue-900">Accent Yellow</div>
\`\`\`

### Semantic Colors
\`\`\`tsx
<div className="bg-red-500 text-white">Error/Danger</div>
<div className="bg-green-500 text-white">Success</div>
<div className="bg-orange-500 text-white">Warning</div>
\`\`\`

## Accessibility

The Colors component is fully accessible with:

- **Contrast Compliance**: All color combinations meet WCAG AA standards
- **Dark Mode Support**: Automatic color adjustments for dark themes
- **Semantic Naming**: Clear color purpose indication for screen readers

\`\`\`tsx
// Accessibility example
<div className="bg-blue-500 text-white" role="status">
  Accessible color combination
</div>
\`\`\`

## Testing

Built-in testing support with color identification:

\`\`\`tsx
<div className="bg-blue-500" data-testid="primary-color">Content</div>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('primary-color');
\`\`\`

## Best Practices

### Do
- Use semantic color names for consistent meaning
- Test color combinations for accessibility compliance
- Provide dark mode alternatives for all colors

### Don't
- Use colors as the only way to convey information
- Override system color preferences without user control
- Use low contrast color combinations
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const ColorSwatch = ({ color, name, hex, variable }: { color: string; name: string; hex: string; variable?: string }) => (
  <div className="flex items-center gap-3 p-3 border rounded">
    <div className={`w-12 h-12 rounded ${color} border`} />
    <div className="flex-1">
      <div className="font-medium">{name}</div>
      <div className="text-xs text-gray-500">{hex}</div>
      <div className="text-xs font-mono text-blue-600">{color}</div>
      {variable && <div className="text-xs font-mono text-purple-600">var({variable})</div>}
    </div>
  </div>
);

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <ColorSwatch color="bg-blue-500" name="Primary Blue" hex="#3b82f6" />
      <ColorSwatch color="bg-yellow-500" name="Accent Yellow" hex="#eab308" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic primary colors used throughout the design system.',
      },
    },
  },
};

export const PrimaryColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <ColorSwatch color="bg-blue-500" name="Primary Blue" hex="#3b82f6" />
      <ColorSwatch color="bg-yellow-500" name="Accent Yellow" hex="#eab308" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Primary brand colors for main UI elements.',
      },
    },
  },
};

export const GrayScale: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <ColorSwatch color="bg-gray-100" name="Gray 100" hex="#f3f4f6" />
      <ColorSwatch color="bg-gray-300" name="Gray 300" hex="#d1d5db" />
      <ColorSwatch color="bg-gray-500" name="Gray 500" hex="#6b7280" />
      <ColorSwatch color="bg-gray-700" name="Gray 700" hex="#374151" />
      <ColorSwatch color="bg-gray-800" name="Gray 800" hex="#1f2937" />
      <ColorSwatch color="bg-gray-900" name="Gray 900" hex="#111827" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Neutral gray colors for backgrounds, borders, and text.',
      },
    },
  },
};

export const SemanticColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <ColorSwatch color="bg-red-500" name="Error/Danger" hex="#ef4444" />
      <ColorSwatch color="bg-green-500" name="Success" hex="#22c55e" />
      <ColorSwatch color="bg-orange-500" name="Warning" hex="#f97316" />
      <ColorSwatch color="bg-blue-600" name="Info" hex="#2563eb" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Semantic colors for status indicators and feedback.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Blue</h3>
          <div className="grid grid-cols-5 gap-2">
            <ColorSwatch color="bg-blue-50" name="Blue 50" hex="#eff6ff" variable="--blue-50" />
            <ColorSwatch color="bg-blue-100" name="Blue 100" hex="#dbeafe" variable="--blue-100" />
            <ColorSwatch color="bg-blue-200" name="Blue 200" hex="#bfdbfe" variable="--blue-200" />
            <ColorSwatch color="bg-blue-300" name="Blue 300" hex="#93c5fd" variable="--blue-300" />
            <ColorSwatch color="bg-blue-400" name="Blue 400" hex="#60a5fa" variable="--blue-400" />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            <ColorSwatch color="bg-blue-500" name="Blue 500" hex="#3b82f6" variable="--blue-500" />
            <ColorSwatch color="bg-blue-600" name="Blue 600" hex="#2563eb" variable="--blue-600" />
            <ColorSwatch color="bg-blue-700" name="Blue 700" hex="#1d4ed8" variable="--blue-700" />
            <ColorSwatch color="bg-blue-800" name="Blue 800" hex="#1e40af" variable="--blue-800" />
            <ColorSwatch color="bg-blue-900" name="Blue 900" hex="#1e3a8a" variable="--blue-900" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Red</h3>
          <div className="grid grid-cols-5 gap-2">
            <ColorSwatch color="bg-red-50" name="Red 50" hex="#fef2f2" variable="--red-50" />
            <ColorSwatch color="bg-red-100" name="Red 100" hex="#fee2e2" variable="--red-100" />
            <ColorSwatch color="bg-red-200" name="Red 200" hex="#fecaca" variable="--red-200" />
            <ColorSwatch color="bg-red-300" name="Red 300" hex="#fca5a5" variable="--red-300" />
            <ColorSwatch color="bg-red-400" name="Red 400" hex="#f87171" variable="--red-400" />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            <ColorSwatch color="bg-red-500" name="Red 500" hex="#ef4444" variable="--red-500" />
            <ColorSwatch color="bg-red-600" name="Red 600" hex="#dc2626" variable="--red-600" />
            <ColorSwatch color="bg-red-700" name="Red 700" hex="#b91c1c" variable="--red-700" />
            <ColorSwatch color="bg-red-800" name="Red 800" hex="#991b1b" variable="--red-800" />
            <ColorSwatch color="bg-red-900" name="Red 900" hex="#7f1d1d" variable="--red-900" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Green</h3>
          <div className="grid grid-cols-5 gap-2">
            <ColorSwatch color="bg-green-50" name="Green 50" hex="#f0fdf4" variable="--green-50" />
            <ColorSwatch color="bg-green-100" name="Green 100" hex="#dcfce7" variable="--green-100" />
            <ColorSwatch color="bg-green-200" name="Green 200" hex="#bbf7d0" variable="--green-200" />
            <ColorSwatch color="bg-green-300" name="Green 300" hex="#86efac" variable="--green-300" />
            <ColorSwatch color="bg-green-400" name="Green 400" hex="#4ade80" variable="--green-400" />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            <ColorSwatch color="bg-green-500" name="Green 500" hex="#22c55e" variable="--green-500" />
            <ColorSwatch color="bg-green-600" name="Green 600" hex="#16a34a" variable="--green-600" />
            <ColorSwatch color="bg-green-700" name="Green 700" hex="#15803d" variable="--green-700" />
            <ColorSwatch color="bg-green-800" name="Green 800" hex="#166534" variable="--green-800" />
            <ColorSwatch color="bg-green-900" name="Green 900" hex="#14532d" variable="--green-900" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Yellow</h3>
          <div className="grid grid-cols-5 gap-2">
            <ColorSwatch color="bg-yellow-50" name="Yellow 50" hex="#fefce8" variable="--yellow-50" />
            <ColorSwatch color="bg-yellow-100" name="Yellow 100" hex="#fef3c7" variable="--yellow-100" />
            <ColorSwatch color="bg-yellow-200" name="Yellow 200" hex="#fde68a" variable="--yellow-200" />
            <ColorSwatch color="bg-yellow-300" name="Yellow 300" hex="#fcd34d" variable="--yellow-300" />
            <ColorSwatch color="bg-yellow-400" name="Yellow 400" hex="#fbbf24" variable="--yellow-400" />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            <ColorSwatch color="bg-yellow-500" name="Yellow 500" hex="#eab308" variable="--yellow-500" />
            <ColorSwatch color="bg-yellow-600" name="Yellow 600" hex="#ca8a04" variable="--yellow-600" />
            <ColorSwatch color="bg-yellow-700" name="Yellow 700" hex="#a16207" variable="--yellow-700" />
            <ColorSwatch color="bg-yellow-800" name="Yellow 800" hex="#854d0e" variable="--yellow-800" />
            <ColorSwatch color="bg-yellow-900" name="Yellow 900" hex="#713f12" variable="--yellow-900" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Purple</h3>
          <div className="grid grid-cols-5 gap-2">
            <ColorSwatch color="bg-purple-50" name="Purple 50" hex="#faf5ff" variable="--purple-50" />
            <ColorSwatch color="bg-purple-100" name="Purple 100" hex="#f3e8ff" variable="--purple-100" />
            <ColorSwatch color="bg-purple-200" name="Purple 200" hex="#e9d5ff" variable="--purple-200" />
            <ColorSwatch color="bg-purple-300" name="Purple 300" hex="#c4b5fd" variable="--purple-300" />
            <ColorSwatch color="bg-purple-400" name="Purple 400" hex="#a78bfa" variable="--purple-400" />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            <ColorSwatch color="bg-purple-500" name="Purple 500" hex="#8b5cf6" variable="--purple-500" />
            <ColorSwatch color="bg-purple-600" name="Purple 600" hex="#7c3aed" variable="--purple-600" />
            <ColorSwatch color="bg-purple-700" name="Purple 700" hex="#6d28d9" variable="--purple-700" />
            <ColorSwatch color="bg-purple-800" name="Purple 800" hex="#5b21b6" variable="--purple-800" />
            <ColorSwatch color="bg-purple-900" name="Purple 900" hex="#581c87" variable="--purple-900" />
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Pink</h3>
          <div className="grid grid-cols-5 gap-2">
            <ColorSwatch color="bg-pink-50" name="Pink 50" hex="#fdf2f8" variable="--pink-50" />
            <ColorSwatch color="bg-pink-100" name="Pink 100" hex="#fce7f3" variable="--pink-100" />
            <ColorSwatch color="bg-pink-200" name="Pink 200" hex="#fbcfe8" variable="--pink-200" />
            <ColorSwatch color="bg-pink-300" name="Pink 300" hex="#f9a8d4" variable="--pink-300" />
            <ColorSwatch color="bg-pink-400" name="Pink 400" hex="#f472b6" variable="--pink-400" />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            <ColorSwatch color="bg-pink-500" name="Pink 500" hex="#ec4899" variable="--pink-500" />
            <ColorSwatch color="bg-pink-600" name="Pink 600" hex="#db2777" variable="--pink-600" />
            <ColorSwatch color="bg-pink-700" name="Pink 700" hex="#be185d" variable="--pink-700" />
            <ColorSwatch color="bg-pink-800" name="Pink 800" hex="#9d174d" variable="--pink-800" />
            <ColorSwatch color="bg-pink-900" name="Pink 900" hex="#831843" variable="--pink-900" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Orange</h3>
          <div className="grid grid-cols-5 gap-2">
            <ColorSwatch color="bg-orange-50" name="Orange 50" hex="#fff7ed" variable="--orange-50" />
            <ColorSwatch color="bg-orange-100" name="Orange 100" hex="#ffedd5" variable="--orange-100" />
            <ColorSwatch color="bg-orange-200" name="Orange 200" hex="#fed7aa" variable="--orange-200" />
            <ColorSwatch color="bg-orange-300" name="Orange 300" hex="#fdba74" variable="--orange-300" />
            <ColorSwatch color="bg-orange-400" name="Orange 400" hex="#fb923c" variable="--orange-400" />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            <ColorSwatch color="bg-orange-500" name="Orange 500" hex="#f97316" variable="--orange-500" />
            <ColorSwatch color="bg-orange-600" name="Orange 600" hex="#ea580c" variable="--orange-600" />
            <ColorSwatch color="bg-orange-700" name="Orange 700" hex="#c2410c" variable="--orange-700" />
            <ColorSwatch color="bg-orange-800" name="Orange 800" hex="#9a3412" variable="--orange-800" />
            <ColorSwatch color="bg-orange-900" name="Orange 900" hex="#7c2d12" variable="--orange-900" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Teal</h3>
          <div className="grid grid-cols-5 gap-2">
            <ColorSwatch color="bg-teal-50" name="Teal 50" hex="#f0fdfa" variable="--teal-50" />
            <ColorSwatch color="bg-teal-100" name="Teal 100" hex="#ccfbf1" variable="--teal-100" />
            <ColorSwatch color="bg-teal-200" name="Teal 200" hex="#99f6e4" variable="--teal-200" />
            <ColorSwatch color="bg-teal-300" name="Teal 300" hex="#5eead4" variable="--teal-300" />
            <ColorSwatch color="bg-teal-400" name="Teal 400" hex="#2dd4bf" variable="--teal-400" />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            <ColorSwatch color="bg-teal-500" name="Teal 500" hex="#14b8a6" variable="--teal-500" />
            <ColorSwatch color="bg-teal-600" name="Teal 600" hex="#0d9488" variable="--teal-600" />
            <ColorSwatch color="bg-teal-700" name="Teal 700" hex="#0f766e" variable="--teal-700" />
            <ColorSwatch color="bg-teal-800" name="Teal 800" hex="#115e59" variable="--teal-800" />
            <ColorSwatch color="bg-teal-900" name="Teal 900" hex="#134e4a" variable="--teal-900" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Cyan</h3>
          <div className="grid grid-cols-5 gap-2">
            <ColorSwatch color="bg-cyan-50" name="Cyan 50" hex="#ecfeff" variable="--cyan-50" />
            <ColorSwatch color="bg-cyan-100" name="Cyan 100" hex="#cffafe" variable="--cyan-100" />
            <ColorSwatch color="bg-cyan-200" name="Cyan 200" hex="#a5f3fc" variable="--cyan-200" />
            <ColorSwatch color="bg-cyan-300" name="Cyan 300" hex="#67e8f9" variable="--cyan-300" />
            <ColorSwatch color="bg-cyan-400" name="Cyan 400" hex="#22d3ee" variable="--cyan-400" />
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            <ColorSwatch color="bg-cyan-500" name="Cyan 500" hex="#06b6d4" variable="--cyan-500" />
            <ColorSwatch color="bg-cyan-600" name="Cyan 600" hex="#0891b2" variable="--cyan-600" />
            <ColorSwatch color="bg-cyan-700" name="Cyan 700" hex="#0e7490" variable="--cyan-700" />
            <ColorSwatch color="bg-cyan-800" name="Cyan 800" hex="#155e75" variable="--cyan-800" />
            <ColorSwatch color="bg-cyan-900" name="Cyan 900" hex="#164e63" variable="--cyan-900" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete color palette showing all available colors and their variations.',
      },
    },
  },
};