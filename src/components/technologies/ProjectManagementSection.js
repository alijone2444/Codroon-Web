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
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-7 md:mb-8">Project Management & Productivity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-emerald-500/50 transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white text-base sm:text-lg font-medium mb-1">{tool.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{tool.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
