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
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: size === 'small' ? '44px' : '56px',
        height: size === 'small' ? '24px' : '32px',
        backgroundColor: checked ? '#2563eb' : '#9ca3af',
        borderRadius: '9999px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background-color 0.2s',
        padding: '2px',
      }}
      {...props}
    >
      <div
        style={{
          width: size === 'small' ? '20px' : '28px',
          height: size === 'small' ? '20px' : '28px',
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          transform: checked 
            ? `translateX(${size === 'small' ? '20px' : '24px'})` 
            : 'translateX(0)',
          transition: 'transform 0.2s',
        }}
      />
    </button>
  );
};