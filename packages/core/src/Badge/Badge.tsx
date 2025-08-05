import type * as React from 'react';
import type { ReactNode } from 'react';
import { cn } from '../styles';
import styles from './Badge.module.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Badge content */
  children?: ReactNode;
  /** Badge variant */
  variant?: 'default' | 'primary' | 'secondary';
  /** Badge size */
  size?: 'small' | 'medium' | 'large';
  /** Whether Badge is disabled */
  disabled?: boolean;
  /** Test identifier */
  testId?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  testId,
  ...props
}: BadgeProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        styles.badge,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        className,
      )}
      data-testid={testId}
      {...props}
    >
      {children}
    </div>
  );
};
