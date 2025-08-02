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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Modal */}
      <div
        ref={modalRef}
        className={cn(
          'relative bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-hidden m-4',
          centered ? '' : 'mt-16'
        )}
        style={{ width: typeof width === 'number' ? `${width}px` : width }}
      >
        {/* Header */}
        {(title || closable) && (
          <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-200">
            {title && (
              <h2 className="text-xl font-bold text-gray-900">
                {title}
              </h2>
            )}
            {closable && (
              <button
                onClick={onCancel}
                className="flex items-center justify-center w-8 h-8 p-0 bg-ganon-500 border border-ganon-700 border-t-ganon-400 border-l-ganon-400 text-white cursor-pointer hover:bg-ganon-600 active:border-t-ganon-700 active:border-l-ganon-700 active:border-r-ganon-400 active:border-b-ganon-400 shadow-[1px_1px_0_theme(colors.ganon.700)]"
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
          <div className="p-6 max-h-96 overflow-y-auto text-gray-700 leading-relaxed">
            {children}
          </div>
        )}

        {/* Footer */}
        {footer !== null && (
          <div className="flex justify-end gap-3 p-4 px-6 pb-6 border-t border-gray-200 bg-gray-50">
            {footer || defaultFooter}
          </div>
        )}
      </div>
    </div>
  );
};