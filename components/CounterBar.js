'use client';

import { useEffect, useState } from 'react';

const randomBetween = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function CounterBar() {
  const [interested, setInterested] = useState(164);
  const [watching, setWatching] = useState(38);

  useEffect(() => {
    setInterested(randomBetween(118, 168));
    setWatching(randomBetween(30, 60));
  }, []);

  return (
    <div className="flex justify-center mb-6 px-4">
      <div className="bg-[--color-dark-black] text-white rounded-full inline-flex justify-center items-center gap-10 h-[54px] px-[30px] w-full max-w-[720px] md:gap-5 md:px-5 md:min-h-[54px] md:flex-wrap md:py-3 sm:gap-4 sm:px-4 sm:py-2.5">
        <div className="flex items-center gap-2 sm:gap-1.5">
          <i className="bi bi-heart text-[28px] md:text-[22px] sm:text-lg"></i>
          <span className="text-[26px] font-normal md:text-xl sm:text-lg">
            {interested}
          </span>
          <span className="text-2xl font-medium md:text-lg sm:text-[15px]">
            people interested
          </span>
        </div>
        
        <div className="w-px h-[38px] bg-white/30 md:hidden"></div>
        
        <div className="flex items-center gap-2 sm:gap-1.5">
          <i className="bi bi-eye text-[28px] md:text-[22px] sm:text-lg"></i>
          <span className="text-[26px] font-normal md:text-xl sm:text-lg">
            {watching}
          </span>
          <span className="text-2xl font-medium md:text-lg sm:text-[15px]">
            watching
          </span>
        </div>
      </div>
    </div>
  );
}