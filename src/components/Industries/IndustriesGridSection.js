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
    <MarginWrapper top={0} bottom={96}>
      <div className="w-full max-w-[1596px] mx-auto px-4">
        {/* Grid Container with vertical divider */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 border-t border-[#52B069]">
          {/* Vertical green divider - only shows on lg screens and above */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#52B069] via-[#52B069] to-[#52B069] -translate-x-1/2"></div>
          
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`
                flex flex-col gap-8 p-4 md:p-12 relative
                ${index % 2 === 0 
                  ? 'lg:border-r lg:border-[#52B069]' // Even items on left column get right border
                  : '' // Odd items on right column get left border
                }
               `}
            >
              {/* Icon and Title Row */}
              <div className="flex items-center gap-5">
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center w-[88px] h-[88px] rounded-[10px] border border-[#2E2E2E]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(67, 104, 177, 0.1), rgba(67, 104, 177, 0.1)), linear-gradient(229.29deg, rgba(6, 214, 160, 0.2) -68.25%, rgba(6, 214, 160, 0) 32.16%)",
                  }}
                >
                  <Image
                    src={`/Images/Icons/${industry.icon}.png`}
                    alt={industry.title}
                    width={40}
                    height={40}
                  />
                </div>

                {/* Title */}
                <h3 className="font-barlow font-medium text-white text-[22px] md:text-[26px] leading-[150%]">
                  {industry.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-barlow font-normal text-[#E6E6E6] text-[18px] md:text-[20px] leading-[150%]">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MarginWrapper>
  );
}