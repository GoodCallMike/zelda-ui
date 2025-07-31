import { globalStyle } from '@vanilla-extract/css';

// Content utilities
globalStyle('.content-none', { content: 'none' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\*\\\\\\\\\\"\\\\\\\\]', { content: '"*"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\"\\\\\\\\\\"\\\\\\\\]', { content: '""""' });

// Common content values
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\(\\\\\\\\)\\\\\\\\"]', { content: '"()"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\[\\\\\\\\]\\\\\\\\"]', { content: '"[]"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\{\\\\\\\\}\\\\\\\\"]', { content: '"{}"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\<\\\\\\\\>\\\\\\\\"]', { content: '"<>"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\•\\\\\\\\"]', { content: '"•"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\→\\\\\\\\"]', { content: '"→"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\←\\\\\\\\"]', { content: '"←"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\↑\\\\\\\\"]', { content: '"↑"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\↓\\\\\\\\"]', { content: '"↓"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\✓\\\\\\\\"]', { content: '"✓"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\✗\\\\\\\\"]', { content: '"✗"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\★\\\\\\\\"]', { content: '"★"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\☆\\\\\\\\"]', { content: '"☆"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\♠\\\\\\\\"]', { content: '"♠"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\♣\\\\\\\\"]', { content: '"♣"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\♥\\\\\\\\"]', { content: '"♥"' });
globalStyle('.content-\\\\\\\\[\\\\\\\\\\"\\\\\\\\♦\\\\\\\\"]', { content: '"♦"' });