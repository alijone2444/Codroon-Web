const integrations = [
  { name: "Mini-apps", icon: "📱" },
  { name: "Service widgets", icon: "🧩" },
  { name: "Micro-services", icon: "⚙️" },
  { name: "Multi-vendor dashboards", icon: "📊" },
  { name: "Unified access layer", icon: "🔐" },
]

export default function SuperAppIntegrationsSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-semibold mb-4">Super App Integrations</h2>
          <p className="text-gray-400 text-lg">One Platform. Unlimited possibilities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{integration.icon}</div>
              <h3 className="text-white text-base font-medium">{integration.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
