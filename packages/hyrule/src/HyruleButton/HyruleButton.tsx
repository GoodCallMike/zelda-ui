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
      'border-2 border-solid relative',
      'shadow-[inset_2px_2px_0px_rgba(255,255,255,0.3),inset_-2px_-2px_0px_rgba(0,0,0,0.3),4px_4px_0px_rgba(0,0,0,0.8)]',
      'hover:shadow-[inset_2px_2px_0px_rgba(255,255,255,0.4),inset_-2px_-2px_0px_rgba(0,0,0,0.2),3px_3px_0px_rgba(0,0,0,0.8)] hover:translate-x-0.5 hover:translate-y-0.5',
      'active:shadow-[inset_-2px_-2px_0px_rgba(255,255,255,0.2),inset_2px_2px_0px_rgba(0,0,0,0.4),2px_2px_0px_rgba(0,0,0,0.8)] active:translate-x-1 active:translate-y-1',
      'focus:outline-none'
    );
    
    switch (variant) {
      case 'primary':
        return cn(
          baseStyles,
          'bg-yellow-500 border-yellow-600 text-yellow-900',
          'hover:bg-yellow-400 active:bg-yellow-600'
        );
      case 'secondary':
        return cn(
          baseStyles,
          'bg-green-500 border-green-600 text-green-900',
          'hover:bg-green-400 active:bg-green-600'
        );
      case 'tertiary':
        return cn(
          baseStyles,
          'bg-blue-500 border-blue-600 text-blue-900',
          'hover:bg-blue-400 active:bg-blue-600'
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
          'bg-red-500 border-red-600 text-red-900',
          'hover:bg-red-400 active:bg-red-600'
        );
      default:
        return baseStyles;
    }
  };

  return (
    <button
      type="button"
      className={cn(
        // Rectangular special styling (triforcePixel inspired)
        'inline-flex items-center justify-center px-6 py-3',
        'cursor-pointer font-bold uppercase',
        'focus:outline-none border-2 border-solid',
        'font-mono text-xs tracking-wider',
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