"use client";
import { useState } from "react";
import { Search, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const recentPosts = [
  {
    id: 1,
    title: "How Businesses Can Leverage Data for Smarter Decisions",
    date: "May 17, 2025",
    author: "By",
    image: "/Images/blogs/blog-recent-1-30fef9.png",
    slug: "data-driven-decisions"
  },
  {
    id: 2,
    title: "IT Industry Key Strategies for Business Growth",
    date: "May 17, 2025",
    author: "By",
    image: "/Images/blogs/blog-recent-2-30fef9.png",
    slug: "it-strategies-growth"
  },
  {
    id: 3,
    title: "Get The Most Out Of The Creativity",
    date: "January 10, 2024",
    author: "By",
    image: "/Images/blogs/blog-recent-3-30fef9.png",
    slug: "creativity-tips"
  },
];

const categories = [
  { name: "Clock Fly Strategy", count: 2 },
  { name: "Brand Design Identity", count: 3 },
  { name: "Digital Strategy", count: 1 },
  { name: "Web Development", count: 1 },
  { name: "Email Marketing", count: 1 },
];

const popularTags = [
  "Agency",
  "Business",
  "Digital",
  "Digital Agency",
  "Marketing",
  "Product",
  "Startup",
  "Technology",
  "Trendy",
];

export default function BlogDetailSidebar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="bg-[#161616] rounded-[15px] p-5">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-[#161616] border border-[#EAEBEE] rounded-[10px] px-5 py-3 text-white placeholder:text-[#757575] font-barlow text-base focus:outline-none focus:border-[#57BB6D]"
          />
          <button className="bg-[#57BB6D] rounded-[10px] w-[55px] h-[55px] flex items-center justify-center hover:bg-[#44915C] transition-colors">
            <Search className="w-4 h-4 text-[#161616]" />
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-[#161616] rounded-[15px] p-5">
        <h3 className="font-barlow font-extrabold text-xl text-white mb-6">
          Recent Posts
        </h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="block group"
            >
              <div className="relative w-full h-[130px] rounded-[10px] overflow-hidden mb-3">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center gap-4 text-[#74787C] text-sm mb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#57BB6D]" />
                  <span className="font-barlow">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#57BB6D]" />
                  <span className="font-barlow">{post.author}</span>
                </div>
              </div>
              <h4 className="font-barlow font-extrabold text-lg text-white group-hover:text-[#57BB6D] transition-colors leading-[125%]">
                {post.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#161616] rounded-[15px] p-5">
        <h3 className="font-barlow font-extrabold text-xl text-white mb-6">
          Categories
        </h3>
        <div className="space-y-0">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`py-4 border-b border-[#DEE1E9] last:border-b-0 ${
                index === categories.length - 1 ? '' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-barlow font-semibold text-lg text-[#74787C]">
                  {category.name}
                </span>
                <span className="font-barlow font-semibold text-lg text-[#74787C]">
                  ({category.count})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-[#161616] rounded-[15px] p-5">
        <h3 className="font-barlow font-extrabold text-xl text-white mb-6">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-3">
          {popularTags.map((tag, index) => (
            <button
              key={index}
              className="px-5 py-2 bg-[#161616] border border-[#EAEBEE] rounded-[40px] text-[#74787C] font-barlow text-sm hover:border-[#57BB6D] hover:text-[#57BB6D] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
