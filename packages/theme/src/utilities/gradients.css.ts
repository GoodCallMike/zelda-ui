import { globalStyle } from '@vanilla-extract/css';
import { colors } from '../tokens.css';

// Gradient utilities
globalStyle('.bg-gradient-to-br', {
  backgroundImage: 'linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))',
});

// Gradient color stops
const colorNames = ['gray', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan', 'amber', 'emerald', 'indigo'] as const;
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

colorNames.forEach(color => {
  shades.forEach(shade => {
    if (colors[color] && colors[color][shade]) {
      globalStyle(`.from-${color}-${shade}`, {
        '--tw-gradient-from': colors[color][shade],
      } as any);
      globalStyle(`.to-${color}-${shade}`, {
        '--tw-gradient-to': colors[color][shade],
      } as any);
    }
  });
});

// Hover gradient states
colorNames.forEach(color => {
  shades.forEach(shade => {
    if (colors[color] && colors[color][shade]) {
      globalStyle(`.hover\\:from-${color}-${shade}:hover`, {
        '--tw-gradient-from': colors[color][shade],
      } as any);
      globalStyle(`.hover\\:to-${color}-${shade}:hover`, {
        '--tw-gradient-to': colors[color][shade],
      } as any);
    }
  });
});

// Active gradient states
colorNames.forEach(color => {
  shades.forEach(shade => {
    if (colors[color] && colors[color][shade]) {
      globalStyle(`.active\\:from-${color}-${shade}:active`, {
        '--tw-gradient-from': colors[color][shade],
      } as any);
      globalStyle(`.active\\:to-${color}-${shade}:active`, {
        '--tw-gradient-to': colors[color][shade],
      } as any);
    }
  });
});