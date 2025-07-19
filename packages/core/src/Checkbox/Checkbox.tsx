import type { InputHTMLAttributes } from 'react';
import { cn } from '../styles';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Field label text */
  label?: string;
  /** Helper text displayed below the field */
  description?: string;
  /** Error message to display (shows red styling) */
  errorMessage?: string;
}

/**
 * Accessible checkbox input with label, description, and error state support.
 * 
 * @example
 * <Checkbox 
 *   label="Accept terms" 
 *   checked={accepted}
 *   onChange={(e) => setAccepted(e.target.checked)}
 * />
 */
export const Checkbox = ({
  label,
  description,
  errorMessage,
  disabled,
  required,
  id,
  className,
  ...props
}: CheckboxProps) => {
  const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const errorId = errorMessage ? `${inputId}-error` : undefined;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-start gap-3">
        <input
          id={inputId}
          type="checkbox"
          disabled={disabled}
          required={required}
          aria-describedby={cn(
            descriptionId && descriptionId,
            errorId && errorId
          ) || undefined}
          aria-invalid={errorMessage ? 'true' : 'false'}
          className={cn(
            'w-4 h-4 mt-0.5 border-2 rounded bg-white dark:bg-gray-800',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            'transition-colors cursor-pointer',
            
            // States
            !errorMessage && 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500',
            errorMessage && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            disabled && 'bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 cursor-not-allowed opacity-50',
            className
          )}
          {...props}
        />
        
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer',
              disabled && 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
      </div>
      
      {description && !errorMessage && (
        <div id={descriptionId} className="text-xs text-gray-500 dark:text-gray-400 ml-7">
          {description}
        </div>
      )}
      
      {errorMessage && (
        <div id={errorId} className="text-xs text-red-600 dark:text-red-400 ml-7">
          {errorMessage}
        </div>
      )}
    </div>
  );
};