import React, { useState, useRef, useCallback } from 'react';
import type { InputHTMLAttributes } from 'react';
import { cn } from '../styles';

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  /** Current value */
  value?: number;
  /** Change handler */
  onChange?: (value: number) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Whether to show value tooltip */
  tooltip?: boolean;
  /** Test identifier */
  testId?: string;
}

export const Slider = ({
  value = 50,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  tooltip = false,
  testId,
  ...props
}: SliderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const updateValue = useCallback((clientX: number) => {
    if (!sliderRef.current || disabled) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const newValue = min + percent * (max - min);
    const steppedValue = Math.round(newValue / step) * step;
    const clampedValue = Math.max(min, Math.min(max, steppedValue));
    
    onChange?.(clampedValue);
  }, [min, max, step, disabled, onChange]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (disabled) return;
    setIsDragging(true);
    updateValue(e.clientX);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      updateValue(e.clientX);
    }
  }, [isDragging, updateValue]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global mouse events when dragging
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="w-full min-w-48">
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        className={cn(
          'relative h-5 w-full',
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        )}
      >
        {/* Track */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-400 dark:bg-gray-600 rounded-full transform -translate-y-1/2" />
        
        {/* Fill */}
        <div 
          className={cn(
            'absolute top-1/2 left-0 h-2 rounded-full transform -translate-y-1/2 transition-all duration-100',
            disabled ? 'bg-gray-500' : 'bg-blue-600',
            isDragging && 'transition-none'
          )}
          style={{ width: `${percentage}%` }}
        />
        
        {/* Thumb */}
        <div
          className={cn(
            'absolute top-1/2 w-5 h-5 rounded-full shadow-md transition-all duration-100',
            disabled ? 'bg-gray-400' : 'bg-blue-600',
            isDragging && 'transition-none scale-110'
          )}
          style={{ 
            left: `${percentage}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        {/* Tooltip */}
        {tooltip && (
          <div
            className={cn(
              'absolute -top-9 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap transform -translate-x-1/2 transition-opacity duration-200',
              isDragging ? 'opacity-100' : 'opacity-0'
            )}
            style={{ left: `${percentage}%` }}
          >
            {value}
          </div>
        )}
      </div>
      
      {/* Hidden input for accessibility */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        disabled={disabled}
        data-testid={testId}
        className="sr-only"
        {...props}
      />
    </div>
  );
};