// Import base styles
import './reset.css';
import './fonts.css';
import './variables.css';
import './utilities.css';
import './animations.css';
import './theme.css';

// Export design tokens
export * from './tokens';
export * from './tokens.css';

// Export utilities
export * from '../hooks/useClickOutside';

// Helper function to combine classes
export const cn = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(' ');
};