import { globalStyle } from '@vanilla-extract/css';

const sizeValues = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96] as const;

// Generate size utilities efficiently
sizeValues.forEach(value => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;
  
  globalStyle(`.w-${value}`, { width: size });
  globalStyle(`.h-${value}`, { height: size });
  globalStyle(`.size-${value}`, { width: size, height: size });
  globalStyle(`.min-w-${value}`, { minWidth: size });
  globalStyle(`.min-h-${value}`, { minHeight: size });
});

// Special size utilities
globalStyle('.w-auto', { width: 'auto' });
globalStyle('.w-full', { width: '100%' });
globalStyle('.w-screen', { width: '100vw' });
globalStyle('.h-auto', { height: 'auto' });
globalStyle('.h-full', { height: '100%' });
globalStyle('.h-screen', { height: '100vh' });
globalStyle('.min-w-full', { minWidth: '100%' });
globalStyle('.min-h-full', { minHeight: '100%' });
globalStyle('.min-h-screen', { minHeight: '100vh' });

// Max width utilities
globalStyle('.max-w-xs', { maxWidth: '20rem' });
globalStyle('.max-w-sm', { maxWidth: '24rem' });
globalStyle('.max-w-md', { maxWidth: '28rem' });
globalStyle('.max-w-lg', { maxWidth: '32rem' });
globalStyle('.max-w-xl', { maxWidth: '36rem' });
globalStyle('.max-w-2xl', { maxWidth: '42rem' });
globalStyle('.max-w-4xl', { maxWidth: '56rem' });
globalStyle('.max-w-full', { maxWidth: '100%' });