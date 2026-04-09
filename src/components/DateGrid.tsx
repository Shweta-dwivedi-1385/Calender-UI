import React from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isWeekend
} from 'date-fns';

type Props = {
  currentDate: Date;
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
};

export default function DateGrid(props: Props) {
 
  const currentDate = new Date(2022, 0, 1);

  const startDay = startOfMonth(currentDate);
  const endDay = endOfMonth(currentDate);

  const monthDays = eachDayOfInterval({
    start: startDay,
    end: endDay
  });

  const weekStart = startDay.getDay();
  const adjustedWeekStart = weekStart === 0 ? 6 : weekStart - 1;

  const paddedDays = Array(adjustedWeekStart)
    .fill(null)
    .map((_, i) => {
      const prevDate = new Date(startDay);
      prevDate.setDate(startDay.getDate() - (adjustedWeekStart - i));
      return prevDate;
    })
    .concat(monthDays);

  const totalSlots = paddedDays.length > 35 ? 42 : 35;

  const trailingDays = Array(totalSlots - paddedDays.length)
    .fill(null)
    .map((_, i) => {
      const nextDate = new Date(endDay);
      nextDate.setDate(endDay.getDate() + i + 1);
      return nextDate;
    });

  const allDays = [...paddedDays, ...trailingDays];

  // 🔥 FIX: use React.ReactNode instead of JSX.Element
  const rows: React.ReactNode[] = [];
  let days: React.ReactNode[] = [];

  allDays.forEach((day, i) => {
    if(!day)return;
    const formattedDate = format(day, 'd');
    const monthFlag = isSameMonth(day, currentDate);
    const isWeekEndFlag = isWeekend(day);

    let textColorClass = "text-[#333333]";

    if (!monthFlag) {
      textColorClass = "text-[#9CA3AF]";
    } else if (isWeekEndFlag) {
      textColorClass = "text-[#A9A9A9] font-extrabold";
    }

    days.push(
      <div key={day.toString()} className="flex items-center justify-center py-5">
        <span className={`text-[14px] ${textColorClass}`}>
          {formattedDate}
        </span>
      </div>
    );

    if (days.length === 7) {
      rows.push(
        <div key={`row-${i}`} className="grid grid-cols-7 gap-6">
          {days}
        </div>
      );
      days = [];
    }
  });

  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <div className="w-[60%] pl-4 pr-12 pb-10 pt-[30px] bg-white flex flex-col justify-start z-0 relative">

      {/* Week Days Header */}
      <div className="grid grid-cols-7 w-full mb-6">
        {weekDays.map((day, idx) => (
          <div
            key={day}
            className={`text-center text-[12px] font-bold tracking-widest ${
              idx >= 5 ? 'text-[#009dff]' : 'text-[#6b7280]'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="flex flex-col gap-y-8 mt-10">
        {rows}
      </div>
    </div>
  );
}