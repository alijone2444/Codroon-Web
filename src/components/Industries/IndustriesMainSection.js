import MarginWrapper from "@/components/wrappers/sectionWrapper";

export default function IndustriesMainSection() {
  return (
    <MarginWrapper top={{ base: 8, md: 16, lg: 24 }} bottom={{ base: 8, md: 16, lg: 24 }}>
      <div className="w-full max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Main Container */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <h2 className="font-barlow font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[48px] leading-[110%] sm:leading-[100%]">
            Industries We Empower
          </h2>
        </div>
      </div>
    </MarginWrapper>
  );
}