import Image from "next/image"

const technologies = [
  { name: "HTML5", image: "/Images/technologies/frontend-1.png" },
  { name: "CSS3", image: "/Images/technologies/frontend-2.png" },
  { name: "Tailwind CSS", image: "/Images/technologies/frontend-3.png" },
  { name: "JavaScript", image: "/Images/technologies/frontend-4.png" },
  { name: "React", image: "/Images/technologies/react-js.png" },
  { name: "Next.js", image: "/Images/technologies/frontend-5.png" },
  { name: "Vue", image: "/Images/technologies/frontend-6.png" },
  { name: "React Native", image: "/Images/technologies/frontend-7.png" },
  { name: "Flutter", image: "/Images/technologies/frontend-9.png" },
  { name: "Dart", image: "/Images/technologies/frontend-10.png" },
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
              <div className="relative w-16 h-16 mb-3 group-hover:scale-110 transition-transform">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-base font-medium">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
