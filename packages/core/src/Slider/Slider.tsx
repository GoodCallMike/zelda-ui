import React, { useState, useRef, useCallback } from 'react';
import { cn } from '../styles';
import styles from './Slider.module.css';

export interface SliderProps {
  /** Current value */
  value?: number;
  /** Default value */
  defaultValue?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Whether slider is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: number) => void;
  /** Custom className */
  className?: string;
  /** Test identifier */
  testId?: string;
}

export const Slider = ({
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onChange,
  className,
  testId,
}: SliderProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const currentValue = value !== undefined ? value : internalValue;
  const percentage = ((currentValue - min) / (max - min)) * 100;

  const updateValue = useCallback((clientX: number) => {
    if (!sliderRef.current || disabled) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const newValue = min + (percentage / 100) * (max - min);
    const steppedValue = Math.round(newValue / step) * step;
    const clampedValue = Math.max(min, Math.min(max, steppedValue));
    
    if (value === undefined) {
      setInternalValue(clampedValue);
    }
    onChange?.(clampedValue);
  }, [min, max, step, disabled, value, onChange]);

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

  // Handle mouse events
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    
    let newValue = currentValue;
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        newValue = Math.max(min, currentValue - step);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        newValue = Math.min(max, currentValue + step);
        break;
      case 'Home':
        e.preventDefault();
        newValue = min;
        break;
      case 'End':
        e.preventDefault();
        newValue = max;
        break;
      default:
        return;
    }
    
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div
      ref={sliderRef}
      className={cn(
        'relative w-full h-6 flex items-center cursor-pointer',
        disabled && 'cursor-not-allowed opacity-60',
        className
      )}
      onMouseDown={handleMouseDown}
      data-testid={testId}
    >
      {/* Track */}
      <div className={cn('w-full h-2 rounded-full', styles.track)} />
      
      {/* Filled track */}
      <div 
        className={cn('absolute h-2 rounded-full', styles.filledTrack)}
        style={{ width: `${percentage}%` }}
      />
      
      {/* Thumb */}
      <div
        className={cn(
          'absolute w-6 h-6 rounded-full transform -translate-x-1/2 transition-all duration-200',
          styles.thumb,
          isDragging && styles.thumbActive
        )}
        style={{ left: `${percentage}%` }}
        tabIndex={disabled ? -1 : 0}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={currentValue}
        aria-disabled={disabled}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};