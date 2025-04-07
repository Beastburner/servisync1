import React, { useState } from 'react';
import { format, addDays, isToday, isWeekend } from 'date-fns';

interface CalendarPickerProps {
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

const CalendarPicker: React.FC<CalendarPickerProps> = ({ onDateSelect, onTimeSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [currentMonth] = useState(new Date());

  const availableTimes = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
  ];

  const generateDays = () => {
    const days = [];
    for (let i = 0; i < 14; i++) {
      const date = addDays(currentMonth, i);
      days.push(date);
    }
    return days;
  };

  const handleDateClick = (date: Date) => {
    if (!isWeekend(date)) {
      setSelectedDate(date);
      onDateSelect(format(date, 'yyyy-MM-dd'));
      setSelectedTime('');
    }
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    onTimeSelect(time);
  };

  return (
    <div className="space-y-4 p-4 border-2 border-red-500">
      <h2 className="text-lg font-semibold mb-2">Select Date</h2>
      <div className="grid grid-cols-7 gap-2 mb-4">
        {generateDays().map((date) => (
          <button
            key={date.toString()}
            onClick={() => handleDateClick(date)}
            disabled={isWeekend(date)}
            className={`p-2 rounded-md text-center text-sm
              ${isToday(date) ? 'font-bold' : ''}
              ${selectedDate && date.toDateString() === selectedDate.toDateString() 
                ? 'bg-primary text-white' 
                : isWeekend(date) 
                  ? 'text-gray-300' 
                  : 'hover:bg-gray-100'}
            `}
          >
            <div>{format(date, 'EEE')}</div>
            <div>{format(date, 'd')}</div>
          </button>
        ))}
      </div>

      {selectedDate && (
        <div className="space-y-2 mt-4">
          <h3 className="font-medium text-lg">Select Time</h3>
          <div className="grid grid-cols-3 gap-3">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`p-2 rounded-md text-sm
                  ${selectedTime === time 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'}
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPicker;
