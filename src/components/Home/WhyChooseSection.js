'use client';
import Image from "next/image";
import MarginWrapper from "@/components/wrappers/sectionWrapper";
import { useEffect, useRef, useState } from "react";

export default function WhyChooseSection() {
  const features = [
    "AI-Powered Requirement Gathering",
    "Agile Project Management",
    "Scalable Tech Stack",
    "Trusted by Global Teams"
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
              entry.target.classList.add('fade-up-visible');
            }
            if (entry.target === imageRef.current) {
              setImageVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <MarginWrapper top={60} bottom={60} smTop={80} smBottom={80} mdTop={96} mdBottom={96}>
      <div ref={sectionRef} className="w-full max-w-[1597px] mx-auto relative scroll-fade-up">
        {/* Text Container - Responsive with animations */}


        {/* Solar System Area - Responsive with scale animation */}
        <div
          ref={imageRef}
          className={`relative w-full max-w-[90vw] sm:max-w-[95vw] md:max-w-[1436px] h-[250px] sm:h-[400px] md:h-[600px] lg:h-[750px] xl:h-[925.19px] mx-auto mt-0 px-4 sm:px-6 reveal-scale ${imageVisible ? 'reveal-visible' : ''}`}
          style={{ transitionDelay: '0.3s' }}
        >
          {/* Solar System Background Image with gentle float */}
          <div className="absolute inset-0 animate-float" style={{ animationDuration: '6s' }}>
            <Image
              src="/Images/solarSystem-codroon.svg"
              alt="Codroon Solar System"
              width={1436}
              height={925.19}
              className="w-full h-full object-contain transition-transform duration-700 hover:scale-[1.02]"
              priority
            />
          </div>

          {/* Subtle glow overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-[#52B069]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </div>
      </div>
    </MarginWrapper>
  );
}