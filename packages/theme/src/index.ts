import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Import variables only
import './variables.css';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Type exports
export type * from './types';