import type { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import { useState } from 'react';
import { cn } from '../styles';
import { Typography } from '../Typography';
import styles from './Input.module.css';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface BaseInputProps {
  /** Input label */
  label?: string;
  /** Input variant */
  variant?: 'default' | 'filled' | 'borderless';
  /** Input size */
  size?: 'small' | 'medium' | 'large';
  /** Status state */
  status?: 'error' | 'warning';
  /** Prefix content (icon or text) */
  prefix?: ReactNode;
  /** Suffix content (icon or text) */
  suffix?: ReactNode;
  /** Show clear button when input has value */
  allowClear?: boolean;
  /** Show character count */
  showCount?: boolean;
  /** Maximum character count */
  maxLength?: number;
  /** Test identifier */
  testId?: string;
}

interface InputModeProps extends BaseInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** Input type - use 'textarea' for multiline input */
  type?: 'text' | 'password' | 'email' | 'search' | 'url' | 'tel' | 'number';
}

interface TextareaModeProps extends BaseInputProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'prefix'> {
  /** Input type - use 'textarea' for multiline input */
  type: 'textarea';
  /** Number of visible text lines */
  rows?: number;
  /** Whether textarea can be resized */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export type InputProps = InputModeProps | TextareaModeProps;

export const Input = (props: InputProps) => {
  const {
    label,
    variant = 'default',
    size = 'medium',
    status,
    prefix,
    suffix,
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (value === undefined) {
      setInternalValue(e.target.value);
    }
    onChange?.(e as any);
  };

  const handleClear = () => {
    const event = {
      target: { value: '' },
      currentTarget: { value: '' }
    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
    
    if (value === undefined) {
      setInternalValue('');
    }
    onChange?.(event as any);
  };

  const hasPrefix = !!prefix;
  const hasSuffix = !!suffix || allowClear || showCount;
  const showClearButton = allowClear && currentValue;
  const characterCount = String(currentValue).length;

  return (
    <div className={cn('space-y-1', className)}>
      {label && (
        <Typography variant="label">{label}</Typography>
      )}
      <div className={cn(
        'relative w-full font-medium text-base border-0 outline-none transition-all duration-100 ease-linear',
        styles[variant],
        status === 'error' && styles.error,
        status === 'warning' && styles.warning,
        isTextarea && styles.textarea
      )}>
        {hasPrefix && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center text-gray-500 pointer-events-none z-10">
            {prefix}
          </div>
        )}
        
        {isTextarea ? (
          <textarea
            className={cn(
              'w-full bg-transparent border-0 outline-none py-2 focus-visible:outline-2 focus-visible:outline-offset-2 resize-vertical',
              hasPrefix ? 'pl-10' : 'pl-4',
              hasSuffix ? 'pr-16' : 'pr-4',
              styles[size],
              (props as TextareaModeProps).resize && styles[(props as TextareaModeProps).resize]
            )}
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
              'w-full bg-transparent border-0 outline-none py-2 focus-visible:outline-2 focus-visible:outline-offset-2',
              hasPrefix ? 'pl-10' : 'pl-4',
              hasSuffix ? 'pr-16' : 'pr-4',
              styles[size]
            )}
            value={currentValue}
            onChange={handleChange}
            maxLength={maxLength}
            data-testid={testId}
            {...(restProps as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        
        {hasSuffix && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500 z-10">
            {showCount && maxLength && (
              <span className={cn(
                'text-xs',
                characterCount > maxLength ? 'text-ganon-600' : 'text-gray-500'
              )}>
                {characterCount}/{maxLength}
              </span>
            )}
            {showClearButton && (
              <button
                type="button"
                onClick={handleClear}
                className="w-4 h-4 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center text-white text-xs leading-none pointer-events-auto"
                aria-label="Clear input"
              >
                ×
              </button>
            )}
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
};