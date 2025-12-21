"use client";
import TechStackHeroSection from "@/components/technologies/TechStackHeroSection"
import FrontendTechnologiesSection from "@/components/technologies/FrontendTechnologiesSection"
import BackendTechnologiesSection from "@/components/technologies/BackendTechnologiesSection"
import DatabasesSection from "@/components/technologies/DatabasesSection"
import InfrastructureSection from "@/components/technologies/InfrastructureSection"
import ProjectManagementSection from "@/components/technologies/ProjectManagementSection"
import MonitoringSection from "@/components/technologies/MonitoringSection"
import TechStackCTASection from "@/components/technologies/TechStackCTASection"
import HorizontalMarginWrapper from "@/components/wrappers/horizontalmarginWrapper"

export default function TechStackPage() {
  return (
    <div className="w-full bg-[#0F172A]">
      <TechStackHeroSection />
      <HorizontalMarginWrapper left={80} right={80}>
        <FrontendTechnologiesSection />
        <BackendTechnologiesSection />
        <DatabasesSection />
        <InfrastructureSection />
        <ProjectManagementSection />
        <MonitoringSection />
        <TechStackCTASection />
      </HorizontalMarginWrapper>
    </div>
  )
}
