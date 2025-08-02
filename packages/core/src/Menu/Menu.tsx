import type { HTMLAttributes, ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import { cn } from '../styles';
import { useClickOutside } from '../hooks/useClickOutside';


interface MenuContextValue {
  selectedKeys: string[];
  onSelect: (key: string) => void;
  mode: 'vertical' | 'horizontal' | 'inline';
  openSubmenu: string | null;
  setOpenSubmenu: (key: string | null) => void;
  inSubmenu?: boolean;
}

const MenuContext = createContext<MenuContextValue | null>(null);

interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  /** Selected menu item keys */
  selectedKeys?: string[];
  /** Menu mode */
  mode?: 'vertical' | 'horizontal' | 'inline';
  /** Callback when menu item is selected */
  onSelect?: (key: string) => void;
  /** Menu items */
  children: ReactNode;
}

interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Unique identifier for the menu item */
  id: string;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Menu item content */
  children: ReactNode;
}

interface SubMenuProps extends HTMLAttributes<HTMLLIElement> {
  /** Unique identifier for the submenu */
  id: string;
  /** Submenu title */
  title: ReactNode;
  /** Whether the submenu is disabled */
  disabled?: boolean;
  /** Submenu items */
  children: ReactNode;
}

/**
 * Navigation menu component with support for nested submenus and multiple display modes.
 */
export const Menu = ({
  selectedKeys = [],
  mode = 'vertical',
  onSelect,
  children,
  className,
  ...props
}: MenuProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  
  const handleSelect = (key: string) => {
    onSelect?.(key);
  };

  const contextValue: MenuContextValue = {
    selectedKeys,
    onSelect: handleSelect,
    mode,
    openSubmenu,
    setOpenSubmenu,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      <ul
        className={cn(
          'list-none m-0 p-2 bg-gray-50 border-r border-gray-200 min-h-screen w-60',
          mode === 'horizontal' && 'flex',
          className
        )}

        role="menu"
        aria-orientation={mode === 'horizontal' ? 'horizontal' : 'vertical'}
        {...props}
      >
        {children}
      </ul>
    </MenuContext.Provider>
  );
};

const MenuItem = ({ id, disabled = false, children, className, onClick, ...props }: MenuItemProps) => {
  const context = useContext(MenuContext);
  if (!context) throw new Error('Menu.Item must be used within Menu');

  const { selectedKeys, onSelect, mode } = context;
  const isSelected = selectedKeys.includes(id);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (disabled) return;
    onSelect(id);
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(id);
    }
  };

  return (
    <li
      className={cn(
        'block bg-transparent border border-transparent rounded-none m-0.5 px-2 py-1.5 text-gray-900 font-medium text-sm cursor-pointer hover:bg-green-50 hover:border-green-500 hover:border-t-green-300 hover:border-l-green-300 hover:shadow-[1px_1px_0_theme(colors.green.600)] hover:text-green-800',
        mode === 'horizontal' && !context.inSubmenu && 'inline-block',
        disabled && 'text-gray-400 cursor-not-allowed opacity-60 hover:bg-transparent hover:text-gray-400',
        isSelected && 'bg-green-500 border-green-600 border-t-green-400 border-l-green-400 text-white font-semibold shadow-[1px_1px_0_theme(colors.green.700)] hover:bg-green-600 hover:text-white',
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="menuitem"
      aria-selected={isSelected}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </li>
  );
};

const SubMenu = ({ id, title, disabled = false, children, className, ...props }: SubMenuProps) => {
  const context = useContext(MenuContext);
  if (!context) throw new Error('Menu.SubMenu must be used within Menu');

  const { mode, openSubmenu, setOpenSubmenu } = context;
  const isOpen = openSubmenu === id;
  
  const submenuRef = useClickOutside<HTMLLIElement>(() => {
    if (mode === 'horizontal' && isOpen) {
      setOpenSubmenu(null);
    }
  }, mode === 'horizontal' && isOpen);

  const handleTitleClick = () => {
    if (disabled) return;
    setOpenSubmenu(isOpen ? null : id);
  };

  return (
    <li
      ref={submenuRef}
      className={cn(
        'relative',
        mode === 'horizontal' && 'inline-block',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'bg-transparent p-2 m-1 rounded-md text-gray-900 font-medium text-sm cursor-pointer transition-all duration-150 flex items-center justify-between hover:bg-green-100 hover:text-green-600',
          disabled && 'text-gray-400 cursor-not-allowed hover:bg-transparent hover:text-gray-400'
        )}
        onClick={handleTitleClick}
      >
        <span>{title}</span>
        <svg
          className={cn(
            'w-4 h-4 transition-transform',
            isOpen && 'rotate-180'
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      
      {isOpen && (
        <MenuContext.Provider value={{ ...context, inSubmenu: true }}>
          <ul
            className={cn(
              'list-none m-0 p-2',
              mode === 'horizontal' ? 'bg-white border border-gray-200 rounded-md shadow-lg absolute top-full left-0 min-w-48 z-50' : 'bg-gradient-to-b from-amber-50 to-amber-100'
            )}
          >
            {children}
          </ul>
        </MenuContext.Provider>
      )}
    </li>
  );
};

Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;