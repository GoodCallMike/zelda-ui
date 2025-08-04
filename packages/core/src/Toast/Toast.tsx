import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../styles';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { XIcon, CheckCircleIcon, AlertTriangleIcon, InfoCircleIcon, XCircleIcon } from '@zelda/icons';
import styles from './Toast.module.css';

export interface ToastProps {
  /** Toast message */
  message: string;
  /** Toast type */
  type?: 'success' | 'error' | 'warning' | 'info';
  /** Toast position */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  /** Auto dismiss duration in ms (0 to disable) */
  duration?: number;
  /** Whether toast is visible */
  visible?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Custom className */
  className?: string;
  /** Test identifier */
  testId?: string;
}

const typeIcons = {
  success: CheckCircleIcon,
  error: XCircleIcon,
  warning: AlertTriangleIcon,
  info: InfoCircleIcon,
};

export const Toast = ({
  message,
  type = 'info',
  position = 'top-right',
  duration = 5000,
  visible = true,
  onClose,
  className,
  testId,
}: ToastProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  const IconComponent = typeIcons[type];

  useEffect(() => {
    // Start enter animation
    const enterTimer = setTimeout(() => {
      setIsEntering(false);
    }, 100);

    return () => clearTimeout(enterTimer);
  }, []);

  useEffect(() => {
    if (visible && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose?.();
    }, 300); // Match exit animation duration
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        'pointer-events-auto max-w-sm w-full',
        styles.toast,
        styles[type],
        isEntering && styles.entering,
        isExiting && styles.exiting,
        className
      )}
      data-testid={testId}
    >
      <div className="flex items-center gap-3 p-4">
        <IconComponent className={cn('w-5 h-5 flex-shrink-0', styles.icon)} />
        <div className="flex-1 min-w-0">
          <Typography variant="body2" className={styles.message}>
            {message}
          </Typography>
        </div>
        <Button
          variant="text"
          size="small"
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="Close notification"
        >
          <XIcon className="w-4 h-4" />
        </Button>
      </div>
      {duration > 0 && (
        <div 
          className={cn(styles.progressBar, styles[type + 'Progress'])} 
          style={{ animationDuration: `${duration}ms` }}
        />
      )}
    </div>
  );
};