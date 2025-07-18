import { globalStyle, keyframes } from '@vanilla-extract/css';

// Define standard animations first
const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.5 },
});

const bounce = keyframes({
  '0%, 100%': {
    transform: 'translateY(-25%)',
    animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
  },
  '50%': {
    transform: 'translateY(0)',
    animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
  },
});

const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

// CSS-only jetstream effect
globalStyle('.jetstream-effect', {
  position: 'relative',
  overflow: 'hidden',
});

globalStyle('.jetstream-effect::before', {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
  transform: 'translateX(-100%)',
  transition: 'transform 0.2s ease-out',
});

globalStyle('.jetstream-effect:hover::before', {
  transform: 'translateX(100%)',
});

// Animation utilities
globalStyle('.animate-pulse', {
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

globalStyle('.animate-bounce', {
  animation: `${bounce} 1s infinite`,
});

globalStyle('.animate-spin', {
  animation: `${spin} 1s linear infinite`,
});
