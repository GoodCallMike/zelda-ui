import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../styles';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export const Text = ({ children, className, ...props }: TypographyProps) => (
  <p className={cn('text-gray-900 dark:text-gray-100', className)} {...props}>
    {children}
  </p>
);

export const TextSecondary = ({ children, className, ...props }: TypographyProps) => (
  <p className={cn('text-gray-600 dark:text-gray-400', className)} {...props}>
    {children}
  </p>
);

export const TextMuted = ({ children, className, ...props }: TypographyProps) => (
  <p className={cn('text-gray-500 dark:text-gray-500', className)} {...props}>
    {children}
  </p>
);

export const Heading = ({ children, className, ...props }: TypographyProps) => (
  <h4 className={cn('text-sm font-medium text-gray-900 dark:text-gray-100', className)} {...props}>
    {children}
  </h4>
);

export const Label = ({ children, className, ...props }: TypographyProps) => (
  <span className={cn('text-xs text-gray-500 dark:text-gray-400', className)} {...props}>
    {children}
  </span>
);

export const ScreenReaderOnly = ({ children, className, ...props }: TypographyProps) => (
  <span className={cn('sr-only text-gray-900 dark:text-gray-100', className)} {...props}>
    {children}
  </span>
);