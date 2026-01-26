'use client';
import MarginWrapper from "@/components/wrappers/sectionWrapper";
import { useEffect, useRef, useState } from "react";

export default function GridStepsSection({ data }) {
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
    <MarginWrapper top={0} bottom={96}>
      <div ref={sectionRef} className="w-full max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
          {data.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col justify-start bg-transparent border border-[#1F2937] rounded-lg p-6 sm:p-8 md:p-12 transition-all duration-500 hover:border-[#52B069]/50 hover:bg-[#52B069]/5 group reveal-fade-up ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Top Section — Number + Title */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6">
                {/* Big Number with color animation */}
                <div className="font-barlow font-semibold text-[#57BB6D] text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[150px] leading-none transition-all duration-500 group-hover:scale-110 group-hover:text-[#06D6A0]">
                  {step.number}
                </div>

                {/* Title */}
                <div className="flex-1 border-b border-gray-600 pb-3 sm:pb-4 pl-2 transition-colors duration-300 group-hover:border-[#52B069]">
                  <h3 className="font-barlow font-semibold text-lg sm:text-xl md:text-[20px] lg:text-[24px] leading-tight text-[#98989A] transition-colors duration-300 group-hover:text-white">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 sm:mt-5 md:mt-6 font-inter font-normal text-[#98989A] text-sm sm:text-base md:text-[16px] lg:text-[18px] leading-relaxed transition-colors duration-300 group-hover:text-[#E6E6E6]">
                {step.description}
              </p>

              {/* Animated progress bar on hover */}
              <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-[#52B069] to-[#06D6A0] rounded-full transition-all duration-700 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </MarginWrapper>
  );
}
