import { globalStyle } from '@vanilla-extract/css';

// Basic border utilities
globalStyle('.border', { borderWidth: '1px', borderStyle: 'solid' });
globalStyle('.border-t', { borderTopWidth: '1px', borderTopStyle: 'solid' });
globalStyle('.border-r', {
  borderRightWidth: '1px',
  borderRightStyle: 'solid',
});
globalStyle('.border-b', {
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
});
globalStyle('.border-l', { borderLeftWidth: '1px', borderLeftStyle: 'solid' });

// Border styles
globalStyle('.border-solid', { borderStyle: 'solid' });
globalStyle('.border-dashed', { borderStyle: 'dashed' });
globalStyle('.border-dotted', { borderStyle: 'dotted' });
globalStyle('.border-double', { borderStyle: 'double' });
globalStyle('.border-none', { borderStyle: 'none' });

// Basic border radius
globalStyle('.rounded-none', { borderRadius: '0px' });
globalStyle('.rounded-sm', { borderRadius: 'var(--radius-sm)' });
globalStyle('.rounded', { borderRadius: 'var(--radius-base)' });
globalStyle('.rounded-md', { borderRadius: 'var(--radius-md)' });
globalStyle('.rounded-lg', { borderRadius: 'var(--radius-lg)' });
globalStyle('.rounded-full', { borderRadius: 'var(--radius-full)' });

// Border width utilities
globalStyle('.border-0', { borderWidth: '0px' });
globalStyle('.border-2', { borderWidth: '2px' });
globalStyle('.border-4', { borderWidth: '4px' });
globalStyle('.border-8', { borderWidth: '8px' });

// Individual border widths
globalStyle('.border-t-0', { borderTopWidth: '0px' });
globalStyle('.border-t-2', { borderTopWidth: '2px' });
globalStyle('.border-t-4', { borderTopWidth: '4px' });
globalStyle('.border-t-8', { borderTopWidth: '8px' });

globalStyle('.border-r-0', { borderRightWidth: '0px' });
globalStyle('.border-r-2', { borderRightWidth: '2px' });
globalStyle('.border-r-4', { borderRightWidth: '4px' });
globalStyle('.border-r-8', { borderRightWidth: '8px' });

globalStyle('.border-b-0', { borderBottomWidth: '0px' });
globalStyle('.border-b-2', { borderBottomWidth: '2px' });
globalStyle('.border-b-4', { borderBottomWidth: '4px' });
globalStyle('.border-b-8', { borderBottomWidth: '8px' });

globalStyle('.border-l-0', { borderLeftWidth: '0px' });
globalStyle('.border-l-2', { borderLeftWidth: '2px' });
globalStyle('.border-l-4', { borderLeftWidth: '4px' });
globalStyle('.border-l-8', { borderLeftWidth: '8px' });

// Border radius utilities (individual corners)
globalStyle('.rounded-t-none', {
  borderTopLeftRadius: '0px',
  borderTopRightRadius: '0px',
});
globalStyle('.rounded-t-sm', {
  borderTopLeftRadius: '0.125rem',
  borderTopRightRadius: '0.125rem',
});
globalStyle('.rounded-t', {
  borderTopLeftRadius: '0.25rem',
  borderTopRightRadius: '0.25rem',
});
globalStyle('.rounded-t-md', {
  borderTopLeftRadius: '0.375rem',
  borderTopRightRadius: '0.375rem',
});
globalStyle('.rounded-t-lg', {
  borderTopLeftRadius: '0.5rem',
  borderTopRightRadius: '0.5rem',
});
globalStyle('.rounded-t-xl', {
  borderTopLeftRadius: '0.75rem',
  borderTopRightRadius: '0.75rem',
});
globalStyle('.rounded-t-2xl', {
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
});
globalStyle('.rounded-t-3xl', {
  borderTopLeftRadius: '1.5rem',
  borderTopRightRadius: '1.5rem',
});
globalStyle('.rounded-t-full', {
  borderTopLeftRadius: '9999px',
  borderTopRightRadius: '9999px',
});

globalStyle('.rounded-r-none', {
  borderTopRightRadius: '0px',
  borderBottomRightRadius: '0px',
});
globalStyle('.rounded-r-sm', {
  borderTopRightRadius: '0.125rem',
  borderBottomRightRadius: '0.125rem',
});
globalStyle('.rounded-r', {
  borderTopRightRadius: '0.25rem',
  borderBottomRightRadius: '0.25rem',
});
globalStyle('.rounded-r-md', {
  borderTopRightRadius: '0.375rem',
  borderBottomRightRadius: '0.375rem',
});
globalStyle('.rounded-r-lg', {
  borderTopRightRadius: '0.5rem',
  borderBottomRightRadius: '0.5rem',
});
globalStyle('.rounded-r-xl', {
  borderTopRightRadius: '0.75rem',
  borderBottomRightRadius: '0.75rem',
});
globalStyle('.rounded-r-2xl', {
  borderTopRightRadius: '1rem',
  borderBottomRightRadius: '1rem',
});
globalStyle('.rounded-r-3xl', {
  borderTopRightRadius: '1.5rem',
  borderBottomRightRadius: '1.5rem',
});
globalStyle('.rounded-r-full', {
  borderTopRightRadius: '9999px',
  borderBottomRightRadius: '9999px',
});

globalStyle('.rounded-b-none', {
  borderBottomRightRadius: '0px',
  borderBottomLeftRadius: '0px',
});
globalStyle('.rounded-b-sm', {
  borderBottomRightRadius: '0.125rem',
  borderBottomLeftRadius: '0.125rem',
});
globalStyle('.rounded-b', {
  borderBottomRightRadius: '0.25rem',
  borderBottomLeftRadius: '0.25rem',
});
globalStyle('.rounded-b-md', {
  borderBottomRightRadius: '0.375rem',
  borderBottomLeftRadius: '0.375rem',
});
globalStyle('.rounded-b-lg', {
  borderBottomRightRadius: '0.5rem',
  borderBottomLeftRadius: '0.5rem',
});
globalStyle('.rounded-b-xl', {
  borderBottomRightRadius: '0.75rem',
  borderBottomLeftRadius: '0.75rem',
});
globalStyle('.rounded-b-2xl', {
  borderBottomRightRadius: '1rem',
  borderBottomLeftRadius: '1rem',
});
globalStyle('.rounded-b-3xl', {
  borderBottomRightRadius: '1.5rem',
  borderBottomLeftRadius: '1.5rem',
});
globalStyle('.rounded-b-full', {
  borderBottomRightRadius: '9999px',
  borderBottomLeftRadius: '9999px',
});

globalStyle('.rounded-l-none', {
  borderTopLeftRadius: '0px',
  borderBottomLeftRadius: '0px',
});
globalStyle('.rounded-l-sm', {
  borderTopLeftRadius: '0.125rem',
  borderBottomLeftRadius: '0.125rem',
});
globalStyle('.rounded-l', {
  borderTopLeftRadius: '0.25rem',
  borderBottomLeftRadius: '0.25rem',
});
globalStyle('.rounded-l-md', {
  borderTopLeftRadius: '0.375rem',
  borderBottomLeftRadius: '0.375rem',
});
globalStyle('.rounded-l-lg', {
  borderTopLeftRadius: '0.5rem',
  borderBottomLeftRadius: '0.5rem',
});
globalStyle('.rounded-l-xl', {
  borderTopLeftRadius: '0.75rem',
  borderBottomLeftRadius: '0.75rem',
});
globalStyle('.rounded-l-2xl', {
  borderTopLeftRadius: '1rem',
  borderBottomLeftRadius: '1rem',
});
globalStyle('.rounded-l-3xl', {
  borderTopLeftRadius: '1.5rem',
  borderBottomLeftRadius: '1.5rem',
});
globalStyle('.rounded-l-full', {
  borderTopLeftRadius: '9999px',
  borderBottomLeftRadius: '9999px',
});

// Individual corner radius utilities
globalStyle('.rounded-tl-none', { borderTopLeftRadius: '0px' });
globalStyle('.rounded-tl-sm', { borderTopLeftRadius: '0.125rem' });
globalStyle('.rounded-tl', { borderTopLeftRadius: '0.25rem' });
globalStyle('.rounded-tl-md', { borderTopLeftRadius: '0.375rem' });
globalStyle('.rounded-tl-lg', { borderTopLeftRadius: '0.5rem' });
globalStyle('.rounded-tl-xl', { borderTopLeftRadius: '0.75rem' });
globalStyle('.rounded-tl-2xl', { borderTopLeftRadius: '1rem' });
globalStyle('.rounded-tl-3xl', { borderTopLeftRadius: '1.5rem' });
globalStyle('.rounded-tl-full', { borderTopLeftRadius: '9999px' });

globalStyle('.rounded-tr-none', { borderTopRightRadius: '0px' });
globalStyle('.rounded-tr-sm', { borderTopRightRadius: '0.125rem' });
globalStyle('.rounded-tr', { borderTopRightRadius: '0.25rem' });
globalStyle('.rounded-tr-md', { borderTopRightRadius: '0.375rem' });
globalStyle('.rounded-tr-lg', { borderTopRightRadius: '0.5rem' });
globalStyle('.rounded-tr-xl', { borderTopRightRadius: '0.75rem' });
globalStyle('.rounded-tr-2xl', { borderTopRightRadius: '1rem' });
globalStyle('.rounded-tr-3xl', { borderTopRightRadius: '1.5rem' });
globalStyle('.rounded-tr-full', { borderTopRightRadius: '9999px' });

globalStyle('.rounded-br-none', { borderBottomRightRadius: '0px' });
globalStyle('.rounded-br-sm', { borderBottomRightRadius: '0.125rem' });
globalStyle('.rounded-br', { borderBottomRightRadius: '0.25rem' });
globalStyle('.rounded-br-md', { borderBottomRightRadius: '0.375rem' });
globalStyle('.rounded-br-lg', { borderBottomRightRadius: '0.5rem' });
globalStyle('.rounded-br-xl', { borderBottomRightRadius: '0.75rem' });
globalStyle('.rounded-br-2xl', { borderBottomRightRadius: '1rem' });
globalStyle('.rounded-br-3xl', { borderBottomRightRadius: '1.5rem' });
globalStyle('.rounded-br-full', { borderBottomRightRadius: '9999px' });

globalStyle('.rounded-bl-none', { borderBottomLeftRadius: '0px' });
globalStyle('.rounded-bl-sm', { borderBottomLeftRadius: '0.125rem' });
globalStyle('.rounded-bl', { borderBottomLeftRadius: '0.25rem' });
globalStyle('.rounded-bl-md', { borderBottomLeftRadius: '0.375rem' });
globalStyle('.rounded-bl-lg', { borderBottomLeftRadius: '0.5rem' });
globalStyle('.rounded-bl-xl', { borderBottomLeftRadius: '0.75rem' });
globalStyle('.rounded-bl-2xl', { borderBottomLeftRadius: '1rem' });
globalStyle('.rounded-bl-3xl', { borderBottomLeftRadius: '1.5rem' });
globalStyle('.rounded-bl-full', { borderBottomLeftRadius: '9999px' });

// Additional border radius sizes
globalStyle('.rounded-xl', { borderRadius: '0.75rem' });
globalStyle('.rounded-2xl', { borderRadius: '1rem' });
globalStyle('.rounded-3xl', { borderRadius: '1.5rem' });

// Outline utilities
globalStyle('.outline-none', {
  outline: '2px solid transparent',
  outlineOffset: '2px',
});
globalStyle('.outline', { outlineStyle: 'solid' });
globalStyle('.outline-dashed', { outlineStyle: 'dashed' });
globalStyle('.outline-dotted', { outlineStyle: 'dotted' });
globalStyle('.outline-double', { outlineStyle: 'double' });

// Outline width
globalStyle('.outline-0', { outlineWidth: '0px' });
globalStyle('.outline-1', { outlineWidth: '1px' });
globalStyle('.outline-2', { outlineWidth: '2px' });
globalStyle('.outline-4', { outlineWidth: '4px' });
globalStyle('.outline-8', { outlineWidth: '8px' });

// Outline offset
globalStyle('.outline-offset-0', { outlineOffset: '0px' });
globalStyle('.outline-offset-1', { outlineOffset: '1px' });
globalStyle('.outline-offset-2', { outlineOffset: '2px' });
globalStyle('.outline-offset-4', { outlineOffset: '4px' });
globalStyle('.outline-offset-8', { outlineOffset: '8px' });

// Ring utilities
globalStyle('.ring-0', { boxShadow: '0 0 0 0px rgb(59 130 246 / 0.5)' });
globalStyle('.ring-1', { boxShadow: '0 0 0 1px rgb(59 130 246 / 0.5)' });
globalStyle('.ring-2', { boxShadow: '0 0 0 2px rgb(59 130 246 / 0.5)' });
globalStyle('.ring-4', { boxShadow: '0 0 0 4px rgb(59 130 246 / 0.5)' });
globalStyle('.ring-8', { boxShadow: '0 0 0 8px rgb(59 130 246 / 0.5)' });

globalStyle('.ring-inset', {
  boxShadow: 'inset 0 0 0 2px rgb(59 130 246 / 0.5)',
});

// Ring offset
globalStyle('.ring-offset-0', {
  boxShadow:
    '0 0 0 0px var(--tw-ring-offset-color), 0 0 0 2px rgb(59 130 246 / 0.5)',
});
globalStyle('.ring-offset-1', {
  boxShadow:
    '0 0 0 1px var(--tw-ring-offset-color), 0 0 0 3px rgb(59 130 246 / 0.5)',
});
globalStyle('.ring-offset-2', {
  boxShadow:
    '0 0 0 2px var(--tw-ring-offset-color), 0 0 0 4px rgb(59 130 246 / 0.5)',
});
globalStyle('.ring-offset-4', {
  boxShadow:
    '0 0 0 4px var(--tw-ring-offset-color), 0 0 0 6px rgb(59 130 246 / 0.5)',
});
globalStyle('.ring-offset-8', {
  boxShadow:
    '0 0 0 8px var(--tw-ring-offset-color), 0 0 0 10px rgb(59 130 246 / 0.5)',
});
