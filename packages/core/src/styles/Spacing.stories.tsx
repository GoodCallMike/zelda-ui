import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundation/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Consistent spacing system for the Jetstream design system using rem-based units.

## Spacing Scale

The spacing system uses a consistent scale for padding, margins, and gaps:

\`\`\`tsx
// Padding
<div className="p-1">Padding 0.25rem (4px)</div>
<div className="p-2">Padding 0.5rem (8px)</div>
<div className="p-4">Padding 1rem (16px)</div>
<div className="p-6">Padding 1.5rem (24px)</div>

// Margins
<div className="m-2">Margin 0.5rem</div>
<div className="mx-4">Horizontal margin 1rem</div>
<div className="my-3">Vertical margin 0.75rem</div>

// Gaps
<div className="flex gap-2">Gap 0.5rem</div>
<div className="grid gap-4">Gap 1rem</div>
\`\`\`

## CSS Variables

Use spacing variables in custom components:

\`\`\`css
.component {
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  gap: var(--spacing-2);
}
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const SpacingDemo = ({ size, label }: { size: string; label: string }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className={`bg-blue-500 ${size}`} />
    <span className="font-mono text-sm">{label}</span>
  </div>
);

export const SpacingScale: Story = {
  render: () => (
    <div>
      <SpacingDemo size="w-1 h-8" label="spacing-1 (0.25rem / 4px)" />
      <SpacingDemo size="w-2 h-8" label="spacing-2 (0.5rem / 8px)" />
      <SpacingDemo size="w-3 h-8" label="spacing-3 (0.75rem / 12px)" />
      <SpacingDemo size="w-4 h-8" label="spacing-4 (1rem / 16px)" />
      <SpacingDemo size="w-6 h-8" label="spacing-6 (1.5rem / 24px)" />
      <SpacingDemo size="w-8 h-8" label="spacing-8 (2rem / 32px)" />
    </div>
  ),
};

export const PaddingExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-2 bg-gray-100 border">p-2 (0.5rem padding)</div>
      <div className="p-4 bg-gray-100 border">p-4 (1rem padding)</div>
      <div className="px-6 py-3 bg-gray-100 border">px-6 py-3 (1.5rem horizontal, 0.75rem vertical)</div>
    </div>
  ),
};

export const MarginExamples: Story = {
  render: () => (
    <div className="border-2 border-dashed border-gray-300 p-4">
      <div className="m-2 p-2 bg-blue-100 border">m-2 (0.5rem margin)</div>
      <div className="m-4 p-2 bg-blue-100 border">m-4 (1rem margin)</div>
      <div className="mx-6 my-2 p-2 bg-blue-100 border">mx-6 my-2 (1.5rem horizontal, 0.5rem vertical)</div>
    </div>
  ),
};