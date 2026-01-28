'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ProcessCTASection = () => {
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
    <section ref={sectionRef} className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:h-[619px] flex items-center justify-center overflow-hidden">
      {/* Background Image with zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/Images/furisticBusinessScene.jpg"
          alt="Futuristic Business Scene"
          fill
          priority
          className={`object-cover mix-blend-overlay transition-transform duration-[2000ms] ease-out ${isVisible ? 'scale-100' : 'scale-110'}`}
        />
      </div>

      <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23] mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23]"></div>

      {/* Content with staggered animations */}
      <div className="relative z-10 text-center flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[350px] py-12 sm:py-16 md:py-20 lg:py-[120px]">
        {/* Logo with float */}
        <div className={`reveal-scale ${isVisible ? 'reveal-visible' : ''}`}>
          <Image
            src="/codroon-logo.png"
            alt="Codroon Logo"
            width={201}
            height={41}
            className="mb-4 w-32 sm:w-40 md:w-48 lg:w-[201px] h-auto animate-float"
          />
        </div>

        {/* Heading */}
        <h2 className={`font-barlow font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-[110%] sm:leading-[100%] tracking-[0%] text-white text-center reveal-fade-up stagger-2 ${isVisible ? 'reveal-visible' : ''}`}>
          Thank you for your interest in Codroon
        </h2>

        {/* Description */}
        <p className={`font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] text-white text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-4xl reveal-fade-up stagger-3 ${isVisible ? 'reveal-visible' : ''}`}>
          We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
        </p>

        {/* Button with shine */}
        <div className={`reveal-fade-up stagger-4 ${isVisible ? 'reveal-visible' : ''}`}>
          <button
            className="ripple-button animate-glow-pulse text-white font-barlow font-semibold transition-all duration-500 flex items-center justify-center gap-[8px] rounded-[37px] w-full sm:w-auto sm:max-w-[232px] h-10 sm:h-12 md:h-14 lg:h-[63px] px-4 sm:px-6 md:px-8 lg:pt-[18px] lg:pr-[34px] lg:pb-[18px] lg:pl-[34px] text-sm sm:text-base md:text-lg bg-gradient-to-r from-[#52B069] to-[#3a8b4f] border-2 border-[#52B069] hover:shadow-[0_0_35px_8px_rgba(82,176,105,0.5)] hover:scale-[1.05]"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessCTASection;
