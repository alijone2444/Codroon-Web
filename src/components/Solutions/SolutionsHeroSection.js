import Image from 'next/image';
const SolutionsHeroSection = () => {
  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:h-[488px] flex items-center justify-center overflow-hidden mb-[100px] top-[80px] md:top-[100px]">
      {/* Background Image */}
      <Image
        src="/Images/furisticBusinessScene.jpg"
        alt="Futuristic Business Scene"
        fill
        priority
        className="object-cover opacity-25 "
      />

  <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 animate-fade-slide py-12 sm:py-16 md:py-20 lg:py-0">
        <h1 className="font-barlow font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[48px] leading-[110%] sm:leading-[100%] tracking-[0%] text-white mb-4 sm:mb-5 md:mb-6">
          Our Solutions
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-white font-normal font-barlow">
          Transform your brand with our innovative digital solutions that captivate and engage your audience.
        </p>
      </div>
    </section>
  );
};

export default SolutionsHeroSection;
