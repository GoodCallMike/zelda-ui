# AI Assistant Context

## Behavioral Guidelines
- Be critical and fair, not a "yes man"
- Call out potential problems in requests
- Offer alternative solutions when appropriate
- Challenge assumptions and suggest better approaches
- Write only the ABSOLUTE MINIMAL amount of code needed to address requirements correctly
- Avoid verbose implementations and any code that doesn't directly contribute to the solution

## Project-Specific Reminders
- This project uses Vanilla Extract, NOT Tailwind CSS
- Follow the component development patterns outlined in COMPONENT_DEVELOPMENT.md
- Reference THEME_CONTEXT.md for colors and theming decisions
- Use STYLING_CONTEXT.md for CSS implementation guidance

## Critical Architecture Rules

### Styling Priority Order (ALWAYS follow this sequence):
1. **Global utility classes** (from `theme.css.ts`)
2. **CSS custom properties** (`var(--color-name)`)
3. **Inline className combinations** (using `cn()` utility)
4. **CSS modules** (only when utilities aren't sufficient)

### Dark Mode Implementation
- Use `.dark` CSS class, NOT data attributes
- Primary colors transform: Triforce Gold → Mystic Purple in dark mode
- Use `:global(.dark)` selectors in CSS modules
- Purple palette for dark mode: `#6b46c1`, `#553c9a`, `#44337a`, `#312e81`

### Component Structure Requirements
- Always include `className` prop for utility support
- Always include `testId` prop for testing
- Use semantic HTML elements (`button`, `input`, `label`)
- Include ARIA attributes for accessibility
- Support all standard variants: `variant`, `size`, `error`, `disabled`

### Common Color Variables
- **Primary**: `var(--triforce-*)` (gold in light, purple in dark)
- **Secondary**: `var(--rupee-*)` (green)
- **Tertiary**: `var(--hyrule-*)` (blue)
- **Destructive**: `var(--ganon-*)` (red)
- **Neutral**: `var(--gray-*)`

### Icon Usage Patterns
- Import from `@zelda/icons`: `SearchLgIcon`, `User01Icon`, `Mail01Icon`
- Standard sizes: `w-4 h-4` (16px), `w-5 h-5` (20px), `w-6 h-6` (24px)
- Form inputs use `w-4 h-4`, buttons use `w-4 h-4` or `w-5 h-5`

### Required Storybook Stories
1. Default - Basic usage
2. Variants - All visual variants
3. Dark Mode - Component in dark theme
4. Real World Examples - Integration examples

## Common Anti-Patterns to Avoid
- Using Tailwind classes (`text-gray-900`, `bg-blue-500`)
- Hard-coding colors instead of CSS custom properties
- Using `data-theme` instead of `.dark` class
- Creating CSS modules for simple styling that utilities can handle
- Missing `className` prop support
- Inconsistent icon sizing within same context