export default function PropertyInfoSections() {
  return (
    <div className="bg-transparent w-full max-w-[330px] flex flex-col items-start max-lg:order-3 max-lg:max-w-[500px] max-sm:max-w-full">
      <section className="mb-[30px] max-lg:mb-5 max-sm:mb-4 w-full text-left">
        <h3 className="text-xl font-bold text-[#1E293B] mb-3 max-sm:mb-2 font-['Helvetica',Arial,sans-serif] text-left max-sm:text-lg">
          Great Deals in Your Area
        </h3>
        <p className="text-[15px] text-[#64748B] leading-[1.6] m-0 font-['Helvetica',Arial,sans-serif] text-left max-sm:text-sm">
          Get instant access to street addresses, personal contacts and special pricing on thousands of bargain foreclosure homes, many as low as $10,000.
        </p>
      </section>

      <section className="mb-[30px] max-lg:mb-5 max-sm:mb-4 w-full text-left">
        <h3 className="text-xl font-bold text-[#1E293B] mb-3 max-sm:mb-2 font-['Helvetica',Arial,sans-serif] text-left max-sm:text-lg">
          Still have questions?
        </h3>
        <p className="text-[15px] text-[#64748B] leading-[1.6] m-0 font-['Helvetica',Arial,sans-serif] text-left max-sm:text-sm">
          Please contact us via{' '}
          <a href="mailto:info@example.com" className="text-[#1E293B] underline font-semibold hover:text-[#E31C23]">
            Email
          </a>{' '}
          anytime (24 hours a day), or call us toll-free at{' '}
          <a href="tel:8003708870" className="text-[#1E293B] underline font-semibold hover:text-[#E31C23]">
            (800) 370-8870
          </a>{' '}
          during business hours.
        </p>
      </section>
    </div>
  );
}