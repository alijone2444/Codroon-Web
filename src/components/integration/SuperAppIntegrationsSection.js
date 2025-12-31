import Image from "next/image"

const integrations = [
  { name: "Mini-apps", image: "/Images/integrations/super-1.png" },
  { name: "Service widgets", image: "/Images/integrations/super-2.png" },
  { name: "Micro-services", image: "/Images/integrations/super-3.png" },
  { name: "Multi-vendor dashboards", image: "/Images/integrations/super-4.png" },
  { name: "Unified access layer", image: "/Images/integrations/super-5.png" },
]

export default function SuperAppIntegrationsSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 leading-[110%] sm:leading-[100%]">Super App Integrations</h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-[140%] sm:leading-[150%]">One Platform. Unlimited possibilities</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-7 md:p-8 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] max-w-[300px]"
            >
              <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 mb-3 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src={integration.image}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-sm sm:text-base font-medium">{integration.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
