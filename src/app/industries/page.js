import IndustriesHeroSection from '@/components/Industries/IndustriesHeroSection';
import IndustriesMainSection from '@/components/Industries/IndustriesMainSection';
import IndustriesGridSection from '@/components/Industries/IndustriesGridSection';
import IndustriesCTASection from '@/components/Industries/IndustriesCTASection';
import HorizontalMarginWrapper from '@/components/wrappers/horizontalmarginWrapper';

export const metadata = {
  title: "Software Solutions by Industry | Codroon",
  description:
    "Codroon delivers tailored software solutions across healthcare, fintech, logistics, and more. Discover how we empower your industry. Contact us now.",
  openGraph: {
    title: "Software Solutions by Industry | Codroon",
    description:
      "Codroon delivers tailored software solutions across healthcare, fintech, logistics, and more. Discover how we empower your industry. Contact us now.",
  },
};
export default function IndustriesPage() {
  return (
    <div className="w-full bg-[#0F172A]">
      <IndustriesHeroSection />
      <HorizontalMarginWrapper left={50} right={50}>
        <IndustriesMainSection />
        <IndustriesGridSection />
      </HorizontalMarginWrapper>
      <IndustriesCTASection />
    </div>
  );
}
