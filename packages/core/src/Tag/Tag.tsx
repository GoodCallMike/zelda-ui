import { XIcon } from '@jetstream/icons';
import type { HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { cn } from '../styles';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Tag color */
  color?:
    | 'default'
    | 'blue'
    | 'green'
    | 'red'
    | 'yellow'
    | 'purple'
    | 'pink'
    | 'gray';
  /** Whether the tag can be closed */
  closable?: boolean;
  /** Close handler */
  onClose?: (e: MouseEvent) => void;
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
        return 'bg-blue-600 text-white border-blue-400';
      case 'green':
        return 'bg-green-600 text-white border-green-400';
      case 'red':
        return 'bg-red-600 text-white border-red-400';
      case 'yellow':
        return 'bg-yellow-600 text-white border-yellow-400';
      case 'purple':
        return 'bg-purple-600 text-white border-purple-400';
      case 'pink':
        return 'bg-pink-600 text-white border-pink-400';
      case 'gray':
        return 'bg-gray-600 text-white border-gray-400';
      default:
        return 'bg-gray-600 text-white border-gray-400';
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
        className,
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
