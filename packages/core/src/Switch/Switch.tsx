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
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => !disabled && onChange?.(!checked)}
      disabled={disabled}
      data-testid={testId}
      className={cn(
        'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        
        // Size variants - make them bigger and more visible
        size === 'small' ? 'h-6 w-11' : 'h-8 w-14',
        
        // State colors - stronger contrast
        checked 
          ? 'bg-blue-600' 
          : 'bg-gray-400 dark:bg-gray-600',
        
        disabled && 'cursor-not-allowed opacity-50'
      )}
      {...props}
    >
      <span
        className={cn(
          'pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition duration-200 ease-in-out',
          
          // Size variants - make thumb bigger
          size === 'small' 
            ? 'h-5 w-5' 
            : 'h-7 w-7',
          
          // Position based on checked state
          checked 
            ? (size === 'small' ? 'translate-x-5' : 'translate-x-6')
            : 'translate-x-0'
        )}
      />
    </button>
  );
};