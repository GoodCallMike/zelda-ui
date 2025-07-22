import { CheckIcon, ChevronDownIcon, XIcon } from '@jetstream/icons';
import type {
  ChangeEvent,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  SyntheticEvent,
} from 'react';
import { useState } from 'react';
import { cn, useClickOutside } from '../styles';
import { Tag } from '../Tag';

interface SelectOption {
  value: string | number;
  label: ReactNode;
  disabled?: boolean;
}

interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
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
  onChange?: (
    value: string | number | (string | number)[],
    option?: SelectOption | SelectOption[],
  ) => void;
  /** Search handler */
  onSearch?: (value: string) => void;
  /** Custom dropdown render */
  dropdownRender?: (menu: ReactNode) => ReactNode;
  /** Accessible label */
  'aria-label'?: string;
  /** ID of element that labels this select */
  'aria-labelledby'?: string;
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

  const currentValue = value !== undefined ? value : internalValue;
  const isMultiple = mode === 'multiple' || mode === 'tags';

  const selectRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const isArray = Array.isArray;

  const handleKeyboardActivation =
    (callback: (e: SyntheticEvent) => void) => (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        callback(e);
      }
    };

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
        return 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-opacity-50';
      case 'warning':
        return 'border-yellow-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 focus-within:border-yellow-500 focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-opacity-50';
      default:
        return 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50';
    }
  };

  const filteredOptions =
    showSearch && searchValue
      ? options.filter((option) => {
          if (filterOption) {
            return filterOption(searchValue, option);
          }
          return (
            `${option.label}`
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) !== -1
          );
        })
      : options;

  const getSelectedOptions = () => {
    if (!currentValue) return [];
    const values = isArray(currentValue) ? currentValue : [currentValue];
    return options.filter((option) => values.indexOf(option.value) !== -1);
  };

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;

    let newValue: string | number | (string | number)[];
    let newOption: SelectOption | SelectOption[];

    if (isMultiple) {
      const currentValues = isArray(currentValue) ? currentValue : [];
      if (currentValues.indexOf(option.value) !== -1) {
        newValue = currentValues.filter((v) => v !== option.value);
      } else {
        newValue = [...currentValues, option.value];
      }
      newOption = options.filter(
        (opt) => (newValue as (string | number)[]).indexOf(opt.value) !== -1,
      );
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

  const handleClear = (e: MouseEvent) => {
    e.stopPropagation();
    const newValue = isMultiple ? [] : undefined;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(
      newValue as string | number | (string | number)[] | undefined,
      isMultiple ? [] : undefined,
    );
  };

  const handleRemoveTag = (optionValue: string | number, e: MouseEvent) => {
    e.stopPropagation();
    if (!isMultiple) return;

    const currentValues = isArray(currentValue) ? currentValue : [];
    const newValue = currentValues.filter((v) => v !== optionValue);
    const newOption = options.filter(
      (opt) => newValue.indexOf(opt.value) !== -1,
    );

    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue, newOption);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        <div className="flex flex-wrap gap-1 overflow-hidden">
          {selectedOptions.map((option) => (
            <Tag
              key={option.value}
              color="blue"
              closable
              onClose={(e) => handleRemoveTag(option.value, e)}
              className="flex-shrink-0 max-w-full"
            >
              <span className="truncate">{option.label}</span>
            </Tag>
          ))}
        </div>
      );
    }

    return selectedOptions[0]?.label;
  };

  const dropdownContent = (
    <div className="py-1 max-h-64 overflow-auto">
      {filteredOptions.map((option) => {
        const isSelected = isMultiple
          ? isArray(currentValue) && currentValue.indexOf(option.value) !== -1
          : currentValue === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isSelected}
            disabled={option.disabled}
            className={cn(
              'w-full px-3 py-2 text-left flex items-center justify-between transition-colors',
              option.disabled
                ? 'text-gray-400 cursor-not-allowed'
                : isSelected
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700',
            )}
            onClick={() => handleSelect(option)}
          >
            <span>{option.label}</span>
            {isSelected && <CheckIcon className="w-4 h-4" />}
          </button>
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
      {/** biome-ignore lint/a11y/useSemanticElements: The role="combobox" is correct for a custom Select component. While a native <select> element would be semantically better, custom Select components with advanced features (like search, tags, custom styling) require using role="combobox" for proper screen reader support. This is the standard ARIA pattern for custom select components. */}
      <button
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-label={props['aria-label'] || (isMultiple ? 'Multi-select dropdown' : 'Select dropdown')}
        aria-labelledby={props['aria-labelledby']}
        disabled={disabled}
        className={cn(
          'w-full flex items-center justify-between border rounded cursor-pointer transition-all duration-200 focus:outline-none',
          getSizeClasses(),
          getStatusClasses(),
          disabled &&
            'bg-gray-50 dark:bg-gray-800 cursor-not-allowed opacity-60',
        )}
        onClick={(e) => {
          if (!disabled) {
            if (showSearch && isOpen) {
              // If search is enabled and dropdown is open, don't close on button click
              // unless clicking outside the input area
              const target = e.target as HTMLElement;
              if (!target.closest('input')) {
                setIsOpen(!isOpen);
              }
            } else {
              setIsOpen(!isOpen);
            }
          }
        }}
      >
        <div className="flex-1 min-w-0">
          {showSearch && isOpen ? (
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              className="w-full bg-transparent outline-none"
              placeholder={hasValue ? '' : placeholder}
              aria-label="Search options"
              disabled={disabled}
              autoFocus
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
              onKeyDown={handleKeyboardActivation(handleClear)}
              aria-label="Clear selection"
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
          )}
          <ChevronDownIcon
            className={cn(
              'w-4 h-4 transition-transform',
              isOpen && 'transform rotate-180',
            )}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg">
          {dropdownRender ? dropdownRender(dropdownContent) : dropdownContent}
        </div>
      )}
    </div>
  );
};
