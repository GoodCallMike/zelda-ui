import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { Toast, ToastProps } from './Toast';
import { ToastContainer } from './ToastContainer';

interface ToastItem extends Omit<ToastProps, 'visible' | 'onClose'> {
  id: string;
}

export type { ToastAction } from './Toast';

interface ToastContextType {
  showToast: (toast: Omit<ToastItem, 'id'>) => void;
  hideToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export interface ToastProviderProps {
  children: React.ReactNode;
  position?: ToastProps['position'];
  /** Maximum number of toasts to show (default: 5) */
  maxToasts?: number;
}

export const ToastProvider = ({ children, position = 'top-right', maxToasts = 5 }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextIdRef = useRef(1);

  const showToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = `toast-${nextIdRef.current++}`;
    setToasts(prev => {
      const newToasts = [...prev, { ...toast, id }];
      return newToasts.slice(-maxToasts);
    });
  }, [maxToasts]);

  const hideToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <ToastContainer position={position}>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            {...toast}
            visible={true}
            onClose={() => hideToast(toast.id)}
          />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};