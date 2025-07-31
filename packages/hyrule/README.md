# @zelda/hyrule 🗡️

Secret Zelda-themed components for the Zelda UI library.

## Installation

```bash
npm install @zelda/hyrule
# or
pnpm add @zelda/hyrule
```

## Usage

```tsx
import { HyruleButton } from '@zelda/hyrule';

function App() {
  return (
    <div>
      <HyruleButton variant="triforce">
        ⚡ Claim the Triforce
      </HyruleButton>
      
      <HyruleButton variant="rupee">
        💎 Collect Rupees
      </HyruleButton>
      
      <HyruleButton variant="master-sword">
        ⚔️ Draw Master Sword
      </HyruleButton>
    </div>
  );
}
```

## Components

### HyruleButton

Zelda-themed button component with mystical variants:

- **triforce**: Golden Triforce power
- **rupee**: Emerald rupee gem
- **master-sword**: Master Sword blue
- **heart**: Heart container red
- **sheikah**: Sheikah technology purple

## Theme Integration

Works best with the Hyrule theme:

```tsx
// Activate Hyrule theme
document.documentElement.setAttribute('data-theme', 'hyrule');
```

## License

MIT