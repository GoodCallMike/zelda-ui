import { globalStyle } from '@vanilla-extract/css';

const sizeValues = [
  0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96,
] as const;

// Generate size utilities efficiently
sizeValues.forEach((value) => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;

  globalStyle(`.w-${value}`, { width: size });
  globalStyle(`.h-${value}`, { height: size });
  globalStyle(`.size-${value}`, { width: size, height: size });
  globalStyle(`.min-w-${value}`, { minWidth: size });
  globalStyle(`.min-h-${value}`, { minHeight: size });
});

// Special size utilities
globalStyle('.w-auto', { width: 'auto' });
globalStyle('.w-px', { width: '1px' });
globalStyle('.w-0\\.5', { width: '0.125rem' });
globalStyle('.w-1\\/2', { width: '50%' });
globalStyle('.w-1\\/3', { width: '33.333333%' });
globalStyle('.w-2\\/3', { width: '66.666667%' });
globalStyle('.w-1\\/4', { width: '25%' });
globalStyle('.w-2\\/4', { width: '50%' });
globalStyle('.w-3\\/4', { width: '75%' });
globalStyle('.w-1\\/5', { width: '20%' });
globalStyle('.w-2\\/5', { width: '40%' });
globalStyle('.w-3\\/5', { width: '60%' });
globalStyle('.w-4\\/5', { width: '80%' });
globalStyle('.w-1\\/6', { width: '16.666667%' });
globalStyle('.w-2\\/6', { width: '33.333333%' });
globalStyle('.w-3\\/6', { width: '50%' });
globalStyle('.w-4\\/6', { width: '66.666667%' });
globalStyle('.w-5\\/6', { width: '83.333333%' });
globalStyle('.w-1\\/12', { width: '8.333333%' });
globalStyle('.w-2\\/12', { width: '16.666667%' });
globalStyle('.w-3\\/12', { width: '25%' });
globalStyle('.w-4\\/12', { width: '33.333333%' });
globalStyle('.w-5\\/12', { width: '41.666667%' });
globalStyle('.w-6\\/12', { width: '50%' });
globalStyle('.w-7\\/12', { width: '58.333333%' });
globalStyle('.w-8\\/12', { width: '66.666667%' });
globalStyle('.w-9\\/12', { width: '75%' });
globalStyle('.w-10\\/12', { width: '83.333333%' });
globalStyle('.w-11\\/12', { width: '91.666667%' });
globalStyle('.w-full', { width: '100%' });
globalStyle('.w-screen', { width: '100vw' });
globalStyle('.w-min', { width: 'min-content' });
globalStyle('.w-max', { width: 'max-content' });
globalStyle('.w-fit', { width: 'fit-content' });

globalStyle('.h-auto', { height: 'auto' });
globalStyle('.h-px', { height: '1px' });
globalStyle('.h-0\\.5', { height: '0.125rem' });
globalStyle('.h-1\\/2', { height: '50%' });
globalStyle('.h-1\\/3', { height: '33.333333%' });
globalStyle('.h-2\\/3', { height: '66.666667%' });
globalStyle('.h-1\\/4', { height: '25%' });
globalStyle('.h-2\\/4', { height: '50%' });
globalStyle('.h-3\\/4', { height: '75%' });
globalStyle('.h-1\\/5', { height: '20%' });
globalStyle('.h-2\\/5', { height: '40%' });
globalStyle('.h-3\\/5', { height: '60%' });
globalStyle('.h-4\\/5', { height: '80%' });
globalStyle('.h-1\\/6', { height: '16.666667%' });
globalStyle('.h-2\\/6', { height: '33.333333%' });
globalStyle('.h-3\\/6', { height: '50%' });
globalStyle('.h-4\\/6', { height: '66.666667%' });
globalStyle('.h-5\\/6', { height: '83.333333%' });
globalStyle('.h-full', { height: '100%' });
globalStyle('.h-screen', { height: '100vh' });
globalStyle('.h-min', { height: 'min-content' });
globalStyle('.h-max', { height: 'max-content' });
globalStyle('.h-fit', { height: 'fit-content' });

globalStyle('.min-w-0', { minWidth: '0px' });
globalStyle('.min-w-full', { minWidth: '100%' });
globalStyle('.min-w-min', { minWidth: 'min-content' });
globalStyle('.min-w-max', { minWidth: 'max-content' });
globalStyle('.min-w-fit', { minWidth: 'fit-content' });

globalStyle('.min-h-0', { minHeight: '0px' });
globalStyle('.min-h-full', { minHeight: '100%' });
globalStyle('.min-h-screen', { minHeight: '100vh' });
globalStyle('.min-h-min', { minHeight: 'min-content' });
globalStyle('.min-h-max', { minHeight: 'max-content' });
globalStyle('.min-h-fit', { minHeight: 'fit-content' });

globalStyle('.max-w-0', { maxWidth: '0rem' });
globalStyle('.max-w-none', { maxWidth: 'none' });
globalStyle('.max-w-xs', { maxWidth: '20rem' });
globalStyle('.max-w-sm', { maxWidth: '24rem' });
globalStyle('.max-w-md', { maxWidth: '28rem' });
globalStyle('.max-w-lg', { maxWidth: '32rem' });
globalStyle('.max-w-xl', { maxWidth: '36rem' });
globalStyle('.max-w-2xl', { maxWidth: '42rem' });
globalStyle('.max-w-3xl', { maxWidth: '48rem' });
globalStyle('.max-w-4xl', { maxWidth: '56rem' });
globalStyle('.max-w-5xl', { maxWidth: '64rem' });
globalStyle('.max-w-6xl', { maxWidth: '72rem' });
globalStyle('.max-w-7xl', { maxWidth: '80rem' });
globalStyle('.max-w-full', { maxWidth: '100%' });
globalStyle('.max-w-min', { maxWidth: 'min-content' });
globalStyle('.max-w-max', { maxWidth: 'max-content' });
globalStyle('.max-w-fit', { maxWidth: 'fit-content' });
globalStyle('.max-w-prose', { maxWidth: '65ch' });
globalStyle('.max-w-screen-sm', { maxWidth: '640px' });
globalStyle('.max-w-screen-md', { maxWidth: '768px' });
globalStyle('.max-w-screen-lg', { maxWidth: '1024px' });
globalStyle('.max-w-screen-xl', { maxWidth: '1280px' });
globalStyle('.max-w-screen-2xl', { maxWidth: '1536px' });

globalStyle('.max-h-0', { maxHeight: '0rem' });
globalStyle('.max-h-px', { maxHeight: '1px' });
globalStyle('.max-h-0\\.5', { maxHeight: '0.125rem' });
globalStyle('.max-h-none', { maxHeight: 'none' });
globalStyle('.max-h-full', { maxHeight: '100%' });
globalStyle('.max-h-screen', { maxHeight: '100vh' });
globalStyle('.max-h-min', { maxHeight: 'min-content' });
globalStyle('.max-h-max', { maxHeight: 'max-content' });
globalStyle('.max-h-fit', { maxHeight: 'fit-content' });

// Max width utilities
globalStyle('.max-w-xs', { maxWidth: '20rem' });
globalStyle('.max-w-sm', { maxWidth: '24rem' });
globalStyle('.max-w-md', { maxWidth: '28rem' });
globalStyle('.max-w-lg', { maxWidth: '32rem' });
globalStyle('.max-w-xl', { maxWidth: '36rem' });
globalStyle('.max-w-2xl', { maxWidth: '42rem' });
globalStyle('.max-w-4xl', { maxWidth: '56rem' });
globalStyle('.max-w-full', { maxWidth: '100%' });
