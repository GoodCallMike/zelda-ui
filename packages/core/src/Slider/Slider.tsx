import React, { useState, useRef, useCallback } from 'react';
import type { InputHTMLAttributes } from 'react';

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
    <div className="w-full">
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        style={{
          position: 'relative',
          height: '20px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {/* Track */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: '#e5e7eb',
            borderRadius: '2px',
            transform: 'translateY(-50%)',
          }}
        />
        
        {/* Fill */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            height: '4px',
            backgroundColor: disabled ? '#9ca3af' : '#2563eb',
            borderRadius: '2px',
            transform: 'translateY(-50%)',
            width: `${percentage}%`,
            transition: isDragging ? 'none' : 'width 0.1s',
          }}
        />
        
        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: `${percentage}%`,
            width: '20px',
            height: '20px',
            backgroundColor: disabled ? '#9ca3af' : '#2563eb',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transition: isDragging ? 'none' : 'left 0.1s',
          }}
        />
        
        {/* Tooltip */}
        {tooltip && (
          <div
            style={{
              position: 'absolute',
              top: '-35px',
              left: `${percentage}%`,
              transform: 'translateX(-50%)',
              backgroundColor: '#374151',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              whiteSpace: 'nowrap',
              opacity: isDragging ? 1 : 0,
              transition: 'opacity 0.2s',
            }}
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
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
        }}
        {...props}
      />
    </div>
  );
};