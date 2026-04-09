import React from 'react';

export default function HeroSection({ year = 2022, month = 'JANUARY' }: { year?: number, month?: string }) {
  return (
    <div className="relative w-full z-0 flex flex-col">
      {/* SVG Definitions for strictly true mathematical clip paths across bounding boxes */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="imageMask" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 
            L 1 0 
            L 1.5 0.3 
            Q 0.94 0.44 0.69 0.64 
            L 0.34 0.86 
            L 0 0.53 
            Z" />
          </clipPath>
          <clipPath id="blueMask" clipPathUnits="objectBoundingBox">
  <path d="
    M 0 0 
    L 1 0 
    L 1 0.72 
    Q 1.00 0 1.1 0.73 
    Q 0.7 0.99 0.7 0.95 
    Q 0.4 0.65 0.30 0.65 
    Q 0.20 0.70 0 0.88 
    Z
  " />
</clipPath>
        </defs>
      </svg>

      <div className="relative w-full h-[450px] z-0">
        {/* Background Blue Shape bounded perfectly, extending further down to reveal exactly the band thickness */}
        <div
  className="absolute top-0 left-0 w-full h-[450px] bg-gradient-to-b from-[#009dff] via-[#009dff] to-[#1F51FF] pointer-events-none z-0"
  style={{ clipPath: 'url(#blueMask)' }}
></div>

        {/* Foreground Image clipped directly matching the V and rising curve logic perfectly */}
        <div
  className="absolute top-0 left-0 w-full h-[450px] z-0"
  style={{ clipPath: 'url(#imageMask)' }}
>
          <img src="/hero.png" alt="Mountain climber" className="w-full h-full object-cover object-[center_35%]" />
        </div>

        <div className="absolute bottom-[130px] right-[6%] text-right text-white z-20 pointer-events-none">
          <div className="text-[40px] font-bold tracking-widest leading-none mb-[-5px]">{year}</div>
          <div className="text-[35px] font-extrabold tracking-wide uppercase leading-none mb-[-40px]">{month}</div>
        </div>
      </div>
    </div>
  );
}