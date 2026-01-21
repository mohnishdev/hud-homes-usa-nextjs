import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    { stars: 5, text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."', author: 'Anthony R.' },
    { stars: 4, text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."', author: 'Anthony R.' },
    { stars: 5, text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."', author: 'Anthony R.' }
  ];

  return (
    <section className="bg-[--color-testimonial-bg] py-[60px] mt-[50px] md:py-10 md:mt-[30px]">
      {/* Header */}
      <div className="text-center mb-[50px] md:mb-[30px]">
        <Image 
          src="/images/quote.svg" 
          alt="Quote" 
          width={65}
          height={65}
          className="h-[65px] w-auto mb-5 mx-auto sm:h-[50px]"
        />
        <h2 className="text-[22px] font-extrabold text-[#333333] m-0 md:text-xl sm:text-lg" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          What our customers say
        </h2>
      </div>

      {/* Testimonials Container */}
      <div className="flex justify-center items-stretch gap-10 max-w-[1200px] mx-auto lg:flex-col lg:items-center lg:gap-[30px]">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-transparent p-0 text-center flex-1 max-w-[350px] flex flex-col items-center lg:max-w-[500px] sm:max-w-full"
          >
            {/* Stars */}
            <div className="flex gap-2 justify-center mb-5 sm:gap-1.5 sm:mb-[15px]">
              {[...Array(5)].map((_, i) => (
                <i 
                  key={i}
                  className={`bi ${i < testimonial.stars ? 'bi-star-fill' : 'bi-star'} text-[--color-brand-red] text-[22px] sm:text-lg`}
                ></i>
              ))}
            </div>

            {/* Text */}
            <p className="text-base leading-[1.6] text-[#333333] m-0 mb-[15px] sm:text-[15px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              {testimonial.text}
            </p>

            {/* Author */}
            <p className="text-sm font-bold text-[#333333] m-0 sm:text-[13px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}