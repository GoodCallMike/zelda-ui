import { setProjectAnnotations } from '@storybook/react-vite';
import { beforeAll } from 'vitest';
import * as projectAnnotations from './preview';

// Completely suppress console output in Storybook tests
if (typeof window !== 'undefined') {
  // Browser environment - suppress all console methods
  const noop = () => {};
  console.error = noop;
  console.warn = noop;
  console.log = noop;
  console.info = noop;
  console.debug = noop;
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
      message.includes('react.dev/link')
    ) {
      return;
    }
    originalError(...args);
  };
  
  console.warn = (...args) => {
    const message = args[0]?.toString() || '';
    if (
      message.includes('Warning:') ||
      message.includes('act()')
    ) {
      return;
    }
    originalWarn(...args);
  };
}

beforeAll(() => {
  setProjectAnnotations([projectAnnotations]);
});
