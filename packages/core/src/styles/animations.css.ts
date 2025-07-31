import { globalStyle, keyframes } from '@vanilla-extract/css';

// Custom zelda-specific animations (not in standard Tailwind)
const zeldaShimmer = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(100%)' },
});

// CSS-only zelda effect (custom to this design system)
globalStyle('.zelda-effect', {
  position: 'relative',
  overflow: 'hidden',
});

globalStyle('.zelda-effect::before', {
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

globalStyle('.zelda-effect:hover::before', {
  transform: 'translateX(100%)',
});

// Animated zelda effect
globalStyle('.animate-zelda', {
  animation: `${zeldaShimmer} 2s ease-in-out infinite`,
});
