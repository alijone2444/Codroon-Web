import Image from "next/image";
export default function WhoWeAreHeroSection() {
  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:h-[488px] flex items-center justify-center overflow-hidden mb-[100px] top-[80px] md:top-[100px]">
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
      <div className="animate-fade-slide relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[300px] py-12 sm:py-16 md:py-20 lg:py-[120px] gap-3 sm:gap-4 md:gap-[14px]">
        <h1 className="font-barlow font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[110%] sm:leading-[100%] tracking-[0%] text-center text-white">
        Who We Are
        </h1>

   
        
        <p className="text-base sm:text-lg md:text-xl lg:text-[28px] text-white font-normal font-barlow">
          Welcome to Codroon, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.
        </p>
      </div>
    </section>
  );
}
