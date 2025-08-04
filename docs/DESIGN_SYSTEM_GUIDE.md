# Zelda UI Design System Guide

## Color Philosophy: The Link-Zelda Partnership

The Zelda UI design system is built around the legendary partnership between Link and Princess Zelda, representing the balance between courage and wisdom through color and interaction.

### Core Color Relationships

#### **Triforce Gold (Zelda/Wisdom)**
- **Primary role**: Main actions, focus states, primary buttons
- **Symbolism**: Royal wisdom, divine power, the Triforce
- **Usage**: Dominant color in light mode, represents Zelda's guidance

#### **Rupee Green (Link/Courage)**
- **Primary role**: Accent color, sparkle effects, nature connections
- **Symbolism**: Hero's courage, connection to nature, growth
- **Usage**: 10-25% blend with gold, represents Link's presence

#### **Mystical Purple (Dark Mode)**
- **Primary role**: Dark mode primary color with green accents
- **Symbolism**: Ancient magic, Ganon's influence, mystical power
- **Usage**: Transforms gold theme while maintaining green partnership

## Color Application Patterns

### **Light Mode Harmony**
```css
/* Primary elements */
background: linear-gradient(135deg, 
  var(--triforce-400) 0%, 
  color-mix(in srgb, var(--triforce-500) 85%, var(--rupee-400) 15%) 50%, 
  var(--triforce-600) 100%
);

/* Glow effects */
box-shadow: 
  0 0 8px color-mix(in srgb, var(--triforce-400) 20%, transparent),
  0 0 16px color-mix(in srgb, var(--rupee-400) 8%, transparent);
```

### **Dark Mode Transformation**
```css
/* Purple mystical with green accents */
background: linear-gradient(135deg, 
  #6b46c1 0%, 
  color-mix(in srgb, #553c9a 85%, #22c55e 15%) 50%, 
  #44337a 100%
);

/* Enhanced magical glow */
box-shadow: 
  0 0 20px color-mix(in srgb, #6b46c1 50%, transparent),
  0 0 30px color-mix(in srgb, #22c55e 12%, transparent);
```

## Component Color Hierarchy

### **Interactive Components**
1. **Button**: Primary Link-Zelda partnership showcase
2. **Input/Select**: Focus states blend green with gold
3. **Modal**: Header shimmer alternates gold and green
4. **Checkbox/Radio**: Green sparkles in magical animations

### **Supporting Colors**
- **Hyrule Blue**: Secondary actions, informational states
- **Ganon Red**: Destructive actions, error states
- **Gray Scale**: Neutral content, disabled states

## Accessibility Guidelines

### **Color Contrast**
- All color combinations meet WCAG 2.1 AA standards
- Green accents never carry meaning alone
- Dark mode maintains contrast ratios

### **Color Blindness Support**
- Green-gold combinations work for deuteranopia
- Purple-green dark mode supports protanopia
- Shape and animation provide additional context

## Brand Storytelling Through Color

### **The Hero's Journey**
- **Gold dominance**: Zelda's wisdom guides the interface
- **Green accents**: Link's courage enhances interactions
- **Purple transformation**: Magic and mystery in dark mode

### **Emotional Progression**
1. **Calm**: Gray neutrals for content
2. **Engagement**: Gold highlights for interaction
3. **Action**: Green sparkles for confirmation
4. **Danger**: Red warnings for destructive actions

## Implementation Best Practices

### **Do**
- Use 10-25% green blend in gold elements
- Layer green glow effects subtly
- Maintain gold as primary, green as accent
- Test both light and dark modes

### **Don't**
- Make green dominant over gold
- Use green without gold context
- Ignore the mystical purple in dark mode
- Forget the retro pixel-art aesthetic

## Future Expansion

### **Seasonal Themes**
- **Spring**: Increase green ratios (Link's awakening)
- **Autumn**: Warmer gold tones (harvest festivals)
- **Winter**: Cool blues and purples (ice temples)

### **Game-Specific Variants**
- **Ocarina of Time**: Classic gold-green balance
- **Breath of the Wild**: Nature-heavy green emphasis
- **Twilight Princess**: Purple-dominant with gold accents

The design system grows with the legend, maintaining the core Link-Zelda partnership while adapting to new adventures.