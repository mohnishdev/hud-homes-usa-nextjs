export default function Footer() {
  const footerLinks = [
    { text: "Contact Us", href: "#" },
    { text: "Terms and Conditions", href: "#" },
    { text: "Privacy Policy", href: "#" },
    { text: "Do Not Sell My Info", href: "#" }
  ];

  return (
    <footer className="bg-[#1a1a1a] py-10 text-white md:py-[30px]">
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <p className="text-sm text-[#cccccc] m-0 mb-5 font-['Helvetica',Arial,sans-serif] leading-[1.5] font-normal max-sm:text-[13px]">
          Copyright © 2023 HUDHomesUSA.org, the nation's premier source for foreclosure real estate.
        </p>

        <nav className="flex flex-row justify-center items-center gap-[30px] my-5 mb-[30px] flex-wrap max-sm:flex-col max-sm:gap-[15px]">
          {footerLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="text-[#cccccc] underline text-sm font-['Helvetica',Arial,sans-serif] transition-colors duration-200 font-normal hover:text-white max-sm:text-[13px]"
            >
              {link.text}
            </a>
          ))}
        </nav>

        <p className="text-sm text-[#cccccc] m-0 mx-auto font-['Helvetica',Arial,sans-serif] leading-[1.6] max-w-[900px] max-sm:text-[13px]">
          HUDHomesUSA.org is not affiliated with, endorsed, authorized, or approved by the Federal Government or the US Department of Housing and Urban Development.
        </p>
      </div>
    </footer>
  );
}