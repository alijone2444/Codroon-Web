'use client';
import MarginWrapper from "@/components/wrappers/sectionWrapper";
import { useEffect, useRef, useState } from "react";

export default function ProcessMainSection() {
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
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-32">
      <MarginWrapper top={0} bottom={96}>
        <div ref={sectionRef} className="w-full max-w-[1597px] mx-auto relative px-4 sm:px-6 md:px-8">
          {/* Main Container */}
          <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] text-center">
            <h2 className={`font-barlow font-semibold text-center text-white mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[110%] sm:leading-[100%] tracking-[0%] reveal-fade-up ${isVisible ? 'reveal-visible' : ''}`}>
              At Codroon
            </h2>
            <p className={`font-barlow font-normal text-center text-white text-sm sm:text-base md:text-lg lg:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] reveal-fade-up stagger-2 ${isVisible ? 'reveal-visible' : ''}`}>
              We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
            </p>

            {/* Button with glow */}
            <div className={`reveal-fade-up stagger-3 ${isVisible ? 'reveal-visible' : ''}`}>
              <button
                className="ripple-button animate-glow-pulse text-white font-barlow font-semibold transition-all duration-500 flex items-center justify-center rounded-[30px] w-full sm:w-auto sm:max-w-[420px] h-10 sm:h-12 md:h-14 lg:h-[50px] px-4 sm:px-6 md:px-[14px] py-2 sm:py-3 md:py-[12px] gap-2 sm:gap-[10px] bg-gradient-to-r from-[#52B069] to-[#3a8b4f] border-2 border-[#52B069] hover:shadow-[0_0_35px_8px_rgba(82,176,105,0.5)] hover:scale-[1.05]"
              >
                Here's an overview of our typical process
              </button>
            </div>
          </div>
        </div>
      </MarginWrapper>
    </div>
  );
}
