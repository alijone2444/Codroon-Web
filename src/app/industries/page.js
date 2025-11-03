import IndustriesHeroSection from '@/components/Industries/IndustriesHeroSection';
import IndustriesMainSection from '@/components/Industries/IndustriesMainSection';
import IndustriesGridSection from '@/components/Industries/IndustriesGridSection';
import IndustriesCTASection from '@/components/Industries/IndustriesCTASection';
import HorizontalMarginWrapper from '@/components/wrappers/horizontalmarginWrapper';
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
