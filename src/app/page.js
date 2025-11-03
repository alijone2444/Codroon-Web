"use client";
import { useEffect } from "react";
import HeroSection from "@/components/Home/heroSection";
import AIAssistantSection from "@/components/Home/AiAssistantSection";
import OurSolutionsSection from "@/components/Home/OurSolutionsSection";
import WhyChooseSection from "@/components/Home/WhyChooseSection";
import FAQSection from "@/components/Home/FAQSection";
import ContactSection from "@/components/Home/ContactSection";
import { initScrollFadeObserver } from "@/utils/scrollFadeObserver";
export default function Home() {
 
  return (
    <div className="w-full bg-[#0F172A]">
      <HeroSection />
      <AIAssistantSection />
      <OurSolutionsSection />
      <WhyChooseSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
