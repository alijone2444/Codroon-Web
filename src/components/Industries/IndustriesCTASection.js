import Image from 'next/image';

const IndustriesCTASection = () => {
  return (
    <section className="relative w-full h-auto min-h-[400px] sm:min-h-[500px] md:h-[619px] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center flex flex-col items-center gap-6 sm:gap-8 md:gap-[50px] px-4 sm:px-6 md:px-8 lg:px-[350px] py-12 sm:py-16 md:py-[120px] w-full">
        {/* Logo */}
        <Image
          src="/codroon-logo.png"
          alt="Codroon Logo"
          width={201}
          height={41}
          className="w-40 sm:w-48 md:w-[201px] h-auto mb-4"
        />
        
        {/* Heading */}
        <h2 className="font-barlow font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[38px] leading-[110%] sm:leading-[100%] text-white text-center">
          Let us Bring your Ideas to Life in the Digital World.
        </h2>
        
        {/* Description */}
        <p className="font-barlow font-normal text-sm sm:text-base md:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.3%] md:tracking-[-0.6%] text-[#E6E6E6] text-center max-w-[90%] sm:max-w-[80%] md:max-w-full">
          No matter which industry you're in, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
        </p>
        
        {/* Button */}
        <button 
          className="text-black font-barlow font-semibold transition-all duration-200 flex items-center justify-center gap-2 rounded-[30px] hover:bg-[#57BB6D] active:scale-95 w-full max-w-[265px] h-12 sm:h-14 md:h-[63px] px-6 sm:px-8"
          style={{ 
            backgroundColor: '#44915C'
          }}
        >
          <span className="text-sm sm:text-base md:text-lg">Start Project</span>
        </button>
      </div>
    </section>
  );
};

export default IndustriesCTASection;