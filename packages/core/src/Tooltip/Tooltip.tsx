import type * as React from 'react';
import type { ReactNode } from 'react';
import { cn } from '../styles';
import styles from './Tooltip.module.css';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tooltip content */
  children?: ReactNode;
  /** Tooltip variant */
  variant?: 'default' | 'primary' | 'secondary';
  /** Tooltip size */
  size?: 'small' | 'medium' | 'large';
  /** Whether Tooltip is disabled */
  disabled?: boolean;
  /** Test identifier */
  testId?: string;
}

export const Tooltip = ({
  children,
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  testId,
  ...props
}: TooltipProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        styles.tooltip,
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
