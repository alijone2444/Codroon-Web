import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const recentPosts = [
  {
    id: 1,
    title: "How Businesses Can Leverage Data for Smarter Decisions",
    date: "May 17, 2025",
    author: "By",
    image: "/Images/blogs/recent-1.png",
  },
  {
    id: 2,
    title: "IT Industry Key Strategies for Business Growth",
    date: "May 17, 2025",
    author: "By",
    image: "/Images/blogs/recent-2.png",
  },
  {
    id: 3,
    title: "Get The Most Out Op The Creativity",
    date: "May 17, 2025",
    author: "By",
    image: "/Images/blogs/recent-3.png",
  },
]

export default function RecentPostsSection() {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto scroll-fade-up">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-7 md:mb-8 leading-[110%] sm:leading-[100%]">Recent Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all cursor-pointer"
            >
              <div className="relative h-40 sm:h-44 md:h-52 overflow-hidden bg-slate-800/50 flex items-center justify-center">
                {typeof post.image === 'string' ? (
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {post.image}
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-white text-base sm:text-lg font-medium mb-2 sm:mb-2 md:mb-3 group-hover:text-emerald-400 transition-colors leading-[110%] sm:leading-[100%]">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-gray-400 text-xs sm:text-sm">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
