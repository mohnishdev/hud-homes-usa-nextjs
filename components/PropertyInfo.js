export default function PropertyInfo() {
  return (
    <div className="bg-transparent w-full max-w-[330px] lg:order-3 lg:max-w-[500px] sm:max-w-full">
      {/* Great Deals Section */}
      <div className="mb-[30px]">
        <h3 className="text-xl font-bold text-slate-800 mb-3 sm:text-lg" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          Great Deals in Your Area
        </h3>
        <p className="text-[15px] text-slate-600 leading-[1.6] m-0 sm:text-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          Get instant access to street addresses, personal contacts and special pricing on thousands of bargain foreclosure homes, many as low as $10,000.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mb-[30px]">
        <h3 className="text-xl font-bold text-slate-800 mb-3 sm:text-lg" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          Still have questions?
        </h3>
        <p className="text-[15px] text-slate-600 leading-[1.6] m-0 sm:text-sm" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          Please contact us via{' '}
          <a href="mailto:info@example.com" className="text-slate-800 underline font-semibold hover:text-[--color-brand-red]">
            Email
          </a>
          {' '}anytime (24 hours a day), or call us toll-free at{' '}
          <a href="tel:8003708870" className="text-slate-800 underline font-semibold hover:text-[--color-brand-red]">
            (800) 370-8870
          </a>
          {' '}during business hours.
        </p>
      </div>
    </div>
  );
}