import ProcessHeroSection from '@/components/Process/ProcessHeroSection';
import GridStepsSection from '@/components/Process/GridStepsSection';
import ProcessCTASection from '@/components/Process/ProcessCTASection';
import ContactSection from '@/components/Home/ContactSection';
import HorizontalMarginWrapper from '@/components/wrappers/horizontalmarginWrapper';
import { processSteps } from '@/components/Process/constants';

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
