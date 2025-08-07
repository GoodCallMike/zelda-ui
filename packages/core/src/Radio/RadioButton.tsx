import type { InputHTMLAttributes } from 'react';
import { cn } from '../styles';
import styles from './RadioButton.module.css';
import { useRadioGroup } from './RadioGroup';

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Radio button label */
  children: React.ReactNode;
  /** Radio value */
  value?: string | number;
  /** Button style variant */
  buttonStyle?: 'outline' | 'solid';
  /** Radio size */
  size?: 'small' | 'middle' | 'large';
  /** Whether radio has error state */
  error?: boolean;
  /** Test identifier */
  testId?: string;
  /** Custom className */
  className?: string;
}

export const RadioButton = ({
  children,
  buttonStyle = 'outline',
  size = 'middle',
  error,
  testId,
  className,
  ...props
}: RadioButtonProps) => {
  const groupContext = useRadioGroup();
  const finalSize = size || groupContext.size || 'middle';
  const finalError = error || groupContext.error;
  const finalButtonStyle = buttonStyle || groupContext.buttonStyle || 'outline';
  const finalName = props.name || groupContext.name;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e);
    if (groupContext.onChange && props.value !== undefined) {
      groupContext.onChange(String(props.value));
    }
  };

  return (
    <label
      className={cn(
        'inline-flex items-center justify-center cursor-pointer transition-all duration-100 ease-linear border font-medium select-none',
        styles.radioButton,
        styles[finalButtonStyle],
        styles[finalSize],
        finalError && styles.error,
        className,
      )}
    >
      <input
        {...props}
        type="radio"
        className="absolute opacity-0 w-0 h-0"
        name={finalName}
        checked={
          groupContext.value !== undefined
            ? props.value === groupContext.value
            : props.checked
        }
        onChange={handleChange}
        data-testid={testId}
      />
      <span>{children}</span>
    </label>
  );
};
