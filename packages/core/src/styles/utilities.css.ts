// Import CSS variables first
import './variables.css';

// Import organized utility modules
import './utilities/index.css';

// Additional utilities
import { globalStyle } from '@vanilla-extract/css';

// Typography utilities
globalStyle('.text-xs', { fontSize: 'var(--text-xs)' });
globalStyle('.text-sm', { fontSize: 'var(--text-sm)' });
globalStyle('.text-base', { fontSize: 'var(--text-base)' });
globalStyle('.text-lg', { fontSize: 'var(--text-lg)' });
globalStyle('.text-xl', { fontSize: 'var(--text-xl)' });
globalStyle('.text-2xl', { fontSize: 'var(--text-2xl)' });

globalStyle('.font-normal', { fontWeight: 'var(--font-normal)' });
globalStyle('.font-medium', { fontWeight: 'var(--font-medium)' });
globalStyle('.font-semibold', { fontWeight: 'var(--font-semibold)' });
globalStyle('.font-bold', { fontWeight: 'var(--font-bold)' });

globalStyle('.uppercase', { textTransform: 'uppercase' });
globalStyle('.text-center', { textAlign: 'center' });

// Border utilities
globalStyle('.rounded', { borderRadius: 'var(--radius-base)' });
globalStyle('.rounded-md', { borderRadius: 'var(--radius-md)' });
globalStyle('.rounded-lg', { borderRadius: 'var(--radius-lg)' });
globalStyle('.rounded-full', { borderRadius: 'var(--radius-full)' });
globalStyle('.border', { borderWidth: '1px', borderStyle: 'solid' });
globalStyle('.border-t', { borderTopWidth: '1px', borderTopStyle: 'solid' });
globalStyle('.border-l', { borderLeftWidth: '1px', borderLeftStyle: 'solid' });
globalStyle('.border-solid', { borderStyle: 'solid' });
globalStyle('.border-dashed', { borderStyle: 'dashed' });

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
globalStyle('.shadow-lg', { boxShadow: 'var(--shadow-lg)' });