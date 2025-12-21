const databases = [
  { name: "MongoDB", color: "from-green-500 to-emerald-600", icon: "🍃" },
  { name: "PostgreSQL", color: "from-blue-500 to-blue-600", icon: "🐘" },
  { name: "Oracle DB", color: "from-red-500 to-orange-500", icon: "🔴" },
  { name: "SQL / MySQL", color: "from-blue-400 to-cyan-500", icon: "💾" },
  { name: "Firebase", color: "from-yellow-400 to-orange-500", icon: "🔥" },
  { name: "Airtable", color: "from-red-400 to-yellow-400", icon: "📊" },
]

export default function DatabasesSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-8">Databases</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {databases.map((db) => (
            <div
              key={db.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center"
            >
              <div
                className={`text-4xl mb-3 bg-gradient-to-br ${db.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}
              >
                {db.icon}
              </div>
              <h3 className="text-white text-sm font-medium">{db.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
