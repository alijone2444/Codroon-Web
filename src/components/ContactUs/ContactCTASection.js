import Image from "next/image";
import Link from "next/link";

export default function ContactCTASection() {
  return (
    <div className="w-full max-w-[1596px] mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
      {/* Main Container */}
      <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-[50px] border border-[#262626] px-4 sm:px-6 md:px-10 lg:px-[80px] py-6 sm:py-8 md:py-12 lg:py-[60px] rounded-[12px]">
        {/* First Row */}
        <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-[40px]">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/cordroon-icon.png"
              alt="Codroon Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[120px] md:h-[120px]"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="font-barlow font-medium text-white text-lg sm:text-xl md:text-2xl lg:text-[30px] leading-[110%] sm:leading-[100%] mb-3 sm:mb-4">
              Today, Codroon Continues to Thrive as a Leading Digital Product Agency.....
            </h3>
            <p className="font-inter font-normal text-white text-sm sm:text-base md:text-[18px] leading-[140%] sm:leading-[150%]">
              Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-[20px] px-4 sm:px-6 md:px-8 lg:px-[40px] py-4 sm:py-6 md:py-[24px] border border-[#262626] rounded-[12px] bg-[#24242433]">
          {/* Left Section */}
          <div className="w-full sm:flex-1 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-[20px]">
            <div className="font-barlow font-normal text-white text-base sm:text-lg md:text-[20px] leading-[120%] sm:leading-[100%] text-center sm:text-left">
              Welcome to Codroon
            </div>
            <div className="font-barlow font-normal text-white text-sm sm:text-base md:text-[20px] leading-[140%] sm:leading-[150%] bg-[#4368B126] text-center rounded-[8px] px-3 sm:px-4 md:px-[12px] py-2 sm:py-3 md:py-[8px] w-full sm:w-auto">
              Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
            </div>
          </div>

          {/* Right Section - Start Project Button */}
          <Link
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-[8px] rounded-[30px] transition-colors duration-300 hover:bg-[#4A9B5A] px-6 py-3 sm:px-8 sm:py-4 md:w-[170px] md:h-[63px]"
            style={{ backgroundColor: "#57BB6D" }}
          >
            <span className="font-barlow font-medium text-white text-sm sm:text-base md:text-[16px]">
              Start Project
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}