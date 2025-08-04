import { globalStyle } from '@vanilla-extract/css';

const spacingValues = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24,
  28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
] as const;

// Margin inline (start/end)
spacingValues.forEach((value) => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;
  const className =
    value % 1 === 0
      ? value.toString()
      : value.toString().replace('.', '\\\\\\\\.');

  globalStyle(`.ms-${className}`, { marginInlineStart: size });
  globalStyle(`.me-${className}`, { marginInlineEnd: size });
});

// Padding inline (start/end)
spacingValues.forEach((value) => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;
  const className =
    value % 1 === 0
      ? value.toString()
      : value.toString().replace('.', '\\\\\\\\.');

  globalStyle(`.ps-${className}`, { paddingInlineStart: size });
  globalStyle(`.pe-${className}`, { paddingInlineEnd: size });
});

// Border inline
globalStyle('.border-s', {
  borderInlineStartWidth: '1px',
  borderInlineStartStyle: 'solid',
});
globalStyle('.border-e', {
  borderInlineEndWidth: '1px',
  borderInlineEndStyle: 'solid',
});
globalStyle('.border-s-0', { borderInlineStartWidth: '0px' });
globalStyle('.border-e-0', { borderInlineEndWidth: '0px' });
globalStyle('.border-s-2', { borderInlineStartWidth: '2px' });
globalStyle('.border-e-2', { borderInlineEndWidth: '2px' });
globalStyle('.border-s-4', { borderInlineStartWidth: '4px' });
globalStyle('.border-e-4', { borderInlineEndWidth: '4px' });
globalStyle('.border-s-8', { borderInlineStartWidth: '8px' });
globalStyle('.border-e-8', { borderInlineEndWidth: '8px' });

// Rounded inline
globalStyle('.rounded-s-none', {
  borderStartStartRadius: '0px',
  borderEndStartRadius: '0px',
});
globalStyle('.rounded-s-sm', {
  borderStartStartRadius: '0.125rem',
  borderEndStartRadius: '0.125rem',
});
globalStyle('.rounded-s', {
  borderStartStartRadius: '0.25rem',
  borderEndStartRadius: '0.25rem',
});
globalStyle('.rounded-s-md', {
  borderStartStartRadius: '0.375rem',
  borderEndStartRadius: '0.375rem',
});
globalStyle('.rounded-s-lg', {
  borderStartStartRadius: '0.5rem',
  borderEndStartRadius: '0.5rem',
});
globalStyle('.rounded-s-xl', {
  borderStartStartRadius: '0.75rem',
  borderEndStartRadius: '0.75rem',
});
globalStyle('.rounded-s-2xl', {
  borderStartStartRadius: '1rem',
  borderEndStartRadius: '1rem',
});
globalStyle('.rounded-s-3xl', {
  borderStartStartRadius: '1.5rem',
  borderEndStartRadius: '1.5rem',
});
globalStyle('.rounded-s-full', {
  borderStartStartRadius: '9999px',
  borderEndStartRadius: '9999px',
});

globalStyle('.rounded-e-none', {
  borderStartEndRadius: '0px',
  borderEndEndRadius: '0px',
});
globalStyle('.rounded-e-sm', {
  borderStartEndRadius: '0.125rem',
  borderEndEndRadius: '0.125rem',
});
globalStyle('.rounded-e', {
  borderStartEndRadius: '0.25rem',
  borderEndEndRadius: '0.25rem',
});
globalStyle('.rounded-e-md', {
  borderStartEndRadius: '0.375rem',
  borderEndEndRadius: '0.375rem',
});
globalStyle('.rounded-e-lg', {
  borderStartEndRadius: '0.5rem',
  borderEndEndRadius: '0.5rem',
});
globalStyle('.rounded-e-xl', {
  borderStartEndRadius: '0.75rem',
  borderEndEndRadius: '0.75rem',
});
globalStyle('.rounded-e-2xl', {
  borderStartEndRadius: '1rem',
  borderEndEndRadius: '1rem',
});
globalStyle('.rounded-e-3xl', {
  borderStartEndRadius: '1.5rem',
  borderEndEndRadius: '1.5rem',
});
globalStyle('.rounded-e-full', {
  borderStartEndRadius: '9999px',
  borderEndEndRadius: '9999px',
});

// Text align logical
globalStyle('.text-start', { textAlign: 'start' });
globalStyle('.text-end', { textAlign: 'end' });
