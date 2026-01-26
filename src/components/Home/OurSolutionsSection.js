'use client';
import Image from "next/image";
import MarginWrapper from "@/components/wrappers/sectionWrapper";
import HorizontalMarginWrapper from "../wrappers/horizontalmarginWrapper";
import { useEffect, useRef, useState } from "react";

export default function OurSolutionsSection() {
  const solutions = [
    {
      icon: "/Images/brush.png",
      title: "UI/UX Design",
      description: "At Codroon, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
    },
    {
      icon: "/Images/puzzle.png",
      title: "Web Development",
      description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
    },
    {
      icon: "/Images/Icons/power.png",
      title: "Mobile App Development",
      description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
    },
    {
      icon: "/Images/brush.png",
      title: "Project Management",
      description: "At Codroon, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
    },
    {
      icon: "/Images/puzzle.png",
      title: "SEO",
      description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
    },
    {
      icon: "/Images/Icons/power.png",
      title: "SaaS Development",
      description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
    },
    {
      icon: "/Images/brush.png",
      title: "Agentic AI",
      description: "At Codroon, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
    },
    {
      icon: "/Images/puzzle.png",
      title: "Game Development",
      description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
    },
    {
      icon: "/Images/Icons/power.png",
      title: "Desktop Apps",
      description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
    }
  ];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('fade-up-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe individual cards for staggered animation
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <MarginWrapper bottom={80} top={40}>
      <HorizontalMarginWrapper left={20} right={20} smLeft={40} smRight={40} mdLeft={60} mdRight={60} lgLeft={80} lgRight={80}>
        <div ref={sectionRef} className="relative w-full max-w-[1596px] mx-auto scroll-fade-up">
          {/* Globe Background - Responsive with subtle rotation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/globe.gif"
              alt="Globe background"
              width={1200}
              height={434}
              className="object-cover opacity-[0.07] mix-blend-lighten w-full h-auto"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10">
            {/* Header Section - Responsive with animation */}
            <div
              ref={headerRef}
              className={`w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-[120px] flex flex-col gap-4 sm:gap-6 md:gap-[14px] items-center reveal-fade-up ${isVisible ? 'reveal-visible' : ''}`}
            >
              <h2 className="w-full font-barlow font-semibold text-3xl sm:text-4xl md:text-[48px] leading-tight sm:leading-snug md:leading-[100%] tracking-[0%] text-center text-white px-2">
                Our Solutions
              </h2>
            </div>

            {/* Grid Container - Responsive with staggered animations */}
            <div className="w-full px-4 sm:px-6 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className={`relative md:border-r md:border-white/20 md:last:border-r-0 flex justify-center reveal-fade-up stagger-${(index % 3) + 1} ${isVisible ? 'reveal-visible' : ''}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {/* Card Content with hover effects */}
                    <div className="solution-card w-full max-w-[432px] min-h-[300px] sm:min-h-[400px] md:h-[577px] flex flex-col gap-6 sm:gap-8 md:gap-[40px] p-4 sm:p-6 border border-white/20 md:border-0 rounded-xl md:rounded-none bg-[#0F172A]/50 md:bg-transparent group">
                      {/* Logo with float animation on hover */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] rounded-lg md:rounded-[10px] border border-white/20 bg-[#4368B11A] p-4 md:p-6 flex items-center justify-center transition-all duration-500 group-hover:border-[#52B069]/50 group-hover:bg-[#52B069]/10 group-hover:scale-110 icon-bounce">
                        <Image
                          src={solution.icon}
                          alt={`${solution.title} icon`}
                          width={32}
                          height={32}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Title with color transition */}
                      <h3 className="font-barlow font-semibold text-lg sm:text-xl md:text-xl text-white transition-colors duration-300 group-hover:text-[#52B069]">
                        {solution.title}
                      </h3>

                      {/* Description with fade effect */}
                      <p className="font-barlow font-normal text-sm sm:text-base md:text-sm text-white/80 leading-relaxed line-clamp-4 md:line-clamp-none transition-colors duration-300 group-hover:text-white/90">
                        {solution.description}
                      </p>

                      {/* Learn More Button with shine effect */}
                      <div className="w-full flex justify-center mt-auto">
                        <button className="btn-shine flex flex-row items-center justify-center w-full h-12 sm:h-14 md:h-[60px] px-4 sm:px-6 md:px-[16px] py-3 sm:py-4 md:py-[18px] gap-2 sm:gap-3 md:gap-[10px] bg-[#52B069] text-white font-barlow font-medium text-base sm:text-lg md:text-base rounded-2xl md:rounded-[30px] hover:bg-[#05C191] transition-all duration-300 hover:shadow-[0_0_30px_rgba(82,176,105,0.4)] hover:scale-[1.02]">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </HorizontalMarginWrapper>
    </MarginWrapper>
  );
}