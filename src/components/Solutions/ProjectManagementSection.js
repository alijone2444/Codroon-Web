import ServiceCard from './ServiceCard';

const ProjectManagementSection = () => {
  // Project Planning data
  const projectPlanningCards = [
    {
      icon: "/Images/Icons/project-planning-1.png",
      alt: "Requirements Gathering",
      text: "Requirements Gathering and Analysis"
    },
    {
      icon: "/Images/Icons/project-planning-2.png",
      alt: "Project Roadmap",
      text: "Project Roadmap and Timeline Development"
    },
    {
      icon: "/Images/Icons/project-planning-3.png",
      alt: "Resource Allocation",
      text: "Resource Allocation and Task Assignment"
    },
    {
      icon: "/Images/Icons/project-planning-4.png",
      alt: "Risk Assessment",
      text: "Risk Assessment and Mitigation Strategies"
    }
  ];

  // Agile Development data
  const agileDevCards = [
    {
      icon: "/Images/Icons/agile-development-1.png",
      alt: "Iterative Development",
      text: "Iterative Development and Sprints"
    },
    {
      icon: "/Images/Icons/agile-development-2.png",
      alt: "Scrum Methodology",
      text: "Scrum or Kanban Methodology Implementation"
    },
    {
      icon: "/Images/Icons/agile-development-3.png",
      alt: "Progress Updates",
      text: "Regular Progress Updates and Demos"
    },
    {
      icon: "/Images/Icons/agile-development-4.png",
      alt: "Continuous Improvement",
      text: "Continuous Improvement and Feedback Incorporation"
    }
  ];

  // Quality Assurance data
  const qualityAssuranceCards = [
    {
      icon: "/Images/Icons/quality-ensurance-1.png",
      alt: "Test Planning",
      text: "Test Planning and Execution"
    },
    {
      icon: "/Images/Icons/quality-ensurance-2.png",
      alt: "Functional Testing",
      text: "Functional and Usability Testing"
    },
    {
      icon: "/Images/Icons/quality-ensurance-3.png",
      alt: "Performance Testing",
      text: "Performance and Security Testing"
    },
    {
      icon: "/Images/Icons/quality-ensurance-4.png",
      alt: "Bug Tracking",
      text: "Bug Tracking and Issue Resolution"
    }
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16">
      <div className="max-w-[1595px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[50px]">
        {/* Main Heading and Description Container */}
        <div className="w-full h-auto pr-0 sm:pr-4 md:pr-6 lg:pr-[50px] flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] mb-12 sm:mb-14 md:mb-16">
          <h2 className="font-barlow font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[110%] sm:leading-[100%] tracking-[0%] text-white">
            Project Management
          </h2>
          <p className="font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] text-[#E6E6E6]">
            Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.
          </p>
          <button className="w-full sm:w-auto sm:max-w-[346px] h-10 sm:h-12 md:h-14 lg:h-[50px] px-4 sm:px-6 md:px-[14px] py-2 sm:py-3 md:py-[12px] rounded-[30px] bg-green-600 hover:bg-green-700 text-white font-barlow font-semibold transition-all duration-200 text-sm sm:text-base md:text-lg">
            Our project management services include
          </button>
        </div>

        {/* Project Planning Subsection */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="font-barlow font-medium text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-[110%] sm:leading-[100%] tracking-[0%] text-[#98989A] mb-6 sm:mb-7 md:mb-8">
            Project Planning and Scoping
          </h3>
          <div className="w-full min-h-[250px] sm:min-h-[300px] md:h-[278px] border-t border-b border-gray-700 flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-0">
            {projectPlanningCards.map((card, index) => (
              <ServiceCard
                key={index}
                iconSrc={card.icon}
                iconAlt={card.alt}
                text={card.text}
              />
            ))}
          </div>
        </div>

        {/* Agile Development Subsection */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="font-barlow font-medium text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-[110%] sm:leading-[100%] tracking-[0%] text-[#98989A] mb-6 sm:mb-7 md:mb-8">
            Agile Development
          </h3>
          <div className="w-full min-h-[250px] sm:min-h-[300px] md:h-[278px] border-t border-b border-gray-700 flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-0">
            {agileDevCards.map((card, index) => (
              <ServiceCard
                key={index}
                iconSrc={card.icon}
                iconAlt={card.alt}
                text={card.text}
              />
            ))}
          </div>
        </div>

        {/* Quality Assurance Subsection */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="font-barlow font-medium text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-[110%] sm:leading-[100%] tracking-[0%] text-[#98989A] mb-6 sm:mb-7 md:mb-8">
            Quality Assurance and Testing
          </h3>
          <div className="w-full min-h-[250px] sm:min-h-[300px] md:h-[278px] border-t border-b border-gray-700 flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-0">
            {qualityAssuranceCards.map((card, index) => (
              <ServiceCard
                key={index}
                iconSrc={card.icon}
                iconAlt={card.alt}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagementSection;
