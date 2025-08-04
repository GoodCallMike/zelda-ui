import { useState, useRef, useEffect } from 'react';
import { useFloating, autoUpdate, offset, flip, shift, size as floatingSize } from '@floating-ui/react';
import { cn } from '../styles';
import { Typography } from '../Typography';
import { ChevronDownIcon } from '@zelda/icons';
import type { SelectProps, Option } from '../types/components';
import styles from './Select.module.css';

export type { SelectProps, Option as SelectOption };

export const Select = <T extends string = string>({
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
}: SelectProps<T>) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  
  const listRef = useRef<HTMLUListElement>(null);
  
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(4),
      flip(),
      shift({ padding: 8 }),
      floatingSize({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  });
  
  const currentValue = value !== undefined ? value : internalValue;
  const selectedOption = options.find(option => option.value === currentValue);
  
  const handleSelect = (optionValue: T) => {
    if (value === undefined) {
      setInternalValue(optionValue as string);
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
      if (refs.reference.current && !(refs.reference.current as Element).contains(event.target as Node) &&
          refs.floating.current && !refs.floating.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [refs.reference, refs.floating]);

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
    <div className={cn('relative', className)} ref={refs.setReference}>
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
        <div 
          ref={refs.setFloating}
          style={floatingStyles}
          className={cn(
            'bg-white dark:bg-gray-800 border-3 border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto z-popover',
            styles.dropdown
          )}
        >
          <ul
            ref={listRef}
            role="listbox"
            className="py-2"
          >
            {options.map((option, index) => (
              <li
                key={option.value as string}
                role="option"
                aria-selected={option.value === currentValue}
                className={cn(
                  'px-4 py-2 cursor-pointer transition-colors duration-150 text-gray-900 dark:text-gray-100',
                  'hover:bg-gray-100 dark:hover:bg-purple-800',
                  option.value === currentValue && 'bg-gray-200 dark:bg-purple-700 text-gray-900 dark:text-gray-100',
                  focusedIndex === index && 'bg-gray-100 dark:bg-purple-800',
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