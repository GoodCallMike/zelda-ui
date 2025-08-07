import { globalStyle } from '@vanilla-extract/css';
import { overrideLayer } from '../layers.css';
import { colors } from '../tokens.css';

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

// Background colors in overrides layer
zeldaColors.forEach((color) => {
  shades.forEach((shade) => {
    globalStyle(`.bg-${color}-${shade}`, {
      '@layer': {
        [overrideLayer]: {
          backgroundColor: colors[color][shade],
        },
      },
    });
  });
});

// Text colors in overrides layer
zeldaColors.forEach((color) => {
  shades.forEach((shade) => {
    globalStyle(`.text-${color}-${shade}`, {
      '@layer': {
        [overrideLayer]: {
          color: colors[color][shade],
        },
      },
    });
  });
});

// Border colors in overrides layer
zeldaColors.forEach((color) => {
  shades.forEach((shade) => {
    globalStyle(`.border-${color}-${shade}`, {
      '@layer': {
        [overrideLayer]: {
          borderColor: colors[color][shade],
        },
      },
    });
  });
});

// Basic colors in overrides layer
globalStyle('.bg-white', {
  '@layer': {
    [overrideLayer]: {
      backgroundColor: colors.white,
    },
  },
});

globalStyle('.bg-black', {
  '@layer': {
    [overrideLayer]: {
      backgroundColor: colors.black,
    },
  },
});

globalStyle('.bg-transparent', {
  '@layer': {
    [overrideLayer]: {
      backgroundColor: 'transparent',
    },
  },
});
