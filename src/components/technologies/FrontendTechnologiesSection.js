const technologies = [
  { name: "HTML5", color: "from-orange-500 to-red-500", icon: "📄" },
  { name: "CSS3", color: "from-blue-500 to-blue-600", icon: "🎨" },
  { name: "Tailwind CSS", color: "from-cyan-400 to-blue-500", icon: "💨" },
  { name: "JavaScript", color: "from-yellow-400 to-yellow-500", icon: "JS" },
  { name: "React", color: "from-cyan-400 to-blue-500", icon: "⚛️" },
  { name: "Next.js", color: "from-gray-800 to-gray-900", icon: "▲" },
  { name: "Vue", color: "from-green-400 to-emerald-500", icon: "V" },
  { name: "React Native", color: "from-cyan-400 to-blue-500", icon: "⚛️" },
  { name: "Flutter", color: "from-blue-400 to-cyan-400", icon: "🦋" },
  { name: "Dart", color: "from-cyan-500 to-blue-600", icon: "🎯" },
]

export default function FrontendTechnologiesSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-8">Frontend Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
              <h3 className="text-white text-base font-medium">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
