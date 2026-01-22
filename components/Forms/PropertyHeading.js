'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import FloatingInput from './FloatingInput';
import { INITIAL_FORM_DATA } from '../../lib/constants';

export default function PropertyHeading({setShowPropertyForm}) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleContinue = () => {
    setShowPropertyForm(true);
    console.log('Continue clicked', formData);
  };

  return (
    <>
      {/* Main Heading */}
      <div className="w-[349px] max-lg:w-full font-['Helvetica'] font-bold text-[34px] leading-[0.99] tracking-[-0.03em] max-sm:text-2xl max-sm:w-full text-left">
        Get instant access to <span className="text-[#E31C23]">Foreclosure Deals</span> as low as $10,000
      </div>

      {/* Secondary Heading */}
      <div className="w-[349px] max-lg:w-full font-['Helvetica'] font-[400] text-[24px] leading-[1] tracking-[-0.03em] mt-[10px] mb-[10px] max-sm:text-lg max-sm:w-full text-left">
        Sign up for a <span className="font-bold">30 day Trial</span>
      </div>

      {/* Registration Form */}
      <form id="registrationForm" className="w-[324px] max-lg:w-full max-sm:w-full">
        <fieldset>
          <legend className="sr-only">Personal Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <FloatingInput
              id="firstName"
              type="text"
              label="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <FloatingInput
              id="lastName"
              type="text"
              label="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          <FloatingInput
            id="phone"
            type="tel"
            label="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            containerClassName="mb-3"
            required
          />

          <FloatingInput
            id="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={handleInputChange}
            containerClassName="mb-3"
            required
          />
        </fieldset>

        <button
          type="button"
          id="continueBtn"
          onClick={handleContinue}
          className="w-full h-[45px] py-1 px-5 border-none rounded-md bg-[#E31C23] text-white text-xl font-bold flex items-center justify-center relative cursor-pointer max-sm:text-lg"
        >
          Continue
          <ArrowRight className="absolute right-5 w-5 h-5 max-sm:text-lg" />
        </button>
      </form>
    </>
  );
}