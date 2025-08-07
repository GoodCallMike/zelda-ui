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
  'pink',
  'rose',
  'indigo',
  'violet',
  'cyan',
  'teal',
  'lime',
] as const;

// Standard color aliases
const colorAliases = {
  yellow: 'triforce',
  blue: 'hyrule',
  green: 'rupee',
  red: 'ganon',
  primary: 'triforce',
  secondary: 'hyrule',
  success: 'rupee',
  danger: 'ganon',
  destructive: 'ganon',
} as const;

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

// Hover states for standard color aliases
Object.entries(colorAliases).forEach(([alias, zeldaColor]) => {
  shades.forEach((shade) => {
    globalStyle(`.hover\\:bg-${alias}-${shade}:hover`, {
      backgroundColor: colors[zeldaColor][shade],
    });
    globalStyle(`.hover\\:text-${alias}-${shade}:hover`, {
      color: colors[zeldaColor][shade],
    });
  });
});

// Important utilities for aliases
Object.entries(colorAliases).forEach(([alias, zeldaColor]) => {
  shades.forEach((shade) => {
    globalStyle(`.\\!bg-${alias}-${shade}`, {
      backgroundColor: `${colors[zeldaColor][shade]} !important`,
    });
    globalStyle(`.\\!text-${alias}-${shade}`, {
      color: `${colors[zeldaColor][shade]} !important`,
    });
    globalStyle(`.\\!border-${alias}-${shade}`, {
      borderColor: `${colors[zeldaColor][shade]} !important`,
    });
  });
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

// Dark mode utilities for aliases
Object.entries(colorAliases).forEach(([alias, zeldaColor]) => {
  shades.forEach((shade) => {
    globalStyle(`.dark .dark\\:bg-${alias}-${shade}`, {
      backgroundColor: colors[zeldaColor][shade],
    });
    globalStyle(`.dark .dark\\:text-${alias}-${shade}`, {
      color: colors[zeldaColor][shade],
    });
    globalStyle(`.dark .dark\\:border-${alias}-${shade}`, {
      borderColor: colors[zeldaColor][shade],
    });
  });
});
