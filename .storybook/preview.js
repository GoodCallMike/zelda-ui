import React from 'react';
import '@zelda/theme';
import '../packages/theme/src/variables.css';
import './preview.css';

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
    // 'todo' - show a11y violations in the test UI only
    // 'error' - fail CI on a11y violations
    // 'off' - skip a11y checks entirely
    test: 'todo',
  },
};
