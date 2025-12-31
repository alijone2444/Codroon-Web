import Image from "next/image"

const monitoring = [
  { name: "Sentry", image: "/Images/technologies/monitor-1.png" },
  { name: "New Relic", image: "/Images/technologies/monitor-2.png" },
  { name: "Grafana", image: "/Images/technologies/monitor-3.png" },
  { name: "Datadog", image: "/Images/technologies/monitor-4.png" },
]

export default function MonitoringSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-7 md:mb-8">Monitoring & Analytics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {monitoring.map((tool) => (
            <div
              key={tool.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center"
            >
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-sm sm:text-base font-medium">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
