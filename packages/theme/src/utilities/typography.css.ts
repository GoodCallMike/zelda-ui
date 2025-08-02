import { globalStyle } from '@vanilla-extract/css';

// Font family utilities
globalStyle('.font-sans', { 
  fontFamily: '"Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
});
globalStyle('.font-serif', { 
  fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
});
globalStyle('.font-mono', { 
  fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
});

// Font size utilities
globalStyle('.text-xs', { fontSize: 'var(--text-xs)' });
globalStyle('.text-sm', { fontSize: 'var(--text-sm)' });
globalStyle('.text-base', { fontSize: 'var(--text-base)' });
globalStyle('.text-lg', { fontSize: 'var(--text-lg)' });
globalStyle('.text-xl', { fontSize: 'var(--text-xl)' });
globalStyle('.text-2xl', { fontSize: 'var(--text-2xl)' });
globalStyle('.text-3xl', { fontSize: 'var(--text-3xl)' });
globalStyle('.text-4xl', { fontSize: 'var(--text-4xl)' });

// Font weight utilities
globalStyle('.font-normal', { fontWeight: 'var(--font-normal)' });
globalStyle('.font-medium', { fontWeight: 'var(--font-medium)' });
globalStyle('.font-semibold', { fontWeight: 'var(--font-semibold)' });
globalStyle('.font-bold', { fontWeight: 'var(--font-bold)' });

// Text alignment
globalStyle('.text-left', { textAlign: 'left' });
globalStyle('.text-center', { textAlign: 'center' });
globalStyle('.text-right', { textAlign: 'right' });
globalStyle('.text-justify', { textAlign: 'justify' });

// Line height utilities
globalStyle('.leading-3', { lineHeight: '.75rem' });
globalStyle('.leading-4', { lineHeight: '1rem' });
globalStyle('.leading-5', { lineHeight: '1.25rem' });
globalStyle('.leading-6', { lineHeight: '1.5rem' });
globalStyle('.leading-7', { lineHeight: '1.75rem' });
globalStyle('.leading-8', { lineHeight: '2rem' });
globalStyle('.leading-9', { lineHeight: '2.25rem' });
globalStyle('.leading-10', { lineHeight: '2.5rem' });
globalStyle('.leading-none', { lineHeight: '1' });
globalStyle('.leading-tight', { lineHeight: '1.25' });
globalStyle('.leading-snug', { lineHeight: '1.375' });
globalStyle('.leading-normal', { lineHeight: '1.5' });
globalStyle('.leading-relaxed', { lineHeight: '1.625' });
globalStyle('.leading-loose', { lineHeight: '2' });

// Letter spacing utilities
globalStyle('.tracking-tighter', { letterSpacing: '-0.05em' });
globalStyle('.tracking-tight', { letterSpacing: '-0.025em' });
globalStyle('.tracking-normal', { letterSpacing: '0em' });
globalStyle('.tracking-wide', { letterSpacing: '0.025em' });
globalStyle('.tracking-wider', { letterSpacing: '0.05em' });
globalStyle('.tracking-widest', { letterSpacing: '0.1em' });

// Text decoration utilities
globalStyle('.underline', { textDecoration: 'underline' });
globalStyle('.overline', { textDecoration: 'overline' });
globalStyle('.line-through', { textDecoration: 'line-through' });
globalStyle('.no-underline', { textDecoration: 'none' });

// Text decoration style
globalStyle('.decoration-solid', { textDecorationStyle: 'solid' });
globalStyle('.decoration-double', { textDecorationStyle: 'double' });
globalStyle('.decoration-dotted', { textDecorationStyle: 'dotted' });
globalStyle('.decoration-dashed', { textDecorationStyle: 'dashed' });
globalStyle('.decoration-wavy', { textDecorationStyle: 'wavy' });

// Text decoration thickness
globalStyle('.decoration-auto', { textDecorationThickness: 'auto' });
globalStyle('.decoration-from-font', { textDecorationThickness: 'from-font' });
globalStyle('.decoration-0', { textDecorationThickness: '0px' });
globalStyle('.decoration-1', { textDecorationThickness: '1px' });
globalStyle('.decoration-2', { textDecorationThickness: '2px' });
globalStyle('.decoration-4', { textDecorationThickness: '4px' });
globalStyle('.decoration-8', { textDecorationThickness: '8px' });

// Text underline offset
globalStyle('.underline-offset-auto', { textUnderlineOffset: 'auto' });
globalStyle('.underline-offset-0', { textUnderlineOffset: '0px' });
globalStyle('.underline-offset-1', { textUnderlineOffset: '1px' });
globalStyle('.underline-offset-2', { textUnderlineOffset: '2px' });
globalStyle('.underline-offset-4', { textUnderlineOffset: '4px' });
globalStyle('.underline-offset-8', { textUnderlineOffset: '8px' });

// Text transform (additional)
globalStyle('.lowercase', { textTransform: 'lowercase' });
globalStyle('.capitalize', { textTransform: 'capitalize' });
globalStyle('.normal-case', { textTransform: 'none' });

// Text overflow
globalStyle('.truncate', { 
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
});
globalStyle('.text-ellipsis', { textOverflow: 'ellipsis' });
globalStyle('.text-clip', { textOverflow: 'clip' });

// White space
globalStyle('.whitespace-normal', { whiteSpace: 'normal' });
globalStyle('.whitespace-nowrap', { whiteSpace: 'nowrap' });
globalStyle('.whitespace-pre', { whiteSpace: 'pre' });
globalStyle('.whitespace-pre-line', { whiteSpace: 'pre-line' });
globalStyle('.whitespace-pre-wrap', { whiteSpace: 'pre-wrap' });

// Word break
globalStyle('.break-normal', { overflowWrap: 'normal', wordBreak: 'normal' });
globalStyle('.break-words', { overflowWrap: 'break-word' });
globalStyle('.break-all', { wordBreak: 'break-all' });

// Text balance and pretty (modern CSS)
globalStyle('.text-balance', { textWrap: 'balance' });
globalStyle('.text-pretty', { textWrap: 'pretty' });

// Hyphens
globalStyle('.hyphens-none', { hyphens: 'none' });
globalStyle('.hyphens-manual', { hyphens: 'manual' });
globalStyle('.hyphens-auto', { hyphens: 'auto' });

// Text indent
globalStyle('.indent-0', { textIndent: '0px' });
globalStyle('.indent-px', { textIndent: '1px' });
globalStyle('.indent-0\\.5', { textIndent: '0.125rem' });
globalStyle('.indent-1', { textIndent: '0.25rem' });
globalStyle('.indent-1\\.5', { textIndent: '0.375rem' });
globalStyle('.indent-2', { textIndent: '0.5rem' });
globalStyle('.indent-2\\.5', { textIndent: '0.625rem' });
globalStyle('.indent-3', { textIndent: '0.75rem' });
globalStyle('.indent-3\\.5', { textIndent: '0.875rem' });
globalStyle('.indent-4', { textIndent: '1rem' });
globalStyle('.indent-5', { textIndent: '1.25rem' });
globalStyle('.indent-6', { textIndent: '1.5rem' });
globalStyle('.indent-7', { textIndent: '1.75rem' });
globalStyle('.indent-8', { textIndent: '2rem' });
globalStyle('.indent-9', { textIndent: '2.25rem' });
globalStyle('.indent-10', { textIndent: '2.5rem' });
globalStyle('.indent-11', { textIndent: '2.75rem' });
globalStyle('.indent-12', { textIndent: '3rem' });
globalStyle('.indent-14', { textIndent: '3.5rem' });
globalStyle('.indent-16', { textIndent: '4rem' });
globalStyle('.indent-20', { textIndent: '5rem' });
globalStyle('.indent-24', { textIndent: '6rem' });
globalStyle('.indent-28', { textIndent: '7rem' });
globalStyle('.indent-32', { textIndent: '8rem' });
globalStyle('.indent-36', { textIndent: '9rem' });
globalStyle('.indent-40', { textIndent: '10rem' });
globalStyle('.indent-44', { textIndent: '11rem' });
globalStyle('.indent-48', { textIndent: '12rem' });
globalStyle('.indent-52', { textIndent: '13rem' });
globalStyle('.indent-56', { textIndent: '14rem' });
globalStyle('.indent-60', { textIndent: '15rem' });
globalStyle('.indent-64', { textIndent: '16rem' });
globalStyle('.indent-72', { textIndent: '18rem' });
globalStyle('.indent-80', { textIndent: '20rem' });
globalStyle('.indent-96', { textIndent: '24rem' });