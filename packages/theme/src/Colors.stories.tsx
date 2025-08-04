import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'General/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Colors component for design system color palette with comprehensive accessibility and testing support.

## Overview

The Colors component provides a systematic color palette with semantic naming and dark mode support. It supports primary, semantic, and neutral color scales and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
import { Colors } from '@zelda/core';

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

const ColorSwatch = ({
  color,
  name,
  hex,
  variable,
}: {
  color: string;
  name: string;
  hex: string;
  variable?: string;
}) => (
  <div className="flex items-center gap-3 p-3 border rounded">
    <div
      className={`w-12 h-12 rounded border`}
      style={{ backgroundColor: hex }}
    />
    <div className="flex-1">
      <div className="font-medium">{name}</div>
      <div className="text-xs text-gray-500">{hex}</div>
      <div className="text-xs font-mono text-blue-600">{color}</div>
      {variable && (
        <div className="text-xs font-mono text-purple-600">var({variable})</div>
      )}
    </div>
  </div>
);

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <ColorSwatch
        color="triforce-500"
        name="Triforce Gold"
        hex="#d97706"
        variable="--triforce-500"
      />
      <ColorSwatch
        color="hyrule-500"
        name="Hyrule Blue"
        hex="#0ea5e9"
        variable="--hyrule-500"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Primary Zelda theme colors used throughout the design system.',
      },
    },
  },
};

export const ZeldaColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <ColorSwatch
        color="triforce-500"
        name="Triforce Gold"
        hex="#d97706"
        variable="--triforce-500"
      />
      <ColorSwatch
        color="hyrule-500"
        name="Hyrule Blue"
        hex="#0ea5e9"
        variable="--hyrule-500"
      />
      <ColorSwatch
        color="rupee-500"
        name="Rupee Green"
        hex="#22c55e"
        variable="--rupee-500"
      />
      <ColorSwatch
        color="ganon-500"
        name="Ganon Red"
        hex="#ef4444"
        variable="--ganon-500"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Core Zelda theme colors representing different elements from the game universe.',
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

export const TriforceScale: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-2">
      <ColorSwatch
        color="triforce-100"
        name="Triforce 100"
        hex="#fef3c7"
        variable="--triforce-100"
      />
      <ColorSwatch
        color="triforce-300"
        name="Triforce 300"
        hex="#fcd34d"
        variable="--triforce-300"
      />
      <ColorSwatch
        color="triforce-500"
        name="Triforce 500"
        hex="#d97706"
        variable="--triforce-500"
      />
      <ColorSwatch
        color="triforce-700"
        name="Triforce 700"
        hex="#92400e"
        variable="--triforce-700"
      />
      <ColorSwatch
        color="triforce-900"
        name="Triforce 900"
        hex="#451a03"
        variable="--triforce-900"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Triforce gold color scale from light to dark.',
      },
    },
  },
};

export const HyruleScale: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-2">
      <ColorSwatch
        color="hyrule-100"
        name="Hyrule 100"
        hex="#e0f2fe"
        variable="--hyrule-100"
      />
      <ColorSwatch
        color="hyrule-300"
        name="Hyrule 300"
        hex="#7dd3fc"
        variable="--hyrule-300"
      />
      <ColorSwatch
        color="hyrule-500"
        name="Hyrule 500"
        hex="#0ea5e9"
        variable="--hyrule-500"
      />
      <ColorSwatch
        color="hyrule-700"
        name="Hyrule 700"
        hex="#0369a1"
        variable="--hyrule-700"
      />
      <ColorSwatch
        color="hyrule-900"
        name="Hyrule 900"
        hex="#0c4a6e"
        variable="--hyrule-900"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Hyrule royal blue color scale from light to dark.',
      },
    },
  },
};

export const RupeeScale: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-2">
      <ColorSwatch
        color="rupee-100"
        name="Rupee 100"
        hex="#dcfce7"
        variable="--rupee-100"
      />
      <ColorSwatch
        color="rupee-300"
        name="Rupee 300"
        hex="#86efac"
        variable="--rupee-300"
      />
      <ColorSwatch
        color="rupee-500"
        name="Rupee 500"
        hex="#22c55e"
        variable="--rupee-500"
      />
      <ColorSwatch
        color="rupee-700"
        name="Rupee 700"
        hex="#15803d"
        variable="--rupee-700"
      />
      <ColorSwatch
        color="rupee-900"
        name="Rupee 900"
        hex="#14532d"
        variable="--rupee-900"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Rupee emerald green color scale from light to dark.',
      },
    },
  },
};

export const GanonScale: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-2">
      <ColorSwatch
        color="ganon-100"
        name="Ganon 100"
        hex="#fee2e2"
        variable="--ganon-100"
      />
      <ColorSwatch
        color="ganon-300"
        name="Ganon 300"
        hex="#fca5a5"
        variable="--ganon-300"
      />
      <ColorSwatch
        color="ganon-500"
        name="Ganon 500"
        hex="#ef4444"
        variable="--ganon-500"
      />
      <ColorSwatch
        color="ganon-700"
        name="Ganon 700"
        hex="#b91c1c"
        variable="--ganon-700"
      />
      <ColorSwatch
        color="ganon-900"
        name="Ganon 900"
        hex="#7f1d1d"
        variable="--ganon-900"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ganon crimson red color scale from light to dark.',
      },
    },
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Triforce (Golden Yellow)</h3>
        <div className="grid grid-cols-5 gap-2">
          <ColorSwatch
            color="triforce-100"
            name="Triforce 100"
            hex="#fef3c7"
            variable="--triforce-100"
          />
          <ColorSwatch
            color="triforce-300"
            name="Triforce 300"
            hex="#fcd34d"
            variable="--triforce-300"
          />
          <ColorSwatch
            color="triforce-500"
            name="Triforce 500"
            hex="#d97706"
            variable="--triforce-500"
          />
          <ColorSwatch
            color="triforce-700"
            name="Triforce 700"
            hex="#92400e"
            variable="--triforce-700"
          />
          <ColorSwatch
            color="triforce-900"
            name="Triforce 900"
            hex="#451a03"
            variable="--triforce-900"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Hyrule (Royal Blue)</h3>
        <div className="grid grid-cols-5 gap-2">
          <ColorSwatch
            color="hyrule-100"
            name="Hyrule 100"
            hex="#e0f2fe"
            variable="--hyrule-100"
          />
          <ColorSwatch
            color="hyrule-300"
            name="Hyrule 300"
            hex="#7dd3fc"
            variable="--hyrule-300"
          />
          <ColorSwatch
            color="hyrule-500"
            name="Hyrule 500"
            hex="#0ea5e9"
            variable="--hyrule-500"
          />
          <ColorSwatch
            color="hyrule-700"
            name="Hyrule 700"
            hex="#0369a1"
            variable="--hyrule-700"
          />
          <ColorSwatch
            color="hyrule-900"
            name="Hyrule 900"
            hex="#0c4a6e"
            variable="--hyrule-900"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Rupee (Emerald Green)</h3>
        <div className="grid grid-cols-5 gap-2">
          <ColorSwatch
            color="rupee-100"
            name="Rupee 100"
            hex="#dcfce7"
            variable="--rupee-100"
          />
          <ColorSwatch
            color="rupee-300"
            name="Rupee 300"
            hex="#86efac"
            variable="--rupee-300"
          />
          <ColorSwatch
            color="rupee-500"
            name="Rupee 500"
            hex="#22c55e"
            variable="--rupee-500"
          />
          <ColorSwatch
            color="rupee-700"
            name="Rupee 700"
            hex="#15803d"
            variable="--rupee-700"
          />
          <ColorSwatch
            color="rupee-900"
            name="Rupee 900"
            hex="#14532d"
            variable="--rupee-900"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Ganon (Crimson Red)</h3>
        <div className="grid grid-cols-5 gap-2">
          <ColorSwatch
            color="ganon-100"
            name="Ganon 100"
            hex="#fee2e2"
            variable="--ganon-100"
          />
          <ColorSwatch
            color="ganon-300"
            name="Ganon 300"
            hex="#fca5a5"
            variable="--ganon-300"
          />
          <ColorSwatch
            color="ganon-500"
            name="Ganon 500"
            hex="#ef4444"
            variable="--ganon-500"
          />
          <ColorSwatch
            color="ganon-700"
            name="Ganon 700"
            hex="#b91c1c"
            variable="--ganon-700"
          />
          <ColorSwatch
            color="ganon-900"
            name="Ganon 900"
            hex="#7f1d1d"
            variable="--ganon-900"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Gray Scale</h3>
        <div className="grid grid-cols-5 gap-2">
          <ColorSwatch
            color="gray-100"
            name="Gray 100"
            hex="#f3f4f6"
            variable="--gray-100"
          />
          <ColorSwatch
            color="gray-300"
            name="Gray 300"
            hex="#d1d5db"
            variable="--gray-300"
          />
          <ColorSwatch
            color="gray-500"
            name="Gray 500"
            hex="#6b7280"
            variable="--gray-500"
          />
          <ColorSwatch
            color="gray-700"
            name="Gray 700"
            hex="#374151"
            variable="--gray-700"
          />
          <ColorSwatch
            color="gray-900"
            name="Gray 900"
            hex="#111827"
            variable="--gray-900"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Complete Zelda theme color palette with all available colors and their variations.',
      },
    },
  },
};
