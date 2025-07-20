import { globalStyle } from '@vanilla-extract/css';

const spacingValues = [0, 1, 2, 3, 4, 6, 8] as const;
const spacingMap = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem', 
  3: '0.75rem',
  4: '1rem',
  6: '1.5rem',
  8: '2rem'
} as const;

// Padding utilities
spacingValues.forEach(value => {
  const size = spacingMap[value];
  globalStyle(`.p-${value}`, { padding: size });
  globalStyle(`.px-${value}`, { paddingLeft: size, paddingRight: size });
  globalStyle(`.py-${value}`, { paddingTop: size, paddingBottom: size });
  globalStyle(`.pt-${value}`, { paddingTop: size });
  globalStyle(`.pr-${value}`, { paddingRight: size });
  globalStyle(`.pb-${value}`, { paddingBottom: size });
  globalStyle(`.pl-${value}`, { paddingLeft: size });
});

// Additional padding values
globalStyle('.pr-10', { paddingRight: '2.5rem' });
globalStyle('.pr-16', { paddingRight: '4rem' });

// Margin utilities
spacingValues.forEach(value => {
  const size = spacingMap[value];
  globalStyle(`.m-${value}`, { margin: size });
  globalStyle(`.mx-${value}`, { marginLeft: size, marginRight: size });
  globalStyle(`.my-${value}`, { marginTop: size, marginBottom: size });
  globalStyle(`.mt-${value}`, { marginTop: size });
  globalStyle(`.mr-${value}`, { marginRight: size });
  globalStyle(`.mb-${value}`, { marginBottom: size });
  globalStyle(`.ml-${value}`, { marginLeft: size });
});

globalStyle('.mx-auto', { marginLeft: 'auto', marginRight: 'auto' });

// Gap utilities
spacingValues.forEach(value => {
  globalStyle(`.gap-${value}`, { gap: spacingMap[value] });
});

// Space utilities
spacingValues.forEach(value => {
  globalStyle(`.space-y-${value} > * + *`, { marginTop: spacingMap[value] });
  globalStyle(`.space-x-${value} > * + *`, { marginLeft: spacingMap[value] });
});

// Negative space utilities
[1, 2, 3, 4].forEach(value => {
  globalStyle(`.-space-x-${value} > * + *`, { marginLeft: `-${spacingMap[value]}` });
});