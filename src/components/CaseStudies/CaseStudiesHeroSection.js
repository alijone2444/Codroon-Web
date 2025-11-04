import Image from "next/image";
import TypewriterText from "../libs/typeWritter";
export default function CaseStudiesHeroSection() {
  return (
    <section className="relative w-full h-[488px] flex items-center justify-center overflow-hidden" style={{ top: '100px' }}>
      {/* Background Image - same as previous pages */}
      <Image
        src="/Images/furisticBusinessScene.jpg"
        alt="Futuristic Business Scene"
        fill
        priority
        className="object-cover opacity-25 "
        />
  
    <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />

      {/* Content */}
      <div className="animate-fade-slide relative z-10 flex flex-col items-center justify-center text-center w-full h-full" style={{ paddingTop: '120px', paddingRight: '300px', paddingBottom: '120px', paddingLeft: '300px', gap: '14px' }}>
        <h1 className="font-barlow font-semibold text-[48px] leading-[100%] tracking-[0%] text-center text-white">
          Case Studies
        </h1>

        <TypewriterText
  text="      Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
  textSize="text-[20px]"
  textColor="text-white"
  fontWeight="font-normal"
  fontName='font-barlow'
/>

      </div>
    </section>
  );
}
