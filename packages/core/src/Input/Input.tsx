import React, { useState } from 'react';
import type { JSX } from 'react';
import { cn } from '../styles';
import { Typography } from '../Typography';
import type { InputProps, TextareaProps } from '../types/components';
import styles from './Input.module.css';

export type { InputProps, TextareaProps };

const TextInput = (props: InputProps) => {
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
    disabled
  } = props;
  
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleClear = () => {
    const event = {
      target: { value: '' },
      currentTarget: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>;

    if (value === undefined) {
      setInternalValue('');
    }
    onChange?.(event);
  };

  const showClearButton = allowClear && currentValue;
  const characterCount = String(currentValue).length;

  const renderSuffixContent = () => {
    const elements: JSX.Element[] = [];
    if (showCount && maxLength) {
      elements.push(
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
      elements.push(
        React.createElement(
          'button',
          {
            key: 'clear',
            type: 'button',
            onClick: handleClear,
            className: 'w-4 h-4 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center text-white text-xs leading-none flex-shrink-0',
            'aria-label': 'Clear input',
          },
          '×',
        ),
      );
    }
    if (suffix) {
      elements.push(
        <span key="suffix" className="flex-shrink-0">
          {suffix}
        </span>,
      );
    }
    return elements;
  };

  const hasPrefix = !!prefix;
  const hasSuffix = showCount || showClearButton || suffix;
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
              styles.addon,
              styles.addonBefore,
              status === 'error' && 'text-ganon-700 dark:text-ganon-300',
              status === 'warning' && 'text-triforce-700 dark:text-triforce-300',
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
            hasAddonBefore && hasAddonAfter && styles.roundedBoth,
            hasAddonBefore && !hasAddonAfter && styles.roundedLeft,
            !hasAddonBefore && hasAddonAfter && styles.roundedRight,
            hasAddonBefore && 'border-l-0',
            hasAddonAfter && 'border-r-0',
          )}
        >
          <div
            className={cn(
              styles.prefix,
              !hasPrefix && 'opacity-0 pointer-events-none w-0',
            )}
          >
            {prefix || <span />}
          </div>

          {React.createElement('input', {
            type,
            className: cn(
              'w-full bg-transparent border-0 outline-none py-2 focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap overflow-hidden text-ellipsis',
              hasPrefix ? 'pl-12' : 'pl-4',
              hasSuffix ? styles.withSuffix : 'pr-4',
              styles[size],
            ),
            style: { color: 'inherit' },
            value: currentValue,
            onChange: handleChange,
            maxLength,
            disabled,
            'data-testid': testId,
          })}

          {hasSuffix && (
            <div className="absolute right-3 flex items-center gap-2 text-gray-500 z-10 top-1/2 -translate-y-1/2 pointer-events-auto">
              {renderSuffixContent()}
            </div>
          )}
        </div>
        {hasAddonAfter && (
          <div
            className={cn(
              'flex items-center px-3 text-sm font-medium whitespace-nowrap rounded-r-lg',
              'bg-gray-100 text-gray-700',
              'dark:bg-gray-700 dark:text-gray-300',
              styles.addon,
              styles.addonAfter,
              status === 'error' && 'text-ganon-700 dark:text-ganon-300',
              status === 'warning' && 'text-triforce-700 dark:text-triforce-300',
            )}
          >
            {addonAfter}
          </div>
        )}
      </div>
    </div>
  );
};

const Textarea = (props: TextareaProps) => {
  const {
    label,
    variant = 'default',
    size = 'medium',
    status,
    suffix,
    allowClear,
    showCount,
    maxLength,
    testId,
    className,
    value,
    defaultValue,
    onChange,
    rows = 4,
    resize = 'vertical'  } = props;
  
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (value === undefined) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleClear = () => {
    const event = {
      target: { value: '' },
      currentTarget: { value: '' },
    } as React.ChangeEvent<HTMLTextAreaElement>;

    if (value === undefined) {
      setInternalValue('');
    }
    onChange?.(event);
  };

  const showClearButton = allowClear && currentValue;
  const characterCount = String(currentValue).length;

  return (
    <div className={cn('space-y-1', className)}>
      {label && <Typography variant="label">{label}</Typography>}
      <div
        className={cn(
          'relative font-medium text-base border-0 outline-none transition-all duration-100 ease-linear overflow-hidden',
          styles[variant],
          status === 'error' && styles.error,
          status === 'warning' && styles.warning,
          styles.textarea,
        )}
      >
        {React.createElement('textarea', {
          className: cn(
            'w-full bg-transparent border-0 outline-none py-2 px-4 focus-visible:outline-2 focus-visible:outline-offset-2 overflow-x-hidden',
            showClearButton || suffix ? 'pr-12' : 'pr-4',
            styles[size],
            resize && styles[resize],
          ),
          style: {
            color: 'inherit',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap',
            overflowWrap: 'break-word',
            resize: resize === 'none' ? 'none' : resize === 'horizontal' ? 'horizontal' : resize === 'both' ? 'both' : 'vertical',
          },
          value: currentValue,
          onChange: handleChange,
          maxLength,
          rows,
          'data-testid': testId,
        })}

        {(showClearButton || suffix) && (
          <div className="absolute right-3 top-3 flex items-center gap-2 text-gray-500 z-10">
            {showClearButton && React.createElement('button', {
              type: 'button',
              onClick: handleClear,
              className: 'w-4 h-4 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center text-white text-xs leading-none flex-shrink-0',
              'aria-label': 'Clear input',
            }, '×')}
            {suffix && <span className="flex-shrink-0">{suffix}</span>}
          </div>
        )}
      </div>
      {showCount && maxLength && (
        <div className="text-right mt-1">
          <span
            className={cn(
              'text-xs whitespace-nowrap',
              characterCount > maxLength ? 'text-ganon-600' : 'text-gray-500',
            )}
          >
            {characterCount}/{maxLength}
          </span>
        </div>
      )}
    </div>
  );
};

export const Input = (props: InputProps | TextareaProps) => {
  if (props.type === 'textarea') {
    return <Textarea {...(props as TextareaProps)} />;
  }
  return <TextInput {...(props as InputProps)} />;
};