import type { Decorator } from '@storybook/react';
import { useEffect } from 'react';

const _DARK_BACKGROUND = 'var(--gray-900)';

// Helper function to determine if a color is dark
const _isDarkColor = (rgbString: string): boolean => {
  const match = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) return false;

  const [, r, g, b] = match.map(Number);
  // Calculate brightness using standard formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128; // Dark if brightness is less than 50%
};

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light';

  // Apply theme to document root and Storybook UI
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.setAttribute('data-theme', theme);
    body.setAttribute('data-theme', theme);

    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }

    // Force update Storybook UI elements
    const storybookElements = [
      '.sidebar-container',
      '.sb-bar',
      '[data-side="left"]',
      '.toolbar',
      '[data-testid="toolbar"]',
    ];

    storybookElements.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        if (theme === 'dark') {
          element.classList.add('dark');
        } else {
          element.classList.remove('dark');
        }
      });
    });
  }, [theme]);

  // Skip decorator for ThemeProvider stories
  if (context.parameters.themeProvider) {
    return <Story />;
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''} data-theme={theme}>
      <Story />
    </div>
  );
};
