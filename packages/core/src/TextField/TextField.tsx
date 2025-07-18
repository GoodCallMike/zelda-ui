import type { InputHTMLAttributes } from 'react';
import { cn } from '../styles';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  description?: string;
  errorMessage?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const TextField = ({
  label,
  description,
  errorMessage,
  value,
  onChange,
  disabled,
  required,
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
            'text-sm font-medium text-gray-700',
            disabled && 'text-gray-400'
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        id={inputId}
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
          'px-3 py-2 border rounded-md',
          'focus:outline-none focus:ring-2 focus:ring-offset-1',
          'transition-colors',
          
          // States
          !errorMessage && 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
          errorMessage && 'border-red-500 focus:ring-red-500 focus:border-red-500',
          disabled && 'bg-gray-100 text-gray-400 cursor-not-allowed'
        )}
        {...props}
      />
      
      {description && !errorMessage && (
        <div id={descriptionId} className="text-xs text-gray-500">
          {description}
        </div>
      )}
      
      {errorMessage && (
        <div id={errorId} className="text-xs text-red-600">
          {errorMessage}
        </div>
      )}
    </div>
  );
};