import Image from "next/image";
import Link from "next/link";
import TypewriterText from "../libs/typeWritter";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mb-[100px]">
      {/* Background GIF */}
      <Image
        src="/hero-banner.gif"
        alt="Hero Banner"
        fill
        className="object-cover opacity-25"
      />
      
      {/* Blue blush overlay */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full h-auto min-h-[686px] gap-6 sm:gap-8 md:gap-[50px] animate-fade-slide py-8 sm:py-0">
        {/* Responsive Heading */}
        <h1
          className="mx-auto text-center font-heading font-semibold 
                     text-4xl sm:text-5xl md:text-6xl lg:text-[68px] 
                     leading-tight sm:leading-snug md:leading-[100%]
                     tracking-[0px] text-transparent bg-clip-text 
                     bg-[linear-gradient(to_right,#00E6A8,#00AEEF,#0070F3,#00AEEF,#00E6A8)]
                     bg-[length:200%_auto] animate-gradient 
                     max-w-[90vw] lg:max-w-[1200px] font-barlow px-4"
        >
          Where Code Becomes Conscious
        </h1>
        
        {/* Typewriter with responsive text size */}
        <TypewriterText
          text={[
            "Turning code into products that wow users and win markets!",
            "Innovate. Create. Inspire.",
            "Let's build something amazing together.",
          ]}
          textSize="text-lg sm:text-xl md:text-2xl lg:text-[32px]"
          textColor="text-white"
          fontWeight="font-normal"
          fontName="font-montserrat"
        />

        {/* Buttons Container - Responsive layout */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
          {/* View Solutions Button */}
          <Link
            href="#"
            className="
              relative cursor-pointer text-[#4368B1] border border-[#4368B1]
              px-4 sm:px-5 md:px-6 py-3 sm:py-3 rounded-full 
              font-montserrat font-semibold 
              text-base sm:text-lg md:text-[18px] 
              leading-[100%] w-full sm:w-auto text-center
              transition-all duration-500 ease-out
              hover:bg-[#4368B1] hover:text-white hover:shadow-[0_0_20px_3px_rgba(67,104,177,0.6)]
              hover:scale-[1.03] active:scale-[0.98]
            "
          >
            <span className="relative z-10">View Solutions</span>
            <span
              className="absolute inset-0 rounded-full opacity-40 blur-md bg-[#4368B1]
                         transition-all duration-700 group-hover:opacity-70 group-hover:blur-lg"
            ></span>
          </Link>

          {/* Get Started Button */}
          <Link
            href="#"
            className="
              relative inline-flex items-center justify-center cursor-pointer
              bg-[#4368B1] text-white rounded-full border border-transparent
              px-4 sm:px-5 md:px-6 py-3 sm:py-3 
              font-montserrat font-semibold 
              text-base sm:text-lg md:text-[18px] 
              leading-[100%] w-full sm:w-auto
              transition-all duration-500 ease-out
              hover:bg-[#33558F] hover:shadow-[0_0_25px_4px_rgba(67,104,177,0.6)]
              hover:scale-[1.03] active:scale-[0.98]
            "
          >
            <span className="relative z-10">Get Started</span>
            <span
              className="absolute inset-0 rounded-full bg-[#4368B1] opacity-40 blur-md
                         transition-all duration-700 hover:opacity-70 hover:blur-lg"
            ></span>
          </Link>
        </div>
      </div>
    </section>
  );
}