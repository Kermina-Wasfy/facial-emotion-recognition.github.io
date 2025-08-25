import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container text-white py-8 mt-28">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-6 md:w-2/3.2">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="Krass Design Logo"
            width={190}
            height={150}
            className="object-contain"
          />

          {/* Columns */}
          <div className="grid grid-cols-3 gap-0 mt-6 text-lg">
            {/* First column */}
            <ul className="flex flex-col gap-8">
              <li>
                <Link href="/" className="hover:text-[#8A6953]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#8A6953]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#8A6953]">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#8A6953]">
                  Get in touch
                </Link>
              </li>
            </ul>

            {/* Second column */}
            <ul className="flex flex-col gap-8">
              <li>
                <Link href="/about" className="hover:text-[#8A6953]">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#8A6953]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#8A6953]">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/krass-constructions"
                  className="hover:text-[#8A6953]"
                >
                  Krass Constructions
                </Link>
              </li>
            </ul>

            {/* Third column - Contact Us */}
            <div>
              <h2 className="font-semibold mb-2 text-xl">Contact us</h2>
              <ul className="flex flex-col gap-4 list-disc pl-4">
                <li>
                  <Link
                    href="tel:+20116551669"
                    className="hover:text-[#8A6953]"
                  >
                    +2011 655 1669 - 03 5460788
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+201116551869"
                    className="hover:text-[#8A6953]"
                  >
                    01116551869
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:info@krassdesign-eg.com"
                    className="hover:text-[#8A6953]"
                  >
                    info@krassdesign-eg.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#8A6953]">
                    27 abdel kader ragab st. Kafr abdo 2 floor
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:w-2/3.5 mt-28">
            {/* Social media icons */}
            <div className="flex items-center gap-2">
              <span className="font-medium">Follow Us</span>
              <Link href="https://facebook.com" target="_blank">
                <Image
                  src="/fb-icon.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Image
                  src="/linkedin-icon.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Image
                  src="/instagram-icon.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </div>

            {/* Divider */}
            <hr className="border-t w-[400px]" />

            {/* Copyright */}
            <p className=" text-md">
              © Copyright 2022, All Rights Reserved by{" "}
              <Link
                href="https://innovationscope.com"
                target="_blank"
                className=" hover:text-[#8A6953]"
              >
                Innovation Scope
              </Link>
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 flex justify-end">
          <Image
            src="/footer-bg.png"
            alt="Decor Image"
            width={500}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
