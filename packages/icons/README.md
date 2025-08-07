# @zelda/icons

Icon library for the Zelda design system.

## Installation

```bash
npm install @zelda/icons
# or
pnpm add @zelda/icons
```

## Usage

```tsx
import { CheckIcon, XIcon, ArrowRightIcon } from '@zelda/icons';

function App() {
  return (
    <div>
      <CheckIcon className="w-5 h-5 text-green-500" />
      <XIcon className="w-4 h-4" />
      <ArrowRightIcon style={{ width: 20, height: 20 }} />
    </div>
  );
}
```

## Features

- **500+ icons** - Comprehensive icon set
- **SVG-based** - Scalable vector graphics
- **TypeScript** - Full type support
- **Tree-shakable** - Import only what you need
- **Customizable** - Style with CSS classes or inline styles

## Icon Categories

- Actions (save, edit, delete, etc.)
- Navigation (arrows, chevrons, etc.)
- Communication (mail, phone, chat, etc.)
- Media (play, pause, volume, etc.)
- Files (document, folder, download, etc.)
- And many more...

## Requirements

- React 18.0.0 or higher

## Documentation

Visit [https://goodcallmike.github.io/zelda-ui/](https://goodcallmike.github.io/zelda-ui/) for the complete icon gallery.