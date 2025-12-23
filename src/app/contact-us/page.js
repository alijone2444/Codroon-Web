import ContactUsHeroSection from '@/components/ContactUs/ContactUsHeroSection';
import OperatingDaysSection from '@/components/ContactUs/OperatingDaysSection';
import ContactSection from '@/components/Home/ContactSection';
import FAQHeroSection from '@/components/ContactUs/FAQHeroSection';
import FAQSection from '@/components/ContactUs/FAQSection';
import ContactCTASection from '@/components/ContactUs/ContactCTASection';
import HorizontalMarginWrapper from '@/components/wrappers/horizontalmarginWrapper';
import MarginWrapper from '@/components/wrappers/sectionWrapper';
export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <ContactUsHeroSection />
      <OperatingDaysSection />
      <HorizontalMarginWrapper left={50} right={50}>
  <ContactSection noThankYou={true} />

  </HorizontalMarginWrapper>
        <FAQHeroSection />
        <FAQSection />
        
      <ContactCTASection />
      
    </div>
  );
}
