import { globalStyle, keyframes } from '@vanilla-extract/css';

// Custom jetstream-specific animations (not in standard Tailwind)
const jetstreamShimmer = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(100%)' },
});

// CSS-only jetstream effect (custom to this design system)
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

// Animated jetstream effect
globalStyle('.animate-jetstream', {
  animation: `${jetstreamShimmer} 2s ease-in-out infinite`,
});
