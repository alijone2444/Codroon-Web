// components/Footer.jsx
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube, Twitter } from 'lucide-react';

// Custom Upwork Icon
const UpworkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439-5.439z" />
  </svg>
);

// Custom Fiverr Icon - Simple "f"
const FiverrIcon = ({ className }) => (
  <span className={`${className} flex items-center justify-center`} style={{ fontWeight: '800', fontSize: '1.5rem', fontFamily: 'sans-serif', lineHeight: 1 }}>f</span>
);

const Footer = () => {
  const socialLinks = [
    // Row 1
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/codroon-pvt-ltd/', label: 'LinkedIn' },
    { Icon: UpworkIcon, href: 'https://www.upwork.com/agencies/1974611255685052304/', label: 'Upwork' },
    { Icon: FiverrIcon, href: 'https://fiverr.com/codroon', label: 'Fiverr' },
    // Row 2
    { Icon: Facebook, href: 'https://www.facebook.com/codroon', label: 'Facebook' },
    { Icon: Twitter, href: 'https://twitter.com/codroon', label: 'X (Twitter)' },
    { Icon: Youtube, href: 'https://youtube.com/@codroon', label: 'YouTube' },
  ];

  const pagesList = [
    { name: 'Home', href: '/' },
    { name: 'Who We Are', href: '/who-we-are' },
    { name: 'Industries', href: '/industries' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Technologies', href: '/technologies' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'How We Work', href: '/process' },
    { name: 'Codroon Ninja AI', href: '/codroon-ninja-ai' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const servicesList = [
    "AI Powered Mobile App Development",
    "AI Powered Web Development",
    "LLM Integrations",
    "Agentic AI",
    "SaaS Development",
    "AIaaS (AI as a Service)",
    "Vibe Coded Solutions",
    "Automations & Integrations",
    "UI/UX Design",
  ];

  return (
    <footer className="bg-[#0F172A] text-white pt-12 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="block">
              <Image
                src="/codroon-logo.png"
                alt="Codroon Logo"
                width={200}
                height={50}
                className="w-48 h-auto"
              />
            </Link>
            <p className="text-gray-400 font-barlow text-sm leading-relaxed max-w-xs">
              Empowering businesses with AI-driven solutions and cutting-edge technology.
            </p>

            {/* Social Grid: 3 columns */}
            <div className="grid grid-cols-3 gap-3 w-fit mt-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="p-3 bg-[#14243B] rounded-lg border border-[#14243B] transition-all duration-300 hover:bg-[#1B2B47] hover:shadow-[0_0_10px_rgba(6,214,160,0.3)] flex items-center justify-center group w-12 h-12"
                >
                  <Icon className="text-[#06D6A0] w-5 h-5 transition-transform group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="text-white font-barlow font-semibold text-xl mb-6">Pages</h3>
            <ul className="flex flex-col gap-3">
              {pagesList.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className="text-gray-400 hover:text-[#06D6A0] transition-colors font-barlow text-base"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-barlow font-semibold text-xl mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/#our-solutions"
                    className="text-gray-400 hover:text-[#06D6A0] transition-colors font-barlow text-base"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Partners */}
          <div>
            <h3 className="text-white font-barlow font-semibold text-xl mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4 mb-8">
              <a href="mailto:info@codroon.com" className="flex items-start gap-3 group">
                <Mail className="text-[#06D6A0] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-400 group-hover:text-[#06D6A0] transition-colors font-barlow text-base break-all">
                  info@codroon.com
                </span>
              </a>

              <a href="tel:+923340991483" className="flex items-start gap-3 group">
                <Phone className="text-[#06D6A0] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-400 group-hover:text-[#06D6A0] transition-colors font-barlow text-base">
                  +92 334 0991483
                </span>
              </a>

              <div className="flex items-start gap-3 group">
                <MapPin className="text-[#06D6A0] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-400 font-barlow text-base">
                  Dallas, TX, USA
                </span>
              </div>
            </div>

            {/* Trusted by Partners - Moved to bottom right */}
            <div className="mt-8">
              <h4 className="font-barlow font-medium text-sm text-gray-400 uppercase tracking-wide mb-4">Trusted by Partners</h4>
              <div className="flex flex-wrap gap-4">
                <Link href="https://www.goodfirms.co/company/codroon" target="_blank" className="opacity-80 hover:opacity-100 transition-opacity inline-block">
                  <Image
                    src="/partners/GoodFirms.png"
                    alt="GoodFirms"
                    width={240}
                    height={120}
                    className="h-20 w-auto object-contain"
                  />
                </Link>
                <Link href="https://www.designrush.com/" target="_blank" className="opacity-80 hover:opacity-100 transition-opacity inline-block">
                  <Image
                    src="/partners/DesignRush.com.png"
                    alt="DesignRush"
                    width={240}
                    height={120}
                    className="h-20 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-barlow text-sm">
            © 2026 Codroon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-[#06D6A0] text-sm font-barlow transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-[#06D6A0] text-sm font-barlow transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;