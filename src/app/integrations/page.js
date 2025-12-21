import IntegrationsHeroSection from "@/components/Integrations/IntegrationsHeroSection"
import AutomateEverythingSection from "@/components/Integrations/AutomateEverythingSection"
import AIToolsSection from "@/components/Integrations/AIToolsSection"
import WeConnectSection from "@/components/Integrations/WeConnectSection"
import SuperAppIntegrationsSection from "@/components/Integrations/SuperAppIntegrationsSection"
import IntegrationsCTASection from "@/components/Integrations/IntegrationsCTASection"

export default function IntegrationsPage() {
  return (
    <div className="w-full bg-[#0F172A]">
      <IntegrationsHeroSection />
      <AutomateEverythingSection />
      <AIToolsSection />
      <WeConnectSection />
      <SuperAppIntegrationsSection />
      <IntegrationsCTASection />
    </div>
  )
}
