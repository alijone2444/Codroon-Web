"use client";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import BlogDetailSidebar from "./BlogDetailSidebar";
import Typewriter from "@/components/libs/typewriter";
import { encodeImagePath } from "@/utils/imageHelper";

export default function BlogDetailPage({ post }) {
  return (
    <div className="w-full bg-[#0F172A] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-start justify-start overflow-hidden mb-[100px]">
        <Image
          src={encodeImagePath(post.heroImage) || "/Images/laptop.jpg"}
          alt={post.title}
          fill
          className="object-cover opacity-25"
          priority
          unoptimized
          onError={(e) => {
            e.target.src = "/Images/laptop.jpg";
          }}
        />
        <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
        <div className="relative z-10 container mx-auto flex flex-col items-start justify-center text-left w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-[120px]">
          <h1 className="font-barlow font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[110%] text-white mb-4 max-w-[90vw] lg:max-w-[1000px] animate-slide-in-left">
            <Typewriter text={post.title} speed={50} />
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[157px] pb-16">
        {/* Sidebar - Floating on right */}
        <aside className="w-full lg:w-[510px] lg:float-right lg:ml-8 mb-8">
          <div className="lg:sticky lg:top-8">
            <BlogDetailSidebar />
          </div>
        </aside>

        {/* Article Content */}
        <article className="w-full">
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
                    className="bg-[#44915C] rounded-[15px] p-12 md:p-16 relative my-8 clear-right"
                  >
                    <div className="absolute top-[50px] left-[50px] w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src="/cordroon-icon.png"
                        alt="Codroon Logo"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div className="font-barlow font-extrabold text-xl text-[#1A1A1A] leading-[155%] mb-4 ml-[160px] max-w-[588px]">
                      <Typewriter text={item.quote} speed={30} />
                    </div>
                    <div className="ml-[160px]">
                      <p className="font-barlow font-extrabold text-lg text-[#44915C] mb-1">
                        {item.author || 'By Codroon'}
                      </p>
                      <p className="font-barlow font-normal text-base text-[#1A1A1A]">
                        {item.role || 'Top Author'}
                      </p>
                    </div>
                  </div>
                );
              }

              if (item.type === 'image') {
                return (
                  <div key={index} className="my-8 rounded-[15px] overflow-hidden mx-auto max-w-[810px]">
                    <Image
                      src={encodeImagePath(item.src) || "/Images/laptop.jpg"}
                      alt={item.alt || post.title}
                      width={810}
                      height={400}
                      className="w-full h-auto object-cover"
                      unoptimized
                      onError={(e) => {
                        e.target.src = "/Images/laptop.jpg";
                      }}
                    />
                  </div>
                );
              }

              if (item.type === 'heading') {
                return (
                  <h2
                    key={index}
                    className="font-barlow font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-[110%] mt-8 mb-4"
                  >
                    {item.text}
                  </h2>
                );
              }

              return null;
            })}
          </div>
        </article>
      </div>
    </div>
  );
}
