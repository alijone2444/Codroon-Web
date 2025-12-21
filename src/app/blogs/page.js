import BlogsHeroSection from "@/components/blogs/BlogsHeroSection"
import BlogsCategoriesSection from "@/components/blogs/BlogsCategoriesSection"
import RecentPostsSection from "@/components/blogs/RecentPostsSection"
import TimelinePostsSection from "@/components/blogs/TimelinePostsSection"
import BlogsCTASection from "@/components/blogs/BlogsCTASection"

export default function BlogsPage() {
  return (
    <div className="w-full bg-[#0F172A]">
      <BlogsHeroSection />
      <BlogsCategoriesSection />
      <RecentPostsSection />
      <TimelinePostsSection />
      <BlogsCTASection />
    </div>
  )
}
