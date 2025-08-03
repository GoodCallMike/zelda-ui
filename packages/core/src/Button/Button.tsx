import type { ReactNode } from 'react';
import { cn } from '../styles';
import styles from './Button.module.css';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface ButtonProps {
  /** Button content */
  children: ReactNode;
  /** Button variant */
  variant?: 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'destructive';
  /** Click handler function */
  onClick?: () => void;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Icon component to display */
  icon?: IconComponent;
  /** Icon position */
  iconPosition?: 'left' | 'right';
  /** Additional CSS classes */
  className?: string;
  /** Test identifier */
  testId?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled,
  icon: Icon,
  iconPosition = 'left',
  className,
  testId,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center font-bold text-sm uppercase tracking-wide px-5 py-3 border-0 cursor-pointer select-none outline-none transition-all duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2',
        Icon && 'gap-2',
        styles[variant],
        disabled && 'opacity-60 cursor-not-allowed pointer-events-none',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 flex-shrink-0" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 flex-shrink-0" />}
    </button>
  );
};