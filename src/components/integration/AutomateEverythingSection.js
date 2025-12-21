const automationTools = [
  { name: "Make.com", icon: "🔄" },
  { name: "Zapier", icon: "⚡" },
  { name: "n8n", icon: "🔗" },
]

export default function AutomateEverythingSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-semibold mb-4">Automate Everything</h2>
          <p className="text-gray-400 text-lg">
            Seamlessly connect with top automation platforms to streamline operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {automationTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{tool.icon}</div>
              <h3 className="text-white text-2xl font-medium">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
