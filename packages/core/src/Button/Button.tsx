import type { ComponentType, ReactNode, SVGProps } from 'react';
import { cn } from '../styles';


export interface ButtonProps {
  /** Button content */
  children: ReactNode;
  /** Button variant */
  variant?: 'triforce' | 'hyrule' | 'rupee' | 'ganon';
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
  variant = 'triforce',
  onClick,
  disabled,
  icon: Icon,
  iconPosition = 'left',
  testId,
  ...props
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'triforce':
        return 'bg-gradient-to-br from-triforce-400 via-triforce-500 to-triforce-600 border-2 border-triforce-700 border-t-triforce-300 border-l-triforce-300 text-white font-bold text-sm shadow-[2px_2px_0_theme(colors.triforce.700)] hover:from-triforce-300 hover:via-triforce-400 hover:to-triforce-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none';
      case 'hyrule':
        return 'bg-gradient-to-br from-hyrule-400 via-hyrule-500 to-hyrule-600 border-2 border-hyrule-700 border-t-hyrule-300 border-l-hyrule-300 text-white font-bold text-sm shadow-[2px_2px_0_theme(colors.hyrule.700)] hover:from-hyrule-300 hover:via-hyrule-400 hover:to-hyrule-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none';
      case 'rupee':
        return 'bg-gradient-to-br from-rupee-400 via-rupee-500 to-rupee-600 border-2 border-rupee-700 border-t-rupee-300 border-l-rupee-300 text-white font-bold text-sm shadow-[2px_2px_0_theme(colors.rupee.700)] hover:from-rupee-300 hover:via-rupee-400 hover:to-rupee-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none';
      case 'ganon':
        return 'bg-gradient-to-br from-ganon-400 via-ganon-500 to-ganon-600 border-2 border-ganon-700 border-t-ganon-300 border-l-ganon-300 text-white font-bold text-sm shadow-[2px_2px_0_theme(colors.ganon.700)] hover:from-ganon-300 hover:via-ganon-400 hover:to-ganon-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none';
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
