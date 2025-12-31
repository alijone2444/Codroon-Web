import Image from "next/image"

const aiTools = [
  { name: "OpenAI GPT models", subtitle: "Powerful AI capabilities from OpenAI", image: "/Images/integrations/tools-1.png" },
  { name: "Anthropic Claude", subtitle: "Advanced AI for reasoning", image: "/Images/integrations/tools-2.png" },
  { name: "Llama", subtitle: "Open Source intelligence", image: "/Images/integrations/tools-3.png" },
  { name: "Gemini", subtitle: "Google Generative AI Reasoning", image: "/Images/integrations/tools-4.png" },
  { name: "Custom agent infrastructure", subtitle: "Tailored for Your Org", image: "/Images/integrations/tools-5.png" },
  { name: "Browser automation agents", subtitle: "Web automation bots", image: "/Images/integrations/tools-6.png" },
  { name: "Email assistant agents", subtitle: "Email flow automation", image: "/Images/integrations/tools-7.png" },
  { name: "CRM agents", subtitle: "Sales force automation", image: "/Images/integrations/tools-8.png" },
]

export default function AIToolsSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 leading-[110%] sm:leading-[100%]">AI That Works with Your Tools</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {aiTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col items-center text-center"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-sm sm:text-base font-medium mb-1 sm:mb-2">{tool.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-[140%] sm:leading-[150%]">{tool.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
