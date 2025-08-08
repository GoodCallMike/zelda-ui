# 🏰 Zelda UI Integration Examples

Complete interface patterns and application layouts using Zelda UI components.

## 🎮 Gaming Dashboard

### Complete Game Interface
```tsx
import { 
  Card, Button, Typography, Badge, Avatar, 
  Modal, Input, Select, Tooltip, Alert 
} from 'zelda-ui-core';
import { HeartIcon, CoinIcon, SwordIcon } from 'zelda-ui-icons';
import { useState } from 'react';

function GameDashboard() {
  const [showInventory, setShowInventory] = useState(false);
  const [player] = useState({
    name: 'Link',
    level: 42,
    hearts: 18,
    maxHearts: 20,
    rupees: 1250,
    location: 'Hyrule Field'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-green-900 p-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Avatar src="/hero-avatar.png" alt={player.name} size="lg" />
          <div>
            <Typography variant="h3" className="text-white">
              {player.name}
            </Typography>
            <Typography variant="body2" className="text-blue-200">
              Level {player.level} • {player.location}
            </Typography>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Tooltip content="Health">
            <div className="flex items-center gap-2 text-red-400">
              <HeartIcon className="w-5 h-5" />
              <span>{player.hearts}/{player.maxHearts}</span>
            </div>
          </Tooltip>
          
          <Tooltip content="Currency">
            <div className="flex items-center gap-2 text-yellow-400">
              <CoinIcon className="w-5 h-5" />
              <span>{player.rupees.toLocaleString()}</span>
            </div>
          </Tooltip>
          
          <Button 
            variant="primary" 
            onClick={() => setShowInventory(true)}
          >
            Inventory
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quest Panel */}
        <Card className="lg:col-span-2">
          <div className="p-6">
            <Typography variant="h4" className="mb-4">Active Quests</Typography>
            <div className="space-y-4">
              <QuestItem 
                title="Rescue Princess Zelda"
                description="Infiltrate Ganon's castle and save the princess"
                progress={75}
                reward="1000 XP + Master Sword"
                priority="high"
              />
              <QuestItem 
                title="Collect 10 Korok Seeds"
                description="Find hidden Koroks throughout Hyrule"
                progress={40}
                reward="Inventory Expansion"
                priority="medium"
              />
            </div>
          </div>
        </Card>

        {/* Stats Panel */}
        <div className="space-y-6">
          <Card className="p-6">
            <Typography variant="h5" className="mb-4">Combat Stats</Typography>
            <div className="space-y-3">
              <StatBar label="Attack" value={85} max={100} color="red" />
              <StatBar label="Defense" value={72} max={100} color="blue" />
              <StatBar label="Speed" value={90} max={100} color="green" />
              <StatBar label="Magic" value={45} max={100} color="purple" />
            </div>
          </Card>

          <Card className="p-6">
            <Typography variant="h5" className="mb-4">Recent Achievements</Typography>
            <div className="space-y-2">
              <Achievement 
                title="Dragon Slayer" 
                description="Defeated your first dragon"
                icon="🐉"
              />
              <Achievement 
                title="Treasure Hunter" 
                description="Found 50 treasure chests"
                icon="💰"
              />
            </div>
          </Card>
        </div>
      </div>

      {/* Inventory Modal */}
      <InventoryModal 
        isOpen={showInventory}
        onClose={() => setShowInventory(false)}
      />
    </div>
  );
}

function QuestItem({ title, description, progress, reward, priority }) {
  const priorityColors = {
    high: 'destructive',
    medium: 'warning',
    low: 'default'
  };

  return (
    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <Typography variant="h6">{title}</Typography>
        <Badge variant={priorityColors[priority]}>
          {priority} priority
        </Badge>
      </div>
      <Typography variant="body2" className="text-gray-600 mb-3">
        {description}
      </Typography>
      <div className="flex items-center justify-between">
        <div className="flex-1 mr-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <Typography variant="body3" className="text-green-600 font-medium">
          {reward}
        </Typography>
      </div>
    </div>
  );
}
```

## 🛍️ E-commerce Store

### Complete Shopping Experience
```tsx
import { 
  Card, Button, Typography, Badge, Input, 
  Select, Checkbox, Modal, Alert 
} from 'zelda-ui-core';
import { SearchIcon, FilterIcon, CartIcon } from 'zelda-ui-icons';
import { useState } from 'react';

function ItemShop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'weapons', label: 'Weapons' },
    { value: 'armor', label: 'Armor' },
    { value: 'potions', label: 'Potions' },
    { value: 'materials', label: 'Materials' }
  ];

  const items = [
    {
      id: 1,
      name: 'Master Sword',
      category: 'weapons',
      price: 5000,
      description: 'The legendary blade that seals the darkness',
      image: '/master-sword.png',
      rarity: 'legendary',
      inStock: true
    },
    {
      id: 2,
      name: 'Hylian Shield',
      category: 'armor',
      price: 3000,
      description: 'A sturdy shield bearing the Hylian crest',
      image: '/hylian-shield.png',
      rarity: 'epic',
      inStock: true
    },
    // More items...
  ];

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Typography variant="h2" className="text-blue-900">
              Hyrule Item Shop
            </Typography>
            
            <Button 
              variant="outline"
              onClick={() => setShowCart(true)}
              className="relative"
            >
              <CartIcon className="w-5 h-5 mr-2" />
              Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              {cart.length > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 min-w-[20px] h-5"
                >
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search for items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              leftIcon={<SearchIcon className="w-4 h-4" />}
            />
          </div>
          <Select
            value={selectedCategory}
            onChange={setSelectedCategory}
            options={categories}
            className="md:w-48"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <ProductCard 
              key={item.id}
              item={item}
              onAddToCart={() => addToCart(item)}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Typography variant="h4" className="text-gray-500 mb-2">
              No items found
            </Typography>
            <Typography variant="body1" className="text-gray-400">
              Try adjusting your search or filters
            </Typography>
          </div>
        )}
      </div>

      {/* Shopping Cart Modal */}
      <ShoppingCartModal 
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

function ProductCard({ item, onAddToCart }) {
  const rarityColors = {
    common: 'default',
    uncommon: 'success',
    rare: 'primary',
    epic: 'warning',
    legendary: 'destructive'
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <Badge 
          variant={rarityColors[item.rarity]}
          className="absolute top-2 right-2"
        >
          {item.rarity}
        </Badge>
      </div>
      
      <div className="p-4">
        <Typography variant="h5" className="mb-2">
          {item.name}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mb-4 line-clamp-2">
          {item.description}
        </Typography>
        
        <div className="flex items-center justify-between">
          <Typography variant="h6" className="text-green-600 font-bold">
            {item.price} Rupees
          </Typography>
          <Button 
            variant="primary" 
            size="sm"
            onClick={onAddToCart}
            disabled={!item.inStock}
          >
            {item.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>
    </Card>
  );
}
```

## 📊 Admin Dashboard

### Analytics & Management Interface
```tsx
import { 
  Card, Typography, Button, Badge, Input, 
  Select, Table, Modal, Alert 
} from 'zelda-ui-core';
import { 
  TrendingUpIcon, UsersIcon, ShoppingBagIcon, 
  SettingsIcon, ExportIcon 
} from 'zelda-ui-icons';
import { useState } from 'react';

function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('7d');
  const [showUserModal, setShowUserModal] = useState(false);

  const stats = [
    {
      title: 'Total Revenue',
      value: '125,430',
      unit: 'Rupees',
      change: '+12.5%',
      trend: 'up',
      icon: TrendingUpIcon,
      color: 'green'
    },
    {
      title: 'Active Users',
      value: '2,847',
      unit: 'Heroes',
      change: '+8.2%',
      trend: 'up',
      icon: UsersIcon,
      color: 'blue'
    },
    {
      title: 'Orders',
      value: '1,234',
      unit: 'Items',
      change: '-2.1%',
      trend: 'down',
      icon: ShoppingBagIcon,
      color: 'orange'
    }
  ];

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'Link',
      item: 'Master Sword',
      amount: 5000,
      status: 'completed',
      date: '2024-01-15'
    },
    {
      id: 'ORD-002',
      customer: 'Zelda',
      item: 'Bow of Light',
      amount: 3500,
      status: 'pending',
      date: '2024-01-15'
    },
    // More orders...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Typography variant="h2">Admin Dashboard</Typography>
              <Typography variant="body2" className="text-gray-600">
                Manage your Hyrule marketplace
              </Typography>
            </div>
            
            <div className="flex items-center gap-4">
              <Select
                value={timeRange}
                onChange={setTimeRange}
                options={[
                  { value: '24h', label: 'Last 24 hours' },
                  { value: '7d', label: 'Last 7 days' },
                  { value: '30d', label: 'Last 30 days' },
                  { value: '90d', label: 'Last 90 days' }
                ]}
              />
              <Button variant="outline" leftIcon={<ExportIcon />}>
                Export
              </Button>
              <Button variant="primary" leftIcon={<SettingsIcon />}>
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders Table */}
          <Card className="lg:col-span-2">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <Typography variant="h4">Recent Orders</Typography>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map(order => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Typography variant="body2" className="font-medium">
                          {order.id}
                        </Typography>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Typography variant="body2">
                          {order.customer}
                        </Typography>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Typography variant="body2">
                          {order.item}
                        </Typography>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Typography variant="body2" className="font-medium">
                          {order.amount} Rupees
                        </Typography>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge 
                          variant={order.status === 'completed' ? 'success' : 'warning'}
                        >
                          {order.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6">
              <Typography variant="h5" className="mb-4">Quick Actions</Typography>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setShowUserModal(true)}
                >
                  Add New User
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Create Product
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Manage Inventory
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <Typography variant="h5" className="mb-4">System Status</Typography>
              <div className="space-y-3">
                <StatusItem label="API Status" status="operational" />
                <StatusItem label="Database" status="operational" />
                <StatusItem label="Payment Gateway" status="degraded" />
                <StatusItem label="CDN" status="operational" />
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      <AddUserModal 
        isOpen={showUserModal}
        onClose={() => setShowUserModal(false)}
      />
    </div>
  );
}

function StatCard({ title, value, unit, change, trend, icon: Icon, color }) {
  const colorClasses = {
    green: 'text-green-600 bg-green-100',
    blue: 'text-blue-600 bg-blue-100',
    orange: 'text-orange-600 bg-orange-100'
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <Typography variant="body2" className="text-gray-600 mb-1">
            {title}
          </Typography>
          <Typography variant="h3" className="mb-1">
            {value}
          </Typography>
          <Typography variant="body3" className="text-gray-500">
            {unit}
          </Typography>
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      <div className="mt-4 flex items-center">
        <Badge 
          variant={trend === 'up' ? 'success' : 'destructive'}
          className="text-xs"
        >
          {change}
        </Badge>
        <Typography variant="body3" className="text-gray-500 ml-2">
          vs last period
        </Typography>
      </div>
    </Card>
  );
}
```

## 📱 Mobile App Layout

### Responsive Mobile Interface
```tsx
import { 
  Card, Button, Typography, Badge, Input, 
  Avatar, Modal, BottomSheet 
} from 'zelda-ui-core';
import { 
  HomeIcon, SearchIcon, HeartIcon, 
  UserIcon, MenuIcon 
} from 'zelda-ui-icons';
import { useState } from 'react';

function MobileApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto relative">
      {/* Status Bar */}
      <div className="bg-blue-900 text-white px-4 py-2 flex justify-between text-sm">
        <span>9:41 AM</span>
        <span>Hyrule Network</span>
        <span>100%</span>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setShowMenu(true)}
        >
          <MenuIcon className="w-5 h-5" />
        </Button>
        
        <Typography variant="h5">Adventure Log</Typography>
        
        <Avatar src="/hero-avatar.png" alt="Hero" size="sm" />
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 pb-20">
        {activeTab === 'home' && <HomeContent />}
        {activeTab === 'search' && <SearchContent />}
        {activeTab === 'favorites' && <FavoritesContent />}
        {activeTab === 'profile' && <ProfileContent />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t">
        <div className="flex">
          <TabButton
            icon={HomeIcon}
            label="Home"
            active={activeTab === 'home'}
            onClick={() => setActiveTab('home')}
          />
          <TabButton
            icon={SearchIcon}
            label="Search"
            active={activeTab === 'search'}
            onClick={() => setActiveTab('search')}
          />
          <TabButton
            icon={HeartIcon}
            label="Favorites"
            active={activeTab === 'favorites'}
            onClick={() => setActiveTab('favorites')}
          />
          <TabButton
            icon={UserIcon}
            label="Profile"
            active={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
          />
        </div>
      </nav>

      {/* Side Menu */}
      <BottomSheet
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        title="Menu"
      >
        <div className="space-y-2 p-4">
          <Button variant="ghost" className="w-full justify-start">
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Help & Support
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            About
          </Button>
          <Button variant="destructive" className="w-full justify-start">
            Sign Out
          </Button>
        </div>
      </BottomSheet>
    </div>
  );
}

function HomeContent() {
  return (
    <div className="space-y-6">
      {/* Hero Stats */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Typography variant="h5">Hero Status</Typography>
          <Badge variant="success">Active</Badge>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <Typography variant="h4" className="text-red-500">18</Typography>
            <Typography variant="body3" className="text-gray-600">Hearts</Typography>
          </div>
          <div>
            <Typography variant="h4" className="text-blue-500">42</Typography>
            <Typography variant="body3" className="text-gray-600">Level</Typography>
          </div>
          <div>
            <Typography variant="h4" className="text-green-500">1.2K</Typography>
            <Typography variant="body3" className="text-gray-600">Rupees</Typography>
          </div>
        </div>
      </Card>

      {/* Current Quest */}
      <Card className="p-4">
        <Typography variant="h6" className="mb-3">Current Quest</Typography>
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-xl">🏰</span>
          </div>
          <div className="flex-1">
            <Typography variant="body1" className="font-medium mb-1">
              Rescue Princess Zelda
            </Typography>
            <Typography variant="body2" className="text-gray-600 mb-2">
              Infiltrate Ganon's castle
            </Typography>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full w-3/4" />
            </div>
            <Typography variant="body3" className="text-gray-500 mt-1">
              75% complete
            </Typography>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="primary" className="h-20 flex-col">
          <span className="text-2xl mb-1">⚔️</span>
          <span>Battle</span>
        </Button>
        <Button variant="outline" className="h-20 flex-col">
          <span className="text-2xl mb-1">🎒</span>
          <span>Inventory</span>
        </Button>
        <Button variant="outline" className="h-20 flex-col">
          <span className="text-2xl mb-1">🗺️</span>
          <span>Map</span>
        </Button>
        <Button variant="outline" className="h-20 flex-col">
          <span className="text-2xl mb-1">🏪</span>
          <span>Shop</span>
        </Button>
      </div>
    </div>
  );
}

function TabButton({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 px-2 flex flex-col items-center gap-1 transition-colors ${
        active 
          ? 'text-blue-600 bg-blue-50' 
          : 'text-gray-600 hover:text-gray-800'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
```

These integration examples demonstrate complete, production-ready interfaces that showcase how Zelda UI components work together to create cohesive user experiences. Each example includes proper state management, responsive design, and accessibility considerations.