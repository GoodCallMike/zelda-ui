import { globalStyle } from '@vanilla-extract/css';

// Breakpoints matching Tailwind
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Helper to create responsive utilities
const createResponsiveUtility = (
  breakpoint: string,
  minWidth: string,
  selector: string,
  styles: Record<string, string>,
) => {
  globalStyle(
    `@media (min-width: ${minWidth}) { .${breakpoint}\\\\\\\\:${selector} }`,
    styles,
  );
};

// Display utilities
Object.entries(breakpoints).forEach(([bp, width]) => {
  createResponsiveUtility(bp, width, 'block', { display: 'block' });
  createResponsiveUtility(bp, width, 'flex', { display: 'flex' });
  createResponsiveUtility(bp, width, 'grid', { display: 'grid' });
  createResponsiveUtility(bp, width, 'hidden', { display: 'none' });
});

// Flexbox utilities
Object.entries(breakpoints).forEach(([bp, width]) => {
  createResponsiveUtility(bp, width, 'flex-col', { flexDirection: 'column' });
  createResponsiveUtility(bp, width, 'flex-row', { flexDirection: 'row' });
  createResponsiveUtility(bp, width, 'items-center', { alignItems: 'center' });
  createResponsiveUtility(bp, width, 'justify-center', {
    justifyContent: 'center',
  });
  createResponsiveUtility(bp, width, 'justify-between', {
    justifyContent: 'space-between',
  });
});

// Grid utilities
Object.entries(breakpoints).forEach(([bp, width]) => {
  [1, 2, 3, 4, 6, 12].forEach((cols) => {
    createResponsiveUtility(bp, width, `grid-cols-${cols}`, {
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    });
  });
});

// Spacing utilities (key ones)
Object.entries(breakpoints).forEach(([bp, width]) => {
  [0, 1, 2, 4, 6, 8, 12, 16, 24].forEach((value) => {
    const size = value === 0 ? '0' : `${value * 0.25}rem`;
    createResponsiveUtility(bp, width, `p-${value}`, { padding: size });
    createResponsiveUtility(bp, width, `m-${value}`, { margin: size });
    createResponsiveUtility(bp, width, `gap-${value}`, { gap: size });
  });
});

// Width utilities
Object.entries(breakpoints).forEach(([bp, width]) => {
  createResponsiveUtility(bp, width, 'w-full', { width: '100%' });
  createResponsiveUtility(bp, width, 'w-1\\\\/2', { width: '50%' });
  createResponsiveUtility(bp, width, 'w-1\\\\/3', { width: '33.333333%' });
  createResponsiveUtility(bp, width, 'w-2\\\\/3', { width: '66.666667%' });
  createResponsiveUtility(bp, width, 'w-1\\\\/4', { width: '25%' });
  createResponsiveUtility(bp, width, 'w-3\\\\/4', { width: '75%' });
});
