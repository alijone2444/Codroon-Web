import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const recentPosts = [
  {
    id: 1,
    title: "How Businesses Can Leverage Data for Smarter Decisions",
    date: "May 17, 2025",
    author: "By",
    image: "/Images/blogs/recent-1.png",
    category: "AI & Automation",
    slug: "data-driven-decisions",
  },
  {
    id: 2,
    title: "IT Industry Key Strategies for Business Growth",
    date: "May 17, 2025",
    author: "By",
    image: "/Images/blogs/recent-2.png",
    category: "Engineering",
    slug: "it-strategies-growth",
  },
  {
    id: 3,
    title: "Get The Most Out Op The Creativity",
    date: "May 17, 2025",
    author: "By",
    image: "/Images/blogs/recent-3.png",
    category: "Product Design",
    slug: "creativity-tips",
  },
  {
    id: 4,
    title: "Building Scalable Web Applications with Modern Frameworks",
    date: "May 15, 2025",
    author: "By",
    image: "/Images/blogs/recent-1.png",
    category: "Engineering",
    slug: "scalable-web-applications",
  },
  {
    id: 5,
    title: "The Future of Mobile App Development: Trends and Best Practices",
    date: "May 12, 2025",
    author: "By",
    image: "/Images/blogs/recent-2.png",
    category: "Product Design",
    slug: "mobile-app-development",
  },
  {
    id: 6,
    title: "AI-Powered Automation: Transforming Business Operations",
    date: "May 10, 2025",
    author: "By",
    image: "/Images/blogs/recent-3.png",
    category: "AI & Automation",
    slug: "ai-powered-automation",
  },
  {
    id: 7,
    title: "User Experience Design: Creating Intuitive Digital Products",
    date: "May 8, 2025",
    author: "By",
    image: "/Images/blogs/recent-1.png",
    category: "Product Design",
    slug: "user-experience-design",
  },
  {
    id: 8,
    title: "Case Study: Successful Digital Transformation Journey",
    date: "May 5, 2025",
    author: "By",
    image: "/Images/blogs/recent-2.png",
    category: "Case Studies",
    slug: "digital-transformation-case-study",
  },
  {
    id: 9,
    title: "Tech Culture: Building High-Performance Development Teams",
    date: "May 3, 2025",
    author: "By",
    image: "/Images/blogs/recent-3.png",
    category: "Tech Culture",
    slug: "tech-culture-development-teams",
  },
]

export default function RecentPostsSection({ selectedCategory, onClearFilter }) {
  const filteredPosts = selectedCategory 
    ? recentPosts.filter(post => post.category === selectedCategory)
    : recentPosts;

  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto scroll-fade-up">
        <div className="flex items-center justify-between mb-6 sm:mb-7 md:mb-8">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-[110%] sm:leading-[100%]">
            Recent Posts
          </h2>
          {selectedCategory && onClearFilter && (
            <button
              onClick={onClearFilter}
              className="text-[#57BB6D] text-sm sm:text-base hover:text-[#57BB6D]/80 transition-colors"
            >
              Clear Filter
            </button>
          )}
        </div>
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No posts found for this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug || 'it-consulting'}`}
              className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all cursor-pointer block"
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
                <div className="mb-2 sm:mb-3">
                  <span className="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm text-[#57BB6D] bg-[#57BB6D]/10 rounded-full border border-[#57BB6D]/20">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-white text-base sm:text-lg font-medium mb-2 sm:mb-2 md:mb-3 group-hover:text-emerald-400 transition-colors leading-[110%] sm:leading-[100%]">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-gray-400 text-xs sm:text-sm">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
          </div>
        )}
      </div>
    </section>
  )
}
