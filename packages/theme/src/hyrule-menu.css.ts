import { style, keyframes } from '@vanilla-extract/css';
import { cssVariables } from './variables.css';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

const fadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const selectFlash = keyframes({
  '0%': { background: '#22c55e', color: '#ffffff' },
  '33%': { background: '#fbbf24', color: '#000000' },
  '66%': { background: '#d97706', color: '#ffffff' },
  '100%': { background: '#22c55e', color: '#ffffff' },
});

const hoverGlitch = keyframes({
  '0%, 90%': { 
    transform: 'translateX(0)',
    boxShadow: '1px 1px 0px #16a34a'
  },
  '10%': { 
    transform: 'translateX(-1px)',
    boxShadow: '2px 1px 0px #d97706, 1px 1px 0px #16a34a'
  },
  '20%': { 
    transform: 'translateX(1px)',
    boxShadow: '0px 1px 0px #fbbf24, 1px 1px 0px #16a34a'
  },
  '30%': { 
    transform: 'translateX(0)',
    boxShadow: '1px 2px 0px #92400e, 1px 1px 0px #16a34a'
  },
});

// Main menu container
export const menuContainer = style({
  background: '#fafafa',
  borderRight: '1px solid #d9d9d9',
  minHeight: '100vh',
  width: '240px',
  listStyle: 'none',
});

// Menu item base
export const menuItem = style({
  background: 'transparent',
  border: '1px solid transparent',
  borderRadius: '0px',
  margin: '1px 2px',
  padding: '6px 8px',
  color: 'rgba(0, 0, 0, 0.88)',
  fontWeight: '500',
  fontSize: '14px',
  fontFamily: '"Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  cursor: 'pointer',
  transition: 'none',
  listStyle: 'none',
  imageRendering: 'pixelated',
  
  ':hover': {
    background: '#f0fdf4',
    border: '1px solid #22c55e',
    borderTop: '1px solid #86efac',
    borderLeft: '1px solid #86efac',
    boxShadow: '1px 1px 0px #16a34a',
    color: '#14532d',
  },
});

// Selected menu item
export const menuItemSelected = style({
  background: '#22c55e',
  border: '1px solid #16a34a',
  borderTop: '1px solid #4ade80',
  borderLeft: '1px solid #4ade80',
  color: '#ffffff',
  fontWeight: '600',
  fontFamily: '"Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  boxShadow: '1px 1px 0px #15803d',
  imageRendering: 'pixelated',
  
  ':hover': {
    background: '#16a34a',
    color: '#ffffff',
  },
});

// Submenu container
export const subMenuContainer = style({
  background: '#ffffff',
  border: '1px solid #e2e8f0',
  borderRadius: '6px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  animation: `${fadeIn} 0.2s ease-out`,
  listStyle: 'none',
});

// Submenu title
export const subMenuTitle = style({
  background: 'transparent',
  padding: '8px 12px',
  margin: '4px 8px',
  borderRadius: '6px',
  color: 'rgba(0, 0, 0, 0.88)',
  fontWeight: '500',
  fontSize: '14px',
  fontFamily: '"Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  listStyle: 'none',
  
  ':hover': {
    background: 'rgba(34, 197, 94, 0.1)',
    color: '#16a34a',
  },
});

// Disabled state
export const menuItemDisabled = style({
  color: '#94a3b8',
  cursor: 'not-allowed',
  opacity: 0.6,
  listStyle: 'none',
  
  ':hover': {
    background: 'transparent',
    color: '#94a3b8',
  },
});