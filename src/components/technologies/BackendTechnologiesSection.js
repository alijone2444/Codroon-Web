import Image from "next/image"

const technologies = [
  { name: "Node.js", image: "/Images/technologies/backend-1.png" },
  { name: "Express.js", image: "/Images/technologies/backend-2.png" },
  { name: "Python", image: "/Images/technologies/backend-3.png" },
  { name: "PHP", image: "/Images/technologies/backend-4.png" },
  { name: "Laravel", image: "/Images/technologies/backend-5.png" },
  { name: ".NET Blazor", image: "/Images/technologies/backend-6.png" },
]

export default function BackendTechnologiesSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-7 md:mb-8">Backend Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center justify-center text-center"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-xs sm:text-sm font-medium">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
