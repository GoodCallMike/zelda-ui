import { globalStyle } from '@vanilla-extract/css';

// Screen reader utilities
globalStyle('.sr-only', {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: '0'
});

globalStyle('.not-sr-only', {
  position: 'static',
  width: 'auto',
  height: 'auto',
  padding: '0',
  margin: '0',
  overflow: 'visible',
  clip: 'auto',
  whiteSpace: 'normal'
});

// Forced color adjust
globalStyle('.forced-color-adjust-auto', { forcedColorAdjust: 'auto' });
globalStyle('.forced-color-adjust-none', { forcedColorAdjust: 'none' });

// Focus visible utilities
globalStyle('.focus-visible\\\\\\\\:outline-none:focus-visible', { outline: 'none' });
globalStyle('.focus-visible\\\\\\\\:ring-2:focus-visible', { boxShadow: '0 0 0 2px rgb(59 130 246)' });
globalStyle('.focus-visible\\\\\\\\:ring-4:focus-visible', { boxShadow: '0 0 0 4px rgb(59 130 246)' });

// Reduced motion
globalStyle('@media (prefers-reduced-motion: reduce) { .motion-reduce\\\\\\\\:animate-none }', { animation: 'none' });
globalStyle('@media (prefers-reduced-motion: reduce) { .motion-reduce\\\\\\\\:transition-none }', { transitionProperty: 'none' });

// High contrast
globalStyle('@media (prefers-contrast: high) { .contrast-more\\\\\\\\:border-black }', { borderColor: '#000000' });
globalStyle('@media (prefers-contrast: high) { .contrast-more\\\\\\\\:text-black }', { color: '#000000' });