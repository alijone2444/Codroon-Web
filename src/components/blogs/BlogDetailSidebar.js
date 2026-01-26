"use client";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import blogsData from "@/constants/blogs.json";
import { encodeImagePath } from "@/utils/imageHelper";

// Get top 3 recent posts
const recentPosts = blogsData
  .slice(0, 3)
  .map(blog => ({
    id: blog.id,
    title: blog.title,
    date: blog.date,
    author: blog.author,
    image: blog.heroImage || "/Images/laptop.jpg",
    slug: blog.slug
  }));

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
  return (
    <div className="space-y-6">
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
                  src={encodeImagePath(post.image) || "/Images/laptop.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                  onError={(e) => {
                    e.target.src = "/Images/laptop.jpg";
                  }}
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
    </div>
  );
}
