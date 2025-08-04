// Global type declarations for Zelda UI

declare module '@zelda/core' {
  // Re-export all component types
  export * from './types';
  export * from './types/components';
  export * from './types/theme';
  export * from './types/utilities';
  export * from './types/validation';
  
  // Component exports
  export { Button } from './Button/Button';
  export { Checkbox } from './Checkbox/Checkbox';
  export { Divider } from './Divider/Divider';
  export { Input } from './Input/Input';
  export { Modal } from './Modal/Modal';
  export { Select } from './Select/Select';
  export { Slider } from './Slider/Slider';
  export { Radio, RadioButton, RadioGroup } from './Radio';
  export { Toast, ToastContainer, ToastProvider, useToast } from './Toast';
  export { Typography } from './Typography/Typography';
}

declare module '@zelda/icons' {
  import type { IconProps, IconComponent } from './types';
  
  // Re-export icon types
  export type { IconProps, IconComponent };
  
  // All icon components follow the same pattern
  export const AlertCircleIcon: IconComponent;
  export const ArrowDownIcon: IconComponent;
  export const CheckIcon: IconComponent;
  export const ChevronDownIcon: IconComponent;
  export const XIcon: IconComponent;
  // ... and many more (all follow IconComponent type)
}

declare module '@zelda/theme' {
  import type { ThemeTokens, ThemeConfig } from './types';
  
  // Re-export theme types
  export type { ThemeTokens, ThemeConfig };
  
  // Utility function
  export function cn(...inputs: any[]): string;
}

// CSS Module declarations
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Vanilla Extract CSS declarations
declare module '*.css.ts' {
  const styles: { [key: string]: string };
  export default styles;
}

// Global CSS custom properties
declare global {
  interface CSSStyleDeclaration {
    // Theme CSS variables
    '--zelda-color-primary': string;
    '--zelda-color-secondary': string;
    '--zelda-color-success': string;
    '--zelda-color-warning': string;
    '--zelda-color-error': string;
    '--zelda-color-info': string;
    '--zelda-spacing-xs': string;
    '--zelda-spacing-sm': string;
    '--zelda-spacing-md': string;
    '--zelda-spacing-lg': string;
    '--zelda-spacing-xl': string;
    '--zelda-radius-xs': string;
    '--zelda-radius-sm': string;
    '--zelda-radius-md': string;
    '--zelda-radius-lg': string;
    '--zelda-radius-xl': string;
    '--zelda-shadow-xs': string;
    '--zelda-shadow-sm': string;
    '--zelda-shadow-md': string;
    '--zelda-shadow-lg': string;
    '--zelda-shadow-xl': string;
  }
}

// Extend React types for better component prop inference
declare module 'react' {
  interface HTMLAttributes<T> {
    // Add common data attributes
    'data-testid'?: string;
    'data-theme'?: 'light' | 'dark';
    'data-variant'?: string;
    'data-size'?: 'small' | 'medium' | 'large';
    'data-status'?: 'error' | 'warning' | 'success' | 'info';
  }
  
  interface AriaAttributes {
    // Extend ARIA attributes for better accessibility
    'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
    'aria-required'?: boolean | 'false' | 'true';
    'aria-disabled'?: boolean | 'false' | 'true';
    'aria-readonly'?: boolean | 'false' | 'true';
  }
}

export {};