import Image from 'next/image';

const ProcessCTASection = () => {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:h-[619px] flex items-center justify-center overflow-hidden">
      {/* Background Image - using the same background as other pages */}
      <Image
        src="/Images/furisticBusinessScene.jpg"
        alt="Futuristic Business Scene"
        fill
        priority

        className="object-cover mix-blend-overlay"
              />


          <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23] mix-blend-overlay"></div>
      {/* Blue blush overlay */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[350px] py-12 sm:py-16 md:py-20 lg:py-[120px]">
        {/* Logo */}
        <Image
          src="/codroon-logo.png"
          alt="Codroon Logo"
          width={201}
          height={41}
          className="mb-4 w-32 sm:w-40 md:w-48 lg:w-[201px] h-auto"
        />
        
        {/* Heading */}
        <h2 className="font-barlow font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-[110%] sm:leading-[100%] tracking-[0%] text-white text-center">
          Thank you for your interest in Codroon
        </h2>
        
        {/* Description */}
        <p className="font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] text-white text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-4xl">
        We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.    </p>
        
        {/* Button */}
        <button 
          className="text-black font-barlow font-semibold transition-all duration-200 flex items-center justify-center gap-[8px] rounded-[37px] w-full sm:w-auto sm:max-w-[232px] h-10 sm:h-12 md:h-14 lg:h-[63px] px-4 sm:px-6 md:px-8 lg:pt-[18px] lg:pr-[34px] lg:pb-[18px] lg:pl-[34px] text-sm sm:text-base md:text-lg"
          style={{ 
            backgroundColor: '#06D6A0'
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default ProcessCTASection;
