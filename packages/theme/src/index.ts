import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Import variables and essential utilities
import './variables.css.ts';
import './fonts.css.ts';
import './utilities/spacing.css.ts';
import './utilities/layout.css.ts';
import './utilities/colors.css.ts';
import './utilities/typography.css.ts';
import './utilities/sizing.css.ts';
import './utilities/borders.css.ts';
import './utilities/shadows.css.ts';
import './utilities/transforms.css.ts';
import './utilities/animations.css.ts';
import './utilities/interactivity.css.ts';
import './utilities/flex-advanced.css.ts';
import './utilities/effects.css.ts';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Type exports
export type * from './types';
