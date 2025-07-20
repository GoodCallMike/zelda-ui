import React from 'react';
import '../packages/core/src/styles';
import './preview.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#111827',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      // Skip decorator for ThemeProvider stories
      if (context.parameters.themeProvider) {
        return <Story />;
      }
      
      const backgroundName = context.globals.backgrounds?.value;
      const theme = backgroundName === 'dark' ? 'dark' : 'light';
      
      // Apply theme to document for Tailwind dark mode
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }
      
      return (
        <div className={theme === 'dark' ? 'dark' : ''}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;