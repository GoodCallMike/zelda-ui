import type { InputHTMLAttributes } from 'react';
import { cn } from '../styles';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  /** Field label text */
  label?: string;
  /** Helper text displayed below the field */
  description?: string;
  /** Error message to display (shows red styling) */
  errorMessage?: string;
  /** Current input value */
  value?: string;
  /** Input type variant */
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'url' | 'tel';
  /** Change handler that receives the new value */
  onChange?: (value: string) => void;
}

/**
 * Accessible text input field with label, description, and error state support.
 * 
 * @example
 * <TextField 
 *   label="Email" 
 *   placeholder="Enter your email"
 *   onChange={(value) => setEmail(value)}
 * />
 * 
 * @example
 * <TextField 
 *   label="Password"
 *   type="password"
 *   errorMessage="Password is required"
 *   required
 * />
 */
export const TextField = ({
  label,
  description,
  errorMessage,
  value,
  onChange,
  disabled,
  required,
  type = 'text',
  id,
  ...props
}: TextFieldProps) => {
  const inputId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const errorId = errorMessage ? `${inputId}-error` : undefined;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'text-sm font-medium text-gray-700 dark:text-gray-300',
            disabled && 'text-gray-400 dark:text-gray-500'
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        required={required}
        aria-describedby={cn(
          descriptionId && descriptionId,
          errorId && errorId
        ) || undefined}
        aria-invalid={errorMessage ? 'true' : 'false'}
        className={cn(
          'px-3 py-2 border rounded-md bg-white dark:bg-gray-800',
          'focus:outline-none focus:ring-2 focus:ring-offset-1',
          'transition-colors text-gray-900 dark:text-gray-100',
          
          // States
          !errorMessage && 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500',
          errorMessage && 'border-red-500 focus:ring-red-500 focus:border-red-500',
          disabled && 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
        )}
        {...props}
      />
      
      {description && !errorMessage && (
        <div id={descriptionId} className="text-xs text-gray-500 dark:text-gray-400">
          {description}
        </div>
      )}
      
      {errorMessage && (
        <div id={errorId} className="text-xs text-red-600 dark:text-red-400">
          {errorMessage}
        </div>
      )}
    </div>
  );
};