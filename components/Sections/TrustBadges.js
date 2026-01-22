import Image from 'next/image';

export default function TrustBadges() {
  return (
    <div className="py-[5px] w-[324px] max-lg:w-full max-sm:w-full">
      <div className="flex items-center justify-center gap-5 flex-wrap max-sm:gap-5">
        <Image 
          src="/images/guarantee.svg" 
          alt="100% Satisfaction Guarantee" 
          width={60} 
          height={46} 
          className="h-10 w-auto object-contain max-sm:h-[35px]" 
          style={{ height: '46px' }} 
        />
        <Image 
          src="/images/certify.svg" 
          alt="GoDaddy Verified & Secured" 
          width={60} 
          height={40} 
          className="h-10 w-auto object-contain max-sm:h-[35px]" 
        />
        <Image 
          src="/images/house.svg" 
          alt="Equal Housing Opportunity" 
          width={60} 
          height={65} 
          className="h-10 w-auto object-contain max-sm:h-[35px]" 
          style={{ height: '65px' }} 
        />
      </div>
    </div>
  );
}