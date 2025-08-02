import { globalStyle } from '@vanilla-extract/css';
import { colors } from './tokens.css';

// Default light theme
globalStyle(':root', {
  '--color-background': colors.white,
  '--color-foreground': colors.gray[900],
  '--color-muted': colors.gray[500],
  '--color-border': colors.gray[300],
  '--color-input': colors.white,
  '--color-primary': colors.hyrule[600],
  '--color-primary-foreground': colors.white,
  '--color-secondary': colors.gray[100],
  '--color-secondary-foreground': colors.gray[900],
  '--color-accent': colors.gray[100],
  '--color-accent-foreground': colors.gray[900],
  '--color-destructive': colors.ganon[500],
  '--color-destructive-foreground': colors.white,
} as Record<string, string>);

// Dark theme
globalStyle('[data-theme="dark"]', {
  '--color-background': colors.gray[900],
  '--color-foreground': colors.gray[50],
  '--color-muted': colors.gray[400],
  '--color-border': colors.gray[700],
  '--color-input': colors.gray[800],
  '--color-primary': colors.hyrule[500],
  '--color-primary-foreground': colors.white,
  '--color-secondary': colors.gray[800],
  '--color-secondary-foreground': colors.gray[50],
  '--color-accent': colors.gray[800],
  '--color-accent-foreground': colors.gray[50],
  '--color-destructive': colors.ganon[500],
  '--color-destructive-foreground': colors.white,
} as Record<string, string>);

// Secret Zelda theme (activated with data-theme="hyrule")
globalStyle('[data-theme="hyrule"]', {
  '--color-background': '#0f1419', // Deep forest night
  '--color-foreground': '#f7fafc', // Moonlight white
  '--color-muted': '#a0aec0', // Misty gray
  '--color-border': '#2d5016', // Forest green border
  '--color-input': '#1a202c', // Dark input
  '--color-primary': '#38a169', // Hyrule green
  '--color-primary-foreground': '#f7fafc',
  '--color-secondary': '#2d5016', // Forest secondary
  '--color-secondary-foreground': '#f7fafc',
  '--color-accent': '#d69e2e', // Triforce gold
  '--color-accent-foreground': '#1a202c',
  '--color-destructive': '#e53e3e', // Ganon red
  '--color-destructive-foreground': '#f7fafc',
  // Custom Zelda colors
  '--color-triforce': '#ffd700', // Golden triforce
  '--color-master-sword': '#4299e1', // Master sword blue
  '--color-rupee-green': '#38a169',
  '--color-rupee-blue': '#3182ce',
  '--color-rupee-red': '#e53e3e',
  '--color-rupee-purple': '#805ad5',
  '--color-heart': '#e53e3e',
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

// Zelda theme utilities
globalStyle('.bg-triforce', { backgroundColor: 'var(--color-triforce)' });
globalStyle('.text-triforce', { color: 'var(--color-triforce)' });
globalStyle('.bg-master-sword', { backgroundColor: 'var(--color-master-sword)' });
globalStyle('.text-master-sword', { color: 'var(--color-master-sword)' });
globalStyle('.bg-rupee-green', { backgroundColor: 'var(--color-rupee-green)' });
globalStyle('.bg-rupee-blue', { backgroundColor: 'var(--color-rupee-blue)' });
globalStyle('.bg-rupee-red', { backgroundColor: 'var(--color-rupee-red)' });
globalStyle('.bg-rupee-purple', { backgroundColor: 'var(--color-rupee-purple)' });
globalStyle('.text-heart', { color: 'var(--color-heart)' });