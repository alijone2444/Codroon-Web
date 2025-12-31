"use client"

import { Search } from "lucide-react"
import { useState } from "react"
import { categoryCards } from "./constant"

const categories = [
  "Latest AI trends",
  "Product design insights",
  "Startup scaling stories",
  "Data Privacy",
  "Remote Leadership",
]

export default function BlogsCategoriesSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:h-[619px] flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">

        {/* Search + Filters Card */}
        <div
          className="
            relative mx-auto my-8 sm:my-12 md:my-16
            rounded-2xl md:rounded-[1.75rem]
            p-4 sm:p-6 md:p-8
            overflow-hidden
            border border-white/10
          "
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(16, 244, 66, 0.18) 0%,
                #14243B 45%,
                #14243B 55%,
                rgba(16, 244, 66, 0.18) 100%
              )
            `,
          }}
        >
          {/* Glow */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#10F442] opacity-[0.06] blur-[120px] pointer-events-none" />

          {/* Search Bar */}
          <div className="relative w-full sm:max-w-2xl md:max-w-4xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4 sm:w-5 sm:h-5" />

            <input
              type="text"
              placeholder="Ask Codroon AI: What should I read?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                w-full
                bg-white/5 backdrop-blur-md
                border border-white/10
                rounded-full
                py-3 sm:py-3 md:py-4
                pl-10 sm:pl-12 pr-10 sm:pr-12
                text-sm sm:text-base
                text-white
                placeholder:text-white/30
                focus:outline-none
                focus:ring-2 focus:ring-[#10F442]/50
                transition-all
              "
            />

            <Search className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-[#10F442] transition-colors" />
          </div>

          {/* Filter Pills */}
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-5
              gap-2 sm:gap-3
              mx-auto
              justify-items-center
            "
          >
            {categories.map((category) => (
              <button
                key={category}
                className="
                  w-full
                  px-3 sm:px-4
                  py-2 sm:py-2.5
                  bg-white/5
                  hover:bg-[#10F442]/20
                  backdrop-blur-sm
                  border border-white/10
                  rounded-xl
                  text-white/80
                  text-xs sm:text-sm
                  transition-all
                  hover:text-white
                  hover:border-[#10F442]/30
                "
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-7 md:mb-8 leading-[110%] sm:leading-[100%]">
            Categories
          </h2>

          <div
            className="overflow-x-auto pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="flex gap-4 sm:gap-5 md:gap-6 min-w-max">
              {categoryCards.map((card) => (
                <div
                  key={card.title}
                  className="
                    flex-shrink-0
                    w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px]
                    bg-gradient-to-br from-slate-800/50 to-slate-900/50
                    backdrop-blur-sm
                    border border-slate-700/50
                    rounded-2xl
                    p-4 sm:p-6 md:p-8
                    cursor-pointer
                    transition-all
                    hover:border-emerald-500/50
                    group
                  "
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-3 md:mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-white text-sm sm:text-base md:text-xl font-medium leading-[110%] sm:leading-[100%]">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
