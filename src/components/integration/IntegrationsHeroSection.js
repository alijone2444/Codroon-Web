import Image from "next/image";

export default function IntegrationsHeroSection() {
  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:h-[342px] flex items-center justify-center overflow-hidden mb-[100px]" style={{ top: '100px' }}>
      {/* Background Image */}
      <Image
        src="/Images/furisticBusinessScene.jpg"
        alt="Futuristic Business Scene"
        fill
        priority
        className="object-cover opacity-25"
      />
  
      <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />

      {/* Content */}
      <div className="animate-fade-slide relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[300px] py-12 sm:py-16 md:py-20 lg:py-[120px] gap-3 sm:gap-4 md:gap-[14px]">
        <h1 className="font-barlow font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[48px] leading-[110%] sm:leading-[100%] tracking-[0%] text-center text-white">
          Integrations That Supercharge Your Workflow
        </h1>

        <p className="font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[20px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] text-center text-white">
          Connect your apps, automate your operations, and enhance productivity with Codroon powerful integration ecosystem.
        </p>
      </div>
    </section>
  )
}
