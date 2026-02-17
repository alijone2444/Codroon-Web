'use client';
import Image from "next/image";
import MarginWrapper from "@/components/wrappers/sectionWrapper";
import { useEffect, useRef, useState } from "react";

const industries = [
  {
    icon: "industry-item-6",
    title: "Startups",
    description:
      "We help startups move from idea to production without unnecessary complexity. Codroon partners with founders to design and build scalable products that are maintainable, investor-ready, and built for growth.",
  },
  {
    icon: "industry-item-3",
    title: "SMEs",
    description:
      "We support small businesses in creating scalable, maintainable, and growth-ready tech products. Codroon helps founders move from idea to production without unnecessary complexity.",
  },
  {
    icon: "industry-item-7",
    title: "AI-Driven FinTech",
    description:
      "We partner with fintech founders to build smart, secure, investor-ready financial products. Codroon ensures these products are scalable, maintainable, and ready to grow with your business.",
  },
  {
    icon: "industry-item-2",
    title: "Telehealth, Healthcare",
    description:
      "We help healthcare innovators design and launch efficient, patient-focused digital solutions. Codroon works closely to make these solutions scalable, robust, and ready for real-world impact.",
  },
  {
    icon: "industry-item-5",
    title: "AI Powered Ecommerce",
    description:
      "We develop high-performance AI-powered eCommerce platforms designed for speed, scalability, and conversion. Codroon helps brands optimize storefronts, checkout flows, and backend systems to drive revenue and improve customer experience.",
  },
  {
    icon: "industry-item-8",
    title: "Testing and Deployment",
    description:
      "We ensure your products are thoroughly tested and smoothly deployed. Codroon handles the process end-to-end, delivering reliable, scalable, and production-ready solutions.",
  },
  {
    icon: "industry-item-7",
    title: "EdTech, E-Learning",
    description:
      "We help education startups turn ideas into engaging, scalable learning platforms. Codroon partners with founders to design and build solutions that are maintainable, investor-ready, and built for growth.",
  },
  {
    icon: "industry-item-1",
    title: "Travel & Hospitality",
    description:
      "We help travel and hospitality brands build fast, reliable digital platforms for booking, operations, and customer engagement. Codroon modernizes legacy platforms, integrates third-party services, and delivers experiences that improve journeys for users while supporting long-term business growth.",
  },
];

export default function IndustriesGridSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <MarginWrapper top={{ base: 0, md: 0, lg: 0 }} bottom={{ base: 12, md: 16, lg: 24 }}>
      <div ref={sectionRef} className="w-full max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Grid Container with vertical divider */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 border-t border-[#52B069]">
          {/* Vertical green divider - only shows on lg screens and above */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#52B069] via-[#52B069] to-[#52B069] -translate-x-1/2"></div>

          {industries.map((industry, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`
                flex flex-col gap-6 sm:gap-7 md:gap-8 p-6 sm:p-8 md:p-10 lg:p-12 relative
                ${index % 2 === 0
                  ? 'lg:border-r lg:border-[#52B069]'
                  : ''
                }
                ${index < industries.length - 2 ? 'border-b border-[#52B069]' : ''}
                ${index === industries.length - 2 ? 'border-b border-[#52B069] lg:border-b-0' : ''}
                group cursor-pointer
                transition-all duration-500 ease-out
                hover:bg-[#52B069]/5
                reveal-fade-up ${isVisible ? 'reveal-visible' : ''}
              `}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#52B069]/0 to-[#52B069]/0 group-hover:from-[#52B069]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>

              {/* Icon and Title Row */}
              <div className="flex items-center gap-4 sm:gap-5 relative z-10">
                {/* Icon Container with hover effects */}
                <div
                  className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[88px] lg:h-[88px] rounded-lg sm:rounded-[8px] md:rounded-[10px] border border-[#2E2E2E] transition-all duration-500 group-hover:border-[#52B069]/50 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(82,176,105,0.2)] icon-bounce"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(67, 104, 177, 0.1), rgba(67, 104, 177, 0.1)), linear-gradient(229.29deg, rgba(6, 214, 160, 0.2) -68.25%, rgba(6, 214, 160, 0) 32.16%)",
                  }}
                >
                  <Image
                    src={`/Images/Icons/${industry.icon}.png`}
                    alt={industry.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title with color transition */}
                <h3 className="font-barlow font-medium text-white text-lg sm:text-xl md:text-[22px] lg:text-[26px] leading-[140%] sm:leading-[150%] transition-colors duration-300 group-hover:text-[#52B069]">
                  {industry.title}
                </h3>
              </div>

              {/* Description with subtle animation */}
              <p className="font-barlow font-normal text-[#E6E6E6] text-sm sm:text-base md:text-[18px] lg:text-[20px] leading-[140%] sm:leading-[150%] relative z-10 transition-all duration-300 group-hover:text-white">
                {industry.description}
              </p>

              {/* Animated arrow indicator on hover */}
              <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#52B069]">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MarginWrapper>
  );
}