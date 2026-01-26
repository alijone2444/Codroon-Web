'use client';
import MarginWrapper from "@/components/wrappers/sectionWrapper";
import { useEffect, useRef, useState } from "react";

export default function IndustriesMainSection() {
  const sectionRef = useRef(null);
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
      { threshold: 0.2 }
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
    <MarginWrapper top={{ base: 8, md: 16, lg: 24 }} bottom={{ base: 8, md: 16, lg: 24 }}>
      <div
        ref={sectionRef}
        className="w-full max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 text-center"
      >
        {/* Main Container */}
        <div className={`flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 py-12 sm:py-16 md:py-20 lg:py-24 reveal-fade-up ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="font-barlow font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[48px] leading-[110%] sm:leading-[100%] animate-gentle-pulse">
            Industries We Empower
          </h2>

          {/* Decorative underline */}
          <div className={`h-1 bg-gradient-to-r from-transparent via-[#52B069] to-transparent rounded-full transition-all duration-1000 ease-out ${isVisible ? 'w-24 sm:w-32 md:w-40 opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '0.3s' }}></div>
        </div>
      </div>
    </MarginWrapper>
  );
}