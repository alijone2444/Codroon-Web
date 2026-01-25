"use client";
import Image from "next/image";
import Typewriter from "@/components/libs/typewriter";

export default function IntegrationsHeroSection() {
  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:h-[342px] flex items-start justify-start overflow-hidden mb-[100px] top-[80px] md:top-[100px]">
      {/* Background Image */}
      <Image
        src="/Images/furisticBusinessScene.jpg"
        alt="Futuristic Business Scene"
        fill
        priority
        className="object-cover opacity-25"
      />
  
      <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />

      {/* Content - Left Aligned */}
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center text-left w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-[120px] gap-3 sm:gap-4 md:gap-[14px]">
        <h1 className="font-barlow font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[48px] leading-[110%] sm:leading-[100%] tracking-[0%] text-white max-w-[90vw] lg:max-w-[1000px] animate-slide-in-left">
          <Typewriter text="Integrations That Supercharge Your Workflow" speed={50} />
        </h1>

        <p className="font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[20px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] text-white max-w-[90vw] lg:max-w-[800px] animate-slide-in-left-delay-1">
          Connect your apps, automate your operations, and enhance productivity with Codroon powerful integration ecosystem.
        </p>
      </div>
    </section>
  )
}
