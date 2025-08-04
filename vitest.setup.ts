import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';
import { configure } from '@testing-library/react';

// Configure testing library to automatically wrap updates in act
configure({ asyncUtilTimeout: 2000 });

// Fix React hooks availability
// @ts-ignore
globalThis.React = React;
// @ts-ignore
global.React = React;

// Mock JSDOM missing methods
Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
  value: vi.fn(),
  writable: true,
});

// Suppress React act warnings in tests
const originalError = console.error;
console.error = (...args) => {
  if (args[0]?.includes?.('Warning: An update to') && args[0]?.includes?.('was not wrapped in act')) {
    return;
  }
  originalError(...args);
};

// Make vi available globally for tests that use jest.fn()
// @ts-ignore
globalThis.jest = {
  fn: vi.fn,
  clearAllMocks: vi.clearAllMocks,
};
