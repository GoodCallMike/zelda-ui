import type { InputHTMLAttributes } from 'react';
import { cn } from '../styles';

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  /** Whether the switch is checked */
  checked?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Size variant */
  size?: 'small' | 'default';
  /** Test identifier */
  testId?: string;
}

export const Switch = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'default',
  testId,
  ...props
}: SwitchProps) => {
  return (
    <label
      className={cn(
        'inline-flex items-center cursor-pointer',
        disabled && 'cursor-not-allowed opacity-50'
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        data-testid={testId}
        className="sr-only"
        {...props}
      />
      <div
        className={cn(
          'relative inline-flex items-center rounded-full transition-colors duration-200',
          'focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2',
          
          // Size variants
          size === 'small' ? 'h-5 w-9' : 'h-6 w-11',
          
          // State colors
          checked 
            ? 'bg-blue-600' 
            : 'bg-gray-200 dark:bg-gray-700',
          
          disabled && 'opacity-50'
        )}
      >
        <span
          className={cn(
            'inline-block rounded-full bg-white shadow transform transition-transform duration-200',
            
            // Size variants
            size === 'small' 
              ? 'h-4 w-4' 
              : 'h-5 w-5',
            
            // Position based on checked state
            checked 
              ? (size === 'small' ? 'translate-x-4' : 'translate-x-5')
              : 'translate-x-0.5'
          )}
        />
      </div>
    </label>
  );
};