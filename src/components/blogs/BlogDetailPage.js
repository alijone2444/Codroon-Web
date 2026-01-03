"use client";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import BlogDetailSidebar from "./BlogDetailSidebar";

export default function BlogDetailPage({ post }) {
  return (
    <div className="w-full bg-[#0F172A] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden mb-[100px]">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-barlow font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[110%] text-white mb-4">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[157px] pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Article Content */}
          <article className="flex-1 max-w-[1034px]">
            {/* Date and Author */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6">
              <div className="flex items-center gap-2 text-[#74787C]">
                <Calendar className="w-4 h-4 text-[#44915C]" />
                <span className="font-barlow text-base">{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[#74787C]">
                <User className="w-4 h-4 text-[#44915C]" />
                <span className="font-barlow text-base">{post.author}</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {post.content.map((item, index) => {
                if (item.type === 'paragraph') {
                  return (
                    <p
                      key={index}
                      className="font-barlow font-normal text-base sm:text-lg text-white leading-[155%]"
                    >
                      {item.text}
                    </p>
                  );
                }
                
                if (item.type === 'quote') {
                  return (
                    <div
                      key={index}
                      className="bg-[#44915C] rounded-[15px] p-12 md:p-16 relative my-8"
                    >
                      <div className="absolute top-[50px] left-[50px] w-20 h-20 bg-[#44915C] rounded-full flex items-center justify-center border-2 border-white/20">
                        <span className="text-white text-3xl font-semibold">"</span>
                      </div>
                      <p className="font-barlow font-extrabold text-xl text-[#1A1A1A] leading-[155%] mb-4 ml-[160px] max-w-[588px]">
                        {item.quote}
                      </p>
                      <div className="ml-[160px]">
                        <p className="font-barlow font-extrabold text-lg text-[#44915C] mb-1">
                          {item.author}
                        </p>
                        <p className="font-barlow font-normal text-base text-[#1A1A1A]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  );
                }
                
                if (item.type === 'image') {
                  return (
                    <div key={index} className="my-8 rounded-[15px] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={810}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  );
                }
                
                return null;
              })}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-[510px] flex-shrink-0">
            <BlogDetailSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
