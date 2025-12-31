import Image from "next/image";
import MarginWrapper from "../wrappers/sectionWrapper";
export default function WhoWeAreMainSection() {
  return (
    <MarginWrapper top={90}>
    <div
      className="w-full max-w-[1596px] mx-auto 
                 border border-[#262626] 
                 pt-8 sm:pt-12 md:pt-16 lg:pt-[100px] 
                 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[150px]
                 pb-8 sm:pb-12 md:pb-16 lg:pb-[100px]
                 flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-[100px]"
      style={{ height: "fit-content" }}
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center align-center gap-4 sm:gap-5 md:gap-6 lg:gap-[20px] w-full lg:w-[598px]">
        <h2 className="font-barlow font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-[140%] sm:leading-[150%]">
          About Codroon
        </h2>
        <p className="font-inter font-normal text-[#E6E6E6] text-sm sm:text-base md:text-lg lg:text-[18px] leading-[140%] sm:leading-[150%]">
        Codroon is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At Codroon, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
        </p>
      </div>

      {/* Right Section */}
      <div className="relative w-full lg:w-[598px] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:h-[571px] rounded-[16px] overflow-hidden border border-[#262626]">
        {/* Globe GIF (background) */}
        <Image
          src="/globe.gif"
          alt="Globe Background"
          fill
          className="object-cover"
          priority
        />

        {/* Center Codroon Logo */}
<div className="absolute inset-0 flex items-center justify-center z-20 ">
  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[27px] bg-[#0F172A] flex items-center justify-center">
    <Image
      src="/cordroon-icon.png"
      alt="Codroon Logo"
      width={120}
      height={120}
      className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[120px] lg:h-[120px]"
    />
  </div>
</div>



        <div
          className="absolute inset-0 mix-blend-multiply rounded-[16px]"
          style={{
            background: "linear-gradient(135deg, #19191900 0%, #FFFFFF00 50%), #57BB6D",
          }}
        ></div>

      </div>
    </div>
    </MarginWrapper>
  );
}
