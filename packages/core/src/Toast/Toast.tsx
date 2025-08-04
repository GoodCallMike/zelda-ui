import {
  AlertTriangleIcon,
  CheckCircleIcon,
  InfoCircleIcon,
  XCircleIcon,
  XIcon,
} from '@zelda/icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { cn } from '../styles';
import { Typography } from '../Typography';
import styles from './Toast.module.css';

export interface ToastAction {
  /** Action button label */
  label: string;
  /** Action handler */
  onClick: () => void;
}

export interface ToastProps {
  /** Toast message */
  message: string;
  /** Toast type */
  type?: 'success' | 'error' | 'warning' | 'info';
  /** Toast position */
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
  /** Auto dismiss duration in ms (0 to disable) */
  duration?: number;
  /** Whether toast is visible */
  visible?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Action buttons */
  actions?: ToastAction[];
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
  duration = 5000,
  visible = true,
  onClose,
  actions,
  className,
  testId,
}: ToastProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  const IconComponent = typeIcons[type];

  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const handleClose = useCallback(() => {
    setIsExiting(true);
    onCloseRef.current?.();
  }, []);

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
  }, [visible, duration, handleClose]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        'pointer-events-auto w-96',
        styles.toast,
        styles[type],
        isEntering && styles.entering,
        isExiting && styles.exiting,
        className,
      )}
      data-testid={testId}
    >
      <div className="p-4">
        <div className="flex items-center gap-3">
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
        {actions && actions.length > 0 && (
          <div className="flex gap-2 mt-3 ml-8">
            {actions.map((action) => (
              <Button
                key={action.label}
                variant="text"
                size="small"
                onClick={action.onClick}
                className="text-xs"
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      {duration > 0 && (
        <div
          className={cn(styles.progressBar, styles[`${type}Progress`])}
          style={{ animationDuration: `${duration}ms` }}
        />
      )}
    </div>
  );
};
