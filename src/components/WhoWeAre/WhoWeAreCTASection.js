import Image from "next/image";
import Link from "next/link";

export default function WhoWeAreCTASection() {
  return (
    <div className="w-full max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
      {/* Main Container */}
      <div 
        className="w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:h-[511px] flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] p-4 sm:p-6 md:p-8 lg:p-[80px]"
      >
        {/* First Row */}
        <div className="w-full min-h-[150px] sm:min-h-[170px] md:min-h-[190px] lg:h-[190px] flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[40px]">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/cordroon-icon.png"
              alt="Codroon Logo"
              width={120}
              height={120}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px]"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="font-barlow font-medium text-white text-xl sm:text-2xl md:text-3xl lg:text-[30px] leading-[110%] sm:leading-[100%] mb-3 sm:mb-4">
            Today, Codroon Continues to Thrive as a Leading Digital Product Agency.....
            </h3>
            <p className="font-inter font-normal text-white text-sm sm:text-base md:text-lg lg:text-[18px] leading-[140%] sm:leading-[150%]">
            Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.
            </p>
          
          </div>
        </div>

        {/* Second Row */}
        <div className="w-full min-h-[150px] sm:min-h-[111px] flex flex-col lg:flex-row items-start lg:items-center bg-[#24242433] border border-[#262626] backdrop-blur-[12px] justify-between gap-4 sm:gap-6 lg:gap-[20px] p-4 sm:p-6 md:p-8 lg:pt-[24px] lg:pr-[40px] lg:pb-[24px] lg:pl-[40px] rounded-[12px]">
          {/* Left Section */}
          <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-[20px]">
            <div className="font-barlow font-normal text-white text-base sm:text-lg md:text-xl lg:text-[20px] leading-[110%] sm:leading-[100%]">
            Welcome to Codroon 
            </div>
            <div className="font-barlow font-normal text-white text-base sm:text-lg md:text-xl lg:text-[20px] leading-[140%] sm:leading-[150%] bg-[#4368B126] rounded-[8px] px-4 sm:px-5 md:px-6 lg:px-[20px] py-3 sm:py-3 md:py-4 lg:py-[14px]">
            Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
            </div>
          </div>

          {/* Right Section - Start Project Button */}
          <Link
            href="#"
            className="w-full sm:w-auto lg:w-[170px] h-10 sm:h-12 md:h-14 lg:h-[63px] flex items-center justify-center gap-[8px] px-4 sm:px-6 md:px-8 lg:pt-[18px] lg:pr-[34px] lg:pb-[18px] lg:pl-[34px] rounded-[30px] transition-colors duration-300 hover:bg-[#4A9B5A]"
            style={{ backgroundColor: '#57BB6D' }}
          >
            <span className="font-barlow font-medium text-white text-sm sm:text-base md:text-lg lg:text-[16px]">
              Start Project
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
