import React, { useState } from 'react';
import HeroSection from './HeroSection';
import NotesSection from './NotesSection';
import DateGrid from './DateGrid';

export default function CalendarCard() {
  const[currentDate, setCurrentDate] = useState(new Date(2022, 0, 1));
  const handlePrevMonth = () => {
  setCurrentDate(
    new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
  );
};

const handleNextMonth = () => {
  setCurrentDate(
    new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
  );
};
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
  <div className="w-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-sm relative">

    {/* HOOK (TOP MOST) */}
    <div className="absolute top-0 left-0 w-full z-[100] pointer-events-none">
      
      {/* Loops */}
      <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 w-[90%] flex justify-between">
        {[...Array(14)].map((_, i) => (
          <div key={i} className={`flex gap-[6px] relative ${i === 7 ? 'ml-[200px]' : ''}`}>
            <div className="w-[4px] h-[30px] bg-gradient-to-b from-[#4a4a4a] via-[#e0e0e0] to-[#2d2d2d] rounded-full"></div>
            <div className="w-[4px] h-[30px] bg-gradient-to-b from-[#4a4a4a] via-[#e0e0e0] to-[#2d2d2d] rounded-full"></div>
          </div>
        ))}
      </div>

      {/* CENTER HOOK */}
      <div className="absolute top-[-28px] left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[6px] h-[12px] bg-gray-400 rounded-full mb-1"></div>

        <svg width="140" height="24" viewBox="0 0 140 24">
          <path d="M0,22 L70,0 L140,22" fill="none" stroke="#333" strokeWidth="3" />
        </svg>
      </div>
    </div>
    <div className="absolute top-[60px] left-0 w-full flex justify-between px-10 z-50">
  <button
    onClick={handlePrevMonth}
    className="bg-white px-3 py-1 shadow-md rounded text-sm hover:bg-gray-100"
  >
    ◀
  </button>

  <button
    onClick={handleNextMonth}
    className="bg-white px-3 py-1 shadow-md rounded text-sm hover:bg-gray-100"
  >
    ▶
  </button>
</div>
    {/* HERO */}
    <HeroSection
  year={currentDate.getFullYear()}
  month={currentDate.toLocaleString("default", { month: "long" }).toUpperCase()}
/>

    {/* CONTENT */}
    <div className="flex flex-row w-full bg-white pt-[40px] pb-[100px] px-[12px] gap-[20px] min-h-[170px]">
      <NotesSection />
      <DateGrid 
        startDate={startDate} 
        endDate={endDate} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} 
      />
    </div>

  </div>
);
}