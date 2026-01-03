import Image from 'next/image';

const CaseStudiesCTASection = () => {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:h-[619px] flex items-center justify-center overflow-hidden">
      {/* Background Image - brain2 */}
      <Image
        src="/Images/brain2.gif"
        alt="Brain Network"
        fill
        priority
        className="object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
      {/* Blue blush overlay */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[50px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[350px] py-12 sm:py-16 md:py-20 lg:py-[120px]">
        {/* Logo */}
        <Image
          src="/codroon-logo.png"
          alt="Codroon Logo"
          width={201}
          height={41}
          className="mb-2 sm:mb-3 md:mb-4 w-32 sm:w-40 md:w-48 lg:w-[201px] h-auto"
        />
        
        {/* Heading */}
        <h2 className="font-barlow font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[110%] sm:leading-[100%] tracking-[0%] text-white text-center">
          Let us bring your ideas to life in the digital world.
        </h2>
        
        {/* Description */}
        <p className="font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] text-[#E6E6E6] text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-full">
          No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
        </p>
        
        {/* Button */}
        <button 
          className="bg-green-600 hover:bg-green-700 text-black font-barlow font-semibold text-xs sm:text-sm md:text-base lg:text-[18px] leading-[140%] sm:leading-[150%] tracking-[0%] transition-all duration-200 flex items-center justify-center gap-2 sm:gap-[8px] rounded-[30px] w-full sm:w-auto min-w-[200px] sm:min-w-[265px] h-10 sm:h-12 md:h-14 lg:h-[63px] px-6 sm:px-8 md:px-[34px] py-3 sm:py-4 md:py-[18px]"
        >
          Start Project
        </button>
      </div>
    </section>
  );
};

export default CaseStudiesCTASection;
