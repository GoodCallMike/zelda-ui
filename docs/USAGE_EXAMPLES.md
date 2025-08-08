# 🎮 Zelda UI Usage Examples

Real-world integration patterns and complete interface examples using Zelda UI components.

## 🚀 Quick Start

```tsx
import { Button, Input, Card } from 'zelda-ui-core';
import { ThemeProvider } from 'zelda-ui-theme';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <Input placeholder="Enter your quest name" />
        <Button variant="primary">Start Adventure</Button>
      </Card>
    </ThemeProvider>
  );
}
```

## 📋 Form Examples

### Login Form
```tsx
import { Input, Button, Card, Typography, Alert } from 'zelda-ui-core';
import { useState } from 'react';

function LoginForm() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Login logic
  };

  return (
    <Card className="max-w-md mx-auto">
      <Typography variant="h2" className="mb-6">
        Welcome Back, Hero
      </Typography>
      
      {error && (
        <Alert variant="destructive" className="mb-4">
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="hero@hyrule.com"
          label="Email"
          required
        />
        <Input
          type="password"
          placeholder="Enter your secret"
          label="Password"
          required
        />
        <Button 
          type="submit" 
          variant="primary" 
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Entering...' : 'Enter Hyrule'}
        </Button>
      </form>
    </Card>
  );
}
```

### Settings Form
```tsx
import { Input, Select, Checkbox, Button, Divider } from 'zelda-ui-core';

function SettingsForm() {
  return (
    <div className="max-w-2xl space-y-6">
      <section>
        <Typography variant="h3" className="mb-4">Profile Settings</Typography>
        <div className="grid grid-cols-2 gap-4">
          <Input label="Hero Name" defaultValue="Link" />
          <Select 
            label="Region" 
            options={[
              { value: 'hyrule', label: 'Hyrule' },
              { value: 'termina', label: 'Termina' },
              { value: 'holodrum', label: 'Holodrum' }
            ]} 
          />
        </div>
      </section>

      <Divider />

      <section>
        <Typography variant="h3" className="mb-4">Preferences</Typography>
        <div className="space-y-3">
          <Checkbox label="Enable quest notifications" defaultChecked />
          <Checkbox label="Auto-save progress" defaultChecked />
          <Checkbox label="Show damage numbers" />
        </div>
      </section>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  );
}
```

## 🛒 E-commerce Examples

### Product Card
```tsx
import { Card, Button, Badge, Typography, Avatar } from 'zelda-ui-core';

function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.isNew && (
          <Badge variant="primary" className="absolute top-2 right-2">
            New
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <Typography variant="h4" className="mb-2">
          {product.name}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mb-4">
          {product.description}
        </Typography>
        
        <div className="flex items-center justify-between">
          <Typography variant="h5" className="font-bold">
            {product.price} Rupees
          </Typography>
          <Button variant="primary" size="sm">
            Add to Inventory
          </Button>
        </div>
      </div>
    </Card>
  );
}
```

### Shopping Cart
```tsx
import { Card, Button, Typography, Divider, Badge } from 'zelda-ui-core';

function ShoppingCart({ items, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Card className="w-80">
      <div className="p-4 border-b">
        <Typography variant="h4">
          Inventory ({items.length} items)
        </Typography>
      </div>

      <div className="max-h-64 overflow-y-auto">
        {items.map(item => (
          <div key={item.id} className="p-4 border-b flex justify-between">
            <div>
              <Typography variant="body1">{item.name}</Typography>
              <Typography variant="body2" className="text-gray-600">
                {item.quantity} × {item.price} Rupees
              </Typography>
            </div>
            <Badge variant="outline">
              {item.quantity * item.price}
            </Badge>
          </div>
        ))}
      </div>

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <Typography variant="h5">Total:</Typography>
          <Typography variant="h5" className="font-bold">
            {total} Rupees
          </Typography>
        </div>
        <Button 
          variant="primary" 
          className="w-full"
          onClick={onCheckout}
        >
          Complete Purchase
        </Button>
      </div>
    </Card>
  );
}
```

## 📊 Dashboard Examples

### Stats Dashboard
```tsx
import { Card, Typography, Badge, Button } from 'zelda-ui-core';

function StatsDashboard({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="body2" className="text-gray-600">
              Hearts
            </Typography>
            <Typography variant="h2" className="text-red-500">
              {stats.hearts}/20
            </Typography>
          </div>
          <Badge variant="destructive">Health</Badge>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="body2" className="text-gray-600">
              Rupees
            </Typography>
            <Typography variant="h2" className="text-green-500">
              {stats.rupees.toLocaleString()}
            </Typography>
          </div>
          <Badge variant="success">Currency</Badge>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="body2" className="text-gray-600">
              Quests Complete
            </Typography>
            <Typography variant="h2" className="text-blue-500">
              {stats.questsComplete}/{stats.totalQuests}
            </Typography>
          </div>
          <Badge variant="primary">Progress</Badge>
        </div>
      </Card>
    </div>
  );
}
```

### Activity Feed
```tsx
import { Card, Avatar, Typography, Badge } from 'zelda-ui-core';

function ActivityFeed({ activities }) {
  return (
    <Card>
      <div className="p-4 border-b">
        <Typography variant="h4">Recent Adventures</Typography>
      </div>
      
      <div className="divide-y">
        {activities.map(activity => (
          <div key={activity.id} className="p-4 flex items-start gap-3">
            <Avatar 
              src={activity.user.avatar} 
              alt={activity.user.name}
              size="sm"
            />
            <div className="flex-1">
              <Typography variant="body1">
                <strong>{activity.user.name}</strong> {activity.action}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {activity.timestamp}
              </Typography>
            </div>
            <Badge variant={activity.type === 'quest' ? 'primary' : 'outline'}>
              {activity.type}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}
```

## 🔔 Notification Examples

### Toast Notifications
```tsx
import { Button, useToast } from 'zelda-ui-core';

function NotificationDemo() {
  const { showToast } = useToast();

  const showSuccess = () => {
    showToast({
      title: 'Quest Complete!',
      description: 'You have successfully rescued Princess Zelda.',
      variant: 'success',
      duration: 5000
    });
  };

  const showError = () => {
    showToast({
      title: 'Game Over',
      description: 'You have been defeated by a Moblin.',
      variant: 'destructive',
      duration: 5000
    });
  };

  return (
    <div className="space-x-4">
      <Button onClick={showSuccess}>Complete Quest</Button>
      <Button variant="destructive" onClick={showError}>
        Encounter Enemy
      </Button>
    </div>
  );
}
```

### Alert Banner
```tsx
import { Alert, Button } from 'zelda-ui-core';
import { useState } from 'react';

function MaintenanceBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <Alert variant="warning" className="mb-6">
      <div className="flex items-center justify-between">
        <div>
          <strong>Scheduled Maintenance</strong>
          <p>Hyrule Castle will be under maintenance tonight from 2-4 AM.</p>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setDismissed(true)}
        >
          Dismiss
        </Button>
      </div>
    </Alert>
  );
}
```

## 🎛️ Interactive Examples

### Modal Dialog
```tsx
import { Modal, Button, Input, Typography } from 'zelda-ui-core';
import { useState } from 'react';

function CreateQuestModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [questName, setQuestName] = useState('');

  const handleSubmit = () => {
    // Create quest logic
    setIsOpen(false);
    setQuestName('');
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Create New Quest
      </Button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Create Quest"
      >
        <div className="space-y-4">
          <Input
            label="Quest Name"
            value={questName}
            onChange={(e) => setQuestName(e.target.value)}
            placeholder="Enter quest name..."
          />
          
          <div className="flex justify-end gap-3">
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="primary" 
              onClick={handleSubmit}
              disabled={!questName.trim()}
            >
              Create Quest
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
```

### Tooltip Usage
```tsx
import { Button, Tooltip, Typography } from 'zelda-ui-core';

function InventoryItem({ item }) {
  return (
    <Tooltip
      content={
        <div>
          <Typography variant="body2" className="font-semibold">
            {item.name}
          </Typography>
          <Typography variant="body3" className="text-gray-300">
            {item.description}
          </Typography>
          <Typography variant="body3" className="text-yellow-400">
            Value: {item.value} Rupees
          </Typography>
        </div>
      }
    >
      <Button variant="ghost" className="p-2">
        <img src={item.icon} alt={item.name} className="w-8 h-8" />
      </Button>
    </Tooltip>
  );
}
```

## 🎨 Theme Integration

### Dark Mode Toggle
```tsx
import { Button, useTheme } from 'zelda-ui-core';
import { MoonIcon, SunIcon } from 'zelda-ui-icons';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
```

### Themed Components
```tsx
import { Card, Typography, Button } from 'zelda-ui-core';
import { useTheme } from 'zelda-ui-theme';

function ThemedCard({ children }) {
  const { theme } = useTheme();
  
  return (
    <Card 
      className={`
        ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
        transition-colors duration-200
      `}
    >
      {children}
    </Card>
  );
}
```

## 🧪 Testing Integration

### Component Testing
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button, ThemeProvider } from 'zelda-ui-core';

function TestWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

test('button handles click events', async () => {
  const handleClick = jest.fn();
  
  render(
    <Button onClick={handleClick}>Save Game</Button>,
    { wrapper: TestWrapper }
  );

  const button = screen.getByRole('button', { name: /save game/i });
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Accessibility Testing
```tsx
import { quickA11yTest } from 'zelda-ui-core/utils';
import { LoginForm } from './LoginForm';

test('login form is accessible', async () => {
  await quickA11yTest(<LoginForm />);
});
```

## 📱 Responsive Patterns

### Mobile-First Layout
```tsx
import { Card, Button, Typography } from 'zelda-ui-core';

function ResponsiveHero() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md md:max-w-2xl lg:max-w-4xl">
        <div className="p-6 md:p-8 lg:p-12 text-center">
          <Typography 
            variant="h1" 
            className="text-2xl md:text-4xl lg:text-6xl mb-4"
          >
            Welcome to Hyrule
          </Typography>
          <Typography 
            variant="body1" 
            className="mb-6 md:mb-8 text-gray-600"
          >
            Begin your legendary adventure across the kingdom
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Start Quest
            </Button>
            <Button variant="outline" size="lg">
              Load Game
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
```

## 🔧 Advanced Patterns

### Form Validation
```tsx
import { Input, Button, Alert } from 'zelda-ui-core';
import { useForm } from 'react-hook-form';

function ValidatedForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...register('heroName', { required: 'Hero name is required' })}
        label="Hero Name"
        error={errors.heroName?.message}
      />
      
      <Input
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email address'
          }
        })}
        type="email"
        label="Email"
        error={errors.email?.message}
      />

      <Button type="submit" variant="primary">
        Create Hero
      </Button>
    </form>
  );
}
```

### Data Loading States
```tsx
import { Card, Typography, Button, Skeleton } from 'zelda-ui-core';
import { useState, useEffect } from 'react';

function QuestList() {
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuests()
      .then(setQuests)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="p-4">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        Failed to load quests. Please try again.
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
      {quests.map(quest => (
        <Card key={quest.id} className="p-4">
          <Typography variant="h4">{quest.title}</Typography>
          <Typography variant="body2">{quest.description}</Typography>
          <Button variant="primary" size="sm" className="mt-2">
            Start Quest
          </Button>
        </Card>
      ))}
    </div>
  );
}
```

These examples demonstrate real-world usage patterns that developers can copy and adapt for their own applications. Each example focuses on practical implementation rather than theoretical concepts.