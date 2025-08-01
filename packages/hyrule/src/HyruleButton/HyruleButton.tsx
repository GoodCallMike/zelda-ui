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
    
    // Base rectangular special styling (retro24Bit inspired)
    const baseStyles = cn(
      'font-bold text-white border-2 border-solid',
      'shadow-[3px_3px_0px_#000000]',
      'hover:shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5',
      'active:shadow-[1px_1px_0px_#000000] active:translate-x-1 active:translate-y-1',
      'focus:outline-none'
    );
    
    switch (variant) {
      case 'primary':
        return cn(
          baseStyles,
          'bg-blue-600 border-white text-white',
          'hover:bg-blue-500 active:bg-blue-700'
        );
      case 'secondary':
        return cn(
          baseStyles,
          'bg-green-600 border-white text-white',
          'hover:bg-green-500 active:bg-green-700'
        );
      case 'tertiary':
        return cn(
          baseStyles,
          'bg-purple-600 border-white text-white',
          'hover:bg-purple-500 active:bg-purple-700'
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
          'bg-red-600 border-white text-white',
          'hover:bg-red-500 active:bg-red-700'
        );
      default:
        return baseStyles;
    }
  };

  return (
    <button
      type="button"
      className={cn(
        // Rectangular special styling (retro24Bit inspired)
        'inline-flex items-center justify-center px-4 py-2',
        'cursor-pointer font-bold uppercase tracking-wide',
        'focus:outline-none border-2 border-solid',
        'transform active:translate-x-0.5 active:translate-y-0.5',
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