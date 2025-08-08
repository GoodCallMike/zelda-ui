# Zelda UI

A modern React component library built with TypeScript, featuring accessible components with beautiful design.

## 📚 Documentation

View the component library and documentation at: **https://goodcallmike.github.io/zelda-ui/**

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run Storybook
pnpm storybook

# Build the library
pnpm build
```

## 📦 Installation

```bash
# Install core components
npm install zelda-ui-core

# Install icons
npm install zelda-ui-icons

# Install theme
npm install zelda-ui-theme
```

## 📦 Packages

- **zelda-ui-core** - Core UI components
- **zelda-ui-icons** - Icon library  
- **zelda-ui-theme** - Design tokens and theming

## 🎨 Typography

Zelda UI uses premium fonts for optimal readability.

## 🛠️ Development

```bash
# Run tests
pnpm test

# Run accessibility tests
pnpm test:a11y

# Run visual tests
pnpm test:visual

# Lint code
pnpm lint

# Lint accessibility issues
pnpm lint:a11y

# Format code
pnpm format
```

## ♿ Accessibility

Zelda UI is built with accessibility as a core principle. All components follow WCAG 2.1 guidelines and include comprehensive testing utilities.

- **[Accessibility Guide](docs/ACCESSIBILITY.md)** - Complete accessibility implementation guide
- **[Usage Examples](docs/USAGE_EXAMPLES.md)** - Practical component usage patterns
- **[Integration Examples](docs/INTEGRATION_EXAMPLES.md)** - Real-world interface examples

### Testing Utilities
```typescript
import { quickA11yTest, runAccessibilityTestSuite } from 'zelda-ui-core/utils';

// Quick accessibility test
await quickA11yTest(<YourComponent />);

// Comprehensive testing
await runAccessibilityTestSuite(<YourComponent />, {
  expectedFocusableElements: 2,
  ariaAttributes: { 'button': 'Submit form' },
});
```

### Monospace Typography
```tsx
// Use monospace for code
<code className="font-mono">const hero = 'Link';</code>
<pre className="font-mono">CONFIG_VALUE=123</pre>
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
