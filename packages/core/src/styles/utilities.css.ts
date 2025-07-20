// Optimized utilities - imports modular files
import './utilities';

// Additional utilities not yet moved
import { globalStyle } from '@vanilla-extract/css';
import { colors } from './colors.css';

// Typography utilities
globalStyle('.text-xs', { fontSize: '0.75rem', lineHeight: '1rem' });
globalStyle('.text-sm', { fontSize: '0.875rem', lineHeight: '1.25rem' });
globalStyle('.text-base', { fontSize: '1rem', lineHeight: '1.5rem' });
globalStyle('.text-lg', { fontSize: '1.125rem', lineHeight: '1.75rem' });
globalStyle('.text-xl', { fontSize: '1.25rem', lineHeight: '1.75rem' });
globalStyle('.text-2xl', { fontSize: '1.5rem', lineHeight: '2rem' });

globalStyle('.font-normal', { fontWeight: '400' });
globalStyle('.font-medium', { fontWeight: '500' });
globalStyle('.font-semibold', { fontWeight: '600' });
globalStyle('.font-bold', { fontWeight: '700' });

globalStyle('.uppercase', { textTransform: 'uppercase' });
globalStyle('.text-center', { textAlign: 'center' });

// Border utilities
globalStyle('.rounded', { borderRadius: '0.25rem' });
globalStyle('.rounded-md', { borderRadius: '0.375rem' });
globalStyle('.rounded-lg', { borderRadius: '0.5rem' });
globalStyle('.rounded-full', { borderRadius: '9999px' });
globalStyle('.border', { borderWidth: '1px', borderStyle: 'solid' });

// Interactive utilities
globalStyle('.cursor-pointer', { cursor: 'pointer' });
globalStyle('.cursor-not-allowed', { cursor: 'not-allowed' });

// Effects utilities
globalStyle('.opacity-50', { opacity: '0.5' });
globalStyle('.transition-colors', {
  transitionProperty: 'color, background-color, border-color',
  transitionDuration: '150ms'
});

// Focus utilities
globalStyle('.focus\\\\:outline-none:focus', { outline: 'none' });
globalStyle('.focus\\\\:ring-2:focus', { boxShadow: '0 0 0 2px rgb(59 130 246)' });

// Shadow utilities
globalStyle('.shadow-lg', { boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' });