import { cn } from '@jetstream/core';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns';
import { useState } from 'react';
import styles from './Calendar.module.css';

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export const Calendar = ({ value, onChange }: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Pad with empty cells for proper grid alignment
  const startDay = monthStart.getDay();
  const paddedDays = Array(startDay).fill(null).concat(days);
  
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
          
          const isSelected = value && isSameDay(day, value);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isTodayDate = isToday(day);
          
          return (
            <button
              key={day.toISOString()}
              className={cn(
                styles.dayButton,
                isSelected && styles.dayButtonSelected,
                !isCurrentMonth && styles.dayButtonOtherMonth,
                isTodayDate && !isSelected && styles.dayButtonToday
              )}
              onClick={() => onChange?.(day)}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
};