import { TextField, cn } from '@jetstream/core';
import { format, isValid, parse } from 'date-fns';
import { useRef, useState } from 'react';
import { useDatePicker } from 'react-aria';
import { useDatePickerState } from 'react-stately';
import { Calendar } from './Calendar';

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
 * Date picker component with text input and calendar popup.
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
  const [isOpen, setIsOpen] = useState(false);
  
  const state = useDatePickerState({
    value: value ? new Date(value) : null,
    onChange: (date) => onChange?.(date ? new Date(date) : null),
    isDisabled: disabled,
  });
  
  const ref = useRef<HTMLDivElement>(null);
  const { groupProps, fieldProps, buttonProps, dialogProps, calendarProps } = useDatePicker(
    {
      'aria-label': label,
      isDisabled: disabled,
    },
    state,
    ref
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

  const handleCalendarSelect = (date: Date) => {
    onChange?.(date);
    setInputValue(format(date, dateFormat));
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <div className="flex">
        <div className="flex-1">
          <TextField
            type="text"
            label={label}
            description={description}
            errorMessage={errorMessage}
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            disabled={disabled}
            {...fieldProps}
          />
        </div>
        <button
          type="button"
          className={cn(
            'ml-2 mt-6 px-3 py-2 border rounded-md',
            'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600',
            'hover:bg-gray-50 dark:hover:bg-gray-700',
            'focus:outline-none focus:ring-2 focus:ring-blue-500',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
          {...buttonProps}
        >
          📅
        </button>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
          <Calendar
            value={value}
            onChange={handleCalendarSelect}
            {...calendarProps}
          />
        </div>
      )}
    </div>
  );
};
