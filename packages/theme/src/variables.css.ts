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

    // Warning (Orange)
    '--warning-50': '#fff7ed',
    '--warning-100': '#ffedd5',
    '--warning-200': '#fed7aa',
    '--warning-300': '#fdba74',
    '--warning-400': '#fb923c',
    '--warning-500': '#f97316',
    '--warning-600': '#ea580c',
    '--warning-700': '#c2410c',
    '--warning-800': '#9a3412',
    '--warning-900': '#7c2d12',

    // Info (Purple)
    '--info-50': '#faf5ff',
    '--info-100': '#f3e8ff',
    '--info-200': '#e9d5ff',
    '--info-300': '#d8b4fe',
    '--info-400': '#c084fc',
    '--info-500': '#a855f7',
    '--info-600': '#9333ea',
    '--info-700': '#7c3aed',
    '--info-800': '#6b21a8',
    '--info-900': '#581c87',

    // Pink
    '--pink-50': '#fdf2f8',
    '--pink-100': '#fce7f3',
    '--pink-200': '#fbcfe8',
    '--pink-300': '#f9a8d4',
    '--pink-400': '#f472b6',
    '--pink-500': '#ec4899',
    '--pink-600': '#db2777',
    '--pink-700': '#be185d',
    '--pink-800': '#9d174d',
    '--pink-900': '#831843',

    // Rose
    '--rose-50': '#fff1f2',
    '--rose-100': '#ffe4e6',
    '--rose-200': '#fecdd3',
    '--rose-300': '#fda4af',
    '--rose-400': '#fb7185',
    '--rose-500': '#f43f5e',
    '--rose-600': '#e11d48',
    '--rose-700': '#be123c',
    '--rose-800': '#9f1239',
    '--rose-900': '#881337',

    // Indigo
    '--indigo-50': '#eef2ff',
    '--indigo-100': '#e0e7ff',
    '--indigo-200': '#c7d2fe',
    '--indigo-300': '#a5b4fc',
    '--indigo-400': '#818cf8',
    '--indigo-500': '#6366f1',
    '--indigo-600': '#4f46e5',
    '--indigo-700': '#4338ca',
    '--indigo-800': '#3730a3',
    '--indigo-900': '#312e81',

    // Violet
    '--violet-50': '#f5f3ff',
    '--violet-100': '#ede9fe',
    '--violet-200': '#ddd6fe',
    '--violet-300': '#c4b5fd',
    '--violet-400': '#a78bfa',
    '--violet-500': '#8b5cf6',
    '--violet-600': '#7c3aed',
    '--violet-700': '#6d28d9',
    '--violet-800': '#5b21b6',
    '--violet-900': '#4c1d95',

    // Cyan
    '--cyan-50': '#ecfeff',
    '--cyan-100': '#cffafe',
    '--cyan-200': '#a5f3fc',
    '--cyan-300': '#67e8f9',
    '--cyan-400': '#22d3ee',
    '--cyan-500': '#06b6d4',
    '--cyan-600': '#0891b2',
    '--cyan-700': '#0e7490',
    '--cyan-800': '#155e75',
    '--cyan-900': '#164e63',

    // Teal
    '--teal-50': '#f0fdfa',
    '--teal-100': '#ccfbf1',
    '--teal-200': '#99f6e4',
    '--teal-300': '#5eead4',
    '--teal-400': '#2dd4bf',
    '--teal-500': '#14b8a6',
    '--teal-600': '#0d9488',
    '--teal-700': '#0f766e',
    '--teal-800': '#115e59',
    '--teal-900': '#134e4a',

    // Lime
    '--lime-50': '#f7fee7',
    '--lime-100': '#ecfccb',
    '--lime-200': '#d9f99d',
    '--lime-300': '#bef264',
    '--lime-400': '#a3e635',
    '--lime-500': '#84cc16',
    '--lime-600': '#65a30d',
    '--lime-700': '#4d7c0f',
    '--lime-800': '#365314',
    '--lime-900': '#1a2e05',

    // Typography (1.333 Perfect Fourth scale)
    '--text-xs': '0.75rem', // 12px
    '--text-sm': '0.875rem', // 14px
    '--text-base': '1rem', // 16px (base)
    '--text-lg': '1.333rem', // 21.33px (16 * 1.333)
    '--text-xl': '1.777rem', // 28.44px (16 * 1.333²)
    '--text-2xl': '2.369rem', // 37.90px (16 * 1.333³)
    '--text-3xl': '3.157rem', // 50.51px (16 * 1.333⁴)
    '--text-4xl': '4.209rem', // 67.34px (16 * 1.333⁵)

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
  },
});

globalStyle('.dark', {
  vars: {
    '--triforce-600': '#a855f7', // Purple in dark mode
    '--gray-500': '#9ca3af',
    '--gray-900': '#f3f4f6',
    '--hyrule-600': '#38bdf8',
    '--rupee-600': '#4ade80',
    '--ganon-600': '#f87171',
  },
});
