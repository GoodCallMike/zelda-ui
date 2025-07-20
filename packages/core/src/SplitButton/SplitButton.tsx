import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useState } from 'react';
import { cn } from '../styles';

interface SplitButtonAction {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  'aria-label'?: string;
}

interface SplitButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /** Primary button text */
  children: ReactNode;
  /** Primary button click handler */
  onClick: () => void;
  /** Dropdown menu actions */
  actions: SplitButtonAction[];
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Split button with primary action and dropdown menu for secondary actions.
 * 
 * @example
 * <SplitButton
 *   onClick={() => save()}
 *   actions={[
 *     { label: 'Save as Draft', onClick: () => saveDraft() },
 *     { label: 'Save & Close', onClick: () => saveAndClose() }
 *   ]}
 * >
 *   Save
 * </SplitButton>
 */
export const SplitButton = ({
  children,
  onClick,
  actions,
  variant = 'primary',
  size = 'md',
  disabled,
  className,
  ...props
}: SplitButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const baseClasses = cn(
    'inline-flex items-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1',
    size === 'sm' && 'text-sm',
    size === 'md' && 'text-sm',
    size === 'lg' && 'text-base'
  );

  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
    secondary: 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 focus:ring-blue-500',
    outline: 'bg-transparent hover:bg-gray-50 text-gray-700 border border-gray-300 focus:ring-blue-500'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-6 py-3'
  };

  return (
    <div className="relative inline-flex">
      {/* Primary Button */}
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          'rounded-l-md border-r-0',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {children}
      </button>

      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          baseClasses,
          variantClasses[variant],
          'px-2 rounded-r-md border-l border-white/20',
          size === 'sm' && 'py-1.5',
          size === 'md' && 'py-2',
          size === 'lg' && 'py-3',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-50">
          <div className="py-1">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  action.onClick();
                  setIsOpen(false);
                }}
                disabled={action.disabled}
                className={cn(
                  'w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300',
                  'hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
                  action.disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Click outside handler */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};