import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';
import { configure } from '@testing-library/react';

// Configure testing library
configure({ asyncUtilTimeout: 2000 });

// Ensure React is available globally
// @ts-ignore
globalThis.React = React;
// @ts-ignore
global.React = React;

// Mock JSDOM missing methods
Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
  value: vi.fn(),
  writable: true,
});

// Suppress all React warnings in tests to reduce noise
const originalError = console.error;
const originalWarn = console.warn;

console.error = (...args) => {
  const message = args[0]?.toString() || '';
  if (
    message.includes('Warning: An update to') ||
    message.includes('Invalid hook call') ||
    message.includes('Consider adding an error boundary')
  ) {
    return;
  }
  originalError(...args);
};

console.warn = (...args) => {
  const message = args[0]?.toString() || '';
  if (message.includes('Warning:')) {
    return;
  }
  originalWarn(...args);
};

// Make vi available globally
// @ts-ignore
globalThis.jest = {
  fn: vi.fn,
  clearAllMocks: vi.clearAllMocks,
};
