import { TextField } from '@jetstream/core';
import { format, isValid, parse } from 'date-fns';
import { useState } from 'react';

interface DatePickerProps {
  /** Current date value */
  value?: Date;
  /** Change handler that receives the selected date */
  onChange?: (date: Date | null) => void;
  /** Field label */
  label?: string;
  /** Helper text */
  description?: string;
  /** Error message */
  errorMessage?: string;
  /** Date format for display */
  dateFormat?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Simple date picker component with text input and date validation.
 *
 * @example
 * <DatePicker
 *   label="Birth Date"
 *   value={birthDate}
 *   onChange={setBirthDate}
 * />
 */
export const DatePicker = ({
  value,
  onChange,
  label,
  description,
  errorMessage,
  dateFormat = 'MM/dd/yyyy',
  placeholder = 'MM/DD/YYYY',
  disabled,
}: DatePickerProps) => {
  const [inputValue, setInputValue] = useState(
    value && isValid(value) ? format(value, dateFormat) : '',
  );

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);

    if (!newValue.trim()) {
      onChange?.(null);
      return;
    }

    const parsedDate = parse(newValue, dateFormat, new Date());
    if (isValid(parsedDate)) {
      onChange?.(parsedDate);
    }
  };

  return (
    <TextField
      type="text"
      label={label}
      description={description}
      errorMessage={errorMessage}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};
