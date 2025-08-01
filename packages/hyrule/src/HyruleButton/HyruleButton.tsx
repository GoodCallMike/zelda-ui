import type { ComponentType, ReactNode, SVGProps } from 'react';
import { cn } from '@zelda/core/styles';
import { retro24Bit, retro32Bit, triforcePixel, rupeeGem } from '@zelda/theme';

interface HyruleButtonProps {
  /** Button content */
  children: ReactNode;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'destructive';
  /** Retro style variant */
  retro?: '24bit' | '32bit' | 'triforce-pixel' | 'rupee-gem';
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
  retro,
  onClick,
  disabled,
  icon,
  iconPosition = 'left',
  testId,
  ...props
}: HyruleButtonProps) => {
  const getRetroStyles = () => {
    switch (retro) {
      case '24bit':
        return retro24Bit;
      case '32bit':
        return retro32Bit;
      case 'triforce-pixel':
        return triforcePixel;
      case 'rupee-gem':
        return rupeeGem;
      default:
        return null;
    }
  };

  const getVariantStyles = () => {
    if (retro) return ''; // Skip variant styles if retro is used
    
    // Base rectangular special styling for all variants
    const baseStyles = cn(
      'font-bold text-white shadow-lg border-2',
      'hover:shadow-xl active:scale-95',
      'focus:ring-2 focus:ring-offset-2'
    );
    
    switch (variant) {
      case 'primary':
        return cn(
          baseStyles,
          'bg-yellow-500 text-yellow-900 border-yellow-400',
          'hover:bg-yellow-400 active:bg-yellow-600 focus:ring-yellow-400'
        );
      case 'secondary':
        return cn(
          baseStyles,
          'bg-green-600 border-green-500',
          'hover:bg-green-500 active:bg-green-700 focus:ring-green-400'
        );
      case 'tertiary':
        return cn(
          baseStyles,
          'bg-blue-600 border-blue-500',
          'hover:bg-blue-500 active:bg-blue-700 focus:ring-blue-400'
        );
      case 'link':
        return cn(
          'font-bold text-blue-600 hover:text-blue-700 underline',
          'bg-transparent border-none shadow-none',
          'hover:bg-blue-50 active:text-blue-800',
          'focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        );
      case 'destructive':
        return cn(
          baseStyles,
          'bg-red-600 border-red-500',
          'hover:bg-red-500 active:bg-red-700 focus:ring-red-400'
        );
      default:
        return baseStyles;
    }
  };

  return (
    <button
      type="button"
      className={cn(
        // Base rectangular special styling
        'inline-flex items-center justify-center px-6 py-3',
        'cursor-pointer transition-all duration-200',
        'focus:outline-none uppercase tracking-wide',
        'transform hover:scale-105 active:scale-95',
        // Retro overrides
        retro && 'px-4 py-2',
        icon && 'gap-2',
        getRetroStyles(),
        getVariantStyles(),
        disabled && 'opacity-50 cursor-not-allowed hover:scale-100'
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