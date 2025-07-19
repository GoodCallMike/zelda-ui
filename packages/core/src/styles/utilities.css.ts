import { globalStyle } from '@vanilla-extract/css';
import { colors } from './colors.css';

// Generate all color utilities as global CSS classes
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

// Base background colors
globalStyle('.bg-white', { backgroundColor: colors.white });
globalStyle('.bg-black', { backgroundColor: colors.black });

// Text colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.text-${color}-${shade}`, {
      color: colors[color][shade],
    });
  });
});

// Base text colors
globalStyle('.text-white', { color: colors.white });
globalStyle('.text-black', { color: colors.black });

// Spacing utilities
globalStyle('.p-0', { padding: '0' });
globalStyle('.p-1', { padding: '0.25rem' });
globalStyle('.p-2', { padding: '0.5rem' });
globalStyle('.p-3', { padding: '0.75rem' });
globalStyle('.p-4', { padding: '1rem' });
globalStyle('.p-6', { padding: '1.5rem' });
globalStyle('.p-8', { padding: '2rem' });

globalStyle('.px-2', { paddingLeft: '0.5rem', paddingRight: '0.5rem' });
globalStyle('.px-3', { paddingLeft: '0.75rem', paddingRight: '0.75rem' });
globalStyle('.px-4', { paddingLeft: '1rem', paddingRight: '1rem' });
globalStyle('.px-6', { paddingLeft: '1.5rem', paddingRight: '1.5rem' });

globalStyle('.py-1', { paddingTop: '0.25rem', paddingBottom: '0.25rem' });
globalStyle('.py-2', { paddingTop: '0.5rem', paddingBottom: '0.5rem' });
globalStyle('.py-3', { paddingTop: '0.75rem', paddingBottom: '0.75rem' });

globalStyle('.m-0', { margin: '0' });
globalStyle('.m-1', { margin: '0.25rem' });
globalStyle('.m-2', { margin: '0.5rem' });
globalStyle('.m-4', { margin: '1rem' });
globalStyle('.mx-auto', { marginLeft: 'auto', marginRight: 'auto' });
globalStyle('.mb-2', { marginBottom: '0.5rem' });
globalStyle('.mb-4', { marginBottom: '1rem' });
globalStyle('.mt-2', { marginTop: '0.5rem' });
globalStyle('.mt-4', { marginTop: '1rem' });

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

// Typography utilities
globalStyle('.text-xs', { fontSize: '0.75rem', lineHeight: '1rem' });
globalStyle('.text-sm', { fontSize: '0.875rem', lineHeight: '1.25rem' });
globalStyle('.text-base', { fontSize: '1rem', lineHeight: '1.5rem' });
globalStyle('.text-lg', { fontSize: '1.125rem', lineHeight: '1.75rem' });
globalStyle('.text-xl', { fontSize: '1.25rem', lineHeight: '1.75rem' });
globalStyle('.text-2xl', { fontSize: '1.5rem', lineHeight: '2rem' });

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
globalStyle('.border', { borderWidth: '1px' });
globalStyle('.border-2', { borderWidth: '2px' });
globalStyle('.border-4', { borderWidth: '4px' });
globalStyle('.border-8', { borderWidth: '8px' });

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
globalStyle('.min-h-0', { minHeight: '0' });
globalStyle('.min-h-full', { minHeight: '100%' });

// Fixed width utilities
globalStyle('.w-3', { width: '0.75rem' }); // 12px
globalStyle('.w-4', { width: '1rem' }); // 16px
globalStyle('.w-5', { width: '1.25rem' }); // 20px
globalStyle('.w-6', { width: '1.5rem' }); // 24px
globalStyle('.w-8', { width: '2rem' }); // 32px
globalStyle('.w-10', { width: '2.5rem' }); // 40px
globalStyle('.w-12', { width: '3rem' }); // 48px

// Fixed height utilities
globalStyle('.h-3', { height: '0.75rem' }); // 12px
globalStyle('.h-4', { height: '1rem' }); // 16px
globalStyle('.h-5', { height: '1.25rem' }); // 20px
globalStyle('.h-6', { height: '1.5rem' }); // 24px
globalStyle('.h-8', { height: '2rem' }); // 32px
globalStyle('.h-10', { height: '2.5rem' }); // 40px
globalStyle('.h-12', { height: '3rem' }); // 48px

// Square size utilities (width and height together)
globalStyle('.size-3', { width: '0.75rem', height: '0.75rem' }); // 12px
globalStyle('.size-4', { width: '1rem', height: '1rem' }); // 16px
globalStyle('.size-5', { width: '1.25rem', height: '1.25rem' }); // 20px
globalStyle('.size-6', { width: '1.5rem', height: '1.5rem' }); // 24px
globalStyle('.size-8', { width: '2rem', height: '2rem' }); // 32px
globalStyle('.size-10', { width: '2.5rem', height: '2.5rem' }); // 40px
globalStyle('.size-12', { width: '3rem', height: '3rem' }); // 48px
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
globalStyle('.right-0', { right: '0' });
globalStyle('.bottom-0', { bottom: '0' });
globalStyle('.left-0', { left: '0' });
globalStyle('.inset-0', { top: '0', right: '0', bottom: '0', left: '0' });

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
  '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
  '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
  boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)'
});
globalStyle('.focus\\:ring-2:focus', { 
  '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
  '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
  boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)'
});
globalStyle('.focus\\:ring-offset-1:focus', { '--tw-ring-offset-width': '1px' });
globalStyle('.focus\\:ring-offset-2:focus', { '--tw-ring-offset-width': '2px' });

// Focus ring colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`.focus\\:ring-${color}-${shade}:focus`, {
      '--tw-ring-color': colors[color][shade],
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

// Dark mode utilities
// Background colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`[data-theme="dark"] .dark\\:bg-${color}-${shade}`, {
      backgroundColor: colors[color][shade],
    });
  });
});

globalStyle('[data-theme="dark"] .dark\\:bg-white', { backgroundColor: colors.white });
globalStyle('[data-theme="dark"] .dark\\:bg-black', { backgroundColor: colors.black });
globalStyle('[data-theme="dark"] .dark\\:bg-gray-800', { backgroundColor: colors.gray[800] });
globalStyle('[data-theme="dark"] .dark\\:bg-gray-700', { backgroundColor: colors.gray[700] });

// Text colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`[data-theme="dark"] .dark\\:text-${color}-${shade}`, {
      color: colors[color][shade],
    });
  });
});

globalStyle('[data-theme="dark"] .dark\\:text-white', { color: colors.white });
globalStyle('[data-theme="dark"] .dark\\:text-black', { color: colors.black });
globalStyle('[data-theme="dark"] .dark\\:text-gray-100', { color: colors.gray[100] });
globalStyle('[data-theme="dark"] .dark\\:text-gray-300', { color: colors.gray[300] });
globalStyle('[data-theme="dark"] .dark\\:text-gray-400', { color: colors.gray[400] });
globalStyle('[data-theme="dark"] .dark\\:text-gray-500', { color: colors.gray[500] });

// Border colors
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`[data-theme="dark"] .dark\\:border-${color}-${shade}`, {
      borderColor: colors[color][shade],
    });
  });
});

globalStyle('[data-theme="dark"] .dark\\:border-white', { borderColor: colors.white });
globalStyle('[data-theme="dark"] .dark\\:border-black', { borderColor: colors.black });
globalStyle('[data-theme="dark"] .dark\\:border-gray-600', { borderColor: colors.gray[600] });
globalStyle('[data-theme="dark"] .dark\\:border-gray-700', { borderColor: colors.gray[700] });

// Dark mode hover states
colorNames.forEach(color => {
  shades.forEach(shade => {
    globalStyle(`[data-theme="dark"] .dark\\:hover\\:bg-${color}-${shade}:hover`, {
      backgroundColor: colors[color][shade],
    });
    globalStyle(`[data-theme="dark"] .dark\\:hover\\:text-${color}-${shade}:hover`, {
      color: colors[color][shade],
    });
  });
});

globalStyle('[data-theme="dark"] .dark\\:hover\\:bg-yellow-500:hover', { backgroundColor: colors.yellow[500] });
globalStyle('[data-theme="dark"] .dark\\:hover\\:bg-gray-600:hover', { backgroundColor: colors.gray[600] });
globalStyle('[data-theme="dark"] .dark\\:hover\\:bg-red-400:hover', { backgroundColor: colors.red[400] });