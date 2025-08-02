import type { ReactNode } from 'react';
import { cn } from '../styles';

export interface TypographyProps {
  /** Typography content */
  children: ReactNode;
  /** Typography variant */
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  /** Text color theme */
  color?: 'default' | 'muted' | 'triforce' | 'hyrule' | 'rupee' | 'ganon';
  /** Test identifier */
  testId?: string;
}

export const Typography = ({
  children,
  variant = 'body',
  color = 'default',
  testId,
  ...props
}: TypographyProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'h1':
        return 'text-3xl font-bold leading-tight';
      case 'h2':
        return 'text-2xl font-semibold leading-tight';
      case 'h3':
        return 'text-xl font-semibold leading-snug';
      case 'body':
        return 'text-base leading-relaxed';
      case 'caption':
        return 'text-sm leading-normal';
      default:
        return 'text-base leading-relaxed';
    }
  };

  const getColorStyles = () => {
    switch (color) {
      case 'muted':
        return 'text-muted';
      case 'triforce':
        return 'text-triforce-600';
      case 'hyrule':
        return 'text-hyrule-600';
      case 'rupee':
        return 'text-rupee-600';
      case 'ganon':
        return 'text-ganon-600';
      default:
        return 'text-foreground';
    }
  };

  const Component = (variant === 'h1' || variant === 'h2' || variant === 'h3') ? variant : 'p';

  return (
    <Component
      className={cn('font-sans', getVariantStyles(), getColorStyles())}
      data-testid={testId}
      {...props}
    >
      {children}
    </Component>
  );
};