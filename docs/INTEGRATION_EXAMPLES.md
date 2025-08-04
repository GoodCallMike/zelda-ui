# 🎮 Component Integration Examples

## Adventure-Themed Interface Patterns

### 1. Character Creation Form

```tsx
import { Modal, Input, Select, Button, Typography, Radio, RadioGroup } from '@zelda/core';
import { User01Icon, Mail01Icon } from '@zelda/icons';

const CharacterCreationModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: 'warrior',
    difficulty: 'normal'
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="⚔️ Create Your Hero"
      size="large"
    >
      <form className="space-y-6">
        <Input
          label="Hero Name"
          prefix={<User01Icon className="w-4 h-4" />}
          placeholder="Enter your hero's name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          showCount
          maxLength={20}
          testId="hero-name-input"
        />
        
        <Input
          label="Royal Email"
          type="email"
          prefix={<Mail01Icon className="w-4 h-4" />}
          addonAfter="@hyrule.kingdom"
          placeholder="hero"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
        
        <Select
          label="Character Class"
          value={formData.class}
          onChange={(value) => setFormData(prev => ({ ...prev, class: value }))}
          options={[
            { value: 'warrior', label: '⚔️ Warrior - Master of combat and strength' },
            { value: 'mage', label: '🔮 Mage - Wielder of ancient magic' },
            { value: 'archer', label: '🏹 Archer - Expert in ranged combat' },
            { value: 'rogue', label: '🗡️ Rogue - Master of stealth and cunning' }
          ]}
          testId="character-class-select"
        />
        
        <RadioGroup
          label="Difficulty Level"
          value={formData.difficulty}
          onChange={(value) => setFormData(prev => ({ ...prev, difficulty: value }))}
        >
          <Radio value="easy">🌱 Novice - For new adventurers</Radio>
          <Radio value="normal">⚔️ Hero - Balanced challenge</Radio>
          <Radio value="hard">💀 Legend - For experienced warriors</Radio>
        </RadioGroup>
        
        <div className="flex gap-3 justify-end pt-4 border-t">
          <Button variant="default" onClick={onClose}>
            Cancel Quest
          </Button>
          <Button variant="primary" type="submit">
            Begin Adventure
          </Button>
        </div>
      </form>
    </Modal>
  );
};
```

### 2. Inventory Management Interface

```tsx
import { Modal, Input, Button, Typography, Toast } from '@zelda/core';
import { SearchLgIcon, Trash01Icon, PlusIcon } from '@zelda/icons';

const InventoryModal = ({ open, onClose, items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBulkAction = (action) => {
    Toast.success(`${action} completed for ${selectedItems.length} items`);
    setSelectedItems([]);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="🎒 Hero's Inventory"
      size="large"
    >
      <div className="space-y-6">
        {/* Search and Filters */}
        <div className="flex gap-4">
          <Input
            prefix={<SearchLgIcon className="w-4 h-4" />}
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            allowClear
            className="flex-1"
          />
          <Button variant="dashed" icon={PlusIcon}>
            Add Item
          </Button>
        </div>
        
        {/* Bulk Actions */}
        {selectedItems.length > 0 && (
          <div className="p-3 bg-triforce-50 dark:bg-triforce-950 rounded-lg border border-triforce-200 dark:border-triforce-700">
            <div className="flex items-center justify-between">
              <Typography variant="body2">
                {selectedItems.length} items selected
              </Typography>
              <div className="flex gap-2">
                <Button 
                  variant="default" 
                  size="small"
                  onClick={() => handleBulkAction('Use')}
                >
                  Use All
                </Button>
                <Button 
                  variant="destructive" 
                  size="small"
                  icon={Trash01Icon}
                  onClick={() => handleBulkAction('Drop')}
                >
                  Drop All
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-96 overflow-y-auto">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className={cn(
                'p-4 border rounded-lg cursor-pointer transition-colors',
                selectedItems.includes(item.id) 
                  ? 'border-triforce-500 bg-triforce-50 dark:bg-triforce-950' 
                  : 'border-gray-200 hover:border-gray-300'
              )}
              onClick={() => {
                setSelectedItems(prev => 
                  prev.includes(item.id) 
                    ? prev.filter(id => id !== item.id)
                    : [...prev, item.id]
                );
              }}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <Typography variant="body2" className="font-medium">
                  {item.name}
                </Typography>
                <Typography variant="caption" className="text-gray-500">
                  Qty: {item.quantity}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Actions */}
        <div className="flex justify-between items-center pt-4 border-t">
          <Typography variant="body2" className="text-gray-500">
            {filteredItems.length} of {items.length} items
          </Typography>
          <div className="flex gap-2">
            <Button variant="text" onClick={onClose}>
              Close Inventory
            </Button>
            <Button variant="primary">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
```

### 3. Quest Dialog System

```tsx
import { Modal, Button, Typography } from '@zelda/core';

const QuestDialog = ({ quest, open, onClose, onAccept, onDecline }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`📜 ${quest?.title}`}
      size="medium"
      closable={false}
      maskClosable={false}
    >
      <div className="space-y-6">
        {/* NPC Portrait and Name */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="w-16 h-16 bg-gradient-to-br from-triforce-400 to-triforce-600 rounded-full flex items-center justify-center text-2xl">
            {quest?.npc?.avatar}
          </div>
          <div>
            <Typography variant="h4">{quest?.npc?.name}</Typography>
            <Typography variant="body2" className="text-gray-600 dark:text-gray-400">
              {quest?.npc?.title}
            </Typography>
          </div>
        </div>
        
        {/* Quest Description */}
        <div className="space-y-4">
          <Typography variant="body1">
            "{quest?.description}"
          </Typography>
          
          {quest?.objectives && (
            <div>
              <Typography variant="h4" className="mb-2">Objectives:</Typography>
              <ul className="space-y-1">
                {quest.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-triforce-500 mt-1">•</span>
                    <Typography variant="body2">{objective}</Typography>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {quest?.rewards && (
            <div className="p-3 bg-rupee-50 dark:bg-rupee-950 rounded-lg border border-rupee-200 dark:border-rupee-700">
              <Typography variant="h4" className="mb-2 text-rupee-700 dark:text-rupee-300">
                💰 Rewards:
              </Typography>
              <div className="flex flex-wrap gap-2">
                {quest.rewards.map((reward, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-rupee-100 dark:bg-rupee-800 text-rupee-800 dark:text-rupee-200 rounded text-sm"
                  >
                    {reward}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Dialog Choices */}
        <div className="space-y-3">
          <Button 
            variant="primary" 
            className="w-full justify-start"
            onClick={onAccept}
          >
            "I accept this quest, {quest?.npc?.name}!"
          </Button>
          <Button 
            variant="default" 
            className="w-full justify-start"
            onClick={() => {/* Show more info */}}
          >
            "Tell me more about this quest."
          </Button>
          <Button 
            variant="text" 
            className="w-full justify-start"
            onClick={onDecline}
          >
            "I'm not ready for this quest yet."
          </Button>
        </div>
      </div>
    </Modal>
  );
};
```

### 4. Settings Panel with Tabs

```tsx
import { Modal, Input, Select, Button, Typography, Checkbox, Slider } from '@zelda/core';

const SettingsModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('audio');
  const [settings, setSettings] = useState({
    masterVolume: 80,
    musicVolume: 70,
    sfxVolume: 85,
    quality: 'high',
    fullscreen: true,
    vsync: false,
    autoSave: true,
    difficulty: 'normal'
  });

  const tabs = [
    { id: 'audio', label: '🔊 Audio', icon: '🔊' },
    { id: 'graphics', label: '🎨 Graphics', icon: '🎨' },
    { id: 'gameplay', label: '🎮 Gameplay', icon: '🎮' },
    { id: 'controls', label: '⌨️ Controls', icon: '⌨️' }
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="⚙️ Game Settings"
      size="large"
    >
      <div className="flex gap-6">
        {/* Tab Navigation */}
        <div className="w-48 space-y-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'primary' : 'text'}
              className="w-full justify-start"
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </Button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="flex-1 space-y-6">
          {activeTab === 'audio' && (
            <div className="space-y-6">
              <Typography variant="h3">Audio Settings</Typography>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Master Volume: {settings.masterVolume}%
                  </label>
                  <Slider
                    value={settings.masterVolume}
                    onChange={(value) => setSettings(prev => ({ ...prev, masterVolume: value }))}
                    min={0}
                    max={100}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Music Volume: {settings.musicVolume}%
                  </label>
                  <Slider
                    value={settings.musicVolume}
                    onChange={(value) => setSettings(prev => ({ ...prev, musicVolume: value }))}
                    min={0}
                    max={100}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sound Effects: {settings.sfxVolume}%
                  </label>
                  <Slider
                    value={settings.sfxVolume}
                    onChange={(value) => setSettings(prev => ({ ...prev, sfxVolume: value }))}
                    min={0}
                    max={100}
                  />
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'graphics' && (
            <div className="space-y-6">
              <Typography variant="h3">Graphics Settings</Typography>
              
              <div className="space-y-4">
                <Select
                  label="Graphics Quality"
                  value={settings.quality}
                  onChange={(value) => setSettings(prev => ({ ...prev, quality: value }))}
                  options={[
                    { value: 'low', label: 'Low - Better performance' },
                    { value: 'medium', label: 'Medium - Balanced' },
                    { value: 'high', label: 'High - Best visuals' },
                    { value: 'ultra', label: 'Ultra - Maximum quality' }
                  ]}
                />
                
                <div className="space-y-3">
                  <Checkbox
                    checked={settings.fullscreen}
                    onChange={(checked) => setSettings(prev => ({ ...prev, fullscreen: checked }))}
                  >
                    Fullscreen Mode
                  </Checkbox>
                  
                  <Checkbox
                    checked={settings.vsync}
                    onChange={(checked) => setSettings(prev => ({ ...prev, vsync: checked }))}
                  >
                    Vertical Sync (VSync)
                  </Checkbox>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'gameplay' && (
            <div className="space-y-6">
              <Typography variant="h3">Gameplay Settings</Typography>
              
              <div className="space-y-4">
                <Select
                  label="Difficulty Level"
                  value={settings.difficulty}
                  onChange={(value) => setSettings(prev => ({ ...prev, difficulty: value }))}
                  options={[
                    { value: 'easy', label: '🌱 Novice - Relaxed adventure' },
                    { value: 'normal', label: '⚔️ Hero - Standard challenge' },
                    { value: 'hard', label: '💀 Legend - Hardcore mode' }
                  ]}
                />
                
                <Checkbox
                  checked={settings.autoSave}
                  onChange={(checked) => setSettings(prev => ({ ...prev, autoSave: checked }))}
                >
                  Auto-save Progress
                </Checkbox>
              </div>
            </div>
          )}
          
          {activeTab === 'controls' && (
            <div className="space-y-6">
              <Typography variant="h3">Control Settings</Typography>
              
              <div className="space-y-4">
                <Typography variant="body1">
                  Customize your control scheme for the perfect adventure experience.
                </Typography>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Typography variant="h4">Movement</Typography>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Move Forward:</span>
                        <kbd className="px-2 py-1 bg-gray-100 rounded">W</kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Move Backward:</span>
                        <kbd className="px-2 py-1 bg-gray-100 rounded">S</kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Move Left:</span>
                        <kbd className="px-2 py-1 bg-gray-100 rounded">A</kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Move Right:</span>
                        <kbd className="px-2 py-1 bg-gray-100 rounded">D</kbd>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Typography variant="h4">Actions</Typography>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Attack:</span>
                        <kbd className="px-2 py-1 bg-gray-100 rounded">Left Click</kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Block:</span>
                        <kbd className="px-2 py-1 bg-gray-100 rounded">Right Click</kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Use Item:</span>
                        <kbd className="px-2 py-1 bg-gray-100 rounded">Q</kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Interact:</span>
                        <kbd className="px-2 py-1 bg-gray-100 rounded">E</kbd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <div className="flex justify-between items-center pt-6 border-t mt-6">
        <Button variant="text">
          Reset to Defaults
        </Button>
        <div className="flex gap-2">
          <Button variant="default" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary">
            Save Settings
          </Button>
        </div>
      </div>
    </Modal>
  );
};
```

### 5. Data Table with Actions

```tsx
import { Input, Button, Select, Checkbox, Typography } from '@zelda/core';
import { SearchLgIcon, FilterIcon, DownloadIcon } from '@zelda/icons';

const HeroLeaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('level');
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  
  const heroes = [
    { id: 1, name: 'Link', level: 50, class: 'Warrior', location: 'Hyrule Field', status: 'Active' },
    { id: 2, name: 'Zelda', level: 45, class: 'Mage', location: 'Hyrule Castle', status: 'Active' },
    { id: 3, name: 'Ganondorf', level: 99, class: 'Dark Lord', location: 'Death Mountain', status: 'Boss' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Typography variant="h2">🏆 Hero Leaderboard</Typography>
        <div className="flex gap-2">
          <Button variant="default" icon={FilterIcon}>
            Filters
          </Button>
          <Button variant="dashed" icon={DownloadIcon}>
            Export
          </Button>
        </div>
      </div>
      
      {/* Search and Controls */}
      <div className="flex gap-4">
        <Input
          prefix={<SearchLgIcon className="w-4 h-4" />}
          placeholder="Search heroes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          allowClear
          className="flex-1"
        />
        <Select
          value={sortBy}
          onChange={setSortBy}
          options={[
            { value: 'level', label: 'Sort by Level' },
            { value: 'name', label: 'Sort by Name' },
            { value: 'class', label: 'Sort by Class' },
            { value: 'location', label: 'Sort by Location' }
          ]}
          className="w-48"
        />
      </div>
      
      {/* Bulk Actions */}
      {selectedHeroes.length > 0 && (
        <div className="p-4 bg-triforce-50 dark:bg-triforce-950 rounded-lg border border-triforce-200 dark:border-triforce-700">
          <div className="flex items-center justify-between">
            <Typography variant="body2">
              {selectedHeroes.length} heroes selected
            </Typography>
            <div className="flex gap-2">
              <Button variant="default" size="small">
                Send Message
              </Button>
              <Button variant="dashed" size="small">
                Form Party
              </Button>
              <Button variant="destructive" size="small">
                Ban Heroes
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="p-4 text-left">
                <Checkbox
                  checked={selectedHeroes.length === heroes.length}
                  onChange={(checked) => {
                    setSelectedHeroes(checked ? heroes.map(h => h.id) : []);
                  }}
                />
              </th>
              <th className="p-4 text-left">Hero</th>
              <th className="p-4 text-left">Level</th>
              <th className="p-4 text-left">Class</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {heroes.map((hero) => (
              <tr key={hero.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="p-4">
                  <Checkbox
                    checked={selectedHeroes.includes(hero.id)}
                    onChange={(checked) => {
                      setSelectedHeroes(prev => 
                        checked 
                          ? [...prev, hero.id]
                          : prev.filter(id => id !== hero.id)
                      );
                    }}
                  />
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-triforce-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {hero.name[0]}
                    </div>
                    <Typography variant="body1" className="font-medium">
                      {hero.name}
                    </Typography>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-triforce-100 text-triforce-800 rounded text-sm font-medium">
                    Lv. {hero.level}
                  </span>
                </td>
                <td className="p-4">{hero.class}</td>
                <td className="p-4">{hero.location}</td>
                <td className="p-4">
                  <span className={cn(
                    'px-2 py-1 rounded text-sm',
                    hero.status === 'Active' && 'bg-rupee-100 text-rupee-800',
                    hero.status === 'Boss' && 'bg-ganon-100 text-ganon-800'
                  )}>
                    {hero.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-1">
                    <Button variant="text" size="small">
                      View
                    </Button>
                    <Button variant="text" size="small">
                      Message
                    </Button>
                    <Button variant="text" size="small">
                      Challenge
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
```

## Usage Patterns

### Form Validation Integration
```tsx
const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const validate = (fieldName, value) => {
    const rule = validationRules[fieldName];
    if (rule && !rule.test(value)) {
      setErrors(prev => ({ ...prev, [fieldName]: rule.message }));
      return false;
    }
    setErrors(prev => ({ ...prev, [fieldName]: null }));
    return true;
  };
  
  return { values, setValues, errors, validate };
};

// Usage in forms
const { values, setValues, errors, validate } = useFormValidation(
  { heroName: '', email: '' },
  {
    heroName: {
      test: (value) => value.length >= 3,
      message: 'Hero name must be at least 3 characters'
    },
    email: {
      test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Please enter a valid email address'
    }
  }
);
```

### Toast Integration
```tsx
import { Toast } from '@zelda/core';

const handleSaveCharacter = async (characterData) => {
  try {
    Toast.loading('Creating your hero...');
    await saveCharacter(characterData);
    Toast.success('Hero created successfully! Welcome to Hyrule!');
  } catch (error) {
    Toast.error('Failed to create hero. Please try again.');
  }
};
```

### Dark Mode Context
```tsx
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

These examples demonstrate how to combine multiple Zelda UI components to create rich, interactive interfaces that maintain the adventure theme while providing excellent user experience and accessibility.