'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import FloatingInput from './FloatingInput';
import { TRIAL, CONTACT } from '../../lib/constants';

export default function PropertyForm() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardMM: '',
    cardYYYY: '',
    billingZip: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleContinue = () => {
    console.log('Continue clicked', formData);
  };

  const handleViewHomes = () => {
    console.log('View Homes clicked');
  };

  return (
    <>
      <div className="mt-[15px] w-[324px] max-lg:w-full max-sm:w-full">
        <div className="flex items-center justify-center gap-[10px] flex-wrap">
          <Image src="/images/Visa.svg" alt="Visa" width={60} height={28} className="h-7 w-auto object-contain max-sm:h-6" />
          <Image src="/images/Amex.svg" alt="American Express" width={60} height={28} className="h-7 w-auto object-contain max-sm:h-6" />
          <Image src="/images/Discover.svg" alt="Discover" width={60} height={28} className="h-7 w-auto object-contain max-sm:h-6" />
          <Image src="/images/Mastercard.svg" alt="Mastercard" width={60} height={28} className="h-7 w-auto object-contain max-sm:h-6" />
        </div>
        <div className="flex items-center justify-center gap-[15px] mt-5 flex-wrap max-sm:gap-[10px]">
          <span className="text-xl text-[#1E293B] font-normal max-sm:text-lg">Your trial price</span>
          <span className="bg-black text-white py-[7px] px-5 rounded-[35px] text-xl font-bold max-sm:text-lg max-sm:py-[6px] max-sm:px-4">
            just {TRIAL.PRICE}
          </span>
        </div>
      </div>

      <div className="mt-[10px] w-[324px] max-lg:w-full max-sm:w-full">
        <form className="space-y-3">
          <fieldset>
            <legend className="sr-only">Credit Card Information</legend>
            <FloatingInput
              id="cardNumber"
              type="text"
              label="Credit Card Number"
              value={formData.cardNumber}
              onChange={handleInputChange}
              maxLength={16}
              required
              containerClassName="mb-3"
            />

            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-3">
                <FloatingInput
                  id="cardMM"
                  type="text"
                  label="MM"
                  value={formData.cardMM}
                  onChange={handleInputChange}
                  maxLength={2}
                  required
                  className="text-center"
                />
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <span className="text-2xl font-light text-[#64748B] max-sm:text-xl">/</span>
              </div>
              <div className="col-span-3">
                <FloatingInput
                  id="cardYYYY"
                  type="text"
                  label="YYYY"
                  value={formData.cardYYYY}
                  onChange={handleInputChange}
                  maxLength={4}
                  required
                  className="text-center"
                />
              </div>
              <div className="col-span-5">
                <FloatingInput
                  id="billingZip"
                  type="text"
                  label="Billing ZIP"
                  value={formData.billingZip}
                  onChange={handleInputChange}
                  maxLength={5}
                  required
                  className="text-center"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Offer Details */}
      <div className="rounded-lg mt-[15px] w-[324px] max-lg:w-full max-sm:w-full">
        <p className="text-sm font-bold text-[#64748B] font-['Helvetica',Arial,sans-serif] mb-[10px] max-sm:text-[13px]">
          Offer Details
        </p>
        <p className="text-[13px] leading-[1.5] text-[#64748B] text-justify m-0 font-['Helvetica',Arial,sans-serif] max-sm:text-xs max-sm:text-left">
          By clicking the button below, you agree to the Terms of Use and to be enrolled in the {TRIAL.DURATION_TEXT} for the amount of {TRIAL.PRICE}. You may cancel by calling {CONTACT.PHONE} or by email. After the trial expires on Apr 08, 2023, your enrollment will automatically continue and your account will be charged {TRIAL.REGULAR_PRICE} per month until you cancel. If you cancel your account during the trial, there will be NO FURTHER CHARGES.
        </p>
      </div>

      {/* View Homes Button */}
      <button
        type="button"
        onClick={handleViewHomes}
        className="w-[324px] max-lg:w-full max-sm:w-full h-[71px] bg-[#E31C23] text-white border-none rounded-md flex items-center justify-center px-[30px] cursor-pointer transition-all duration-300 relative hover:transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(227,28,35,0.3)] active:transform active:translate-y-0 max-sm:h-[60px] max-sm:px-5 mt-2"
      >
        <span className="flex flex-col items-center gap-[5px]">
          <span className="text-base font-normal leading-none max-sm:text-sm">I agree and accept</span>
          <span className="text-xl font-bold leading-none max-sm:text-lg">View Homes</span>
        </span>
        <ArrowRight className="absolute right-[30px] w-[25px] h-[25px] font-bold max-sm:right-5 max-sm:w-5 max-sm:h-5" />
      </button>
    </>
  );
}