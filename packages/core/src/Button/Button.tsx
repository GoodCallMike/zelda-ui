import type { ButtonHTMLAttributes, ReactNode, ComponentType, SVGProps } from 'react';
import { cn } from '../styles';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /** Button content */
  children: ReactNode;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Click handler function */
  onClick?: () => void;
  /** Icon component to display before text */
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  /** Icon position relative to text */
  iconPosition?: 'left' | 'right';
}

/**
 * Interactive button component with Jetstream hover effects and accessibility features.
 * 
 * @example
 * <Button variant="primary" onClick={() => console.log('clicked')}>
 *   Primary Action
 * </Button>
 * 
 * @example
 * <Button variant="secondary" icon={SaveIcon} iconPosition="left">
 *   Save Document
 * </Button>
 * 
 * @example
 * <Button variant="primary" icon={ArrowRightIcon} iconPosition="right">
 *   Continue
 * </Button>
 */
export const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled,
  icon: Icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        // Base styles
        'inline-flex items-center justify-center box-border',
        'px-4 py-2 rounded font-semibold uppercase',
        'cursor-pointer transition-colors',
        variant === 'outline' ? 'border' : 'border-none',
        'jetstream-effect',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        
        // Icon spacing
        Icon && 'gap-2',

        // Variant styles
        variant === 'primary' &&
          'bg-yellow-500 text-blue-900 hover:bg-yellow-400 focus:ring-yellow-500 dark:bg-yellow-600 dark:text-white dark:hover:bg-yellow-500',
        variant === 'secondary' &&
          'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
        variant === 'outline' &&
          '!border !border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:!border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',

        // State styles
        disabled && 'opacity-50 cursor-not-allowed',
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
};
