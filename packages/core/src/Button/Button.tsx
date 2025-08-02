import type { ComponentType, ReactNode, SVGProps } from 'react';
import { cn } from '../styles';
import { primaryPixel, secondaryPixel, tertiaryPixel, destructivePixel, linkPixel } from '@zelda/theme';

interface ButtonProps {
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

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled,
  icon: Icon,
  iconPosition = 'left',
  testId,
  ...props
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return primaryPixel;
      case 'secondary':
        return secondaryPixel;
      case 'tertiary':
        return tertiaryPixel;
      case 'link':
        return linkPixel;
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
        Icon && 'gap-2',
        getVariantStyles(),
        disabled && 'opacity-50 cursor-not-allowed',
      )}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
};
