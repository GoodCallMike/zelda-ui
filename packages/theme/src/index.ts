import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Import variables and essential utilities
import './variables.css';
import './fonts.css';
import './utilities/spacing.css';
import './utilities/layout.css';
import './utilities/colors.css';
import './utilities/typography.css';
import './utilities/sizing.css';
import './utilities/borders.css';
import './utilities/shadows.css';
import './utilities/transforms.css';
import './utilities/animations.css';
import './utilities/interactivity.css';
import './utilities/flex-advanced.css';
import './utilities/effects.css';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Type exports
export type * from './types';