import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

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

// Make vi available globally for tests that use jest.fn()
// @ts-ignore
globalThis.jest = {
  fn: vi.fn,
  clearAllMocks: vi.clearAllMocks,
};
