# Zelda UI Animation Guidelines

## Animation Philosophy: Magical Interactions

Animations in Zelda UI should feel magical and purposeful, enhancing the retro gaming aesthetic while providing clear user feedback. Every animation tells part of the Link-Zelda story.

## Animation Categories

### **Magical Animations** 
*For state changes and confirmations*

**When to use**: Form controls, modals, significant state changes
**Characteristics**: 
- Bouncy easing: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- Scale transformations with overshoot
- Sparkle effects and glow layers
- 0.4-0.6s duration

```css
/* Example: Checkbox magical fill */
@keyframes magicalFill {
  0% { transform: scale(0.8); }
  50% { transform: scale(1.2); /* Overshoot */ }
  100% { transform: scale(1.1); }
}
```

### **Smooth Transitions**
*For hover states and focus changes*

**When to use**: Buttons, inputs, interactive elements
**Characteristics**:
- Smooth easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Subtle scale changes (1.02x - 1.05x)
- Color and glow transitions
- 0.2-0.3s duration

```css
/* Example: Button hover */
.button:hover {
  transform: scale(1.05);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### **Entrance Animations**
*For modals, dropdowns, tooltips*

**When to use**: Overlay components appearing
**Characteristics**:
- 3D perspective effects
- Blur and brightness changes
- Multi-stage animations
- 0.4-0.5s duration

```css
/* Example: Modal entrance */
@keyframes magicalModal {
  0% { 
    transform: scale(0.3) rotateX(-15deg);
    filter: blur(3px);
  }
  100% { 
    transform: scale(1) rotateX(0deg);
    filter: blur(0px);
  }
}
```

## Color Animation Patterns

### **Link-Zelda Sparkles**
Green accents should appear during peak animation moments:

```css
/* Peak sparkle effect */
50% {
  box-shadow: 
    0 0 25px color-mix(in srgb, var(--triforce-400) 80%, transparent),
    0 0 45px color-mix(in srgb, var(--rupee-400) 25%, transparent);
}
```

### **Dark Mode Magic**
Purple mystical effects with green nature accents:

```css
/* Dark mode magical glow */
50% {
  box-shadow: 
    0 0 35px color-mix(in srgb, #6b46c1 90%, transparent),
    0 0 55px color-mix(in srgb, #22c55e 30%, transparent);
}
```

## Component-Specific Guidelines

### **Form Controls (Checkbox, Radio)**
- **Purpose**: Celebrate user choices with magical feedback
- **Pattern**: Scale down → overshoot → settle
- **Green sparkles**: Peak at 50% animation
- **Duration**: 0.5s for satisfying feedback

### **Buttons**
- **Purpose**: Provide immediate interaction feedback
- **Pattern**: Subtle scale and glow on hover
- **Green accents**: Blend into gradient backgrounds
- **Duration**: 0.2s for responsive feel

### **Inputs & Selects**
- **Purpose**: Guide user attention to active fields
- **Pattern**: Scale + glow + color transition
- **Green accents**: Focus ring and background tints
- **Duration**: 0.3s for smooth focus transitions

### **Modals**
- **Purpose**: Create dramatic, magical entrances
- **Pattern**: 3D rotation + scale + blur effects
- **Green accents**: Header shimmer and glow layers
- **Duration**: 0.5s for cinematic feel

## Performance Guidelines

### **Hardware Acceleration**
Always animate properties that use GPU acceleration:
```css
/* Good - GPU accelerated */
transform: scale(1.1);
opacity: 0.8;
filter: blur(2px);

/* Avoid - CPU intensive */
width: 200px;
height: 100px;
top: 50px;
```

### **Animation Limits**
- **Maximum concurrent**: 3-4 animations
- **Stagger delays**: 50-100ms between related animations
- **Reduce motion**: Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Timing and Easing Reference

### **Easing Functions**
```css
/* Magical bouncy effects */
cubic-bezier(0.68, -0.55, 0.265, 1.55)

/* Smooth interactions */
cubic-bezier(0.4, 0, 0.2, 1)

/* Quick feedback */
ease-out

/* Gentle entrances */
ease-in-out
```

### **Duration Scale**
- **Micro interactions**: 0.1-0.2s (hover, focus)
- **Component transitions**: 0.2-0.3s (state changes)
- **Magical effects**: 0.4-0.6s (confirmations, celebrations)
- **Cinematic entrances**: 0.5-0.8s (modals, major transitions)

## Animation Storytelling

### **The Hero's Journey in Micro-interactions**
1. **Call to Adventure**: Hover states invite interaction
2. **Crossing the Threshold**: Click/focus begins the journey
3. **Magical Aid**: Green sparkles provide Link's courage
4. **Return Transformed**: Final state shows completion

### **Emotional Progression**
- **Anticipation**: Hover effects build expectation
- **Action**: Click triggers magical transformation
- **Satisfaction**: Overshoot and sparkles celebrate success
- **Completion**: Settled state confirms the action

## Testing Guidelines

### **Animation Checklist**
- [ ] Works smoothly on 60fps displays
- [ ] Respects reduced motion preferences
- [ ] Green accents appear at peak moments
- [ ] Dark mode maintains magical feel
- [ ] No layout shifts during animation
- [ ] Accessible focus indicators remain visible

### **Cross-browser Testing**
- Chrome/Edge: Full animation support
- Firefox: Test filter effects carefully
- Safari: Verify backdrop-filter support
- Mobile: Test performance on lower-end devices

## Common Patterns Library

### **Magical Fill Animation**
```css
@keyframes magicalFill {
  0% {
    transform: scale(0.8);
    background: transparent;
  }
  50% {
    transform: scale(1.2);
    background: /* gold-green blend */;
    box-shadow: /* peak sparkles */;
  }
  100% {
    transform: scale(1.1);
    background: /* final state */;
  }
}
```

### **Focus Ring Animation**
```css
@keyframes focusRing {
  0% {
    outline-width: 0;
    outline-offset: 0;
  }
  100% {
    outline-width: 2px;
    outline-offset: 2px;
  }
}
```

### **Shimmer Effect**
```css
@keyframes shimmer {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}
```

Remember: Every animation should feel like casting a spell - purposeful, magical, and delightful! ✨