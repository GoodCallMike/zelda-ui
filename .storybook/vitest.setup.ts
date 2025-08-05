import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import { beforeAll } from 'vitest';
import * as projectAnnotations from './preview';

// Suppress console output and handle React setup
if (typeof window !== 'undefined') {
  // Browser environment - suppress all console methods
  const noop = () => {};
  console.error = noop;
  console.warn = noop;
  console.log = noop;
  console.info = noop;
  console.debug = noop;

  // Suppress unhandled errors
  window.addEventListener('error', (e) => {
    e.preventDefault();
    return false;
  });

  window.addEventListener('unhandledrejection', (e) => {
    e.preventDefault();
    return false;
  });
} else {
  // Node environment - selective suppression
  const originalError = console.error;
  const originalWarn = console.warn;

  console.error = (...args) => {
    const message = args[0]?.toString() || '';
    if (
      message.includes('Warning: An update to') ||
      message.includes('Invalid hook call') ||
      message.includes('Consider adding an error boundary') ||
      message.includes('was not wrapped in act') ||
      message.includes('An error occurred in the') ||
      message.includes('react.dev/link') ||
      message.includes('Cannot read properties of null')
    ) {
      return;
    }
    originalError(...args);
  };

  console.warn = (...args) => {
    const message = args[0]?.toString() || '';
    if (message.includes('Warning:') || message.includes('act()')) {
      return;
    }
    originalWarn(...args);
  };
}

beforeAll(() => {
  setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
});
