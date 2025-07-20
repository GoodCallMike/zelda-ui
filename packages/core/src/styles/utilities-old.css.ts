// Import optimized utility modules
import './utilities';

// Legacy imports for backwards compatibility
import { globalStyle } from '@vanilla-extract/css';
import { colors } from './colors.css';

// Essential utilities that weren't moved to separate files

// Moved to utilities/spacing.css.ts

// Layout utilities
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

globalStyle('.grid-rows-1', { gridTemplateRows: 'repeat(1, minmax(0, 1fr))' });
globalStyle('.grid-rows-2', { gridTemplateRows: 'repeat(2, minmax(0, 1fr))' });
globalStyle('.grid-rows-3', { gridTemplateRows: 'repeat(3, minmax(0, 1fr))' });
globalStyle('.grid-rows-4', { gridTemplateRows: 'repeat(4, minmax(0, 1fr))' });

globalStyle('.gap-0', { gap: '0' });
globalStyle('.gap-1', { gap: '0.25rem' });
globalStyle('.gap-2', { gap: '0.5rem' });
globalStyle('.gap-3', { gap: '0.75rem' });
globalStyle('.gap-4', { gap: '1rem' });
globalStyle('.gap-6', { gap: '1.5rem' });
globalStyle('.gap-8', { gap: '2rem' });

// Space utilities
globalStyle('.space-y-0 > * + *', { marginTop: '0' });
globalStyle('.space-y-1 > * + *', { marginTop: '0.25rem' });
globalStyle('.space-y-2 > * + *', { marginTop: '0.5rem' });
globalStyle('.space-y-3 > * + *', { marginTop: '0.75rem' });
globalStyle('.space-y-4 > * + *', { marginTop: '1rem' });
globalStyle('.space-y-6 > * + *', { marginTop: '1.5rem' });
globalStyle('.space-y-8 > * + *', { marginTop: '2rem' });

globalStyle('.space-x-0 > * + *', { marginLeft: '0' });
globalStyle('.space-x-1 > * + *', { marginLeft: '0.25rem' });
globalStyle('.space-x-2 > * + *', { marginLeft: '0.5rem' });
globalStyle('.space-x-3 > * + *', { marginLeft: '0.75rem' });
globalStyle('.space-x-4 > * + *', { marginLeft: '1rem' });
globalStyle('.space-x-6 > * + *', { marginLeft: '1.5rem' });
globalStyle('.space-x-8 > * + *', { marginLeft: '2rem' });

// Negative space utilities
globalStyle('.-space-x-1 > * + *', { marginLeft: '-0.25rem' });
globalStyle('.-space-x-2 > * + *', { marginLeft: '-0.5rem' });
globalStyle('.-space-x-3 > * + *', { marginLeft: '-0.75rem' });
globalStyle('.-space-x-4 > * + *', { marginLeft: '-1rem' });

globalStyle('.col-span-1', { gridColumn: 'span 1 / span 1' });
globalStyle('.col-span-2', { gridColumn: 'span 2 / span 2' });
globalStyle('.col-span-3', { gridColumn: 'span 3 / span 3' });
globalStyle('.col-span-4', { gridColumn: 'span 4 / span 4' });
globalStyle('.col-span-6', { gridColumn: 'span 6 / span 6' });
globalStyle('.col-span-12', { gridColumn: 'span 12 / span 12' });

globalStyle('.row-span-1', { gridRow: 'span 1 / span 1' });
globalStyle('.row-span-2', { gridRow: 'span 2 / span 2' });
globalStyle('.row-span-3', { gridRow: 'span 3 / span 3' });
globalStyle('.row-span-4', { gridRow: 'span 4 / span 4' });

// Typography utilities - Major Third Scale (1.25 ratio)
globalStyle('.text-xs', { fontSize: '0.64rem', lineHeight: '1rem' });     // 10.24px
globalStyle('.text-sm', { fontSize: '0.8rem', lineHeight: '1.2rem' });     // 12.8px
globalStyle('.text-base', { fontSize: '1rem', lineHeight: '1.5rem' });     // 16px
globalStyle('.text-lg', { fontSize: '1.25rem', lineHeight: '1.75rem' });   // 20px
globalStyle('.text-xl', { fontSize: '1.563rem', lineHeight: '2rem' });     // 25px
globalStyle('.text-2xl', { fontSize: '1.953rem', lineHeight: '2.5rem' });  // 31.25px
globalStyle('.text-3xl', { fontSize: '2.441rem', lineHeight: '3rem' });    // 39.06px
globalStyle('.text-4xl', { fontSize: '3.052rem', lineHeight: '3.5rem' });  // 48.83px

globalStyle('.font-normal', { fontWeight: '400' });
globalStyle('.font-medium', { fontWeight: '500' });
globalStyle('.font-semibold', { fontWeight: '600' });
globalStyle('.font-bold', { fontWeight: '700' });

// Text transform utilities
globalStyle('.uppercase', { textTransform: 'uppercase' });
globalStyle('.lowercase', { textTransform: 'lowercase' });
globalStyle('.capitalize', { textTransform: 'capitalize' });
globalStyle('.normal-case', { textTransform: 'none' });

// Border utilities
globalStyle('.rounded-none', { borderRadius: '0' });
globalStyle('.rounded-sm', { borderRadius: '0.125rem' });
globalStyle('.rounded', { borderRadius: '0.25rem' });
globalStyle('.rounded-md', { borderRadius: '0.375rem' });
globalStyle('.rounded-lg', { borderRadius: '0.5rem' });
globalStyle('.rounded-full', { borderRadius: '9999px' });

// Border widths
globalStyle('.border-0', { borderWidth: '0' });
globalStyle('.border', { borderWidth: '1px', borderStyle: 'solid' });
globalStyle('.border-2', { borderWidth: '2px', borderStyle: 'solid' });
globalStyle('.border-4', { borderWidth: '4px', borderStyle: 'solid' });
globalStyle('.border-8', { borderWidth: '8px', borderStyle: 'solid' });

// Directional borders
globalStyle('.border-t', { borderTopWidth: '1px', borderTopStyle: 'solid' });
globalStyle('.border-r', { borderRightWidth: '1px', borderRightStyle: 'solid' });
globalStyle('.border-b', { borderBottomWidth: '1px', borderBottomStyle: 'solid' });
globalStyle('.border-l', { borderLeftWidth: '1px', borderLeftStyle: 'solid' });
globalStyle('.border-t-0', { borderTopWidth: '0' });
globalStyle('.border-r-0', { borderRightWidth: '0' });
globalStyle('.border-b-0', { borderBottomWidth: '0' });
globalStyle('.border-l-0', { borderLeftWidth: '0' });
globalStyle('.border-t-2', { borderTopWidth: '2px', borderTopStyle: 'solid' });
globalStyle('.border-r-2', { borderRightWidth: '2px', borderRightStyle: 'solid' });
globalStyle('.border-b-2', { borderBottomWidth: '2px', borderBottomStyle: 'solid' });
globalStyle('.border-l-2', { borderLeftWidth: '2px', borderLeftStyle: 'solid' });
globalStyle('.border-t-4', { borderTopWidth: '4px', borderTopStyle: 'solid' });
globalStyle('.border-r-4', { borderRightWidth: '4px', borderRightStyle: 'solid' });
globalStyle('.border-b-4', { borderBottomWidth: '4px', borderBottomStyle: 'solid' });
globalStyle('.border-l-4', { borderLeftWidth: '4px', borderLeftStyle: 'solid' });
globalStyle('.border-x', { borderLeftWidth: '1px', borderRightWidth: '1px', borderLeftStyle: 'solid', borderRightStyle: 'solid' });
globalStyle('.border-y', { borderTopWidth: '1px', borderBottomWidth: '1px', borderTopStyle: 'solid', borderBottomStyle: 'solid' });
globalStyle('.border-x-0', { borderLeftWidth: '0', borderRightWidth: '0' });
globalStyle('.border-y-0', { borderTopWidth: '0', borderBottomWidth: '0' });
globalStyle('.border-x-2', { borderLeftWidth: '2px', borderRightWidth: '2px', borderLeftStyle: 'solid', borderRightStyle: 'solid' });
globalStyle('.border-y-2', { borderTopWidth: '2px', borderBottomWidth: '2px', borderTopStyle: 'solid', borderBottomStyle: 'solid' });

// Border styles
globalStyle('.border-solid', { borderStyle: 'solid' });
globalStyle('.border-dashed', { borderStyle: 'dashed' });
globalStyle('.border-dotted', { borderStyle: 'dotted' });
globalStyle('.border-double', { borderStyle: 'double' });
globalStyle('.border-none', { borderStyle: 'none' });

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

// Interactive utilities
globalStyle('.cursor-pointer', { cursor: 'pointer' });
globalStyle('.cursor-not-allowed', { cursor: 'not-allowed' });
globalStyle('.cursor-default', { cursor: 'default' });

// Effects utilities
globalStyle('.opacity-0', { opacity: '0' });
globalStyle('.opacity-50', { opacity: '0.5' });
globalStyle('.opacity-75', { opacity: '0.75' });
globalStyle('.opacity-100', { opacity: '1' });

globalStyle('.transition', { 
  transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms'
});

globalStyle('.transition-colors', {
  transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms'
});

globalStyle('.animate-pulse', {
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
});

// Hover states
globalStyle('.hover\\:bg-blue-600:hover', { backgroundColor: colors.blue[600] });
globalStyle('.hover\\:bg-gray-300:hover', { backgroundColor: colors.gray[300] });

// Generate hover states for all background colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.hover\\:bg-${color}-${shade}:hover`, {
      backgroundColor: colors[color][shade],
    });
  });
});

// Disabled states
globalStyle('.opacity-50:disabled', { opacity: '0.5' });

// Sizing utilities
globalStyle('.w-auto', { width: 'auto' });
globalStyle('.w-full', { width: '100%' });
globalStyle('.w-fit', { width: 'fit-content' });
globalStyle('.w-screen', { width: '100vw' });
globalStyle('.h-auto', { height: 'auto' });
globalStyle('.h-full', { height: '100%' });
globalStyle('.h-screen', { height: '100vh' });
// Min height utilities
globalStyle('.min-h-0', { minHeight: '0' });
globalStyle('.min-h-1', { minHeight: '0.25rem' }); // 4px
globalStyle('.min-h-2', { minHeight: '0.5rem' }); // 8px
globalStyle('.min-h-3', { minHeight: '0.75rem' }); // 12px
globalStyle('.min-h-4', { minHeight: '1rem' }); // 16px
globalStyle('.min-h-5', { minHeight: '1.25rem' }); // 20px
globalStyle('.min-h-6', { minHeight: '1.5rem' }); // 24px
globalStyle('.min-h-7', { minHeight: '1.75rem' }); // 28px
globalStyle('.min-h-8', { minHeight: '2rem' }); // 32px
globalStyle('.min-h-9', { minHeight: '2.25rem' }); // 36px
globalStyle('.min-h-10', { minHeight: '2.5rem' }); // 40px
globalStyle('.min-h-11', { minHeight: '2.75rem' }); // 44px
globalStyle('.min-h-12', { minHeight: '3rem' }); // 48px
globalStyle('.min-h-14', { minHeight: '3.5rem' }); // 56px
globalStyle('.min-h-16', { minHeight: '4rem' }); // 64px
globalStyle('.min-h-20', { minHeight: '5rem' }); // 80px
globalStyle('.min-h-24', { minHeight: '6rem' }); // 96px
globalStyle('.min-h-28', { minHeight: '7rem' }); // 112px
globalStyle('.min-h-32', { minHeight: '8rem' }); // 128px
globalStyle('.min-h-36', { minHeight: '9rem' }); // 144px
globalStyle('.min-h-40', { minHeight: '10rem' }); // 160px
globalStyle('.min-h-44', { minHeight: '11rem' }); // 176px
globalStyle('.min-h-48', { minHeight: '12rem' }); // 192px
globalStyle('.min-h-52', { minHeight: '13rem' }); // 208px
globalStyle('.min-h-56', { minHeight: '14rem' }); // 224px
globalStyle('.min-h-60', { minHeight: '15rem' }); // 240px
globalStyle('.min-h-64', { minHeight: '16rem' }); // 256px
globalStyle('.min-h-72', { minHeight: '18rem' }); // 288px
globalStyle('.min-h-80', { minHeight: '20rem' }); // 320px
globalStyle('.min-h-96', { minHeight: '24rem' }); // 384px
globalStyle('.min-h-full', { minHeight: '100%' });
globalStyle('.min-h-screen', { minHeight: '100vh' });

// Min width utilities
globalStyle('.min-w-0', { minWidth: '0' });
globalStyle('.min-w-1', { minWidth: '0.25rem' }); // 4px
globalStyle('.min-w-2', { minWidth: '0.5rem' }); // 8px
globalStyle('.min-w-3', { minWidth: '0.75rem' }); // 12px
globalStyle('.min-w-4', { minWidth: '1rem' }); // 16px
globalStyle('.min-w-5', { minWidth: '1.25rem' }); // 20px
globalStyle('.min-w-6', { minWidth: '1.5rem' }); // 24px
globalStyle('.min-w-7', { minWidth: '1.75rem' }); // 28px
globalStyle('.min-w-8', { minWidth: '2rem' }); // 32px
globalStyle('.min-w-9', { minWidth: '2.25rem' }); // 36px
globalStyle('.min-w-10', { minWidth: '2.5rem' }); // 40px
globalStyle('.min-w-11', { minWidth: '2.75rem' }); // 44px
globalStyle('.min-w-12', { minWidth: '3rem' }); // 48px
globalStyle('.min-w-14', { minWidth: '3.5rem' }); // 56px
globalStyle('.min-w-16', { minWidth: '4rem' }); // 64px
globalStyle('.min-w-20', { minWidth: '5rem' }); // 80px
globalStyle('.min-w-24', { minWidth: '6rem' }); // 96px
globalStyle('.min-w-28', { minWidth: '7rem' }); // 112px
globalStyle('.min-w-32', { minWidth: '8rem' }); // 128px
globalStyle('.min-w-36', { minWidth: '9rem' }); // 144px
globalStyle('.min-w-40', { minWidth: '10rem' }); // 160px
globalStyle('.min-w-44', { minWidth: '11rem' }); // 176px
globalStyle('.min-w-48', { minWidth: '12rem' }); // 192px
globalStyle('.min-w-52', { minWidth: '13rem' }); // 208px
globalStyle('.min-w-56', { minWidth: '14rem' }); // 224px
globalStyle('.min-w-60', { minWidth: '15rem' }); // 240px
globalStyle('.min-w-64', { minWidth: '16rem' }); // 256px
globalStyle('.min-w-72', { minWidth: '18rem' }); // 288px
globalStyle('.min-w-80', { minWidth: '20rem' }); // 320px
globalStyle('.min-w-96', { minWidth: '24rem' }); // 384px
globalStyle('.min-w-full', { minWidth: '100%' });
globalStyle('.min-w-screen', { minWidth: '100vw' });

// Fixed width utilities
globalStyle('.w-px', { width: '1px' });
globalStyle('.w-0', { width: '0' });
globalStyle('.w-1', { width: '0.25rem' }); // 4px
globalStyle('.w-2', { width: '0.5rem' }); // 8px
globalStyle('.w-3', { width: '0.75rem' }); // 12px
globalStyle('.w-4', { width: '1rem' }); // 16px
globalStyle('.w-5', { width: '1.25rem' }); // 20px
globalStyle('.w-6', { width: '1.5rem' }); // 24px
globalStyle('.w-7', { width: '1.75rem' }); // 28px
globalStyle('.w-8', { width: '2rem' }); // 32px
globalStyle('.w-9', { width: '2.25rem' }); // 36px
globalStyle('.w-10', { width: '2.5rem' }); // 40px
globalStyle('.w-11', { width: '2.75rem' }); // 44px
globalStyle('.w-12', { width: '3rem' }); // 48px
globalStyle('.w-14', { width: '3.5rem' }); // 56px
globalStyle('.w-16', { width: '4rem' }); // 64px
globalStyle('.w-20', { width: '5rem' }); // 80px
globalStyle('.w-24', { width: '6rem' }); // 96px
globalStyle('.w-28', { width: '7rem' }); // 112px
globalStyle('.w-32', { width: '8rem' }); // 128px
globalStyle('.w-36', { width: '9rem' }); // 144px
globalStyle('.w-40', { width: '10rem' }); // 160px
globalStyle('.w-44', { width: '11rem' }); // 176px
globalStyle('.w-48', { width: '12rem' }); // 192px
globalStyle('.w-52', { width: '13rem' }); // 208px
globalStyle('.w-56', { width: '14rem' }); // 224px
globalStyle('.w-60', { width: '15rem' }); // 240px
globalStyle('.w-64', { width: '16rem' }); // 256px
globalStyle('.w-72', { width: '18rem' }); // 288px
globalStyle('.w-80', { width: '20rem' }); // 320px
globalStyle('.w-96', { width: '24rem' }); // 384px

// Fixed height utilities
globalStyle('.h-px', { height: '1px' });
globalStyle('.h-0', { height: '0' });
globalStyle('.h-1', { height: '0.25rem' }); // 4px
globalStyle('.h-2', { height: '0.5rem' }); // 8px
globalStyle('.h-3', { height: '0.75rem' }); // 12px
globalStyle('.h-4', { height: '1rem' }); // 16px
globalStyle('.h-5', { height: '1.25rem' }); // 20px
globalStyle('.h-6', { height: '1.5rem' }); // 24px
globalStyle('.h-7', { height: '1.75rem' }); // 28px
globalStyle('.h-8', { height: '2rem' }); // 32px
globalStyle('.h-9', { height: '2.25rem' }); // 36px
globalStyle('.h-10', { height: '2.5rem' }); // 40px
globalStyle('.h-11', { height: '2.75rem' }); // 44px
globalStyle('.h-12', { height: '3rem' }); // 48px
globalStyle('.h-14', { height: '3.5rem' }); // 56px
globalStyle('.h-16', { height: '4rem' }); // 64px
globalStyle('.h-20', { height: '5rem' }); // 80px
globalStyle('.h-24', { height: '6rem' }); // 96px
globalStyle('.h-28', { height: '7rem' }); // 112px
globalStyle('.h-32', { height: '8rem' }); // 128px
globalStyle('.h-36', { height: '9rem' }); // 144px
globalStyle('.h-40', { height: '10rem' }); // 160px
globalStyle('.h-44', { height: '11rem' }); // 176px
globalStyle('.h-48', { height: '12rem' }); // 192px
globalStyle('.h-52', { height: '13rem' }); // 208px
globalStyle('.h-56', { height: '14rem' }); // 224px
globalStyle('.h-60', { height: '15rem' }); // 240px
globalStyle('.h-64', { height: '16rem' }); // 256px
globalStyle('.h-72', { height: '18rem' }); // 288px
globalStyle('.h-80', { height: '20rem' }); // 320px
globalStyle('.h-96', { height: '24rem' }); // 384px

// Square size utilities (width and height together)
globalStyle('.size-px', { width: '1px', height: '1px' });
globalStyle('.size-0', { width: '0', height: '0' });
globalStyle('.size-1', { width: '0.25rem', height: '0.25rem' }); // 4px
globalStyle('.size-2', { width: '0.5rem', height: '0.5rem' }); // 8px
globalStyle('.size-3', { width: '0.75rem', height: '0.75rem' }); // 12px
globalStyle('.size-4', { width: '1rem', height: '1rem' }); // 16px
globalStyle('.size-5', { width: '1.25rem', height: '1.25rem' }); // 20px
globalStyle('.size-6', { width: '1.5rem', height: '1.5rem' }); // 24px
globalStyle('.size-7', { width: '1.75rem', height: '1.75rem' }); // 28px
globalStyle('.size-8', { width: '2rem', height: '2rem' }); // 32px
globalStyle('.size-9', { width: '2.25rem', height: '2.25rem' }); // 36px
globalStyle('.size-10', { width: '2.5rem', height: '2.5rem' }); // 40px
globalStyle('.size-11', { width: '2.75rem', height: '2.75rem' }); // 44px
globalStyle('.size-12', { width: '3rem', height: '3rem' }); // 48px
globalStyle('.size-14', { width: '3.5rem', height: '3.5rem' }); // 56px
globalStyle('.size-16', { width: '4rem', height: '4rem' }); // 64px
globalStyle('.size-20', { width: '5rem', height: '5rem' }); // 80px
globalStyle('.size-24', { width: '6rem', height: '6rem' }); // 96px
globalStyle('.size-28', { width: '7rem', height: '7rem' }); // 112px
globalStyle('.size-32', { width: '8rem', height: '8rem' }); // 128px
globalStyle('.size-36', { width: '9rem', height: '9rem' }); // 144px
globalStyle('.size-40', { width: '10rem', height: '10rem' }); // 160px
globalStyle('.size-44', { width: '11rem', height: '11rem' }); // 176px
globalStyle('.size-48', { width: '12rem', height: '12rem' }); // 192px
globalStyle('.size-52', { width: '13rem', height: '13rem' }); // 208px
globalStyle('.size-56', { width: '14rem', height: '14rem' }); // 224px
globalStyle('.size-60', { width: '15rem', height: '15rem' }); // 240px
globalStyle('.size-64', { width: '16rem', height: '16rem' }); // 256px
globalStyle('.size-72', { width: '18rem', height: '18rem' }); // 288px
globalStyle('.size-80', { width: '20rem', height: '20rem' }); // 320px
globalStyle('.size-96', { width: '24rem', height: '24rem' }); // 384px
globalStyle('.max-w-xs', { maxWidth: '20rem' });
globalStyle('.max-w-sm', { maxWidth: '24rem' });
globalStyle('.max-w-md', { maxWidth: '28rem' });
globalStyle('.max-w-lg', { maxWidth: '32rem' });
globalStyle('.max-w-xl', { maxWidth: '36rem' });
globalStyle('.max-w-2xl', { maxWidth: '42rem' });
globalStyle('.max-w-4xl', { maxWidth: '56rem' });
globalStyle('.max-w-full', { maxWidth: '100%' });

// Positioning utilities
globalStyle('.relative', { position: 'relative' });
globalStyle('.absolute', { position: 'absolute' });
globalStyle('.fixed', { position: 'fixed' });
globalStyle('.sticky', { position: 'sticky' });
globalStyle('.static', { position: 'static' });
globalStyle('.top-0', { top: '0' });
globalStyle('.top-1', { top: '0.25rem' });
globalStyle('.top-1\\.5', { top: '0.375rem' });
globalStyle('.top-2', { top: '0.5rem' });
globalStyle('.top-1\\/2', { top: '50%' });
globalStyle('.right-0', { right: '0' });
globalStyle('.right-1', { right: '0.25rem' });
globalStyle('.right-2', { right: '0.5rem' });
globalStyle('.bottom-0', { bottom: '0' });
globalStyle('.bottom-1', { bottom: '0.25rem' });
globalStyle('.bottom-1\\.5', { bottom: '0.375rem' });
globalStyle('.bottom-2', { bottom: '0.5rem' });
globalStyle('.left-0', { left: '0' });
globalStyle('.inset-0', { top: '0', right: '0', bottom: '0', left: '0' });
globalStyle('.transform', { transform: 'translateY(-50%)' });
globalStyle('.-translate-y-1\\/2', { transform: 'translateY(-50%)' });
globalStyle('.translate-y-1\\/2', { transform: 'translateY(50%)' });
globalStyle('.rotate-0', { transform: 'rotate(0deg)' });
globalStyle('.rotate-1', { transform: 'rotate(1deg)' });
globalStyle('.rotate-2', { transform: 'rotate(2deg)' });
globalStyle('.rotate-3', { transform: 'rotate(3deg)' });
globalStyle('.rotate-6', { transform: 'rotate(6deg)' });
globalStyle('.rotate-12', { transform: 'rotate(12deg)' });
globalStyle('.rotate-45', { transform: 'rotate(45deg)' });
globalStyle('.rotate-90', { transform: 'rotate(90deg)' });
globalStyle('.rotate-180', { transform: 'rotate(180deg)' });
globalStyle('.rotate-270', { transform: 'rotate(270deg)' });
globalStyle('.-rotate-1', { transform: 'rotate(-1deg)' });
globalStyle('.-rotate-2', { transform: 'rotate(-2deg)' });
globalStyle('.-rotate-3', { transform: 'rotate(-3deg)' });
globalStyle('.-rotate-6', { transform: 'rotate(-6deg)' });
globalStyle('.-rotate-12', { transform: 'rotate(-12deg)' });
globalStyle('.-rotate-45', { transform: 'rotate(-45deg)' });
globalStyle('.-rotate-90', { transform: 'rotate(-90deg)' });
globalStyle('.-rotate-180', { transform: 'rotate(-180deg)' });
globalStyle('.-rotate-270', { transform: 'rotate(-270deg)' });

// Z-index utilities
globalStyle('.z-0', { zIndex: '0' });
globalStyle('.z-10', { zIndex: '10' });
globalStyle('.z-20', { zIndex: '20' });
globalStyle('.z-30', { zIndex: '30' });
globalStyle('.z-40', { zIndex: '40' });
globalStyle('.z-50', { zIndex: '50' });
globalStyle('.-z-10', { zIndex: '-10' });

// Overflow utilities
globalStyle('.overflow-auto', { overflow: 'auto' });
globalStyle('.overflow-hidden', { overflow: 'hidden' });
globalStyle('.overflow-visible', { overflow: 'visible' });
globalStyle('.overflow-scroll', { overflow: 'scroll' });
globalStyle('.overflow-x-auto', { overflowX: 'auto' });
globalStyle('.overflow-y-auto', { overflowY: 'auto' });

// Text alignment utilities
globalStyle('.text-left', { textAlign: 'left' });
globalStyle('.text-center', { textAlign: 'center' });
globalStyle('.text-right', { textAlign: 'right' });
globalStyle('.text-justify', { textAlign: 'justify' });

// User select utilities
globalStyle('.select-none', { userSelect: 'none' });
globalStyle('.select-text', { userSelect: 'text' });
globalStyle('.select-all', { userSelect: 'all' });
globalStyle('.select-auto', { userSelect: 'auto' });

// Resize utilities
globalStyle('.resize-none', { resize: 'none' });
globalStyle('.resize', { resize: 'both' });
globalStyle('.resize-x', { resize: 'horizontal' });
globalStyle('.resize-y', { resize: 'vertical' });

// Focus utilities
globalStyle('.focus\\:outline-none:focus', { outline: '2px solid transparent', outlineOffset: '2px' });
globalStyle('.focus\\:ring-1:focus', { 
  boxShadow: '0 0 0 1px rgb(59 130 246)'
});
globalStyle('.focus\\:ring-2:focus', { 
  boxShadow: '0 0 0 2px rgb(59 130 246)'
});

// Focus ring colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.focus\\:ring-${color}-${shade}:focus`, {
      boxShadow: `0 0 0 2px ${colors[color][shade]}`,
    });
    globalStyle(`.focus\\:border-${color}-${shade}:focus`, {
      borderColor: colors[color][shade],
    });
  });
});

// Shadow utilities
globalStyle('.shadow-sm', { boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' });
globalStyle('.shadow', { boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' });
globalStyle('.shadow-md', { boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' });
globalStyle('.shadow-lg', { boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' });
globalStyle('.shadow-none', { boxShadow: '0 0 #0000' });

// Dark mode utilities with .dark class
// Text colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.dark .dark\\:text-${color}-${shade}`, {
      color: colors[color][shade],
    });
  });
});

globalStyle('.dark .dark\\:text-white', { color: colors.white });
globalStyle('.dark .dark\\:text-black', { color: colors.black });
globalStyle('.dark .dark\\:text-gray-100', { color: colors.gray[100] });
globalStyle('.dark .dark\\:text-gray-300', { color: colors.gray[300] });
globalStyle('.dark .dark\\:text-gray-400', { color: colors.gray[400] });
globalStyle('.dark .dark\\:text-gray-500', { color: colors.gray[500] });
globalStyle('.dark .dark\\:text-gray-900', { color: colors.gray[900] });

// Alternative selector for better specificity
globalStyle('.dark h4.dark\\:text-gray-100', { color: colors.gray[100] });
globalStyle('.dark p.dark\\:text-gray-400', { color: colors.gray[400] });

// Typography component utilities
globalStyle('.dark h1', { color: colors.gray[100] });
globalStyle('.dark h2', { color: colors.gray[100] });
globalStyle('.dark h3', { color: colors.gray[100] });
globalStyle('.dark h4', { color: colors.gray[100] });
globalStyle('.dark h5', { color: colors.gray[100] });
globalStyle('.dark h6', { color: colors.gray[100] });
globalStyle('.dark p', { color: colors.gray[100] });
globalStyle('.dark span', { color: colors.gray[400] });
globalStyle('.dark label', { color: colors.gray[400] });
globalStyle('.dark small', { color: colors.gray[500] });
globalStyle('.dark strong', { color: colors.gray[50] });
globalStyle('.dark em', { color: colors.gray[300] });
globalStyle('.dark code', { color: colors.gray[200] });
globalStyle('.dark pre', { color: colors.gray[200] });
globalStyle('.dark blockquote', { color: colors.gray[300] });
globalStyle('.dark li', { color: colors.gray[300] });
globalStyle('.dark td', { color: colors.gray[300] });
globalStyle('.dark th', { color: colors.gray[100] });

// Dark mode text color overrides
globalStyle('.dark .text-gray-900', { color: colors.gray[100] + ' !important' });
globalStyle('.dark .text-gray-800', { color: colors.gray[200] + ' !important' });
globalStyle('.dark .text-gray-700', { color: colors.gray[300] + ' !important' });
globalStyle('.dark .text-gray-600', { color: colors.gray[400] + ' !important' });
globalStyle('.dark .text-gray-500', { color: colors.gray[500] + ' !important' });
globalStyle('.dark .text-gray-400', { color: colors.gray[400] + ' !important' });
globalStyle('.dark .text-gray-300', { color: colors.gray[300] + ' !important' });
globalStyle('.dark .text-gray-200', { color: colors.gray[200] + ' !important' });
globalStyle('.dark .text-gray-100', { color: colors.gray[100] + ' !important' });

// Specific element overrides
globalStyle('.dark button.text-gray-700', { color: colors.gray[100] + ' !important' });
globalStyle('.dark div.text-gray-600', { color: colors.gray[400] + ' !important' });
globalStyle('.dark p.text-gray-600', { color: colors.gray[400] + ' !important' });
globalStyle('.dark span.text-gray-500', { color: colors.gray[400] + ' !important' });
globalStyle('.dark ul.text-gray-600', { color: colors.gray[400] + ' !important' });
globalStyle('.dark li.text-gray-600', { color: colors.gray[400] + ' !important' });

// Border utilities
globalStyle('.dark .border-gray-300', { borderColor: colors.gray[600] + ' !important' });
globalStyle('.dark .border-gray-200', { borderColor: colors.gray[700] + ' !important' });
globalStyle('.dark .border-gray-600', { borderColor: colors.gray[600] + ' !important' });

// Background utilities
globalStyle('.dark .bg-gray-50', { backgroundColor: colors.gray[800] + ' !important' });
globalStyle('.dark .bg-gray-100', { backgroundColor: colors.gray[800] + ' !important' });
globalStyle('.dark .bg-gray-200', { backgroundColor: colors.gray[700] + ' !important' });
globalStyle('.dark .bg-white', { backgroundColor: colors.gray[900] + ' !important' });

// Background colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.dark .dark\\:bg-${color}-${shade}`, {
      backgroundColor: colors[color][shade],
    });
  });
});

globalStyle('.dark .dark\\:bg-white', { backgroundColor: colors.white });
globalStyle('.dark .dark\\:bg-black', { backgroundColor: colors.black });
globalStyle('.dark .dark\\:bg-gray-800', { backgroundColor: colors.gray[800] });
globalStyle('.dark .dark\\:bg-gray-700', { backgroundColor: colors.gray[700] });

// Border colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.dark .dark\\:border-${color}-${shade}`, {
      borderColor: colors[color][shade],
    });
  });
});

globalStyle('.dark .dark\\:border-white', { borderColor: colors.white });
globalStyle('.dark .dark\\:border-black', { borderColor: colors.black });
globalStyle('.dark .dark\\:border-gray-600', { borderColor: colors.gray[600] });
globalStyle('.dark .dark\\:border-gray-700', { borderColor: colors.gray[700] });