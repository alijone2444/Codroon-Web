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
    <section className="relative w-full h-[619px] flex items-center justify-center overflow-hidden ">
      <div className="max-w-6xl mx-auto ">
        {/* Search Bar */}
        <div className="rounded-3xl p-8 my-16"  style={{
      background: 'linear-gradient(135deg, #14243B 0%, #1e3d5c 20%, #0f4d5c 40%, #1a5a6b 60%, #0d4a5a 80%, #14243B 100%)'}}>
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Ask Codroon AI: What should I read?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-4 pl-12 pr-12 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-5 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-semibold mb-8">Categories</h2>
          <div 
            className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide" 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
              {categoryCards.map((card) => (
                <div
                  key={card.title}
                  className="flex-shrink-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors cursor-pointer group w-[280px]"
                >
                  <div className="text-4xl mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-white text-xl font-medium">{card.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
