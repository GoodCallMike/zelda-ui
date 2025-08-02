import { style } from '@vanilla-extract/css';
import { cssVariables } from './variables.css';

// Primary variant (Princess Zelda style)
export const primaryPixel = style({
  background: `linear-gradient(315deg, #fbbf24 0%, #f59e0b 30%, #d97706 60%, #92400e 100%)`,
  border: `2px solid #92400e`,
  borderTop: `2px solid #fde047`,
  borderLeft: `2px solid #facc15`,
  borderRight: `2px solid #a16207`,
  borderBottom: `2px solid #78350f`,
  borderRadius: '3px',
  color: cssVariables.colors.white,
  fontWeight: 'bold',
  fontSize: '14px',
  textShadow: `1px 1px 0px rgba(0, 0, 0, 0.8), 0 0 6px #f59e0b`,
  boxShadow: `2px 2px 0px #78350f`,
  padding: '10px 20px',
  transition: 'none',
  cursor: 'pointer',

  ':hover': {
    background: `linear-gradient(315deg, #fde047 0%, #fbbf24 30%, #f59e0b 60%, #d97706 100%)`,
  },

  ':active': {
    transform: 'translate(2px, 2px)',
    boxShadow: 'none',
    borderTop: `2px solid ${cssVariables.colors.triforce[700]}`,
    borderLeft: `2px solid ${cssVariables.colors.triforce[700]}`,
    borderRight: `2px solid ${cssVariables.colors.triforce[300]}`,
    borderBottom: `2px solid ${cssVariables.colors.triforce[300]}`,
  },

  ':disabled': {
    background: cssVariables.colors.gray[400],
    border: `2px solid ${cssVariables.colors.gray[500]}`,
    color: cssVariables.colors.gray[600],
    cursor: 'not-allowed',
    boxShadow: `
      0 2px 0 ${cssVariables.colors.gray[500]},
      0 3px 4px rgba(0, 0, 0, 0.1)
    `,
    transform: 'none',
  },
});

// Secondary variant (Link's tunic style)
export const secondaryPixel = style({
  background: `linear-gradient(45deg, ${cssVariables.colors.rupee[500]} 0%, ${cssVariables.colors.rupee[600]} 50%, #16a34a 100%)`,
  border: `2px solid ${cssVariables.colors.rupee[700]}`,
  borderTop: `2px solid ${cssVariables.colors.rupee[400]}`,
  borderLeft: `2px solid ${cssVariables.colors.rupee[400]}`,
  borderRadius: '3px',
  color: cssVariables.colors.white,
  fontWeight: 'bold',
  fontSize: '14px',
  textShadow: `1px 1px 0px rgba(0, 0, 0, 0.8)`,
  boxShadow: `2px 2px 0px ${cssVariables.colors.rupee[700]}`,
  padding: '10px 20px',
  transition: 'none',
  cursor: 'pointer',

  ':hover': {
    background: `linear-gradient(45deg, ${cssVariables.colors.rupee[400]} 0%, ${cssVariables.colors.rupee[500]} 50%, #22c55e 100%)`,
  },

  ':active': {
    background: `linear-gradient(135deg, ${cssVariables.colors.rupee[600]} 0%, ${cssVariables.colors.rupee[700]} 50%, ${cssVariables.colors.rupee[800]} 100%)`,
    transform: 'translateY(4px)',
    boxShadow: `
      0 0 0 ${cssVariables.colors.rupee[700]},
      0 2px 4px rgba(0, 0, 0, 0.4),
      inset 0 2px 4px rgba(0, 0, 0, 0.3)
    `,
  },

  ':disabled': {
    background: cssVariables.colors.gray[400],
    border: `2px solid ${cssVariables.colors.gray[500]}`,
    color: cssVariables.colors.gray[600],
    cursor: 'not-allowed',
    boxShadow: `
      0 2px 0 ${cssVariables.colors.gray[500]},
      0 3px 4px rgba(0, 0, 0, 0.1)
    `,
    transform: 'none',
  },
});

// Tertiary variant (Hyrule royal style)
export const tertiaryPixel = style({
  background: 'transparent',
  border: `2px solid ${cssVariables.colors.hyrule[500]}`,
  borderRadius: '3px',
  color: cssVariables.colors.hyrule[600],
  fontWeight: 'bold',
  fontSize: '14px',
  textShadow: `1px 1px 0px rgba(255, 255, 255, 0.8)`,
  boxShadow: 'none',
  padding: '10px 20px',
  transition: 'none',
  cursor: 'pointer',

  ':hover': {
    background: cssVariables.colors.hyrule[50],
    color: cssVariables.colors.hyrule[700],
    borderColor: cssVariables.colors.hyrule[600],
  },

  ':active': {
    background: cssVariables.colors.hyrule[100],
    color: cssVariables.colors.hyrule[800],
    borderColor: cssVariables.colors.hyrule[700],
  },

  ':disabled': {
    background: cssVariables.colors.gray[400],
    border: `2px solid ${cssVariables.colors.gray[500]}`,
    color: cssVariables.colors.gray[600],
    cursor: 'not-allowed',
    boxShadow: `
      0 2px 0 ${cssVariables.colors.gray[500]},
      0 3px 4px rgba(0, 0, 0, 0.1)
    `,
    transform: 'none',
  },
});

// Destructive variant (ganon red style)
export const destructivePixel = style({
  background: `linear-gradient(135deg, ${cssVariables.colors.ganon[600]} 0%, #7c2d12 40%, #1f2937 70%, #4c1d95 100%)`,
  border: `2px solid ${cssVariables.colors.ganon[800]}`,
  borderTop: `2px solid ${cssVariables.colors.ganon[300]}`,
  borderLeft: `2px solid ${cssVariables.colors.ganon[400]}`,
  borderRight: `2px solid #4c1d95`,
  borderBottom: `2px solid #1f2937`,
  borderRadius: '3px',
  color: cssVariables.colors.white,
  fontWeight: 'bold',
  fontSize: '14px',
  textShadow: `1px 1px 0px ${cssVariables.colors.black}, 0 0 4px #7c2d12`,
  boxShadow: `2px 2px 0px #1e1b4b`,
  padding: '10px 20px',
  transition: 'none',
  cursor: 'pointer',
  
  '@keyframes slide': {
    '0%': { left: '-100%' },
    '100%': { left: '100%' },
  },

  ':hover': {
    background: `linear-gradient(135deg, ${cssVariables.colors.ganon[700]} 0%, #451a03 40%, #0f172a 70%, #312e81 100%)`,
    position: 'relative',
    overflow: 'hidden',
  },
  
  ':hover::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.3), transparent)',
    animation: 'slide 2s ease-in-out infinite',
  },

  ':active': {
    borderTop: `2px solid #1f2937`,
    borderLeft: `2px solid #4c1d95`,
    borderRight: `2px solid ${cssVariables.colors.ganon[400]}`,
    borderBottom: `2px solid ${cssVariables.colors.ganon[300]}`,
    boxShadow: 'none',
  },

  ':disabled': {
    background: cssVariables.colors.gray[400],
    border: `2px solid ${cssVariables.colors.gray[500]}`,
    color: cssVariables.colors.gray[600],
    cursor: 'not-allowed',
    boxShadow: `
      0 2px 0 ${cssVariables.colors.gray[500]},
      0 3px 4px rgba(0, 0, 0, 0.1)
    `,
    transform: 'none',
  },
});

// Link variant (subtle link style)
export const linkPixel = style({
  fontWeight: 'bold',
  color: cssVariables.colors.triforce[600],
  textDecoration: 'underline',
  textDecorationColor: cssVariables.colors.triforce[500],
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  padding: '2px 4px',
  borderRadius: '4px',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'all 0.2s ease',

  ':hover': {
    color: cssVariables.colors.triforce[500],
    backgroundColor: cssVariables.colors.triforce[50],
    textDecorationColor: cssVariables.colors.triforce[400],
    transform: 'scale(1.05)',
  },

  ':active': {
    color: cssVariables.colors.triforce[700],
    transform: 'scale(0.95)',
  },

  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px ${cssVariables.colors.triforce[400]}`,
  },
});