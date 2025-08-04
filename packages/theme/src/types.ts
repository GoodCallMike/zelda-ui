// Theme token types
export interface ThemeTokens {
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  shadows: ShadowTokens;
  borders: BorderTokens;
  radii: RadiusTokens;
  zIndex: ZIndexTokens;
  breakpoints: BreakpointTokens;
  animations: AnimationTokens;
}

// Color tokens
export interface ColorTokens {
  // Brand colors
  primary: ColorScale;
  secondary: ColorScale;
  
  // Semantic colors
  success: ColorScale;
  warning: ColorScale;
  error: ColorScale;
  info: ColorScale;
  
  // Neutral colors
  gray: ColorScale;
  
  // Surface colors
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    overlay: string;
  };
  
  // Text colors
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    disabled: string;
  };
  
  // Border colors
  border: {
    primary: string;
    secondary: string;
    tertiary: string;
    focus: string;
    error: string;
    warning: string;
    success: string;
  };
}

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

// Typography tokens
export interface TypographyTokens {
  fontFamily: {
    sans: string;
    serif: string;
    mono: string;
  };
  
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  
  fontWeight: {
    thin: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
  };
  
  lineHeight: {
    none: number;
    tight: number;
    snug: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
  
  letterSpacing: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  };
}

// Spacing tokens
export interface SpacingTokens {
  0: string;
  px: string;
  0.5: string;
  1: string;
  1.5: string;
  2: string;
  2.5: string;
  3: string;
  3.5: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  14: string;
  16: string;
  20: string;
  24: string;
  28: string;
  32: string;
  36: string;
  40: string;
  44: string;
  48: string;
  52: string;
  56: string;
  60: string;
  64: string;
  72: string;
  80: string;
  96: string;
}

// Shadow tokens
export interface ShadowTokens {
  xs: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
  none: string;
}

// Border tokens
export interface BorderTokens {
  width: {
    0: string;
    1: string;
    2: string;
    4: string;
    8: string;
  };
  
  style: {
    solid: string;
    dashed: string;
    dotted: string;
    double: string;
    none: string;
  };
}

// Radius tokens
export interface RadiusTokens {
  none: string;
  xs: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
}

// Z-index tokens
export interface ZIndexTokens {
  hide: number;
  auto: number;
  base: number;
  docked: number;
  dropdown: number;
  sticky: number;
  banner: number;
  overlay: number;
  modal: number;
  popover: number;
  skipLink: number;
  toast: number;
  tooltip: number;
}

// Breakpoint tokens
export interface BreakpointTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

// Animation tokens
export interface AnimationTokens {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  
  easing: {
    linear: string;
    ease: string;
    'ease-in': string;
    'ease-out': string;
    'ease-in-out': string;
  };
  
  keyframes: {
    fadeIn: string;
    fadeOut: string;
    slideIn: string;
    slideOut: string;
    scaleIn: string;
    scaleOut: string;
    spin: string;
    pulse: string;
    bounce: string;
  };
}

// Theme configuration
export interface ThemeConfig {
  tokens: ThemeTokens;
  components: ComponentThemes;
}

// Component-specific theme overrides
export interface ComponentThemes {
  Button?: Partial<ButtonTheme>;
  Input?: Partial<InputTheme>;
  Select?: Partial<SelectTheme>;
  Modal?: Partial<ModalTheme>;
  Toast?: Partial<ToastTheme>;
}

// Component theme interfaces
export interface ButtonTheme {
  variants: Record<string, string>;
  sizes: Record<string, string>;
  states: Record<string, string>;
}

export interface InputTheme {
  variants: Record<string, string>;
  sizes: Record<string, string>;
  states: Record<string, string>;
}

export interface SelectTheme {
  variants: Record<string, string>;
  sizes: Record<string, string>;
  states: Record<string, string>;
}

export interface ModalTheme {
  sizes: Record<string, string>;
  overlay: string;
  content: string;
}

export interface ToastTheme {
  variants: Record<string, string>;
  positions: Record<string, string>;
}

// CSS variable types
export type CSSVariable = `--${string}`;
export type CSSVariableMap = Record<CSSVariable, string>;

// Utility types for theme consumption
export type ThemeValue<T> = T | ((theme: ThemeTokens) => T);
export type ResponsiveThemeValue<T> = T | Partial<Record<keyof BreakpointTokens, T>>;