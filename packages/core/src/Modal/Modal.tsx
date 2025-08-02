import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { cn, useClickOutside } from '../styles';
import { Button } from '../Button';
import {
  modalBackdrop,
  modalContainer,
  modalHeader,
  modalTitle,
  modalCloseButton,
  modalBody,
  modalFooter,
} from '@zelda/theme/hyrule-modal.css';

interface ModalProps {
  /** Whether the modal is visible */
  open: boolean;
  /** Modal title */
  title?: ReactNode;
  /** Modal content */
  children?: ReactNode;
  /** Custom footer content */
  footer?: ReactNode | null;
  /** OK button text */
  okText?: string;
  /** Cancel button text */
  cancelText?: string;
  /** OK button click handler */
  onOk?: () => void;
  /** Cancel button click handler */
  onCancel?: () => void;
  /** Whether to show close button */
  closable?: boolean;
  /** Whether clicking mask closes modal */
  maskClosable?: boolean;
  /** Modal width */
  width?: number | string;
  /** Whether modal is centered */
  centered?: boolean;
  /** Loading state for OK button */
  confirmLoading?: boolean;
}

/**
 * Modal component for displaying content in an overlay.
 * 
 * @example
 * <Modal 
 *   open={isOpen} 
 *   title="Basic Modal" 
 *   onOk={() => setIsOpen(false)}
 *   onCancel={() => setIsOpen(false)}
 * >
 *   Modal content goes here
 * </Modal>
 */
export const Modal = ({
  open,
  title,
  children,
  footer,
  okText = 'OK',
  cancelText = 'Cancel',
  onOk,
  onCancel,
  closable = true,
  maskClosable = true,
  width = 520,
  centered = false,
  confirmLoading = false,
}: ModalProps) => {
  const modalRef = useClickOutside<HTMLDivElement>(() => {
    if (maskClosable && onCancel) {
      onCancel();
    }
  }, open);

  // Handle escape key
  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onCancel) {
        onCancel();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onCancel]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const defaultFooter = (
    <>
      {onCancel && (
        <Button variant="tertiary" onClick={onCancel}>
          {cancelText}
        </Button>
      )}
      {onOk && (
        <Button 
          variant="primary" 
          onClick={onOk}
          disabled={confirmLoading}
        >
          {confirmLoading ? 'Loading...' : okText}
        </Button>
      )}
    </>
  );

  return (
    <div className={modalBackdrop}>
      {/* Modal */}
      <div
        ref={modalRef}
        className={cn(
          modalContainer,
          centered ? '' : 'mt-16'
        )}
        style={{ width: typeof width === 'number' ? `${width}px` : width }}
      >
        {/* Header */}
        {(title || closable) && (
          <div className={modalHeader}>
            {title && (
              <h2 className={modalTitle}>
                {title}
              </h2>
            )}
            {closable && (
              <button
                onClick={onCancel}
                className={modalCloseButton}
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Body */}
        {children && (
          <div className={modalBody}>
            {children}
          </div>
        )}

        {/* Footer */}
        {footer !== null && (
          <div className={modalFooter}>
            {footer || defaultFooter}
          </div>
        )}
      </div>
    </div>
  );
};