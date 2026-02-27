import CaseStudiesHeroSection from '@/components/CaseStudies/CaseStudiesHeroSection';
import CaseStudyCardsSection from '@/components/CaseStudies/CaseStudyCardsSection';
import CaseStudiesCTASection from '@/components/CaseStudies/CaseStudiesCTASection';
import HorizontalMarginWrapper from '@/components/wrappers/horizontalmarginWrapper';

export const metadata = {
  title: "Software Case Studies & Digital Projects | Codroon",
  description:
    "Discover Codroon's portfolio of strategically crafted digital projects. See real results from our web, mobile, and AI development work. Explore now.",
  openGraph: {
    title: "Software Case Studies & Digital Projects | Codroon",
    description:
      "Discover Codroon's portfolio of strategically crafted digital projects. See real results from our web, mobile, and AI development work. Explore now.",
  },
};

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
