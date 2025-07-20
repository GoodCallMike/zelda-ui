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
      let darkShade;
      if (shade === 700) darkShade = 100;
      else if (shade === 600) darkShade = 200;
      else if (shade === 500) darkShade = 300;
      else if (shade === 400) darkShade = 400;
      else if (shade === 300) darkShade = 500;
      else if (shade === 200) darkShade = 600;
      else if (shade === 100) darkShade = 700;
      else darkShade = shade;
      
      globalStyle(`.dark .text-${color}-${shade}`, {
        color: colors[color][darkShade],
      });
    }
  });
});

globalStyle('.text-white', { color: colors.white });
globalStyle('.text-black', { color: colors.black });

// Border colors with dark mode support
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.border-${color}-${shade}`, {
      borderColor: colors[color][shade],
    });
    // Dark mode border colors for gray
    if (color === 'gray') {
      let darkShade;
      if (shade === 300) darkShade = 600;
      else if (shade === 600) darkShade = 300;
      else darkShade = shade;
      
      globalStyle(`.dark .border-${color}-${shade}`, {
        borderColor: colors[color][darkShade],
      });
    }
  });
});

globalStyle('.border-white', { borderColor: colors.white });
globalStyle('.border-black', { borderColor: colors.black });

// Hover states with dark mode support
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.hover\\\\:bg-${color}-${shade}:hover`, {
      backgroundColor: colors[color][shade],
    });
    // Dark mode hover states for gray
    if (color === 'gray') {
      let darkShade;
      if (shade === 50) darkShade = 800;
      else if (shade === 100) darkShade = 700;
      else darkShade = shade;
      
      globalStyle(`.dark .hover\\\\:bg-${color}-${shade}:hover`, {
        backgroundColor: colors[color][darkShade],
      });
    }
  });
});

// Background opacity utilities
const opacities = [10, 20, 30, 40, 50, 60, 70, 80, 90] as const;
opacities.forEach(opacity => {
  globalStyle(`.bg-opacity-${opacity}`, {
    '--tw-bg-opacity': `${opacity / 100}`,
  });
});

// Apply opacity to black background
globalStyle('.bg-black.bg-opacity-10', { backgroundColor: 'rgba(0, 0, 0, 0.1)' });
globalStyle('.bg-black.bg-opacity-20', { backgroundColor: 'rgba(0, 0, 0, 0.2)' });
globalStyle('.bg-black.bg-opacity-30', { backgroundColor: 'rgba(0, 0, 0, 0.3)' });
globalStyle('.bg-black.bg-opacity-40', { backgroundColor: 'rgba(0, 0, 0, 0.4)' });
globalStyle('.bg-black.bg-opacity-50', { backgroundColor: 'rgba(0, 0, 0, 0.5)' });
globalStyle('.bg-black.bg-opacity-60', { backgroundColor: 'rgba(0, 0, 0, 0.6)' });
globalStyle('.bg-black.bg-opacity-70', { backgroundColor: 'rgba(0, 0, 0, 0.7)' });
globalStyle('.bg-black.bg-opacity-80', { backgroundColor: 'rgba(0, 0, 0, 0.8)' });
globalStyle('.bg-black.bg-opacity-90', { backgroundColor: 'rgba(0, 0, 0, 0.9)' });