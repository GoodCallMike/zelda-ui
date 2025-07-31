import { globalStyle } from '@vanilla-extract/css';

// Display utilities
globalStyle('.block', { display: 'block' });
globalStyle('.inline', { display: 'inline' });
globalStyle('.inline-block', { display: 'inline-block' });
globalStyle('.flex', { display: 'flex' });
globalStyle('.inline-flex', { display: 'inline-flex' });
globalStyle('.grid', { display: 'grid' });
globalStyle('.hidden', { display: 'none' });

// Flexbox utilities
globalStyle('.items-start', { alignItems: 'flex-start' });
globalStyle('.items-center', { alignItems: 'center' });
globalStyle('.items-end', { alignItems: 'flex-end' });
globalStyle('.justify-start', { justifyContent: 'flex-start' });
globalStyle('.justify-center', { justifyContent: 'center' });
globalStyle('.justify-end', { justifyContent: 'flex-end' });
globalStyle('.justify-between', { justifyContent: 'space-between' });
globalStyle('.flex-col', { flexDirection: 'column' });
globalStyle('.flex-row', { flexDirection: 'row' });
globalStyle('.flex-1', { flex: '1 1 0%' });
globalStyle('.flex-auto', { flex: '1 1 auto' });
globalStyle('.flex-initial', { flex: '0 1 auto' });
globalStyle('.flex-none', { flex: 'none' });

// Grid utilities
globalStyle('.grid-cols-1', { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' });
globalStyle('.grid-cols-2', { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' });
globalStyle('.grid-cols-3', { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' });
globalStyle('.grid-cols-4', { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' });
globalStyle('.grid-cols-6', { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' });
globalStyle('.grid-cols-12', { gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' });

globalStyle('.col-span-1', { gridColumn: 'span 1 / span 1' });
globalStyle('.col-span-2', { gridColumn: 'span 2 / span 2' });
globalStyle('.col-span-3', { gridColumn: 'span 3 / span 3' });
globalStyle('.col-span-4', { gridColumn: 'span 4 / span 4' });
globalStyle('.col-span-6', { gridColumn: 'span 6 / span 6' });
globalStyle('.col-span-12', { gridColumn: 'span 12 / span 12' });

// Positioning utilities
globalStyle('.relative', { position: 'relative' });
globalStyle('.absolute', { position: 'absolute' });
globalStyle('.fixed', { position: 'fixed' });
globalStyle('.sticky', { position: 'sticky' });
globalStyle('.static', { position: 'static' });

// Position values
const positions = [0, 1, 2, 3, 4, 6, 8] as const;
positions.forEach(value => {
  const size = value === 0 ? '0' : `${value * 0.25}rem`;
  globalStyle(`.top-${value}`, { top: size });
  globalStyle(`.right-${value}`, { right: size });
  globalStyle(`.bottom-${value}`, { bottom: size });
  globalStyle(`.left-${value}`, { left: size });
});

// Special position values
globalStyle('.top-1\\/2', { top: '50%' });
globalStyle('.right-1\\/2', { right: '50%' });
globalStyle('.bottom-1\\/2', { bottom: '50%' });
globalStyle('.left-1\\/2', { left: '50%' });
globalStyle('.top-full', { top: '100%' });
globalStyle('.right-full', { right: '100%' });
globalStyle('.bottom-full', { bottom: '100%' });
globalStyle('.left-full', { left: '100%' });
globalStyle('.inset-0', { top: '0', right: '0', bottom: '0', left: '0' });
globalStyle('.inset-1\\/2', { top: '50%', right: '50%', bottom: '50%', left: '50%' });

// Transform utilities
globalStyle('.-translate-x-1\\/2', { transform: 'translateX(-50%)' });
globalStyle('.-translate-y-1\\/2', { transform: 'translateY(-50%)' });
globalStyle('.translate-x-1\\/2', { transform: 'translateX(50%)' });
globalStyle('.translate-y-1\\/2', { transform: 'translateY(50%)' });
globalStyle('.translate-x-full', { transform: 'translateX(100%)' });
globalStyle('.translate-y-full', { transform: 'translateY(100%)' });
globalStyle('.-translate-x-full', { transform: 'translateX(-100%)' });
globalStyle('.-translate-y-full', { transform: 'translateY(-100%)' });

// Z-index utilities
globalStyle('.z-0', { zIndex: '0' });
globalStyle('.z-10', { zIndex: '10' });
globalStyle('.z-20', { zIndex: '20' });
globalStyle('.z-30', { zIndex: '30' });
globalStyle('.z-40', { zIndex: '40' });
globalStyle('.z-50', { zIndex: '50' });

// Overflow utilities
globalStyle('.overflow-auto', { overflow: 'auto' });
globalStyle('.overflow-hidden', { overflow: 'hidden' });
globalStyle('.overflow-visible', { overflow: 'visible' });
globalStyle('.overflow-scroll', { overflow: 'scroll' });