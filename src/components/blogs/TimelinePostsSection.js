import Image from "next/image"

const timelinePosts = [
  {
    date: "OCT 26, 2024",
    title: "Quantum Computing: A Practical Guide for Business Leaders",
    description: "Understanding the potential impact and preparing your organization for the quantum revolution.",
    image: "/Images/blogs/blogs-date-1.png",
  },
  {
    date: "OCT 26, 2024",
    title: "Quantum Computing: A Practical Guide for Business Leaders",
    description: "Understanding the potential impact and preparing your organization for the quantum revolution.",
    image: "/Images/blogs/blogs-date-section-2.png",
  },
]


export default function TimelinePostsSection() {
  return (
    <section className="w-full my-16 py-16 px-6 bg-[#0f1729]">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Vertical Line with Glow Effect - Centered */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-[1]">
            <svg width="133" height="589" viewBox="0 0 133 589" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
              <g filter="url(#filter0_dddddd_1508_279)">
                <line x1="66.4066" y1="65.9066" x2="66.4066" y2="522.907" stroke="#57BB6D"/>
              </g>
              <defs>
                <filter id="filter0_dddddd_1508_279" x="1.52588e-05" y="1.52588e-05" width="132.813" height="588.813" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="0.784602"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.733333 0 0 0 0 0.427451 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1508_279"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="1.5692"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.733333 0 0 0 0 0.427451 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow_1508_279" result="effect2_dropShadow_1508_279"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="5.49221"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.733333 0 0 0 0 0.427451 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="effect2_dropShadow_1508_279" result="effect3_dropShadow_1508_279"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="10.9844"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.733333 0 0 0 0 0.427451 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="effect3_dropShadow_1508_279" result="effect4_dropShadow_1508_279"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="18.8304"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.733333 0 0 0 0 0.427451 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="effect4_dropShadow_1508_279" result="effect5_dropShadow_1508_279"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="32.9533"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.733333 0 0 0 0 0.427451 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="effect5_dropShadow_1508_279" result="effect6_dropShadow_1508_279"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_1508_279" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>

          {/* Timeline Entries */}
          <div className="relative w-full space-y-32">
            {timelinePosts.map((post, index) => {
              const isFirst = index === 0

              return (
                <div key={index} className="relative flex items-center">
                  {isFirst ? (
                    <>
                      {/* First Entry: Content card on LEFT, Node on vertical line, Date on RIGHT */}
                      {/* Left side content */}
                      <div className="flex-1 flex justify-end items-center pr-8 relative z-[30]">
                        <div className="flex items-center gap-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-[#57BB6D]/50 transition-all duration-300 cursor-pointer group">
                          <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-slate-700/50">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white text-lg font-medium mb-2 leading-tight group-hover:text-[#57BB6D] transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{post.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Center: Connection node on vertical line with horizontal lines extending from it */}
                      <div className="flex-shrink-0 relative z-[20] flex items-center">
                        {/* Horizontal line to left (content card) - extends to connect */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-20 h-0.5 bg-[#57BB6D] z-[2]"></div>
                        {/* Node */}
                        <div className="w-6 h-6 rounded-full bg-[#57BB6D] shadow-lg shadow-[#57BB6D]/50 relative z-[30]"></div>
                        {/* Horizontal line to right (date) - extends to connect */}
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-20 h-0.5 bg-[#57BB6D] z-[2]"></div>
                      </div>

                      {/* Right side: Date */}
                      <div className="flex-1 flex justify-start items-center pl-8 relative z-[30]">
                        <div className="bg-[#57BB6D] text-white rounded-full w-24 h-24 flex items-center justify-center font-semibold text-xs text-center shadow-lg shadow-[#57BB6D]/50">
                          <span className="leading-tight px-2">{post.date}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Subsequent Entries: Date on LEFT, Node on vertical line, Content card on RIGHT */}
                      {/* Left side: Date */}
                      <div className="flex-1 flex justify-end items-center pr-8 relative z-[30]">
                        <div className="bg-[#57BB6D] text-white rounded-full w-24 h-24 flex items-center justify-center font-semibold text-xs text-center shadow-lg shadow-[#57BB6D]/50">
                          <span className="leading-tight px-2">{post.date}</span>
                        </div>
                      </div>

                      {/* Center: Connection node on vertical line with horizontal lines extending from it */}
                      <div className="flex-shrink-0 relative z-[20] flex items-center">
                        {/* Horizontal line to left (date) - extends to connect */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-20 h-0.5 bg-[#57BB6D] z-[2]"></div>
                        {/* Node */}
                        <div className="w-6 h-6 rounded-full bg-[#57BB6D] shadow-lg shadow-[#57BB6D]/50 relative z-[30]"></div>
                        {/* Horizontal line to right (content card) - extends to connect */}
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-20 h-0.5 bg-[#57BB6D] z-[2]"></div>
                      </div>

                      {/* Right side content */}
                      <div className="flex-1 flex justify-start items-center pl-8 relative z-[30]">
                        <div className="flex items-center gap-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-[#57BB6D]/50 transition-all duration-300 cursor-pointer group">
                          <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-slate-700/50">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white text-lg font-medium mb-2 leading-tight group-hover:text-[#57BB6D] transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{post.description}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
