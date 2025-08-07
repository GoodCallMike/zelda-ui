import { globalStyle } from '@vanilla-extract/css';
import { colors } from '../tokens.css';

// Zelda theme colors only
const zeldaColors = [
  'gray',
  'triforce',
  'hyrule',
  'rupee',
  'ganon',
  'info',
  'warning',
] as const;
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

// Note: Utility classes are now defined in overrides.css.ts with proper layer priority

// Hover states for Zelda colors
zeldaColors.forEach((color) => {
  shades.forEach((shade) => {
    globalStyle(`.hover\\:bg-${color}-${shade}:hover`, {
      backgroundColor: colors[color][shade],
    });
    globalStyle(`.hover\\:text-${color}-${shade}:hover`, {
      color: colors[color][shade],
    });
  });
});

// Important utilities
zeldaColors.forEach((color) => {
  shades.forEach((shade) => {
    globalStyle(`.\\!bg-${color}-${shade}`, {
      backgroundColor: `${colors[color][shade]} !important`,
    });
    globalStyle(`.\\!text-${color}-${shade}`, {
      color: `${colors[color][shade]} !important`,
    });
    globalStyle(`.\\!border-${color}-${shade}`, {
      borderColor: `${colors[color][shade]} !important`,
    });
  });
});

globalStyle('.\\!bg-white', { backgroundColor: 'var(--white) !important' });
globalStyle('.\\!bg-black', { backgroundColor: 'var(--black) !important' });
globalStyle('.\\!bg-transparent', {
  backgroundColor: 'transparent !important',
});

// Dark mode utilities
globalStyle('.dark .dark\\:bg-white', { backgroundColor: 'var(--gray-800)' });
globalStyle('.dark .dark\\:bg-transparent', { backgroundColor: 'transparent' });

zeldaColors.forEach((color) => {
  shades.forEach((shade) => {
    globalStyle(`.dark .dark\\:bg-${color}-${shade}`, {
      backgroundColor: colors[color][shade],
    });
    globalStyle(`.dark .dark\\:text-${color}-${shade}`, {
      color: colors[color][shade],
    });
    globalStyle(`.dark .dark\\:border-${color}-${shade}`, {
      borderColor: colors[color][shade],
    });
  });
});
