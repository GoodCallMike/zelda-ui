import React, {
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  useState,
} from 'react';
import { cn } from '../styles';
import { Typography } from '../Typography';
import type { InputProps, TextareaProps } from '../types/components';
import styles from './Input.module.css';

type TextareaModeProps = TextareaProps;

export type { InputProps, TextareaProps };

export const Input = (props: InputProps | TextareaProps) => {
  const {
    label,
    variant = 'default',
    size = 'medium',
    status,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    allowClear,
    showCount,
    maxLength,
    testId,
    className,
    type = 'text',
    value,
    defaultValue,
    onChange,
    ...restProps
  } = props;

  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const currentValue = value !== undefined ? value : internalValue;
  const isTextarea = type === 'textarea';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (value === undefined) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleClear = () => {
    const event = {
      target: { value: '' },
      currentTarget: { value: '' },
    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

    if (value === undefined) {
      setInternalValue('');
    }
    onChange?.(event);
  };

  const showClearButton = allowClear && currentValue;
  const characterCount = String(currentValue).length;

  // Build suffix content array to maintain stable DOM structure
  const suffixContent = [];
  if (showCount && maxLength) {
    suffixContent.push(
      <span
        key="count"
        className={cn(
          'text-xs whitespace-nowrap',
          characterCount > maxLength ? 'text-ganon-600' : 'text-gray-500',
        )}
      >
        {characterCount}/{maxLength}
      </span>,
    );
  }
  if (showClearButton) {
    suffixContent.push(
      <button
        key="clear"
        type="button"
        onClick={handleClear}
        className="w-4 h-4 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center text-white text-xs leading-none flex-shrink-0"
        aria-label="Clear input"
      >
        ×
      </button>,
    );
  }
  if (suffix) {
    suffixContent.push(
      <span key="suffix" className="flex-shrink-0">
        {suffix}
      </span>,
    );
  }

  const hasPrefix = !!prefix;
  const hasSuffix = suffixContent.length > 0;
  const hasAddonBefore = !!addonBefore;
  const hasAddonAfter = !!addonAfter;

  return (
    <div className={cn('space-y-1', className)}>
      {label && <Typography variant="label">{label}</Typography>}
      <div className="flex w-full items-stretch">
        {hasAddonBefore && (
          <div
            className={cn(
              'flex items-center px-3 text-sm font-medium whitespace-nowrap rounded-l-lg',
              'bg-gray-100 text-gray-700',
              'dark:bg-gray-700 dark:text-gray-300',
              'image-rendering-pixelated image-rendering-moz-crisp-edges image-rendering-crisp-edges',
              styles.addon,
              styles.addonBefore,
              status === 'error' && 'text-ganon-700 dark:text-ganon-300',
              status === 'warning' &&
                'text-triforce-700 dark:text-triforce-300',
            )}
          >
            {addonBefore}
          </div>
        )}
        <div
          className={cn(
            'relative flex-1 font-medium text-base border-0 outline-none transition-all duration-100 ease-linear overflow-hidden',
            styles[variant],
            status === 'error' && styles.error,
            status === 'warning' && styles.warning,
            isTextarea && styles.textarea,
            hasAddonBefore && hasAddonAfter && styles.roundedBoth,
            hasAddonBefore && !hasAddonAfter && styles.roundedLeft,
            !hasAddonBefore && hasAddonAfter && styles.roundedRight,
            hasAddonBefore && 'border-l-0',
            hasAddonAfter && 'border-r-0',
          )}
        >
          {/* Always render prefix container for stable DOM */}
          <div
            className={cn(
              styles.prefix,
              !hasPrefix && 'opacity-0 pointer-events-none w-0',
            )}
          >
            {prefix || <span />}
          </div>

          {isTextarea ? (
            <textarea
              className={cn(
                'w-full bg-transparent border-0 outline-none py-2 focus-visible:outline-2 focus-visible:outline-offset-2 resize-vertical overflow-x-hidden',
                hasPrefix ? 'pl-12' : 'pl-4',
                showClearButton || suffix ? 'pr-12' : 'pr-4',
                styles[size],
                (props as TextareaModeProps).resize &&
                  styles[(props as TextareaModeProps).resize],
              )}
              style={{
                color: 'inherit',
                wordWrap: 'break-word',
                whiteSpace: 'pre-wrap',
                overflowWrap: 'break-word',
              }}
              value={currentValue}
              onChange={handleChange}
              maxLength={maxLength}
              rows={(props as TextareaModeProps).rows || 4}
              data-testid={testId}
              {...(restProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              type={type}
              className={cn(
                'w-full bg-transparent border-0 outline-none py-2 focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap overflow-hidden text-ellipsis',
                hasPrefix ? 'pl-12' : 'pl-4',
                hasSuffix ? styles.withSuffix : 'pr-4',
                styles[size],
              )}
              style={{
                color: 'inherit',
              }}
              value={currentValue}
              onChange={handleChange}
              maxLength={maxLength}
              data-testid={testId}
              {...(restProps as InputHTMLAttributes<HTMLInputElement>)}
            />
          )}

          {/* Suffix container inside input for regular inputs */}
          {!isTextarea && hasSuffix && (
            <div className="absolute right-3 flex items-center gap-2 text-gray-500 z-10 top-1/2 -translate-y-1/2 pointer-events-auto">
              {suffixContent}
            </div>
          )}
          {/* Textarea suffix content (clear button, custom suffix) inside textarea */}
          {isTextarea && (showClearButton || suffix) && (
            <div className="absolute right-3 top-3 flex items-center gap-2 text-gray-500 z-10">
              {showClearButton && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="w-4 h-4 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center text-white text-xs leading-none flex-shrink-0"
                  aria-label="Clear input"
                >
                  ×
                </button>
              )}
              {suffix && <span className="flex-shrink-0">{suffix}</span>}
            </div>
          )}
        </div>
        {hasAddonAfter && (
          <div
            className={cn(
              'flex items-center px-3 text-sm font-medium whitespace-nowrap rounded-r-lg',
              'bg-gray-100 text-gray-700',
              'dark:bg-gray-700 dark:text-gray-300',
              'image-rendering-pixelated image-rendering-moz-crisp-edges image-rendering-crisp-edges',
              styles.addon,
              styles.addonAfter,
              status === 'error' && 'text-ganon-700 dark:text-ganon-300',
              status === 'warning' &&
                'text-triforce-700 dark:text-triforce-300',
            )}
          >
            {addonAfter}
          </div>
        )}
      </div>
      {isTextarea && showCount && maxLength && (
        <div className="text-right mt-1">
          <div className="inline-flex items-center gap-2 text-gray-500 text-xs">
            <span
              className={cn(
                'text-xs whitespace-nowrap',
                characterCount > maxLength ? 'text-ganon-600' : 'text-gray-500',
              )}
            >
              {characterCount}/{maxLength}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
