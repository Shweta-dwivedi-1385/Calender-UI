import React from 'react';
import CalendarCard from './components/CalendarCard';

function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-8 font-sans selection:bg-[#1e90ff]/30">
      <div className="w-full max-w-[760px]">
        <CalendarCard />
      </div>
    </div>
  );
}

export default App;
