import type { ReactNode, ComponentPropsWithoutRef, ElementType } from 'react';

// Base component props
export interface BaseComponentProps {
  /** Additional CSS classes */
  className?: string;
  /** Test identifier */
  testId?: string;
}

// Common size variants
export type Size = 'small' | 'medium' | 'large';

// Common status variants
export type Status = 'error' | 'warning' | 'success' | 'info';

// Common variant types
export type Variant = 'primary' | 'secondary' | 'default' | 'ghost' | 'outline';

// Icon component type
export type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// Polymorphic component props
export type PolymorphicProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

// Event handlers
export interface EventHandlers {
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// Form field props
export interface FormFieldProps extends BaseComponentProps {
  /** Field label */
  label?: string;
  /** Field description */
  description?: string;
  /** Error message */
  error?: string;
  /** Whether field is required */
  required?: boolean;
  /** Whether field is disabled */
  disabled?: boolean;
  /** Field size */
  size?: Size;
  /** Field status */
  status?: Status;
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Position types
export type Position = 'top' | 'right' | 'bottom' | 'left';
export type Alignment = 'start' | 'center' | 'end';
export type Placement = `${Position}-${Alignment}` | Position;

// Animation types
export type AnimationDuration = 'fast' | 'normal' | 'slow';
export type AnimationEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

// Responsive breakpoints
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

// Color scheme
export type ColorScheme = 'light' | 'dark' | 'auto';

// Component state
export interface ComponentState {
  isHovered?: boolean;
  isFocused?: boolean;
  isPressed?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

// Accessibility props
export interface AccessibilityProps {
  /** ARIA label */
  'aria-label'?: string;
  /** ARIA described by */
  'aria-describedby'?: string;
  /** ARIA labelled by */
  'aria-labelledby'?: string;
  /** ARIA expanded */
  'aria-expanded'?: boolean;
  /** ARIA hidden */
  'aria-hidden'?: boolean;
  /** Tab index */
  tabIndex?: number;
  /** Role */
  role?: string;
}

// Generic option type for selects, radios, etc.
export interface Option<T = string> {
  value: T;
  label: string;
  disabled?: boolean;
  description?: string;
  icon?: IconComponent;
}

// Generic callback types
export type ChangeHandler<T> = (value: T) => void;
export type SelectHandler<T> = (value: T, option: Option<T>) => void;

// Render prop types
export type RenderProp<T> = (props: T) => ReactNode;
export type ChildrenRenderProp<T> = ReactNode | RenderProp<T>;