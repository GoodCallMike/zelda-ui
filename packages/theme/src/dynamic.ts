import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Simple utility to merge classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to apply overrides
export function withOverrides(baseClasses: string, overrideClasses?: string) {
  return cn(baseClasses, overrideClasses);
}
