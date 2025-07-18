import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeProvider';
import { Button } from '../Button';

const ThemeDemo = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  // Update document theme when resolved theme changes
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);
  
  return (
    <div data-theme={resolvedTheme} className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg border border-gray-200 dark:border-gray-700">
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
        <p className="text-sm">This content adapts to the current theme automatically.</p>
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
        component: `Theme management system with light/dark mode support, system preference detection, and persistent storage.

## Setup

\`\`\`tsx
import { ThemeProvider } from '@jetstream/core';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <YourApp />
    </ThemeProvider>
  );
}
\`\`\`

## Usage

\`\`\`tsx
import { useTheme } from '@jetstream/core';

const { theme, setTheme, resolvedTheme } = useTheme();
\`\`\`

## Dark Mode Classes

\`\`\`tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content adapts to theme
</div>
\`\`\``,
      },
    },
  },
  tags: ['autodocs'],
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
    themeProvider: true,
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark" storageKey="storybook-dark">
      <ThemeDemo />
    </ThemeProvider>
  ),
  parameters: {
    backgrounds: { disable: true },
    themeProvider: true,
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
};

export const SystemTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="system" storageKey="storybook-system">
      <ThemeDemo />
    </ThemeProvider>
  ),
  parameters: {
    backgrounds: { disable: true },
    themeProvider: true,
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
};