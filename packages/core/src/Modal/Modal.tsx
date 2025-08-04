import { XIcon } from '@zelda/icons';
import React, { type ReactNode, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button';
import { cn } from '../styles';
import { Typography } from '../Typography';
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
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, handleEscape]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && maskClosable) {
      onClose();
    }
  };

  return createPortal(
    // amazonq-ignore-next-line
    // biome-ignore lint/a11y/useSemanticElements: This is a backdrop so having a button doesn't make sense
<div 
      className={cn(styles.backdrop, styles.backdropOpen)}
      onClick={handleBackdropClick}
      onKeyDown={(e) => e.key === 'Enter' && maskClosable && onClose()}
      role="button"
      tabIndex={-1}
      aria-label="Close modal"
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
                  icon={XIcon}
                />
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