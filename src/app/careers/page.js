import CareersHeroSection from '@/components/Careers/CareersHeroSection';
import WhyWorkAtCodroonSection from '@/components/Careers/WhyWorkAtCodroonSection';
import CurrentOpeningsSection from '@/components/Careers/CurrentOpeningsSection';
import CareersCTASection from '@/components/Careers/CareersCTASection';
import HorizontalMarginWrapper from '@/components/wrappers/horizontalmarginWrapper';

export const metadata = {
  title: "Careers at Codroon | Join Our Tech Team",
  description:
    "Join Codroon's team of innovators and problem solvers. Explore open positions in software development, AI, and design. Apply now and grow with us.",
  openGraph: {
    title: "Careers at Codroon | Join Our Tech Team",
    description:
      "Join Codroon's team of innovators and problem solvers. Explore open positions in software development, AI, and design. Apply now and grow with us.",
  },
};

export default function CareersPage() {
  return (
    <div className="w-full bg-[#0F172A]">
      <CareersHeroSection />
      <WhyWorkAtCodroonSection />
      <CurrentOpeningsSection />
      <CareersCTASection />
    </div>
  );
}
