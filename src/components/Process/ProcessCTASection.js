import Image from 'next/image';

const ProcessCTASection = () => {
  return (
    <section className="relative w-full h-[619px] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center flex flex-col items-center gap-[50px] px-[350px] py-[120px]">
        {/* Logo */}
        <Image
          src="/codroon-logo.png"
          alt="Codroon Logo"
          width={201}
          height={41}
          className="mb-4"
        />
        
        {/* Heading */}
        <h2 className="font-barlow font-semibold text-[38px] leading-[100%] tracking-[0%] text-white text-center">
          Thank you for your interest in Codroon
        </h2>
        
        {/* Description */}
        <p className="font-barlow font-normal text-[18px] leading-[150%] tracking-[-0.6%] text-white text-center max-w-4xl">
        We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.    </p>
        
        {/* Button */}
        <button 
          className="text-black font-barlow font-semibold transition-all duration-200 flex items-center justify-center gap-[8px] rounded-[37px]"
          style={{ 
            width: '232px', 
            height: '63px', 
            paddingTop: '18px', 
            paddingRight: '34px', 
            paddingBottom: '18px', 
            paddingLeft: '34px', 
            gap: '8px',
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
