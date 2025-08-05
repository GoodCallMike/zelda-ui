import type * as React from 'react';
import type { ReactNode } from 'react';
import { cn } from '../styles';
import styles from './Avatar.module.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Avatar content */
  children?: ReactNode;
  /** Avatar variant */
  variant?: 'default' | 'primary' | 'secondary';
  /** Avatar size */
  size?: 'small' | 'medium' | 'large';
  /** Whether Avatar is disabled */
  disabled?: boolean;
  /** Test identifier */
  testId?: string;
}

export const Avatar = ({
  children,
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  testId,
  ...props
}: AvatarProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        styles.avatar,
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
