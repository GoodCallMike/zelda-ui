import React, { createContext, useContext } from 'react';
import { cn } from '../styles';

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

interface RadioGroupContextValue {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  size?: 'small' | 'middle' | 'large';
  buttonStyle?: 'outline' | 'solid';
  error?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue>({});

export const useRadioGroup = () => useContext(RadioGroupContext);

export const RadioGroup = ({
  children,
  name,
  defaultValue,
  value,
  onChange,
  size = 'middle',
  buttonStyle,
  error,
  className,
}: RadioGroupProps) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || '');
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const contextValue: RadioGroupContextValue = {
    name,
    value: currentValue,
    onChange: handleChange,
    size,
    buttonStyle,
    error,
  };

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div className={cn('space-y-2', className)} role="radiogroup">
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};