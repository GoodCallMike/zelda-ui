import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Typography system for consistent text styling with comprehensive accessibility and testing support.

## Overview

The Typography system provides consistent text sizes, weights, and colors based on a Major Third scale (1.25 ratio). It supports responsive design and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
// Basic text styling
<h1 className="text-2xl font-bold">Main Heading</h1>
<p className="text-base text-gray-700">Body text content</p>
\`\`\`

## Text Sizes

### Scale
\`\`\`tsx
<p className="text-xs">Extra small (10.24px)</p>
<p className="text-sm">Small (12.8px)</p>
<p className="text-base">Base (16px)</p>
<p className="text-lg">Large (20px)</p>
<p className="text-xl">Extra large (25px)</p>
<p className="text-2xl">2X large (31.25px)</p>
\`\`\`

### Font Weights
\`\`\`tsx
<p className="font-normal">Normal (400)</p>
<p className="font-medium">Medium (500)</p>
<p className="font-semibold">Semibold (600)</p>
<p className="font-bold">Bold (700)</p>
\`\`\`

## Accessibility

The Typography system is fully accessible with:

- **Contrast ratios**: WCAG AA compliant color combinations
- **Reading flow**: Consistent line heights and spacing
- **Scalability**: Supports browser zoom up to 200%

\`\`\`tsx
// Accessible text combinations
<h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
  High contrast heading
</h2>
\`\`\`

## Testing

Built-in testing support with typography utilities:

\`\`\`tsx
<h1 className="text-2xl font-bold" data-testid="page-title">
  Page Title
</h1>
\`\`\`

\`\`\`tsx
// Test typography
expect(screen.getByTestId('page-title')).toHaveClass('text-2xl', 'font-bold');
\`\`\`

## Best Practices

### Do
- Use semantic heading hierarchy (h1, h2, h3)
- Maintain consistent line heights for readability
- Test text at different zoom levels

### Don't
- Skip heading levels in hierarchy
- Use color alone to convey information
- Set font sizes below 12px for body text
`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-xs">Extra small text (10.24px) - text-xs</div>
      <div className="text-sm">Small text (12.8px) - text-sm</div>
      <div className="text-base">Base text (16px) - text-base</div>
      <div className="text-lg">Large text (20px) - text-lg</div>
      <div className="text-xl">Extra large text (25px) - text-xl</div>
      <div className="text-2xl">2X large text (31.25px) - text-2xl</div>
      <div className="text-3xl">3X large text (39.06px) - text-3xl</div>
      <div className="text-4xl">4X large text (48.83px) - text-4xl</div>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="font-normal">Normal weight (400) - font-normal</div>
      <div className="font-medium">Medium weight (500) - font-medium</div>
      <div className="font-semibold">Semibold weight (600) - font-semibold</div>
      <div className="font-bold">Bold weight (700) - font-bold</div>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-gray-900 dark:text-gray-100">Primary text - High contrast</div>
      <div className="text-gray-700 dark:text-gray-300">Secondary text - Medium contrast</div>
      <div className="text-gray-600 dark:text-gray-400">Tertiary text - Lower contrast</div>
      <div className="text-gray-500 dark:text-gray-500">Muted text - Subtle</div>
      <div className="text-blue-600 dark:text-blue-400">Link text - Interactive</div>
      <div className="text-red-600 dark:text-red-400">Error text - Destructive</div>
      <div className="text-green-600 dark:text-green-400">Success text - Positive</div>
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div className="space-y-6">
      <article className="max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Article Title - Semantic Heading Structure
        </h1>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Section Heading
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          This is body text with proper line height and spacing. It demonstrates 
          how typography creates readable content with good visual hierarchy.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Subsection
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Supporting text with smaller size for secondary information.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500">
          Fine print or metadata information.
        </p>
      </article>
    </div>
  ),
};