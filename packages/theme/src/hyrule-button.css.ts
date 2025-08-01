import { style } from '@vanilla-extract/css';

// 24-bit retro Zelda button styles (SNES era)
export const retro24Bit = style({
  background: 'linear-gradient(135deg, #4a90e2 0%, #2c5aa0 50%, #1e3a8a 100%)',
  border: '3px solid #ffffff',
  borderRadius: '0px', // Sharp corners for retro feel
  boxShadow: `
    inset 2px 2px 0px #87ceeb,
    inset -2px -2px 0px #1e3a8a,
    3px 3px 0px #000000
  `,
  color: '#ffffff',
  fontFamily: 'monospace',
  fontSize: '14px',
  fontWeight: 'bold',
  textShadow: '1px 1px 0px #000000',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  padding: '8px 16px',
  position: 'relative',
  
  ':hover': {
    background: 'linear-gradient(135deg, #5ba0f2 0%, #3c6ab0 50%, #2e4a9a 100%)',
    boxShadow: `
      inset 2px 2px 0px #97defb,
      inset -2px -2px 0px #2e4a9a,
      2px 2px 0px #000000
    `,
    transform: 'translate(1px, 1px)',
  },
  
  ':active': {
    background: 'linear-gradient(135deg, #2c5aa0 0%, #1e3a8a 50%, #0f1f5a 100%)',
    boxShadow: `
      inset -2px -2px 0px #87ceeb,
      inset 2px 2px 0px #0f1f5a,
      1px 1px 0px #000000
    `,
    transform: 'translate(2px, 2px)',
  }
});

// 32-bit retro Zelda button styles (N64/GameCube era)
export const retro32Bit = style({
  background: `
    radial-gradient(ellipse at top, #ffd700 0%, #ffb347 30%, #ff8c00 100%),
    linear-gradient(45deg, #b8860b 0%, #daa520 100%)
  `,
  border: '2px solid #8b4513',
  borderRadius: '4px',
  boxShadow: `
    inset 0 2px 4px rgba(255, 255, 255, 0.3),
    inset 0 -2px 4px rgba(0, 0, 0, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.4),
    0 0 0 1px #654321
  `,
  color: '#2f1b14',
  fontFamily: 'serif',
  fontSize: '16px',
  fontWeight: 'bold',
  textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  padding: '10px 20px',
  position: 'relative',
  
  ':before': {
    content: '""',
    position: 'absolute',
    top: '1px',
    left: '1px',
    right: '1px',
    height: '50%',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)',
    borderRadius: '2px 2px 0 0',
    pointerEvents: 'none',
  },
  
  ':hover': {
    background: `
      radial-gradient(ellipse at top, #ffed4e 0%, #ffc947 30%, #ff9500 100%),
      linear-gradient(45deg, #c8960b 0%, #eab520 100%)
    `,
    boxShadow: `
      inset 0 2px 4px rgba(255, 255, 255, 0.4),
      inset 0 -2px 4px rgba(0, 0, 0, 0.2),
      0 6px 12px rgba(0, 0, 0, 0.3),
      0 0 0 1px #654321
    `,
    transform: 'translateY(-1px)',
  },
  
  ':active': {
    background: `
      radial-gradient(ellipse at top, #e6c200 0%, #cc8400 30%, #b8860b 100%),
      linear-gradient(45deg, #996f08 0%, #b8860b 100%)
    `,
    boxShadow: `
      inset 0 -2px 4px rgba(255, 255, 255, 0.2),
      inset 0 2px 4px rgba(0, 0, 0, 0.4),
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 0 0 1px #654321
    `,
    transform: 'translateY(1px)',
  }
});

// Triforce variant with pixelated effect
export const triforcePixel = style({
  background: `
    conic-gradient(from 0deg at 50% 50%, 
      #ffd700 0deg, #ffed4e 60deg, #ffc107 120deg, 
      #ff8f00 180deg, #ffb300 240deg, #ffd700 360deg)
  `,
  border: '3px solid #b8860b',
  borderRadius: '0px',
  boxShadow: `
    inset 2px 2px 0px #ffff8d,
    inset -2px -2px 0px #cc8400,
    4px 4px 0px #8b4513,
    0 0 20px rgba(255, 215, 0, 0.5)
  `,
  color: '#8b4513',
  fontFamily: 'monospace',
  fontSize: '12px',
  fontWeight: 'bold',
  textShadow: '1px 1px 0px #ffff8d, -1px -1px 0px #cc8400',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  padding: '12px 24px',
  position: 'relative',
  cursor: 'pointer',
  
  ':before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '0',
    height: '0',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderBottom: '12px solid rgba(255, 255, 255, 0.3)',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  },
  
  ':hover': {
    background: `
      conic-gradient(from 0deg at 50% 50%, 
        #ffed4e 0deg, #ffff8d 60deg, #ffd700 120deg, 
        #ffa000 180deg, #ffc107 240deg, #ffed4e 360deg)
    `,
    boxShadow: `
      inset 2px 2px 0px #ffffcc,
      inset -2px -2px 0px #b8860b,
      3px 3px 0px #8b4513,
      0 0 25px rgba(255, 215, 0, 0.7)
    `,
    transform: 'translate(1px, 1px)',
  },
  
  ':active': {
    background: `
      conic-gradient(from 0deg at 50% 50%, 
        #cc8400 0deg, #daa520 60deg, #b8860b 120deg, 
        #996f08 180deg, #cc8400 240deg, #cc8400 360deg)
    `,
    boxShadow: `
      inset -2px -2px 0px #ffff8d,
      inset 2px 2px 0px #996f08,
      2px 2px 0px #8b4513,
      0 0 15px rgba(255, 215, 0, 0.3)
    `,
    transform: 'translate(2px, 2px)',
  }
});

// Rupee variant with gem-like effect
export const rupeeGem = style({
  background: `
    radial-gradient(ellipse at 30% 30%, #00ff88 0%, #00cc66 40%, #009944 100%),
    linear-gradient(135deg, #00ff88 0%, #00aa55 50%, #006633 100%)
  `,
  border: '2px solid #004422',
  borderRadius: '50% 50% 50% 0%',
  boxShadow: `
    inset 2px 2px 8px rgba(255, 255, 255, 0.4),
    inset -2px -2px 8px rgba(0, 0, 0, 0.3),
    0 4px 12px rgba(0, 153, 68, 0.5),
    0 0 0 1px #002211
  `,
  color: '#ffffff',
  fontFamily: 'fantasy',
  fontSize: '14px',
  fontWeight: 'bold',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  padding: '10px 18px',
  position: 'relative',
  
  ':before': {
    content: '""',
    position: 'absolute',
    top: '20%',
    left: '20%',
    width: '30%',
    height: '30%',
    background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  
  ':hover': {
    background: `
      radial-gradient(ellipse at 30% 30%, #33ffaa 0%, #00dd77 40%, #00aa55 100%),
      linear-gradient(135deg, #33ffaa 0%, #00bb66 50%, #007744 100%)
    `,
    boxShadow: `
      inset 2px 2px 8px rgba(255, 255, 255, 0.5),
      inset -2px -2px 8px rgba(0, 0, 0, 0.2),
      0 6px 16px rgba(0, 153, 68, 0.6),
      0 0 0 1px #002211
    `,
    transform: 'scale(1.05)',
  },
  
  ':active': {
    background: `
      radial-gradient(ellipse at 30% 30%, #00cc66 0%, #009944 40%, #006633 100%),
      linear-gradient(135deg, #00cc66 0%, #008844 50%, #005522 100%)
    `,
    boxShadow: `
      inset -2px -2px 8px rgba(255, 255, 255, 0.3),
      inset 2px 2px 8px rgba(0, 0, 0, 0.4),
      0 2px 8px rgba(0, 153, 68, 0.4),
      0 0 0 1px #002211
    `,
    transform: 'scale(0.98)',
  }
});

// Primary variant (golden triforce style)
export const primaryPixel = style({
  background: `
    conic-gradient(from 0deg at 50% 50%, 
      #ffd700 0deg, #ffed4e 60deg, #ffc107 120deg, 
      #ff8f00 180deg, #ffb300 240deg, #ffd700 360deg)
  `,
  border: '3px solid #b8860b',
  borderRadius: '0px',
  boxShadow: `
    inset 2px 2px 0px #ffff8d,
    inset -2px -2px 0px #cc8400,
    4px 4px 0px #8b4513,
    0 0 20px rgba(255, 215, 0, 0.5)
  `,
  color: '#8b4513',
  fontFamily: 'monospace',
  fontSize: '12px',
  fontWeight: 'bold',
  textShadow: '1px 1px 0px #ffff8d, -1px -1px 0px #cc8400',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  padding: '12px 24px',
  position: 'relative',
  cursor: 'pointer',
  
  ':hover': {
    background: `
      conic-gradient(from 0deg at 50% 50%, 
        #ffed4e 0deg, #ffff8d 60deg, #ffd700 120deg, 
        #ffa000 180deg, #ffc107 240deg, #ffed4e 360deg)
    `,
    boxShadow: `
      inset 2px 2px 0px #ffffcc,
      inset -2px -2px 0px #b8860b,
      3px 3px 0px #8b4513,
      0 0 25px rgba(255, 215, 0, 0.7)
    `,
    transform: 'translate(1px, 1px)',
  },
  
  ':active': {
    background: `
      conic-gradient(from 0deg at 50% 50%, 
        #cc8400 0deg, #daa520 60deg, #b8860b 120deg, 
        #996f08 180deg, #cc8400 240deg, #cc8400 360deg)
    `,
    boxShadow: `
      inset -2px -2px 0px #ffff8d,
      inset 2px 2px 0px #996f08,
      2px 2px 0px #8b4513,
      0 0 15px rgba(255, 215, 0, 0.3)
    `,
    transform: 'translate(2px, 2px)',
  }
});

// Secondary variant (green rupee style)
export const secondaryPixel = style({
  background: '#00cc66',
  border: '3px solid #004422',
  borderRadius: '0px',
  boxShadow: `
    inset 2px 2px 0px rgba(255,255,255,0.3),
    inset -2px -2px 0px rgba(0,0,0,0.3),
    4px 4px 0px #002211,
    0 0 20px rgba(0, 204, 102, 0.5)
  `,
  color: '#ffffff',
  fontFamily: 'monospace',
  fontSize: '12px',
  fontWeight: 'bold',
  textShadow: '1px 1px 0px rgba(0,0,0,0.8)',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  padding: '12px 24px',
  position: 'relative',
  cursor: 'pointer',
  
  ':hover': {
    background: '#00dd77',
    boxShadow: `
      inset 2px 2px 0px rgba(255,255,255,0.4),
      inset -2px -2px 0px rgba(0,0,0,0.2),
      3px 3px 0px #002211,
      0 0 25px rgba(0, 204, 102, 0.7)
    `,
    transform: 'translate(1px, 1px)',
  },
  
  ':active': {
    background: '#009944',
    boxShadow: `
      inset -2px -2px 0px rgba(255,255,255,0.2),
      inset 2px 2px 0px rgba(0,0,0,0.4),
      2px 2px 0px #002211,
      0 0 15px rgba(0, 204, 102, 0.3)
    `,
    transform: 'translate(2px, 2px)',
  }
});

// Tertiary variant (blue style)
export const tertiaryPixel = style({
  background: '#4a90e2',
  border: '3px solid #ffffff',
  borderRadius: '0px',
  boxShadow: `
    inset 2px 2px 0px #87ceeb,
    inset -2px -2px 0px #1e3a8a,
    4px 4px 0px #000000,
    0 0 20px rgba(74, 144, 226, 0.5)
  `,
  color: '#ffffff',
  fontFamily: 'monospace',
  fontSize: '12px',
  fontWeight: 'bold',
  textShadow: '1px 1px 0px #000000',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  padding: '12px 24px',
  position: 'relative',
  cursor: 'pointer',
  
  ':hover': {
    background: '#5ba0f2',
    boxShadow: `
      inset 2px 2px 0px #97defb,
      inset -2px -2px 0px #2e4a9a,
      3px 3px 0px #000000,
      0 0 25px rgba(74, 144, 226, 0.7)
    `,
    transform: 'translate(1px, 1px)',
  },
  
  ':active': {
    background: '#2c5aa0',
    boxShadow: `
      inset -2px -2px 0px #87ceeb,
      inset 2px 2px 0px #0f1f5a,
      2px 2px 0px #000000,
      0 0 15px rgba(74, 144, 226, 0.3)
    `,
    transform: 'translate(2px, 2px)',
  }
});

// Destructive variant (Ganon-inspired dark style)
export const destructivePixel = style({
  background: `
    linear-gradient(135deg, #4c1d95 0%, #7c2d12 50%, #1f2937 100%)
  `,
  border: '3px solid #dc2626',
  borderRadius: '0px',
  boxShadow: `
    inset 2px 2px 0px rgba(139, 69, 19, 0.3),
    inset -2px -2px 0px rgba(0, 0, 0, 0.8),
    4px 4px 0px #000000,
    0 0 20px rgba(220, 38, 38, 0.6)
  `,
  color: '#dc2626',
  fontFamily: 'monospace',
  fontSize: '12px',
  fontWeight: 'bold',
  textShadow: '1px 1px 0px #000000, 0 0 10px rgba(220, 38, 38, 0.8)',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  padding: '12px 24px',
  position: 'relative',
  cursor: 'pointer',
  
  ':hover': {
    background: `
      linear-gradient(135deg, #5b21b6 0%, #92400e 50%, #374151 100%)
    `,
    boxShadow: `
      inset 2px 2px 0px rgba(139, 69, 19, 0.4),
      inset -2px -2px 0px rgba(0, 0, 0, 0.6),
      3px 3px 0px #000000,
      0 0 25px rgba(220, 38, 38, 0.8)
    `,
    transform: 'translate(1px, 1px)',
  },
  
  ':active': {
    background: `
      linear-gradient(135deg, #3730a3 0%, #451a03 50%, #111827 100%)
    `,
    boxShadow: `
      inset -2px -2px 0px rgba(139, 69, 19, 0.2),
      inset 2px 2px 0px rgba(0, 0, 0, 0.9),
      2px 2px 0px #000000,
      0 0 15px rgba(220, 38, 38, 0.4)
    `,
    transform: 'translate(2px, 2px)',
  }
});