import { globalStyle, keyframes } from '@vanilla-extract/css';

// Keyframe definitions
const spin = keyframes({
  to: { transform: 'rotate(360deg)' },
});

const ping = keyframes({
  '75%, 100%': {
    transform: 'scale(2)',
    opacity: '0',
  },
});

const pulse = keyframes({
  '50%': { opacity: '.5' },
});

const bounce = keyframes({
  '0%, 100%': {
    transform: 'translateY(-25%)',
    animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
  },
  '50%': {
    transform: 'none',
    animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
  },
});

// Animation utilities
globalStyle('.animate-none', { animation: 'none' });
globalStyle('.animate-spin', { animation: `${spin} 1s linear infinite` });
globalStyle('.animate-ping', {
  animation: `${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
});
globalStyle('.animate-pulse', {
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});
globalStyle('.animate-bounce', { animation: `${bounce} 1s infinite` });

// Transition utilities
globalStyle('.transition-none', { transitionProperty: 'none' });
globalStyle('.transition-all', {
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
});
globalStyle('.transition', {
  transitionProperty:
    'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
});
globalStyle('.transition-colors', {
  transitionProperty:
    'color, background-color, border-color, text-decoration-color, fill, stroke',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
});
globalStyle('.transition-opacity', {
  transitionProperty: 'opacity',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
});
globalStyle('.transition-shadow', {
  transitionProperty: 'box-shadow',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
});
globalStyle('.transition-transform', {
  transitionProperty: 'transform',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
});

// Duration utilities
globalStyle('.duration-75', { transitionDuration: '75ms' });
globalStyle('.duration-100', { transitionDuration: '100ms' });
globalStyle('.duration-150', { transitionDuration: '150ms' });
globalStyle('.duration-200', { transitionDuration: '200ms' });
globalStyle('.duration-300', { transitionDuration: '300ms' });
globalStyle('.duration-500', { transitionDuration: '500ms' });
globalStyle('.duration-700', { transitionDuration: '700ms' });
globalStyle('.duration-1000', { transitionDuration: '1000ms' });

// Timing function utilities
globalStyle('.ease-linear', { transitionTimingFunction: 'linear' });
globalStyle('.ease-in', {
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
});
globalStyle('.ease-out', {
  transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
});
globalStyle('.ease-in-out', {
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
});

// Delay utilities
globalStyle('.delay-75', { transitionDelay: '75ms' });
globalStyle('.delay-100', { transitionDelay: '100ms' });
globalStyle('.delay-150', { transitionDelay: '150ms' });
globalStyle('.delay-200', { transitionDelay: '200ms' });
globalStyle('.delay-300', { transitionDelay: '300ms' });
globalStyle('.delay-500', { transitionDelay: '500ms' });
globalStyle('.delay-700', { transitionDelay: '700ms' });
globalStyle('.delay-1000', { transitionDelay: '1000ms' });

// Transform utilities
globalStyle('.transform', { transform: 'var(--tw-transform)' });
globalStyle('.transform-cpu', { transform: 'var(--tw-transform)' });
globalStyle('.transform-gpu', {
  transform:
    'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
});
globalStyle('.transform-none', { transform: 'none' });

// Scale utilities
[0, 50, 75, 90, 95, 100, 105, 110, 125, 150].forEach((value) => {
  globalStyle(`.scale-${value}`, { transform: `scale(${value / 100})` });
});

// Rotate utilities
[0, 1, 2, 3, 6, 12, 45, 90, 180].forEach((value) => {
  globalStyle(`.rotate-${value}`, { transform: `rotate(${value}deg)` });
  if (value !== 0) {
    globalStyle(`.-rotate-${value}`, { transform: `rotate(-${value}deg)` });
  }
});

// Translate utilities
[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].forEach((value) => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;
  globalStyle(`.translate-x-${value}`, { transform: `translateX(${size})` });
  globalStyle(`.translate-y-${value}`, { transform: `translateY(${size})` });
  if (value !== 0) {
    globalStyle(`.-translate-x-${value}`, {
      transform: `translateX(-${size})`,
    });
    globalStyle(`.-translate-y-${value}`, {
      transform: `translateY(-${size})`,
    });
  }
});

// Skew utilities
[0, 1, 2, 3, 6, 12].forEach((value) => {
  globalStyle(`.skew-x-${value}`, { transform: `skewX(${value}deg)` });
  globalStyle(`.skew-y-${value}`, { transform: `skewY(${value}deg)` });
  if (value !== 0) {
    globalStyle(`.-skew-x-${value}`, { transform: `skewX(-${value}deg)` });
    globalStyle(`.-skew-y-${value}`, { transform: `skewY(-${value}deg)` });
  }
});

// Transform style
globalStyle('.transform-style-flat', { transformStyle: 'flat' });
globalStyle('.transform-style-preserve-3d', { transformStyle: 'preserve-3d' });

// Perspective
globalStyle('.perspective-none', { perspective: 'none' });
globalStyle('.perspective-250', { perspective: '250px' });
globalStyle('.perspective-500', { perspective: '500px' });
globalStyle('.perspective-750', { perspective: '750px' });
globalStyle('.perspective-1000', { perspective: '1000px' });

// Backface visibility
globalStyle('.backface-visible', { backfaceVisibility: 'visible' });
globalStyle('.backface-hidden', { backfaceVisibility: 'hidden' });
