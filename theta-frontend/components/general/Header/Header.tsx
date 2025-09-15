"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-[#FFFFFF] shadow-sm z-999">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Links */}
        <nav className="flex items-center space-x-32 text-[#646363] font-medium 2xl:space-x-72">
          <Link href="/#about" className="hover:[#126F42]">
            About Theta
          </Link>
          <Link href="/#contact" className="hover:text-[#126F42]">
            Contact us
          </Link>
        </nav>

        {/* Logo in Center */}
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Theta Logo" width={120} height={60} />
          </Link>
        </div>

        {/* Right Links + Button */}
        <div className="flex items-center font-medium  space-x-32 2xl:space-x-72">
          <Link href="/privacy" className="text-[#646363] hover:text-[#126F42]">
            Privacy & policy
          </Link>
          <Link
            href="#download"
            className="bg-[#126F42] text-[#F5F5F5] px-5 py-2 rounded-md transition-shadow duration-300 shadow hover:shadow-2xl"
          >
            Download app
          </Link>
        </div>
      </div>
    </header>
  );
}
