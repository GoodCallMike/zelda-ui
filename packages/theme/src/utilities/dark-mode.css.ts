import { globalStyle } from '@vanilla-extract/css';

// Typography dark mode overrides
globalStyle('.dark h1', { color: 'var(--gray-100)' });
globalStyle('.dark h2', { color: 'var(--gray-100)' });
globalStyle('.dark h3', { color: 'var(--gray-100)' });
globalStyle('.dark h4', { color: 'var(--gray-100)' });
globalStyle('.dark p', { color: 'var(--gray-100)' });
globalStyle('.dark span', { color: 'var(--gray-400)' });
globalStyle('.dark label', { color: 'var(--gray-400)' });

// Text color overrides
globalStyle('.dark .text-gray-900', { color: 'var(--gray-100) !important' });
globalStyle('.dark .text-gray-700', { color: 'var(--gray-300) !important' });
globalStyle('.dark .text-gray-600', { color: 'var(--gray-400) !important' });

// Border and background overrides
globalStyle('.dark .border-gray-300', { borderColor: 'var(--gray-600) !important' });
globalStyle('.dark .bg-gray-50', { backgroundColor: 'var(--gray-800) !important' });
globalStyle('.dark .bg-white', { backgroundColor: 'var(--gray-900) !important' });

// Card component dark mode overrides
globalStyle('.dark .bg-white', { backgroundColor: 'var(--gray-800) !important' });
globalStyle('.dark .border-gray-300', { borderColor: 'var(--gray-700) !important' });
globalStyle('.dark .border-gray-200', { borderColor: 'var(--gray-700) !important' });