"use client";

import MarginWrapper from "@/components/wrappers/sectionWrapper";
import { useState } from "react";
import HorizontalMarginWrapper from "../wrappers/horizontalmarginWrapper";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState("01");
  
  const faqs = [
    {
      id: "01",
      question: "What services does Codroon provide?",
      answer: "Codroon offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
      id: "02", 
      question: "How can Codroon help my business?",
      answer: "We help businesses transform their digital presence through innovative solutions. Our services include custom web development, mobile applications, UI/UX design, and digital strategy consulting to drive growth and improve user engagement."
    },
    {
      id: "03",
      question: "What industries does Codroon work with?",
      answer: "We work across various industries including healthcare, financial services, e-commerce, education, manufacturing, real estate, travel, and technology. Our diverse experience allows us to understand unique industry challenges and deliver tailored solutions."
    },
    {
      id: "04",
      question: "How long does it take to complete a project with Codroon?",
      answer: "Project timelines vary based on scope and complexity. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation and maintain regular communication throughout the project."
    },
    {
      id: "05",
      question: "Do you offer ongoing support and maintenance after the project is completed?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, performance optimization, feature enhancements, and technical support to keep your project running smoothly."
    },
    {
      id: "06",
      question: "Can you work with existing design or development frameworks?",
      answer: "Absolutely! We can work with your existing frameworks, codebases, and design systems. Our team is experienced with various technologies and can integrate seamlessly with your current infrastructure while improving and extending functionality."
    },
    {
      id: "07",
      question: "How involved will I be in the project development process?",
      answer: "We believe in collaborative development. You'll be involved in key decision-making processes, regular progress reviews, and feedback sessions. We maintain transparent communication and provide regular updates to ensure the project aligns with your vision."
    },
    {
      id: "08",
      question: "Can you help with website or app maintenance and updates?",
      answer: "Yes, we provide comprehensive maintenance services including regular updates, security patches, performance monitoring, content updates, and feature additions. Our maintenance packages ensure your digital assets remain secure, fast, and up-to-date."
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
