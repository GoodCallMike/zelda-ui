import React, { useState } from 'react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react';
import { cn, TextField, useClickOutside } from '@jetstream/core';
import { CalendarIcon } from '@jetstream/icons';
import { format, isValid, parse } from 'date-fns';
import { Calendar } from './Calendar';
import styles from './DatePicker.module.css';

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

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const clickOutsideRef = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  }, isOpen);

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
    <div className="relative" ref={clickOutsideRef}>
      <div className="relative">
        <div className="relative">
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
          <button
            type="button"
            ref={refs.setReference}
            className={cn(
              styles.calendarButton,
              label
                ? styles.calendarButtonWithLabel
                : styles.calendarButtonNoLabel,
            )}
            onClick={() => setIsOpen(!isOpen)}
            disabled={disabled}
          >
            <CalendarIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg"
        >
          <Calendar value={value} onChange={handleCalendarSelect} />
        </div>
      )}
    </div>
  );
};
