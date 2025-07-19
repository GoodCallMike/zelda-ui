# @jetstream/icons

Icon components for the Jetstream design system.

## Usage

```tsx
import { CalendarIcon } from '@jetstream/icons';

<CalendarIcon className="w-4 h-4" />
```

## Adding New Icons

1. Drop your SVG files into `assets/svg/`
2. Run `pnpm generate` to create React components
3. Build the package with `pnpm build`

### SVG Requirements

- Use kebab-case filenames (e.g., `calendar-days.svg`)
- SVGs should have a 24x24 viewBox
- Use stroke-based icons for consistency
- Avoid hardcoded colors (use `currentColor`)

### Generated Components

- `calendar.svg` → `CalendarIcon`
- `arrow-left.svg` → `ArrowLeftIcon`
- `user-profile.svg` → `UserProfileIcon`

All icons are 16x16px by default but can be customized via props.