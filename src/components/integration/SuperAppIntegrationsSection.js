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
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-semibold mb-4">Super App Integrations</h2>
          <p className="text-gray-400 text-lg">One Platform. Unlimited possibilities</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center w-full md:w-[calc(33.333%-1rem)] max-w-[300px]"
            >
              <div className="relative w-20 h-20 mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src={integration.image}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-base font-medium">{integration.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
