import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundation/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Spacing system for consistent layout spacing with comprehensive accessibility and testing support.

## Overview

The Spacing system provides consistent rem-based spacing units for padding, margins, and gaps. It supports responsive design and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
// Basic padding
<div className="p-4">Padding 1rem</div>

// Margin combinations
<div className="mx-6 my-3">Horizontal 1.5rem, Vertical 0.75rem</div>
\`\`\`

## Spacing Scale

### Padding
\`\`\`tsx
<div className="p-1">0.25rem (4px)</div>
<div className="p-2">0.5rem (8px)</div>
<div className="p-4">1rem (16px)</div>
<div className="p-6">1.5rem (24px)</div>
\`\`\`

### Margins
\`\`\`tsx
<div className="m-2">All sides 0.5rem</div>
<div className="mx-4">Horizontal 1rem</div>
<div className="my-3">Vertical 0.75rem</div>
\`\`\`

## Accessibility

The Spacing system is fully accessible with:

- **Touch targets**: Minimum 44px spacing for interactive elements
- **Reading flow**: Consistent vertical rhythm for text content
- **Focus indicators**: Adequate spacing around focusable elements

\`\`\`tsx
// Accessible button spacing
<button className="px-4 py-2 m-2">Accessible Button</button>
\`\`\`

## Testing

Built-in testing support with spacing utilities:

\`\`\`tsx
<div className="p-4" data-testid="spaced-container">Content</div>
\`\`\`

\`\`\`tsx
// Test spacing
expect(screen.getByTestId('spaced-container')).toHaveClass('p-4');
\`\`\`

## Best Practices

### Do
- Use consistent spacing scale values
- Apply responsive spacing with breakpoint prefixes
- Maintain vertical rhythm in text layouts

### Don't
- Mix arbitrary spacing values with system scale
- Use excessive spacing that breaks visual hierarchy
- Ignore touch target minimum sizes on mobile
`,
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

export const Default: Story = {
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

export const Padding: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-2 bg-gray-100 border">p-2 (0.5rem padding)</div>
      <div className="p-4 bg-gray-100 border">p-4 (1rem padding)</div>
      <div className="px-6 py-3 bg-gray-100 border">px-6 py-3 (1.5rem horizontal, 0.75rem vertical)</div>
    </div>
  ),
};

export const Margins: Story = {
  render: () => (
    <div className="border-2 border-dashed border-gray-300 p-4">
      <div className="m-2 p-2 bg-blue-100 border">m-2 (0.5rem margin)</div>
      <div className="m-4 p-2 bg-blue-100 border">m-4 (1rem margin)</div>
      <div className="mx-6 my-2 p-2 bg-blue-100 border">mx-6 my-2 (1.5rem horizontal, 0.5rem vertical)</div>
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="p-4 bg-white border rounded-lg shadow-sm">
        <h3 className="mb-3 text-lg font-semibold">Card Layout</h3>
        <p className="mb-4 text-gray-600">Consistent spacing creates visual hierarchy</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Action Button
        </button>
      </div>
      <div className="flex gap-4">
        <div className="p-3 bg-green-100 rounded">Item 1</div>
        <div className="p-3 bg-green-100 rounded">Item 2</div>
        <div className="p-3 bg-green-100 rounded">Item 3</div>
      </div>
    </div>
  ),
};