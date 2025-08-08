import type { ReactNode } from 'react';
import {
  AlertCircleIcon,
  CheckCircleIcon,
  InfoCircleIcon,
  XCloseIcon,
} from 'zelda-ui-icons';
import { cn } from 'zelda-ui-theme';
import { Button } from '../Button/Button';
import type { BaseComponentProps } from '../types';
import styles from './Alert.module.css';

export interface AlertProps extends BaseComponentProps {
  /** Alert message content */
  message: ReactNode;
  /** Alert description (optional) */
  description?: ReactNode;
  /** Alert type */
  type?: 'success' | 'info' | 'warning' | 'error';
  /** Whether alert can be closed */
  closable?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Custom icon */
  icon?: ReactNode;
  /** Whether to show default icon */
  showIcon?: boolean;
  /** Custom close text */
  closeText?: ReactNode;
}

const defaultIcons = {
  success: CheckCircleIcon,
  info: InfoCircleIcon,
  warning: AlertCircleIcon,
  error: AlertCircleIcon,
};

export const Alert = ({
  message,
  description,
  type = 'info',
  closable = false,
  onClose,
  icon,
  showIcon = true,
  closeText,
  className,
  testId,
  ...props
}: AlertProps) => {
  const IconComponent = defaultIcons[type];

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-lg border-2',
        styles[type],
        className,
      )}
      data-testid={testId}
      role="alert"
      {...props}
    >
      {showIcon && (
        <div className="flex-shrink-0 mt-0.5">
          {icon || <IconComponent className="w-4 h-4" />}
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm">{message}</div>
        {description && (
          <div className="mt-1 text-sm opacity-90">{description}</div>
        )}
      </div>

      {closable && (
        <Button
          variant="text"
          size="small"
          className="flex-shrink-0 -m-1"
          onClick={onClose}
          aria-label="Close alert"
          icon={closeText ? undefined : XCloseIcon}
        >
          {closeText}
        </Button>
      )}
    </div>
  );
};
