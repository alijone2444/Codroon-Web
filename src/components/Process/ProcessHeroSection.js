"use client";
import Image from "next/image";
import Typewriter from "@/components/libs/typewriter";
import { useEffect, useState } from "react";

export default function ProcessHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:h-[488px] flex items-start justify-start overflow-hidden mb-[100px] top-[80px] md:top-[100px]">
      {/* Background Image with zoom */}
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

      {/* Content - Left Aligned */}
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center text-left w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-[120px] gap-3 sm:gap-4 md:gap-[14px]">
        <h1 className="font-barlow font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[110%] sm:leading-[100%] tracking-[0%] text-white animate-slide-in-left">
          <Typewriter text="How We Work" speed={100} />
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-[28px] text-white font-normal font-barlow max-w-[90vw] lg:max-w-[800px] animate-slide-in-left-delay-1">
          At Codroon, we value transparency, collaboration, and delivering exceptional results.
        </p>

        {/* Decorative animated line */}
        <div className={`h-1 bg-gradient-to-r from-[#52B069] to-transparent rounded-full transition-all duration-1000 ease-out ${isVisible ? 'w-32 sm:w-48 md:w-64 opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '0.6s' }}></div>
      </div>
    </section>
  );
}
