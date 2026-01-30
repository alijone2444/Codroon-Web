"use client";

import Image from "next/image";
import MarginWrapper from "@/components/wrappers/sectionWrapper";
import { useState, useEffect, useRef } from "react";
import HorizontalMarginWrapper from "../wrappers/horizontalmarginWrapper";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState("01");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  const faqs = [
    {
      id: "01",
      question: "What services does Codroon offer?",
      answer: "Codroon specializes in AI-driven solutions, custom software development, and scalable digital platforms. We help businesses across Texas and the U.S. streamline operations, automate workflows, and accelerate digital transformation with intelligent technology."
    },
    {
      id: "02",
      question: "Does Codroon provide software development in Texas?",
      answer: "Yes — Codroon offers end-to-end software development services in Texas, including web apps, AI integrations, and cloud-based platforms. Our Texas-based clients benefit from fast delivery, clear communication, and enterprise-grade scalability."
    },
    {
      id: "03",
      question: "How does Codroon use AI to help businesses grow?",
      answer: "We use artificial intelligence and machine learning to analyze business data, automate repetitive tasks, and create predictive tools that support smarter business decisions. The result? Higher productivity and measurable business growth."
    },
    {
      id: "04",
      question: "How quickly can Codroon deliver a project?",
      answer: "Speed is one of our core values. Depending on project complexity, MVPs (Minimum Viable Products) can be delivered within 2–6 weeks. We prioritize rapid development without compromising quality, using agile methods to iterate fast and deliver impact."
    },
    {
      id: "05",
      question: "Can Codroon help startups and small businesses?",
      answer: "Absolutely. Codroon partners with startups and small-to-medium businesses across Texas and the U.S. We design flexible engagement models and scalable solutions that grow with your business."
    },
    {
      id: "06",
      question: "How can I get a quote for my project?",
      answer: "You can get an instant quote and requirement document directly through our AI-powered website assistant, Just enter your project details — our system will generate everything you need within minutes."
    },
    {
      id: "07",
      question: "Where is Codroon located?",
      answer: "Codroon operates across the United States (with a strong presence in Texas) and South Asia. Our distributed model allows us to deliver top-tier talent and around-the-clock productivity to clients worldwide."
    },
    {
      id: "08",
      question: "Why choose Codroon over other software companies?",
      answer: "Codroon stands out for its focus, speed, and impact. We don't just build software — we deliver measurable business outcomes. With deep AI expertise and an execution-first mindset, we help businesses move faster and smarter."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            }
            if (entry.target === headerRef.current) {
              setHeaderVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  const FAQItem = ({ faq, index, isLeft }) => {
    const isOpen = openFAQ === faq.id;
    return (
      <div
        className={`flex gap-3 sm:gap-4 md:gap-6 group cursor-pointer reveal-fade-up ${isVisible ? 'reveal-visible' : ''} ${isOpen ? "" : "items-center"}`}
        onClick={() => setOpenFAQ(isOpen ? null : faq.id)}
        style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
      >
        {/* Number Indicator - Responsive with hover effects */}
        <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] rounded-lg sm:rounded-xl md:rounded-[12px] border border-white/20 p-2 sm:p-3 md:p-4 lg:p-[20px] flex items-center justify-center flex-shrink-0 transition-all duration-500 bg-gradient-to-b from-[#2E2E2E] to-[#1C1C1C] group-hover:scale-105 group-hover:border-[#06D6A0]/50 ${isOpen ? 'scale-105 border-[#06D6A0]/50 shadow-[0_0_20px_rgba(6,214,160,0.2)]' : ''}`}>
          <span className={`font-barlow font-semibold text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-[150%] text-center flex items-center justify-center transition-all duration-300 ${isOpen ? 'text-[#06D6A0] scale-110' : 'text-white group-hover:text-[#06D6A0]'
            }`}>
            {faq.id}
          </span>
        </div>

        {/* Question and Answer - Responsive with smooth transitions */}
        <div className="flex-1 max-w-[588px]">
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            <h3 className={`font-barlow font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 ${isOpen ? 'text-[#06D6A0]' : 'text-white group-hover:text-[#06D6A0]'
              }`}>
              {faq.question}
            </h3>
            <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="font-barlow font-normal text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-normal md:leading-[150%] tracking-[-0.6%] text-white/80">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>

        {/* Toggle Icon - Responsive with rotation animation */}
        <div className="flex items-center ml-1 sm:ml-2">
          <div className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-all duration-300 ${isOpen ? 'text-[#06D6A0] rotate-180' : 'text-white group-hover:text-[#06D6A0]'
            }`}>
            {isOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="transition-transform duration-300">
                <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="transition-transform duration-300 group-hover:rotate-90">
                <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <MarginWrapper top={96} bottom={96}>
      <div ref={sectionRef} className="w-full max-w-[1904px] mx-auto">

        {/* Sparkles Background Header with parallax-like effect */}
        <div
          ref={headerRef}
          className={`relative w-full h-[335px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[350px] py-[120px] flex flex-col gap-[10px] items-center justify-center reveal-scale ${headerVisible ? 'reveal-visible' : ''}`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/Images/sparkles.jpg"
              alt="Sparkles background"
              fill
              className="object-cover mix-blend-overlay scale-105 hover:scale-100 transition-transform duration-1000"
            />
          </div>

          <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23] mix-blend-overlay"></div>
          <div className="relative z-10 text-center px-4 sm:px-6">
            <h2 className="font-barlow font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight sm:leading-snug md:leading-[100%] tracking-[0%] text-white mb-3 sm:mb-4 md:mb-[10px]">
              Questions, Answered
            </h2>
          </div>
        </div>

        {/* FAQ Items Container */}
        <div className="w-full border-t border-white/20">
          <HorizontalMarginWrapper
            left={{ base: 16, md: 40, lg: 80 }}
            right={{ base: 16, md: 40, lg: 80 }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left Column */}
              <div
                ref={leftColRef}
                className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-4 xl:px-8 py-8 sm:py-12 md:py-16"
              >
                <div className="space-y-4 sm:space-y-6">
                  {faqs.slice(0, 4).map((faq, index) => (
                    <FAQItem key={faq.id} faq={faq} index={index} isLeft={true} />
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div
                ref={rightColRef}
                className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-4 xl:px-8 py-8 sm:py-12 md:py-16 border-t border-white/20 lg:border-t-0 lg:border-l border-white/20"
              >
                <div className="space-y-4 sm:space-y-6">
                  {faqs.slice(4, 8).map((faq, index) => (
                    <FAQItem key={faq.id} faq={faq} index={index + 4} isLeft={false} />
                  ))}
                </div>
              </div>
            </div>
          </HorizontalMarginWrapper>
        </div>
      </div>
    </MarginWrapper>
  );
}
