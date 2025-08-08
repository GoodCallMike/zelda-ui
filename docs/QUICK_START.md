# ⚡ Quick Start Guide

Get up and running with Zelda UI in minutes.

## 🚀 Installation

```bash
# Install core components
npm install zelda-ui-core

# Install theme (optional but recommended)
npm install zelda-ui-theme

# Install icons (optional)
npm install zelda-ui-icons
```

## 🎨 Basic Setup

### 1. Wrap your app with ThemeProvider

```tsx
import { ThemeProvider } from 'zelda-ui-theme';
import { Button } from 'zelda-ui-core';

function App() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <Button variant="primary">Start Your Adventure</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### 2. Import components as needed

```tsx
import { 
  Button, 
  Input, 
  Card, 
  Typography,
  Alert 
} from 'zelda-ui-core';

function MyComponent() {
  return (
    <Card className="p-6 max-w-md">
      <Typography variant="h3" className="mb-4">
        Hero Registration
      </Typography>
      
      <div className="space-y-4">
        <Input 
          label="Hero Name" 
          placeholder="Enter your name"
        />
        
        <Button variant="primary" className="w-full">
          Begin Quest
        </Button>
      </div>
    </Card>
  );
}
```

## 🎯 Essential Components

### Buttons
```tsx
import { Button } from 'zelda-ui-core';

// Primary action
<Button variant="primary">Save Game</Button>

// Secondary action  
<Button variant="outline">Cancel</Button>

// Destructive action
<Button variant="destructive">Delete Save</Button>

// With icon
<Button variant="primary" leftIcon={<SaveIcon />}>
  Save Progress
</Button>
```

### Forms
```tsx
import { Input, Select, Checkbox } from 'zelda-ui-core';

<div className="space-y-4">
  <Input 
    label="Email"
    type="email"
    placeholder="hero@hyrule.com"
    required
  />
  
  <Select
    label="Region"
    options={[
      { value: 'hyrule', label: 'Hyrule' },
      { value: 'termina', label: 'Termina' }
    ]}
  />
  
  <Checkbox label="Remember me" />
</div>
```

### Feedback
```tsx
import { Alert, Toast, Modal } from 'zelda-ui-core';

// Alert
<Alert variant="success">
  Quest completed successfully!
</Alert>

// Toast (requires ToastProvider)
const { showToast } = useToast();
showToast({
  title: 'Level Up!',
  description: 'You reached level 25',
  variant: 'success'
});

// Modal
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
  Are you sure you want to delete this save file?
</Modal>
```

## 🎨 Styling & Theming

### Using CSS Classes
Zelda UI works great with Tailwind CSS:

```tsx
<Button 
  variant="primary" 
  className="w-full mt-4 shadow-lg hover:shadow-xl"
>
  Enhanced Button
</Button>
```

### Custom Themes
```tsx
import { ThemeProvider, createTheme } from 'zelda-ui-theme';

const customTheme = createTheme({
  colors: {
    primary: {
      50: '#f0f9ff',
      500: '#3b82f6',
      900: '#1e3a8a'
    }
  }
});

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

## 🔧 TypeScript Support

Zelda UI is built with TypeScript and provides full type safety:

```tsx
import { ButtonProps, InputProps } from 'zelda-ui-core';

// Custom button component
interface CustomButtonProps extends ButtonProps {
  questType: 'main' | 'side' | 'shrine';
}

function QuestButton({ questType, ...props }: CustomButtonProps) {
  return (
    <Button 
      variant={questType === 'main' ? 'primary' : 'outline'}
      {...props}
    />
  );
}
```

## ♿ Accessibility

All components are accessible by default:

```tsx
// Proper labeling
<Input 
  label="Password"
  type="password"
  aria-describedby="password-help"
/>
<div id="password-help">
  Must be at least 8 characters
</div>

// Keyboard navigation
<Button onClick={handleClick}>
  Accessible Button
</Button>

// Screen reader support
<Alert variant="error" role="alert">
  Form submission failed
</Alert>
```

## 🧪 Testing

### Unit Testing
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button, ThemeProvider } from 'zelda-ui-core';

test('button handles clicks', () => {
  const handleClick = jest.fn();
  
  render(
    <ThemeProvider>
      <Button onClick={handleClick}>Click me</Button>
    </ThemeProvider>
  );

  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalled();
});
```

### Accessibility Testing
```tsx
import { quickA11yTest } from 'zelda-ui-core/utils';

test('component is accessible', async () => {
  await quickA11yTest(<MyComponent />);
});
```

## 📱 Responsive Design

Components are mobile-first and responsive:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card className="p-4">
    <Typography variant="h4" className="text-lg md:text-xl lg:text-2xl">
      Responsive Typography
    </Typography>
  </Card>
</div>
```

## 🚀 Next Steps

1. **Explore Components**: Check out the [Storybook documentation](https://goodcallmike.github.io/zelda-ui/)
2. **See Examples**: Review [Usage Examples](USAGE_EXAMPLES.md) for common patterns
3. **Build Interfaces**: Study [Integration Examples](INTEGRATION_EXAMPLES.md) for complete layouts
4. **Learn Accessibility**: Read the [Accessibility Guide](ACCESSIBILITY.md)

## 💡 Pro Tips

- **Start Small**: Begin with basic components like Button and Input
- **Use TypeScript**: Take advantage of full type safety
- **Follow Patterns**: Use the provided examples as templates
- **Test Early**: Include accessibility testing from the start
- **Stay Consistent**: Use the design system tokens for spacing and colors

## 🆘 Need Help?

- 📚 [Full Documentation](https://goodcallmike.github.io/zelda-ui/)
- 🐛 [Report Issues](https://github.com/goodcallmike/zelda-ui/issues)
- 💬 [Discussions](https://github.com/goodcallmike/zelda-ui/discussions)

Happy coding, Hero! 🗡️✨