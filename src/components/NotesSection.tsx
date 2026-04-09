import React, { useState } from 'react';

export default function NotesSection() {
  const [notes, setNotes] = useState('');

  return (
    <div className="w-[32%] px-10 pt-2 pb-6 bg-white flex flex-col -mt-[100px]">
      <h2 className="text-[14px] font-bold text-[#333333] mb-5 uppercase tracking-wide">Notes</h2>
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-[200px] flex flex-col justify-between pt-[4px]">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-[1px] bg-[#d1d5db]"></div>
          ))}
        </div>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="absolute top-0 left-0 w-full h-[200px] resize-none focus:outline-none bg-transparent text-[#333333] font-medium leading-[49px] pt-[5px]"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
