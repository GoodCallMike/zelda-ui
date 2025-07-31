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
  /** Label for the input */
  label?: string;
  /** Description text */
  description?: string;
  /** Required field indicator */
  required?: boolean;
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
  /** Test ID for testing */
  testId?: string;
}

/**
 * Date picker component with calendar popup, similar to Ant Design's DatePicker.
 */
export const DatePicker = ({
  value,
  onChange,
  format: dateFormat = 'MM/dd/yyyy',
  placeholder = 'Select date',
  label,
  description,
  required = false,
  disabled = false,
  size = 'middle',
  status,
  allowClear = true,
  className,
  style,
  testId,
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



  const inputId = `datepicker-${Math.random().toString(36).substr(2, 9)}`;
  const descriptionId = description ? `${inputId}-description` : undefined;

  return (
    <div className={cn('flex flex-col gap-1', className)} style={style}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'text-sm font-medium text-gray-700 dark:text-gray-300',
            disabled && 'text-gray-400 dark:text-gray-500'
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative" ref={clickOutsideRef}>
        <input
          id={inputId}
          ref={refs.setReference}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          placeholder={placeholder}
          disabled={disabled}
          data-testid={testId}
          aria-describedby={descriptionId}
          className={cn(
            'w-full border rounded-md bg-white dark:bg-gray-800',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            'transition-colors text-gray-900 dark:text-gray-100',
            
            // Size variations
            size === 'small' && 'px-3 py-2 text-sm pr-10',
            size === 'middle' && 'px-3 py-2 text-sm pr-12',
            size === 'large' && 'px-3 py-2 text-base pr-14',
            
            // States
            !status && 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500',
            status === 'error' && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            status === 'warning' && 'border-yellow-500 focus:ring-yellow-500 focus:border-yellow-500',
            disabled && 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
          )}
        />
        
        <div className={cn(
          'absolute top-1/2 -translate-y-1/2 flex items-center gap-1',
          size === 'small' && 'right-2',
          size === 'middle' && 'right-3', 
          size === 'large' && 'right-4'
        )}>
          {allowClear && inputValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className={cn(
                'hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all duration-150 hover:scale-105',
                size === 'small' && 'p-1',
                size === 'middle' && 'p-1.5',
                size === 'large' && 'p-2'
              )}
            >
              <svg className={cn(
                'text-gray-400 hover:text-gray-600',
                size === 'small' && 'w-3 h-3',
                size === 'middle' && 'w-4 h-4',
                size === 'large' && 'w-5 h-5'
              )} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
          
          <button
            type="button"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled}
            className={cn(
              'rounded-md transition-all duration-150 disabled:cursor-not-allowed',
              'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-105',
              isOpen && 'bg-blue-100 dark:bg-blue-900/30',
              size === 'small' && 'p-1',
              size === 'middle' && 'p-1.5',
              size === 'large' && 'p-2'
            )}
          >
            <CalendarIcon className={cn(
              'transition-colors duration-150',
              size === 'small' && 'w-4 h-4',
              size === 'middle' && 'w-5 h-5',
              size === 'large' && 'w-6 h-6',
              isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-blue-500'
            )} />
          </button>
        </div>

        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 animate-in fade-in-0 zoom-in-95 duration-200"
          >
            <Calendar value={value} onChange={handleCalendarSelect} />
          </div>
        )}
      </div>
      
      {description && (
        <div id={descriptionId} className="text-xs text-gray-500 dark:text-gray-400">
          {description}
        </div>
      )}
    </div>
  );
};