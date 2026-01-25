"use client";
import Image from "next/image";
import Typewriter from "@/components/libs/typewriter";

export default function FAQHeroSection() {
  return (
    <section className="relative w-full h-[200px] sm:h-[280px] md:h-[342px] flex items-start justify-start overflow-hidden mt-[60px] sm:mt-[80px] md:mt-[100px] mb-[100px]">
      {/* Background Image - same as previous pages */}
      <Image
        src="/Images/alonemen.jpg"
        alt="Futuristic Business Scene"
        fill
        priority
        className="object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />

      {/* Content - Left Aligned */}
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center w-full h-full text-left gap-3 sm:gap-4 md:gap-[14px] px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-[120px]">
        <h1 className="font-barlow font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[48px] leading-[110%] sm:leading-[100%] text-white max-w-[90vw] lg:max-w-[1000px] animate-slide-in-left">
          <Typewriter text="Frequently Asked Questions" speed={50} />
        </h1>

      </div>
    </section>
  );
}