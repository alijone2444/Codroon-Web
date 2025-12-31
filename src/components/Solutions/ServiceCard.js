import Image from 'next/image';

const ServiceCard = ({ iconSrc, iconAlt, text }) => {
  return (
    <div className="w-full sm:w-auto sm:min-w-[250px] md:w-[399px] min-h-[200px] sm:min-h-[250px] md:h-[278px] p-6 sm:p-8 md:p-[50px] flex flex-col items-center justify-center gap-6 sm:gap-7 md:gap-[30px]">
      {/* Icon Container */}
      <div 
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] p-4 sm:p-5 md:p-[24px] rounded-lg sm:rounded-xl md:rounded-[12px] border border-green-500/20 flex items-center justify-center"
        style={{
          background: 'linear-gradient(130.97deg, rgba(82, 176, 105, 0.2) -66.81%, rgba(82, 176, 105, 0) 37.19%)'
        }}
      >
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={40}
          height={40}
          className="object-contain w-6 h-6 sm:w-8 sm:h-8 md:w-[40px] md:h-[40px]"
        />
      </div>
      
      {/* Text */}
      <p className="font-barlow font-medium text-base sm:text-lg md:text-[20px] leading-[140%] sm:leading-[150%] tracking-[-0.6%] text-white text-center">
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
