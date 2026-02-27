import WhoWeAreHeroSection from '@/components/WhoWeAre/WhoWeAreHeroSection';
import WhoWeAreMainSection from '@/components/WhoWeAre/WhoWeAreMainSection';
import GridStepsSection from '@/components/Process/GridStepsSection';
import WhoWeAreCTASection from '@/components/WhoWeAre/WhoWeAreCTASection';
import HorizontalMarginWrapper from '@/components/wrappers/horizontalmarginWrapper';
import { WhoWeAreSteps } from '@/components/WhoWeAre/constants';

export const metadata = {
  title: "About Codroon | AI & Software Company",
  description:
    "Learn about Codroon — a global software company specializing in AI-driven solutions and scalable digital platforms across the USA and South Asia.",
  openGraph: {
    title: "About Codroon | AI & Software Company",
    description:
      "Learn about Codroon — a global software company specializing in AI-driven solutions and scalable digital platforms across the USA and South Asia.",
  },
};
export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <WhoWeAreHeroSection />
      <HorizontalMarginWrapper left={50} right={50}>
        <WhoWeAreMainSection />
        <GridStepsSection data={WhoWeAreSteps} />
      </HorizontalMarginWrapper>
      <WhoWeAreCTASection />
    </div>
  );
}
