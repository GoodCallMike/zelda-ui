import type { ReactNode } from 'react';
import { Button as AriaButton } from 'react-aria-components';
import { cn } from '../styles';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
  isDisabled?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  onPress,
  isDisabled,
}: ButtonProps) => {
  return (
    <AriaButton
      className={cn(
        // Base styles
        'inline-flex items-center justify-center',
        'px-4 py-2 rounded font-semibold uppercase',
        'cursor-pointer transition-colors border-none',
        'jetstream-effect',

        // Variant styles
        variant === 'primary' &&
          'bg-yellow-500 text-blue-900 hover:bg-yellow-400',
        variant === 'secondary' &&
          'bg-gray-200 text-gray-900 hover:bg-gray-300',

        // State styles
        isDisabled && 'opacity-50',
      )}
      onPress={onPress}
      isDisabled={isDisabled}
    >
      {children}
    </AriaButton>
  );
};
