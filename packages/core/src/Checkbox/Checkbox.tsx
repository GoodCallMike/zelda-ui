import type { InputHTMLAttributes } from 'react';
import { cn } from '../styles';
import { Typography } from '../Typography';

import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Checkbox label */
  label?: string;
  /** Whether checkbox has error state */
  error?: boolean;
  /** Test identifier */
  testId?: string;
}

export const Checkbox = ({
  label,
  error,
  testId,
  className,
  ...props
}: CheckboxProps) => {
  return (
    <label className={cn('inline-flex items-center gap-2 cursor-pointer p-2', className)}>
      <input
        type="checkbox"
        className={cn(
          'border-0 outline-none transition-all duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2',
          styles.checkbox,
          error && styles.error
        )}
        data-testid={testId}
        {...props}
      />
      {label && (
        <Typography variant="label" className="select-none">{label}</Typography>
      )}
    </label>
  );
};