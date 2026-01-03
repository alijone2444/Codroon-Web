import Image from 'next/image';

const IndustriesCTASection = () => {
  return (
    <section className="relative w-full h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:h-[619px] flex items-center justify-center overflow-hidden">
      {/* Background Image - brain1 */}
      <Image
        src="/Images/Brain.jpg"
        alt="Brain Network"
        fill
        priority
        className="object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
      {/* Blue blush overlay */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[50px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[350px] py-12 sm:py-16 md:py-20 lg:py-[120px] w-full">
        {/* Logo */}
        <Image
          src="/codroon-logo.png"
          alt="Codroon Logo"
          width={201}
          height={41}
          className="w-32 sm:w-40 md:w-48 lg:w-[201px] h-auto mb-2 sm:mb-3 md:mb-4"
        />
        
        {/* Heading */}
        <h2 className="font-barlow font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-[110%] sm:leading-[100%] text-white text-center">
          Let us bring your ideas to life in the digital world.
        </h2>
        
        {/* Description */}
        <p className="font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[22px] leading-[140%] sm:leading-[150%] tracking-[-0.2%] sm:tracking-[-0.3%] md:tracking-[-0.6%] text-[#E6E6E6] text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-full">
          No matter which industry you're in, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
        </p>
        
        {/* Button */}
        <button 
          className="text-black font-barlow font-semibold transition-all duration-200 flex items-center justify-center gap-2 rounded-[30px] hover:bg-[#57BB6D] active:scale-95 w-full max-w-[200px] sm:max-w-[230px] md:max-w-[265px] h-10 sm:h-12 md:h-14 lg:h-[63px] px-4 sm:px-6 md:px-8"
          style={{ 
            backgroundColor: '#44915C'
          }}
        >
          <span className="text-xs sm:text-sm md:text-base lg:text-lg">Start Project</span>
        </button>
      </div>
    </section>
  );
};

export default IndustriesCTASection;