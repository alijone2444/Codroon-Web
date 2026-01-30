'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const IndustriesCTASection = () => {
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
    <section
      ref={sectionRef}
      className="relative w-full h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:h-[619px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with subtle zoom effect */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/Images/Brain.jpg"
          alt="Brain Network"
          fill
          priority
          className={`object-cover opacity-25 transition-transform duration-[2000ms] ease-out ${isVisible ? 'scale-100' : 'scale-110'}`}
        />
      </div>

      <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
      {/* Blue blush overlay */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23]"></div>

      {/* Content with staggered animations */}
      <div className="relative z-10 text-center flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[50px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[350px] py-12 sm:py-16 md:py-20 lg:py-[120px] w-full">
        {/* Logo with float animation */}
        <div className={`reveal-scale ${isVisible ? 'reveal-visible' : ''}`}>
          <Image
            src="/codroon-logo.png"
            alt="Codroon Logo"
            width={201}
            height={41}
            className="w-32 sm:w-40 md:w-48 lg:w-[201px] h-auto mb-2 sm:mb-3 md:mb-4 animate-float"
          />
        </div>

        {/* Heading with fade-up animation */}
        <h2 className={`font-barlow font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-[110%] sm:leading-[100%] text-white text-center reveal-fade-up stagger-2 ${isVisible ? 'reveal-visible' : ''}`}>
          Every industry has unique challenges. We build the technology to solve them.
        </h2>

        {/* Description with fade-up animation */}
        <p className={`font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[22px] leading-[140%] sm:leading-[150%] tracking-[-0.2%] sm:tracking-[-0.3%] md:tracking-[-0.6%] text-[#E6E6E6] text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-full reveal-fade-up stagger-3 ${isVisible ? 'reveal-visible' : ''}`}>
          No matter your industry, Codroon partners with you to design, build, and scale solutions that deliver measurable results. Our cross-functional teams work as one to bring clarity, speed, and alignment from concept to launch.
        </p>

        {/* Button with shine effect */}
        <div className={`reveal-fade-up stagger-4 ${isVisible ? 'reveal-visible' : ''}`}>
          <button
            className="btn-shine bg-green-600 hover:bg-green-700 text-white font-barlow font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-[30px] active:scale-95 w-full max-w-[200px] sm:max-w-[230px] md:max-w-[265px] h-10 sm:h-12 md:h-14 lg:h-[63px] px-4 sm:px-6 md:px-8 hover:shadow-[0_0_30px_rgba(82,176,105,0.4)] hover:scale-[1.02]"
          >
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">Start Project</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCTASection;