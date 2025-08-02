import type { InputHTMLAttributes } from 'react';
import { cn } from '../styles';
import styles from './Input.module.css';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input variant */
  variant?: 'default' | 'filled' | 'borderless';
  /** Input size */
  size?: 'small' | 'medium' | 'large';
  /** Whether input has error state */
  error?: boolean;
  /** Icon component to display */
  icon?: IconComponent;
  /** Icon position */
  iconPosition?: 'left' | 'right';
  /** Test identifier */
  testId?: string;
}

export const Input = ({
  variant = 'default',
  size = 'medium',
  error,
  icon: Icon,
  iconPosition = 'left',
  testId,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={cn(
      'relative w-full font-medium text-base border-0 outline-none transition-all duration-100 ease-linear',
      styles[variant],
      error && styles.error,
      className
    )}>
      {Icon && iconPosition === 'left' && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none z-10" />
      )}
      <input
        className={cn(
          'w-full bg-transparent border-0 outline-none py-2 focus-visible:outline-2 focus-visible:outline-offset-2',
          Icon && iconPosition === 'left' ? 'pl-10 pr-4' : Icon && iconPosition === 'right' ? 'pr-10 pl-4' : 'px-4',
          styles[size]
        )}
        data-testid={testId}
        {...props}
      />
      {Icon && iconPosition === 'right' && (
        <Icon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none z-10" />
      )}
    </div>
  );
};