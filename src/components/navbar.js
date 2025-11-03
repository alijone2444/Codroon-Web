'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { menuItems } from '@/constants/menuItems';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-gray-900/60 backdrop-blur border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* ✅ Logo - redirects to home */}
        <div className="flex items-center cursor-pointer">
          <Link href="/" className="flex items-center  no-hover-effect">
            <Image
              src="/codroon-logo.png"
              alt="Codroon Logo"
              width={201}
              height={41}
              priority
            />
          </Link>
        </div>

        {/* ✅ Menu Items */}
        <div className="hidden md:flex items-center gap-10 font-barlow font-semibold tracking-[0.5px]">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href || '#'}
                className={`text-white font-heading font-medium text-[18px] leading-[150%] transition-all duration-200 flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md ${
                  openDropdown === item.name
                   ? 'hover:text-[#4368B1] px-3 py-2 rounded-md hover:bg-[#0F172A] hover:shadow-[0_0_10px_#4368B1]'
                      : 'hover:bg-[#4368B1] hover:shadow-[0_0_10px_#4368B1]'
                }`}
              >
                {item.name}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`transition-transform duration-200 ${
                    openDropdown === item.name ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            
              {/* Dropdown */}
              {item.dropdown && (
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-[#0F172A] border border-gray-700 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                    openDropdown === item.name
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {item.dropdown.map((drop) => (
                    <Link
                      key={drop.label}
                      href={drop.href}
                      className="block px-4 py-2 text-white hover:text-[#4368B1] hover:bg-gray-800 transition-all duration-150"
                    >
                      {drop.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-white font-heading font-medium text-[18px] leading-[150%] transition-colors duration-200 hover:text-[#4368B1] px-3 py-2 rounded-md hover:bg-[#0F172A] hover:shadow-[0_0_10px_#4368B1]"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* ✅ Contact Us button */}
        <Link
          href="/contact-us"
          className="bg-green-600 hover:bg-green-700 text-white font-heading font-semibold w-[197px] h-[59px] px-[24px] py-[16px] rounded-[57px] text-lg flex items-center justify-center gap-[8px] transition-all duration-200 font-barlow cursor-pointer"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
