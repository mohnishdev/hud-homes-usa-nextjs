import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 bg-white">
      <div className="container mx-auto flex justify-between items-center px-5 max-w-[1200px]">
        <Image 
          src="/images/logo.png" 
          alt="logo"
          width={200}
          height={60}
          priority
        />
        <Link 
          href="#" 
          className="no-underline font-medium text-black text-sm max-sm:text-[13px]"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}