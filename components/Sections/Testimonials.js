import Image from 'next/image';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../lib/constants';

export default function Testimonials() {

  return (
    <section className="bg-[#F7F8FA] py-[60px] mt-[50px] md:py-10 md:mt-[30px]">
      <div className="text-center mb-[50px] md:mb-[30px]">
        <div className="mb-5">
          <Image 
            src="/images/quote.svg" 
            alt="Quote" 
            width={65} 
            height={65} 
            className="h-[65px] w-auto mx-auto max-sm:h-[50px]"
          />
        </div>
        <h2 className="text-[22px] font-extrabold text-[#333333] m-0 font-['Helvetica',Arial,sans-serif] md:text-xl max-sm:text-lg">
          What our customers say
        </h2>
      </div>

      <div className="flex justify-center items-stretch gap-10 max-w-[1200px] mx-auto max-lg:flex-col max-lg:items-center max-lg:gap-[30px]">
        {TESTIMONIALS.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-transparent p-0 text-center flex-1 max-w-[350px] flex flex-col items-center max-lg:max-w-[500px] max-sm:max-w-full"
          >
            <div className="flex gap-2 justify-center mb-5 max-sm:gap-[6px] max-sm:mb-[15px]">
              {[...Array(testimonial.stars)].map((_, index) => (
                <Star 
                  key={index}
                  className="icon-testimonial"
                />
              ))}
            </div>
            <p className="text-testimonial">
              "{testimonial.text}"
            </p>
            <p className="text-testimonial-author">
              {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}