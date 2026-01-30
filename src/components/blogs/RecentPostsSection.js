import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import blogsData from "@/constants/blogs.json"
import { encodeImagePath } from "@/utils/imageHelper"

export default function RecentPostsSection({ selectedCategory, onClearFilter }) {
  // Get top 9 blogs (ranks 1-9)
  const top9Blogs = blogsData
    .filter(blog => blog.rank <= 9)
    .sort((a, b) => a.rank - b.rank)
    .map(blog => ({
      id: blog.id,
      title: blog.title,
      date: blog.date,
      author: blog.author,
      image: blog.heroImage || "/Images/laptop.jpg",
      category: blog.category,
      slug: blog.slug,
    }));

  const filteredPosts = selectedCategory
    ? top9Blogs.filter(post => post.category === selectedCategory)
    : top9Blogs;

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
            {filteredPosts.map((post) => {
              const isEmergentLabs = post.title.includes('Emergent Labs');
              return (
                <Link
                  key={post.id}
                  href={`/blogs/${post.slug || 'it-consulting'}`}
                  className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all cursor-pointer block"
                >
                  <div
                    className="relative h-40 sm:h-44 md:h-52 overflow-hidden flex items-center justify-center"
                    style={{ backgroundColor: isEmergentLabs ? '#252527' : 'rgb(30 41 59 / 0.5)' }}
                  >
                    {typeof post.image === 'string' ? (
                      <Image
                        src={encodeImagePath(post.image) || "/Images/laptop.jpg"}
                        alt={post.title}
                        fill={!isEmergentLabs}
                        width={isEmergentLabs ? 253 : undefined}
                        height={isEmergentLabs ? 152 : undefined}
                        className={isEmergentLabs
                          ? "object-contain group-hover:scale-110 transition-transform duration-300"
                          : "object-cover object-center scale-110 group-hover:scale-125 transition-transform duration-300"
                        }
                        unoptimized
                        onError={(e) => {
                          e.target.src = "/Images/laptop.jpg";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src="/Images/laptop.jpg"
                          alt={post.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
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
              );
            })}
          </div>
        )}
      </div>
    </section>
  )
}
