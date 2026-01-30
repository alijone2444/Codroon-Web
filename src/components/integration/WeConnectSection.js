"use client";
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const apiCategories = [
  {
    title: "Payment APIs",
    apis: [
      { name: "Stripe", subtitle: "Payment APIs", image: "/Images/integrations/stripe-1.png" },
      { name: "PayPal", subtitle: "Payment APIs", image: "/Images/integrations/payment-2.png" },
    ],
  },
  {
    title: "Communication APIs",
    apis: [
      { name: "Twilio", subtitle: "Communication APIs", image: "/Images/integrations/communicate-1.png" },
      { name: "SendGrid", subtitle: "Email APIs", image: "/Images/integrations/communicate-2.png" },
      { name: "WhatsApp Business", subtitle: "Message APIs", image: "/Images/integrations/communicate-3.png" },
    ],
  },
  {
    title: "Maps & Geo APIs",
    apis: [
      { name: "Google Maps", subtitle: "Map APIs", image: "/Images/integrations/map-1.png" },
      { name: "Mapbox", subtitle: "Geo APIs", image: "/Images/integrations/map-2.png" },
    ],
  },
  {
    title: "CRM APIs",
    apis: [
      { name: "HubSpot", subtitle: "CRM APIs", image: "/Images/integrations/crm-1.png" },
      { name: "Zoho", subtitle: "CRM APIs", image: "/Images/integrations/crm-2.png" },
    ],
  },
  {
    title: "E-commerce APIs",
    apis: [
      { name: "Shopify", subtitle: "E-commerce APIs", image: "/Images/integrations/ecommerce-1.png" },
      { name: "WooCommerce", subtitle: "E-commerce APIs", image: "/Images/integrations/ecommerce-2.png" },
    ],
  },
  {
    title: "Additional APIs",
    apis: [
      { name: "Automation", subtitle: "Payment APIs", image: "/Images/integrations/additional-1.png" },
      { name: "Banking", subtitle: "Payment APIs", image: "/Images/integrations/additional-2.png" },
      { name: "SMS", subtitle: "Messaging Service", image: "/Images/integrations/additional-3.png" },
    ],
  },
]

export default function WeConnectSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState({});
  const categoryRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            } else {
              const index = categoryRefs.current.indexOf(entry.target);
              if (index !== -1) {
                setVisibleCategories(prev => ({ ...prev, [index]: true }));
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      categoryRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-8 sm:mb-10 md:mb-12 reveal-fade-up ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 leading-[110%] sm:leading-[100%]">We connect your world</h2>
          {/* Green divider under heading with animation */}
          <div className={`h-px bg-emerald-500/50 mt-4 sm:mt-5 md:mt-6 mx-auto transition-all duration-1000 ease-out ${isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '0.3s' }}></div>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {apiCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              ref={el => categoryRefs.current[categoryIndex] = el}
            >
              <h3 className={`text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 leading-[110%] sm:leading-[100%] reveal-fade-up ${visibleCategories[categoryIndex] ? 'reveal-visible' : ''}`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {category.apis.map((api, apiIndex) => (
                  <div
                    key={api.name}
                    className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-emerald-500/50 transition-all duration-500 cursor-pointer group hover:shadow-[0_0_25px_rgba(82,176,105,0.15)] hover:-translate-y-1 reveal-scale ${visibleCategories[categoryIndex] ? 'reveal-visible' : ''}`}
                    style={{ transitionDelay: `${0.1 * (apiIndex + 1)}s` }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={api.image}
                          alt={api.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-base sm:text-lg font-medium mb-1 leading-[110%] sm:leading-[100%] group-hover:text-[#52B069] transition-colors duration-300">{api.name}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm leading-[140%] sm:leading-[150%]">{api.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`border-t border-emerald-500/30 mt-6 sm:mt-7 md:mt-8 transition-all duration-700 ease-out ${visibleCategories[categoryIndex] ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
