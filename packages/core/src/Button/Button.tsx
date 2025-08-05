import { cn } from '@zelda/theme';
import type { ButtonHTMLAttributes } from 'react';
import type { ButtonProps as BaseButtonProps } from '../types/components';
import styles from './Button.module.css';

export interface ButtonProps
  extends Omit<BaseButtonProps, 'children'>,
    Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      'size' | 'type' | 'children' | 'className' | 'disabled'
    > {
  /** Button content */
  children?: React.ReactNode;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  className,
  testId,
  type = 'button',
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  const sizeClasses = {
    small: 'px-4 py-2 text-xs min-h-8',
    medium: 'px-6 py-3 text-sm min-h-10',
    large: 'px-8 py-4 text-base min-h-12',
  };

  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center font-bold uppercase tracking-wide border-0 cursor-pointer select-none outline-none transition-all duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2 rounded-lg',
        Icon && 'gap-2',
        sizeClasses[size],
        styles[variant],
        isDisabled && 'opacity-60 cursor-not-allowed pointer-events-none',
        loading && 'cursor-wait',
        className,
      )}
      disabled={isDisabled}
      data-testid={testId}
      {...props}
    >
      {Icon && iconPosition === 'left' && !loading && (
        <Icon
          className="w-4 h-4 flex-shrink-0"
          style={{ width: '1rem', height: '1rem' }}
        />
      )}
      {loading && (
        <span
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0"
          style={{ width: '1rem', height: '1rem' }}
        />
      )}
      {children}
      {Icon && iconPosition === 'right' && !loading && (
        <Icon
          className="w-4 h-4 flex-shrink-0"
          style={{ width: '1rem', height: '1rem' }}
        />
      )}
    </button>
  );
};
