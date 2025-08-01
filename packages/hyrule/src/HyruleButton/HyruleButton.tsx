import type { ComponentType, ReactNode, SVGProps } from 'react';
import { cn } from '@zelda/core/styles';
import { retro24Bit, retro32Bit, triforcePixel, rupeeGem } from '@zelda/theme';

interface HyruleButtonProps {
  /** Button content */
  children: ReactNode;
  /** Hyrule-themed variant */
  variant?: 'triforce' | 'rupee' | 'master-sword' | 'heart' | 'sheikah';
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
  variant = 'triforce',
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
      case 'triforce':
        return cn(
          baseStyles,
          'bg-gradient-to-br from-yellow-400 to-amber-500 text-amber-900',
          'border-yellow-300 hover:from-yellow-300 hover:to-amber-400',
          'active:from-yellow-500 active:to-amber-600 focus:ring-yellow-400'
        );
      case 'rupee':
        return cn(
          baseStyles,
          'bg-gradient-to-br from-emerald-500 to-teal-600',
          'border-emerald-400 hover:from-emerald-400 hover:to-teal-500',
          'active:from-emerald-600 active:to-teal-700 focus:ring-emerald-400'
        );
      case 'master-sword':
        return cn(
          baseStyles,
          'bg-gradient-to-br from-blue-500 to-indigo-600',
          'border-blue-400 hover:from-blue-400 hover:to-indigo-500',
          'active:from-blue-600 active:to-indigo-700 focus:ring-blue-400'
        );
      case 'heart':
        return cn(
          baseStyles,
          'bg-gradient-to-br from-red-500 to-pink-600',
          'border-red-400 hover:from-red-400 hover:to-pink-500',
          'active:from-red-600 active:to-pink-700 focus:ring-red-400'
        );
      case 'sheikah':
        return cn(
          baseStyles,
          'bg-gradient-to-br from-purple-600 to-indigo-700',
          'border-purple-400 hover:from-purple-500 hover:to-indigo-600',
          'active:from-purple-700 active:to-indigo-800 focus:ring-purple-400'
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