import type { ReactNode } from 'react';
import { cn } from '../styles';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card content */
  children: ReactNode;
  /** Card variant */
  variant?: 'default' | 'outlined' | 'elevated';
  /** Additional CSS classes */
  className?: string;
  /** Test identifier */
  testId?: string;
}

export const Card = ({
  children,
  variant = 'default',
  className,
  testId,
  ...props
}: CardProps) => {
  const variantClasses = {
    default:
      'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    outlined:
      'bg-transparent dark:bg-transparent border-2 border-gray-200 dark:border-gray-700',
    elevated:
      'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg',
  };

  return (
    <div
      className={cn('rounded-lg p-6', variantClasses[variant], className)}
      data-testid={testId}
      {...props}
    >
      {children}
    </div>
  );
};
