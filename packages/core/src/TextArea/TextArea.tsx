import type { TextareaHTMLAttributes } from 'react';
import { cn } from '../styles';

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  /** Field label text */
  label?: string;
  /** Helper text displayed below the field */
  description?: string;
  /** Error message to display (shows red styling) */
  errorMessage?: string;
  /** Current textarea value */
  value?: string;
  /** Change handler that receives the new value */
  onChange?: (value: string) => void;
}

/**
 * Accessible multi-line text input with label, description, and error state support.
 * 
 * @example
 * <TextArea 
 *   label="Message" 
 *   placeholder="Enter your message"
 *   rows={4}
 *   onChange={(value) => setMessage(value)}
 * />
 * 
 * @example
 * <TextArea 
 *   label="Comments"
 *   description="Please provide detailed feedback"
 *   errorMessage="Comments are required"
 *   required
 * />
 */
export const TextArea = ({
  label,
  description,
  errorMessage,
  value,
  onChange,
  disabled,
  required,
  id,
  rows = 4,
  ...props
}: TextAreaProps) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const descriptionId = description ? `${textareaId}-description` : undefined;
  const errorId = errorMessage ? `${textareaId}-error` : undefined;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={textareaId}
          className={cn(
            'text-sm font-medium text-gray-700',
            disabled && 'text-gray-400'
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        id={textareaId}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        required={required}
        rows={rows}
        aria-describedby={cn(
          descriptionId && descriptionId,
          errorId && errorId
        ) || undefined}
        aria-invalid={errorMessage ? 'true' : 'false'}
        className={cn(
          'px-3 py-2 border rounded-md resize-vertical',
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