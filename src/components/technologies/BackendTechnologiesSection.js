const technologies = [
  { name: "Node.js", color: "from-green-500 to-green-600", icon: "🟢" },
  { name: "Express.js", color: "from-gray-600 to-gray-700", icon: "⚡" },
  { name: "Python", color: "from-blue-400 to-yellow-400", icon: "🐍" },
  { name: "PHP", color: "from-purple-500 to-indigo-600", icon: "🐘" },
  { name: "Laravel", color: "from-red-500 to-orange-500", icon: "🔥" },
  { name: ".NET Blazor", color: "from-purple-600 to-blue-600", icon: "⚡" },
]

export default function BackendTechnologiesSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-8">Backend Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center"
            >
              <div
                className={`text-4xl mb-3 bg-gradient-to-br ${tech.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}
              >
                {tech.icon}
              </div>
              <h3 className="text-white text-sm font-medium">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
