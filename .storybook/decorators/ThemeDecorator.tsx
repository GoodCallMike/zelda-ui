import React, { useEffect } from 'react';
import type { Decorator } from '@storybook/react';
import { ThemeProvider } from '@jetstream/core';

const DARK_BACKGROUND = 'var(--gray-900)';

// Helper function to determine if a color is dark
const isDarkColor = (rgbString: string): boolean => {
  const match = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) return false;
  
  const [, r, g, b] = match.map(Number);
  // Calculate brightness using standard formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128; // Dark if brightness is less than 50%
};

export const ThemeDecorator: Decorator = (Story, context) => {
  // Skip decorator for ThemeProvider stories
  if (context.parameters.themeProvider) {
    return <Story />;
  }
  
  const theme = context.globals.theme || 'light';
  
  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
  
  return (
    <ThemeProvider defaultTheme={theme} storageKey={`storybook-${context.id}`}>
      <div className={theme === 'dark' ? 'dark' : ''}>
        <Story />
      </div>
    </ThemeProvider>
  );
};