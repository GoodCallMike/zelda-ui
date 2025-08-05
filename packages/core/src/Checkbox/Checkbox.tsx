import type { ChangeEvent } from 'react';
import { cn } from '../styles';
import { Typography } from '../Typography';
import type { CheckboxProps as BaseCheckboxProps } from '../types/components';

import styles from './Checkbox.module.css';

export interface CheckboxProps extends BaseCheckboxProps {}

export const Checkbox = ({
  label,
  error,
  testId,
  className,
  size = 'medium',
  loading = false,
  onChange,
  ...props
}: CheckboxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked, event);
    }
  };

  return (
    <label
      {...({} as React.LabelHTMLAttributes<HTMLLabelElement>)}
      className={cn(
        'inline-flex items-center gap-2 cursor-pointer p-2',
        loading && 'opacity-60 cursor-not-allowed',
        className,
      )}
    >
      <input
        {...({} as React.InputHTMLAttributes<HTMLInputElement>)}
        type="checkbox"
        className={cn(
          'border-0 outline-none transition-all duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2',
          styles.checkbox,
          styles[size],
          error && styles.error,
          loading && 'pointer-events-none',
        )}
        data-testid={testId}
        onChange={handleChange}
        disabled={loading}
        {...props}
      />
      {label && (
        <Typography variant="label" className="select-none">
          {label}
        </Typography>
      )}
    </label>
  );
};
