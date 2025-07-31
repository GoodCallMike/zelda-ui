import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeProvider';
import { Button } from '../Button';
import { TextSecondary } from '../Typography';

const ThemeDemo = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);
  
  return (
    <div className={`${resolvedTheme === 'dark' ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg border border-gray-200 dark:border-gray-700`}>
      <h3 className="text-lg font-semibold mb-4">Theme Demo</h3>
      <p className="text-muted mb-4">Current theme: {theme} (resolved: {resolvedTheme})</p>
      
      <div className="flex gap-2 mb-4">
        <Button 
          variant={theme === 'light' ? 'primary' : 'secondary'}
          onClick={() => setTheme('light')}
        >
          Light
        </Button>
        <Button 
          variant={theme === 'dark' ? 'primary' : 'secondary'}
          onClick={() => setTheme('dark')}
        >
          Dark
        </Button>
        <Button 
          variant={theme === 'system' ? 'primary' : 'secondary'}
          onClick={() => setTheme('system')}
        >
          System
        </Button>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <TextSecondary className="text-sm">This content adapts to the current theme automatically.</TextSecondary>
      </div>
    </div>
  );
};

const meta: Meta<typeof ThemeProvider> = {
  title: 'Core/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `ThemeProvider component for theme management with comprehensive accessibility and testing support.

## Overview

The ThemeProvider component provides theme management with light/dark mode support, system preference detection, and persistent storage. It maintains WCAG 2.1 AA accessibility compliance with proper contrast ratios.

## Quick Start

\`\`\`tsx
import { ThemeProvider, useTheme } from '@zelda/core';

// Basic usage
<ThemeProvider defaultTheme="system">
  <App />
</ThemeProvider>

// With options
<ThemeProvider 
  defaultTheme="light"
  storageKey="my-app-theme"
>
  <App />
</ThemeProvider>
\`\`\`

## Theme Management

### Using the Hook
\`\`\`tsx
const { theme, setTheme, resolvedTheme } = useTheme();

// Change theme
setTheme('dark');
setTheme('light');
setTheme('system');
\`\`\`

### CSS Classes
\`\`\`tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content adapts to theme
</div>
\`\`\`

## Accessibility

The ThemeProvider component is fully accessible with:

- **System Preference Detection**: Respects user's OS theme preference
- **Contrast Compliance**: Maintains WCAG AA contrast ratios in all themes
- **Reduced Motion**: Respects user's motion preferences for theme transitions

\`\`\`tsx
// Accessibility example
<ThemeProvider 
  defaultTheme="system"
  testId="app-theme-provider"
>
  <App />
</ThemeProvider>
\`\`\`

## Testing

Built-in testing support with \`testId\` prop:

\`\`\`tsx
<ThemeProvider testId="theme-provider" defaultTheme="light">
  <App />
</ThemeProvider>
\`\`\`

\`\`\`tsx
// Test queries
screen.getByTestId('theme-provider');
// Test theme changes
const { setTheme } = renderHook(() => useTheme());
act(() => setTheme('dark'));
\`\`\`

## Best Practices

### Do
- Use system theme as default for better user experience
- Provide theme toggle controls in your UI
- Test all components in both light and dark themes

### Don't
- Force a specific theme without user control
- Forget to handle system preference changes
- Use colors that don't meet contrast requirements
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultTheme: {
      control: 'select',
      options: ['light', 'dark', 'system'],
      description: 'Initial theme setting',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'system' },
      },
    },
    storageKey: {
      control: 'text',
      description: 'localStorage key for persisting theme choice',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'zelda-theme' },
      },
    },
    testId: {
      control: 'text',
      description: 'Test identifier for automated testing',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light" storageKey="storybook-light">
      <ThemeDemo />
    </ThemeProvider>
  ),
  parameters: {
    backgrounds: { disable: true },
    docs: {
      description: {
        story: 'Basic theme provider with light theme as default.',
      },
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
};

export const ThemeModes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Light Theme</h4>
        <StaticThemeDemo theme="light" />
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">Dark Theme</h4>
        <StaticThemeDemo theme="dark" />
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-4 text-gray-900 dark:text-gray-100">System Theme</h4>
        <ThemeProvider defaultTheme="system" storageKey="demo-system">
          <ThemeDemo />
        </ThemeProvider>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { disable: true },
    docs: {
      description: {
        story: 'Different theme modes: light, dark, and system preference.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

const StaticThemeDemo = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg border border-gray-200 dark:border-gray-700`}>
      <h3 className="text-lg font-semibold mb-4">Theme Demo</h3>
      <p className="text-muted mb-4">Current theme: {theme} (resolved: {theme})</p>
      
      <div className="flex gap-2 mb-4">
        <Button variant={theme === 'light' ? 'primary' : 'secondary'}>
          Light
        </Button>
        <Button variant={theme === 'dark' ? 'primary' : 'secondary'}>
          Dark
        </Button>
        <Button variant="secondary">
          System
        </Button>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
        <TextSecondary className="text-sm">This content shows the {theme} theme appearance.</TextSecondary>
      </div>
    </div>
  );
};

export const ComponentShowcase: Story = {
  render: () => (
    <ThemeProvider defaultTheme="system" storageKey="showcase-theme">
      <ComponentShowcaseDemo />
    </ThemeProvider>
  ),
  parameters: {
    backgrounds: { disable: true },
    docs: {
      description: {
        story: 'Showcase of various components adapting to theme changes.',
      },
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
};

const ComponentShowcaseDemo = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);
  
  return (
    <div className={`${resolvedTheme === 'dark' ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg border border-gray-200 dark:border-gray-700`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Component Showcase</h3>
        <div className="flex gap-2">
          <Button 
            size="sm"
            variant={theme === 'light' ? 'primary' : 'outline'}
            onClick={() => setTheme('light')}
          >
            Light
          </Button>
          <Button 
            size="sm"
            variant={theme === 'dark' ? 'primary' : 'outline'}
            onClick={() => setTheme('dark')}
          >
            Dark
          </Button>
          <Button 
            size="sm"
            variant={theme === 'system' ? 'primary' : 'outline'}
            onClick={() => setTheme('system')}
          >
            System
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Card Component</h4>
          <TextSecondary>This card adapts its background and text colors based on the current theme.</TextSecondary>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Another Card</h4>
          <TextSecondary>Notice how all components maintain proper contrast ratios in both themes.</TextSecondary>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
        <p className="text-blue-800 dark:text-blue-200 text-sm">
          Current theme: <strong>{theme}</strong> (resolved: <strong>{resolvedTheme}</strong>)
        </p>
      </div>
    </div>
  );
};

export const Examples: Story = {
  render: () => (
    <ThemeProvider defaultTheme="system" storageKey="examples-theme">
      <ExamplesDemo />
    </ThemeProvider>
  ),
  parameters: {
    backgrounds: { disable: true },
    docs: {
      description: {
        story: 'Real-world examples showing theme integration in applications.',
      },
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
};

const ExamplesDemo = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);
  
  return (
    <div className={`${resolvedTheme === 'dark' ? 'dark' : ''} min-h-96`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <header className="border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">My Application</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Theme:</span>
              <select 
                value={theme} 
                onChange={(e) => setTheme(e.target.value as any)}
                className="px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          <div className="max-w-2xl">
            <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-blue-600 dark:text-blue-400">Users</h3>
                <p className="text-2xl font-bold mt-1">1,234</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-green-600 dark:text-green-400">Revenue</h3>
                <p className="text-2xl font-bold mt-1">$12,345</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-purple-600 dark:text-purple-400">Orders</h3>
                <p className="text-2xl font-bold mt-1">567</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-medium mb-3">Recent Activity</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                  <span className="text-sm">User John Doe registered</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                  <span className="text-sm">New order #1234 received</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">4 hours ago</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">Payment processed successfully</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">6 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};