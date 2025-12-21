const tools = [
  { name: "Jira", subtitle: "Agile project management tool for teams", icon: "📋" },
  { name: "Trello", subtitle: "Task Management", icon: "📝" },
  { name: "Notion", subtitle: "Knowledge base & wiki", icon: "📖" },
  { name: "Slack", subtitle: "Team Communication", icon: "💬" },
  { name: "Harvest", subtitle: "Time Tracking", icon: "⏱️" },
  { name: "ClickUp", subtitle: "Productive Teams Platform", icon: "✅" },
]

export default function ProjectManagementSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-8">Project Management & Productivity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl group-hover:scale-110 transition-transform">{tool.icon}</div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-1">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
