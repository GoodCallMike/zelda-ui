import { globalStyle } from '@vanilla-extract/css';

const spacingValues = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24,
  28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
] as const;

// Padding utilities
spacingValues.forEach((value) => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;
  const className =
    value % 1 === 0 ? value.toString() : value.toString().replace('.', '\\\\.');

  globalStyle(`.p-${className}`, { padding: size });
  globalStyle(`.px-${className}`, { paddingLeft: size, paddingRight: size });
  globalStyle(`.py-${className}`, { paddingTop: size, paddingBottom: size });
  globalStyle(`.pt-${className}`, { paddingTop: size });
  globalStyle(`.pr-${className}`, { paddingRight: size });
  globalStyle(`.pb-${className}`, { paddingBottom: size });
  globalStyle(`.pl-${className}`, { paddingLeft: size });
});

// Margin utilities
spacingValues.forEach((value) => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;
  const className =
    value % 1 === 0 ? value.toString() : value.toString().replace('.', '\\\\.');

  globalStyle(`.m-${className}`, { margin: size });
  globalStyle(`.mx-${className}`, { marginLeft: size, marginRight: size });
  globalStyle(`.my-${className}`, { marginTop: size, marginBottom: size });
  globalStyle(`.mt-${className}`, { marginTop: size });
  globalStyle(`.mr-${className}`, { marginRight: size });
  globalStyle(`.mb-${className}`, { marginBottom: size });
  globalStyle(`.ml-${className}`, { marginLeft: size });
});

// Negative margins
[
  0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28,
  32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
].forEach((value) => {
  const size = `-${value * 0.25}rem`;
  const className =
    value % 1 === 0 ? value.toString() : value.toString().replace('.', '\\\\.');

  globalStyle(`.-m-${className}`, { margin: size });
  globalStyle(`.-mx-${className}`, { marginLeft: size, marginRight: size });
  globalStyle(`.-my-${className}`, { marginTop: size, marginBottom: size });
  globalStyle(`.-mt-${className}`, { marginTop: size });
  globalStyle(`.-mr-${className}`, { marginRight: size });
  globalStyle(`.-mb-${className}`, { marginBottom: size });
  globalStyle(`.-ml-${className}`, { marginLeft: size });
});

globalStyle('.mx-auto', { marginLeft: 'auto', marginRight: 'auto' });

// Gap utilities
spacingValues.forEach((value) => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;
  const className =
    value % 1 === 0 ? value.toString() : value.toString().replace('.', '\\\\.');
  globalStyle(`.gap-${className}`, { gap: size });
});

// Space utilities
spacingValues.forEach((value) => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;
  const className =
    value % 1 === 0 ? value.toString() : value.toString().replace('.', '\\\\.');
  globalStyle(`.space-y-${className} > * + *`, { marginTop: size });
  globalStyle(`.space-x-${className} > * + *`, { marginLeft: size });
});

// Negative space utilities
[
  0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24,
].forEach((value) => {
  const size = `-${value * 0.25}rem`;
  const className =
    value % 1 === 0 ? value.toString() : value.toString().replace('.', '\\\\.');
  globalStyle(`.-space-x-${className} > * + *`, { marginLeft: size });
  globalStyle(`.-space-y-${className} > * + *`, { marginTop: size });
});
