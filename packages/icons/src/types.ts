import type { SVGProps } from 'react';

// Base icon props - exported as public interface
export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Icon size - can be a preset or custom size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string;
  /** Icon color */
  color?: string;
  /** Icon title for accessibility */
  title?: string;
  /** Icon description for accessibility */
  description?: string;
}

// Icon component type - uses public IconProps
export type IconComponent = React.ComponentType<IconProps>;

// Icon categories for organization
export type IconCategory =
  | 'actions'
  | 'arrows'
  | 'charts'
  | 'communication'
  | 'development'
  | 'design'
  | 'education'
  | 'files'
  | 'finance'
  | 'general'
  | 'images'
  | 'layout'
  | 'maps'
  | 'media'
  | 'security'
  | 'shapes'
  | 'time'
  | 'users'
  | 'weather';

// Icon metadata for documentation and tooling
export interface IconMetadata {
  name: string;
  category: IconCategory;
  tags: string[];
  description?: string;
  deprecated?: boolean;
  replacedBy?: string;
}

// Icon registry for dynamic loading
export interface IconRegistry {
  [key: string]: {
    component: IconComponent;
    metadata: IconMetadata;
  };
}

// Icon size presets
export const ICON_SIZES = {
  xs: '12px',
  sm: '16px',
  md: '20px',
  lg: '24px',
  xl: '32px',
} as const;

// Default icon props
export const DEFAULT_ICON_PROPS: Partial<IconProps> = {
  size: 'md',
  className: 'size-4',
  'aria-hidden': true,
} as const;
