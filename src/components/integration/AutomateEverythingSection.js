"use client";
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const automationTools = [
  { name: "Make.com", image: "/Images/integrations/automate-1.png" },
  { name: "Zapier", image: "/Images/integrations/automate-2.png" },
  { name: "n8n", image: "/Images/integrations/automate-3.png" },
]

export default function AutomateEverythingSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-8 sm:mb-10 md:mb-12 reveal-fade-up ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 leading-[110%] sm:leading-[100%]">Automate Everything</h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-[140%] sm:leading-[150%]">
            Seamlessly connect with top automation platforms to streamline operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative">
          {/* Horizontal center line - spans from first to last item */}
          <div className={`hidden md:block absolute left-0 top-1/2 h-px bg-emerald-500/50 -translate-y-1/2 z-0 transition-all duration-1000 ease-out ${isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '0.3s' }}></div>
          {automationTools.map((tool, index) => (
            <div
              key={tool.name}
              className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center reveal-scale ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-medium">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
