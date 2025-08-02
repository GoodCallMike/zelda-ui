import { style } from '@vanilla-extract/css';
import { cssVariables } from './variables.css';

export const modalBackdrop = style({
  position: 'fixed',
  inset: 0,
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%)',
  backdropFilter: 'blur(4px)',
});

export const modalContainer = style({
  position: 'relative',
  background: cssVariables.colors.white,
  borderRadius: cssVariables.borderRadius.lg,
  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`,
  maxHeight: '90vh',
  overflow: 'hidden',
  margin: cssVariables.spacing[4],
});

export const modalHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${cssVariables.spacing[6]} ${cssVariables.spacing[6]} ${cssVariables.spacing[4]}`,
  borderBottom: `1px solid ${cssVariables.colors.gray[200]}`,
});

export const modalTitle = style({
  fontSize: cssVariables.fontSize.xl,
  fontWeight: cssVariables.fontWeight.bold,
  color: cssVariables.colors.gray[900],
});

export const modalCloseButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2rem',
  height: '2rem',
  padding: 0,
  backgroundColor: cssVariables.colors.ganon[500],
  border: `1px solid ${cssVariables.colors.ganon[700]}`,
  borderTop: `1px solid ${cssVariables.colors.ganon[400]}`,
  borderLeft: `1px solid ${cssVariables.colors.ganon[400]}`,
  borderRadius: 0,
  color: cssVariables.colors.white,
  cursor: 'pointer',
  transition: 'none',
  boxShadow: `1px 1px 0 ${cssVariables.colors.ganon[700]}`,
  
  ':hover': {
    backgroundColor: cssVariables.colors.ganon[600],
  },
  
  ':active': {
    borderTop: `1px solid ${cssVariables.colors.ganon[700]}`,
    borderLeft: `1px solid ${cssVariables.colors.ganon[700]}`,
    borderRight: `1px solid ${cssVariables.colors.ganon[400]}`,
    borderBottom: `1px solid ${cssVariables.colors.ganon[400]}`,
    boxShadow: 'none',
  },
});

export const modalBody = style({
  padding: cssVariables.spacing[6],
  maxHeight: '24rem',
  overflowY: 'auto',
  color: cssVariables.colors.gray[700],
  lineHeight: '1.6',
  
  // Custom scrollbar
  '::-webkit-scrollbar': {
    width: '8px',
  },
  
  '::-webkit-scrollbar-track': {
    backgroundColor: cssVariables.colors.gray[100],
    borderRadius: cssVariables.borderRadius.full,
  },
  
  '::-webkit-scrollbar-thumb': {
    backgroundColor: cssVariables.colors.gray[300],
    borderRadius: cssVariables.borderRadius.full,
    
    ':hover': {
      backgroundColor: cssVariables.colors.gray[400],
    },
  },
});

export const modalFooter = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: cssVariables.spacing[3],
  padding: `${cssVariables.spacing[4]} ${cssVariables.spacing[6]} ${cssVariables.spacing[6]}`,
  borderTop: `1px solid ${cssVariables.colors.gray[200]}`,
  backgroundColor: cssVariables.colors.gray[50],
});