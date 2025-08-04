import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Import variables and essential utilities
import './variables.css';
import './utilities/spacing.css';
import './utilities/layout.css';
import './utilities/colors.css';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Type exports
export type * from './types';