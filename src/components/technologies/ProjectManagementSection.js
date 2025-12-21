import Image from "next/image"

const tools = [
  { name: "Jira", subtitle: "Agile project management tool for teams", image: "/Images/technologies/project-1.png" },
  { name: "Trello", subtitle: "Task Management", image: "/Images/technologies/project-2.png" },
  { name: "Notion", subtitle: "Knowledge base & wiki", image: "/Images/technologies/project-notion.png" },
  { name: "Slack", subtitle: "Team Communication", image: "/Images/technologies/project-slack.png" },
  { name: "Harvest", subtitle: "Time Tracking", image: "/Images/technologies/project-management-5.png" },
  { name: "ClickUp", subtitle: "Productive Teams Platform", image: "/Images/technologies/project-clickup.png" },
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
                <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
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
