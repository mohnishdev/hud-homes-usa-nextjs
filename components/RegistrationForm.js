'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RegistrationForm() {
  const [showStep2, setShowStep2] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'David',
    lastName: 'Tang',
    phone: '818-678-4321',
    email: 'davidt.1978@yahoo.com',
    cardNumber: '',
    cardMM: '',
    cardYYYY: '',
    billingZip: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let processedValue = value;

    // Numeric only validation
    if (['cardNumber', 'cardMM', 'cardYYYY', 'billingZip'].includes(id)) {
      processedValue = value.replace(/\D/g, '');
    }

    setFormData(prev => ({
      ...prev,
      [id]: processedValue
    }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    
    const form = e.target.closest('form');
    if (form.checkValidity()) {
      setShowStep2(true);
      
      // Scroll to credit card section with offset
      setTimeout(() => {
        const creditCardDiv = document.getElementById('creditCardSection');
        if (creditCardDiv) {
          const elementPosition = creditCardDiv.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 35;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      form.reportValidity();
    }
  };

  return (
    <div className="w-full max-w-[340px] flex flex-col gap-[18px] px-4 min-h-[800px] lg:max-w-[500px] lg:min-h-[400px] sm:max-w-full sm:min-h-[400px]">
      {/* Main Heading */}
      <div className="w-full font-bold text-[32px] leading-[1.1] md:text-[28px] sm:text-2xl" style={{ fontFamily: 'Helvetica' }}>
        Get instant access to <span className="text-[--color-brand-red]">Foreclosure Deals</span> as low as $10,000
      </div>

      {/* Secondary Heading */}
      <div className="font-normal text-[22px] leading-[1.2] md:text-xl sm:text-lg" style={{ fontFamily: 'Helvetica' }}>
        Sign up for a <span className="font-bold">30 day Trial</span>
      </div>

      {/* Registration Form */}
      <form id="registrationForm" className="w-full">
        <div className="grid grid-cols-2 gap-3 mb-3 sm:grid-cols-1">
          <div className="relative">
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="peer h-[45px] w-full px-3 pt-[1.625rem] pb-[0.625rem] text-lg border border-[--color-border-slate] rounded focus:border-black focus:outline-none focus:ring-[0.2rem] focus:ring-black/10 sm:text-base"
              placeholder=" "
              required
            />
            <label 
              htmlFor="firstName"
              className="absolute left-3 top-4 text-base text-slate-600 transition-all pointer-events-none peer-focus:top-[0.625rem] peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-[0.625rem] peer-[:not(:placeholder-shown)]:text-xs sm:text-sm"
            >
              First Name
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="peer h-[45px] w-full px-3 pt-[1.625rem] pb-[0.625rem] text-lg border border-[--color-border-slate] rounded focus:border-black focus:outline-none focus:ring-[0.2rem] focus:ring-black/10 sm:text-base"
              placeholder=" "
              required
            />
            <label 
              htmlFor="lastName"
              className="absolute left-3 top-4 text-base text-slate-600 transition-all pointer-events-none peer-focus:top-[0.625rem] peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-[0.625rem] peer-[:not(:placeholder-shown)]:text-xs sm:text-sm"
            >
              Last Name
            </label>
          </div>
        </div>

        <div className="relative mb-3">
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="peer h-[45px] w-full px-3 pt-[1.625rem] pb-[0.625rem] text-lg border border-[--color-border-slate] rounded focus:border-black focus:outline-none focus:ring-[0.2rem] focus:ring-black/10 sm:text-base"
            placeholder=" "
            required
          />
          <label 
            htmlFor="phone"
            className="absolute left-3 top-4 text-base text-slate-600 transition-all pointer-events-none peer-focus:top-[0.625rem] peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-[0.625rem] peer-[:not(:placeholder-shown)]:text-xs sm:text-sm"
          >
            Phone
          </label>
        </div>

        <div className="relative mb-3">
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="peer h-[45px] w-full px-3 pt-[1.625rem] pb-[0.625rem] text-lg border border-[--color-border-slate] rounded focus:border-black focus:outline-none focus:ring-[0.2rem] focus:ring-black/10 sm:text-base"
            placeholder=" "
            required
          />
          <label 
            htmlFor="email"
            className="absolute left-3 top-4 text-base text-slate-600 transition-all pointer-events-none peer-focus:top-[0.625rem] peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-[0.625rem] peer-[:not(:placeholder-shown)]:text-xs sm:text-sm"
          >
            Email
          </label>
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className={`w-full h-[45px] px-5 border-0 rounded-md bg-[--color-brand-red] text-white text-xl font-bold flex items-center justify-center relative cursor-pointer sm:text-lg lg:max-w-full ${showStep2 ? 'step2-hidden' : ''}`}
        >
          Continue
          <i className="bi bi-arrow-right absolute right-5 text-xl sm:text-lg"></i>
        </button>
      </form>

      {/* Payment Logos */}
      <div className={`mt-[5px] w-full ${!showStep2 ? 'step2-hidden' : ''}`}>
        <div className="flex items-center justify-center gap-2.5 flex-wrap">
          <Image src="/images/Visa.svg" alt="Visa" width={45} height={28} className="h-7 w-auto object-contain sm:h-6" />
          <Image src="/images/Amex.svg" alt="American Express" width={45} height={28} className="h-7 w-auto object-contain sm:h-6" />
          <Image src="/images/Discover.svg" alt="Discover" width={45} height={28} className="h-7 w-auto object-contain sm:h-6" />
          <Image src="/images/Mastercard.svg" alt="Mastercard" width={45} height={28} className="h-7 w-auto object-contain sm:h-6" />
        </div>

        <div className="flex items-center justify-center gap-[15px] mt-5 flex-wrap sm:gap-2.5">
          <span className="text-xl text-slate-800 font-normal sm:text-lg">Your trial price</span>
          <span className="bg-[--color-dark-black] text-white py-[7px] px-5 rounded-[35px] text-xl font-bold sm:text-lg sm:py-1.5 sm:px-4">
            just $1.00
          </span>
        </div>
      </div>

      {/* Credit Card Section */}
      <div id="creditCardSection" className={`mt-2.5 w-full lg:max-w-full ${!showStep2 ? 'step2-hidden' : ''}`}>
        <div className="relative mb-3">
          <input
            type="text"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="peer h-[45px] w-full px-3 pt-[1.625rem] pb-[0.625rem] text-lg border-2 border-[--color-border-slate] rounded-lg focus:border-black focus:outline-none focus:ring-[0.2rem] focus:ring-black/10 sm:text-base sm:h-[42px]"
            placeholder=" "
            maxLength="16"
            required
          />
          <label 
            htmlFor="cardNumber"
            className="absolute left-3 top-4 text-base text-slate-600 transition-all pointer-events-none peer-focus:top-[0.625rem] peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-[0.625rem] peer-[:not(:placeholder-shown)]:text-xs sm:text-sm"
          >
            Credit Card Number
          </label>
        </div>

        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-3 relative">
            <input
              type="text"
              id="cardMM"
              value={formData.cardMM}
              onChange={handleInputChange}
              className="peer h-[45px] w-full px-3 pt-[1.625rem] pb-[0.625rem] text-lg border-2 border-[--color-border-slate] rounded-lg focus:border-black focus:outline-none focus:ring-[0.2rem] focus:ring-black/10 text-center sm:text-base sm:h-[42px]"
              placeholder=" "
              maxLength="2"
              required
            />
            <label 
              htmlFor="cardMM"
              className="absolute left-3 top-4 text-base text-slate-600 transition-all pointer-events-none peer-focus:top-[0.625rem] peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-[0.625rem] peer-[:not(:placeholder-shown)]:text-xs sm:text-sm"
            >
              MM
            </label>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <span className="text-2xl font-light text-slate-500 sm:text-xl">/</span>
          </div>

          <div className="col-span-3 relative">
            <input
              type="text"
              id="cardYYYY"
              value={formData.cardYYYY}
              onChange={handleInputChange}
              className="peer h-[45px] w-full px-3 pt-[1.625rem] pb-[0.625rem] text-lg border-2 border-[--color-border-slate] rounded-lg focus:border-black focus:outline-none focus:ring-[0.2rem] focus:ring-black/10 text-center sm:text-base sm:h-[42px]"
              placeholder=" "
              maxLength="4"
              required
            />
            <label 
              htmlFor="cardYYYY"
              className="absolute left-3 top-4 text-base text-slate-600 transition-all pointer-events-none peer-focus:top-[0.625rem] peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-[0.625rem] peer-[:not(:placeholder-shown)]:text-xs sm:text-sm"
            >
              YYYY
            </label>
          </div>

          <div className="col-span-5 relative">
            <input
              type="text"
              id="billingZip"
              value={formData.billingZip}
              onChange={handleInputChange}
              className="peer h-[45px] w-full px-3 pt-[1.625rem] pb-[0.625rem] text-lg border-2 border-[--color-border-slate] rounded-lg focus:border-black focus:outline-none focus:ring-[0.2rem] focus:ring-black/10 text-center sm:text-base sm:h-[42px]"
              placeholder=" "
              maxLength="5"
              required
            />
            <label 
              htmlFor="billingZip"
              className="absolute left-3 top-4 text-base text-slate-600 transition-all pointer-events-none peer-focus:top-[0.625rem] peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-[0.625rem] peer-[:not(:placeholder-shown)]:text-xs sm:text-sm"
            >
              Billing ZIP
            </label>
          </div>
        </div>
      </div>

      {/* Offer Details */}
      <div className={`rounded-lg mt-[15px] w-full ${!showStep2 ? 'step2-hidden' : ''}`}>
        <p className="text-sm font-bold text-slate-600 mb-2.5 sm:text-[13px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          Offer Details
        </p>
        <p className="text-[13px] leading-[1.5] text-slate-600 text-justify m-0 sm:text-xs sm:text-left" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          By clicking the button below, you agree to the Terms of Use and to be enrolled in the 30 days trial for the amount of $1.00. You may cancel by calling (800) 370-8870 or by email. After the trial expires on Apr 08, 2023, your enrollment will automatically continue and your account will be charged $49.90 per month until you cancel. If you cancel your account during the trial, there will be NO FURTHER CHARGES.
        </p>
      </div>

      {/* View Homes Button */}
      <button 
        type="button"
        className={`w-full h-[71px] bg-[--color-brand-red] text-white border-0 rounded-md flex items-center justify-center px-[30px] cursor-pointer transition-all relative hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(193,26,0,0.3)] active:translate-y-0 sm:h-[60px] sm:px-5 ${!showStep2 ? 'step2-hidden' : ''}`}
      >
        <span className="flex flex-col items-center gap-[5px]">
          <span className="text-base font-normal leading-none sm:text-sm">I agree and accept</span>
          <span className="text-xl font-bold leading-none sm:text-lg">View Homes</span>
        </span>
        <i className="bi bi-arrow-right absolute right-[30px] text-[25px] font-bold sm:right-5 sm:text-xl"></i>
      </button>

      {/* Trust Badges */}
      <div className={`py-[5px] w-full ${!showStep2 ? 'step2-hidden' : ''}`}>
        <div className="flex items-center justify-center gap-5 flex-wrap sm:gap-5">
          <Image src="/images/guarantee.svg" alt="100% Satisfaction Guarantee" width={60} height={46} className="h-10 w-auto object-contain sm:h-[35px]" style={{ height: '46px' }} />
          <Image src="/images/certify.svg" alt="GoDaddy Verified & Secured" width={60} height={40} className="h-10 w-auto object-contain sm:h-[35px]" />
          <Image src="/images/house.svg" alt="Equal Housing Opportunity" width={60} height={65} className="h-10 w-auto object-contain sm:h-[35px]" style={{ height: '65px' }} />
        </div>
      </div>
    </div>
  );
}