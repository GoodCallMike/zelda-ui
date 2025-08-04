import React, { type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../styles';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { XIcon } from '@zelda/icons';
import styles from './Modal.module.css';

export interface ModalProps {
  /** Whether modal is open */
  open: boolean;
  /** Close handler */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal content */
  children: ReactNode;
  /** Modal size */
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  /** Whether to show close button */
  closable?: boolean;
  /** Whether clicking backdrop closes modal */
  maskClosable?: boolean;
  /** Custom className */
  className?: string;
  /** Test identifier */
  testId?: string;
}

export const Modal = ({
  open,
  onClose,
  title,
  children,
  size = 'medium',
  closable = true,
  maskClosable = true,
  className,
  testId,
}: ModalProps) => {
  // Handle escape key
  useEffect(() => {
    if (!open) return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && maskClosable) {
      onClose();
    }
  };

  return createPortal(
    <div 
      className={cn(styles.backdrop, styles.backdropOpen)}
      onClick={handleBackdropClick}
      data-testid={testId}
    >
      <div 
        className={cn(
          styles.modal,
          styles[size],
          styles.modalOpen,
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        <div className={styles.content}>
          {(title || closable) && (
            <div className={styles.titleRow}>
              {title && (
                <Typography 
                  variant="h3" 
                  id="modal-title"
                  className={styles.title}
                >
                  {title}
                </Typography>
              )}
              {closable && (
                <Button
                  variant="text"
                  size="small"
                  onClick={onClose}
                  className={styles.closeButton}
                  aria-label="Close modal"
                >
                  <XIcon className="w-5 h-5" />
                </Button>
              )}
            </div>
          )}
          <div className={styles.body}>
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};