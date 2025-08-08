import type { ReactNode } from 'react';
import { useState } from 'react';
import { cn } from 'zelda-ui-theme';
import styles from './Tooltip.module.css';

export interface TooltipProps {
  /** Tooltip content */
  content: string;
  /** Element that triggers the tooltip */
  children: ReactNode;
  /** Tooltip position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Delay before showing tooltip (ms) */
  delay?: number;
  /** Test identifier */
  testId?: string;
}

export const Tooltip = ({
  content,
  children,
  position = 'top',
  testId,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Tooltip wrapper needs mouse events for hover functionality
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn('absolute z-50', styles.tooltip, styles[position])}
          data-testid={testId}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};
