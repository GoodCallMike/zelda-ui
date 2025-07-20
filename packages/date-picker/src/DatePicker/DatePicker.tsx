import React, { useState, useEffect } from 'react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react';
import { cn, useClickOutside } from '@jetstream/core';
import { CalendarIcon } from '@jetstream/icons';
import { format, isValid, parse } from 'date-fns';
import { Calendar } from './Calendar';

interface DatePickerProps {
  /** Current date value */
  value?: Date | null;
  /** Change handler that receives the selected date */
  onChange?: (date: Date | null) => void;
  /** Date format for display */
  format?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Size of the input */
  size?: 'small' | 'middle' | 'large';
  /** Input status */
  status?: 'error' | 'warning';
  /** Whether to show clear button */
  allowClear?: boolean;
  /** Custom className */
  className?: string;
  /** Input style */
  style?: React.CSSProperties;
}

/**
 * Date picker component with calendar popup, similar to Ant Design's DatePicker.
 */
export const DatePicker = ({
  value,
  onChange,
  format: dateFormat = 'MM/dd/yyyy',
  placeholder = 'Select date',
  disabled = false,
  size = 'middle',
  status,
  allowClear = true,
  className,
  style,
}: DatePickerProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (value && isValid(value)) {
      setInputValue(format(value, dateFormat));
    } else {
      setInputValue('');
    }
  }, [value, dateFormat]);

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const clickOutsideRef = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  }, isOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
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

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInputValue('');
    onChange?.(null);
  };

  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(true);
    }
  };

  const handleCalendarSelect = (date: Date) => {
    onChange?.(date);
    setInputValue(format(date, dateFormat));
    setIsOpen(false);
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-2 py-1 text-sm';
      case 'large':
        return 'px-3 py-3 text-base';
      default:
        return 'px-3 py-2 text-sm';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 'w-3 h-3';
      case 'large':
        return 'w-5 h-5';
      default:
        return 'w-4 h-4';
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case 'small':
        return 'p-0.5';
      case 'large':
        return 'p-1.5';
      default:
        return 'p-1';
    }
  };

  const getIconContainerHeight = () => {
    switch (size) {
      case 'small':
        return 'h-6';
      case 'large':
        return 'h-10';
      default:
        return 'h-8';
    }
  };

  const getStatusClasses = () => {
    switch (status) {
      case 'error':
        return 'border-red-500 focus:border-red-500 focus:ring-red-500';
      case 'warning':
        return 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500';
      default:
        return 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500';
    }
  };

  return (
    <div className={cn('relative inline-block', className)} style={style} ref={clickOutsideRef}>
        <input
          ref={refs.setReference}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            'w-48 border rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50',
            getSizeClasses(),
            getStatusClasses(),
            disabled && 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-60',
            allowClear && inputValue ? 'pr-16' : 'pr-10' // Space for icons
          )}
        />
        
        <div className={cn('absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1', getIconContainerHeight())}>
          {allowClear && inputValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className={cn(getButtonSize(), 'hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors')}
            >
              <svg className={cn(getIconSize(), 'text-gray-400')} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
          
          <button
            type="button"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled}
            className={cn(getButtonSize(), 'hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors disabled:cursor-not-allowed')}
          >
            <CalendarIcon className={cn(getIconSize(), 'text-gray-400')} />
          </button>
        </div>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg"
        >
          <Calendar value={value} onChange={handleCalendarSelect} />
        </div>
      )}
    </div>
  );
};