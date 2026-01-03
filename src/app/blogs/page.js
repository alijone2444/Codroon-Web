"use client";
import { useState } from "react";
import BlogsHeroSection from "@/components/blogs/BlogsHeroSection"
import BlogsCategoriesSection from "@/components/blogs/BlogsCategoriesSection"
import RecentPostsSection from "@/components/blogs/RecentPostsSection"
import TimelinePostsSection from "@/components/blogs/TimelinePostsSection"
import BlogsCTASection from "@/components/blogs/BlogsCTASection"
import HorizontalMarginWrapper from "@/components/wrappers/horizontalmarginWrapper"

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="w-full bg-[#0F172A]">
      <BlogsHeroSection />
      <HorizontalMarginWrapper left={80} right={80}>
        <BlogsCategoriesSection 
          selectedCategory={selectedCategory} 
          onCategorySelect={setSelectedCategory} 
        />
        <RecentPostsSection 
          selectedCategory={selectedCategory} 
          onClearFilter={() => setSelectedCategory(null)} 
        />
        <TimelinePostsSection selectedCategory={selectedCategory} />
        <BlogsCTASection />
      </HorizontalMarginWrapper>
    </div>
  )
}
