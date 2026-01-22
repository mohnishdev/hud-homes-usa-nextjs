'use client';

import { Heart, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import { RANDOMIZATION } from '../../lib/constants';

export default function CounterBar() {
  const [peopleInterested, setPeopleInterested] = useState(null);
  const [peopleWatching, setPeopleWatching] = useState(null);

  useEffect(() => {
    // Generate random numbers on component mount
    setPeopleInterested(Math.floor(Math.random() * (RANDOMIZATION.PEOPLE_INTERESTED_MAX - RANDOMIZATION.PEOPLE_INTERESTED_MIN + 1)) + RANDOMIZATION.PEOPLE_INTERESTED_MIN); // Random between 118-168
    setPeopleWatching(Math.floor(Math.random() * (RANDOMIZATION.PEOPLE_WATCHING_MAX - RANDOMIZATION.PEOPLE_WATCHING_MIN + 1)) + RANDOMIZATION.PEOPLE_WATCHING_MIN); // Random between 30-60
  }, []);

  return (
    <div className="counter-wrapper flex justify-center w-full px-[15px] py-[8px] max-sm:px-[10px] max-sm:py-[6px]">
      <div className="bg-[#010322] text-white rounded-[35px] inline-flex flex-wrap justify-center items-center gap-[37px] h-auto py-[13px] px-[30px] w-full max-w-[764px] max-[900px]:gap-3 max-[900px]:px-[20px] max-[900px]:py-3 max-sm:gap-2 max-sm:px-[12px]">
        <div className="flex items-center gap-2 max-[900px]:gap-1 max-sm:gap-1">
          <Heart className="w-7 h-7 max-[900px]:w-[22px] max-[900px]:h-[22px] max-sm:w-5 max-sm:h-5" />
          <span className="text-[26px] font-normal max-[900px]:text-lg max-sm:text-base">{peopleInterested}</span>
          <span className="text-2xl font-medium max-[900px]:text-base max-sm:text-xs whitespace-nowrap">people interested</span>
        </div>
        
        <div className="w-[1px] h-[30px] bg-white/30 max-sm:h-[24px]"></div>
        
        <div className="flex items-center gap-2 max-[900px]:gap-1 max-sm:gap-1">
          <Eye className="w-7 h-7 max-[900px]:w-[22px] max-[900px]:h-[22px] max-sm:w-5 max-sm:h-5" />
          <span className="text-[26px] font-normal max-[900px]:text-lg max-sm:text-base">{peopleWatching}</span>
          <span className="text-2xl font-medium max-[900px]:text-base max-sm:text-xs whitespace-nowrap">watching</span>
        </div>
      </div>
    </div>
  );
}