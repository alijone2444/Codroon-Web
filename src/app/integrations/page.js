"use client";
import IntegrationsHeroSection from "@/components/integration/IntegrationsHeroSection"
import AutomateEverythingSection from "@/components/integration/AutomateEverythingSection"
import AIToolsSection from "@/components/integration/AIToolsSection"
import WeConnectSection from "@/components/integration/WeConnectSection"
import SuperAppIntegrationsSection from "@/components/integration/SuperAppIntegrationsSection"
import IntegrationsCTASection from "@/components/integration/IntegrationsCTASection"
import HorizontalMarginWrapper from "@/components/wrappers/horizontalmarginWrapper"

export default function IntegrationsPage() {
  return (
    <div className="w-full bg-[#0F172A]">
      <IntegrationsHeroSection />
      <HorizontalMarginWrapper left={80} right={80}>
        <AutomateEverythingSection />
        <AIToolsSection />
        <WeConnectSection />
        <SuperAppIntegrationsSection />
      </HorizontalMarginWrapper>
      <IntegrationsCTASection />
    </div>
  )
}
