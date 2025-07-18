import { Button } from 'react-aria-components';
import * as React from 'react';

interface AriaButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
  isDisabled?: boolean;
}

export const AriaButton = ({ children, variant = 'primary', onPress, isDisabled }: AriaButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded font-medium border-none cursor-pointer';
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:opacity-50',
  };

  return (
    <Button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onPress={onPress}
      isDisabled={isDisabled}
    >
      {children}
    </Button>
  );
};