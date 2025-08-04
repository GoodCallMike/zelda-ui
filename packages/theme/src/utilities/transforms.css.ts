import { globalStyle } from '@vanilla-extract/css';

// Cursor utilities
globalStyle('.cursor-pointer', {
  cursor: 'pointer',
});

globalStyle('.cursor-not-allowed', {
  cursor: 'not-allowed',
});

// Transform utilities
globalStyle('.transform', {
  transform: 'var(--tw-transform)',
});

globalStyle('.-translate-y-1\\/2', {
  transform: 'translateY(-50%)',
});

globalStyle('.translate-x-0\\.5', {
  transform: 'translateX(2px)',
});

globalStyle('.translate-y-0\\.5', {
  transform: 'translateY(2px)',
});

globalStyle('.translate-x-1', {
  transform: 'translateX(4px)',
});

globalStyle('.translate-y-1', {
  transform: 'translateY(4px)',
});

// Hover transforms
globalStyle('.hover\\\\\\\\:translate-x-0\\\\.5:hover', {
  transform: 'translateX(2px)',
});

globalStyle('.hover\\\\\\\\:translate-y-0\\\\.5:hover', {
  transform: 'translateY(2px)',
});

// Active transforms
globalStyle('.active\\\\\\\\:translate-x-1:active', {
  transform: 'translateX(4px)',
});

globalStyle('.active\\\\\\\\:translate-y-1:active', {
  transform: 'translateY(4px)',
});

// Transition utilities
globalStyle('.transition-all', {
  transition: 'all 0.15s ease-in-out',
});

globalStyle('.duration-75', {
  transitionDuration: '75ms',
});
