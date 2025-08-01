import { globalStyle } from '@vanilla-extract/css';
import { colors } from '../tokens.css';

const colorNames = ['gray', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan'] as const;
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

// Background colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.bg-${color}-${shade}`, {
      backgroundColor: colors[color][shade],
    });
  });
});

globalStyle('.bg-white', { backgroundColor: colors.white });
globalStyle('.bg-black', { backgroundColor: colors.black });
globalStyle('.bg-transparent', { backgroundColor: 'transparent' });

// Text colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.text-${color}-${shade}`, {
      color: colors[color][shade],
    });
  });
});

globalStyle('.text-white', { color: colors.white });
globalStyle('.text-black', { color: colors.black });

// Border colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.border-${color}-${shade}`, {
      borderColor: colors[color][shade],
    });
  });
});

globalStyle('.border-white', { borderColor: colors.white });
globalStyle('.border-black', { borderColor: colors.black });

// Hover states
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.hover\\\\:bg-${color}-${shade}:hover`, {
      backgroundColor: colors[color][shade],
    });
    globalStyle(`.hover\\\\:text-${color}-${shade}:hover`, {
      color: colors[color][shade],
    });
  });
});

// Dark mode variants for gray
const grayDarkModeMap = {
  50: 900, 100: 800, 200: 700, 300: 600, 400: 500,
  500: 400, 600: 300, 700: 200, 800: 100, 900: 50
};

Object.entries(grayDarkModeMap).forEach(([light, dark]) => {
  globalStyle(`.dark .text-gray-${light}`, {
    color: colors.gray[dark as keyof typeof colors.gray],
  });
  globalStyle(`.dark .bg-gray-${light}`, {
    backgroundColor: colors.gray[dark as keyof typeof colors.gray],
  });
  globalStyle(`.dark .border-gray-${light}`, {
    borderColor: colors.gray[dark as keyof typeof colors.gray],
  });
});

// Opacity utilities
const opacities = [10, 20, 30, 40, 50, 60, 70, 80, 90] as const;
opacities.forEach(opacity => {
  globalStyle(`.bg-opacity-${opacity}`, {
    '--tw-bg-opacity': `${opacity / 100}`,
  } as any);
  globalStyle(`.bg-black\\.bg-opacity-${opacity}`, {
    backgroundColor: `rgba(0, 0, 0, ${opacity / 100})`,
  });
  globalStyle(`.bg-white\\.bg-opacity-${opacity}`, {
    backgroundColor: `rgba(255, 255, 255, ${opacity / 100})`,
  });
});