import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
  {/* Background GIF */}
      {/* <Image
        src="/images/hero-banner.gif"
        alt="Hero Banner"
        fill
        priority
        className="object-cover opacity-25"
      /> */}
  <Image
          src="/hero-banner.gif"
          alt="Hero Banner"
          fill
          className="object-cover opacity-25"
        />
      {/* Blue blush overlay */}
      <div className="absolute inset-0 bg-[#0F172A] opacity-[0.23]"></div>



      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-[686px] gap-[50px] animate-fade-slide">
      <h1
  className="mx-auto text-center font-heading font-semibold text-[68px] leading-[100%] tracking-[0px]
             text-transparent bg-clip-text 
             bg-[linear-gradient(to_right,#00E6A8,#00AEEF,#0070F3,#00AEEF,#00E6A8)]
             bg-[length:200%_auto] animate-gradient 
             max-w-[90vw] lg:max-w-[1200px] font-barlow "
>
  Where Code Becomes Conscious
</h1>


<p
  className="
    font-montserrat mt-6 mx-auto text-center text-white font-body font-normal text-[32px]  leading-[100%] tracking-[0px] max-w-[90vw] lg:max-w-[1000px]
    
  "
>
  Turning code into products that wow users and win markets!
</p>


<div className="mt-10 flex justify-center gap-6">
  {/* View Solutions Button */}
  <Link
  href="#"
  className="
    relative cursor-pointer text-[#4368B1] border border-[#4368B1]
    px-6 py-3 rounded-full font-montserrat font-semibold text-[18px] leading-[100%]
    transition-all duration-500 ease-out
    hover:bg-[#4368B1] hover:text-white hover:shadow-[0_0_20px_3px_rgba(67,104,177,0.6)]
    hover:scale-[1.03] active:scale-[0.98]
  "
>
  <span className="relative z-10">View Solutions</span>

  {/* subtle animated glow layer */}
  <span
    className="absolute inset-0 rounded-full opacity-40 blur-md bg-[#4368B1]
               transition-all duration-700 group-hover:opacity-70 group-hover:blur-lg"
  ></span>
</Link>


  {/* Get Started Button */}
  <Link
  href="#"
  className="
    relative inline-flex items-center justify-center cursor-pointer
    bg-[#4368B1] text-white rounded-full border border-transparent
    px-6 py-3 font-montserrat font-semibold text-[18px] leading-[100%]
    transition-all duration-500 ease-out
    hover:bg-[#33558F] hover:shadow-[0_0_25px_4px_rgba(67,104,177,0.6)]
    hover:scale-[1.03] active:scale-[0.98]
  "
>
  <span className="relative z-10">Get Started</span>

  {/* glowing aura */}
  <span
    className="absolute inset-0 rounded-full bg-[#4368B1] opacity-40 blur-md
               transition-all duration-700 hover:opacity-70 hover:blur-lg"
  ></span>
</Link>

</div>

      </div>
    </section>
  );
}
