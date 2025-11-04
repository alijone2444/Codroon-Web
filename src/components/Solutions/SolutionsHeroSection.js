import Image from 'next/image';
import TypewriterText from "../libs/typeWritter";
const SolutionsHeroSection = () => {
  return (
    <section className="relative w-full h-[488px] flex items-center justify-center overflow-hidden top-[100px]">
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
      <div className="relative z-10 text-center px-4 animate-fade-slide">
        <h1 className="font-barlow font-semibold text-[48px] leading-[100%] tracking-[0%] text-white mb-6">
          Our Solutions
        </h1>

        <TypewriterText
  text="  Transform your brand with our innovative digital solutions that captivate and engage your audience."
  textSize="text-[20px]"
  textColor="text-white"
  fontWeight="font-normal"
  fontName='font-barlow'
/>
      </div>
    </section>
  );
};

export default SolutionsHeroSection;
