import { cn } from '@jetstream/core';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns';
import { useRef } from 'react';
import { useCalendar } from 'react-aria';
import { useCalendarState } from 'react-stately';

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export const Calendar = ({ value, onChange }: CalendarProps) => {
  const state = useCalendarState({
    value: value ? new Date(value) : null,
    onChange: (date) => onChange?.(new Date(date)),
    createCalendar: () => ({ identifier: 'gregory' }),
  });
  
  const ref = useRef<HTMLDivElement>(null);
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar({}, state, ref);
  
  const currentMonth = state.visibleRange.start.toDate();
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Pad with empty cells for proper grid alignment
  const startDay = monthStart.getDay();
  const paddedDays = Array(startDay).fill(null).concat(days);
  
  return (
    <div className="p-4" ref={ref} {...calendarProps}>
      <div className="flex items-center justify-between mb-4">
        <button
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          {...prevButtonProps}
        >
          ←
        </button>
        <h2 className="font-semibold text-gray-900 dark:text-gray-100">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          {...nextButtonProps}
        >
          →
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 p-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {paddedDays.map((day, index) => {
          if (!day) {
            return <div key={index} className="p-2" />;
          }
          
          const isSelected = value && isSameDay(day, value);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isTodayDate = isToday(day);
          
          return (
            <button
              key={day.toISOString()}
              className={cn(
                'p-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700',
                'focus:outline-none focus:ring-2 focus:ring-blue-500',
                isSelected && 'bg-blue-500 text-white hover:bg-blue-600',
                !isCurrentMonth && 'text-gray-400 dark:text-gray-600',
                isTodayDate && !isSelected && 'bg-gray-200 dark:bg-gray-600'
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