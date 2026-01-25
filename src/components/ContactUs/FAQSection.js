"use client";

import MarginWrapper from "@/components/wrappers/sectionWrapper";
import { useState } from "react";
import HorizontalMarginWrapper from "../wrappers/horizontalmarginWrapper";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState("01");
  
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

  return (
    <MarginWrapper top={{ base: 8, md: 16, lg: 24 }} bottom={{ base: 8, md: 16, lg: 24 }}>
  <div className="w-full max-w-[1904px] mx-auto px-4 sm:px-6 md:px-8">
    {/* FAQ Items Container */}
    <div className="w-full border-t border-white/20">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 px-0 lg:px-4 xl:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {faqs.slice(0, 4).map((faq) => {
                const isOpen = openFAQ === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 group cursor-pointer items-start sm:items-center" 
                    onClick={() => setOpenFAQ(isOpen ? null : faq.id)}
                  >
                    {/* Number Indicator */}
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px] rounded-lg sm:rounded-[12px] border border-white/20 p-3 sm:p-4 md:p-[20px] flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-gradient-to-b from-[#2E2E2E] to-[#1C1C1C]`}
                    >
                      <span
                        className={`w-8 h-8 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] font-barlow font-semibold text-lg sm:text-xl md:text-[28px] leading-[150%] tracking-[0%] text-center flex items-center justify-center transition-colors duration-300
                          ${
                            isOpen
                              ? 'text-[#06D6A0]'
                              : 'text-white group-hover:text-[#06D6A0]'
                          }`}
                      >
                        {faq.id}
                      </span>
                    </div>

                    {/* Question and Answer */}
                    <div className="flex-1 max-w-full sm:max-w-[calc(100%-120px)] md:max-w-[588px]">
                      <div className="space-y-3 sm:space-y-4 md:space-y-5">
                        <h3 className={`font-barlow font-semibold text-base sm:text-lg md:text-xl transition-colors ${
                          isOpen ? 'text-[#06D6A0]' : 'text-white group-hover:text-[#06D6A0]'
                        }`}>
                          {faq.question}
                        </h3>
                        {isOpen && (
                          <p className="font-barlow font-normal text-sm sm:text-base md:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.3%] md:tracking-[-0.6%] text-white/80">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Toggle Icon */}
                    <div className="flex items-center justify-end sm:justify-start w-full sm:w-auto">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-colors ${
                        isOpen ? 'text-[#06D6A0]' : 'text-white group-hover:text-[#06D6A0]'
                      }`}>
                        {isOpen ? (
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                            <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                            <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 px-0 lg:px-4 xl:px-8 py-6 sm:py-8 md:py-12 lg:py-16 border-t border-white/20 lg:border-t-0 lg:border-l border-white/20">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {faqs.slice(4, 8).map((faq) => {
                const isOpen = openFAQ === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 group cursor-pointer items-start sm:items-center" 
                    onClick={() => setOpenFAQ(isOpen ? null : faq.id)}
                  >
                    {/* Number Indicator */}
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px] rounded-lg sm:rounded-[12px] border border-white/20 p-3 sm:p-4 md:p-[20px] flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-gradient-to-b from-[#2E2E2E] to-[#1C1C1C]`}
                    >
                      <span
                        className={`w-8 h-8 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] font-barlow font-semibold text-lg sm:text-xl md:text-[28px] leading-[150%] tracking-[0%] text-center flex items-center justify-center transition-colors duration-300
                          ${
                            isOpen
                              ? 'text-[#06D6A0]'
                              : 'text-white group-hover:text-[#06D6A0]'
                          }`}
                      >
                        {faq.id}
                      </span>
                    </div>

                    {/* Question and Answer */}
                    <div className="flex-1 max-w-full sm:max-w-[calc(100%-120px)] md:max-w-[588px]">
                      <div className="space-y-3 sm:space-y-4 md:space-y-5">
                        <h3 className={`font-barlow font-semibold text-base sm:text-lg md:text-xl transition-colors ${
                          isOpen ? 'text-[#06D6A0]' : 'text-white group-hover:text-[#06D6A0]'
                        }`}>
                          {faq.question}
                        </h3>
                        {isOpen && (
                          <p className="font-barlow font-normal text-sm sm:text-base md:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.3%] md:tracking-[-0.6%] text-white/80">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Toggle Icon */}
                    <div className="flex items-center justify-end sm:justify-start w-full sm:w-auto">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-colors ${
                        isOpen ? 'text-[#06D6A0]' : 'text-white group-hover:text-[#06D6A0]'
                      }`}>
                        {isOpen ? (
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                            <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                            <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</MarginWrapper>
  );
}
