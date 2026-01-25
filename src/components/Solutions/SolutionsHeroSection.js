"use client";
import Image from 'next/image';
import Typewriter from "@/components/libs/typewriter";

const SolutionsHeroSection = () => {
  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:h-[488px] flex items-start justify-start overflow-hidden mb-[100px] top-[80px] md:top-[100px]">
      {/* Background Image */}
      <Image
        src="/Images/furisticBusinessScene.jpg"
        alt="Futuristic Business Scene"
        fill
        priority
        className="object-cover opacity-25 "
      />

  <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
      {/* Content - Left Aligned */}
      <div className="relative z-10 container mx-auto text-left px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-[120px]">
        <h1 className="font-barlow font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[48px] leading-[110%] sm:leading-[100%] tracking-[0%] text-white mb-4 sm:mb-5 md:mb-6 animate-slide-in-left">
          <Typewriter text="Our Solutions" speed={100} />
        </h1>

      </div>
    </section>
  );
};

export default SolutionsHeroSection;
