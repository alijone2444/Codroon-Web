const aiTools = [
  { name: "OpenAI GPT models", subtitle: "Powerful AI capabilities from OpenAI", icon: "🤖" },
  { name: "Anthropic Claude", subtitle: "Advanced AI for reasoning", icon: "💡" },
  { name: "Llama", subtitle: "Open Source intelligence", icon: "🦙" },
  { name: "Gemini", subtitle: "Google Generative AI Reasoning", icon: "♊" },
  { name: "Custom agent infrastructure", subtitle: "Tailored for Your Org", icon: "⚙️" },
  { name: "Browser automation agents", subtitle: "Web automation bots", icon: "🌐" },
  { name: "Email assistant agents", subtitle: "Email flow automation", icon: "✉️" },
  { name: "CRM agents", subtitle: "Sales force automation", icon: "📊" },
]

export default function AIToolsSection() {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-semibold mb-4">AI That Works with Your Tools</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{tool.icon}</div>
              <h3 className="text-white text-base font-medium mb-2">{tool.name}</h3>
              <p className="text-gray-400 text-sm">{tool.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
