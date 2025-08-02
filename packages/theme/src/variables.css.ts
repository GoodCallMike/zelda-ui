import { globalStyle } from '@vanilla-extract/css';

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
    
    // Triforce (Golden Yellow)
    '--triforce-50': '#fffbeb',
    '--triforce-100': '#fef3c7',
    '--triforce-200': '#fde68a',
    '--triforce-300': '#fcd34d',
    '--triforce-400': '#f59e0b',
    '--triforce-500': '#d97706',
    '--triforce-600': '#b45309',
    '--triforce-700': '#92400e',
    '--triforce-800': '#78350f',
    '--triforce-900': '#451a03',
    
    // Hyrule (Royal Blue)
    '--hyrule-50': '#f0f9ff',
    '--hyrule-100': '#e0f2fe',
    '--hyrule-200': '#bae6fd',
    '--hyrule-300': '#7dd3fc',
    '--hyrule-400': '#38bdf8',
    '--hyrule-500': '#0ea5e9',
    '--hyrule-600': '#0284c7',
    '--hyrule-700': '#0369a1',
    '--hyrule-800': '#075985',
    '--hyrule-900': '#0c4a6e',
    
    // Rupee (Emerald Green)
    '--rupee-50': '#f0fdf4',
    '--rupee-100': '#dcfce7',
    '--rupee-200': '#bbf7d0',
    '--rupee-300': '#86efac',
    '--rupee-400': '#4ade80',
    '--rupee-500': '#22c55e',
    '--rupee-600': '#16a34a',
    '--rupee-700': '#15803d',
    '--rupee-800': '#166534',
    '--rupee-900': '#14532d',
    
    // Ganon (Crimson Red)
    '--ganon-50': '#fef2f2',
    '--ganon-100': '#fee2e2',
    '--ganon-200': '#fecaca',
    '--ganon-300': '#fca5a5',
    '--ganon-400': '#f87171',
    '--ganon-500': '#ef4444',
    '--ganon-600': '#dc2626',
    '--ganon-700': '#b91c1c',
    '--ganon-800': '#991b1b',
    '--ganon-900': '#7f1d1d',
    
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
    
    // Border Radius
    '--radius-sm': '0.125rem',
    '--radius-base': '0.25rem',
    '--radius-md': '0.375rem',
    '--radius-lg': '0.5rem',
    '--radius-full': '9999px',
    
    // Box Shadows
    '--shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '--shadow-base': '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    '--shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    '--shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  }
});
