import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';

const meta: Meta = {
  title: 'Foundation/Theme',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `The Jetstream design system provides utility classes and CSS variables for consistent styling across components.

## Utility Classes

Use utility classes for common styling patterns:

\`\`\`tsx
// Layout
<div className="flex items-center justify-between gap-4">
<div className="grid grid-cols-2 gap-6">
<div className="relative absolute inset-0">

// Spacing
<div className="p-4 m-2 px-6 py-3">
<div className="space-y-4 gap-2">

// Sizing
<div className="w-full h-auto size-8">
<div className="max-w-md min-h-full">

// Colors
<div className="bg-blue-500 text-white border-gray-300">
<div className="hover:bg-gray-100 dark:bg-gray-800">
\`\`\`

## CSS Variables

Use CSS variables in CSS modules for consistent theming:

\`\`\`css
@import '@jetstream/core/styles/variables.css';

.component {
  background-color: var(--gray-100);
  color: var(--gray-900);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
}

[data-theme="dark"] .component {
  background-color: var(--gray-800);
  color: var(--gray-100);
}
\`\`\`

## Available Variables

\`\`\`css
/* Colors */
--blue-500, --gray-100, --gray-900, --white

/* Spacing */
--spacing-1, --spacing-2, --spacing-4, --spacing-6

/* Sizing */
--size-8, --size-64, --size-72

/* Typography */
--text-xs, --text-sm, --text-base
--font-medium, --font-semibold

/* Border Radius */
--radius-sm, --radius-md, --radius-lg
\`\`\`

## Dark Mode

Components automatically support dark mode using \`data-theme="dark"\`:

\`\`\`tsx
// Utility classes with dark mode
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">

// CSS variables automatically adapt
.component { color: var(--gray-900); } /* Changes in dark mode */
\`\`\``,
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

export const LightTheme: Story = {
  render: () => <ThemeDemo theme="light" />,
};

export const DarkTheme: Story = {
  render: () => <ThemeDemo theme="dark" />,
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ThemeDemo theme="light" />
      <ThemeDemo theme="dark" />
    </div>
  ),
};