'use client';
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const monitoring = [
  { name: "Sentry", image: "/Images/technologies/monitor-1.png" },
  { name: "New Relic", image: "/Images/technologies/monitor-2.png" },
  { name: "Grafana", image: "/Images/technologies/monitor-3.png" },
  { name: "Datadog", image: "/Images/technologies/monitor-4.png" },
]

export default function MonitoringSection() {
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
    <section ref={sectionRef} className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-7 md:mb-8 reveal-fade-up ${isVisible ? 'reveal-visible' : ''}`}>
          Monitoring & Analytics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {monitoring.map((tool, index) => (
            <div
              key={tool.name}
              className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 hover:border-emerald-500/50 transition-all duration-500 cursor-pointer group flex flex-col items-center justify-center text-center hover:shadow-[0_0_30px_rgba(82,176,105,0.15)] hover:-translate-y-2 reveal-fade-up ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-sm sm:text-base font-medium transition-colors duration-300 group-hover:text-[#52B069]">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
