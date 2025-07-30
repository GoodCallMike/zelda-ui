import { cn } from '@jetstream/core';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, isAfter, isBefore, isWithinInterval } from 'date-fns';
import { useState } from 'react';
import styles from './Calendar.module.css';
import type { DateRange } from '../RangePicker/RangePicker';

interface CalendarProps {
  value?: Date | null;
  onChange?: (date: Date) => void;
  range?: DateRange | null;
  onRangeChange?: (range: DateRange) => void;
  rangeMode?: boolean;
}

export const Calendar = ({ value, onChange, range, onRangeChange, rangeMode = false }: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Pad with empty cells for proper grid alignment
  const startDay = monthStart.getDay();
  const paddedDays = Array(startDay).fill(null).concat(days);
  
  const handleDateClick = (day: Date) => {
    if (rangeMode && onRangeChange) {
      if (!range?.start || (range.start && range.end)) {
        // Start new range
        onRangeChange({ start: day, end: null });
      } else if (range.start && !range.end) {
        // Complete range
        if (isAfter(day, range.start)) {
          onRangeChange({ start: range.start, end: day });
        } else {
          onRangeChange({ start: day, end: range.start });
        }
      }
    } else {
      onChange?.(day);
    }
  };
  
  const isInRange = (day: Date) => {
    if (!rangeMode || !range?.start) return false;
    
    if (range.end) {
      return isWithinInterval(day, { start: range.start, end: range.end });
    }
    
    // Show preview range on hover
    if (hoverDate && isAfter(hoverDate, range.start)) {
      return isWithinInterval(day, { start: range.start, end: hoverDate });
    }
    
    return false;
  };
  
  const isRangeStart = (day: Date) => {
    return rangeMode && range?.start && isSameDay(day, range.start);
  };
  
  const isRangeEnd = (day: Date) => {
    if (!rangeMode || !range) return false;
    if (range.end) return isSameDay(day, range.end);
    if (hoverDate && range.start && isAfter(hoverDate, range.start)) {
      return isSameDay(day, hoverDate);
    }
    return false;
  };
  
  const goToPrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };
  
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <button
          className={styles.navButton}
          onClick={goToPrevMonth}
        >
          ←
        </button>
        <h2 className={styles.monthTitle}>
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button
          className={styles.navButton}
          onClick={goToNextMonth}
        >
          →
        </button>
      </div>
      
      <div className={styles.weekdaysGrid}>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className={styles.weekdayCell}>
            {day}
          </div>
        ))}
      </div>
      
      <div className={styles.daysGrid}>
        {paddedDays.map((day, index) => {
          if (!day) {
            return <div key={index} className={styles.emptyDay} />;
          }
          
          const isSelected = !rangeMode && value && isSameDay(day, value);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isTodayDate = isToday(day);
          const inRange = isInRange(day);
          const rangeStart = isRangeStart(day);
          const rangeEnd = isRangeEnd(day);
          
          return (
            <button
              key={day.toISOString()}
              className={cn(
                styles.dayButton,
                isSelected && styles.dayButtonSelected,
                !isCurrentMonth && styles.dayButtonOtherMonth,
                isTodayDate && !isSelected && !rangeStart && !rangeEnd && styles.dayButtonToday,
                inRange && styles.dayButtonInRange,
                rangeStart && styles.dayButtonRangeStart,
                rangeEnd && styles.dayButtonRangeEnd
              )}
              onClick={() => handleDateClick(day)}
              onMouseEnter={() => rangeMode && setHoverDate(day)}
              onMouseLeave={() => rangeMode && setHoverDate(null)}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
};