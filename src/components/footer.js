// components/Footer.jsx
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { menuItems } from '@/constants/menuItems';

// Custom Upwork Icon
const UpworkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

// Custom Fiverr Icon - Simple "f"
const FiverrIcon = ({ className }) => (
  <span className={`${className} flex items-center justify-center`} style={{ fontWeight: '800', fontSize: '1.5rem', fontFamily: 'sans-serif', lineHeight: 1 }}>f</span>
);

const Footer = () => {
  const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/codroon-pvt-ltd/', label: 'LinkedIn' },
    { Icon: UpworkIcon, href: 'https://www.upwork.com/agencies/1974611255685052304/', label: 'Upwork' },
    { Icon: FiverrIcon, href: 'https://fiverr.com/codroon', label: 'Fiverr' },
  ];

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Top Section: Logo, Navigation, Social Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 border-b border-gray-700 pb-6 sm:pb-8">

          {/* Logo */}
          <div className="mb-4 sm:mb-6 lg:mb-0 flex justify-center lg:justify-start w-full lg:w-auto">
            <Image
              src="/codroon-logo.png"
              alt="Codroon Logo"
              width={360}
              height={75}
              className="w-[360px] h-auto sm:w-40 md:w-[201px]"
              sizes="(max-width: 640px) 360px, (max-width: 768px) 160px, 201px"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-[30px] w-full lg:w-auto">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href || item.dropdown?.[0]?.href || '#'}
                className="font-barlow font-[500] text-sm sm:text-base md:text-[18px] leading-[150%] tracking-[0] text-white hover:text-[#4368B1] transition-colors duration-300 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full lg:w-auto">
            <span className="font-barlow font-[500] text-sm sm:text-base md:text-[18px] leading-[150%] tracking-[0] text-gray-400 whitespace-nowrap">
              Stay Connected
            </span>

            <div className="flex gap-2 sm:gap-3 md:gap-[10px]">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-3 sm:p-4 md:p-[20px] bg-[#14243B] rounded-[6px] sm:rounded-[8px] border border-[#14243B] transition-all duration-300 hover:bg-[#1B2B47] hover:shadow-[0_0_10px_rgba(6,214,160,0.3)] flex items-center justify-center"
                >
                  <Icon className="text-[#06D6A0] fill-[#06D6A0] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Contact Info & Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-6 sm:pt-8 text-white w-full">

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 md:gap-[30px] w-full lg:w-auto border-b md:border-b-0 border-[#1E293B] pb-4 sm:pb-6 md:pb-[16px] lg:pb-0">

            {/* Email */}
            <div className="flex items-center gap-2 sm:gap-[10px] w-full md:w-auto">
              <div className="hidden sm:block md:hidden">
                <Mail size={20} className="text-[#06D6A0] flex-shrink-0" />
              </div>
              <div className="hidden md:block">
                <Mail size={24} className="text-[#06D6A0] flex-shrink-0" />
              </div>
              <div className="block sm:hidden">
                <Mail size={16} className="text-[#06D6A0] flex-shrink-0" />
              </div>
              <a
                href="mailto:info@codroon.com"
                className="text-sm sm:text-base md:text-[18px] font-[400] font-heading leading-[140%] sm:leading-[150%] text-white hover:text-[#06D6A0] transition-colors duration-300 break-all md:break-normal"
              >
                info@codroon.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 sm:gap-[10px] w-full md:w-auto">
              <div className="hidden sm:block md:hidden">
                <Phone size={20} className="text-[#06D6A0] flex-shrink-0" />
              </div>
              <div className="hidden md:block">
                <Phone size={24} className="text-[#06D6A0] flex-shrink-0" />
              </div>
              <div className="block sm:hidden">
                <Phone size={16} className="text-[#06D6A0] flex-shrink-0" />
              </div>
              <a
                href="tel:+919991323306"
                className="text-sm sm:text-base md:text-[18px] font-[400] font-heading leading-[140%] sm:leading-[150%] text-white hover:text-[#06D6A0] transition-colors duration-300 whitespace-nowrap"
              >
                +92 334 0991483
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 sm:gap-[10px] w-full md:w-auto">
              <div className="hidden sm:block md:hidden">
                <MapPin size={20} className="text-[#06D6A0] flex-shrink-0" />
              </div>
              <div className="hidden md:block">
                <MapPin size={24} className="text-[#06D6A0] flex-shrink-0" />
              </div>
              <div className="block sm:hidden">
                <MapPin size={16} className="text-[#06D6A0] flex-shrink-0" />
              </div>
              <span className="text-sm sm:text-base md:text-[18px] font-[400] font-heading leading-[140%] sm:leading-[150%] text-white">
                Dallas, TX, USA
              </span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm sm:text-base md:text-[18px] font-[400] font-heading leading-[140%] sm:leading-[150%] text-white mt-4 sm:mt-6 md:mt-0 pt-4 sm:pt-6 lg:pt-0 border-t lg:border-t-0 border-[#1E293B] lg:border-none w-full lg:w-auto text-center lg:text-left">
            © 2026 Codroon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;