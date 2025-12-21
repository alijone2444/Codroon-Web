import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const recentPosts = [
  {
    id: 1,
    title: "How Businesses Can Leverage Data for Smarter Decisions",
    date: "May 17, 2025",
    author: "By",
    image: "/business-data-dashboard.png",
  },
  {
    id: 2,
    title: "IT Industry Key Strategies for Business Growth",
    date: "May 17, 2025",
    author: "By",
    image: "/it-professionals-working.png",
  },
  {
    id: 3,
    title: "Get The Most Out Op The Creativity",
    date: "May 17, 2025",
    author: "By",
    image: "/creative-team-brainstorming.jpg",
  },
]

export default function RecentPostsSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-8">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-lg font-medium mb-3 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
