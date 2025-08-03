# 🎯 Icons Context

Reference guide for the Zelda UI icon system using @zelda/icons package.

## 📦 Package Usage

```tsx
import { SearchLgIcon, User01Icon, Mail01Icon } from '@zelda/icons';

// Usage in components
<SearchLgIcon className="w-4 h-4" />
<User01Icon className="w-5 h-5 text-gray-500" />
```

## 🔍 Common Icons by Category

### **Search & Navigation**
- `SearchLgIcon`, `SearchMdIcon`, `SearchSmIcon` - Search functionality
- `ArrowLeftIcon`, `ArrowRightIcon`, `ArrowUpIcon`, `ArrowDownIcon` - Directional navigation
- `ChevronLeftIcon`, `ChevronRightIcon`, `ChevronUpIcon`, `ChevronDownIcon` - Subtle navigation
- `HomeIcon`, `Home01Icon`, `Home02Icon` - Home/dashboard
- `MenuIcon`, `Menu01Icon`, `Menu02Icon` - Menu toggles

### **User & Authentication**
- `User01Icon`, `User02Icon`, `User03Icon` - Single user
- `Users01Icon`, `Users02Icon`, `Users03Icon` - Multiple users
- `UserCircleIcon`, `UserSquareIcon` - User avatars
- `LogIn01Icon`, `LogOut01Icon` - Authentication
- `EyeIcon`, `EyeOffIcon` - Password visibility

### **Communication**
- `Mail01Icon`, `Mail02Icon`, `Mail03Icon` - Email
- `MessageCircle01Icon`, `MessageSquare01Icon` - Messages
- `PhoneIcon`, `Phone01Icon`, `Phone02Icon` - Phone calls
- `Send01Icon`, `Send02Icon` - Send actions

### **Actions & Controls**
- `PlusIcon`, `PlusCircleIcon`, `PlusSquareIcon` - Add actions
- `MinusIcon`, `MinusCircleIcon`, `MinusSquareIcon` - Remove actions
- `XIcon`, `XCircleIcon`, `XCloseIcon` - Close/cancel
- `CheckIcon`, `CheckCircleIcon`, `CheckSquareIcon` - Confirm/success
- `Edit01Icon`, `Edit02Icon`, `Pencil01Icon` - Edit actions
- `Trash01Icon`, `Trash02Icon` - Delete actions
- `Copy01Icon`, `Copy02Icon` - Copy actions
- `Save01Icon`, `Save02Icon` - Save actions

### **Status & Feedback**
- `AlertCircleIcon`, `AlertTriangleIcon` - Warnings/alerts
- `InfoCircleIcon`, `InfoSquareIcon` - Information
- `HelpCircleIcon`, `HelpSquareIcon` - Help/questions
- `HeartIcon`, `HeartCircleIcon` - Favorites/likes
- `StarIcon`, `Star01Icon` - Ratings/favorites
- `Loading01Icon`, `Loading02Icon` - Loading states

### **Files & Documents**
- `File01Icon`, `File02Icon`, `File03Icon` - Generic files
- `FolderIcon`, `FolderClosedIcon` - Folders
- `Download01Icon`, `Upload01Icon` - File transfers
- `ClipboardIcon`, `ClipboardCheckIcon` - Clipboard actions
- `BookClosedIcon`, `BookOpen01Icon` - Documentation

### **Media & Content**
- `Image01Icon`, `Image02Icon` - Images
- `Camera01Icon`, `Camera02Icon` - Photography
- `PlayIcon`, `PlayCircleIcon` - Media playback
- `PauseIcon`, `PauseCircleIcon` - Media pause
- `VolumeMaxIcon`, `VolumeMinIcon`, `VolumeXIcon` - Audio controls

### **Commerce & Finance**
- `CurrencyDollarIcon`, `CurrencyEuroIcon` - Currency symbols
- `ShoppingCart01Icon`, `ShoppingBag01Icon` - Shopping
- `CreditCard01Icon`, `CreditCard02Icon` - Payment
- `BankIcon`, `Wallet01Icon` - Financial

### **Settings & Configuration**
- `Settings01Icon`, `Settings02Icon` - Settings/preferences
- `Tool01Icon`, `Tool02Icon` - Tools/utilities
- `Sliders01Icon`, `Sliders02Icon` - Controls/adjustments
- `FilterLinesIcon`, `FilterFunnel01Icon` - Filtering

### **Time & Calendar**
- `ClockIcon`, `AlarmClockIcon` - Time
- `CalendarIcon`, `CalendarDateIcon` - Calendar/dates
- `WatchCircleIcon`, `WatchSquareIcon` - Timers

### **Technology & Development**
- `Code01Icon`, `Code02Icon` - Code/development
- `TerminalIcon`, `TerminalCircleIcon` - Command line
- `DatabaseIcon`, `Database01Icon` - Data storage
- `ServerIcon`, `Server01Icon` - Infrastructure
- `WifiIcon`, `WifiOffIcon` - Connectivity

## 🎨 Icon Sizing Guidelines

```tsx
// Standard sizes
className="w-3 h-3"   // 12px - Very small (badges, indicators)
className="w-4 h-4"   // 16px - Small (inline with text, form inputs)
className="w-5 h-5"   // 20px - Medium (buttons, navigation)
className="w-6 h-6"   // 24px - Large (prominent actions)
className="w-8 h-8"   // 32px - Extra large (headers, empty states)
```

## 🎯 Usage Patterns

### **Form Inputs**
```tsx
<Input 
  prefix={<Mail01Icon className="w-4 h-4" />} 
  placeholder="Email" 
/>
<Input 
  prefix={<User01Icon className="w-4 h-4" />} 
  placeholder="Username" 
/>
<Input 
  type="password"
  suffix={<EyeIcon className="w-4 h-4" />} 
  placeholder="Password" 
/>
```

### **Buttons**
```tsx
<Button>
  <PlusIcon className="w-4 h-4 mr-2" />
  Add Item
</Button>
<Button variant="ghost">
  <Edit01Icon className="w-4 h-4" />
</Button>
```

### **Navigation**
```tsx
<Button variant="ghost">
  <ArrowLeftIcon className="w-4 h-4 mr-2" />
  Back
</Button>
<Button>
  Next
  <ArrowRightIcon className="w-4 h-4 ml-2" />
</Button>
```

## 🚫 Common Mistakes

### **Wrong Icon Names**
```tsx
// ❌ These don't exist
import { DollarSignIcon, SearchIcon, UserIcon } from '@zelda/icons';

// ✅ Correct names
import { CurrencyDollarIcon, SearchLgIcon, User01Icon } from '@zelda/icons';
```

### **Inconsistent Sizing**
```tsx
// ❌ Mixed sizes in same context
<Mail01Icon className="w-3 h-3" />
<User01Icon className="w-6 h-6" />

// ✅ Consistent sizing
<Mail01Icon className="w-4 h-4" />
<User01Icon className="w-4 h-4" />
```

## 🔍 Finding Icons

1. **Check this context first** for common use cases
2. **Browse the full list** in `/packages/icons/src/index.ts`
3. **Look for numbered variants** (Icon01, Icon02, etc.) for style options
4. **Use descriptive searches** - icons often have intuitive names

## 📝 Icon Naming Patterns

- **Numbered variants**: `Icon01`, `Icon02` for different styles
- **Size variants**: `IconSm`, `IconMd`, `IconLg` for different sizes
- **State variants**: `IconOn`, `IconOff` for toggles
- **Shape variants**: `IconCircle`, `IconSquare` for different containers