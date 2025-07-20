import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../styles';
import { XIcon } from '@jetstream/icons';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Tag color */
  color?: 'default' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' | 'gray';
  /** Whether the tag can be closed */
  closable?: boolean;
  /** Close handler */
  onClose?: (e: React.MouseEvent) => void;
  /** Tag icon */
  icon?: ReactNode;
  /** Whether the tag is bordered */
  bordered?: boolean;
  /** Tag content */
  children: ReactNode;
}

/**
 * Tag component for categorizing or markup.
 */
export const Tag = ({
  color = 'default',
  closable = false,
  onClose,
  icon,
  bordered = true,
  children,
  className,
  ...props
}: TagProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-600 text-white border-blue-600';
      case 'green':
        return 'bg-green-600 text-white border-green-600';
      case 'red':
        return 'bg-red-600 text-white border-red-600';
      case 'yellow':
        return 'bg-yellow-600 text-white border-yellow-600';
      case 'purple':
        return 'bg-purple-600 text-white border-purple-600';
      case 'pink':
        return 'bg-pink-600 text-white border-pink-600';
      case 'gray':
        return 'bg-gray-600 text-white border-gray-600';
      default:
        return 'bg-gray-600 text-white border-gray-600';
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose?.(e);
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors',
        bordered && 'border',
        getColorClasses(),
        className
      )}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{children}</span>
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          className="flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 rounded p-0.5 transition-colors"
        >
          <XIcon className="w-3 h-3" />
        </button>
      )}
    </span>
  );
};