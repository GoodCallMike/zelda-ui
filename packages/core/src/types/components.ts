import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import type { BaseComponentProps, Size, Status, IconComponent, Option, ChangeHandler, FormFieldProps } from './index';

export type { Option };

// Button types
export interface ButtonProps extends BaseComponentProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /** Button content */
  children: ReactNode;
  /** Button variant */
  variant?: 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'destructive';
  /** Button size */
  size?: Size;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Whether button is loading */
  loading?: boolean;
  /** Icon component to display */
  icon?: IconComponent;
  /** Icon position */
  iconPosition?: 'left' | 'right';
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
}

// Input types
interface BaseInputProps extends FormFieldProps {
  /** Input variant */
  variant?: 'default' | 'filled' | 'borderless';
  /** Prefix content (icon or text) inside input */
  prefix?: ReactNode;
  /** Suffix content (icon or text) inside input */
  suffix?: ReactNode;
  /** Addon before input (outside border) */
  addonBefore?: ReactNode;
  /** Addon after input (outside border) */
  addonAfter?: ReactNode;
  /** Show clear button when input has value */
  allowClear?: boolean;
  /** Show character count */
  showCount?: boolean;
  /** Maximum character count */
  maxLength?: number;
}

export interface InputProps extends BaseInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** Input type */
  type?: 'text' | 'password' | 'email' | 'search' | 'url' | 'tel' | 'number';
}

export interface TextareaProps extends BaseInputProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'prefix'> {
  /** Input type - use 'textarea' for multiline input */
  type: 'textarea';
  /** Number of visible text lines */
  rows?: number;
  /** Whether textarea can be resized */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

// Select types
export interface SelectProps<T = string> extends FormFieldProps {
  /** Select variant */
  variant?: 'default' | 'filled' | 'borderless';
  /** Placeholder text */
  placeholder?: string;
  /** Options array */
  options: Option<T>[];
  /** Selected value */
  value?: T;
  /** Default selected value */
  defaultValue?: T;
  /** Change handler */
  onChange?: ChangeHandler<T>;
  /** Whether multiple selection is allowed */
  multiple?: boolean;
  /** Whether select is searchable */
  searchable?: boolean;
  /** Custom filter function for searchable select */
  filterOption?: (option: Option<T>, searchValue: string) => boolean;
  /** Loading state */
  loading?: boolean;
  /** Custom empty state */
  notFoundContent?: ReactNode;
}

// Checkbox types
export interface CheckboxProps extends BaseComponentProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** Checkbox label */
  children?: ReactNode;
  /** Whether checkbox is checked */
  checked?: boolean;
  /** Default checked state */
  defaultChecked?: boolean;
  /** Indeterminate state */
  indeterminate?: boolean;
  /** Whether checkbox is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Checkbox size */
  size?: Size;
}

// Radio types
export interface RadioProps extends BaseComponentProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Radio label */
  children?: ReactNode;
  /** Radio value */
  value: string;
  /** Whether radio is checked */
  checked?: boolean;
  /** Whether radio is disabled */
  disabled?: boolean;
  /** Radio size */
  size?: Size;
}

export interface RadioGroupProps extends BaseComponentProps {
  /** Radio group name */
  name?: string;
  /** Selected value */
  value?: string;
  /** Default selected value */
  defaultValue?: string;
  /** Change handler */
  onChange?: ChangeHandler<string>;
  /** Whether radio group is disabled */
  disabled?: boolean;
  /** Radio group options */
  options?: Option[];
  /** Radio group children */
  children?: ReactNode;
  /** Radio group direction */
  direction?: 'horizontal' | 'vertical';
  /** Radio size */
  size?: Size;
}

// Modal types
export interface ModalProps extends BaseComponentProps {
  /** Whether modal is open */
  open: boolean;
  /** Close handler */
  onClose: () => void;
  /** Modal title */
  title?: ReactNode;
  /** Modal content */
  children: ReactNode;
  /** Modal footer */
  footer?: ReactNode;
  /** Modal size */
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  /** Whether modal can be closed by clicking backdrop */
  closeOnBackdropClick?: boolean;
  /** Whether modal can be closed by pressing escape */
  closeOnEscape?: boolean;
  /** Whether to show close button */
  showCloseButton?: boolean;
  /** Custom close icon */
  closeIcon?: IconComponent;
}

// Toast types
export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastProps extends BaseComponentProps {
  /** Toast message */
  message: ReactNode;
  /** Toast type */
  type?: 'success' | 'error' | 'warning' | 'info';
  /** Toast duration in milliseconds */
  duration?: number;
  /** Whether toast can be dismissed */
  dismissible?: boolean;
  /** Toast actions */
  actions?: ToastAction[];
  /** Close handler */
  onClose?: () => void;
  /** Custom icon */
  icon?: IconComponent;
}

// Slider types
export interface SliderProps extends BaseComponentProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> {
  /** Slider value */
  value?: number | number[];
  /** Default value */
  defaultValue?: number | number[];
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step size */
  step?: number;
  /** Whether slider is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: number | number[]) => void;
  /** Whether to show marks */
  marks?: boolean | Record<number, string>;
  /** Whether to show tooltip */
  tooltip?: boolean;
  /** Custom tooltip formatter */
  tipFormatter?: (value: number) => ReactNode;
  /** Whether slider is vertical */
  vertical?: boolean;
  /** Whether slider allows range selection */
  range?: boolean;
}

// Typography types
export interface TypographyProps extends BaseComponentProps {
  /** Typography variant */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'label' | 'code';
  /** Text content */
  children: ReactNode;
  /** Text color */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Whether text should truncate */
  truncate?: boolean;
  /** HTML element to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label' | 'code';
}

// Divider types
export interface DividerProps extends BaseComponentProps {
  /** Divider orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Divider variant */
  variant?: 'solid' | 'dashed' | 'dotted';
  /** Divider content */
  children?: ReactNode;
  /** Content position */
  textAlign?: 'left' | 'center' | 'right';
}