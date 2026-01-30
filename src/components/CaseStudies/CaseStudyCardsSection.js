import Image from "next/image";
import MarginWrapper from "@/components/wrappers/sectionWrapper";

const caseStudies = [
  {
    category: "AI-Powered Valuation and Dealroom Platform",
    projectName: "Acquix AI",
    website: "http://56.228.81.212/",
    description:
      "Acquix AI is an AI-powered valuation and secure dealroom platform built for modern M&A, investment, and corporate finance workflows. It enables teams to generate data-driven valuations, assess opportunities with AI scoring models, and collaborate securely within a confidential deal environment. Designed for enterprise-grade use, Acquix AI combines intelligent analysis, role-based access control, and streamlined deal management to reduce friction, improve decision accuracy, and accelerate high-stakes transactions.",
  },
  {
    category: "AI-Powered Audio Fingerprint Remover",
    projectName: "DataVaultix",
    website: "https://ai-audio-nine.vercel.app/",
    description:
      "DataVaultix is an AI-powered audio fingerprint remover that gives users full control over privacy and quality. Clients can pay per audio minute and choose from three plans: Standard Removal, Professional Shield, and Ultimate Stealth, depending on their security and cleaning needs. All processing happens client-side — no storage, tracking, or data collection — and advanced AI algorithms ensure lightning-fast, high-quality results while removing all fingerprints and metadata.",
  },
  {
    category: "Cloud Accounting Platform",
    projectName: "Akaunting Cloud",
    website: "https://akaunting.com/",
    description:
      "Akaunting Cloud is a modern, open-source cloud accounting platform built for small businesses and freelancers. It enables users to manage invoices, expenses, payments, and financial reports from a single, intuitive dashboard. Designed for clarity and efficiency, Akaunting simplifies complex financial data with clean UI, real-time insights, and responsive layouts—making everyday accounting tasks faster and more accessible. Its flexible cloud architecture supports scalable growth while maintaining performance, security, and ease of use.",
  },
  {
    category: "AI-Powered Lead Generation Platform",
    projectName: "Quicklead AI",
    website: "http://ec2-18-217-51-53.us-east-2.compute.amazonaws.com/",
    description:
      "QuickLead AI is an AI-powered lead generation platform built for non-technical users. It includes B2B, B2C, and Admin dashboards with a very simple and clean UI. Users just enter a keyword and state/location, and the system instantly finds relevant leads. All results can be exported in CSV format. We handled the full development, including Requirement Gathering, UI/UX design, Frontend development, AI integration, dashboards, backend APIs, and AWS deployment.",
  },
  {
    category: "Educational Platform for University Applications",
    projectName: "Study Ninjaa",
    website: "studyninjaa.com",
    description:
      "StudyNINJAA is an innovative online platform that connects students with expert tutors to support their university application journey—whether it's for undergraduate programs, postgraduate admissions, or specialized fields. Tailored for students aiming for top institutions, StudyNINJAA offers personalized essay reviews, mock interviews, and one-on-one guidance to help applicants stand out.",
  },
  {
    category: "AI-Powered RPG Storytelling Platform",
    projectName: "Decipher Engine",
    website: "https://decipher-beta.vercel.app/",
    description:
      "Developed a self-hosted AI-powered RPG storytelling platform where AI acts as a game master. Implemented multi-model text generation, dynamic story continuation, regeneration, and manual editing. Built a card-based system to manage characters, creatures, world elements, and chapters for long-term story consistency. Designed and delivered a full UI/UX workflow with a scalable frontend and modular backend architecture.",
  },
  {
    category: "Fan-Focused Web Platform",
    projectName: "Swift Lore",
    website: "https://www.swift-lore.com/",
    description:
      "Swift Lore is a modern, fan-focused web platform built using React, Tailwind CSS, and Firebase, designed to bring Taylor Swift's universe to life with a sleek 2025-ready design. The platform features interactive timelines, \"On This Day\" Swift events, and API-driven content to keep fans engaged. From exploring historical milestones to suggesting new entries and even donating to fan causes, Swift Lore blends fandom with functionality through a smooth, responsive UI and real-time database integration.",
  },
  {
    category: "Cross-Platform Mobile App for Mental Health",
    projectName: "Healvision",
    website: "https://github.com/farwaa-sr/HealVision",
    description:
      "HealVision is a cross-platform mobile app developed to support individuals on their journey to recovery from Substance Use Disorders (SUDs). The app combines modern healthcare UX with AI-driven features to deliver personalized mental health support and therapy facilitation. Key Features: AI-Powered Chatbot, Interactive Quizzes for self-assessment, Appointment Scheduling, Separate Dashboards for therapists and patients, Health Tracking with mood journaling, Emotional Analysis on Messages, auto-generating therapist reports, Secure Firebase Integration for real-time data sync and privacy.",
  },
  {
    category: "All-in-One Order Management App",
    projectName: "Profound Aminos Mobile App",
    website: "https://github.com/Codroon/Profound-Aminos-App/tree/master",
    description:
      "We developed a custom all-in-one order management app that centralizes multiple platforms into one seamless app. Key Features: WooCommerce – Real-time order management and updates. WordPress – Smooth sync with the client's website. Gorgias – Automatic ticket updates for better customer support handling. ReachShip – Live shipment tracking and notifications. Push Notifications – Instant alerts for orders, support tickets, and deliveries. The client no longer had to switch between multiple platforms. With this app, they could manage orders, support, and shipments in one dashboard.",
  },
  {
    category: "Marketing Agency Website",
    projectName: "Brickly",
    website: "https://brickly.agency/",
    description:
      "Brickly is a bold, energetic marketing agency website crafted with a 2025-ready design ethos. Developed using WordPress and Elementor, and designed in Figma, the site features a highly polished UI/UX aimed at converting visitors into leads. This project focuses on delivering a modern web presence for digital marketing professionals. From a high-converting \"Book a Strategy Call\" CTA to clear pricing plans and an engaging services overview, every element is geared toward action.",
  },
];

export default function CaseStudyCardsSection() {
  // Function to get image path based on project name
  const getImagePath = (projectName) => {
    const imageMap = {
      "Study Ninjaa": "/Case_Studies/studyninjaa.png",
      "Quicklead AI": "/Case_Studies/quicklead-a.png",
      "Swift Lore": "/Case_Studies/swiftlore.png",
      "Brickly": "/Case_Studies/brickly (2).png",
      "Healvision": "/Case_Studies/healvision.png",
      "Profound Aminos Mobile App": "/Case_Studies/profoundaminos.png",
      "Decipher Engine": "/Case_Studies/Decipher.png",
      "DataVaultix": "/Case_Studies/DataVaultix.png",
      "Akaunting Cloud": "/Case_Studies/Akaunting.png",
      "Acquix AI": "/Case_Studies/Acquix.png"
    };
    return imageMap[projectName] || "/Images/laptop.jpg";
  };

  return (
    <MarginWrapper top={48} bottom={48}>
      <div id="case-studies-grid" className="w-full max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[50px] scroll-mt-24">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-[50px] pb-12 sm:pb-16 md:pb-20 lg:pb-[100px]">
          {caseStudies.map((study, index) => {
            // Ensure URL has protocol
            const websiteUrl = study.website.startsWith('http') ? study.website : `https://${study.website}`;
            const imagePath = getImagePath(study.projectName);

            return (
              <a
                key={index}
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0F172A] rounded-[12px] w-full h-auto overflow-hidden flex flex-col cursor-pointer hover:bg-[#14243B] transition-colors duration-300 block"
              >
                {/* Category Header */}
                <div className="border-y border-white/10 py-6 sm:py-7 md:py-8 lg:py-[30px] px-4 sm:px-6">
                  <h3 className="font-barlow font-medium text-sm sm:text-base md:text-lg lg:text-[20px] leading-[140%] sm:leading-[150%] text-[#98989A]">
                    {study.category}
                  </h3>
                </div>

                {/* Image */}
                <div className="flex justify-center py-4 sm:py-5 md:py-[20px] px-4 sm:px-6">
                  <Image
                    src={imagePath}
                    alt={`${study.projectName} Preview`}
                    width={698}
                    height={423}
                    className="rounded-[12px] object-cover w-full h-auto"
                  />
                </div>

                {/* Project Info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-5 md:mb-[20px] px-4 sm:px-6">
                  <div className="flex-1">
                    <h4 className="font-barlow font-medium text-lg sm:text-xl md:text-2xl lg:text-[24px] text-white leading-[140%] sm:leading-[150%] tracking-tight">
                      {study.projectName}
                    </h4>
                    <p className="text-[#98989A] text-xs sm:text-sm md:text-base lg:text-[16px] font-barlow mt-2 sm:mt-[10px] break-all">
                      {study.website}
                    </p>
                  </div>

                  <div className="bg-[#14243B] rounded-[8px] w-10 h-10 sm:w-12 sm:h-12 md:w-[54px] md:h-[54px] flex items-center justify-center p-2 sm:p-[10px] flex-shrink-0">
                    <Image
                      src="/Images/Icons/top-right-arrow.png"
                      alt="External Link"
                      width={28}
                      height={28}
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="font-inter text-sm sm:text-base md:text-lg lg:text-[18px] text-[#E6E6E6] leading-[140%] sm:leading-[150%]">
                    {study.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </MarginWrapper>
  );
}
