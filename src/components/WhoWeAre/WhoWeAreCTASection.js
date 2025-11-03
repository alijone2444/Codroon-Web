import Image from "next/image";
import Link from "next/link";

export default function WhoWeAreCTASection() {
  return (
    <div className="w-full max-w-[1596px] mx-auto px-4 py-20">
      {/* Main Container */}
      <div 
        className="w-full h-[511px] flex flex-col gap-[50px] p-[80px]"
      >
        {/* First Row */}
        <div className="w-full h-[190px] flex gap-[40px]">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/cordroon-icon.png"
              alt="Codroon Logo"
              width={120}
              height={120}
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="font-barlow font-medium text-white text-[30px] leading-[100%] mb-4">
            Today, Codroon Continues to Thrive as a Leading Digital Product Agency.....
            </h3>
            <p className="font-inter font-normal text-white text-[18px] leading-[150%]">
            Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.
            </p>
          
          </div>
        </div>

        {/* Second Row */}
        <div className="w-full h-[111px] flex items-center bg-[#24242433] border border-[#262626] backdrop-blur-[12px] justify-between gap-[20px] pt-[24px] pr-[40px] pb-[24px] pl-[40px] rounded-[12px]">
          {/* Left Section */}
          <div className="flex-1 flex items-center gap-[20px] ">
            <div className="font-barlow font-normal text-white text-[20px] leading-[100%]">
            Welcome to Codroon 
            </div>
            <div className="font-barlow font-normal text-white text-[20px] leading-[150%] bg-[#4368B126] rounded-[8px] px-[20px] py-[14px]"
>
            Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
            </div>
          </div>

          {/* Right Section - Start Project Button */}
          <Link
            href="#"
            className="w-[170px] h-[63px] flex items-center justify-center gap-[8px] pt-[18px] pr-[34px] pb-[18px] pl-[34px] rounded-[30px] transition-colors duration-300 hover:bg-[#4A9B5A]"
            style={{ backgroundColor: '#57BB6D' }}
          >
            <span className="font-barlow font-medium text-white text-[16px]">
              Start Project
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
