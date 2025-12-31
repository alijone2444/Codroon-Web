import ServiceCard from './ServiceCard';
import MarginWrapper from '../wrappers/sectionWrapper';
const EngineeringSection = () => {
  // Web Development data
  const webDevCards = [
    {
      icon: "/Images/Icons/web-development-1.png",
      alt: "Front-End Development",
      text: "Front-End Development (HTML, CSS, JavaScript)"
    },
    {
      icon: "/Images/Icons/web-development-2.png",
      alt: "Back-End Development",
      text: "Back-End Development (PHP, Python, Ruby)"
    },
    {
      icon: "/Images/Icons/web-development-3.png",
      alt: "CMS Development",
      text: "Content Management System (CMS) Development (WordPress, Drupal)"
    },
    {
      icon: "/Images/Icons/web-development-4.png",
      alt: "E-Commerce Development",
      text: "E-Commerce Platform Development (Magento, Shopify)"
    }
  ];

  // Mobile App Development data
  const mobileAppCards = [
    {
      icon: "/Images/Icons/mobile-app-1.png",
      alt: "Native App Development",
      text: "Native iOS and Android App Development"
    },
    {
      icon: "/Images/Icons/mobile-app-2.png",
      alt: "Cross-Platform Development",
      text: "Cross-Platform App Development (React Native, Flutter)"
    },
    {
      icon: "/Images/Icons/mobile-app-3.png",
      alt: "App Prototyping",
      text: "App Prototyping and UI/UX Design Integration"
    },
    {
      icon: "/Images/Icons/mobile-app-4.png",
      alt: "App Testing",
      text: "App Testing, Deployment, and Maintenance"
    }
  ];

  // Custom Software Development data
  const customDevCards = [
    {
      icon: "/Images/Icons/custom-development-1.png",
      alt: "Enterprise Software",
      text: "Enterprise Software Development"
    },
    {
      icon: "/Images/Icons/custom-development-2.png",
      alt: "Custom Web Applications",
      text: "Custom Web Application Development"
    },
    {
      icon: "/Images/Icons/custom-development-3.png",
      alt: "API Integration",
      text: "Integration with Third-Party APIs and Systems"
    },
    {
      icon: "/Images/Icons/custom-development-4.png",
      alt: "Legacy Modernization",
      text: "Legacy System Modernization and Migration"
    }
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16">
      <div className="max-w-[1595px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[50px]">
        {/* Main Heading and Description Container */}
       
        <MarginWrapper bottom={50}>
        <div className="w-full h-auto pr-0 sm:pr-4 md:pr-6 lg:pr-[50px] flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] mb-12 sm:mb-14 md:mb-16">
          <h2 className="font-barlow font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[110%] sm:leading-[100%] tracking-[0%] text-[#E6E6E6]">
            Engineering
          </h2>
          <p className="font-barlow font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] text-white">
            Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.
          </p>
          <button className="w-full sm:w-auto sm:max-w-[346px] h-10 sm:h-12 md:h-14 lg:h-[50px] px-4 sm:px-6 md:px-[14px] py-2 sm:py-3 md:py-[12px] rounded-[30px] bg-green-600 hover:bg-green-700 text-white font-barlow font-semibold transition-all duration-200 text-sm sm:text-base md:text-lg">
            Our engineering services include
          </button>
        </div>
        </MarginWrapper>
        {/* Web Development Subsection */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="font-barlow font-medium text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-[110%] sm:leading-[100%] tracking-[0%] text-[#98989A] mb-6 sm:mb-7 md:mb-8">
            Web Development
          </h3>
          <div className="w-full min-h-[250px] sm:min-h-[300px] md:h-[278px] border-t border-b border-gray-700 flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-0">
            {webDevCards.map((card, index) => (
              <ServiceCard
                key={index}
                iconSrc={card.icon}
                iconAlt={card.alt}
                text={card.text}
              />
            ))}
          </div>
        </div>

        {/* Mobile App Development Subsection */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="font-barlow font-medium text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-[110%] sm:leading-[100%] tracking-[0%] text-[#98989A] mb-6 sm:mb-7 md:mb-8">
            Mobile App Development
          </h3>
          <div className="w-full min-h-[250px] sm:min-h-[300px] md:h-[278px] border-t border-b border-gray-700 flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-0">
            {mobileAppCards.map((card, index) => (
              <ServiceCard
                key={index}
                iconSrc={card.icon}
                iconAlt={card.alt}
                text={card.text}
              />
            ))}
          </div>
        </div>

        {/* Custom Software Development Subsection */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h3 className="font-barlow font-medium text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-[110%] sm:leading-[100%] tracking-[0%] text-[#98989A] mb-6 sm:mb-7 md:mb-8">
            Custom Software Development
          </h3>
          <div className="w-full min-h-[250px] sm:min-h-[300px] md:h-[278px] border-t border-b border-gray-700 flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-6 md:gap-0">
            {customDevCards.map((card, index) => (
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

export default EngineeringSection;
