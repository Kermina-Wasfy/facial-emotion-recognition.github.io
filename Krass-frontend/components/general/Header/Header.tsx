"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#252424] shadow-md sticky top-0 z-50 w-full mx-auto ">
      <div className="container py-4">
        {/* Desktop Header */}
        <div
          className="hidden md:grid grid-cols-[1fr_minmax(120px,auto)_1fr]
              items-center font-sans text-sm md:text-xl xl:text-3xl"
               >
          {/* Left links */}
          <div className="flex items-center md:justify-center md:gap-20 xl:gap-24">
            <Link
              href="/"
              className="header-link transition text-white hover:text-[#8A6953]  pb-1 whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="header-link transition whitespace-nowrap text-white hover:text-[#8A6953] pb-1"
            >
              About us
            </Link>
            <Link
              href="/services"
              className="header-link transition text-white whitespace-nowrap hover:text-[#8A6953] pb-1"
            >
              Services
            </Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
             <Link href="/" passHref>
              <Image
                src="/logo.svg"
                alt="Krass Logo"
                width={100}
                height={100}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Right links */}
          <div className="flex items-center justify-center md:gap-20 xl:gap-24">
            <Link
              href="/Projects"
              className="header-link transition whitespace-nowrap text-white hover:text-[#8A6953]  pb-1"
            >
              Projects
            </Link>
            <Link
              href="/Blogs"
              className="header-link transition whitespace-nowrap text-white hover:text-[#8A6953] pb-1"
            >
              Blogs
            </Link>
            <Link
              href="/"
              className="header-link transition whitespace-nowrap text-white hover:text-[#8A6953] pb-1"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between">
          {/* Logo */}
          <div>
            <Image src="/logo.svg" alt="Krass Logo" width={60} height={60} />
          </div>

          {/* Burger icon */}
          <button onClick={() => setIsMenuOpen(true)}>
            <Image src="/burger_icon.svg" alt="Menu" width={30} height={30} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 h-screen w-3/4 bg-black shadow-md p-4 space-y-4 z-50 overflow-y-auto">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className=" block header-link transition text-white hover:text-[#8A6953] pb-1"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={() => setIsMenuOpen(false)}
              className=" block header-link transition text-white hover:text-[#8A6953] pb-1"
            >
              About us
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className=" block header-link transition text-white hover:text-[#8A6953] pb-1"
            >
              Services
            </Link>
            <Link
              href="/Projects"
              onClick={() => setIsMenuOpen(false)}
              className=" block header-link transition text-white hover:text-[#8A6953] pb-1"
            >
              Projects
            </Link>
            <Link
              href="/Blogs"
              onClick={() => setIsMenuOpen(false)}
              className=" block header-link transition text-white hover:text-[#8A6953] pb-1"
            >
              Blogs
            </Link>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className=" block header-link transition text-white hover:text-[#8A6953] pb-1"
            >
              Get in touch
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
