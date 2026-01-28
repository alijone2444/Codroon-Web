'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function TechStackCTASection() {
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
      {/* Background Image with zoom effect */}
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
          Build smarter, faster, and at scale — powered by cutting-edge technology
        </h2>

        {/* Description */}
        <p className={`font-barlow font-normal text-base sm:text-lg md:text-xl lg:text-[22px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] text-[#E6E6E6] text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-4xl reveal-fade-up stagger-3 ${isVisible ? 'reveal-visible' : ''}`}>
          We use future-ready technologies that ensure faster development, higher performance, and seamless scalability.
        </p>

        {/* Button */}
        <div className={`reveal-fade-up stagger-4 ${isVisible ? 'reveal-visible' : ''}`}>
          <Link
            href="/contact-us"
            className="ripple-button animate-glow-pulse w-full sm:w-auto sm:max-w-[265px] h-10 sm:h-12 md:h-14 lg:h-[63px] px-4 sm:px-6 md:px-8 lg:px-[34px] py-2 sm:py-3 md:py-4 lg:py-[18px] rounded-[30px] bg-gradient-to-r from-[#52B069] to-[#3a8b4f] border-2 border-[#52B069] text-white font-barlow font-semibold transition-all duration-500 flex items-center justify-center gap-[8px] text-sm sm:text-base md:text-lg hover:shadow-[0_0_35px_8px_rgba(82,176,105,0.5)] hover:scale-[1.05]"
          >
            Request A Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
