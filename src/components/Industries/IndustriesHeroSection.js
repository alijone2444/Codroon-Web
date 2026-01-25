"use client";
import Image from "next/image";
import Typewriter from "@/components/libs/typewriter";

export default function IndustriesHeroSection() {
  return (
    <section className="relative w-full h-[200px] sm:h-[320px] md:h-[400px] lg:h-[488px] flex items-start justify-start overflow-hidden mb-[100px] top-[80px] md:top-[100px]">
      {/* Background Image - same as previous pages */}
      <Image
        src="/Images/furisticBusinessScene.jpg"
        alt="Futuristic Business Scene"
        fill
        priority
        className="object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />

      {/* Content - Left Aligned */}
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center text-left w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-[120px] gap-3 sm:gap-4 md:gap-[14px]">
        <h1 className="font-barlow font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[110%] sm:leading-[100%] text-white animate-slide-in-left">
          <Typewriter text="Industries" speed={100} />
        </h1>

      </div>
    </section>
  );
}