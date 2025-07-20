import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { cn, useClickOutside } from '../styles';
import { Button } from '../Button';

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
    <div className="flex justify-end gap-2">
      {onCancel && (
        <Button variant="outline" onClick={onCancel}>
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
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
      
      {/* Modal */}
      <div
        ref={modalRef}
        className={cn(
          'relative bg-white dark:bg-gray-800 rounded-lg shadow-xl',
          'max-h-[90vh] overflow-hidden',
          centered ? 'mx-4' : 'mx-4 mt-16'
        )}
        style={{ width: typeof width === 'number' ? `${width}px` : width }}
      >
        {/* Header */}
        {(title || closable) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            {title && (
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h2>
            )}
            {closable && (
              <button
                onClick={onCancel}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
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
          <div className="px-6 py-4 max-h-96 overflow-y-auto">
            <div className="text-gray-700 dark:text-gray-300">
              {children}
            </div>
          </div>
        )}

        {/* Footer */}
        {footer !== null && (
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            {footer || defaultFooter}
          </div>
        )}
      </div>
    </div>
  );
};