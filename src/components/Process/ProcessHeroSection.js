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

        {/* Button Container - matching homepage style */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-6 w-full max-w-md sm:max-w-none animate-slide-in-left-delay-1">
          <button
            onClick={() => {
              document.getElementById('process-steps')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="
              ripple-button
              relative inline-flex items-center justify-center cursor-pointer
              bg-gradient-to-r from-[#52B069] to-[#3a8b4f] text-white rounded-full 
              border-2 border-[#52B069]
              px-4 sm:px-5 md:px-6 py-3 sm:py-3 
              font-montserrat font-semibold 
              text-base sm:text-lg md:text-[18px] 
              leading-[100%] w-full sm:w-auto
              transition-all duration-500 ease-out
              hover:from-[#5ec878] hover:to-[#52B069]
              hover:shadow-[0_0_35px_8px_rgba(82,176,105,0.5)]
              hover:scale-[1.05] active:scale-[0.98]
              animate-glow-pulse
            "
          >
            <span className="relative z-10">Here's an overview of our typical process</span>
          </button>
        </div>
      </div>
    </section>
  );
}
