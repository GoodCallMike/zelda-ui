import React from 'react';
import '@zelda/theme';
import '../packages/theme/src/variables.css.ts';
import './preview.css';
import './storybook-overrides.css';

// Ensure React is available globally
if (typeof globalThis !== 'undefined') {
  globalThis.React = React;
}
if (typeof global !== 'undefined') {
  global.React = React;
}
if (typeof window !== 'undefined') {
  window.React = React;
}

// Custom theme decorator that properly applies theme everywhere
const withGlobalTheme = (Story, context) => {
  // Check for theme override in story parameters first, then globals
  const themeOverride = context.parameters?.themes?.themeOverride;
  const globalTheme = context.globals.theme || 'light';

  let currentTheme;
  if (themeOverride) {
    currentTheme = themeOverride === 'Ganon (Dark)' ? 'dark' : 'light';
  } else {
    currentTheme = globalTheme;
  }

  const isDark = currentTheme === 'dark';

  React.useEffect(() => {
    // Apply to main document (Storybook UI)
    document.documentElement.classList.toggle('dark', isDark);
    document.body.classList.toggle('dark', isDark);

    // Set CSS custom properties directly on root
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--color-background', '#111827');
      root.style.setProperty('--color-foreground', '#f9fafb');
    } else {
      root.style.setProperty('--color-background', '#ffffff');
      root.style.setProperty('--color-foreground', '#111827');
    }
  }, [isDark]);

  // Wrap story with proper theme styling
  return React.createElement(
    'div',
    {
      className: isDark ? 'dark' : '',
      style: {
        backgroundColor: isDark ? '#111827' : '#ffffff',
        color: isDark ? '#f9fafb' : '#111827',
      },
    },
    React.createElement(Story),
  );
};

export const decorators = [withGlobalTheme];

export const globalTypes = {
  theme: {
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Zelda (Light)', icon: 'sun' },
        { value: 'dark', title: 'Ganon (Dark)', icon: 'moon' },
      ],
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  options: {
    storySort: {
      order: [
        'General',
        'Data Entry',
        'Data Display',
        'Navigation',
        'Feedback',
        'Layout',
      ],
    },
  },

  docs: {
    autodocs: 'tag',
  },

  a11y: {
    test: 'todo',
  },

  backgrounds: {
    disable: true,
  },
};
