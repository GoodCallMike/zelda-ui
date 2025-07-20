import type { HTMLAttributes, ReactNode } from 'react';
import { useState, useRef } from 'react';
import { cn, useClickOutside } from '../styles';
import { ChevronDownIcon, XIcon, CheckIcon } from '@jetstream/icons';
import { Tag } from '../Tag';

interface SelectOption {
  value: string | number;
  label: ReactNode;
  disabled?: boolean;
}

interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Options to display */
  options?: SelectOption[];
  /** Selected value(s) */
  value?: string | number | (string | number)[];
  /** Default value */
  defaultValue?: string | number | (string | number)[];
  /** Placeholder text */
  placeholder?: string;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether to allow clearing */
  allowClear?: boolean;
  /** Whether to allow multiple selection */
  mode?: 'multiple' | 'tags';
  /** Size of the select */
  size?: 'small' | 'middle' | 'large';
  /** Status of the select */
  status?: 'error' | 'warning';
  /** Whether to show search */
  showSearch?: boolean;
  /** Filter option function */
  filterOption?: (input: string, option?: SelectOption) => boolean;
  /** Change handler */
  onChange?: (value: string | number | (string | number)[], option?: SelectOption | SelectOption[]) => void;
  /** Search handler */
  onSearch?: (value: string) => void;
  /** Custom dropdown render */
  dropdownRender?: (menu: ReactNode) => ReactNode;
}

/**
 * Select component for choosing from a list of options.
 */
export const Select = ({
  options = [],
  value,
  defaultValue,
  placeholder = 'Select an option',
  disabled = false,
  allowClear = false,
  mode,
  size = 'middle',
  status,
  showSearch = false,
  filterOption,
  onChange,
  onSearch,
  dropdownRender,
  className,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [internalValue, setInternalValue] = useState(defaultValue);
  const selectRef = useRef<HTMLDivElement>(null);

  const currentValue = value !== undefined ? value : internalValue;
  const isMultiple = mode === 'multiple' || mode === 'tags';

  useClickOutside(selectRef, () => setIsOpen(false), isOpen);

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-2 py-1 text-sm min-h-6';
      case 'large':
        return 'px-3 py-3 text-base min-h-10';
      default:
        return 'px-3 py-2 text-sm min-h-8';
    }
  };

  const getStatusClasses = () => {
    switch (status) {
      case 'error':
        return 'border-red-500 focus-within:border-red-500 focus-within:ring-red-500';
      case 'warning':
        return 'border-yellow-500 focus-within:border-yellow-500 focus-within:ring-yellow-500';
      default:
        return 'border-gray-300 dark:border-gray-600 focus-within:border-blue-500 focus-within:ring-blue-500';
    }
  };

  const filteredOptions = showSearch && searchValue
    ? options.filter(option => {
        if (filterOption) {
          return filterOption(searchValue, option);
        }
        return String(option.label).toLowerCase().includes(searchValue.toLowerCase());
      })
    : options;

  const getSelectedOptions = () => {
    if (!currentValue) return [];
    const values = Array.isArray(currentValue) ? currentValue : [currentValue];
    return options.filter(option => values.includes(option.value));
  };

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;

    let newValue: string | number | (string | number)[];
    let newOption: SelectOption | SelectOption[];

    if (isMultiple) {
      const currentValues = Array.isArray(currentValue) ? currentValue : [];
      if (currentValues.includes(option.value)) {
        newValue = currentValues.filter(v => v !== option.value);
      } else {
        newValue = [...currentValues, option.value];
      }
      newOption = options.filter(opt => newValue.includes(opt.value));
    } else {
      newValue = option.value;
      newOption = option;
      setIsOpen(false);
    }

    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue, newOption);
    setSearchValue('');
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newValue = isMultiple ? [] : undefined;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue as any, isMultiple ? [] : undefined);
  };

  const handleRemoveTag = (optionValue: string | number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isMultiple) return;
    
    const currentValues = Array.isArray(currentValue) ? currentValue : [];
    const newValue = currentValues.filter(v => v !== optionValue);
    const newOption = options.filter(opt => newValue.includes(opt.value));
    
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue, newOption);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    onSearch?.(newValue);
  };

  const selectedOptions = getSelectedOptions();
  const hasValue = selectedOptions.length > 0;

  const renderValue = () => {
    if (!hasValue) {
      return <span className="text-gray-400">{placeholder}</span>;
    }

    if (isMultiple) {
      return (
        <div className="flex flex-wrap gap-1">
          {selectedOptions.map(option => (
            <Tag
              key={option.value}
              color="blue"
              closable
              onClose={(e) => handleRemoveTag(option.value, e)}
            >
              {option.label}
            </Tag>
          ))}
        </div>
      );
    }

    return selectedOptions[0]?.label;
  };

  const dropdownContent = (
    <div className="py-1 max-h-64 overflow-auto">
      {filteredOptions.map(option => {
        const isSelected = isMultiple 
          ? Array.isArray(currentValue) && currentValue.includes(option.value)
          : currentValue === option.value;

        return (
          <div
            key={option.value}
            className={cn(
              'px-3 py-2 cursor-pointer flex items-center justify-between transition-colors',
              option.disabled
                ? 'text-gray-400 cursor-not-allowed'
                : isSelected
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'hover:bg-gray-50 dark:hover:bg-gray-700'
            )}
            onClick={() => handleSelect(option)}
          >
            <span>{option.label}</span>
            {isSelected && <CheckIcon className="w-4 h-4" />}
          </div>
        );
      })}
      {filteredOptions.length === 0 && (
        <div className="px-3 py-2 text-gray-400 text-center">No options</div>
      )}
    </div>
  );

  return (
    <div
      ref={selectRef}
      className={cn('relative inline-block w-64', className)}
      {...props}
    >
      <div
        className={cn(
          'flex items-center justify-between border rounded cursor-pointer transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-opacity-50',
          getSizeClasses(),
          getStatusClasses(),
          disabled && 'bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-60'
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="flex-1 min-w-0 max-h-20 overflow-y-auto">
          {showSearch && isOpen ? (
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              className="w-full bg-transparent outline-none"
              placeholder={hasValue ? '' : placeholder}
              disabled={disabled}
            />
          ) : (
            renderValue()
          )}
        </div>
        
        <div className="flex items-center gap-1 ml-2">
          {allowClear && hasValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              <XIcon className="w-3 h-3 text-gray-400" />
            </button>
          )}
          
          <ChevronDownIcon 
            className={cn(
              'w-4 h-4 text-gray-400 transition-transform',
              isOpen && 'rotate-180'
            )} 
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
          {dropdownRender ? dropdownRender(dropdownContent) : dropdownContent}
        </div>
      )}
    </div>
  );
};