import type { ReactNode } from 'react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '../styles';
import { Typography } from '../Typography';
import { ChevronDownIcon } from '@zelda/icons';
import styles from './Select.module.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  /** Select label */
  label?: string;
  /** Select variant */
  variant?: 'default' | 'filled' | 'borderless';
  /** Select size */
  size?: 'small' | 'medium' | 'large';
  /** Status state */
  status?: 'error' | 'warning';
  /** Placeholder text */
  placeholder?: string;
  /** Options array */
  options: SelectOption[];
  /** Selected value */
  value?: string;
  /** Default selected value */
  defaultValue?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Whether select is disabled */
  disabled?: boolean;
  /** Whether select is required */
  required?: boolean;
  /** Test identifier */
  testId?: string;
  /** Additional CSS classes */
  className?: string;
}

export const Select = ({
  label,
  variant = 'default',
  size = 'medium',
  status,
  placeholder = 'Select an option...',
  options,
  value,
  defaultValue,
  onChange,
  disabled = false,
  required = false,
  testId,
  className
}: SelectProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  
  const selectRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  
  const currentValue = value !== undefined ? value : internalValue;
  const selectedOption = options.find(option => option.value === currentValue);
  
  const handleSelect = (optionValue: string) => {
    if (value === undefined) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          const option = options[focusedIndex];
          if (!option.disabled) {
            handleSelect(option.value);
          }
        } else {
          setIsOpen(!isOpen);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const nextIndex = focusedIndex < options.length - 1 ? focusedIndex + 1 : 0;
          setFocusedIndex(nextIndex);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const prevIndex = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
          setFocusedIndex(prevIndex);
        }
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll focused option into view
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listRef.current) {
      const focusedElement = listRef.current.children[focusedIndex] as HTMLElement;
      if (focusedElement) {
        focusedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [focusedIndex, isOpen]);

  return (
    <div className={cn('relative', className)} ref={selectRef}>
      {label && (
        <Typography variant="label" className="mb-1">
          {label}
          {required && <span className="text-ganon-600 ml-1">*</span>}
        </Typography>
      )}
      
      <div
        className={cn(
          'relative w-full cursor-pointer font-medium text-base border-0 outline-none transition-all duration-100 ease-linear',
          styles[variant],
          status === 'error' && styles.error,
          status === 'warning' && styles.warning,
          disabled && styles.disabled,
          styles[size]
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-required={required}
        data-testid={testId}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <span className={cn(
            selectedOption ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'
          )}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDownIcon 
            className={cn(
              'w-4 h-4 transition-transform duration-200 text-gray-500',
              isOpen && 'rotate-180'
            )}
          />
        </div>
      </div>

      {isOpen && (
        <div className={cn(
          'absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border-3 border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto',
          styles.dropdown
        )}>
          <ul
            ref={listRef}
            role="listbox"
            className="py-1"
          >
            {options.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={option.value === currentValue}
                className={cn(
                  'px-4 py-2 cursor-pointer transition-colors duration-150',
                  'hover:bg-triforce-100 dark:hover:bg-triforce-900',
                  option.value === currentValue && 'bg-triforce-200 dark:bg-triforce-800 text-triforce-900 dark:text-triforce-100',
                  focusedIndex === index && 'bg-triforce-100 dark:bg-triforce-900',
                  option.disabled && 'opacity-50 cursor-not-allowed'
                )}
                onClick={() => !option.disabled && handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};