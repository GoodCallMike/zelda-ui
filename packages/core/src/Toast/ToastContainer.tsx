import React from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../styles';

export interface ToastContainerProps {
  /** Container position */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  /** Children toasts */
  children: React.ReactNode;
}

export const ToastContainer = ({
  position = 'top-right',
  children,
}: ToastContainerProps) => {
  const container = (
    <div
      className={cn(
        'fixed z-toast pointer-events-none p-4 flex flex-col gap-3',
        {
          'top-0 right-0': position === 'top-right',
          'top-0 left-0': position === 'top-left',
          'bottom-0 right-0 flex-col-reverse': position === 'bottom-right',
          'bottom-0 left-0 flex-col-reverse': position === 'bottom-left',
          'top-0 left-1/2 -translate-x-1/2': position === 'top-center',
          'bottom-0 left-1/2 -translate-x-1/2 flex-col-reverse': position === 'bottom-center',
        }
      )}
    >
      {children}
    </div>
  );

  return createPortal(container, document.body);
};