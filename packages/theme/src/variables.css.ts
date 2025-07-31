import { globalStyle } from '@vanilla-extract/css';

// Define CSS variables globally
globalStyle(':root', {
  vars: {
    // Base Colors
    '--white': '#ffffff',
    '--black': '#000000',
    
    // Gray Scale
    '--gray-50': '#f9fafb',
    '--gray-100': '#f3f4f6',
    '--gray-200': '#e5e7eb',
    '--gray-300': '#d1d5db',
    '--gray-400': '#9ca3af',
    '--gray-500': '#6b7280',
    '--gray-600': '#4b5563',
    '--gray-700': '#374151',
    '--gray-800': '#1f2937',
    '--gray-900': '#111827',
    
    // Blue Scale
    '--blue-50': '#f0f9ff',
    '--blue-100': '#e0f2fe',
    '--blue-200': '#bae6fd',
    '--blue-300': '#7dd3fc',
    '--blue-400': '#38bdf8',
    '--blue-500': '#0ea5e9',
    '--blue-600': '#0284c7',
    '--blue-700': '#0369a1',
    '--blue-800': '#075985',
    '--blue-900': '#0c4a6e',
    
    // Yellow Scale
    '--yellow-50': '#fefce8',
    '--yellow-100': '#fef9c3',
    '--yellow-200': '#fef08a',
    '--yellow-300': '#fde047',
    '--yellow-400': '#facc15',
    '--yellow-500': '#eab308',
    '--yellow-600': '#ca8a04',
    '--yellow-700': '#a16207',
    '--yellow-800': '#854d0e',
    '--yellow-900': '#713f12',
    
    // Red Scale
    '--red-50': '#fef2f2',
    '--red-100': '#fee2e2',
    '--red-200': '#fecaca',
    '--red-300': '#fca5a5',
    '--red-400': '#f87171',
    '--red-500': '#ef4444',
    '--red-600': '#dc2626',
    '--red-700': '#b91c1c',
    '--red-800': '#991b1b',
    '--red-900': '#7f1d1d',
    
    // Green Scale
    '--green-50': '#f0fdf4',
    '--green-100': '#dcfce7',
    '--green-200': '#bbf7d0',
    '--green-300': '#86efac',
    '--green-400': '#4ade80',
    '--green-500': '#22c55e',
    '--green-600': '#16a34a',
    '--green-700': '#15803d',
    '--green-800': '#166534',
    '--green-900': '#14532d',
    
    // Spacing
    '--spacing-0': '0',
    '--spacing-1': '0.25rem',
    '--spacing-2': '0.5rem',
    '--spacing-3': '0.75rem',
    '--spacing-4': '1rem',
    '--spacing-5': '1.25rem',
    '--spacing-6': '1.5rem',
    '--spacing-8': '2rem',
    '--spacing-10': '2.5rem',
    '--spacing-12': '3rem',
    '--spacing-16': '4rem',
    '--spacing-20': '5rem',
    '--spacing-24': '6rem',
    '--spacing-32': '8rem',
    
    // Sizing
    '--size-8': '2rem',
    '--size-64': '16rem',
    '--size-72': '18rem',
    
    // Positioning
    '--top-6': '1.5rem',
    '--top-24': '6rem',
    
    // Opacity
    '--opacity-50': '0.5',
    
    // Border Radius
    '--radius-none': '0',
    '--radius-sm': '0.125rem',
    '--radius-base': '0.25rem',
    '--radius-md': '0.375rem',
    '--radius-lg': '0.5rem',
    '--radius-full': '9999px',
    
    // Typography
    '--text-xs': '0.75rem',
    '--text-sm': '0.875rem',
    '--text-base': '1rem',
    '--text-lg': '1.125rem',
    '--text-xl': '1.25rem',
    '--text-2xl': '1.5rem',
    '--text-3xl': '1.875rem',
    '--text-4xl': '2.25rem',
    
    // Font Weights
    '--font-normal': '400',
    '--font-medium': '500',
    '--font-semibold': '600',
    '--font-bold': '700',
    
    // Box Shadows
    '--shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '--shadow-base': '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    '--shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    '--shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  }
});

// Export JS objects for consumers who need raw values
export const cssVariables = {
  colors: {
    white: 'var(--white)',
    black: 'var(--black)',
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
  },
  spacing: {
    0: 'var(--spacing-0)',
    1: 'var(--spacing-1)',
    2: 'var(--spacing-2)',
    3: 'var(--spacing-3)',
    4: 'var(--spacing-4)',
    5: 'var(--spacing-5)',
    6: 'var(--spacing-6)',
    8: 'var(--spacing-8)',
    10: 'var(--spacing-10)',
    12: 'var(--spacing-12)',
    16: 'var(--spacing-16)',
    20: 'var(--spacing-20)',
    24: 'var(--spacing-24)',
    32: 'var(--spacing-32)',
  },
  sizing: {
    8: 'var(--size-8)',
    64: 'var(--size-64)',
    72: 'var(--size-72)',
  },
  borderRadius: {
    none: 'var(--radius-none)',
    sm: 'var(--radius-sm)',
    base: 'var(--radius-base)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    full: 'var(--radius-full)',
  },
  fontSize: {
    xs: 'var(--text-xs)',
    sm: 'var(--text-sm)',
    base: 'var(--text-base)',
    lg: 'var(--text-lg)',
    xl: 'var(--text-xl)',
    '2xl': 'var(--text-2xl)',
    '3xl': 'var(--text-3xl)',
    '4xl': 'var(--text-4xl)',
  },
  fontWeight: {
    normal: 'var(--font-normal)',
    medium: 'var(--font-medium)',
    semibold: 'var(--font-semibold)',
    bold: 'var(--font-bold)',
  },
  boxShadow: {
    sm: 'var(--shadow-sm)',
    base: 'var(--shadow-base)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  },
} as const;