import React, { useState, useEffect } from 'react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react';
import { cn, useClickOutside } from '@zelda/core';
import { CalendarIcon } from '@zelda/icons';
import { format, isValid, parse } from 'date-fns';
import { Calendar } from '../DatePicker/Calendar';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

interface RangePickerProps {
  /** Current date range value */
  value?: DateRange | null;
  /** Change handler that receives the selected date range */
  onChange?: (range: DateRange | null) => void;
  /** Date format for display */
  format?: string;
  /** Placeholder text for start and end inputs */
  placeholder?: [string, string];
  /** Label for the range picker */
  label?: string;
  /** Description text */
  description?: string;
  /** Required field indicator */
  required?: boolean;
  /** Disabled state */
  disabled?: boolean | [boolean, boolean];
  /** Size of the input */
  size?: 'small' | 'middle' | 'large';
  /** Input status */
  status?: 'error' | 'warning';
  /** Whether to show clear button */
  allowClear?: boolean;
  /** Allow empty start or end dates */
  allowEmpty?: [boolean, boolean];
  /** Custom className */
  className?: string;
  /** Input style */
  style?: React.CSSProperties;
  /** Separator between inputs */
  separator?: React.ReactNode;
  /** Test ID for testing */
  testId?: string;
}

/**
 * Range picker component for selecting date ranges, similar to Ant Design's RangePicker.
 */
export const RangePicker = ({
  value,
  onChange,
  format: dateFormat = 'MM/dd/yyyy',
  placeholder = ['Start date', 'End date'],
  label,
  description,
  required = false,
  disabled = false,
  size = 'middle',
  status,
  allowClear = true,
  allowEmpty = [false, false],
  className,
  style,
  separator = '~',
  testId,
}: RangePickerProps) => {
  const [startInputValue, setStartInputValue] = useState('');
  const [endInputValue, setEndInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeInput, setActiveInput] = useState<'start' | 'end'>('start');

  const isStartDisabled = Array.isArray(disabled) ? disabled[0] : disabled;
  const isEndDisabled = Array.isArray(disabled) ? disabled[1] : disabled;

  useEffect(() => {
    if (value?.start && isValid(value.start)) {
      setStartInputValue(format(value.start, dateFormat));
    } else {
      setStartInputValue('');
    }

    if (value?.end && isValid(value.end)) {
      setEndInputValue(format(value.end, dateFormat));
    } else {
      setEndInputValue('');
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

  const handleStartInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setStartInputValue(newValue);

    if (!newValue.trim()) {
      if (allowEmpty[0]) {
        onChange?.({ start: null, end: value?.end || null });
      }
      return;
    }

    const parsedDate = parse(newValue, dateFormat, new Date());
    if (isValid(parsedDate)) {
      onChange?.({ start: parsedDate, end: value?.end || null });
    }
  };

  const handleEndInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEndInputValue(newValue);

    if (!newValue.trim()) {
      if (allowEmpty[1]) {
        onChange?.({ start: value?.start || null, end: null });
      }
      return;
    }

    const parsedDate = parse(newValue, dateFormat, new Date());
    if (isValid(parsedDate)) {
      onChange?.({ start: value?.start || null, end: parsedDate });
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStartInputValue('');
    setEndInputValue('');
    onChange?.(null);
  };

  const handleInputClick = (inputType: 'start' | 'end') => {
    if ((inputType === 'start' && !isStartDisabled) || (inputType === 'end' && !isEndDisabled)) {
      setActiveInput(inputType);
      setIsOpen(true);
    }
  };

  const handleRangeChange = (range: DateRange) => {
    onChange?.(range);
    
    if (range.start) {
      setStartInputValue(format(range.start, dateFormat));
    }
    if (range.end) {
      setEndInputValue(format(range.end, dateFormat));
      setIsOpen(false); // Close when range is complete
    }
  };



  const hasValue = startInputValue || endInputValue;

  const inputId = `rangepicker-${Math.random().toString(36).substr(2, 9)}`;
  const descriptionId = description ? `${inputId}-description` : undefined;

  return (
    <div className={cn('flex flex-col gap-1', className)} style={style}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'text-sm font-medium text-gray-700 dark:text-gray-300',
            (isStartDisabled && isEndDisabled) && 'text-gray-400 dark:text-gray-500'
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative" ref={clickOutsideRef}>
        <div
          ref={refs.setReference}
          className={cn(
            'flex items-center w-full border rounded-md bg-white dark:bg-gray-800',
            'focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-1',
            'transition-colors text-gray-900 dark:text-gray-100',
            
            // Size variations
            size === 'small' && 'px-3 py-2 text-sm',
            size === 'middle' && 'px-3 py-2 text-sm',
            size === 'large' && 'px-3 py-2 text-base',
            
            // States
            !status && 'border-gray-300 dark:border-gray-600 focus-within:ring-blue-500 focus-within:border-blue-500',
            status === 'error' && 'border-red-500 focus-within:ring-red-500 focus-within:border-red-500',
            status === 'warning' && 'border-yellow-500 focus-within:ring-yellow-500 focus-within:border-yellow-500',
            (isStartDisabled && isEndDisabled) && 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
          )}
          data-testid={testId}
        >
          <input
            type="text"
            value={startInputValue}
            onChange={handleStartInputChange}
            onClick={() => handleInputClick('start')}
            placeholder={placeholder[0]}
            disabled={isStartDisabled}
            className={cn(
              'flex-1 bg-transparent border-none outline-none min-w-0 font-medium',
              'placeholder:text-gray-400 placeholder:font-normal',
              'focus:placeholder:text-gray-300',
              size === 'small' && 'text-sm',
              size === 'middle' && 'text-sm', 
              size === 'large' && 'text-base',
              isStartDisabled && 'cursor-not-allowed',
              activeInput === 'start' && isOpen && 'text-blue-600 dark:text-blue-400'
            )}
            data-testid={testId ? `${testId}-start` : undefined}
            aria-describedby={descriptionId}
          />
          
          <div className={cn(
            'flex items-center',
            size === 'small' && 'px-2',
            size === 'middle' && 'px-3',
            size === 'large' && 'px-4'
          )}>
            <span className={cn(
              'select-none font-medium transition-colors duration-150',
              size === 'small' && 'text-xs',
              size === 'middle' && 'text-sm',
              size === 'large' && 'text-base',
              isOpen ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400'
            )}>
              {separator}
            </span>
          </div>
          
          <input
            type="text"
            value={endInputValue}
            onChange={handleEndInputChange}
            onClick={() => handleInputClick('end')}
            placeholder={placeholder[1]}
            disabled={isEndDisabled}
            className={cn(
              'flex-1 bg-transparent border-none outline-none min-w-0 font-medium',
              'placeholder:text-gray-400 placeholder:font-normal',
              'focus:placeholder:text-gray-300',
              size === 'small' && 'text-sm',
              size === 'middle' && 'text-sm',
              size === 'large' && 'text-base',
              isEndDisabled && 'cursor-not-allowed',
              activeInput === 'end' && isOpen && 'text-blue-600 dark:text-blue-400'
            )}
            data-testid={testId ? `${testId}-end` : undefined}
          />
          
          <div className={cn(
            'flex items-center gap-1',
            size === 'small' && 'ml-1',
            size === 'middle' && 'ml-2',
            size === 'large' && 'ml-3'
          )}>
            {allowClear && hasValue && !isStartDisabled && !isEndDisabled && (
              <button
                type="button"
                onClick={handleClear}
                className={cn(
                  'hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all duration-150 hover:scale-105',
                  size === 'small' && 'p-1',
                  size === 'middle' && 'p-1.5',
                  size === 'large' && 'p-2'
                )}
                data-testid={testId ? `${testId}-clear` : undefined}
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
              onClick={() => handleInputClick(activeInput)}
              disabled={isStartDisabled && isEndDisabled}
              className={cn(
                'rounded-md transition-all duration-150 disabled:cursor-not-allowed',
                'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-105',
                isOpen && 'bg-blue-100 dark:bg-blue-900/30',
                size === 'small' && 'p-1',
                size === 'middle' && 'p-1.5',
                size === 'large' && 'p-2'
              )}
              data-testid={testId ? `${testId}-calendar` : undefined}
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
        </div>

        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 animate-in fade-in-0 zoom-in-95 duration-200 overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-blue-100 dark:border-blue-800">
              <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                Select Date Range
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-300">
                Click to select start date, then click to select end date
              </div>
            </div>
            <Calendar 
              range={value}
              onRangeChange={handleRangeChange}
              rangeMode={true}
            />
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