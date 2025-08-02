import { style } from '@vanilla-extract/css';
import { cssVariables } from './variables.css';

export const dropdownMenu = style({
  background: `linear-gradient(135deg, ${cssVariables.colors.white} 0%, #f8fafc 100%)`,
  border: `2px solid ${cssVariables.colors.triforce[300]}`,
  borderRadius: cssVariables.borderRadius.md,
  boxShadow: `
    0 4px 12px rgba(0, 0, 0, 0.15),
    0 0 0 1px ${cssVariables.colors.triforce[200]},
    inset 0 1px 0 rgba(255, 255, 255, 0.8)
  `,
  padding: `${cssVariables.spacing[1]} 0`,
  minWidth: '12rem',
  overflow: 'hidden',
});

export const dropdownItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: cssVariables.spacing[2],
  width: '100%',
  padding: `${cssVariables.spacing[2]} ${cssVariables.spacing[3]}`,
  margin: 0,
  fontSize: cssVariables.fontSize.sm,
  fontWeight: cssVariables.fontWeight.medium,
  color: cssVariables.colors.gray[700],
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 0,
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'all 0.15s ease',
  boxSizing: 'border-box',
  outline: 'none',
  
  ':hover': {
    backgroundColor: cssVariables.colors.triforce[100],
    color: cssVariables.colors.triforce[800],
    transform: 'translateX(2px)',
    margin: '0 -2px',
    padding: `${cssVariables.spacing[2]} calc(${cssVariables.spacing[3]} + 2px)`,
  },
  
  ':active': {
    backgroundColor: cssVariables.colors.triforce[100],
    transform: 'translateX(1px)',
    margin: '0 -2px',
    padding: `${cssVariables.spacing[2]} calc(${cssVariables.spacing[3]} + 2px)`,
  },
});

export const dropdownItemDisabled = style({
  color: cssVariables.colors.gray[400],
  cursor: 'not-allowed',
  
  ':hover': {
    backgroundColor: 'transparent',
    color: cssVariables.colors.gray[400],
    transform: 'none',
  },
});

export const dropdownDivider = style({
  height: '1px',
  backgroundColor: cssVariables.colors.triforce[200],
  margin: `${cssVariables.spacing[1]} ${cssVariables.spacing[3]}`,
  background: `linear-gradient(90deg, transparent 0%, ${cssVariables.colors.triforce[200]} 50%, transparent 100%)`,
});

export const dropdownIcon = style({
  flexShrink: 0,
  width: '1rem',
  height: '1rem',
  color: cssVariables.colors.triforce[600],
});