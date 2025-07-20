import { globalStyle } from '@vanilla-extract/css';
import { colors } from '../colors.css';

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

// Text colors with dark mode support
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.text-${color}-${shade}`, {
      color: colors[color][shade],
    });
    // Dark mode text colors for gray
    if (color === 'gray') {
      const darkShade = shade >= 500 ? Math.max(100, 900 - shade + 100) : Math.min(500, shade + 300);
      globalStyle(`.dark .text-${color}-${shade}`, {
        color: colors[color][darkShade],
      });
    }
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
  });
});