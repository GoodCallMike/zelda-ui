import { TextField, cn } from '@jetstream/core';
import { CalendarIcon } from '@jetstream/icons';
import { format, isValid, parse } from 'date-fns';
import { useRef, useState } from 'react';
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/react';
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
  
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

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
    <div className="relative">
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
              'absolute right-3 top-0 bottom-0',
              'w-6 flex items-center justify-center',
              'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300',
              'focus:outline-none border-none',
              disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            )}
            onClick={() => setIsOpen(!isOpen)}
            disabled={disabled}
            style={{
              background: 'none',
              right: '4px',
              top: label ? '24px' : '0',
              height: '33.5px'
            }}
          >
            <CalendarIcon />
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg"
        >
          <Calendar
            value={value}
            onChange={handleCalendarSelect}
          />
        </div>
      )}
    </div>
  );
};
