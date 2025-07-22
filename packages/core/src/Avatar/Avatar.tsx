import type { HTMLAttributes, ReactNode } from 'react';
import { useState } from 'react';
import { cn } from '../styles';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** Avatar size */
  size?: number | 'small' | 'default' | 'large';
  /** Avatar shape */
  shape?: 'circle' | 'square';
  /** Image source */
  src?: string;
  /** Image alt text */
  alt?: string;
  /** Icon to display */
  icon?: ReactNode;
  /** Text to display (usually initials) */
  children?: ReactNode;
  /** Accessible label for the avatar */
  'aria-label'?: string;
  /** Test identifier */
  'data-testid'?: string;
}

/**
 * Avatar component for displaying user profile pictures, initials, or icons.
 */
export const Avatar = ({
  size = 'default',
  shape = 'circle',
  src,
  alt,
  icon,
  children,
  className,
  ...props
}: AvatarProps) => {
  const [imageError, setImageError] = useState(false);

  const getSizeClasses = () => {
    if (typeof size === 'number') {
      return { width: size, height: size };
    }
    
    switch (size) {
      case 'small':
        return 'w-6 h-6 text-xs';
      case 'large':
        return 'w-10 h-10 text-base';
      default:
        return 'w-8 h-8 text-sm';
    }
  };

  const getShapeClasses = () => {
    return shape === 'square' ? 'rounded-md' : 'rounded-full';
  };

  const sizeStyle = typeof size === 'number' ? getSizeClasses() : {};
  const sizeClasses = typeof size === 'string' ? getSizeClasses() : '';

  const handleImageError = () => {
    setImageError(true);
  };

  const renderContent = () => {
    // Show image if src is provided and no error
    if (src && !imageError) {
      return (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className="w-full h-full object-cover"
          onError={handleImageError}
          data-testid={props['data-testid'] ? `${props['data-testid']}-image` : undefined}
        />
      );
    }

    // Show icon if provided
    if (icon) {
      return <div className="flex items-center justify-center w-full h-full">{icon}</div>;
    }

    // Show children (text/initials)
    if (children) {
      return <div className="flex items-center justify-center w-full h-full font-medium">{children}</div>;
    }

    // Default user icon
    return (
      <div className="flex items-center justify-center w-full h-full">
        <svg className="w-1/2 h-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </div>
    );
  };

  return (
    <div
      role="img"
      aria-label={props['aria-label'] || alt || (children ? `Avatar with initials ${children}` : 'User avatar')}
      data-testid={props['data-testid']}
      className={cn(
        'inline-flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 overflow-hidden',
        sizeClasses,
        getShapeClasses(),
        className
      )}
      style={sizeStyle}
      {...props}
    >
      {renderContent()}
    </div>
  );
};

interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to show */
  maxCount?: number;
  /** Avatar size for all avatars in group */
  size?: number | 'small' | 'default' | 'large';
  /** Avatar shape for all avatars in group */
  shape?: 'circle' | 'square';
  /** Avatar components */
  children: ReactNode;
  /** Test identifier */
  'data-testid'?: string;
}

const AvatarGroup = ({
  maxCount,
  size = 'default',
  shape = 'circle',
  children,
  className,
  ...props
}: AvatarGroupProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const visibleChildren = maxCount ? childrenArray.slice(0, maxCount) : childrenArray;
  const hiddenCount = maxCount ? Math.max(0, childrenArray.length - maxCount) : 0;

  return (
    <div className={cn('flex -space-x-2', className)} data-testid={props['data-testid']} {...props}>
      {visibleChildren.map((child, index) => (
        <div key={index} className="relative border-2 border-white dark:border-gray-800 rounded-full">
          {child}
        </div>
      ))}
      {hiddenCount > 0 && (
        <Avatar size={size} shape={shape} className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300">
          +{hiddenCount}
        </Avatar>
      )}
    </div>
  );
};

Avatar.Group = AvatarGroup;