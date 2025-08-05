import type { InputHTMLAttributes } from 'react';
import { cn } from '../styles';
import { Typography } from '../Typography';
import styles from './Radio.module.css';
import { useRadioGroup } from './RadioGroup';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Radio label */
  label?: string;
  /** Radio value */
  value?: string | number;
  /** Radio size */
  size?: 'small' | 'middle' | 'large';
  /** Whether radio has error state */
  error?: boolean;
  /** Test identifier */
  testId?: string;
  /** Custom className */
  className?: string;
}

export interface RadioButtonProps extends RadioProps {
  /** Button style variant */
  buttonStyle?: 'outline' | 'solid';
}

export interface RadioGroupProps {
  /** Radio group children */
  children: React.ReactNode;
  /** Group name */
  name?: string;
  /** Default selected value */
  defaultValue?: string;
  /** Selected value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Group size */
  size?: 'small' | 'middle' | 'large';
  /** Button style for all radios in group */
  buttonStyle?: 'outline' | 'solid';
  /** Whether group has error state */
  error?: boolean;
  /** Custom className */
  className?: string;
}

export const Radio = ({
  label,
  size,
  error,
  testId,
  className,
  ...props
}: RadioProps) => {
  const groupContext = useRadioGroup();
  const finalSize = size || groupContext.size || 'middle';
  const finalError = error || groupContext.error;
  const finalName = props.name || groupContext.name;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e);
    if (groupContext.onChange && props.value !== undefined) {
      groupContext.onChange(String(props.value));
    }
  };
  return (
    <label
      {...({} as React.LabelHTMLAttributes<HTMLLabelElement>)}
      className={cn(
        'inline-flex items-center gap-2 cursor-pointer p-2',
        className,
      )}
    >
      <input
        {...({} as React.InputHTMLAttributes<HTMLInputElement>)}
        type="radio"
        className={cn(
          'border-0 outline-none transition-all duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2',
          styles.radio,
          styles[finalSize],
          finalError && styles.error,
        )}
        name={finalName}
        checked={
          groupContext.value !== undefined
            ? props.value === groupContext.value
            : props.checked
        }
        onChange={handleChange}
        data-testid={testId}
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
