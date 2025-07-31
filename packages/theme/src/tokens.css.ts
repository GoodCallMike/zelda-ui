// Import the shared CSS variables
import './variables.css';

// Consolidated color tokens
export const colors = {
  // Base colors
  white: 'var(--white)',
  black: 'var(--black)',
  
  // Grays
  gray: {
    50: 'var(--gray-50)',
    100: 'var(--gray-100)',
    200: 'var(--gray-200)',
    300: 'var(--gray-300)',
    400: 'var(--gray-400)',
    500: 'var(--gray-500)',
    600: 'var(--gray-600)',
    700: 'var(--gray-700)',
    800: 'var(--gray-800)',
    900: 'var(--gray-900)',
  },
  
  // Electric Blue
  blue: {
    50: 'var(--blue-50)',
    100: 'var(--blue-100)',
    200: 'var(--blue-200)',
    300: 'var(--blue-300)',
    400: 'var(--blue-400)',
    500: 'var(--blue-500)',
    600: 'var(--blue-600)',
    700: 'var(--blue-700)',
    800: 'var(--blue-800)',
    900: 'var(--blue-900)',
  },
  
  // Red
  red: {
    50: 'var(--red-50)',
    100: 'var(--red-100)',
    200: 'var(--red-200)',
    300: 'var(--red-300)',
    400: 'var(--red-400)',
    500: 'var(--red-500)',
    600: 'var(--red-600)',
    700: 'var(--red-700)',
    800: 'var(--red-800)',
    900: 'var(--red-900)',
  },
  
  // Yellow
  yellow: {
    50: 'var(--yellow-50)',
    100: 'var(--yellow-100)',
    200: 'var(--yellow-200)',
    300: 'var(--yellow-300)',
    400: 'var(--yellow-400)',
    500: 'var(--yellow-500)',
    600: 'var(--yellow-600)',
    700: 'var(--yellow-700)',
    800: 'var(--yellow-800)',
    900: 'var(--yellow-900)',
  },
  
  // Green
  green: {
    50: 'var(--green-50)',
    100: 'var(--green-100)',
    200: 'var(--green-200)',
    300: 'var(--green-300)',
    400: 'var(--green-400)',
    500: 'var(--green-500)',
    600: 'var(--green-600)',
    700: 'var(--green-700)',
    800: 'var(--green-800)',
    900: 'var(--green-900)',
  },
  
  // Purple
  purple: {
    50: 'var(--purple-50)',
    100: 'var(--purple-100)',
    200: 'var(--purple-200)',
    300: 'var(--purple-300)',
    400: 'var(--purple-400)',
    500: 'var(--purple-500)',
    600: 'var(--purple-600)',
    700: 'var(--purple-700)',
    800: 'var(--purple-800)',
    900: 'var(--purple-900)',
  },
  
  // Pink
  pink: {
    50: 'var(--pink-50)',
    100: 'var(--pink-100)',
    200: 'var(--pink-200)',
    300: 'var(--pink-300)',
    400: 'var(--pink-400)',
    500: 'var(--pink-500)',
    600: 'var(--pink-600)',
    700: 'var(--pink-700)',
    800: 'var(--pink-800)',
    900: 'var(--pink-900)',
  },
  
  // Orange
  orange: {
    50: 'var(--orange-50)',
    100: 'var(--orange-100)',
    200: 'var(--orange-200)',
    300: 'var(--orange-300)',
    400: 'var(--orange-400)',
    500: 'var(--orange-500)',
    600: 'var(--orange-600)',
    700: 'var(--orange-700)',
    800: 'var(--orange-800)',
    900: 'var(--orange-900)',
  },
  
  // Teal
  teal: {
    50: 'var(--teal-50)',
    100: 'var(--teal-100)',
    200: 'var(--teal-200)',
    300: 'var(--teal-300)',
    400: 'var(--teal-400)',
    500: 'var(--teal-500)',
    600: 'var(--teal-600)',
    700: 'var(--teal-700)',
    800: 'var(--teal-800)',
    900: 'var(--teal-900)',
  },
  
  // Cyan
  cyan: {
    50: 'var(--cyan-50)',
    100: 'var(--cyan-100)',
    200: 'var(--cyan-200)',
    300: 'var(--cyan-300)',
    400: 'var(--cyan-400)',
    500: 'var(--cyan-500)',
    600: 'var(--cyan-600)',
    700: 'var(--cyan-700)',
    800: 'var(--cyan-800)',
    900: 'var(--cyan-900)',
  },
} as const;

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