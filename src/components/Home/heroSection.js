"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/libs/typewriter";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-start justify-start overflow-hidden mb-[100px]">
      {/* Background GIF */}
      <Image
        src="/hero-banner.gif"
        alt="Hero Banner"
        fill
        className="object-cover opacity-25"
      />

      {/* Blue blush overlay */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23]"></div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center text-left px-4 sm:px-6 md:px-8 lg:px-12 w-full h-auto min-h-[686px] gap-6 sm:gap-8 md:gap-[50px] py-8 sm:py-0">
        {/* Responsive Heading with Typewriter */}
        <h1
          className="font-heading font-semibold 
                     text-4xl sm:text-5xl md:text-6xl lg:text-[68px] 
                     leading-tight sm:leading-snug md:leading-[100%]
                     tracking-[0px] text-transparent bg-clip-text 
                     bg-[linear-gradient(to_right,#00E6A8,#00AEEF,#0070F3,#00AEEF,#00E6A8)]
                     bg-[length:200%_auto] animate-gradient 
                     max-w-[90vw] lg:max-w-[1200px] font-barlow animate-slide-in-left"
        >
          <Typewriter text="Where Code Becomes Conscious" speed={50} />
        </h1>

        {/* Subtitle text - slides in from left */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] text-white font-normal font-montserrat max-w-[90vw] lg:max-w-[800px] animate-slide-in-left-delay-1">
          Delivering AI-powered, SaaS-driven, and vibe-coded solutions that transform ideas into future-ready digital experiences.
        </p>

        {/* Buttons Container - Left aligned, one by one */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
          {/* View Solutions Button - First */}
          <Link
            href="/our-solutions"
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
            <span className="relative z-10">Explore our services</span>
          </Link>

          {/* Get Started Button - Second */}
          <Link
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="
              ripple-button
              relative inline-flex items-center justify-center cursor-pointer
              bg-transparent text-[#52B069] rounded-full 
              border-2 border-[#52B069]
              px-4 sm:px-5 md:px-6 py-3 sm:py-3 
              font-montserrat font-semibold 
              text-base sm:text-lg md:text-[18px] 
              leading-[100%] w-full sm:w-auto
              transition-all duration-500 ease-out
              hover:bg-[#52B069]/10
              hover:shadow-[0_0_30px_6px_rgba(82,176,105,0.4)]
              hover:scale-[1.05] active:scale-[0.98]
              border-glow
            "
          >
            <span className="relative z-10">Schedule A Call</span>
          </Link>
        </div>
      </div>
    </section>
  );
}