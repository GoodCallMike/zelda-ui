import { globalStyle } from '@vanilla-extract/css';
import { colors } from '../tokens.css';

// Zelda theme colors only
const zeldaColors = ['gray', 'triforce', 'hyrule', 'rupee', 'ganon'] as const;
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

// Background colors
zeldaColors.forEach((color) => {
  shades.forEach((shade) => {
    globalStyle(`.bg-${color}-${shade}`, {
      backgroundColor: colors[color][shade],
    });
  });
});

globalStyle('.bg-white', { backgroundColor: colors.white });
globalStyle('.bg-black', { backgroundColor: colors.black });
globalStyle('.bg-transparent', { backgroundColor: 'transparent' });

// Text colors
zeldaColors.forEach((color) => {
  shades.forEach((shade) => {
    globalStyle(`.text-${color}-${shade}`, {
      color: colors[color][shade],
    });
  });
});

globalStyle('.text-white', { color: colors.white });
globalStyle('.text-black', { color: colors.black });

// Border colors
zeldaColors.forEach((color) => {
  shades.forEach((shade) => {
    globalStyle(`.border-${color}-${shade}`, {
      borderColor: colors[color][shade],
    });
  });
});

globalStyle('.border-white', { borderColor: colors.white });
globalStyle('.border-black', { borderColor: colors.black });

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
