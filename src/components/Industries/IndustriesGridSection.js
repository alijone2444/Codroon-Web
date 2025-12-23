import Image from "next/image";
import MarginWrapper from "@/components/wrappers/sectionWrapper";

const industries = [
  {
    icon: "industry-item-1",
    title: "Travel & Hospitality",
    description:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
  },
  {
    icon: "industry-item-2",
    title: "Public Sector",
    description:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
  },
  {
    icon: "industry-item-3",
    title: "Retail & CPG",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    icon: "industry-item-4",
    title: "Oil, Gas & Energy",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
  },
  {
    icon: "industry-item-5",
    title: "Startups",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    icon: "industry-item-6",
    title: "E-commerce",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
  },
  {
    icon: "industry-item-7",
    title: "Banking & Fintech",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    icon: "industry-item-8",
    title: "Gaming",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
  },
];

export default function IndustriesGridSection() {
  return (
    <MarginWrapper top={{ base: 0, md: 0, lg: 0 }} bottom={{ base: 12, md: 16, lg: 24 }}>
      <div className="w-full max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Grid Container with vertical divider */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 border-t border-[#52B069]">
          {/* Vertical green divider - only shows on lg screens and above */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#52B069] via-[#52B069] to-[#52B069] -translate-x-1/2"></div>
          
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`
                flex flex-col gap-6 sm:gap-7 md:gap-8 p-6 sm:p-8 md:p-10 lg:p-12 relative
                ${index % 2 === 0 
                  ? 'lg:border-r lg:border-[#52B069]' // Even items on left column get right border
                  : '' // Odd items on right column get left border
                }
                ${index < industries.length - 2 ? 'border-b border-[#52B069]' : ''}
                ${index === industries.length - 2 ? 'border-b border-[#52B069] lg:border-b-0' : ''}
              `}
            >
              {/* Icon and Title Row */}
              <div className="flex items-center gap-4 sm:gap-5">
                {/* Icon Container - Responsive */}
                <div
                  className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[88px] lg:h-[88px] rounded-lg sm:rounded-[8px] md:rounded-[10px] border border-[#2E2E2E]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(67, 104, 177, 0.1), rgba(67, 104, 177, 0.1)), linear-gradient(229.29deg, rgba(6, 214, 160, 0.2) -68.25%, rgba(6, 214, 160, 0) 32.16%)",
                  }}
                >
                  <Image
                    src={`/Images/Icons/${industry.icon}.png`}
                    alt={industry.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px]"
                  />
                </div>

                {/* Title - Responsive */}
                <h3 className="font-barlow font-medium text-white text-lg sm:text-xl md:text-[22px] lg:text-[26px] leading-[140%] sm:leading-[150%]">
                  {industry.title}
                </h3>
              </div>

              {/* Description - Responsive */}
              <p className="font-barlow font-normal text-[#E6E6E6] text-sm sm:text-base md:text-[18px] lg:text-[20px] leading-[140%] sm:leading-[150%]">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MarginWrapper>
  );
}