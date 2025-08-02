import type { ComponentType, ReactNode, SVGProps } from 'react';
import { cn } from '../styles';


interface ButtonProps {
  /** Button content */
  children: ReactNode;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'destructive';
  /** Click handler function */
  onClick?: () => void;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Icon component to display */
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  /** Icon position */
  iconPosition?: 'left' | 'right';
  /** Test identifier */
  testId?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled,
  icon: Icon,
  iconPosition = 'left',
  testId,
  ...props
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-br from-triforce-400 via-triforce-500 to-triforce-600 border-2 border-triforce-700 border-t-triforce-300 border-l-triforce-300 text-white font-bold text-sm shadow-[2px_2px_0_theme(colors.triforce.700)] hover:from-triforce-300 hover:via-triforce-400 hover:to-triforce-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none';
      case 'secondary':
        return 'bg-gradient-to-br from-rupee-500 via-rupee-600 to-green-600 border-2 border-rupee-700 border-t-rupee-400 border-l-rupee-400 text-white font-bold text-sm shadow-[2px_2px_0_theme(colors.rupee.700)] hover:from-rupee-400 hover:via-rupee-500 hover:to-green-500 active:translate-y-1 active:shadow-sm';
      case 'tertiary':
        return 'bg-transparent border-2 border-hyrule-500 text-hyrule-600 font-bold text-sm hover:bg-hyrule-50 hover:text-hyrule-700 hover:border-hyrule-600 active:bg-hyrule-100 active:text-hyrule-800 active:border-hyrule-700';
      case 'link':
        return 'font-bold text-hyrule-600 hover:text-hyrule-700 underline bg-transparent border-none shadow-none hover:bg-hyrule-50 active:text-hyrule-800 focus:outline-none';
      case 'destructive':
        return 'bg-gradient-to-br from-ganon-600 via-red-800 to-gray-800 border-2 border-ganon-800 border-t-ganon-300 border-l-ganon-400 text-white font-bold text-sm shadow-[2px_2px_0_theme(colors.indigo.900)] hover:from-ganon-700 hover:via-red-900 hover:to-gray-900 active:border-t-gray-800 active:border-l-indigo-800 active:shadow-none';
      default:
        return 'bg-gradient-to-br from-triforce-400 via-triforce-500 to-triforce-600 border-2 border-triforce-700 border-t-triforce-300 border-l-triforce-300 text-white font-bold text-sm shadow-[2px_2px_0_theme(colors.triforce.700)] hover:from-triforce-300 hover:via-triforce-400 hover:to-triforce-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none';
    }
  };

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center px-5 py-2.5 rounded-sm transition-none cursor-pointer',
        Icon && 'gap-2',
        getVariantStyles(),
        disabled && 'opacity-50 cursor-not-allowed',
      )}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
};
