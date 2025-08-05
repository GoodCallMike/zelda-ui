import { cn } from '@zelda/theme';
import type * as React from 'react';
import { useState } from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps extends Omit<React.ComponentProps<'div'>, 'className'> {
  /** Additional CSS classes */
  className?: string;
  /** Image source URL */
  src?: string;
  /** Image alt text */
  alt?: string;
  /** Name for generating initials */
  name?: string;
  /** Avatar size */
  size?: 'small' | 'medium' | 'large';
  /** Test identifier */
  testId?: string;
}

export const Avatar = ({
  src,
  alt,
  name,
  size = 'medium',
  className,
  testId,
  ...props
}: AvatarProps) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        styles.avatar,
        styles[size],
        className,
      )}
      {...(!(src && !imageError) && {
        role: 'img',
        'aria-label': alt || (name ? `Avatar for ${name}` : 'Avatar'),
      })}
      data-testid={testId}
      {...props}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          onError={handleImageError as React.ReactEventHandler<HTMLImageElement>}
          className={styles.image}
        />
      ) : name ? (
        <span aria-hidden="true">{getInitials(name)}</span>
      ) : (
        <span aria-hidden="true">?</span>
      )}
    </div>
  );
};
