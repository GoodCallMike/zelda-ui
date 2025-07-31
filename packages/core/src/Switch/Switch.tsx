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
  const handleClick = () => {
    if (!disabled) {
      onChange?.(!checked);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={handleClick}
      disabled={disabled}
      data-testid={testId}
      className={cn(
        'relative inline-flex items-center rounded-full transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        
        // Size variants
        size === 'small' ? 'h-5 w-9 p-0.5' : 'h-6 w-11 p-0.5',
        
        // State colors
        checked 
          ? 'bg-blue-600' 
          : 'bg-gray-300 dark:bg-gray-600',
        
        disabled && 'cursor-not-allowed opacity-50',
        !disabled && 'cursor-pointer'
      )}
      {...props}
    >
      <div
        className={cn(
          'rounded-full bg-white shadow-sm transition-transform duration-200',
          
          // Size variants
          size === 'small' 
            ? 'h-4 w-4' 
            : 'h-5 w-5',
          
          // Position based on checked state
          checked 
            ? 'translate-x-4' 
            : 'translate-x-0'
        )}
      />
    </button>
  );
};