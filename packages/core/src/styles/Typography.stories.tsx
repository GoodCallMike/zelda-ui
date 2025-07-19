import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Typography system for the Jetstream design system with consistent text sizes, weights, and spacing.

## Text Sizes

Use utility classes for consistent text sizing based on Major Third scale (1.25 ratio):

\`\`\`tsx
<p className="text-xs">Extra small text (10.24px)</p>
<p className="text-sm">Small text (12.8px)</p>
<p className="text-base">Base text (16px - default)</p>
<p className="text-lg">Large text (20px)</p>
<p className="text-xl">Extra large text (25px)</p>
<p className="text-2xl">2X large text (31.25px)</p>
<p className="text-3xl">3X large text (39.06px)</p>
<p className="text-4xl">4X large text (48.83px)</p>
\`\`\`

## Font Weights

Control text weight with utility classes:

\`\`\`tsx
<p className="font-normal">Normal weight (400)</p>
<p className="font-medium">Medium weight (500)</p>
<p className="font-semibold">Semibold weight (600)</p>
<p className="font-bold">Bold weight (700)</p>
\`\`\`

## Text Colors

Use semantic color classes that adapt to theme:

\`\`\`tsx
<p className="text-gray-900 dark:text-gray-100">Primary text</p>
<p className="text-gray-600 dark:text-gray-400">Secondary text</p>
<p className="text-gray-500 dark:text-gray-500">Muted text</p>
<p className="text-blue-600 dark:text-blue-400">Link text</p>
\`\`\`

## CSS Variables

Use CSS variables in custom components:

\`\`\`css
.heading {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
}

[data-theme="dark"] .heading {
  color: var(--gray-100);
}
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const TextSizes: Story = {
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

export const TypographyScale: Story = {
  render: () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Heading 1 - Main page title
      </h1>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        Heading 2 - Section title
      </h2>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Heading 3 - Subsection title
      </h3>
      <p className="text-base text-gray-700 dark:text-gray-300">
        Body text - This is the standard paragraph text used throughout the application. 
        It provides good readability and comfortable line spacing.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Small text - Used for captions, helper text, and secondary information.
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-500">
        Extra small text - Used for timestamps, metadata, and fine print.
      </p>
    </div>
  ),
};