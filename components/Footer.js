export default function Footer() {
  return (
    <footer className="bg-[--color-dark-bg] py-10 text-white md:py-[30px]">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Copyright */}
        <p className="text-sm text-gray-200 m-0 mb-5 leading-[1.5] font-normal px-2.5 sm:text-[13px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          Copyright © 2023 HUDHomesUSA.org, the nation's premier source for foreclosure real estate.
        </p>

        {/* Links */}
        <div className="flex justify-center items-center gap-[30px] my-5 mb-[30px] flex-wrap md:flex-col md:gap-[15px]">
          <a href="#" className="text-white underline text-sm font-normal transition-colors hover:text-gray-300 sm:text-[13px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Contact Us
          </a>
          <a href="#" className="text-white underline text-sm font-normal transition-colors hover:text-gray-300 sm:text-[13px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Terms and Conditions
          </a>
          <a href="#" className="text-white underline text-sm font-normal transition-colors hover:text-gray-300 sm:text-[13px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Privacy Policy
          </a>
          <a href="#" className="text-white underline text-sm font-normal transition-colors hover:text-gray-300 sm:text-[13px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Do Not Sell My Info
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-200 m-0 mx-auto leading-[1.6] max-w-[900px] px-2.5 sm:text-[13px]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          HUDHomesUSA.org is not affiliated with, endorsed, authorized, or approved by the Federal Government or the US Department of Housing and Urban Development.
        </p>
      </div>
    </footer>
  );
}