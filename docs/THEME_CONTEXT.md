# 🗡️ Zelda UI Theme Context

## Theme Architecture

The Zelda UI theme system is built on CSS custom properties with two main themes:
- **Light Mode** (default) - Bright Hyrule kingdom theme
- **Dark Mode** (`className="dark"`) - Mystical night theme with purple accents

## Color System

### Light Mode Colors
- **Primary**: Triforce Gold (`var(--triforce-*)`) - Golden gradients for main actions
- **Secondary**: Rupee Green (`var(--rupee-*)`) - Emerald green for secondary actions
- **Tertiary**: Hyrule Blue (`var(--hyrule-*)`) - Royal blue for tertiary actions
- **Destructive**: Ganon Red (`var(--ganon-*)`) - Crimson red for dangerous actions
- **Neutral**: Gray scale (`var(--gray-*)`) - Standard grays for text and borders

### Dark Mode Color Transformations
- **Primary**: Triforce Gold → **Mystic Purple** (`#6b46c1` to `#44337a` gradients)
- **Secondary**: Rupee Green → **Deep Forest Green** (darker green variants)
- **Tertiary**: Hyrule Blue → **Ethereal Blue** (lighter blue variants)
- **Destructive**: Ganon Red → **Unchanged** (red stays consistent)
- **Neutral**: Light grays → **Dark grays** (`var(--gray-800)` backgrounds)



## Component Styling Patterns

### Light Mode Styling
```css
/* Primary components use Triforce gold with pixelated effects */
.primary {
  background: linear-gradient(135deg, var(--triforce-400) 0%, var(--triforce-500) 50%, var(--triforce-600) 100%);
  border: 3px solid var(--triforce-700);
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  box-shadow: 
    inset 2px 2px 0 var(--triforce-100),
    inset -2px -2px 0 var(--triforce-700),
    4px 4px 0 var(--triforce-900);
}

/* Default/outline components */
.default {
  background: transparent;
  border: 3px solid var(--gray-400);
  box-shadow: 
    inset 2px 2px 0 color-mix(in srgb, var(--white) 50%, transparent),
    inset -2px -2px 0 color-mix(in srgb, var(--gray-600) 30%, transparent),
    4px 4px 0 color-mix(in srgb, var(--gray-600) 40%, transparent);
}
```

### Dark Mode Styling
```css
/* Primary components transform to mystical purple */
:global(.dark) .primary {
  background: linear-gradient(135deg, #6b46c1 0%, #553c9a 50%, #44337a 100%);
  border-color: #312e81;
  color: #e0e7ff;
  box-shadow: 
    inset 2px 2px 0 #a78bfa,
    inset -2px -2px 0 #312e81,
    4px 4px 0 var(--black),
    0 0 20px color-mix(in srgb, #6b46c1 50%, transparent);
}
```

## Theme Application Rules

### 1. Primary Actions (Buttons, Selected States)
- **Light**: Triforce gold gradients with warm shadows
- **Dark**: Purple gradients with ethereal glow effects

### 2. Form Controls (Radio, Checkbox, Input)
- **Light**: Triforce gold when active/checked
- **Dark**: Purple gradients when active/checked
- **Hover**: Lighter variants with glow effects

### 3. Text and Typography
- **Light**: Dark grays (`var(--gray-700)`, `var(--gray-900)`)
- **Dark**: Light grays (`var(--gray-100)`, `#e0e7ff`)

### 4. Backgrounds and Surfaces
- **Light**: White and light grays
- **Dark**: Dark grays (`var(--gray-800)`, `var(--gray-900)`)

### 5. Borders and Dividers
- **Light**: Medium grays (`var(--gray-300)`, `var(--gray-400)`)
- **Dark**: Dark grays (`var(--gray-600)`, `var(--gray-700)`)

### 6. Connected Button Groups
- **Overlap borders**: Use `margin-left: -1px` to connect buttons
- **Border radius**: Only first/last buttons have outer rounded corners
- **Middle buttons**: `border-radius: 0` for seamless connection

```css
.buttonGroup {
  margin-left: -1px;
}

.buttonGroup:first-child {
  margin-left: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.buttonGroup:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.buttonGroup:not(:first-child):not(:last-child) {
  border-radius: 0;
}
```

## Consistent Dark Mode Colors

### Purple Palette (Primary in Dark Mode)
- `#6b46c1` - Base purple
- `#553c9a` - Medium purple
- `#44337a` - Dark purple
- `#312e81` - Very dark purple (borders)
- `#a78bfa` - Light purple (highlights)
- `#c4b5fd` - Very light purple (hover text)
- `#e0e7ff` - Almost white purple (text)

### Glow Effects
- Use `color-mix(in srgb, #6b46c1 50%, transparent)` for purple glows
- Use `0 0 20px` for strong glows, `0 0 15px` for medium glows

## Implementation Guidelines

### 1. Always Use Gradients for Primary Actions in Dark Mode
```css
background: linear-gradient(135deg, #6b46c1 0%, #553c9a 50%, #44337a 100%);
```

### 2. Add Glow Effects for Interactive Elements
```css
box-shadow: 0 0 20px color-mix(in srgb, #6b46c1 50%, transparent);
```

### 3. Use Consistent Border Colors
```css
border-color: #312e81; /* Dark mode primary borders */
```

### 4. Text Colors Should Match Theme
```css
color: #e0e7ff; /* Light purple-tinted white for dark mode */
```

### 5. Destructive Actions Stay Red
Ganon red colors remain consistent across all themes to maintain danger recognition.

### 6. Pixelated Rendering
All interactive components should include pixelated rendering for retro game aesthetic:
```css
image-rendering: pixelated;
image-rendering: -moz-crisp-edges;
image-rendering: crisp-edges;
```

## Font System

- **Primary Font**: Mona Sans (loaded via `fonts.css.ts`)
- **Font Classes**: `font-sans` applies the theme font
- **Typography Component**: Automatically applies theme font
- **Font Weights**: 
  - Regular (400) for body text
  - Medium (500) for labels
  - Semibold (600) for headings
  - Bold (700) for emphasis

## Accessibility Considerations

- All color combinations maintain WCAG 2.1 AA contrast ratios
- Focus indicators use theme-appropriate colors
- Dark mode provides sufficient contrast for readability
- Glow effects enhance visibility without being overwhelming
- Connected button groups maintain seamless borders
- All interactive elements use pixelated rendering for consistent retro feel