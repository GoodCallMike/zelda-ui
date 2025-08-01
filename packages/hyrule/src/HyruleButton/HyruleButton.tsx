import type { ComponentType, ReactNode, SVGProps } from 'react';
import { cn } from '@zelda/core/styles';
import { retro24Bit, retro32Bit, triforcePixel, rupeeGem } from '@zelda/theme/src/hyrule-button.css';

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
    
    switch (variant) {
      case 'triforce':
        return cn(
          'bg-gradient-to-br from-yellow-400 to-amber-500 text-amber-900 font-bold',
          'border-2 border-yellow-300 shadow-lg',
          'hover:from-yellow-300 hover:to-amber-400 hover:shadow-xl',
          'active:from-yellow-500 active:to-amber-600',
          'focus:ring-yellow-400 focus:ring-offset-2'
        );
      case 'rupee':
        return cn(
          'bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold',
          'border-2 border-emerald-400 shadow-lg',
          'hover:from-emerald-400 hover:to-teal-500 hover:shadow-xl',
          'active:from-emerald-600 active:to-teal-700',
          'focus:ring-emerald-400 focus:ring-offset-2'
        );
      case 'master-sword':
        return cn(
          'bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold',
          'border-2 border-blue-400 shadow-lg',
          'hover:from-blue-400 hover:to-indigo-500 hover:shadow-xl',
          'active:from-blue-600 active:to-indigo-700',
          'focus:ring-blue-400 focus:ring-offset-2'
        );
      case 'heart':
        return cn(
          'bg-gradient-to-br from-red-500 to-pink-600 text-white font-bold',
          'border-2 border-red-400 shadow-lg',
          'hover:from-red-400 hover:to-pink-500 hover:shadow-xl',
          'active:from-red-600 active:to-pink-700',
          'focus:ring-red-400 focus:ring-offset-2'
        );
      case 'sheikah':
        return cn(
          'bg-gradient-to-br from-purple-600 to-indigo-700 text-white font-bold',
          'border-2 border-purple-400 shadow-lg',
          'hover:from-purple-500 hover:to-indigo-600 hover:shadow-xl',
          'active:from-purple-700 active:to-indigo-800',
          'focus:ring-purple-400 focus:ring-offset-2'
        );
      default:
        return '';
    }
  };

  return (
    <button
      type="button"
      className={cn(
        !retro && 'inline-flex items-center justify-center px-4 py-2 rounded font-semibold uppercase',
        !retro && 'cursor-pointer transition-all duration-200',
        !retro && 'focus:outline-none focus:ring-2 focus:ring-offset-2',
        !retro && 'active:scale-95 active:transition-transform active:duration-75',
        retro && 'inline-flex items-center justify-center cursor-pointer',
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