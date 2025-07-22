import { globalStyle } from '@vanilla-extract/css';
import { colors } from './colors.css';

// Default light theme
globalStyle(':root', {
  '--color-background': colors.white,
  '--color-foreground': colors.gray[900],
  '--color-muted': colors.gray[500],
  '--color-border': colors.gray[300],
  '--color-input': colors.white,
  '--color-primary': colors.blue[600],
  '--color-primary-foreground': colors.white,
  '--color-secondary': colors.gray[100],
  '--color-secondary-foreground': colors.gray[900],
  '--color-accent': colors.gray[100],
  '--color-accent-foreground': colors.gray[900],
  '--color-destructive': colors.red[500],
  '--color-destructive-foreground': colors.white,
} as Record<string, string>);

// Dark theme
globalStyle('[data-theme="dark"]', {
  '--color-background': colors.gray[950] || colors.gray[900],
  '--color-foreground': colors.gray[50],
  '--color-muted': colors.gray[400],
  '--color-border': colors.gray[700],
  '--color-input': colors.gray[800],
  '--color-primary': colors.blue[500],
  '--color-primary-foreground': colors.white,
  '--color-secondary': colors.gray[800],
  '--color-secondary-foreground': colors.gray[50],
  '--color-accent': colors.gray[800],
  '--color-accent-foreground': colors.gray[50],
  '--color-destructive': colors.red[500],
  '--color-destructive-foreground': colors.white,
} as Record<string, string>);

// Semantic color utilities
globalStyle('.bg-background', { backgroundColor: 'var(--color-background)' });
globalStyle('.text-foreground', { color: 'var(--color-foreground)' });
globalStyle('.text-muted', { color: 'var(--color-muted)' });
globalStyle('.border-border', { borderColor: 'var(--color-border)' });
globalStyle('.bg-input', { backgroundColor: 'var(--color-input)' });
globalStyle('.bg-primary', { backgroundColor: 'var(--color-primary)' });
globalStyle('.text-primary-foreground', { color: 'var(--color-primary-foreground)' });
globalStyle('.bg-secondary', { backgroundColor: 'var(--color-secondary)' });
globalStyle('.text-secondary-foreground', { color: 'var(--color-secondary-foreground)' });
globalStyle('.bg-destructive', { backgroundColor: 'var(--color-destructive)' });
globalStyle('.text-destructive-foreground', { color: 'var(--color-destructive-foreground)' });