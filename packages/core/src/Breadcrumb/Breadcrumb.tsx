import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../styles';

interface BreadcrumbItem {
  /** Text to display */
  title: ReactNode;
  /** URL to navigate to (makes item clickable) */
  href?: string;
  /** Click handler (alternative to href) */
  onClick?: () => void;
}

interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator between items */
  separator?: ReactNode;
}

/**
 * Breadcrumb navigation component showing the current page's location.
 * 
 * @example
 * <Breadcrumb items={[
 *   { title: 'Home', href: '/' },
 *   { title: 'Products', href: '/products' },
 *   { title: 'Laptop' }
 * ]} />
 */
export const Breadcrumb = ({
  items,
  separator = '/',
  className,
  ...props
}: BreadcrumbProps) => {
  return (
    <nav
      className={cn('flex items-center text-sm', className)}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="flex items-center">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {item.href ? (
                <a
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  {item.title}
                </a>
              ) : item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors bg-transparent border-none cursor-pointer"
                >
                  {item.title}
                </button>
              ) : (
                <span className={cn(
                  isLast 
                    ? 'text-gray-900 dark:text-gray-100 font-medium' 
                    : 'text-gray-600 dark:text-gray-400'
                )}>
                  {item.title}
                </span>
              )}
              
              {!isLast && (
                <span className="mx-2 text-gray-400 dark:text-gray-500">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};