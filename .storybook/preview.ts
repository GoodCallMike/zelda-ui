import type { Preview } from '@storybook/react';
import '@zelda/theme/dist/theme.css';

// Define expect before any imports that might use it
globalThis.expect = {
  extend: () => {},
  toHaveNoViolations: () => {},
  toBeInTheDocument: () => {},
  toHaveAttribute: () => {},
  toHaveValue: () => {},
  toHaveFocus: () => {},
  toBeEnabled: () => {},
  toBeDisabled: () => {},
  toBeChecked: () => {},
  toHaveTextContent: () => {},
  toHaveAccessibleName: () => {},
  toHaveAccessibleDescription: () => {},
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Getting Started',
          [
            'Introduction',
            'Installation',
            'Accessibility',
            'Accessibility Guide',
          ],
          'Design',
          ['Colors', 'Themes'],
          'General',
          'Data Entry',
          'Data Display',
          'Feedback',
          'Layout',
          '*',
        ],
      },
    },
  },
};

export default preview;
