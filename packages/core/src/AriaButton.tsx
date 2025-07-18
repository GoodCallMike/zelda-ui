import { Button } from 'react-aria-components';
import * as React from 'react';

interface AriaButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
  isDisabled?: boolean;
}

export const AriaButton = ({ children, variant = 'primary', onPress, isDisabled }: AriaButtonProps) => {
  const baseStyles = {
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: 'inherit',
  };
  
  const variantStyles = {
    primary: { backgroundColor: '#2563eb', color: 'white' },
    secondary: { backgroundColor: '#e5e7eb', color: '#111827' },
  };

  return (
    <Button
      style={{ ...baseStyles, ...variantStyles[variant] }}
      onPress={onPress}
      isDisabled={isDisabled}
    >
      {children}
    </Button>
  );
};