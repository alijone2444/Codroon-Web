import Image from "next/image";
import TypewriterText from "../libs/typeWritter";

export default function ContactUsHeroSection() {
  return (
    <section className="relative w-full h-[200px] sm:h-[280px] md:h-[342px] flex items-center justify-center overflow-hidden  mt-[60px] sm:mt-[80px] md:mt-[100px]">
      {/* Background Image - same as previous pages */}
      <Image
        src="/Images/hand.jpg"
        alt="Futuristic Business Scene"
        fill
        priority
        className="object-cover opacity-25"
      />
  
      <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />

      {/* Content */}
      <div className="animate-fade-slide relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4 sm:px-6 md:px-8 lg:px-[300px] py-16 sm:py-20 md:py-[120px] gap-3 sm:gap-4 md:gap-[14px]">
        <h1 className="font-barlow font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[110%] sm:leading-[100%] text-center text-white">
          Contact Us
        </h1>

        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-full">
          <TypewriterText
            text="Get in touch with us today and let us help you with any questions or inquiries you may have."
            textSize="text-sm sm:text-base md:text-lg lg:text-[20px]"
            textColor="text-white"
            fontWeight="font-normal"
            fontName="font-barlow"
          />
        </div>
      </div>
    </section>
  );
}