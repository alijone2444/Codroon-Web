'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { menuItems } from '@/constants/menuItems';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu[citation:2][citation:9]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 

  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle function[citation:9]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-gray-900/60 backdrop-blur border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* ✅ Logo */}
        <div className="flex items-center cursor-pointer">
          <Link href="/" className="flex items-center no-hover-effect" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/codroon-logo.png"
              alt="Codroon Logo"
              width={201}
              height={41}
              priority
            />
          </Link>
        </div>

        {/* ✅ Desktop Menu Items (Hidden on mobile) */}
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

        {/* ✅ Desktop Contact Us Button */}
        <Link
          href="/contact-us"
          className="hidden md:flex bg-green-600 hover:bg-green-700 text-white font-heading font-semibold w-[197px] h-[59px] px-[24px] py-[16px] rounded-[57px] text-lg items-center justify-center gap-[8px] transition-all duration-200 font-barlow cursor-pointer"
        >
          Contact Us
        </Link>

        {/* ✅ Mobile Menu Hamburger Icon (Visible only on mobile)[citation:9] */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* ✅ Mobile Sidebar Overlay and Menu[citation:2][citation:9] */}
      {/* Overlay: Click to close menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0F172A] shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/codroon-logo.png"
              alt="Codroon Logo"
              width={160}
              height={33}
              priority
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-full">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name} className="border-b border-gray-700 pb-2">
                {item.dropdown ? (
                  <details className="group">
                    <summary className="flex justify-between items-center text-white font-barlow font-medium text-lg py-2 cursor-pointer list-none">
                      <span>{item.name}</span>
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul className="ml-4 mt-2 space-y-2 border-l border-gray-600 pl-4">
                      {item.dropdown.map((drop) => (
                        <li key={drop.label}>
                          <Link
                            href={drop.href}
                            className="block text-gray-300 hover:text-[#4368B1] py-2 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {drop.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-white font-barlow font-medium text-lg py-2 hover:text-[#4368B1] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            {/* Mobile Contact Us Button */}
            <li className="pt-4">
              <Link
                href="/contact-us"
                className="block bg-green-600 hover:bg-green-700 text-white text-center font-barlow font-semibold py-3 px-4 rounded-[57px] transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;