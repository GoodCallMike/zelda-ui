// Import fonts and utilities to ensure they're loaded
import './fonts.css';
import './utilities.css';
import './animations.css';
import './theme.css';

// Export colors for consumers who need raw values
export * from './colors.css';
export * from './tokens.css';
export * from '../hooks/useClickOutside';

// Helper function to combine classes (like clsx)
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};