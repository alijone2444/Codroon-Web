import ProcessHeroSection from '@/components/Process/ProcessHeroSection';
import GridStepsSection from '@/components/Process/GridStepsSection';
import ProcessCTASection from '@/components/Process/ProcessCTASection';
import ContactSection from '@/components/Home/ContactSection';
import HorizontalMarginWrapper from '@/components/wrappers/horizontalmarginWrapper';
import { processSteps } from '@/components/Process/constants';

export const metadata = {
  title: "Our Software Development Process | Codroon",
  description:
    "See how Codroon delivers exceptional results through a transparent, collaborative software development process. Learn our proven approach today.",
  openGraph: {
    title: "Our Software Development Process | Codroon",
    description:
      "See how Codroon delivers exceptional results through a transparent, collaborative software development process. Learn our proven approach today.",
  },
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <ProcessHeroSection />
      <div className="pt-24 sm:pt-28 md:pt-32">
        <HorizontalMarginWrapper left={50} right={50}>
          <GridStepsSection data={processSteps} />
        </HorizontalMarginWrapper>
      </div>
      <ProcessCTASection />
      <ContactSection noThankYou={true} />
    </div>
  );
}
