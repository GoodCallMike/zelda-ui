import { globalStyle } from '@vanilla-extract/css';
import { colors } from '../tokens.css';

// Gradient utilities
globalStyle('.bg-gradient-to-br', {
  backgroundImage:
    'linear-gradient(to bottom right, var(--tw-gradient-from, transparent), var(--tw-gradient-via, transparent), var(--tw-gradient-to, transparent))',
});

globalStyle('.bg-gradient-to-r', {
  backgroundImage:
    'linear-gradient(to right, var(--tw-gradient-from, transparent), var(--tw-gradient-via, transparent), var(--tw-gradient-to, transparent))',
});

globalStyle('.bg-gradient-to-l', {
  backgroundImage:
    'linear-gradient(to left, var(--tw-gradient-from, transparent), var(--tw-gradient-via, transparent), var(--tw-gradient-to, transparent))',
});

globalStyle('.bg-gradient-to-t', {
  backgroundImage:
    'linear-gradient(to top, var(--tw-gradient-from, transparent), var(--tw-gradient-via, transparent), var(--tw-gradient-to, transparent))',
});

globalStyle('.bg-gradient-to-b', {
  backgroundImage:
    'linear-gradient(to bottom, var(--tw-gradient-from, transparent), var(--tw-gradient-via, transparent), var(--tw-gradient-to, transparent))',
});

// Gradient color stops
const colorNames = ['gray', 'triforce', 'hyrule', 'rupee', 'ganon'] as const;
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

colorNames.forEach((color) => {
  shades.forEach((shade) => {
    if (colors[color]?.[shade]) {
      globalStyle(`.from-${color}-${shade}`, {
        '--tw-gradient-from': colors[color][shade],
      } as any);
      globalStyle(`.via-${color}-${shade}`, {
        '--tw-gradient-via': colors[color][shade],
      } as any);
      globalStyle(`.to-${color}-${shade}`, {
        '--tw-gradient-to': colors[color][shade],
      } as any);
    }
  });
});

// Hover gradient states
colorNames.forEach((color) => {
  shades.forEach((shade) => {
    if (colors[color]?.[shade]) {
      globalStyle(`.hover\\:from-${color}-${shade}:hover`, {
        '--tw-gradient-from': colors[color][shade],
      } as any);
      globalStyle(`.hover\\:via-${color}-${shade}:hover`, {
        '--tw-gradient-via': colors[color][shade],
      } as any);
      globalStyle(`.hover\\:to-${color}-${shade}:hover`, {
        '--tw-gradient-to': colors[color][shade],
      } as any);
    }
  });
});

// Active gradient states
colorNames.forEach((color) => {
  shades.forEach((shade) => {
    if (colors[color]?.[shade]) {
      globalStyle(`.active\\:from-${color}-${shade}:active`, {
        '--tw-gradient-from': colors[color][shade],
      } as any);
      globalStyle(`.active\\:via-${color}-${shade}:active`, {
        '--tw-gradient-via': colors[color][shade],
      } as any);
      globalStyle(`.active\\:to-${color}-${shade}:active`, {
        '--tw-gradient-to': colors[color][shade],
      } as any);
    }
  });
});
