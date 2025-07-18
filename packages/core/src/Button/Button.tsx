import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../styles';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        // Base styles
        'inline-flex items-center justify-center',
        'px-4 py-2 rounded font-semibold uppercase',
        'cursor-pointer transition-colors border-none',
        'jetstream-effect',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',

        // Variant styles
        variant === 'primary' &&
          'bg-yellow-500 text-blue-900 hover:bg-yellow-400 focus:ring-yellow-500',
        variant === 'secondary' &&
          'bg-gray-200 text-blue-900 hover:bg-gray-300 focus:ring-gray-500',

        // State styles
        disabled && 'opacity-50 cursor-not-allowed',
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
