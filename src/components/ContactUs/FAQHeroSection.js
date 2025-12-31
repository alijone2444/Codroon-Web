import Image from "next/image";

export default function FAQHeroSection() {
  return (
    <section className="relative w-full h-[200px] sm:h-[280px] md:h-[342px] flex items-center justify-center overflow-hidden mt-[60px] sm:mt-[80px] md:mt-[100px] mb-[100px]">
      {/* Background Image - same as previous pages */}
      <Image
        src="/Images/alonemen.jpg"
        alt="Futuristic Business Scene"
        fill
        priority
        className="object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center gap-3 sm:gap-4 md:gap-[14px] px-4 sm:px-6 md:px-8 lg:px-[300px] py-8 sm:py-12 md:py-[120px]">
        <h1 className="font-barlow font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[48px] leading-[110%] sm:leading-[100%] text-white">
          Frequently Asked Questions
        </h1>

        <p className="font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[20px] leading-[140%] sm:leading-[150%] tracking-[-0.3%] sm:tracking-[-0.6%] text-white max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
          Still you have any questions? Contact our Team via hello@Codroon.com
        </p>
      </div>
    </section>
  );
}