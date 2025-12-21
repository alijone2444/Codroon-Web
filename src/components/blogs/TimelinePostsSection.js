import Image from "next/image"

const timelinePosts = [
  {
    date: "OCT 26, 2024",
    title: "Quantum Computing: A Practical Guide for Business Leaders",
    description: "Understanding the potential impact and preparing your organization for the quantum revolution.",
    image: "/quantum-computing-chip.png",
  },
  {
    date: "OCT 26, 2024",
    title: "Quantum Computing: A Practical Guide for Business Leaders",
    description: "Understanding the potential impact and preparing your organization for the quantum revolution.",
    image: "/quantum-processor-technology.jpg",
  },
]

export default function TimelinePostsSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 to-transparent"></div>

          {timelinePosts.map((post, index) => (
            <div key={index} className="relative flex gap-8 mb-12 last:mb-0">
              {/* Date circle */}
              <div className="flex-shrink-0 w-32">
                <div className="bg-emerald-500 text-slate-900 rounded-full w-24 h-24 flex items-center justify-center font-semibold text-sm text-center z-10 relative">
                  {post.date}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex items-center gap-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors cursor-pointer group">
                <div className="relative w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-medium mb-2 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
