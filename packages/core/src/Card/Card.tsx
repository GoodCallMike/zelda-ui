import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../styles';
import { Skeleton } from '../Skeleton';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card title */
  title?: ReactNode;
  /** Extra content in the top-right corner */
  extra?: ReactNode;
  /** Card cover image */
  cover?: ReactNode;
  /** Action buttons at the bottom */
  actions?: ReactNode[];
  /** Whether the card is hoverable */
  hoverable?: boolean;
  /** Whether the card has border */
  bordered?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Card size */
  size?: 'default' | 'small';
  /** Card content */
  children?: ReactNode;
}

interface CardMetaProps extends HTMLAttributes<HTMLDivElement> {
  /** Avatar or icon */
  avatar?: ReactNode;
  /** Meta title */
  title?: ReactNode;
  /** Meta description */
  description?: ReactNode;
}

/**
 * Card component for displaying content in a structured container.
 */
export const Card = ({
  title,
  extra,
  cover,
  actions,
  hoverable = false,
  bordered = true,
  loading = false,
  size = 'default',
  children,
  className,
  ...props
}: CardProps) => {
  const hasHeader = title || extra;
  const hasActions = actions && actions.length > 0;

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return {
          padding: 'p-3',
          headerPadding: 'px-3 py-2',
          actionsPadding: 'px-3 py-2',
          headerHeight: 'min-h-9',
          fontSize: 'text-sm',
        };
      default:
        return {
          padding: 'p-6',
          headerPadding: 'px-6 py-4',
          actionsPadding: 'px-6 py-4',
          headerHeight: 'min-h-14',
          fontSize: 'text-base',
        };
    }
  };

  const sizeClasses = getSizeClasses();

  if (loading) {
    return (
      <div
        className={cn(
          'bg-white dark:bg-gray-800 rounded-lg overflow-hidden',
          bordered && 'border border-gray-200 dark:border-gray-700',
          hoverable && 'hover:shadow-md transition-shadow duration-200',
          className
        )}
        {...props}
      >
        {cover && (
          <div className="aspect-video">
            <Skeleton.Image active />
          </div>
        )}
        
        {hasHeader && (
          <div className={cn('border-b border-gray-200 dark:border-gray-700', sizeClasses.headerPadding, sizeClasses.headerHeight)}>
            <div className="flex items-center justify-between">
              <Skeleton active title={{ width: '8rem' }} paragraph={false} avatar={false} />
              <Skeleton active title={{ width: '4rem' }} paragraph={false} avatar={false} />
            </div>
          </div>
        )}
        
        <div className={sizeClasses.padding}>
          <Skeleton 
            active 
            title={{ width: '100%' }}
            paragraph={{ rows: 2, width: ['75%', '50%'] }}
            avatar={false}
          />
        </div>
        
        {hasActions && (
          <div className={cn('border-t border-gray-200 dark:border-gray-700', sizeClasses.actionsPadding)}>
            <div className="flex gap-2">
              <Skeleton.Button active size={size === 'small' ? 'small' : 'default'} />
              <Skeleton.Button active size={size === 'small' ? 'small' : 'default'} />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-lg overflow-hidden',
        bordered && 'border border-gray-200 dark:border-gray-700',
        hoverable && 'hover:shadow-md transition-shadow duration-200 cursor-pointer',
        className
      )}
      {...props}
    >
      {cover && (
        <div className="overflow-hidden">
          {cover}
        </div>
      )}
      
      {hasHeader && (
        <div className={cn(
          'border-b border-gray-200 dark:border-gray-700 flex items-center justify-between',
          sizeClasses.headerPadding,
          sizeClasses.headerHeight
        )}>
          {title && (
            <div className={cn('font-semibold text-gray-900 dark:text-gray-100', sizeClasses.fontSize)}>
              {title}
            </div>
          )}
          {extra && (
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              {extra}
            </div>
          )}
        </div>
      )}
      
      {children && (
        <div className={cn(sizeClasses.padding, 'text-gray-700 dark:text-gray-300')}>
          {children}
        </div>
      )}
      
      {hasActions && (
        <div className={cn(
          'border-t border-gray-200 dark:border-gray-700 flex gap-2',
          sizeClasses.actionsPadding
        )}>
          {actions.map((action, index) => (
            <div key={index} className="flex-1">
              {action}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Card.Meta component for displaying avatar, title, and description.
 */
const CardMeta = ({
  avatar,
  title,
  description,
  className,
  ...props
}: CardMetaProps) => {
  return (
    <div className={cn('flex gap-3', className)} {...props}>
      {avatar && (
        <div className="flex-shrink-0">
          {avatar}
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        {title && (
          <div className="font-medium text-gray-900 dark:text-gray-100 truncate">
            {title}
          </div>
        )}
        {description && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

Card.Meta = CardMeta;