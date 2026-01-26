"use client";
import Image from "next/image";
import Typewriter from "@/components/libs/typewriter";
import { useEffect, useRef, useState } from "react";

export default function IndustriesHeroSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[200px] sm:h-[320px] md:h-[400px] lg:h-[488px] flex items-start justify-start overflow-hidden mb-[100px] top-[80px] md:top-[100px]"
    >
      {/* Background Image with subtle scale animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/Images/furisticBusinessScene.jpg"
          alt="Futuristic Business Scene"
          fill
          priority
          className={`object-cover opacity-25 transition-transform duration-[2000ms] ease-out ${isVisible ? 'scale-100' : 'scale-110'}`}
        />
      </div>

      <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />

      {/* Content - Left Aligned with enhanced animations */}
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center text-left w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-[120px] gap-3 sm:gap-4 md:gap-[14px]">
        <h1 className={`font-barlow font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[110%] sm:leading-[100%] text-white animate-slide-in-left`}>
          <Typewriter text="Industries" speed={100} />
        </h1>

        {/* Decorative animated line */}
        <div className={`h-1 bg-gradient-to-r from-[#52B069] to-transparent rounded-full transition-all duration-1000 ease-out ${isVisible ? 'w-32 sm:w-48 md:w-64 opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '0.5s' }}></div>
      </div>
    </section>
  );
}