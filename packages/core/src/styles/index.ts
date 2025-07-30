// Import fonts and utilities to ensure they're loaded
import './reset.css';
import './fonts.css';
import './utilities.css';
import './animations.css';
import './theme.css';

export * from '../hooks/useClickOutside';
// Export colors and design tokens for consumers
export * from './colors.css';
export * from './tokens.css';
export * from './variables.css';

// Helper function to combine classes (like clsx)
export const cn = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(' ');
};
