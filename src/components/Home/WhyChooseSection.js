import Image from "next/image";
import MarginWrapper from "@/components/wrappers/sectionWrapper";
import { useEffect, useRef } from "react";

export default function WhyChooseSection() {
  const features = [
    "AI-Powered Requirement Gathering",
    "Agile Project Management", 
    "Scalable Tech Stack",
    "Trusted by Global Teams"
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <MarginWrapper top={60} bottom={60} smTop={80} smBottom={80} mdTop={96} mdBottom={96}>
      <div ref={sectionRef} className="w-full max-w-[1597px] mx-auto relative scroll-fade-up">
        {/* Text Container - Responsive */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] flex flex-col gap-4 sm:gap-6 md:gap-[14px] items-center">
          <h2 className="w-full font-barlow font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight sm:leading-snug md:leading-[100%] tracking-[0%] text-center text-white px-2">
            Why Choose Codroon?
          </h2>
          <p className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[997px] font-barlow font-normal text-base sm:text-lg md:text-[18px] leading-relaxed sm:leading-normal md:leading-[24px] tracking-[-0.6%] text-center text-white px-2">
            Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>

        {/* Solar System Area - Responsive */}
        <div className="relative w-full max-w-[90vw] sm:max-w-[95vw] md:max-w-[1436px] h-[250px] sm:h-[400px] md:h-[600px] lg:h-[750px] xl:h-[925.19px] mx-auto mt-0 px-4 sm:px-6">
          {/* Solar System Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/Images/solarSystem-codroon.svg"
              alt="Codroon Solar System"
              width={1436}
              height={925.19}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </MarginWrapper>
  );
}