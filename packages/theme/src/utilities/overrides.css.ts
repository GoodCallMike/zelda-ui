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

// Standard color aliases
Object.entries(colorAliases).forEach(([alias, zeldaColor]) => {
  shades.forEach((shade) => {
    globalStyle(`.bg-${alias}-${shade}`, {
      '@layer': {
        [overrideLayer]: {
          backgroundColor: colors[zeldaColor][shade],
        },
      },
    });

    globalStyle(`.text-${alias}-${shade}`, {
      '@layer': {
        [overrideLayer]: {
          color: colors[zeldaColor][shade],
        },
      },
    });

    globalStyle(`.border-${alias}-${shade}`, {
      '@layer': {
        [overrideLayer]: {
          borderColor: colors[zeldaColor][shade],
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
