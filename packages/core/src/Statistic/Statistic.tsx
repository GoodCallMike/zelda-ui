import type { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { cn } from '../styles';

interface StatisticProps extends HTMLAttributes<HTMLDivElement> {
  /** Title of the statistic */
  title?: ReactNode;
  /** Value to display */
  value?: string | number;
  /** Precision of decimal */
  precision?: number;
  /** Custom formatter function */
  formatter?: (value?: string | number) => ReactNode;
  /** Prefix node */
  prefix?: ReactNode;
  /** Suffix node */
  suffix?: ReactNode;
  /** Set value color */
  valueStyle?: React.CSSProperties;
  /** Loading state */
  loading?: boolean;
}

/**
 * Statistic component for displaying statistical data.
 */
export const Statistic = ({
  title,
  value,
  precision,
  formatter,
  prefix,
  suffix,
  valueStyle,
  loading = false,
  className,
  ...props
}: StatisticProps) => {
  const formatValue = (val?: string | number) => {
    if (val === undefined || val === null) return '';
    
    if (formatter) {
      return formatter(val);
    }
    
    const numValue = typeof val === 'string' ? parseFloat(val) : val;
    
    if (isNaN(numValue)) return val;
    
    if (precision !== undefined) {
      return numValue.toFixed(precision);
    }
    
    return numValue.toLocaleString();
  };

  if (loading) {
    return (
      <div className={cn('space-y-2', className)} {...props}>
        {title && <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-20" />}
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-24" />
      </div>
    );
  }

  return (
    <div className={cn('space-y-1', className)} {...props}>
      {title && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {title}
        </div>
      )}
      <div className="flex items-baseline gap-1">
        {prefix && (
          <span className="text-lg text-gray-600 dark:text-gray-400">
            {prefix}
          </span>
        )}
        <span 
          className="text-2xl font-semibold text-gray-900 dark:text-gray-100"
          style={valueStyle}
        >
          {formatValue(value)}
        </span>
        {suffix && (
          <span className="text-lg text-gray-600 dark:text-gray-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

interface CountdownProps extends Omit<StatisticProps, 'value'> {
  /** Target date for countdown */
  value: Date | number;
  /** Format of countdown display */
  format?: string;
  /** Callback when countdown finishes */
  onFinish?: () => void;
}

const Countdown = ({
  value,
  format = 'HH:mm:ss',
  onFinish,
  ...props
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const targetTime = typeof value === 'number' ? value : value.getTime();
    
    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.max(0, targetTime - now);
      
      setTimeLeft(diff);
      
      if (diff === 0 && onFinish) {
        onFinish();
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [value, onFinish]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (format.includes('DD')) {
      return format
        .replace('DD', days.toString().padStart(2, '0'))
        .replace('HH', hours.toString().padStart(2, '0'))
        .replace('mm', minutes.toString().padStart(2, '0'))
        .replace('ss', seconds.toString().padStart(2, '0'));
    }

    const totalHours = Math.floor(totalSeconds / 3600);
    return format
      .replace('HH', totalHours.toString().padStart(2, '0'))
      .replace('mm', minutes.toString().padStart(2, '0'))
      .replace('ss', seconds.toString().padStart(2, '0'));
  };

  return (
    <Statistic
      {...props}
      value={formatTime(timeLeft)}
      formatter={(val) => (
        <span className={timeLeft === 0 ? 'text-red-500' : ''}>
          {val}
        </span>
      )}
    />
  );
};

Statistic.Countdown = Countdown;