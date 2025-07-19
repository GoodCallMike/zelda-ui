import { globalStyle } from '@vanilla-extract/css';
import { colors } from './colors.css';

// Import the shared CSS variables
import './variables.css';

// Export JS objects for TypeScript consumers
export const spacing = {
  0: 'var(--spacing-0)',
  1: 'var(--spacing-1)',
  2: 'var(--spacing-2)',
  3: 'var(--spacing-3)',
  4: 'var(--spacing-4)',
  6: 'var(--spacing-6)',
  8: 'var(--spacing-8)',
} as const;

export const sizing = {
  8: 'var(--size-8)',
  64: 'var(--size-64)',
  72: 'var(--size-72)',
} as const;

export const borderRadius = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
} as const;

export const fontSize = {
  xs: 'var(--text-xs)',
  sm: 'var(--text-sm)',
  base: 'var(--text-base)',
} as const;

export const fontWeight = {
  medium: 'var(--font-medium)',
  semibold: 'var(--font-semibold)',
} as const;