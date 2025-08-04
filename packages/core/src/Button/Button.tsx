import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../styles';
import type { ButtonProps as BaseButtonProps } from '../types/components';
import styles from './Button.module.css';

export interface ButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'type'> {}

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
  
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center font-bold text-sm uppercase tracking-wide border-0 cursor-pointer select-none outline-none transition-all duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2',
        Icon && 'gap-2',
        styles[variant],
        styles[size],
        isDisabled && 'opacity-60 cursor-not-allowed pointer-events-none',
        loading && 'cursor-wait',
        className
      )}
      disabled={isDisabled}
      data-testid={testId}
      {...props}
    >
      {Icon && iconPosition === 'left' && !loading && <Icon className="w-4 h-4 flex-shrink-0" />}
      {loading && <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0" />}
      {children}
      {Icon && iconPosition === 'right' && !loading && <Icon className="w-4 h-4 flex-shrink-0" />}
    </button>
  );
};
};