import { cn } from '@zelda/theme';
import type * as React from 'react';
import type { ReactNode } from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge content */
  children?: ReactNode;
  /** Badge variant */
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  /** Badge size */
  size?: 'small' | 'medium' | 'large';
  /** Test identifier */
  testId?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  size = 'medium',
  className,
  testId,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center',
        styles.badge,
        styles[variant],
        styles[size],
        className,
      )}
      data-testid={testId}
      {...props}
    >
      {children}
    </span>
  );
};
