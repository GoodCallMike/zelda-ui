// Theme configuration types
export interface ThemeConfig {
  colors: ColorPalette;
  typography: TypographyScale;
  spacing: SpacingScale;
  breakpoints: BreakpointScale;
  shadows: ShadowScale;
  radii: RadiusScale;
  zIndex: ZIndexScale;
}

// Color system
export interface ColorPalette {
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  error: ColorScale;
  info: ColorScale;
  gray: ColorScale;
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
  };
  border: {
    primary: string;
    secondary: string;
    focus: string;
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

// Typography system
export interface TypographyScale {
  fontFamily: {
    sans: string[];
    serif: string[];
    mono: string[];
  };
  fontSize: {
    xs: [string, { lineHeight: string; letterSpacing?: string }];
    sm: [string, { lineHeight: string; letterSpacing?: string }];
    base: [string, { lineHeight: string; letterSpacing?: string }];
    lg: [string, { lineHeight: string; letterSpacing?: string }];
    xl: [string, { lineHeight: string; letterSpacing?: string }];
    '2xl': [string, { lineHeight: string; letterSpacing?: string }];
    '3xl': [string, { lineHeight: string; letterSpacing?: string }];
    '4xl': [string, { lineHeight: string; letterSpacing?: string }];
    '5xl': [string, { lineHeight: string; letterSpacing?: string }];
    '6xl': [string, { lineHeight: string; letterSpacing?: string }];
  };
  fontWeight: {
    thin: string;
    light: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
    black: string;
  };
}

// Spacing system
export interface SpacingScale {
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

// Breakpoint system
export interface BreakpointScale {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

// Shadow system
export interface ShadowScale {
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

// Border radius system
export interface RadiusScale {
  none: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
}

// Z-index system
export interface ZIndexScale {
  auto: string;
  0: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  dropdown: string;
  sticky: string;
  fixed: string;
  modal: string;
  popover: string;
  tooltip: string;
  toast: string;
}

// Theme context types
export interface ThemeContextValue {
  theme: ThemeConfig;
  colorScheme: 'light' | 'dark';
  setColorScheme: (scheme: 'light' | 'dark' | 'auto') => void;
}

// CSS-in-JS style object type
export interface StyleObject {
  [key: string]: string | number | StyleObject;
}
