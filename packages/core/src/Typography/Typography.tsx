import type * as React from 'react';
import type { ReactNode } from 'react';
import { cn } from '../styles';
import '@zelda/theme';

export interface TypographyProps
  extends Omit<React.ComponentProps<'p'>, 'className' | 'id'> {
  /** Typography content */
  children: ReactNode;
  /** Typography variant */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'body2'
    | 'caption'
    | 'label';
  /** Text color theme */
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'success' | 'danger';
  /** Additional CSS classes */
  className?: string;
  /** Element ID */
  id?: string;
  /** Test identifier */
  testId?: string;
}

export const Typography = ({
  children,
  variant = 'body',
  color = 'default',
  className,
  id,
  testId,
  ...props
}: TypographyProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'h1':
        return 'text-4xl font-bold leading-tight';
      case 'h2':
        return 'text-3xl font-semibold leading-tight';
      case 'h3':
        return 'text-2xl font-semibold leading-snug';
      case 'h4':
        return 'text-xl font-semibold leading-snug';
      case 'h5':
        return 'text-lg font-semibold leading-normal';
      case 'h6':
        return 'text-base font-semibold leading-normal';
      case 'body':
        return 'text-base leading-relaxed';
      case 'body2':
        return 'text-sm leading-relaxed';
      case 'caption':
        return 'text-sm leading-normal';
      case 'label':
        return 'text-base font-medium leading-normal';
      default:
        return 'text-base leading-relaxed';
    }
  };

  const getColorStyle = () => {
    // Don't apply inline color if className contains text color utility
    if (className && /text-\w+(-\d+)?/.test(className)) {
      return {};
    }

    const colorMap = {
      muted: 'var(--gray-500)',
      primary: 'var(--triforce-600)',
      secondary: 'var(--hyrule-600)',
      success: 'var(--rupee-600)',
      danger: 'var(--ganon-600)',
      default: 'var(--gray-900)',
    };
    return { color: colorMap[color] || colorMap.default };
  };

  const Component =
    variant === 'h1' ||
    variant === 'h2' ||
    variant === 'h3' ||
    variant === 'h4' ||
    variant === 'h5' ||
    variant === 'h6'
      ? variant
      : 'p';

  const isHeader = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant);
  const fontClass = isHeader ? 'font-header' : 'font-sans';

  return (
    <Component
      className={cn(fontClass, getVariantStyles(), className)}
      style={{
        ...getColorStyle(),
        ...props.style,
      }}
      id={id}
      data-testid={testId}
      {...props}
    >
      {children}
    </Component>
  );
};
