import { globalStyle } from '@vanilla-extract/css';

// Complex shadow utilities for retro/special effects

// Inset shadows for 3D button effects
globalStyle('.shadow-inset-light', {
  boxShadow: 'inset 2px 2px 0px rgba(255, 255, 255, 0.3)',
});

globalStyle('.shadow-inset-dark', {
  boxShadow: 'inset -2px -2px 0px rgba(0, 0, 0, 0.3)',
});

globalStyle('.shadow-inset-combined', {
  boxShadow:
    'inset 2px 2px 0px rgba(255, 255, 255, 0.3), inset -2px -2px 0px rgba(0, 0, 0, 0.3)',
});

// Triforce-style shadows
globalStyle('.shadow-triforce', {
  boxShadow: `
    inset 2px 2px 0px #ffff8d,
    inset -2px -2px 0px #cc8400,
    4px 4px 0px #8b4513,
    0 0 20px rgba(255, 215, 0, 0.5)
  `,
});

globalStyle('.shadow-triforce-hover', {
  boxShadow: `
    inset 2px 2px 0px #ffffcc,
    inset -2px -2px 0px #b8860b,
    3px 3px 0px #8b4513,
    0 0 25px rgba(255, 215, 0, 0.7)
  `,
});

globalStyle('.shadow-triforce-active', {
  boxShadow: `
    inset -2px -2px 0px #ffff8d,
    inset 2px 2px 0px #996f08,
    2px 2px 0px #8b4513,
    0 0 15px rgba(255, 215, 0, 0.3)
  `,
});

// 24-bit retro shadows
globalStyle('.shadow-retro-24', {
  boxShadow: `
    inset 2px 2px 0px #87ceeb,
    inset -2px -2px 0px #1e3a8a,
    3px 3px 0px #000000
  `,
});

globalStyle('.shadow-retro-24-hover', {
  boxShadow: `
    inset 2px 2px 0px #97defb,
    inset -2px -2px 0px #2e4a9a,
    2px 2px 0px #000000
  `,
});

globalStyle('.shadow-retro-24-active', {
  boxShadow: `
    inset -2px -2px 0px #87ceeb,
    inset 2px 2px 0px #0f1f5a,
    1px 1px 0px #000000
  `,
});

// 32-bit retro shadows
globalStyle('.shadow-retro-32', {
  boxShadow: `
    inset 0 2px 4px rgba(255, 255, 255, 0.3),
    inset 0 -2px 4px rgba(0, 0, 0, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.4),
    0 0 0 1px #654321
  `,
});

globalStyle('.shadow-retro-32-hover', {
  boxShadow: `
    inset 0 2px 4px rgba(255, 255, 255, 0.4),
    inset 0 -2px 4px rgba(0, 0, 0, 0.2),
    0 6px 12px rgba(0, 0, 0, 0.3),
    0 0 0 1px #654321
  `,
});

globalStyle('.shadow-retro-32-active', {
  boxShadow: `
    inset 0 -2px 4px rgba(255, 255, 255, 0.2),
    inset 0 2px 4px rgba(0, 0, 0, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 0 0 1px #654321
  `,
});

// Rupee gem shadows
globalStyle('.shadow-rupee', {
  boxShadow: `
    inset 2px 2px 8px rgba(255, 255, 255, 0.4),
    inset -2px -2px 8px rgba(0, 0, 0, 0.3),
    0 4px 12px rgba(0, 153, 68, 0.5),
    0 0 0 1px #002211
  `,
});

globalStyle('.shadow-rupee-hover', {
  boxShadow: `
    inset 2px 2px 8px rgba(255, 255, 255, 0.5),
    inset -2px -2px 8px rgba(0, 0, 0, 0.2),
    0 6px 16px rgba(0, 153, 68, 0.6),
    0 0 0 1px #002211
  `,
});

globalStyle('.shadow-rupee-active', {
  boxShadow: `
    inset -2px -2px 8px rgba(255, 255, 255, 0.3),
    inset 2px 2px 8px rgba(0, 0, 0, 0.4),
    0 2px 8px rgba(0, 153, 68, 0.4),
    0 0 0 1px #002211
  `,
});

// Hover state shadows
globalStyle('.hover\\\\:shadow-triforce-hover:hover', {
  boxShadow: `
    inset 2px 2px 0px #ffffcc,
    inset -2px -2px 0px #b8860b,
    3px 3px 0px #8b4513,
    0 0 25px rgba(255, 215, 0, 0.7)
  `,
});

globalStyle('.hover\\\\:shadow-retro-24:hover', {
  boxShadow: `
    inset 2px 2px 0px #97defb,
    inset -2px -2px 0px #2e4a9a,
    2px 2px 0px #000000
  `,
});

// Active state shadows
globalStyle('.active\\\\:shadow-triforce-active:active', {
  boxShadow: `
    inset -2px -2px 0px #ffff8d,
    inset 2px 2px 0px #996f08,
    2px 2px 0px #8b4513,
    0 0 15px rgba(255, 215, 0, 0.3)
  `,
});

globalStyle('.active\\\\:shadow-retro-24:active', {
  boxShadow: `
    inset -2px -2px 0px #87ceeb,
    inset 2px 2px 0px #0f1f5a,
    1px 1px 0px #000000
  `,
});

// Transform utilities for hover/active states
globalStyle('.hover\\\\:translate-x-0\\.5:hover', {
  transform: 'translateX(2px)',
});

globalStyle('.hover\\\\:translate-y-0\\.5:hover', {
  transform: 'translateY(2px)',
});

globalStyle('.hover\\\\:translate-x-0\\.5.hover\\\\:translate-y-0\\.5:hover', {
  transform: 'translate(2px, 2px)',
});

globalStyle('.active\\\\:translate-x-1:active', {
  transform: 'translateX(4px)',
});

globalStyle('.active\\\\:translate-y-1:active', {
  transform: 'translateY(4px)',
});

globalStyle('.active\\\\:translate-x-1.active\\\\:translate-y-1:active', {
  transform: 'translate(4px, 4px)',
});
