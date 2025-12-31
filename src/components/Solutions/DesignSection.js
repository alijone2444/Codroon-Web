import ServiceCard from './ServiceCard';
import MarginWrapper from '../wrappers/sectionWrapper';
const DesignSection = () => {
  // UX Design data
  const uxDesignCards = [
    {
      icon: "/Images/Icons/user-experience1.png",
      alt: "User Research",
      text: "User Research and Persona Development"
    },
    {
      icon: "/Images/Icons/user-experience2.png",
      alt: "Information Architecture",
      text: "Information Architecture and Wireframing"
    },
    {
      icon: "/Images/Icons/user-experience3.png",
      alt: "Interactive Prototyping",
      text: "Interactive Prototyping and User Testing"
    },
    {
      icon: "/Images/Icons/user-experience4.png",
      alt: "UI Design",
      text: "UI Design and Visual Branding"
    }
  ];

  // UI Design data
  const uiDesignCards = [
    {
      icon: "/Images/Icons/user-interface-1.png",
      alt: "Interface Design",
      text: "Intuitive and Visually Appealing Interface Design"
    },
    {
      icon: "/Images/Icons/user-interface-2.png",
      alt: "Custom Iconography",
      text: "Custom Iconography and Illustration"
    },
    {
      icon: "/Images/Icons/user-interface-3.png",
      alt: "Typography",
      text: "Typography and Color Palette Selection"
    },
    {
      icon: "/Images/Icons/user-interface-4.png",
      alt: "Responsive Design",
      text: "Responsive Design for Various Devices"
    }
  ];

  // Branding data
  const brandingCards = [
    {
      icon: "/Images/Icons/brading-identity-1.png",
      alt: "Logo Design",
      text: "Logo Design and Visual Identity Development"
    },
    {
      icon: "/Images/Icons/brading-identity-2.png",
      alt: "Brand Strategy",
      text: "Brand Strategy and Positioning"
    },
    {
      icon: "/Images/Icons/brading-identity-3.png",
      alt: "Brand Guidelines",
      text: "Brand Guidelines and Style Guides"
    },
    {
      icon: "/Images/Icons/brading-identity-4.png",
      alt: "Marketing Collateral",
      text: "Marketing Collateral Design (Brochures, Business Cards, etc.)"
    }
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 my-8 sm:my-12 md:my-16">
      <div className="max-w-[1596px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[50px]">
        {/* Main Heading */}
        <MarginWrapper bottom={50}>
        <h2 className="font-barlow font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[110%] sm:leading-[100%] tracking-[0%] text-white mb-4 sm:mb-5 md:mb-6">
          Design
        </h2>
        
        {/* Description */}
        <p className="font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] text-[#E6E6E6] mb-6 sm:mb-7 md:mb-8">
          At Codroon, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.
        </p>
        <button className="w-full sm:w-auto sm:max-w-[346px] h-10 sm:h-12 md:h-14 lg:h-[50px] px-4 sm:px-6 md:px-[14px] py-2 sm:py-3 md:py-[12px] rounded-[30px] bg-[#52B069] hover:bg-green-700 text-white font-barlow font-semibold transition-all duration-200 text-sm sm:text-base md:text-lg">
        Our design services include:
          </button>
          </MarginWrapper>
        {/* UX Design Subsection */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="font-barlow font-medium text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-[110%] sm:leading-[100%] tracking-[0%] text-[#98989A] mb-6 sm:mb-7 md:mb-8">
            User Experience (UX) Design
          </h3>
          <div className="w-full min-h-[250px] sm:min-h-[300px] md:h-[278px] border-t border-b border-gray-700 flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-0">
            {uxDesignCards.map((card, index) => (
              <ServiceCard
                key={index}
                iconSrc={card.icon}
                iconAlt={card.alt}
                text={card.text}
              />
            ))}
          </div>
        </div>

        {/* UI Design Subsection */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="font-barlow font-medium text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-[110%] sm:leading-[100%] tracking-[0%] text-[#98989A] mb-6 sm:mb-7 md:mb-8">
            User Interface (UI) Design
          </h3>
          <div className="w-full min-h-[250px] sm:min-h-[300px] md:h-[278px] border-t border-b border-gray-700 flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-0">
            {uiDesignCards.map((card, index) => (
              <ServiceCard
                key={index}
                iconSrc={card.icon}
                iconAlt={card.alt}
                text={card.text}
              />
            ))}
          </div>
        </div>

        {/* Branding Subsection */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="font-barlow font-medium text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-[110%] sm:leading-[100%] tracking-[0%] text-[#98989A] mb-6 sm:mb-7 md:mb-8">
            Branding and Identity
          </h3>
          <div className="w-full min-h-[250px] sm:min-h-[300px] md:h-[278px] border-t border-b border-gray-700 flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-0">
            {brandingCards.map((card, index) => (
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

export default DesignSection;
