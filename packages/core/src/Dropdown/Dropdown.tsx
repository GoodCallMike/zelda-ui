import type { ReactNode } from 'react';
import { useState } from 'react';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react';
import { cn } from '../styles';

interface DropdownItem {
  /** Item label */
  label: ReactNode;
  /** Item key */
  key: string;
  /** Click handler */
  onClick?: () => void;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Whether to show divider after this item */
  divider?: boolean;
}

interface DropdownProps {
  /** Dropdown menu items */
  items: DropdownItem[];
  /** Trigger element */
  children: ReactNode;
  /** Trigger method */
  trigger?: 'hover' | 'click';
  /** Dropdown placement */
  placement?: 'bottom' | 'bottomLeft' | 'bottomRight' | 'top' | 'topLeft' | 'topRight';
}

/**
 * Dropdown menu component with customizable trigger and placement.
 * 
 * @example
 * <Dropdown items={[
 *   { key: '1', label: 'Edit', onClick: () => edit() },
 *   { key: '2', label: 'Delete', onClick: () => delete() }
 * ]}>
 *   <button>Actions</button>
 * </Dropdown>
 */
export const Dropdown = ({
  items,
  children,
  trigger = 'click',
  placement = 'bottomLeft',
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);


  const getFloatingPlacement = () => {
    switch (placement) {
      case 'bottomLeft': return 'bottom-start';
      case 'bottom': return 'bottom';
      case 'bottomRight': return 'bottom-end';
      case 'topLeft': return 'top-start';
      case 'top': return 'top';
      case 'topRight': return 'top-end';
      default: return 'bottom-start';
    }
  };

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(1), flip(), shift()],
    whileElementsMounted: autoUpdate,
    placement: getFloatingPlacement(),
  });

  const handleTriggerClick = () => {
    if (trigger === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleTriggerMouseEnter = () => {
    if (trigger === 'hover') {
      setIsOpen(true);
    }
  };

  const handleTriggerMouseLeave = () => {
    if (trigger === 'hover') {
      setTimeout(() => setIsOpen(false), 200);
    }
  };

  const handleItemClick = (item: DropdownItem) => {
    if (!item.disabled && item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };



  return (
    <div 
      className="relative inline-block"
      {...(trigger === 'hover' ? {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false)
      } : {})}
    >
      <div
        ref={refs.setReference}
        onClick={handleTriggerClick}
      >
        {children}
      </div>

      {isOpen && (
        <>
          {trigger === 'click' && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="z-50 min-w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg"
          >
            <div className="py-1">
              {items.map((item, index) => (
                <div key={item.key}>
                  <button
                    onClick={() => handleItemClick(item)}
                    disabled={item.disabled}
                    className={cn(
                      'w-full text-left px-3 py-2 text-sm transition-colors',
                      item.disabled
                        ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'
                    )}
                  >
                    {item.label}
                  </button>
                  {item.divider && index < items.length - 1 && (
                    <div className="border-t border-gray-200 dark:border-gray-600 my-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};