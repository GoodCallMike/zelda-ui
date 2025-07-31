import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';

const meta: Meta = {
  title: 'Foundation/Theme',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `Theme system for consistent styling and dark mode support with comprehensive accessibility and testing support.

## Overview

The Theme system provides utility classes and CSS variables for consistent styling across components. It supports automatic dark mode switching and maintains WCAG 2.1 AA accessibility compliance.

## Quick Start

\`\`\`tsx
// Basic theming
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  Content adapts to theme
</div>

// CSS variables
<div style={{ backgroundColor: 'var(--gray-100)' }}>Themed background</div>
\`\`\`

## Utility Classes

### Layout
\`\`\`tsx
<div className="flex items-center justify-between gap-4">
<div className="grid grid-cols-2 gap-6">
<div className="relative absolute inset-0">
\`\`\`

### Colors
\`\`\`tsx
<div className="bg-blue-500 text-white border-gray-300">
<div className="hover:bg-gray-100 dark:bg-gray-800">
\`\`\`

## Accessibility

The Theme system is fully accessible with:

- **Color contrast**: WCAG AA compliant contrast ratios in all themes
- **Reduced motion**: Respects prefers-reduced-motion settings
- **High contrast**: Support for high contrast mode preferences

\`\`\`tsx
// Accessible color combinations
<button className="bg-blue-600 text-white hover:bg-blue-700">
  High contrast button
</button>
\`\`\`

## Testing

Built-in testing support with theme utilities:

\`\`\`tsx
<div data-theme="dark" data-testid="themed-container">
  Dark themed content
</div>
\`\`\`

\`\`\`tsx
// Test theme application
expect(screen.getByTestId('themed-container')).toHaveAttribute('data-theme', 'dark');
\`\`\`

## Best Practices

### Do
- Use semantic color tokens instead of raw values
- Test components in both light and dark themes
- Ensure sufficient color contrast in all themes

### Don't
- Hardcode color values that don't adapt to themes
- Ignore reduced motion preferences
- Use colors that fail accessibility standards
`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const ThemeDemo = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div 
    data-theme={theme}
    className="p-6 rounded-lg border"
    style={{ 
      backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
      borderColor: theme === 'dark' ? '#374151' : '#e5e7eb'
    }}
  >
    <h3 className="text-lg font-semibold mb-4" style={{ 
      color: theme === 'dark' ? '#f9fafb' : '#111827' 
    }}>
      {theme === 'dark' ? 'Dark' : 'Light'} Theme
    </h3>
    <div className="space-y-4">
      <TextField 
        label="Email" 
        placeholder="Enter your email"
        description="We'll never share your email"
      />
      <div className="flex gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  </div>
);

export const Default: Story = {
  render: () => <ThemeDemo theme="light" />,
};

export const DarkMode: Story = {
  render: () => <ThemeDemo theme="dark" />,
};



export const Examples: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="p-4 bg-white dark:bg-gray-800 border rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
          Adaptive Card
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This card automatically adapts to the current theme
        </p>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
            Tag 1
          </span>
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
            Tag 2
          </span>
        </div>
      </div>
    </div>
  ),
};