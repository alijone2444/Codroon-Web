import CaseStudiesHeroSection from '@/components/CaseStudies/CaseStudiesHeroSection';
import CaseStudyCardsSection from '@/components/CaseStudies/CaseStudyCardsSection';
import CaseStudiesCTASection from '@/components/CaseStudies/CaseStudiesCTASection';
import HorizontalMarginWrapper from '@/components/wrappers/horizontalmarginWrapper';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <CaseStudiesHeroSection />
      <div className="pt-24 sm:pt-28 md:pt-32">
        <HorizontalMarginWrapper left={50} right={50}>
          <CaseStudyCardsSection />
          <CaseStudiesCTASection />
        </HorizontalMarginWrapper>
      </div>
    </div>
  );
}
