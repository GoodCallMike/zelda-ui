import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from './Button';
import { Typography } from '../Typography';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { Toast } from '../Toast';
import { SearchLgIcon, PlusIcon, Trash01Icon, ArrowRightIcon, Settings01Icon, HeartIcon } from '@zelda/icons';

const meta: Meta<typeof Button> = {
  title: 'Playground/Button Interactive',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# 🎮 Interactive Button Playground

Experiment with all Button component features in real adventure scenarios. This playground demonstrates:

- **Live Interactions** - See how buttons behave in real interfaces
- **State Management** - Interactive examples with React state
- **Integration Patterns** - Buttons working with other components
- **Adventure Theming** - Zelda-inspired use cases and styling

## Features Demonstrated

### Core Functionality
- All variants (primary, default, dashed, text, link, destructive)
- Icon positioning and combinations
- Loading and disabled states
- Size variations

### Real-World Integration
- Form submissions with validation
- Modal triggers and confirmations
- Toast notifications
- Complex user flows

### Adventure Scenarios
- Character creation workflows
- Inventory management actions
- Quest acceptance dialogs
- Combat and game mechanics

Use the controls below to experiment with different configurations and see how they work in context.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link', 'destructive'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Icon position',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InteractivePlayground: Story = {
  render: (args) => {
    const [clickCount, setClickCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleClick = () => {
      setClickCount(prev => prev + 1);
      if (args.variant === 'primary') {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000);
      }
    };
    
    return (
      <div className="space-y-6">
        <div className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-800">
          <Typography variant="h3" className="mb-4">🎯 Interactive Button</Typography>
          <div className="space-y-4">
            <Button
              {...args}
              onClick={handleClick}
              disabled={args.disabled || isLoading}
              icon={args.variant === 'primary' ? ArrowRightIcon : SearchLgIcon}
            >
              {isLoading ? 'Processing...' : args.children || 'Click Me!'}
            </Button>
            
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>Clicked {clickCount} times</p>
              {isLoading && <p>⏳ Loading state active...</p>}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <Typography variant="h4" className="mb-3">🎨 Style Preview</Typography>
            <div className="space-y-2">
              <p className="text-sm"><strong>Variant:</strong> {args.variant}</p>
              <p className="text-sm"><strong>Size:</strong> {args.size}</p>
              <p className="text-sm"><strong>Disabled:</strong> {args.disabled ? 'Yes' : 'No'}</p>
              <p className="text-sm"><strong>Icon Position:</strong> {args.iconPosition}</p>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <Typography variant="h4" className="mb-3">💡 Usage Tip</Typography>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {args.variant === 'primary' && "Perfect for main actions like 'Start Adventure' or 'Save Game'"}
              {args.variant === 'default' && "Great for secondary actions like 'View Details' or 'Cancel'"}
              {args.variant === 'destructive' && "Use for dangerous actions like 'Delete Save' or 'Reset Progress'"}
              {args.variant === 'dashed' && "Ideal for add/upload actions like 'Add Item' or 'Upload Save'"}
              {args.variant === 'text' && "Perfect for subtle actions like 'Skip' or 'Learn More'"}
              {args.variant === 'link' && "Best for navigation like 'View Map' or 'Credits'"}
            </div>
          </div>
        </div>
      </div>
    );
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    iconPosition: 'left',
    children: 'Start Adventure',
  },
};

export const AdventureWorkflow: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState('menu');
    const [heroName, setHeroName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    
    const handleCreateHero = () => {
      if (!heroName.trim()) {
        Toast.error('Please enter a hero name!');
        return;
      }
      
      setIsCreating(true);
      setTimeout(() => {
        setIsCreating(false);
        setCurrentStep('success');
        Toast.success(`Welcome to Hyrule, ${heroName}!`);
      }, 2000);
    };
    
    const resetWorkflow = () => {
      setCurrentStep('menu');
      setHeroName('');
      setShowModal(false);
      setIsCreating(false);
    };
    
    return (
      <div className="space-y-6">
        <div className="p-6 border rounded-lg">
          <Typography variant="h3" className="mb-6">🏰 Adventure Creation Workflow</Typography>
          
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep === 'menu' ? 'bg-triforce-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <div className="w-16 h-1 bg-gray-200"></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep === 'create' ? 'bg-triforce-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <div className="w-16 h-1 bg-gray-200"></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep === 'success' ? 'bg-rupee-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
            </div>
          </div>
          
          {/* Step Content */}
          {currentStep === 'menu' && (
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <Typography variant="h2">🗡️ Welcome to Hyrule</Typography>
                <Typography variant="body1" className="text-gray-600 dark:text-gray-400">
                  Your legendary adventure awaits. Choose your path, brave hero.
                </Typography>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="large"
                  icon={PlusIcon}
                  onClick={() => setCurrentStep('create')}
                >
                  Create New Hero
                </Button>
                <Button 
                  variant="default" 
                  size="large"
                  onClick={() => Toast.info('Load game feature coming soon!')}
                >
                  Continue Adventure
                </Button>
                <Button 
                  variant="text" 
                  size="large"
                  icon={Settings01Icon}
                  onClick={() => setShowModal(true)}
                >
                  Settings
                </Button>
              </div>
            </div>
          )}
          
          {currentStep === 'create' && (
            <div className="max-w-md mx-auto space-y-6">
              <div className="text-center space-y-2">
                <Typography variant="h2">⚔️ Create Your Hero</Typography>
                <Typography variant="body2" className="text-gray-600 dark:text-gray-400">
                  Every legend begins with a name
                </Typography>
              </div>
              
              <div className="space-y-4">
                <Input
                  label="Hero Name"
                  placeholder="Enter your hero's name"
                  value={heroName}
                  onChange={(e) => setHeroName(e.target.value)}
                  showCount
                  maxLength={20}
                  status={heroName.length > 0 && heroName.length < 3 ? 'error' : undefined}
                />
                
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    onClick={() => setCurrentStep('menu')}
                    disabled={isCreating}
                  >
                    Back
                  </Button>
                  <Button 
                    variant="primary" 
                    className="flex-1"
                    onClick={handleCreateHero}
                    disabled={isCreating || heroName.length < 3}
                    icon={isCreating ? undefined : ArrowRightIcon}
                    iconPosition="right"
                  >
                    {isCreating ? 'Creating Hero...' : 'Begin Adventure'}
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 'success' && (
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <div className="text-6xl">🎉</div>
                <Typography variant="h2">Welcome, {heroName}!</Typography>
                <Typography variant="body1" className="text-gray-600 dark:text-gray-400">
                  Your hero has been created successfully. The kingdom of Hyrule awaits your arrival.
                </Typography>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="large"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                  onClick={() => Toast.success('Starting your adventure!')}
                >
                  Enter Hyrule
                </Button>
                <Button 
                  variant="default" 
                  onClick={resetWorkflow}
                >
                  Create Another Hero
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Settings Modal */}
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          title="⚙️ Game Settings"
          size="medium"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <Typography variant="h4">Audio Settings</Typography>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Master Volume</span>
                  <input type="range" className="w-32" defaultValue="80" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Music Volume</span>
                  <input type="range" className="w-32" defaultValue="70" />
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 justify-end">
              <Button variant="default" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => {
                setShowModal(false);
                Toast.success('Settings saved!');
              }}>
                Save Settings
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete adventure workflow showing buttons in context with state management, form validation, and user feedback.',
      },
    },
  },
};

export const ButtonStates: Story = {
  render: () => {
    const [states, setStates] = useState({
      loading: false,
      disabled: false,
      success: false,
      error: false,
    });
    
    const simulateAction = (type: string) => {
      setStates(prev => ({ ...prev, [type]: true }));
      
      setTimeout(() => {
        setStates(prev => ({ ...prev, [type]: false }));
        if (type === 'loading') {
          Toast.success('Action completed!');
        }
      }, 2000);
    };
    
    return (
      <div className="space-y-8">
        <div className="p-6 border rounded-lg">
          <Typography variant="h3" className="mb-6">🎭 Interactive Button States</Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Typography variant="h4">State Controls</Typography>
              <div className="space-y-3">
                <Button 
                  variant="primary"
                  onClick={() => simulateAction('loading')}
                  disabled={states.loading}
                >
                  {states.loading ? 'Loading...' : 'Trigger Loading'}
                </Button>
                
                <Button 
                  variant="default"
                  onClick={() => setStates(prev => ({ ...prev, disabled: !prev.disabled }))}
                >
                  {states.disabled ? 'Enable' : 'Disable'} Buttons
                </Button>
                
                <Button 
                  variant="destructive"
                  onClick={() => simulateAction('error')}
                  disabled={states.error}
                >
                  {states.error ? 'Error Active' : 'Trigger Error'}
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <Typography variant="h4">State Examples</Typography>
              <div className="space-y-3">
                <Button 
                  variant="primary" 
                  disabled={states.disabled || states.loading}
                  icon={states.loading ? undefined : HeartIcon}
                >
                  {states.loading ? 'Saving...' : 'Save Game'}
                </Button>
                
                <Button 
                  variant="default" 
                  disabled={states.disabled}
                >
                  View Inventory
                </Button>
                
                <Button 
                  variant="destructive" 
                  disabled={states.disabled}
                  icon={Trash01Icon}
                >
                  Delete Save
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-800">
          <Typography variant="h4" className="mb-4">📊 Current State</Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className={`p-3 rounded ${states.loading ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
              <strong>Loading:</strong> {states.loading ? 'Active' : 'Inactive'}
            </div>
            <div className={`p-3 rounded ${states.disabled ? 'bg-gray-200 text-gray-700' : 'bg-green-100 text-green-800'}`}>
              <strong>Disabled:</strong> {states.disabled ? 'Yes' : 'No'}
            </div>
            <div className={`p-3 rounded ${states.success ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
              <strong>Success:</strong> {states.success ? 'Active' : 'Inactive'}
            </div>
            <div className={`p-3 rounded ${states.error ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'}`}>
              <strong>Error:</strong> {states.error ? 'Active' : 'Inactive'}
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of button states including loading, disabled, success, and error states with real-time controls.',
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [focusedButton, setFocusedButton] = useState<string | null>(null);
    const [announcements, setAnnouncements] = useState<string[]>([]);
    
    const addAnnouncement = (message: string) => {
      setAnnouncements(prev => [...prev.slice(-4), message]);
    };
    
    const handleButtonAction = (action: string, buttonName: string) => {
      addAnnouncement(`${action}: ${buttonName}`);
      Toast.info(`${action}: ${buttonName}`);
    };
    
    return (
      <div className="space-y-6">
        <div className="p-6 border rounded-lg">
          <Typography variant="h3" className="mb-4">♿ Accessibility Features</Typography>
          <Typography variant="body1" className="mb-6 text-gray-600 dark:text-gray-400">
            All buttons include proper ARIA attributes, keyboard navigation, and screen reader support.
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Typography variant="h4">Keyboard Navigation</Typography>
              <div className="space-y-2">
                <Button 
                  variant="primary"
                  onFocus={() => setFocusedButton('primary')}
                  onBlur={() => setFocusedButton(null)}
                  onClick={() => handleButtonAction('Activated', 'Primary Action')}
                  aria-label="Primary action button - Start your adventure"
                  testId="primary-action-btn"
                >
                  Start Adventure
                </Button>
                
                <Button 
                  variant="default"
                  onFocus={() => setFocusedButton('secondary')}
                  onBlur={() => setFocusedButton(null)}
                  onClick={() => handleButtonAction('Activated', 'Secondary Action')}
                  aria-label="Secondary action button - View game settings"
                  testId="secondary-action-btn"
                >
                  Game Settings
                </Button>
                
                <Button 
                  variant="destructive"
                  onFocus={() => setFocusedButton('destructive')}
                  onBlur={() => setFocusedButton(null)}
                  onClick={() => handleButtonAction('Activated', 'Destructive Action')}
                  aria-label="Destructive action button - Delete save file"
                  testId="destructive-action-btn"
                >
                  Delete Save
                </Button>
                
                <Button 
                  variant="text"
                  disabled
                  aria-label="Disabled button - Feature not available"
                  testId="disabled-btn"
                >
                  Disabled Action
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <Typography variant="h4">Screen Reader Info</Typography>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded border">
                <Typography variant="body2" className="mb-2">
                  <strong>Currently Focused:</strong> {focusedButton || 'None'}
                </Typography>
                <Typography variant="body2" className="mb-2">
                  <strong>Recent Announcements:</strong>
                </Typography>
                <div className="text-sm space-y-1 max-h-24 overflow-y-auto">
                  {announcements.length === 0 ? (
                    <p className="text-gray-500">No announcements yet</p>
                  ) : (
                    announcements.map((announcement, index) => (
                      <p key={index} className="text-gray-700 dark:text-gray-300">
                        • {announcement}
                      </p>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700 rounded-lg">
          <Typography variant="h4" className="mb-2 text-blue-800 dark:text-blue-200">
            💡 Accessibility Tips
          </Typography>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• Use Tab key to navigate between buttons</li>
            <li>• Press Space or Enter to activate focused button</li>
            <li>• All buttons have descriptive aria-labels</li>
            <li>• testId attributes support automated testing</li>
            <li>• Focus indicators are clearly visible</li>
            <li>• Disabled buttons are properly announced</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features demonstration including keyboard navigation, ARIA attributes, focus management, and screen reader support.',
      },
    },
  },
};