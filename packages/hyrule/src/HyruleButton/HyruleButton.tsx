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
    
    // Base rectangular special styling (triforcePixel inspired)
    const baseStyles = cn(
      'font-bold font-mono text-xs uppercase tracking-wider',
      'border-2 border-solid relative px-6 py-3',
      'shadow-triforce hover:shadow-triforce-hover active:shadow-triforce-active',
      'hover:translate-x-0.5 hover:translate-y-0.5',
      'active:translate-x-1 active:translate-y-1',
      'focus:outline-none'
    );
    
    switch (variant) {
      case 'primary':
        return cn(
          baseStyles,
          'bg-yellow-500 border-yellow-600 text-yellow-900'
        );
      case 'secondary':
        return cn(
          baseStyles,
          'bg-green-500 border-green-600 text-white'
        );
      case 'tertiary':
        return cn(
          baseStyles,
          'bg-blue-500 border-blue-600 text-white'
        );
      case 'link':
        return cn(
          'font-bold text-blue-600 hover:text-blue-700 underline',
          'bg-transparent border-none shadow-none',
          'hover:bg-blue-50 active:text-blue-800',
          'focus:outline-none'
        );
      case 'destructive':
        return cn(
          baseStyles,
          'bg-red-500 border-red-600 text-white'
        );
      default:
        return baseStyles;
    }
  };

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center',
        icon && 'gap-2',
        getRetroStyles(),
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