import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../styles';

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether to show the skeleton loading state */
  loading?: boolean;
  /** Show avatar placeholder */
  avatar?: boolean | { size?: 'small' | 'default' | 'large'; shape?: 'circle' | 'square' };
  /** Number of paragraph lines */
  paragraph?: boolean | { rows?: number; width?: string | string[] };
  /** Show title placeholder */
  title?: boolean | { width?: string };
  /** Whether skeleton is active (animated) */
  active?: boolean;
  /** Content to show when not loading */
  children?: ReactNode;
}

/**
 * Skeleton component for loading placeholders.
 */
export const Skeleton = ({
  loading = true,
  avatar = false,
  paragraph = true,
  title = true,
  active = false,
  children,
  className,
  ...props
}: SkeletonProps) => {
  if (!loading && children) {
    return <>{children}</>;
  }

  const avatarConfig = typeof avatar === 'object' ? avatar : {};
  const paragraphConfig = typeof paragraph === 'object' ? paragraph : {};
  const titleConfig = typeof title === 'object' ? title : {};

  const getAvatarSize = () => {
    const size = avatarConfig.size || 'default';
    switch (size) {
      case 'small':
        return 'w-8 h-8';
      case 'large':
        return 'w-16 h-16';
      default:
        return 'w-10 h-10';
    }
  };

  const getAvatarShape = () => {
    return avatarConfig.shape === 'square' ? 'rounded-md' : 'rounded-full';
  };

  const getParagraphRows = () => {
    return paragraphConfig.rows || 3;
  };

  const getParagraphWidth = (index: number) => {
    const width = paragraphConfig.width;
    if (Array.isArray(width)) {
      return width[index] || '100%';
    }
    if (typeof width === 'string') {
      return width;
    }
    // Default widths for natural look
    const rows = getParagraphRows();
    const widths = ['100%', '95%', '85%', '75%', '60%'];
    return widths[index] || (index === rows - 1 ? '60%' : '90%');
  };

  const getTitleWidth = () => {
    return titleConfig.width || '38%';
  };

  const baseClasses = cn(
    'bg-gray-200 dark:bg-gray-700',
    active && 'animate-pulse'
  );

  return (
    <div className={cn('flex gap-4', className)} {...props}>
      {avatar && (
        <div className={cn(baseClasses, getAvatarSize(), getAvatarShape())} />
      )}
      
      <div className="flex-1 space-y-3">
        {title && (
          <div 
            className={cn(baseClasses, 'h-4 rounded')}
            style={{ width: getTitleWidth() }}
          />
        )}
        
        {paragraph && (
          <div className="space-y-3">
            {Array.from({ length: getParagraphRows() }).map((_, index) => (
              <div
                key={index}
                className={cn(baseClasses, 'h-4 rounded')}
                style={{ width: getParagraphWidth(index) }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface SkeletonButtonProps extends HTMLAttributes<HTMLDivElement> {
  /** Button size */
  size?: 'small' | 'default' | 'large';
  /** Button shape */
  shape?: 'default' | 'circle' | 'round';
  /** Whether skeleton is active (animated) */
  active?: boolean;
}

const SkeletonButton = ({
  size = 'default',
  shape = 'default',
  active = false,
  className,
  ...props
}: SkeletonButtonProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'h-6 w-16';
      case 'large':
        return 'h-10 w-24';
      default:
        return 'h-8 w-20';
    }
  };

  const getShapeClasses = () => {
    switch (shape) {
      case 'circle':
        return 'rounded-full aspect-square w-8 h-8';
      case 'round':
        return 'rounded-full';
      default:
        return 'rounded';
    }
  };

  return (
    <div
      className={cn(
        'bg-gray-200 dark:bg-gray-700',
        getSizeClasses(),
        getShapeClasses(),
        active && 'animate-pulse',
        className
      )}
      {...props}
    />
  );
};

interface SkeletonInputProps extends HTMLAttributes<HTMLDivElement> {
  /** Input size */
  size?: 'small' | 'default' | 'large';
  /** Whether skeleton is active (animated) */
  active?: boolean;
}

const SkeletonInput = ({
  size = 'default',
  active = false,
  className,
  ...props
}: SkeletonInputProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'h-6';
      case 'large':
        return 'h-10';
      default:
        return 'h-8';
    }
  };

  return (
    <div
      className={cn(
        'bg-gray-200 dark:bg-gray-700 rounded w-full',
        getSizeClasses(),
        active && 'animate-pulse',
        className
      )}
      {...props}
    />
  );
};

interface SkeletonImageProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether skeleton is active (animated) */
  active?: boolean;
}

const SkeletonImage = ({
  active = false,
  className,
  ...props
}: SkeletonImageProps) => {
  return (
    <div
      className={cn(
        'bg-gray-200 dark:bg-gray-700 rounded w-full h-48 flex items-center justify-center',
        active && 'animate-pulse',
        className
      )}
      {...props}
    >
      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

Skeleton.Button = SkeletonButton;
Skeleton.Input = SkeletonInput;
Skeleton.Image = SkeletonImage;