import Image from "next/image";
import Link from "next/link";

export default function IntegrationsCTASection() {
  return (
    <section className="relative w-full h-[619px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/Brain.jpg"
        alt="Brain Network"
        fill
        priority
        className="object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
      {/* Blue blush overlay */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-[50px] px-[350px] py-[120px]">
        {/* Logo */}
        <Image
          src="/codroon-logo.png"
          alt="Codroon Logo"
          width={201}
          height={41}
          className="mb-4"
        />
        
        {/* Heading */}
        <h2 className="font-barlow font-semibold text-[38px] leading-[100%] tracking-[0%] text-white text-center whitespace-nowrap overflow-hidden text-ellipsis">
          If it has an API, we integrate it.
        </h2>
        
        {/* Description */}
        <p className="font-barlow font-normal text-[18px] leading-[150%] tracking-[-0.6%] text-[#E6E6E6] text-center ">
          From payment gateways to communication tools — we connect your digital ecosystem
        </p>
        
        {/* Button */}
        <Link 
          href="/contact-us"
          className="w-[265px] h-[63px] px-[34px] py-[18px] rounded-[30px] bg-green-600 hover:bg-green-700 text-black font-barlow font-semibold transition-all duration-200 flex items-center justify-center gap-[8px]"
        >
          Contact us today
        </Link>
      </div>
    </section>
  )
}
