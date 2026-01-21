'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const randomBetween = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function PropertyCard() {
  const [imageCount, setImageCount] = useState(3);

  useEffect(() => {
    setImageCount(randomBetween(3, 8));
  }, []);

  return (
    <div className="bg-white rounded overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] mb-[30px] w-full max-w-[330px] lg:order-1 lg:max-w-[500px] sm:max-w-full">
      {/* Property Image */}
      <div className="relative w-full overflow-hidden">
        <Image 
          src="/images/property.svg" 
          alt="Property" 
          width={330}
          height={186}
          className="w-full h-auto aspect-video object-cover"
        />
        
        {/* Image Counter */}
        <div className="absolute top-3 left-3 bg-black/75 text-white py-1.5 px-3 rounded-md text-sm font-medium flex items-center gap-1.5 sm:text-[13px] sm:py-1 sm:px-2.5">
          <i className="bi bi-image text-sm sm:text-[13px]"></i>
          <span>1 / {imageCount}</span>
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 w-[45px] h-[45px] bg-white/95 border-0 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white hover:scale-110 sm:w-10 sm:h-10">
          <i className="bi bi-heart text-[22px] text-[--color-brand-red] sm:text-xl"></i>
        </button>
      </div>

      {/* Property Details */}
      <div className="p-[9px_22px] sm:p-[15px]">
        {/* Deal Score */}
        <div className="flex items-center gap-2">
          <Image src="/images/tag.svg" alt="star rating" width={20} height={20} className="h-5 w-auto" />
          <span className="text-[--color-brand-red] font-bold text-sm sm:text-[13px]">7.8/10</span>
          <span className="text-[--color-brand-red] text-sm font-bold sm:text-[13px]">Deal Score</span>
        </div>

        {/* Deal Type */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-[#010322] py-1 text-lg font-bold sm:text-base">Great Deal</span>
          <span className="text-gray-300 text-lg sm:text-base">|</span>
          <span className="text-slate-600 text-[15px] sm:text-sm">REO Foreclosure</span>
        </div>

        {/* Property Category */}
        <div className="text-slate-800 text-[17px] font-medium sm:text-base">
          Single Family Home
        </div>

        {/* Property Specs */}
        <div className="flex gap-4 flex-wrap sm:gap-3">
          <span className="text-slate-600 text-[15px] sm:text-sm">
            <strong className="text-slate-800 font-bold">3</strong> bed
          </span>
          <span className="text-slate-600 text-[15px] sm:text-sm">
            <strong className="text-slate-800 font-bold">2</strong> bath
          </span>
          <span className="text-slate-600 text-[15px] sm:text-sm">
            <strong className="text-slate-800 font-bold">2,452</strong> sqft
          </span>
        </div>

        {/* Location */}
        <div className="text-slate-600 text-[15px] sm:text-sm">
          Oxnard, CA 93030
        </div>
      </div>
    </div>
  );
}