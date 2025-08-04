import { globalStyle } from '@vanilla-extract/css';

// Cursor utilities
globalStyle('.cursor-auto', { cursor: 'auto' });
globalStyle('.cursor-default', { cursor: 'default' });
globalStyle('.cursor-pointer', { cursor: 'pointer' });
globalStyle('.cursor-wait', { cursor: 'wait' });
globalStyle('.cursor-text', { cursor: 'text' });
globalStyle('.cursor-move', { cursor: 'move' });
globalStyle('.cursor-help', { cursor: 'help' });
globalStyle('.cursor-not-allowed', { cursor: 'not-allowed' });
globalStyle('.cursor-none', { cursor: 'none' });
globalStyle('.cursor-context-menu', { cursor: 'context-menu' });
globalStyle('.cursor-progress', { cursor: 'progress' });
globalStyle('.cursor-cell', { cursor: 'cell' });
globalStyle('.cursor-crosshair', { cursor: 'crosshair' });
globalStyle('.cursor-vertical-text', { cursor: 'vertical-text' });
globalStyle('.cursor-alias', { cursor: 'alias' });
globalStyle('.cursor-copy', { cursor: 'copy' });
globalStyle('.cursor-no-drop', { cursor: 'no-drop' });
globalStyle('.cursor-grab', { cursor: 'grab' });
globalStyle('.cursor-grabbing', { cursor: 'grabbing' });
globalStyle('.cursor-all-scroll', { cursor: 'all-scroll' });
globalStyle('.cursor-col-resize', { cursor: 'col-resize' });
globalStyle('.cursor-row-resize', { cursor: 'row-resize' });
globalStyle('.cursor-n-resize', { cursor: 'n-resize' });
globalStyle('.cursor-e-resize', { cursor: 'e-resize' });
globalStyle('.cursor-s-resize', { cursor: 's-resize' });
globalStyle('.cursor-w-resize', { cursor: 'w-resize' });
globalStyle('.cursor-ne-resize', { cursor: 'ne-resize' });
globalStyle('.cursor-nw-resize', { cursor: 'nw-resize' });
globalStyle('.cursor-se-resize', { cursor: 'se-resize' });
globalStyle('.cursor-sw-resize', { cursor: 'sw-resize' });
globalStyle('.cursor-ew-resize', { cursor: 'ew-resize' });
globalStyle('.cursor-ns-resize', { cursor: 'ns-resize' });
globalStyle('.cursor-nesw-resize', { cursor: 'nesw-resize' });
globalStyle('.cursor-nwse-resize', { cursor: 'nwse-resize' });
globalStyle('.cursor-zoom-in', { cursor: 'zoom-in' });
globalStyle('.cursor-zoom-out', { cursor: 'zoom-out' });

// Pointer events
globalStyle('.pointer-events-none', { pointerEvents: 'none' });
globalStyle('.pointer-events-auto', { pointerEvents: 'auto' });

// Resize utilities
globalStyle('.resize-none', { resize: 'none' });
globalStyle('.resize', { resize: 'both' });
globalStyle('.resize-y', { resize: 'vertical' });
globalStyle('.resize-x', { resize: 'horizontal' });

// Scroll behavior
globalStyle('.scroll-auto', { scrollBehavior: 'auto' });
globalStyle('.scroll-smooth', { scrollBehavior: 'smooth' });

// Scroll margin
[0, 1, 2, 3, 4, 6, 8, 12, 16, 20, 24].forEach((value) => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;
  globalStyle(`.scroll-m-${value}`, { scrollMargin: size });
  globalStyle(`.scroll-mx-${value}`, {
    scrollMarginLeft: size,
    scrollMarginRight: size,
  });
  globalStyle(`.scroll-my-${value}`, {
    scrollMarginTop: size,
    scrollMarginBottom: size,
  });
  globalStyle(`.scroll-mt-${value}`, { scrollMarginTop: size });
  globalStyle(`.scroll-mr-${value}`, { scrollMarginRight: size });
  globalStyle(`.scroll-mb-${value}`, { scrollMarginBottom: size });
  globalStyle(`.scroll-ml-${value}`, { scrollMarginLeft: size });
});

// Scroll padding
[0, 1, 2, 3, 4, 6, 8, 12, 16, 20, 24].forEach((value) => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;
  globalStyle(`.scroll-p-${value}`, { scrollPadding: size });
  globalStyle(`.scroll-px-${value}`, {
    scrollPaddingLeft: size,
    scrollPaddingRight: size,
  });
  globalStyle(`.scroll-py-${value}`, {
    scrollPaddingTop: size,
    scrollPaddingBottom: size,
  });
  globalStyle(`.scroll-pt-${value}`, { scrollPaddingTop: size });
  globalStyle(`.scroll-pr-${value}`, { scrollPaddingRight: size });
  globalStyle(`.scroll-pb-${value}`, { scrollPaddingBottom: size });
  globalStyle(`.scroll-pl-${value}`, { scrollPaddingLeft: size });
});

// Scroll snap
globalStyle('.snap-none', { scrollSnapType: 'none' });
globalStyle('.snap-x', {
  scrollSnapType: 'x var(--tw-scroll-snap-strictness)',
});
globalStyle('.snap-y', {
  scrollSnapType: 'y var(--tw-scroll-snap-strictness)',
});
globalStyle('.snap-both', {
  scrollSnapType: 'both var(--tw-scroll-snap-strictness)',
});
globalStyle('.snap-mandatory', {
  '--tw-scroll-snap-strictness': 'mandatory',
} as any);
globalStyle('.snap-proximity', {
  '--tw-scroll-snap-strictness': 'proximity',
} as any);

globalStyle('.snap-start', { scrollSnapAlign: 'start' });
globalStyle('.snap-end', { scrollSnapAlign: 'end' });
globalStyle('.snap-center', { scrollSnapAlign: 'center' });
globalStyle('.snap-align-none', { scrollSnapAlign: 'none' });

globalStyle('.snap-normal', { scrollSnapStop: 'normal' });
globalStyle('.snap-always', { scrollSnapStop: 'always' });

// Touch action
globalStyle('.touch-auto', { touchAction: 'auto' });
globalStyle('.touch-none', { touchAction: 'none' });
globalStyle('.touch-pan-x', { touchAction: 'pan-x' });
globalStyle('.touch-pan-left', { touchAction: 'pan-left' });
globalStyle('.touch-pan-right', { touchAction: 'pan-right' });
globalStyle('.touch-pan-y', { touchAction: 'pan-y' });
globalStyle('.touch-pan-up', { touchAction: 'pan-up' });
globalStyle('.touch-pan-down', { touchAction: 'pan-down' });
globalStyle('.touch-pinch-zoom', { touchAction: 'pinch-zoom' });
globalStyle('.touch-manipulation', { touchAction: 'manipulation' });

// User select
globalStyle('.select-none', { userSelect: 'none' });
globalStyle('.select-text', { userSelect: 'text' });
globalStyle('.select-all', { userSelect: 'all' });
globalStyle('.select-auto', { userSelect: 'auto' });

// Will change
globalStyle('.will-change-auto', { willChange: 'auto' });
globalStyle('.will-change-scroll', { willChange: 'scroll-position' });
globalStyle('.will-change-contents', { willChange: 'contents' });
globalStyle('.will-change-transform', { willChange: 'transform' });

// Focus utilities
globalStyle('.focus\\\\:outline-none:focus', { outline: 'none' });
globalStyle('.focus\\\\:ring-2:focus', {
  boxShadow: '0 0 0 2px rgb(59 130 246)',
});
globalStyle('.focus\\\\:ring-4:focus', {
  boxShadow: '0 0 0 4px rgb(59 130 246)',
});
globalStyle('.focus\\\\:ring-offset-2:focus', {
  boxShadow: '0 0 0 2px var(--tw-ring-offset-color), 0 0 0 4px rgb(59 130 246)',
});
