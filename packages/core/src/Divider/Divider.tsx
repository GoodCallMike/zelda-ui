import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../styles';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Divider orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Text or content to display in the divider */
  children?: ReactNode;
  /** Position of the text within the divider */
  textAlign?: 'left' | 'center' | 'right';
  /** Whether to use dashed line style */
  dashed?: boolean;
}

/**
 * A divider line to separate content sections.
 * 
 * @example
 * <Divider />
 * 
 * @example
 * <Divider>Section Title</Divider>
 * 
 * @example
 * <Divider orientation="vertical" />
 */
export const Divider = ({
  orientation = 'horizontal',
  children,
  textAlign = 'center',
  dashed = false,
  className,
  ...props
}: DividerProps) => {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          'inline-block w-px mx-2 h-6',
          'border-l border-solid border-gray-300 dark:border-gray-600',
          dashed && 'border-dashed',
          className
        )}
        {...props}
      />
    );
  }

  if (children) {
    return (
      <div
        role="separator"
        aria-label={typeof children === 'string' ? children : undefined}
        className={cn(
          'flex items-center my-4',
          className
        )}
        {...props}
      >
        <div className={cn(
          'border-t border-solid border-gray-300 dark:border-gray-600',
          dashed && 'border-dashed',
          textAlign === 'left' ? 'w-6' : 'flex-1'
        )} />
        
        <span className={cn(
          'px-4 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap'
        )}>
          {children}
        </span>
        
        <div className={cn(
          'border-t border-solid border-gray-300 dark:border-gray-600',
          dashed && 'border-dashed',
          textAlign === 'right' ? 'w-6' : 'flex-1'
        )} />
      </div>
    );
  }

  return (
    <div
      role="separator"
      className={cn(
        'my-4 border-t border-solid border-gray-300 dark:border-gray-600',
        dashed && 'border-dashed',
        className
      )}
      {...props}
    />
  );
};