import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../styles';

interface EmptyProps extends HTMLAttributes<HTMLDivElement> {
  /** Custom description text */
  description?: ReactNode;
  /** Custom image or icon */
  image?: ReactNode;
  /** Image size variant */
  imageStyle?: 'default' | 'simple';
  /** Additional content like buttons */
  children?: ReactNode;
}

const DefaultImage = () => (
  <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0 1)" fill="none" fillRule="evenodd">
      <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7" />
      <g fillRule="nonzero" stroke="#d9d9d9">
        <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
        <path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa" />
      </g>
    </g>
  </svg>
);

const SimpleImage = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="emptySimple">
        <stop stopColor="#f5f5f5" offset="0%" />
        <stop stopColor="#f0f0f0" offset="100%" />
      </linearGradient>
    </defs>
    <circle fill="url(#emptySimple)" cx="32" cy="32" r="32" />
    <path d="M32 16c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zm0 4c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" fill="#d9d9d9" />
  </svg>
);

/**
 * Empty state component to display when there is no data or content.
 */
export const Empty = ({
  description = 'No data',
  image,
  imageStyle = 'default',
  children,
  className,
  ...props
}: EmptyProps) => {
  const renderImage = () => {
    if (image) {
      return typeof image === 'string' ? (
        <img src={image} alt="Empty" className="max-w-full max-h-full" />
      ) : (
        image
      );
    }

    return imageStyle === 'simple' ? <SimpleImage /> : <DefaultImage />;
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-8 px-4 text-center',
        className
      )}
      {...props}
    >
      <div className="mb-4 opacity-40">
        {renderImage()}
      </div>
      
      {description && (
        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </div>
      )}
      
      {children && (
        <div className="mt-2">
          {children}
        </div>
      )}
    </div>
  );
};