'use client';

import Image from 'next/image';
import { ImageIcon, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { RANDOMIZATION, PROPERTY } from '../../lib/constants';

export default function PropertyCard() {
  const [imageCounter, setImageCounter] = useState('1 / 3');

  useEffect(() => {
    // Generate random image count between 3-8 on component mount
    const randomCount = Math.floor(Math.random() * (RANDOMIZATION.IMAGE_COUNT_MAX - RANDOMIZATION.IMAGE_COUNT_MIN + 1)) + RANDOMIZATION.IMAGE_COUNT_MIN;
    setImageCounter(`1 / ${randomCount}`);
  }, []);

  return (
    <div className="w-full max-w-[394px] self-start flex flex-col items-center px-[3px] max-lg:max-w-[500px] max-sm:max-w-full">
      {/* Property Card - Sticky on scroll to follow form */}
      <div className="sticky top-[100px] bg-white rounded overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] mb-[30px] w-full max-w-[330px] max-lg:order-1 max-lg:max-w-[500px] max-sm:max-w-full mt-6 lg:mt-0 z-10">
        <div className="relative w-full overflow-hidden">
          <Image
            src="/images/property.svg"
            alt="Property"
            width={330}
            height={186}
            className="w-full h-auto aspect-video object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/75 text-white py-[6px] px-3 rounded-md text-sm font-medium flex items-center gap-[6px] max-sm:text-[13px] max-sm:py-1 max-sm:px-[10px]">
            <ImageIcon className="w-[14px] h-[14px]" />
            <span>{imageCounter}</span>
          </div>
          <button 
            className="absolute top-3 right-3 w-[45px] h-[45px] bg-white/95 border-none rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white hover:scale-110 max-sm:w-10 max-sm:h-10"
            aria-label="Add property to favorites"
          >
            <Heart className="w-[22px] h-[22px] text-[#E31C23] max-sm:w-5 max-sm:h-5" />
          </button>
        </div>

        <div className="flex flex-col justify-start items-start p-4 max-sm:p-[15px]">
          {/* Deal Score */}
          <div className="flex items-center gap-2 mb-2">
            <Image src="/images/tag.svg" alt="star rating" width={20} height={20} className="h-5 w-auto" />
            <span className="text-[#E31C23] font-bold text-sm">{PROPERTY.DEAL_SCORE}</span>
            <span className="text-[#E31C23] text-sm font-bold">Deal Score</span>
          </div>

          {/* Great Deal and Property Type */}
          <div className="flex items-center gap-[10px] flex-wrap mb-3">
            <span className="text-[#010322] text-lg font-bold max-sm:text-base">{PROPERTY.DEAL_LABEL}</span>
            <span className="text-[#D1D5DB] text-lg max-sm:text-base">|</span>
            <span className="text-[#64748B] text-[15px] max-sm:text-sm">{PROPERTY.PROPERTY_TYPE}</span>
          </div>

          {/* Property Category */}
          <div className="text-[#1E293B] text-[17px] font-medium mb-2 max-sm:text-base">{PROPERTY.CATEGORY}</div>

          {/* Property Specs */}
          <div className="flex gap-4 flex-wrap mb-2 max-sm:gap-3">
            <span className="text-[#64748B] text-[15px] max-sm:text-sm">
              <strong className="text-[#1E293B] font-bold">{PROPERTY.BEDS}</strong> bed
            </span>
            <span className="text-[#64748B] text-[15px] max-sm:text-sm">
              <strong className="text-[#1E293B] font-bold">{PROPERTY.BATHS}</strong> bath
            </span>
            <span className="text-[#64748B] text-[15px] max-sm:text-sm">
              <strong className="text-[#1E293B] font-bold">{PROPERTY.SQFT}</strong> sqft
            </span>
          </div>

          {/* Property Location */}
          <div className="text-[#64748B] text-[15px] max-sm:text-sm">{PROPERTY.LOCATION}</div>
        </div>
      </div>
    </div>
  );
}