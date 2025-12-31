import MarginWrapper from "@/components/wrappers/sectionWrapper";

export default function ProcessMainSection() {
  return (
    <MarginWrapper top={96} bottom={96}>
      <div className="w-full max-w-[1597px] mx-auto relative px-4 sm:px-6 md:px-8">
        {/* Main Container */}
        <div 
          className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] pl-0 sm:pl-4 md:pl-6 lg:pl-[30px]" 
          
        >
              <h2 
                className="font-barlow font-semibold text-left text-white mt-4 sm:mt-5 md:mt-6 lg:mt-[20px] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[110%] sm:leading-[100%] tracking-[0%]"
              >
                At Codroon
              </h2>
              <p 
                className="font-barlow font-normal text-left text-white text-sm sm:text-base md:text-lg lg:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.6%]"
              >We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
              </p>
            
            {/* Button */}
            <button 
              className="text-white font-barlow font-semibold transition-all duration-200 flex items-center justify-center rounded-[30px] w-full sm:w-auto sm:max-w-[420px] h-10 sm:h-12 md:h-14 lg:h-[50px] px-4 sm:px-6 md:px-[14px] py-2 sm:py-3 md:py-[12px] gap-2 sm:gap-[10px]"
              style={{ 
                backgroundColor: '#57BB6D'
              }}
            >
            Here's an overview of our typical process:
            </button>
        </div>
      </div>
    </MarginWrapper>
  );
}
