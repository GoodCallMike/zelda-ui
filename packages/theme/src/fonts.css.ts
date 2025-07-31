import { globalStyle } from '@vanilla-extract/css';

// Set as default font family (font will be loaded via HTML head)
globalStyle('html, body', {
  fontFamily: '"Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
});