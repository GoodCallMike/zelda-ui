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
    const baseStyles = {
      fontFamily: 'monospace',
      fontSize: '12px',
      fontWeight: 'bold',
      textTransform: 'uppercase' as const,
      letterSpacing: '2px',
      padding: '12px 24px',
      position: 'relative' as const,
      border: '3px solid',
      borderRadius: '0px',
      cursor: 'pointer',
      boxShadow: 'inset 2px 2px 0px rgba(255,255,255,0.3), inset -2px -2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.8)',
    };
    
    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          background: '#ffd700',
          borderColor: '#b8860b',
          color: '#8b4513',
        };
      case 'secondary':
        return {
          ...baseStyles,
          background: '#00ff88',
          borderColor: '#004422',
          color: '#ffffff',
        };
      case 'tertiary':
        return {
          ...baseStyles,
          background: '#4a90e2',
          borderColor: '#ffffff',
          color: '#ffffff',
        };
      case 'link':
        return 'font-bold text-blue-600 hover:text-blue-700 underline bg-transparent border-none shadow-none hover:bg-blue-50 active:text-blue-800 focus:outline-none';
      case 'destructive':
        return {
          ...baseStyles,
          background: '#ff4444',
          borderColor: '#cc0000',
          color: '#ffffff',
        };
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
        typeof getVariantStyles() === 'string' && getVariantStyles(),
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      style={typeof getVariantStyles() === 'object' ? getVariantStyles() : undefined}
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