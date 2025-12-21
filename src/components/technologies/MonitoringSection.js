const monitoring = [
  { name: "Sentry", icon: "🔍" },
  { name: "New Relic", icon: "📊" },
  { name: "Grafana", icon: "📈" },
  { name: "Datadog", icon: "🐕" },
]

export default function MonitoringSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-8">Monitoring & Analytics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {monitoring.map((tool) => (
            <div
              key={tool.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{tool.icon}</div>
              <h3 className="text-white text-base font-medium">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
