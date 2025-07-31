import { globalStyle } from '@vanilla-extract/css';

// Box shadow utilities (using CSS variables where available)
globalStyle('.shadow-sm', { boxShadow: 'var(--shadow-sm)' });
globalStyle('.shadow', { boxShadow: 'var(--shadow-base)' });
globalStyle('.shadow-md', { boxShadow: 'var(--shadow-md)' });
globalStyle('.shadow-lg', { boxShadow: 'var(--shadow-lg)' });
globalStyle('.shadow-xl', { boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' });
globalStyle('.shadow-2xl', { boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' });
globalStyle('.shadow-inner', { boxShadow: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' });
globalStyle('.shadow-none', { boxShadow: '0 0 #0000' });

// Drop shadow utilities
globalStyle('.drop-shadow-sm', { filter: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))' });
globalStyle('.drop-shadow', { filter: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))' });
globalStyle('.drop-shadow-md', { filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))' });
globalStyle('.drop-shadow-lg', { filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))' });
globalStyle('.drop-shadow-xl', { filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))' });
globalStyle('.drop-shadow-2xl', { filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))' });
globalStyle('.drop-shadow-none', { filter: 'drop-shadow(0 0 #0000)' });

// Opacity utilities
[0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100].forEach(value => {
  globalStyle(`.opacity-${value}`, { opacity: `${value / 100}` });
});

// Blur utilities
globalStyle('.blur-none', { filter: 'blur(0)' });
globalStyle('.blur-sm', { filter: 'blur(4px)' });
globalStyle('.blur', { filter: 'blur(8px)' });
globalStyle('.blur-md', { filter: 'blur(12px)' });
globalStyle('.blur-lg', { filter: 'blur(16px)' });
globalStyle('.blur-xl', { filter: 'blur(24px)' });
globalStyle('.blur-2xl', { filter: 'blur(40px)' });
globalStyle('.blur-3xl', { filter: 'blur(64px)' });

// Brightness utilities
[0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200].forEach(value => {
  globalStyle(`.brightness-${value}`, { filter: `brightness(${value / 100})` });
});

// Contrast utilities
[0, 50, 75, 100, 125, 150, 200].forEach(value => {
  globalStyle(`.contrast-${value}`, { filter: `contrast(${value / 100})` });
});

// Grayscale utilities
[0, 50, 100].forEach(value => {
  globalStyle(`.grayscale-${value === 100 ? '' : value}`, { filter: `grayscale(${value / 100})` });
});

// Sepia utilities
[0, 50, 100].forEach(value => {
  globalStyle(`.sepia-${value === 100 ? '' : value}`, { filter: `sepia(${value / 100})` });
});

// Saturate utilities
[0, 50, 100, 150, 200].forEach(value => {
  globalStyle(`.saturate-${value}`, { filter: `saturate(${value / 100})` });
});

// Hue rotate utilities
[0, 15, 30, 60, 90, 180].forEach(value => {
  globalStyle(`.hue-rotate-${value}`, { filter: `hue-rotate(${value}deg)` });
});

// Invert utilities
[0, 100].forEach(value => {
  globalStyle(`.invert-${value === 100 ? '' : value}`, { filter: `invert(${value / 100})` });
});

// Backdrop blur utilities
globalStyle('.backdrop-blur-none', { backdropFilter: 'blur(0)' });
globalStyle('.backdrop-blur-sm', { backdropFilter: 'blur(4px)' });
globalStyle('.backdrop-blur', { backdropFilter: 'blur(8px)' });
globalStyle('.backdrop-blur-md', { backdropFilter: 'blur(12px)' });
globalStyle('.backdrop-blur-lg', { backdropFilter: 'blur(16px)' });
globalStyle('.backdrop-blur-xl', { backdropFilter: 'blur(24px)' });
globalStyle('.backdrop-blur-2xl', { backdropFilter: 'blur(40px)' });
globalStyle('.backdrop-blur-3xl', { backdropFilter: 'blur(64px)' });