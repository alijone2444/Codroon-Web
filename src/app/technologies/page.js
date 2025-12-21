import TechStackHeroSection from "@/components/TechStack/TechStackHeroSection"
import FrontendTechnologiesSection from "@/components/TechStack/FrontendTechnologiesSection"
import BackendTechnologiesSection from "@/components/TechStack/BackendTechnologiesSection"
import DatabasesSection from "@/components/TechStack/DatabasesSection"
import InfrastructureSection from "@/components/TechStack/InfrastructureSection"
import ProjectManagementSection from "@/components/TechStack/ProjectManagementSection"
import MonitoringSection from "@/components/TechStack/MonitoringSection"
import TechStackCTASection from "@/components/TechStack/TechStackCTASection"

export default function TechStackPage() {
  return (
    <div className="w-full bg-[#0F172A]">
      <TechStackHeroSection />
      <FrontendTechnologiesSection />
      <BackendTechnologiesSection />
      <DatabasesSection />
      <InfrastructureSection />
      <ProjectManagementSection />
      <MonitoringSection />
      <TechStackCTASection />
    </div>
  )
}
