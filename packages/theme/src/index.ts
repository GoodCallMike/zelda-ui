import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Import all utility styles
import './variables.css';
import './utilities/index.css.ts';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Type exports
export type * from './types';