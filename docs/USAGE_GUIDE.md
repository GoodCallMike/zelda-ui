# 🗡️ Zelda UI Usage Guide

## Quick Start

### Installation

```bash
# Install the core package
npm install @zelda/core @zelda/icons @zelda/theme

# Or with pnpm
pnpm add @zelda/core @zelda/icons @zelda/theme
```

### Basic Setup

```tsx
import '@zelda/theme/styles.css';
import { Button, Input, Modal } from '@zelda/core';
import { SearchLgIcon } from '@zelda/icons';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Button variant="primary">Start Adventure</Button>
    </div>
  );
}
```

### Dark Mode Setup

```tsx
// Add dark mode toggle
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  
  return (
    <Button 
      variant="text" 
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? '☀️' : '🌙'} Toggle Theme
    </Button>
  );
}
```

## Component Categories

### 🎮 Core Components

#### Buttons
```tsx
// Primary actions
<Button variant="primary">Start Adventure</Button>
<Button variant="primary" icon={ArrowRightIcon}>Continue</Button>

// Secondary actions  
<Button variant="default">View Inventory</Button>
<Button variant="dashed">Add Item</Button>

// Subtle actions
<Button variant="text">Cancel</Button>
<Button variant="link">Learn More</Button>

// Dangerous actions
<Button variant="destructive">Delete Save</Button>
```

#### Form Controls
```tsx
// Text inputs
<Input 
  label="Hero Name" 
  placeholder="Enter your name"
  prefix={<User01Icon className="w-4 h-4" />}
  showCount
  maxLength={20}
/>

// Select dropdowns
<Select
  label="Character Class"
  options={[
    { value: 'warrior', label: '⚔️ Warrior' },
    { value: 'mage', label: '🔮 Mage' },
    { value: 'archer', label: '🏹 Archer' }
  ]}
/>

// Radio groups
<RadioGroup label="Difficulty">
  <Radio value="easy">🌱 Novice</Radio>
  <Radio value="normal">⚔️ Hero</Radio>
  <Radio value="hard">💀 Legend</Radio>
</RadioGroup>

// Checkboxes
<Checkbox>Enable auto-save</Checkbox>
```

#### Overlays
```tsx
// Modals
<Modal 
  open={isOpen} 
  onClose={() => setIsOpen(false)}
  title="⚔️ Create Hero"
  size="large"
>
  <form>
    {/* Form content */}
  </form>
</Modal>

// Toast notifications
Toast.success('Hero created successfully!');
Toast.error('Failed to save game');
Toast.warning('Low health warning');
Toast.info('New quest available');
```

### 🎨 Layout & Typography

```tsx
// Typography
<Typography variant="h1">The Legend of Zelda</Typography>
<Typography variant="h2">Chapter 1: Awakening</Typography>
<Typography variant="body1">Your adventure begins...</Typography>
<Typography variant="caption">Last saved: 2 minutes ago</Typography>

// Dividers
<Divider />
<Divider orientation="vertical" />
```

## Adventure-Themed Patterns

### 🏰 Game Menu Interface

```tsx
function GameMenu() {
  const [activeModal, setActiveModal] = useState(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-triforce-50 to-triforce-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-8">
          <Typography variant="h1" className="text-triforce-700 dark:text-triforce-300">
            🏰 The Legend of Zelda
          </Typography>
          
          <div className="space-y-4 max-w-md mx-auto">
            <Button 
              variant="primary" 
              size="large" 
              className="w-full"
              onClick={() => setActiveModal('newGame')}
            >
              ⚔️ New Adventure
            </Button>
            
            <Button 
              variant="default" 
              size="large" 
              className="w-full"
              onClick={() => setActiveModal('continue')}
            >
              📜 Continue Quest
            </Button>
            
            <Button 
              variant="text" 
              size="large" 
              className="w-full"
              onClick={() => setActiveModal('settings')}
            >
              ⚙️ Settings
            </Button>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <NewGameModal 
        open={activeModal === 'newGame'} 
        onClose={() => setActiveModal(null)} 
      />
    </div>
  );
}
```

### 🎒 Inventory Management

```tsx
function InventoryPanel() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h2">🎒 Hero's Inventory</Typography>
        <Button variant="dashed" icon={PlusIcon}>
          Add Item
        </Button>
      </div>
      
      <div className="space-y-4">
        <Input
          prefix={<SearchLgIcon className="w-4 h-4" />}
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          allowClear
        />
        
        {selectedItems.length > 0 && (
          <div className="p-3 bg-triforce-50 dark:bg-triforce-950 rounded border">
            <div className="flex justify-between items-center">
              <Typography variant="body2">
                {selectedItems.length} items selected
              </Typography>
              <div className="flex gap-2">
                <Button variant="default" size="small">
                  Use Items
                </Button>
                <Button variant="destructive" size="small">
                  Drop Items
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <ItemCard 
              key={item.id} 
              item={item}
              selected={selectedItems.includes(item.id)}
              onSelect={(selected) => {
                setSelectedItems(prev => 
                  selected 
                    ? [...prev, item.id]
                    : prev.filter(id => id !== item.id)
                );
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
```

### 📜 Quest Dialog System

```tsx
function QuestDialog({ quest, onAccept, onDecline }) {
  return (
    <Modal
      open={!!quest}
      onClose={onDecline}
      title={`📜 ${quest?.title}`}
      size="medium"
    >
      <div className="space-y-6">
        {/* NPC Info */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded">
          <div className="w-16 h-16 bg-triforce-500 rounded-full flex items-center justify-center text-2xl">
            {quest?.npc?.avatar}
          </div>
          <div>
            <Typography variant="h4">{quest?.npc?.name}</Typography>
            <Typography variant="body2" className="text-gray-600">
              {quest?.npc?.title}
            </Typography>
          </div>
        </div>
        
        {/* Quest Description */}
        <Typography variant="body1">
          "{quest?.description}"
        </Typography>
        
        {/* Objectives */}
        {quest?.objectives && (
          <div>
            <Typography variant="h4" className="mb-2">Objectives:</Typography>
            <ul className="space-y-1">
              {quest.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-triforce-500">•</span>
                  <Typography variant="body2">{objective}</Typography>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Rewards */}
        {quest?.rewards && (
          <div className="p-3 bg-rupee-50 dark:bg-rupee-950 rounded border">
            <Typography variant="h4" className="mb-2 text-rupee-700 dark:text-rupee-300">
              💰 Rewards:
            </Typography>
            <div className="flex flex-wrap gap-2">
              {quest.rewards.map((reward, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-rupee-100 text-rupee-800 rounded text-sm"
                >
                  {reward}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Actions */}
        <div className="space-y-3">
          <Button 
            variant="primary" 
            className="w-full"
            onClick={onAccept}
          >
            "I accept this quest!"
          </Button>
          <Button 
            variant="default" 
            className="w-full"
            onClick={() => {/* Show more info */}}
          >
            "Tell me more..."
          </Button>
          <Button 
            variant="text" 
            className="w-full"
            onClick={onDecline}
          >
            "Not ready yet."
          </Button>
        </div>
      </div>
    </Modal>
  );
}
```

## Theming & Customization

### Color System

```tsx
// Primary colors (Triforce Gold → Mystic Purple in dark mode)
className="text-triforce-600 dark:text-triforce-400"
className="bg-triforce-50 dark:bg-triforce-950"

// Secondary colors (Rupee Green)
className="text-rupee-600 dark:text-rupee-400"
className="bg-rupee-100 dark:bg-rupee-800"

// Tertiary colors (Hyrule Blue)
className="text-hyrule-600 dark:text-hyrule-400"

// Destructive colors (Ganon Red)
className="text-ganon-600 dark:text-ganon-400"

// Neutral colors
className="text-gray-600 dark:text-gray-400"
```

### Custom CSS Properties

```css
:root {
  /* Primary (Triforce Gold) */
  --triforce-50: #fffbeb;
  --triforce-500: #f59e0b;
  --triforce-900: #78350f;
  
  /* Dark mode overrides */
  --triforce-primary: #6b46c1; /* Purple in dark mode */
}

.dark {
  --triforce-50: #1e1b4b;
  --triforce-500: #8b5cf6;
  --triforce-900: #c4b5fd;
}
```

### Component Customization

```tsx
// Using className prop for utilities
<Button 
  variant="primary"
  className="shadow-lg hover:shadow-xl transition-shadow"
>
  Enhanced Button
</Button>

// Custom styling with CSS modules
<Input 
  className="custom-input"
  style={{ 
    '--input-border-color': 'var(--triforce-500)' 
  }}
/>
```

## Best Practices

### ✅ Do

```tsx
// Use semantic variants
<Button variant="primary">Main Action</Button>
<Button variant="destructive">Delete Item</Button>

// Include testId for testing
<Button testId="save-game-btn">Save Game</Button>

// Provide clear labels
<Input label="Hero Name" placeholder="Enter your hero's name" />

// Use proper ARIA attributes
<Button aria-label="Close dialog">×</Button>

// Handle loading states
<Button disabled={isLoading}>
  {isLoading ? 'Saving...' : 'Save Game'}
</Button>
```

### ❌ Don't

```tsx
// Don't use multiple primary buttons
<Button variant="primary">Action 1</Button>
<Button variant="primary">Action 2</Button> // ❌

// Don't use destructive for non-destructive actions
<Button variant="destructive">Save Game</Button> // ❌

// Don't forget accessibility
<Button>×</Button> // ❌ No aria-label

// Don't use unclear labels
<Button>Click Here</Button> // ❌ Not descriptive
```

## Testing

### Component Testing

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@zelda/core';

test('button handles click events', () => {
  const handleClick = jest.fn();
  
  render(
    <Button testId="test-button" onClick={handleClick}>
      Click Me
    </Button>
  );
  
  const button = screen.getByTestId('test-button');
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Accessibility Testing

```tsx
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('button is accessible', async () => {
  const { container } = render(
    <Button variant="primary">Accessible Button</Button>
  );
  
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Migration Guide

### From v1 to v2

```tsx
// Old API
<Button type="primary">Button</Button>

// New API
<Button variant="primary">Button</Button>
```

### From Other Libraries

```tsx
// From Ant Design
<Button type="primary" /> → <Button variant="primary" />
<Button danger /> → <Button variant="destructive" />

// From Material-UI
<Button color="primary" /> → <Button variant="primary" />
<Button color="secondary" /> → <Button variant="default" />
```

## Performance Tips

### Bundle Optimization

```tsx
// Tree-shake unused components
import { Button } from '@zelda/core/Button';
import { Input } from '@zelda/core/Input';

// Instead of
import { Button, Input } from '@zelda/core'; // Imports everything
```

### Lazy Loading

```tsx
// Lazy load heavy components
const Modal = lazy(() => import('@zelda/core/Modal'));
const Select = lazy(() => import('@zelda/core/Select'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Modal />
    </Suspense>
  );
}
```

## Support & Resources

- **Documentation**: [https://goodcallmike.github.io/zelda-ui/](https://goodcallmike.github.io/zelda-ui/)
- **Storybook**: Interactive component examples
- **GitHub**: Source code and issues
- **NPM**: Package downloads and versions

### Community Examples

Check out these community-created examples:

- Adventure Game Interface
- E-commerce with Zelda Theming  
- Dashboard with Dark Mode
- Mobile-First Design System

---

*May the Triforce guide your development journey! 🔺*