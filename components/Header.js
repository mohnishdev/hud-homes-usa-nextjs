import Image from 'next/image'

export default function Header() {
  return (
    <header className="py-3 bg-white">
      <div className="container flex justify-between items-center px-5 max-w-[1200px] mx-auto">
        <Image 
          src="/images/logo.png" 
          alt="logo" 
          width={160}
          height={40}
          className="max-h-10 w-auto"
        />
        <a 
          href="#" 
          className="no-underline font-medium text-black text-sm sm:text-[13px]"
        >
          Sign In
        </a>
      </div>
    </header>
  )
}