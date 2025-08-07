import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Color palette with semantic naming and automatic dark mode support.

\`\`\`tsx
// Semantic usage (recommended)
<div className="bg-primary-600 text-white">Primary Action</div>
<div className="text-danger-600">Error Message</div>

// Standard color names
<div className="bg-yellow-500 text-white">Yellow Background</div>
<div className="text-red-600">Red Text</div>
\`\`\`

## Color Scales
- **primary** / **yellow** - Primary brand color (golden yellow)
- **secondary** / **blue** - Secondary theme (royal blue)
- **success** / **green** - Success states (emerald green)
- **danger** / **red** - Destructive actions (crimson red)
- **gray** - Neutral colors (backgrounds, text)
- **pink** - Pink accent colors
- **rose** - Rose accent colors
- **indigo** - Indigo accent colors
- **violet** - Violet accent colors
- **cyan** - Cyan accent colors
- **teal** - Teal accent colors
- **lime** - Lime accent colors
- **warning** - Warning states (orange)
- **info** - Information states (purple)

## Accessibility & Testing
- All colors maintain WCAG AA contrast ratios
- Automatic dark mode color transformations
- Semantic naming for screen reader clarity

\`\`\`tsx
// Testing approach
const element = screen.getByTestId('color-swatch');
expect(element).toHaveStyle('background-color: #d97706');
\`\`\``,
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
        color="primary-500 / yellow-500"
        name="Primary Color"
        hex="#d97706"
        variable="--triforce-500"
      />
      <ColorSwatch
        color="secondary-500 / blue-500"
        name="Secondary Color"
        hex="#0ea5e9"
        variable="--hyrule-500"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Primary theme colors used throughout the design system.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <ColorSwatch
        color="primary-500 / yellow-500"
        name="Primary / Yellow"
        hex="#d97706"
        variable="--triforce-500"
      />
      <ColorSwatch
        color="secondary-500 / blue-500"
        name="Secondary / Blue"
        hex="#0ea5e9"
        variable="--hyrule-500"
      />
      <ColorSwatch
        color="success-500 / green-500"
        name="Success / Green"
        hex="#22c55e"
        variable="--rupee-500"
      />
      <ColorSwatch
        color="danger-500 / red-500"
        name="Danger / Red"
        hex="#ef4444"
        variable="--ganon-500"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All theme color variants showing the complete palette.',
      },
    },
  },
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary / Yellow</h3>
        <div className="grid grid-cols-10 gap-2">
          <ColorSwatch
            color="primary-50 / yellow-50"
            name="50"
            hex="#fffbeb"
            variable="--triforce-50"
          />
          <ColorSwatch
            color="primary-100 / yellow-100"
            name="100"
            hex="#fef3c7"
            variable="--triforce-100"
          />
          <ColorSwatch
            color="primary-200 / yellow-200"
            name="200"
            hex="#fde68a"
            variable="--triforce-200"
          />
          <ColorSwatch
            color="primary-300 / yellow-300"
            name="300"
            hex="#fcd34d"
            variable="--triforce-300"
          />
          <ColorSwatch
            color="primary-400 / yellow-400"
            name="400"
            hex="#fbbf24"
            variable="--triforce-400"
          />
          <ColorSwatch
            color="primary-500 / yellow-500"
            name="500"
            hex="#d97706"
            variable="--triforce-500"
          />
          <ColorSwatch
            color="primary-600 / yellow-600"
            name="600"
            hex="#b45309"
            variable="--triforce-600"
          />
          <ColorSwatch
            color="primary-700 / yellow-700"
            name="700"
            hex="#92400e"
            variable="--triforce-700"
          />
          <ColorSwatch
            color="primary-800 / yellow-800"
            name="800"
            hex="#78350f"
            variable="--triforce-800"
          />
          <ColorSwatch
            color="primary-900 / yellow-900"
            name="900"
            hex="#451a03"
            variable="--triforce-900"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Secondary / Blue</h3>
        <div className="grid grid-cols-10 gap-2">
          <ColorSwatch
            color="secondary-50 / blue-50"
            name="50"
            hex="#f0f9ff"
            variable="--hyrule-50"
          />
          <ColorSwatch
            color="secondary-100 / blue-100"
            name="100"
            hex="#e0f2fe"
            variable="--hyrule-100"
          />
          <ColorSwatch
            color="secondary-200 / blue-200"
            name="200"
            hex="#bae6fd"
            variable="--hyrule-200"
          />
          <ColorSwatch
            color="secondary-300 / blue-300"
            name="300"
            hex="#7dd3fc"
            variable="--hyrule-300"
          />
          <ColorSwatch
            color="secondary-400 / blue-400"
            name="400"
            hex="#38bdf8"
            variable="--hyrule-400"
          />
          <ColorSwatch
            color="secondary-500 / blue-500"
            name="500"
            hex="#0ea5e9"
            variable="--hyrule-500"
          />
          <ColorSwatch
            color="secondary-600 / blue-600"
            name="600"
            hex="#0284c7"
            variable="--hyrule-600"
          />
          <ColorSwatch
            color="secondary-700 / blue-700"
            name="700"
            hex="#0369a1"
            variable="--hyrule-700"
          />
          <ColorSwatch
            color="secondary-800 / blue-800"
            name="800"
            hex="#075985"
            variable="--hyrule-800"
          />
          <ColorSwatch
            color="secondary-900 / blue-900"
            name="900"
            hex="#0c4a6e"
            variable="--hyrule-900"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Success / Green</h3>
        <div className="grid grid-cols-10 gap-2">
          <ColorSwatch
            color="success-50 / green-50"
            name="50"
            hex="#f0fdf4"
            variable="--rupee-50"
          />
          <ColorSwatch
            color="success-100 / green-100"
            name="100"
            hex="#dcfce7"
            variable="--rupee-100"
          />
          <ColorSwatch
            color="success-200 / green-200"
            name="200"
            hex="#bbf7d0"
            variable="--rupee-200"
          />
          <ColorSwatch
            color="success-300 / green-300"
            name="300"
            hex="#86efac"
            variable="--rupee-300"
          />
          <ColorSwatch
            color="success-400 / green-400"
            name="400"
            hex="#4ade80"
            variable="--rupee-400"
          />
          <ColorSwatch
            color="success-500 / green-500"
            name="500"
            hex="#22c55e"
            variable="--rupee-500"
          />
          <ColorSwatch
            color="success-600 / green-600"
            name="600"
            hex="#16a34a"
            variable="--rupee-600"
          />
          <ColorSwatch
            color="success-700 / green-700"
            name="700"
            hex="#15803d"
            variable="--rupee-700"
          />
          <ColorSwatch
            color="success-800 / green-800"
            name="800"
            hex="#166534"
            variable="--rupee-800"
          />
          <ColorSwatch
            color="success-900 / green-900"
            name="900"
            hex="#14532d"
            variable="--rupee-900"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Danger / Red</h3>
        <div className="grid grid-cols-10 gap-2">
          <ColorSwatch
            color="danger-50 / red-50"
            name="50"
            hex="#fef2f2"
            variable="--ganon-50"
          />
          <ColorSwatch
            color="danger-100 / red-100"
            name="100"
            hex="#fee2e2"
            variable="--ganon-100"
          />
          <ColorSwatch
            color="danger-200 / red-200"
            name="200"
            hex="#fecaca"
            variable="--ganon-200"
          />
          <ColorSwatch
            color="danger-300 / red-300"
            name="300"
            hex="#fca5a5"
            variable="--ganon-300"
          />
          <ColorSwatch
            color="danger-400 / red-400"
            name="400"
            hex="#f87171"
            variable="--ganon-400"
          />
          <ColorSwatch
            color="danger-500 / red-500"
            name="500"
            hex="#ef4444"
            variable="--ganon-500"
          />
          <ColorSwatch
            color="danger-600 / red-600"
            name="600"
            hex="#dc2626"
            variable="--ganon-600"
          />
          <ColorSwatch
            color="danger-700 / red-700"
            name="700"
            hex="#b91c1c"
            variable="--ganon-700"
          />
          <ColorSwatch
            color="danger-800 / red-800"
            name="800"
            hex="#991b1b"
            variable="--ganon-800"
          />
          <ColorSwatch
            color="danger-900 / red-900"
            name="900"
            hex="#7f1d1d"
            variable="--ganon-900"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Gray Scale</h3>
        <div className="grid grid-cols-10 gap-2">
          <ColorSwatch
            color="gray-50"
            name="50"
            hex="#f9fafb"
            variable="--gray-50"
          />
          <ColorSwatch
            color="gray-100"
            name="100"
            hex="#f3f4f6"
            variable="--gray-100"
          />
          <ColorSwatch
            color="gray-200"
            name="200"
            hex="#e5e7eb"
            variable="--gray-200"
          />
          <ColorSwatch
            color="gray-300"
            name="300"
            hex="#d1d5db"
            variable="--gray-300"
          />
          <ColorSwatch
            color="gray-400"
            name="400"
            hex="#9ca3af"
            variable="--gray-400"
          />
          <ColorSwatch
            color="gray-500"
            name="500"
            hex="#6b7280"
            variable="--gray-500"
          />
          <ColorSwatch
            color="gray-600"
            name="600"
            hex="#4b5563"
            variable="--gray-600"
          />
          <ColorSwatch
            color="gray-700"
            name="700"
            hex="#374151"
            variable="--gray-700"
          />
          <ColorSwatch
            color="gray-800"
            name="800"
            hex="#1f2937"
            variable="--gray-800"
          />
          <ColorSwatch
            color="gray-900"
            name="900"
            hex="#111827"
            variable="--gray-900"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Extended Rainbow Colors</h3>
        <div className="grid grid-cols-7 gap-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Pink</h4>
            <ColorSwatch
              color="pink-500"
              name="500"
              hex="#ec4899"
              variable="--pink-500"
            />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Rose</h4>
            <ColorSwatch
              color="rose-500"
              name="500"
              hex="#f43f5e"
              variable="--rose-500"
            />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Indigo</h4>
            <ColorSwatch
              color="indigo-500"
              name="500"
              hex="#6366f1"
              variable="--indigo-500"
            />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Violet</h4>
            <ColorSwatch
              color="violet-500"
              name="500"
              hex="#8b5cf6"
              variable="--violet-500"
            />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Cyan</h4>
            <ColorSwatch
              color="cyan-500"
              name="500"
              hex="#06b6d4"
              variable="--cyan-500"
            />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Teal</h4>
            <ColorSwatch
              color="teal-500"
              name="500"
              hex="#14b8a6"
              variable="--teal-500"
            />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Lime</h4>
            <ColorSwatch
              color="lime-500"
              name="500"
              hex="#84cc16"
              variable="--lime-500"
            />
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Each color includes full 50-900 shade range. Use{' '}
          <code className="bg-gray-100 px-1 rounded text-xs">bg-pink-500</code>,{' '}
          <code className="bg-gray-100 px-1 rounded text-xs">
            text-cyan-600
          </code>
          , etc.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Utility Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Warning (Orange)</h4>
            <ColorSwatch
              color="warning-500"
              name="500"
              hex="#f97316"
              variable="--warning-500"
            />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Info (Purple)</h4>
            <ColorSwatch
              color="info-500"
              name="500"
              hex="#a855f7"
              variable="--info-500"
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Complete color palette with full rainbow spectrum. Each color family includes 10 shades (50-900) for maximum design flexibility.',
      },
    },
  },
};
