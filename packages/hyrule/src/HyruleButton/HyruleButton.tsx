import type { ComponentType, ReactNode, SVGProps } from 'react';
import { cn } from '@zelda/core/styles';
import { primaryPixel, secondaryPixel, tertiaryPixel, destructivePixel } from '@zelda/theme';

interface HyruleButtonProps {
  /** Button content */
  children: ReactNode;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'destructive';

  /** Click handler function */
  onClick?: () => void;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Icon component to display */
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  /** Icon position */
  iconPosition?: 'left' | 'right';
  /** Test identifier */
  testId?: string;
}

export const HyruleButton = ({
  children,
  variant = 'primary',

  onClick,
  disabled,
  icon,
  iconPosition = 'left',
  testId,
  ...props
}: HyruleButtonProps) => {
  const getVariantStyles = () => {
    
    // Use specific colored variants with triforcePixel styling
    switch (variant) {
      case 'primary':
        return primaryPixel;
      case 'secondary':
        return secondaryPixel;
      case 'tertiary':
        return tertiaryPixel;
      case 'link':
        return cn(
          'font-bold text-blue-600 hover:text-blue-700 underline',
          'bg-transparent border-none shadow-none',
          'hover:bg-blue-50 active:text-blue-800',
          'focus:outline-none'
        );
      case 'destructive':
        return destructivePixel;
      default:
        return primaryPixel;
    }
  };

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center',
        icon && 'gap-2',
        getVariantStyles(),
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
      {...props}
    >
      {icon && iconPosition === 'left' && <icon className="w-4 h-4" />}
      {children}
      {icon && iconPosition === 'right' && <icon className="w-4 h-4" />}
    </button>
  );
};