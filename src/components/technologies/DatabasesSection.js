import Image from "next/image"

const databases = [
  { name: "MongoDB", image: "/Images/technologies/db-1.png" },
  { name: "PostgreSQL", image: "/Images/technologies/db-2.png" },
  { name: "Oracle DB", image: "/Images/technologies/db-3.png" },
  { name: "SQL / MySQL", image: "/Images/technologies/db-4.png" },
  { name: "Firebase", image: "/Images/technologies/db-5.png" },
  { name: "Airtable", image: "/Images/technologies/db-6.png" },
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
              <div className="relative w-16 h-16 mb-3 group-hover:scale-110 transition-transform">
                <Image
                  src={db.image}
                  alt={db.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-sm font-medium">{db.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
