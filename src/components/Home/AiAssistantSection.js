import React from "react";
import { Paperclip, ArrowUp } from "lucide-react";
import MarginWrapper from "../wrappers/sectionWrapper";

const AIAssistantSection = () => {
  return (
    <MarginWrapper top={0} bottom={80} leftRight={30}>
      <section className="scroll-fade-up relative flex flex-col border-b border-[#262626] items-center justify-center w-full max-w-[1920px] mx-auto px-4 sm:px-6 bg-[#0F172A] overflow-hidden py-8 sm:py-12 md:py-16">
        {/* Gradient Banner - Responsive */}
        <div className="flex items-center justify-center w-full sm:w-[90%] max-w-[902px] h-[60px] sm:h-[70px] md:h-[83px] rounded-[50px] sm:rounded-[80px] md:rounded-[100px] border border-[#52B069] px-4 sm:px-6 md:px-[34px] py-3 sm:py-4 md:py-[20px] bg-gradient-to-r from-[#4490C9] to-[#63DAAC]">
          <h2 className="text-white text-base sm:text-lg md:text-[20px] lg:text-[24px] font-barlow font-semibold tracking-[0.5px] text-center px-2">
            Your Project, Your Vision – Powered by AI
          </h2>
        </div>

        {/* Search Bar - Responsive */}
        <div className="relative mt-8 sm:mt-12 md:mt-[83px] bg-[#00000040] flex items-center justify-between w-full sm:w-[90%] lg:w-[80%] max-w-[1200px] h-[60px] sm:h-[70px] md:h-[82px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] px-4 sm:px-6 md:px-[27px] py-3 sm:py-4 md:py-[21px] overflow-hidden animated-border">
          {/* Left: Input */}
          <input
            type="text"
            placeholder="Use our AI assistant to create a requirement document in minutes and get instant quotes."
            className="flex-1 text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base md:text-[16px] lg:text-[18px] bg-transparent z-[1] pr-2 sm:pr-4"
          />

          {/* Right: Icon Container - Responsive */}
          {/* Right: Icon Container */}
{/* Right: Icon Container */}
<div className="flex items-center gap-3 sm:gap-[10px]">
  {/* Attachment Button */}
  <button 
    className="group p-2 rounded-lg hover:bg-[#52B069] transition-colors duration-200"
    aria-label="Attach file"
  >
    <Paperclip size={20} className="w-5 h-5 sm:w-6 sm:h-6 text-[#52B069] group-hover:text-white transition-colors duration-200" />
  </button>

  {/* Send Button */}
  <button 
    className="group p-2 rounded-lg hover:bg-[#52B069] transition-colors duration-200"
    aria-label="Send message"
  >
    <ArrowUp size={20} className="w-5 h-5 sm:w-6 sm:h-6 text-[#52B069] group-hover:text-white transition-colors duration-200" />
  </button>
</div>
        </div>

        {/* Buttons Row - Responsive */}
       {/* Buttons Row - Responsive */}
<div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-[16px] mt-4 sm:mt-6 md:mt-[30px] w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-[1061px] flex-wrap px-2 sm:px-0 overflow-x-hidden">
  {[
    "Article",
    "Weather",
    "Sport", 
    "Press",
    "Food",
    "Plants",
    "Suggest Something",
  ].map((item) => (
    <button
      key={item}
      className={`
        ${item !== "Suggest Something"
          ? "w-[100px] xs:w-[110px] sm:w-[120px] md:w-[126px]"
          : "w-[180px] sm:w-[220px] md:w-[250px] lg:w-[295px]"
        }
        min-w-[80px] xs:min-w-[90px] sm:min-w-[100px]
        cursor-pointer h-[36px] sm:h-[38px] md:h-[40px] 
        rounded-[20px] sm:rounded-[25px] md:rounded-[30px] 
        bg-[#00000040] border border-[#52B069] text-[#52B069] 
        text-xs sm:text-sm md:text-[16px] font-barlow
        hover:bg-[#52B069] hover:text-white 
        transition-colors duration-300 flex-shrink-0
        px-2 sm:px-3
      `}
    >
      {item}
    </button>
  ))}
</div>
      </section>
    </MarginWrapper>
  );
};

export default AIAssistantSection;