import MarginWrapper from "@/components/wrappers/sectionWrapper";


export default function GridStepsSection({data}) {
  return (
    <MarginWrapper top={0} bottom={96}>
      <div className="w-full max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
          {data.map((step, index) => (
            <div
              key={index}
              className="flex flex-col justify-start bg-transparent border border-[#1F2937] rounded-lg p-6 sm:p-8 md:p-12"
            >
              {/* Top Section — Number + Title */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6">
                {/* Big Number */}
                <div className="font-barlow font-semibold text-[#57BB6D] text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[150px] leading-none">
                  {step.number}
                </div>

                {/* Title */}
                <div className="flex-1 border-b border-gray-600 pb-3 sm:pb-4 pl-2">
                  <h3 className="font-barlow font-semibold text-lg sm:text-xl md:text-[20px] lg:text-[24px] leading-tight text-[#98989A]">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 sm:mt-5 md:mt-6 font-inter font-normal text-[#98989A] text-sm sm:text-base md:text-[16px] lg:text-[18px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MarginWrapper>
  );
}
