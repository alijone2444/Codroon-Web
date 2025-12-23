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
          <p className="font-barlow font-normal text-[#E6E6E6] text-sm sm:text-base md:text-[18px] lg:text-[20px] leading-[140%] sm:leading-[150%] max-w-[90%] sm:max-w-[80%] md:max-w-3xl mx-auto">
            Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>
      </div>
    </MarginWrapper>
  );
}