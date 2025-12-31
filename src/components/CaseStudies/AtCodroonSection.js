import MarginWrapper from "@/components/wrappers/sectionWrapper";
import HorizontalMarginWrapper from "../wrappers/horizontalmarginWrapper";
export default function AtCodroonSection() {
  return (
    <MarginWrapper top={48} bottom={48}>
      <HorizontalMarginWrapper left={50} right={50}>
      <div className="scroll-fade-up w-full max-w-[1597px] mt-8 sm:mt-12 md:mt-[50px] mx-auto relative px-4 sm:px-6">
        {/* Text Container - Left aligned */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-[20px]">
          <h2 className="font-barlow font-semibold text-left mt-4 sm:mt-5 md:mt-[20px] text-[#E6E6E6] text-xl sm:text-2xl md:text-3xl lg:text-[48px] leading-[110%] sm:leading-[100%] tracking-[0%]">
            At Codroon
          </h2>
          <p className="font-barlow font-normal text-left text-white text-sm sm:text-base md:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.6%]">
            We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success
          </p>
          
          {/* Call to Action Button */}
          <button 
            className="text-white font-barlow font-semibold transition-all duration-200 flex items-center justify-center rounded-[30px] w-full sm:w-auto sm:max-w-[446px] h-10 sm:h-12 md:h-14 lg:h-[50px] px-4 sm:px-6 md:px-[14px] py-3 sm:py-3 md:py-[12px] gap-2 sm:gap-[10px] text-xs sm:text-sm md:text-base lg:text-[18px]"
            style={{ backgroundColor: '#44915C' }}
          >
            Here are 10 examples of our notable works
          </button>
        </div>
      </div>
      </HorizontalMarginWrapper>
    </MarginWrapper>
  );
}
